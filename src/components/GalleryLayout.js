import React from 'react';
import Title from './Title';
import ArticleLink from './ArticleLink';
import styles from './GalleryLayout.module.css';

import Delta3200BackgroundImage from '../data/images/rolls/3/000097180001.jpg';

import '../styles/animations.css';

const GalleryLayout = ({ children, title }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <Title title={'sandroid.dev'} />
        </div>

        <div className={styles.content}>
          <img
            src={Delta3200BackgroundImage}
            className={`${styles.heroImage} heroEntrance`}
            styles={{ background: Delta3200BackgroundImage }}
          ></img>
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
