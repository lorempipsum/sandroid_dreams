import React, {
  useState,
  useEffect,
} from 'react';

import axios from 'axios';

import Layout from '../../components/Layout';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';

const INCREMENT_API_URL =
  'https://7fqtmbuhtl.execute-api.us-east-1.amazonaws.com/dev/increment';
const GET_COUNT_API_URL =
  'https://7fqtmbuhtl.execute-api.us-east-1.amazonaws.com/dev/getCountLambda';

const DynamoDDBButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(GET_COUNT_API_URL)
      .then((res) =>
        setCount(res.data.count)
      );
  }, []);

  const handleClick = () => {
    axios
      .get(INCREMENT_API_URL)
      .then((res) =>
        setCount(res.data.count)
      );
  };

  return (
    <Layout>
      <ButtonContainer>
        <Button
          onClick={() => handleClick()}
          id="lambdaRunner"
          label="Run The Lambda"
        ></Button>
      </ButtonContainer>
      <div
        style={{ textAlign: 'center' }}
      >
        {count}
      </div>
    </Layout>
  );
};

export default DynamoDDBButton;
