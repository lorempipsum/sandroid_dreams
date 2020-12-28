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
        <ArticleLink
          to="/rolls/2"
          text="Photography - Pentax MX Maiden Voyage"
        />{' '}
        <ArticleLink
          to="/rolls/1"
          text="The Infinite Photo Roll"
        />
        <ArticleLink
          to="/blog/intoxicated-shrubbery"
          text="Plotting - Intoxicated Shrubbery"
        />
        <ArticleLink
          to="/blog/plotterbjork"
          text="Plotting - Plotterbjork"
        />
        <ArticleLink
          to="/blog/pointillism"
          text="Plotting - Pointillism Extended"
        />
        <ArticleLink
          to="/blog/software-i-like"
          text="Software I like"
        />
        <ArticleLink
          to="/blog/top-tips"
          text="Tips From Building This Site"
        />
      </div>
    </Layout>
  );
}

export default IndexPage
