import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

// styles

const link = {
  textDecoration: 'none',
  marginTop: 0,
  textAlign: 'center',
  justifySelf: 'center',
  marginTop: '20px',
};

const linkTextStyle = {
  textDecoration: 'none',
  color: '#333',
};

// markup
const ArticleLink = ({ to, text }) => {
  return (
    <div style={link}>
      <Link
        style={linkTextStyle}
        to={to}
      >
        {text}
      </Link>
    </div>
  );
};

export default ArticleLink;
