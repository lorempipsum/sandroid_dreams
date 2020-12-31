import React from 'react';
import Title from './Title';
import styles from './Layout.module.css';

import '../styles/animations.css';

const Layout = ({
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
    className={
      styles.dividerUpper
    }
    />
          {title && (
            <>
              <h1 className="fadeDown">
                {title}
              </h1>{' '}
              <div
    className={
      styles.divider
    }
    />
            </>
          )}
          <div className="fadeIn">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
