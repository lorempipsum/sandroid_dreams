'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
  region: 'us-east-1',
});

const dynamoDb =
  new AWS.DynamoDB.DocumentClient();

// 1. When lambda is called, get the current count from DDB.
const getCount = async () => {
  console.log('Getting count');
  var params = {
    TableName: process.env.CLICKS_TABLE,
    Key: {
      countId: 1,
    },
  };
  const response = await dynamoDb
    .get(params, function (err, data) {
      if (err) {
        console.log(
          `Error getting DDB item value: ${err}`
        );
        return {
          statusCode: 404,
          body: JSON.stringify(
            {
              message: `Error getting count: ${err}`,
            },
            null,
            2
          ),
        };
      } else {
        console.log(data);
      }
    })
    .promise();
  return response.Item.count;
  // return dynamoDb.getValueOfTable(clickCount) or something
};

// 2. After current count is gotteth, update DB with thy new count
const incrementCount = async (
  currentCount
) => {
  let newCount;

  if (currentCount === undefined) {
    newCount = 0;
  } else {
    newCount = currentCount + 1;
  }

  console.log(
    `Incrementing count in ddb. New Count is: ${newCount}`
  );
  var params = {
    TableName: process.env.CLICKS_TABLE,
    Item: {
      countId: 1,
      count: newCount,
    },
  };

  await dynamoDb
    .put(params, function (err, data) {
      if (err) {
        console.log(
          `Error incrementing ddb data: ${err}`
        );
      } else {
        console.log(data);
        return data;
      }
    })
    .promise();
  return newCount;
};

module.exports.increment = async () => {
  const count = await getCount();
  console.log(count);
  const newCount = await incrementCount(
    count
  );
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        count: newCount,
        message: `Hello. Incremented count up to: ${count}`,
      },
      null,
      2
    ),
  };
};

module.exports.getCountLambda =
  async () => {
    const count = await getCount();

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          count: count,
          message: `Hello. Got count from dynamodb: ${count}`,
        },
        null,
        2
      ),
    };
  };
