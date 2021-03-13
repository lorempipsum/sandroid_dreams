import React from 'react';

import { randomColor } from '../../Utilities/randomColor';

import ChilliIcon from './ChilliIcon';

import './Card.css';

const Card = ({
  title,
  description,
}) => {
  const backgroundColor = randomColor();
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="card"
    >
      <div className="card-title">
        {title}
      </div>
      <div className="card-description">
        {description}
      </div>
      <div className="card-tags">
        <ChilliIcon />
      </div>
    </div>
  );
};

export default Card;
