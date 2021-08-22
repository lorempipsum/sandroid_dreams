import React, { useState } from 'react';

import axios from 'axios';

import Layout from '../../components/Layout';
import ButtonContainer from '../../components/ButtonContainer';
import Button from '../../components/Button';

const API_URL =
  'https://mhzitx2idc.execute-api.us-east-1.amazonaws.com/dev/hello';

const DynamoDDBButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    axios
      .get(API_URL)
      .then((res) =>
        alert(
          JSON.stringify(
            res.data.message
          )
        )
      );
    return setCount(count + 1);
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
