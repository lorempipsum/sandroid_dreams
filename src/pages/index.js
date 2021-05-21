import * as React from 'react';

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
          to="/rolls/5"
          text="Roll 5 - Portra 400, Mamiya C3."

        />
        <ArticleLink
          to="/rolls/4"
          text="Roll 4 - Portra 400, Chinon CP-7m." // TODO can I get this text && to=/ path from some unified place, both here and in 4.js

        />
        <ArticleLink
          to="/rolls/3"
          text="Roll 3 - Ilford Delta 3200, Pentax MX."

        />
        <ArticleLink
          to="/TOSE/Tose"
          text="Experiment - TOSE"
        />{' '}
        <ArticleLink
          to="/experiments/WhatIsChloeUpTo"
          text="Experiment - What is chloe up to"
          display
        />{' '}
        <ArticleLink
          to="/experiments/newPage"
          text="Experiment - New Page"
        />{' '}
        <ArticleLink
          to="/experiments/rule30"
          text="Experiment - Rule 30"
          display
        />{' '}
        <ArticleLink
          to="/experiments/CssTests"
          text="Experiment - CSS Tests"
          display
        />{' '}
        <ArticleLink
          to="/experiments/svgAnimations"
          text="Experiment - Animating SVG"
        />{' '}
        <ArticleLink
          to="/blog/chinon-maiden-voyage"
          text="Photography - Chinon CP-7 Maiden Voyage"
        />{' '}
        <ArticleLink
          to="/rolls/1"
          text="The Infinite Photo Roll"
          display
        />
        <ArticleLink
          to="/blog/intoxicated-shrubbery"
          text="Plotting - Intoxicated Shrubbery"
          display
        />
        <ArticleLink
          to="/blog/plotterbjork"
          text="Plotting - Plotterbjork"
          display
        />
        <ArticleLink
          to="/blog/pointillism"
          text="Plotting - Pointillism Extended"
        />
        <ArticleLink
          to="/blog/software-i-like"
          text="Software I like"
          display
        />
        <ArticleLink
          to="/blog/top-tips"
          text="Tips From Building This Site"
          display
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
