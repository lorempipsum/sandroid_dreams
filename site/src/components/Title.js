import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../data/images/site/logo.jpg';
import styles from './Title.module.css';

// styles

export const Title = ({ title }) => {
  return (
    <div>
      <title>{title}</title>
      <Link
        className={styles.headingStyles}
        to="/"
      >
        <div>
          <div
            className={
              styles.logoWithCss
            }
          >
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareW}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareB}
            />
            <div
              className={styles.squareW}
            />
          </div>
          {/* <img
            src={logo}
            width="120"
            height="120"
            alt="Logo"
          /> */}
        </div>
        {title}
      </Link>
      <Link
        className={styles.subtitleParent}
        to="/"
      >
        <p className={styles.subtitleText}>
          Do sandroids dream of electric
          sleep?
        </p>
      </Link>
    </div>
  );
};

export default Title;
