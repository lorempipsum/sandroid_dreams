import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';

export const query = graphql`
  query Roll3ImagesQuery {
    allFile(
      filter: {
        sourceInstanceName: {
          eq: "images"
        }
        relativeDirectory: {
          eq: "rolls/3"
        }
        ext: { eq: ".jpg" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(
              maxWidth: 150
              maxHeight: 150
            ) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(
              maxWidth: 2544
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Roll3 = ({ data }) => {
  return (
    <Layout title="Roll 3 - Ilford Delta 3200, Pentax MX.">
      <p>
        <span>
          This is technically the 6th film I had developed, I think, since I started the site. But we all need to start somewhere.
        </span>
      </p>
      <ImageGrid
        images={data.allFile.edges.map(
          ({ node }) =>
            node.childImageSharp
        )}
      />
      {// TODO: BEFORE / AFTER Photo slider component! Show the original scan, and the edits I did to help me remember wtff I did!
      }
      <p>
        <span></span>
      </p>
    </Layout>
  );
};

export default Roll3;
