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
            className={styles.heroImage}
          >
            {title && (
              <>
                <h1>{title}</h1>{' '}
                <div
                  className={
                    styles.divider
                  }
                />
              </>
            )}
          </div>
          <div className="fadeIn">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryLayout;
