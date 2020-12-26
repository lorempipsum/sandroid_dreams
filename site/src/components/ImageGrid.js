import React, {
  useState,
  useEffect,
} from 'react';

import Img from 'gatsby-image';

import { Image } from './Image';

const main = {
  display: 'grid',
};

const imageGrid = {
  display: 'grid',
  gridTemplateColumns:
    '1fr 1fr 1fr 1fr 1fr',
  gridTemplateRows: 'auto',
};

const lightbox = {
  background: 'rgba(0, 0, 0, 0.5)',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  position: 'fixed',
  zIndex: 500,
};

const previousButton = {
  left: 0,
  top: 0,
  marginTop: '50vh',
  marginLeft: '5vw',
  height: '20px',
  width: '20px',
  position: 'fixed',
  zIndex: 5000,
};

const nextButton = {
  left: 0,
  top: 0,
  marginTop: '50vh',
  marginLeft: '94vw',
  height: '20px',
  width: '20px',
  position: 'fixed',
  zIndex: 5000,
};

const lightboxImage = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '90vh',
  width: '90vw',
  zIndex: '1000',
  marginLeft: '5vw',
  marginTop: '5vh',
  objectFit: 'contain',
};

const lightboxImageOverlay = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '90vh',
  width: '90vw',
  zIndex: '1000',
  marginLeft: '5vw',
  marginTop: '5vh',
  objectFit: 'contain',
  zIndex: 5000,
  opacity:0,
};

const ImageGrid = ({ images }) => {
  // wtf is images?
  // Something like that I guess:
  // childImageSharp {
  //   thumb: fluid(
  //     maxWidth: 150
  //     maxHeight: 150
  //   ) {
  //     ...GatsbyImageSharpFluid
  //   }
  //   full: fluid(
  //     maxWidth: 1024
  //   ) {
  //     ...GatsbyImageSharpFluid
  //   }
  // }
  // New style with all images in one prop
  // determined if page has scrolled and if the view is on mobile
  const [isOpen, setIsOpen] = useState(
    false
  );
  const [image, setImage] = useState(0);

  const thumbsArray = images
    .filter(
      (thumb) => thumb !== undefined
    )
    .map(({ thumb }) => thumb);
  console.log(thumbsArray);

  const fullArray = images
    .filter(
      (full) => full !== undefined
    )
    .map(({ full }) => full);
  console.log(fullArray);

  const openLightbox = (index) => {
    setIsOpen(true);
    setImage(index);
  };

  const closeLightbox = (index) => {
    setIsOpen(false);
    setImage(0);
  };

  return (
    <>
      {isOpen && (
        <div style={lightbox}>
          <button
            style={nextButton}
            onClick={() =>
              setImage(image + 1)
            }
          ></button>
          <button
            style={previousButton}
            onClick={() =>
              setImage(image - 1)
            }
          ></button>
          <button
            style={lightboxImageOverlay}
            onClick={() =>
              closeLightbox()
            }
          ></button>
          <Img
            fluid={fullArray[image]}
            imgStyle={lightboxImage}
          ></Img>
        </div>
      )}
      <div style={imageGrid}>
        {thumbsArray.map(
          (thumbnail, index) => {
            return (
              <div
                onClick={() =>
                  openLightbox(index)
                }
              >
                <Img
                  fluid={thumbnail}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default ImageGrid;
