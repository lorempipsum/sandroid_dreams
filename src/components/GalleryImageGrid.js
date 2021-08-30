import React, { useState, useEffect } from 'react';

import Img from 'gatsby-image';
// import styles from './GalleryImageGrid.module.css';
import styles from './GalleryImageGridWithBigImages.module.css';

const RightArrow = () => {
  return (
    <div className={styles.arrow}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 25 25"
      >
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
  );
};

const LeftArrow = () => {
  return (
    <div className={styles.arrow}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 25 25"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      </svg>{' '}
    </div>
  );
};

export const LightBox = ({
  imageToDisplay,
  handleKeyPress,
  closeLightbox,
  image,
  setImage,
}) => {
  useEffect(() => {
    window.removeEventListener('keyup', handleKeyPress);

    window.addEventListener('keyup', handleKeyPress);

    // cleanup this component
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, [image]);

  const LeftButton = () => {
    return (
      <button
        className={styles.previousButton}
        onClick={() => handleKeyPress({ key: 'ArrowLeft' })}
      >
        <LeftArrow />
      </button>
    );
  };

  const RightButton = () => {
    return (
      <button
        className={styles.nextButton}
        onClick={() => handleKeyPress({ key: 'ArrowRight' })}
      >
        {' '}
        <RightArrow />
      </button>
    );
  };

  return (
    <>
      <LeftButton />
      <RightButton />
      <div
        tabIndex="0"
        onClick={() => closeLightbox()}
        className={styles.lightbox}
      >
        <Img
          fluid={imageToDisplay}
          className={styles.lightboxImage}
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
  );
};

export const GalleryImageGrid = ({ images }) => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(0);

  const thumbsArray = images
    .filter((thumb) => thumb !== undefined && thumb !== null)
    .map(({ thumb }) => thumb);

  const fullArray = images
    .filter((full) => full !== undefined && full !== null)
    .map(({ full }) => full);

  const openLightbox = (index) => {
    setIsOpen(true);
    setImage(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setImage(0);
  };

  const handleLeftArrow = () => {
    const lastImage = fullArray.length - 1;
    const firstImage = 0;
    if (image === firstImage) {
      setImage(lastImage);
      return 0;
    }
    setImage(image - 1);

    return 0;
  };

  const handleRightArrow = () => {
    const lastImage = fullArray.length - 1;
    const firstImage = 0;
    if (image === lastImage) {
      setImage(firstImage);
      return 0;
    }
    const newImage = image + 1;
    setImage(newImage);
    return 0;
  };

  const handleKeyPress = (event) => {
    console.log('KeyPress!');
    console.log(event.key);

    if (event.key === 'ArrowLeft') {
      handleLeftArrow();
    }
    if (event.key === 'ArrowRight') {
      handleRightArrow();
    }
    if (event.key === 'Escape' || event.key === 27) {
      console.log('Closing lightbox');

      setIsOpen(false);
    }
    return 0;
  };

  return (
    <>
      {isOpen && (
        <LightBox
          handleKeyPress={handleKeyPress}
          imageToDisplay={fullArray[image]}
          closeLightbox={closeLightbox}
          image={image}
          setImage={setImage}
        ></LightBox>
      )}
      <div className={styles.imageGrid}>
        {thumbsArray.map((thumbnail, index) => {
          return (
            <div
              onClick={() => openLightbox(index)}
              className={styles.thumbnail}
            >
              <Img loading="eager" backgroundColor="red" fluid={thumbnail} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryImageGrid;
