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
              maxWidth: 1024
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout title="Roll 1 - Ektar 100">
      <ImageGrid
        images={data.allFile.edges.map(
          ({ node }) =>
            node.childImageSharp
        )}
      />
    </Layout>
  );
};

export default IndexPage;
