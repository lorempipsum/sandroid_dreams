import React, { useState } from 'react';

import Img from 'gatsby-image';
import styles from './GalleryImageGrid.module.css';

const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 25 25"
    >
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 25 25"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  );
};

export const GalleryImageGrid = ({
  images,
}) => {
  // wtf is {images}?
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
  const [isOpen, setIsOpen] =
    useState(false);
  const [image, setImage] = useState(0);

  const thumbsArray = images
    .filter(
      (thumb) =>
        thumb !== undefined &&
        thumb !== null
    )
    .map(({ thumb }) => thumb);
  console.log(thumbsArray);

  const fullArray = images
    .filter(
      (full) =>
        full !== undefined &&
        full !== null
    )
    .map(({ full }) => full);
  console.log(fullArray);

  const openLightbox = (index) => {
    setIsOpen(true);
    setImage(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setImage(0);
  };

  const RightButton = () => {
    return (
      <button
        className={
          styles.previousButton
        }
        onClick={() =>
          setImage(image - 1)
        }
      >
        <RightArrow />
      </button>
    );
  };

  const LeftButton = () => {
    return (
      <button
        className={styles.nextButton}
        onClick={() =>
          setImage(image + 1)
        }
      >
        {' '}
        <LeftArrow />
      </button>
    );
  };

  const handleKeyPress = (event) => {
    console.log('KeyPress!');
    if (event.key === 37) {
      setImage(image - 1);
    }
    if (event.key === 39) {
      setImage(image + 1);
    }
    if (
      event.key === 'Escape' ||
      event.key === 27
    ) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <LeftButton />
          <RightButton />
          <div
            tabIndex="0"
            onClick={() =>
              closeLightbox()
            }
            className={styles.lightbox}
          >
            <Img
              fluid={fullArray[image]}
              className={
                styles.lightboxImage
              }
              imgStyle={{
                objectFit: 'contain',
              }}
              fadeIn={true}
              placeholderStyle={{
                opacity: 0,
                border: 'none',
                display: 'none',
              }}
            />
          </div>
        </>
      )}
      <div className={styles.imageGrid}>
        {thumbsArray.map(
          (thumbnail, index) => {
            return (
              <div
                onClick={() =>
                  openLightbox(index)
                }
                style={{
                  cursor: 'pointer',
                }}
                className={
                  styles.thumbnail
                }
              >
                <Img
                  loading="eager"
                  backgroundColor="red"
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

export default GalleryImageGrid;
