import React from 'react';
import Img from 'gatsby-image';

const main = {
  display: 'grid',
};

const imageGrid = {
  display: 'grid',
  gridTemplateColumns:
    '1fr 1fr 1fr 1fr 1fr',
  gridTemplateRows: 'auto',
};

const ImageGrid = ({ images }) => {
  // New style with all images in one prop
  const thumbsArray = images
    .filter(
      (thumb) => thumb !== undefined
    )
    .map(({ thumb }) => thumb);
  console.log(thumbsArray);

  return (
    <div style={imageGrid}>
      {thumbsArray.map((thumbnail) => {
        return (
          <Img
            fluid={thumbnail}
          />
        );
      })}
    </div>
  );
};

export default ImageGrid;
