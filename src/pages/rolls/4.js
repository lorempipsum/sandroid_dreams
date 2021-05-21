import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';

export const query = graphql`
  query Roll4ImagesQuery {
    allFile(
      filter: {
        sourceInstanceName: {
          eq: "images"
        }
        relativeDirectory: {
          eq: "rolls/chinon_portra_400_mkIII"
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
    <Layout title="Roll 4 - Portra 400, Chinon CP-7m.">
      <p>
        <span>
          The first roll from the Chinon without light leaks after taping the back window. Lots of snapshots, I really tried to fill the roll ASAP.
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
