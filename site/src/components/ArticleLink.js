import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

// styles

const link = {
  textDecoration: 'none',
  marginTop: 0,
  textAlign: 'center',
  justifySelf: 'center',
};

// markup
const ArticleLink = ({to, text}) => {
  return (
    <div style={link}>
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default ArticleLink;
