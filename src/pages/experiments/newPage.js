import React, {
  useState,
  useEffect,
} from 'react';

import Card from './Components/Card/Card';
import AddNewCard from './Components/Card/AddNewCard';

import { TestData } from './Components/Card/testData';

import './newPage.css';

const NewPage = () => {
  const data = {
    title: 'Title',
    description:
      'This is a test Description. ',
  };
  const specialCard = {
    title:
      'Hello, This is a special long ass card title. Could be loooong. Or cap at 25ch?',
    description:
      "And hey it's got a pretty long description too. Son. Of. A. Bitch.",
  };
  const cardData = [];

  const [
    cardsToRender,
    updateCardsToRender,
  ] = useState([]);

  useEffect(() => {
    const jsonData = TestData;
    console.log(jsonData);

    for (
      let i = 0;
      i < jsonData.length;
      i++
    ) {
      cardData.push(TestData[i]);
    }

    cardData.push(
      data,
      specialCard,
      data,
      data
    );
    updateCardsToRender(cardData);
  }, []);

  const addCardData = () => {
    updateCardsToRender(
      (cardsToRender) => [
        ...cardsToRender,
        data,
      ]
    );
  };

  return (
    <div className="newPage-container">
      <div className="cards-container">
        {cardsToRender.map(
          (data, index) => {
            return (
              <Card
                title={data.title}
                description={
                  data.description
                }
              />
            );
          }
        )}
        <div onClick={addCardData}>
          <AddNewCard />
        </div>
      </div>
    </div>
  );
};

export default NewPage;
