import * as React from 'react';
import { Link } from 'gatsby';

// styles
import styles from './ArticleLink.module.css';


// markup
const ArticleLink = ({ to, text }) => {
  return (
    <div className={styles.link}>
      <Link
        className={styles.linkTextStyle}
        to={to}
      >
        {text}
      </Link>
    </div>
  );
};

export default ArticleLink;
