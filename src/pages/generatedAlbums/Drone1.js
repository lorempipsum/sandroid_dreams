import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

export const query = graphql`
  query Drone_1Query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "generatedAlbums/Drone_1" }
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
      file(sourceInstanceName: {eq: "images"}, relativePath: {eq: "generatedAlbums/Drone_1/background.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allDirectory(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "generatedAlbums"}}) {
  nodes {
    relativePath
    name
  }
}
  }
`;


export const getListOfAlbums = (albumsList) => {
  let listOfAlbums = [];
  listOfAlbums = albumsList.map((albumObject) => albumObject.relativePath);

  return listOfAlbums;
};

const Drone1 = ({ data }) => {
    const images = data.allFile.edges.map(({ node }) => node.childImageSharp);
    const listOfAlbums = getListOfAlbums(data.allDirectory.nodes);

  const heroImage = data.file?.childImageSharp.fluid;
  return (
    <GalleryLayout title="Drone1" heroImage={heroImage}>
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

export default Drone1;
