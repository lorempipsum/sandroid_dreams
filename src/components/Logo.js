import React from 'react';


import logo from './logo.svg';

import styles from './Logo.module.css'

const Logo = ({}) => {
  return (
    <div>
      <div
        className={styles.logoBox}
      >
        <img
          src={logo}
          className={styles.logoImage}
        />
      </div>
    </div>
  );
};


export default Logo;