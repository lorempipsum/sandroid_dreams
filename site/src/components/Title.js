import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import logo from '../data/images/site/logo.jpg';
import styles from './Title.module.css';

// styles
const headingStyles = {
  marginTop: 0,
  textAlign: 'center',
  justifySelf: 'center',
  fontSize: '2em',
  marginTop: '3vh',
  fontVariant: 'small-caps',
  textDecoration: 'none',
  color: '#333',
};

export const Title = ({ title }) => {
  return (
    <div>
      <title>{title}</title>
      <Link
        style={headingStyles}
        to="/"
      >
        <div>
          <img
            src={logo}
            width="120"
            height="120"
            alt="Logo"
          />
        </div>
        {title}
      </Link>
      <p className={styles.subtitle}>
        Do sandroids dream of electric
        sleep?
      </p>
    </div>
  );
};

export default Title;
