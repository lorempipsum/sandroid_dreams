import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

export const query = graphql`
  query macroQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "generatedAlbums/macro" }
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

const macro = ({ data }) => {
  return (
    <GalleryLayout title="macro">
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

export default macro;
