import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

export const query = graphql`
  query FilmQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "generatedAlbums/Film" }
        ext: { eq: ".jpg" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 1000, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 2544) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
      file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "generatedAlbums/Film/background.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
`;

const film = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp);

  const heroImage = data.file?.childImageSharp.fluid;
  return (
    <GalleryLayout title="film" heroImage={heroImage}>
      <p>
        <span>
          temporary description
        </span>
      </p>
      <GalleryImageGrid
        images={images}
      />
      <p>
        <span></span>
      </p>
    </GalleryLayout>
  );
};

export default film;
