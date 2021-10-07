import { createFileAndFoldersIfNeeded } from './fileSystemUtils';
import { convertStringToComponentName } from './stringOperationsUtils';

export const generateComponentInPagesDirectory = (folderName: string) => {
  const graphqlQuery = generateGraphqlQuery(folderName);
  const componentName = convertStringToComponentName(folderName);

  return createFileAndFoldersIfNeeded(
    `./src/pages/generatedAlbums/${folderName}`,
    `import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

// Regular image gallery, but only show up to 3 pieces at once (they're called "pieces" in this view). Use arrow keys to slide the selection to the next 3. Or 2. Or maybe just slide it ahead by one?

export const query = ${graphqlQuery}

const ${componentName} = ({ data }) => {
  return (
    <GalleryLayout title=${componentName}>
      <p>
        <span>
          Description TBD
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
`
  );
};

/**
 *
 * @param camelCasedWord - The album name in the style of Component names
 * @returns the word + "Query" attached to it
 */
export const generateQueryName = (camelCasedWord: string): string => {
  return camelCasedWord + 'Query';
};

export const generateGraphqlQuery = (folderName): string => {
  const queryName = generateQueryName;

  const relativeDirectory = `/generatedAlbums/${folderName}`;
  return `export const query = graphql\`
  query ${queryName} {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "${relativeDirectory}" }
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
\`;`;
};
