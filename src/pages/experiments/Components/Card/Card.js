import React from 'react';

import {
  complementaryColor,
  randomColor,
} from '../../../../components/utilities/randomColor';

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
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="card glowing "
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
