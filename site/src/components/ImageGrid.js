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
  marginLeft: '2vw',
  position: 'fixed',
  zIndex: 6000,
  height: '100vh',
  border: 'none',
  background: 'none',
  //TODO: does removing outline hamper accessibility?
  outline: 'none',
  cursor: 'pointer',
};

const nextButton = {
  left: 0,
  top: 0,
  // If Margin + Padding add up to 94vw, then the button is 6vw away from the right edge of the screen.
  marginLeft: '74vw',
  paddingLeft: '20vw',
  position: 'fixed',
  zIndex: 6000,
  height: '100vh',
  border: 'none',
  background: 'none',
  outline: 'none',
  cursor: 'pointer',
};

const lightboxImage = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '90vh',
  width: '90vw',
  zIndex: '1000',
  marginLeft: '5vw',
  paddingRight: '20vw',
  marginTop: '5vh',
  objectFit: 'contain',
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
        <>
          <button
            style={nextButton}
            onClick={() =>
              setImage(image + 1)
            }
          >
            <div>
              {' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 25 25"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </button>
          <button
            style={previousButton}
            onClick={() =>
              setImage(image - 1)
            }
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 25 25"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </div>
          </button>
          <div
            onClick={() =>
              closeLightbox()
            }
            style={lightbox}
          >
            <div
              style={{
                color: 'blue',
                zIndex: 6001,
                width: '200%',
              }}
            ></div>
            <Img
              fluid={fullArray[image]}
              imgStyle={lightboxImage}
            ></Img>
          </div>
        </>
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
