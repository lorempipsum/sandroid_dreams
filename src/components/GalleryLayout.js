import React from 'react';
import Title from './Title';
import ArticleLink from './ArticleLink';
import Img from 'gatsby-image';

import styles from './GalleryLayout.module.css';

import Delta3200BackgroundImage from '../data/images/rolls/3/000097180004.jpg';

import '../styles/animations.css';

const GalleryLayout = ({ children, title, heroImage }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <Title title={'sandroid.dev'} />
        </div>

        <div className={styles.content}>
          <div>
            <Img
              fluid={heroImage}
              className={`${styles.heroImage} heroEntrance`}
            />
          </div>
          {title && (
            <div className={styles.heroText}>
              <h1>{title}</h1>{' '}
            </div>
          )}
          <div className={styles.divider} />
          <div className="fadeIn">{children}</div>
        </div>
      </div>
    </>
  );
};

export default GalleryLayout;
