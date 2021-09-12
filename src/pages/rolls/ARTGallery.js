import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

// Regular image gallery, but only show up to 3 pieces at once (they're called "pieces" in this view). Use arrow keys to slide the selection to the next 3. Or 2. Or maybe just slide it ahead by one?

export const query = graphql`
  query ArtGalleryImageQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "galleryTest" }
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

const ArtGallery = ({ data }) => {
  return (
    <GalleryLayout title="The Sandroid's Arts Hall">
      <p>
        <span>
          The simplicity and minimalism of this page, with the limited number of
          images on display at one time, stresses the importance of each image.
          In juxtaposition to the regular grid view, where many images share the
          screen space at any one time.
        </span>
      </p>
      <GalleryImageGrid
        images={data.allFile.edges.map(({ node }) => node.childImageSharp)}
      />
      {
        // TODO: BEFORE / AFTER Photo slider component! Show the original scan, and the edits I did to help me remember wtff I did!
      }
      <p>
        <span></span>
      </p>
    </GalleryLayout>
  );
};

export default ArtGallery;
