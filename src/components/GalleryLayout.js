import React from 'react';
import Title from './Title';
import ArticleLink from './ArticleLink';
import styles from './GalleryLayout.module.css';

import '../styles/animations.css';

const GalleryLayout = ({
  children,
  title,
}) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <Title
            title={'sandroid.dev'}
          />
        </div>

        <div className={styles.content}>
          <div
            className={`${styles.heroImage} heroEntrance`}
          >
            {title && (
              <div
                className={
                  styles.heroText
                }
              >
                <h1>{title}</h1>{' '}
              </div>
            )}
          </div>
          <div
            className={styles.divider}
          />
          <div className="fadeIn">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryLayout;
