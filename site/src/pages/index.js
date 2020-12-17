import * as React from "react";
import { Link } from 'gatsby';


import Layout from '../components/Layout';
import ArticleLink from '../components/ArticleLink';
// styles

const centered = {
  gridColumn: '2',
  marginTop: 0,
  textAlign: 'center',
  justifySelf: 'center',
};
// markup
const IndexPage = () => {
  return (
    <Layout>
      <div style={centered}>
        <ArticleLink to="/rolls/1" text="Roll 1"></ArticleLink>
        <ArticleLink to="/rolls/2" text="Roll 2"></ArticleLink>

      </div>
    </Layout>
  );
}

export default IndexPage
