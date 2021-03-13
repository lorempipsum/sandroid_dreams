import React from 'react';
import plusIcon from './plus-button.png';

import './Card.css';

const AddNewCard = ({
}) => {
  return (
    <div
      className="card new-card"
    >
      <div className="card-title">
        Add New Card
      </div>
        <img className="plusIcon" src={plusIcon} />
    </div>
  );
};

export default AddNewCard;
