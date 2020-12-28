import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../data/images/site/logo.jpg';
import styles from './Title.module.css';
import ArticleLink from '../components/ArticleLink';

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
            <svg
              className={styles.logo}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
            </svg>
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
      <p>
        <Link
          to="/about"
          className={
            styles.subtitleText
          }
        >
          About
        </Link>
        <Link
          to="/friends"
          className={
            styles.subtitleText
          }
        >
          Friends
        </Link>
        <a
          href="https://instagram.com/sandroid_dreams"
          className={
            styles.subtitleText
          }
        >
          Instagram
        </a>
      </p>
    </div>
  );
};

export default Title;
