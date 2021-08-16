import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import ImageGrid from '../../components/ImageGrid';

export const query = graphql`
  query ImagesForGallery {
    allFile(
      filter: {
        sourceInstanceName: {
          eq: "images"
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

const InfiniteRoll = ({ data }) => {
  return (
    <Layout title="The Infinite Photo Roll">
      <p>
        <span>
          This page will automatically
          be updated with all the images
          uploaded to this site.
        </span>
      </p>
      <ImageGrid
        images={data.allFile.edges.map(
          ({ node }) =>
            node.childImageSharp
        )}
      />
    </Layout>
  );
};

export default InfiniteRoll;
