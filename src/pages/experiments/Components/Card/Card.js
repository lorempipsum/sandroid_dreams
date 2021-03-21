import React from 'react';

import { complementaryColor, randomColor } from '../../Utilities/randomColor';

import ChilliIcon from './ChilliIcon';

import './Card.css';

const Card = ({
  title,
  description,
}) => {
  const backgroundColor = randomColor();
  const tagsColor = complementaryColor(
    backgroundColor
  );
  return (
    <div className="card">
      <div className="card-title">
        {title}
      </div>
      <div className="card-description">
        {description}
      </div>
      <div
        style={{
          backgroundColor: tagsColor,
        }}
        className="card-tags"
      >
        <ChilliIcon />
      </div>
      <div
        style={{
          backgroundColor: backgroundColor,
        }}
        className="box"
      ></div>
    </div>
  );
};

export default Card;
