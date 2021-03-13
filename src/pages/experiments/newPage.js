import React, { useState } from 'react';

import Card from './Components/Card/Card';
import AddNewCard from './Components/Card/AddNewCard';

import { TestData } from './Components/Card/testData';

import './newPage.css';

const newPage = () => {
  const data = { title: 'Title', description: "This is a test Description. " };
  const specialCard = {title: 'Hello, This is a special long ass card title. Could be loooong. Or cap at 25ch?', description: "And hey it's got a pretty long description too. Son. Of. A. Bitch."}

  const jsonData = TestData;
  console.log(jsonData);

  const cardData = [];
  for (let i = 0; i < jsonData.length; i++) {
    cardData.push(TestData[i]);
  }

  cardData.push(data, specialCard, data, data);

  return (
    <div className="newPage-container">
      <div className="cards-container">
        {cardData.map((data, index) => {
          return <Card title={data.title} description={data.description}/>;
        })}
        <AddNewCard />
      </div>
    </div>
  );
};

export default newPage;
