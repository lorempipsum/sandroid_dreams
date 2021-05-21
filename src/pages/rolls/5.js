import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';

export const query = graphql`
  query Roll5ImagesQuery {
    allFile(
      filter: {
        sourceInstanceName: {
          eq: "images"
        }
        relativeDirectory: {
          eq: "rolls/wales_medium"
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

const Roll = ({ data }) => {
  return (
    <Layout title="Roll 5 - Portra 400, Mamiya C3.">
      <p>
        <span>
          The second roll out of the Mamiya C3. Exclusively shot in Wales.
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

export default Roll;
