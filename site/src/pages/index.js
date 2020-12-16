import * as React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout';

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
    <Layout title={"sandroid.dev"}>
      <div style={centered}>
        <Link to="/rolls/1">
          Roll 1
        </Link>
      </div>
    </Layout>
  );
}

export default IndexPage
