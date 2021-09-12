import React from 'react';
import Title from './Title';
import ArticleLink from './ArticleLink';
import styles from './GalleryLayout.module.css';

import Delta3200BackgroundImage from '../data/images/rolls/3/000097180004.jpg';

import '../styles/animations.css';

const GalleryLayout = ({ children, title }) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <Title title={'sandroid.dev'} />
        </div>

        <div className={styles.content}>
          <div>
            <div
              style={{
                background: `url(${Delta3200BackgroundImage})`,
                backgroundAttachment: 'fixed', // parallax
              }}
              className={`${styles.heroImage} heroEntrance`}
            ></div>
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
