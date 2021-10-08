import { createFileAndFoldersIfNeeded } from './fileSystemUtils';
import { convertStringToComponentName } from './stringOperationsUtils';

import * as React from 'react';

export const generateArticleLink = (folderName: string) => {
  const componentName = convertStringToComponentName(folderName);
  return `<ArticleLink to="/generatedAlbums/${componentName}" text="${componentName}" display />
`;
};

export const generateGeneratedLinksForIndex = (articleLinks: string[]) => {
  return createFileAndFoldersIfNeeded(
    `./src/components/GeneratedLinks.js`,
    `import * as React from 'react';
    import ArticleLink from './ArticleLink';

  const GeneratedLinks = () => {
  return <div>${articleLinks.join('\n')}</div>;
};

export default GeneratedLinks;`
  );
};

export const generateComponentInPagesDirectory = (folderName: string) => {
  const graphqlQuery = generateGraphqlQuery(folderName);
  const componentName = convertStringToComponentName(folderName);
  const fileName = convertStringToComponentName(folderName) + '.js'; // TODO enable typescript here

  const description = 'temporary description';

  return createFileAndFoldersIfNeeded(
    `./src/pages/generatedAlbums/${fileName}`,
    `import * as React from 'react';
import { graphql } from 'gatsby';

import GalleryLayout from '../../components/GalleryLayout';
import GalleryImageGrid from '../../components/GalleryImageGrid';

export const query = ${graphqlQuery}

const ${componentName} = ({ data }) => {
  return (
    <GalleryLayout title="${componentName}">
      <p>
        <span>
          ${description}
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

export default ${componentName};
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

export const generateGraphqlQuery = (folderName: string): string => {
  const queryName = generateQueryName(folderName);

  const relativeDirectory = `generatedAlbums/${folderName}`;
  return `graphql\`
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
