import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

export const query = graphql`
  query miniaturesQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "generatedAlbums/miniatures" }
        ext: { eq: ".jpg" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 2544) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const miniatures = ({ data }) => {
  return (
    <GalleryLayout title="miniatures">
      <p>
        <span>
          temporary description
        </span>
      </p>
      <GalleryImageGrid
        images={data.allFile.edges.map(({ node }) => node.childImageSharp)}
      />
      <p>
        <span></span>
      </p>
    </GalleryLayout>
  );
};

export default miniatures;
