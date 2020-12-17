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
    <Layout title="sandroid.dev/rolls/roll1-ektar-100">
      <p>
        <span>
          Text stuff - Hi this is an
          introduction to a bunch of
          text stuff that is happening.
        </span>
      </p>
      <p>
        <span>
          Text stuff TWO- Hi this is an
          introduction to a bunch of
          text stuff that is happening.
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

export default IndexPage;
