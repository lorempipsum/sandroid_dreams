import {
  generateArticleLink,
  generateComponentInPagesDirectory,
  generateGeneratedLinksForIndex,
  generateGraphqlQuery,
} from './generationUtils';

/**
 *
 * Given:
 *    There's a bunch of jpeg files in D/Art/Photography/Somewhere
 * Do:
 *    1. Copy the files to the appropriate place (./src/data/images/generatedAlbums/${ALBUM_NAME})
 *    2. Compress the files for the web (imagemagick? Maybe there's like a
 * node version of it? A way to call it through node?)
 *    3. Create src/pages/${ALBUM_NAME}.js files
 *    4. Create links in pages/index.js. Make this a separate component
 * like <GeneratedAlbums /> or something, and import it?
 *
 **/
export {};

var im = require('imagemagick');

const path = require('path');

const fs = require('fs');

const albumSourceDirectoryPath = path.join(__dirname, 'ALBUM_SOURCE');

const ACCEPTABLE_FILE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Generates an album component file in src/pages/${ALBUM_NAME}
 *
 * An album component has three parts:
 * 1. The graphql query that gets the files from ${FOLDER} at /src/data/images/generatedAlbums/${ALBUM_NAME}
 * 2. A component with a gallery layout, which has a
 * 2.1 Title
 * 2.2 Description
 * 2.3
 */
// const generateAlbumComponentFile = (): string => {};

/**
 *
 * Given a file's full path, copy that file and resize it in the process
 * in order to compress it for the web.
 *
 * @param inputPath
 * @param outputPath
 * @returns
 */
const copyAndResizeImage = (inputPath: string, outputPath: string) => {
  const ImageMagickArgs = [inputPath, '-strip', '-quality', '75', outputPath];

  // If output file already exists, do nothing
  if (fs.existsSync(outputPath)) {
    // console.log('file already exists: ', outputPath);
    return 1;
  }
  return im.convert(ImageMagickArgs, function (err: any) {
    // console.log(`converting ${inputPath}`);
    if (err) {
      console.log(`error converting: ${err}`);
      console.log(inputPath);
    }
  });
};
/**
 * Check the extension of each file. If it matches a predetermined set,
 * do something to that file.
 *
 * @param fileName
 * @param folderName
 * @param originFolderPath
 * @returns
 */

const compressFileIfJpeg = (
  fileName: string,
  folderName: string,
  originFolderPath: string
) => {
  const fileNameExtension = path.extname(fileName).toLowerCase();
  if (ACCEPTABLE_FILE_EXTENSIONS.includes(fileNameExtension)) {
    const inputPath = path.join(originFolderPath, fileName);
    const outputPath = path.join(
      `./src/data/images/generatedAlbums/`,
      folderName,
      fileName
    );
    const outputFolder = path.join(
      `./src/data/images/generatedAlbums/`,
      folderName
    );
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
    copyAndResizeImage(inputPath, outputPath);
  }
  return 0;
};

const compressFilesIfJpeg = (args: FileFunctionArgs) => {
  return args.fileNames.forEach((file) =>
    compressFileIfJpeg(file, args.folder, args.folderPath)
  );
};

/** The name of this function is a lie. It is a specific thing that does a specific bit to a folder, and is not as generic as it sounds. Thank you */
const processFolder = (
  folderPath: string,
  functionToRunOnFiles: (args: FileFunctionArgs) => void,
  functionArgs: PartialFileFunctionArgs
) => {
  fs.readdir(folderPath, function (err: unknown, files: string[]) {
    if (err) {
      console.log(`Encountered an error: ${err}`);
    }
    functionToRunOnFiles({
      folder: functionArgs.folder,
      fileNames: files,
      folderPath: folderPath,
    });
  });

  const outputFolder = path.join(
    `./src/data/images/generatedAlbums/`,
    functionArgs.folder
  );

  // Function to count seconds


  // Check if output folder exists, and creat it if it does not
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true })};

  // Make a list of all the files in the output folder
  const filesInOutputFolder = fs.readdirSync(outputFolder);

  // Make a list of all the files in the input folder
  let filesInInputFolder: string[] = [];
  filesInInputFolder = fs.readdirSync(folderPath);

  // Filter out a list that includes only the files that are in the output folder, but not the input folder.
  var extraFilenames = filesInOutputFolder.filter(function (e: string) {
    return filesInInputFolder.indexOf(e) === -1;
  });

  console.log(`extra filenames: ${extraFilenames}`);

  // Delete each file.
  extraFilenames.forEach((file: string) => {
    const filePath = path.join(outputFolder, file);
    fs.unlinkSync(filePath);
  });
};

export interface FileFunctionArgs {
  fileNames: string[];
  folder: string;
  folderPath: string;
}

export interface PartialFileFunctionArgs {
  fileNames?: string[];
  folder: string;
  folderPath?: string;
}

/**
 * Go through each folder, collect all the filenames, and
 * do $SOMETHING to the array of filenames
 */
const loopThroughFolders = (
  folders: string[],
  functionToRunOnFiles: (args: FileFunctionArgs) => void,
  articleLinks: string[]
) => {
  folders.forEach(function (folder) {
    console.log(`Found folder: ${folder}`);

    const folderPath = path.join(albumSourceDirectoryPath, folder);
    generateComponentInPagesDirectory(folder);
    const articleLink = generateArticleLink(folder);
    articleLinks.push(articleLink);
    processFolder(folderPath, functionToRunOnFiles, { folder: folder });
  });

  return articleLinks;
};

const main = () => {
  // Get all the folders in albumSourceDirectoryPath
  return fs.readdir(
    albumSourceDirectoryPath,
    function (err: unknown, folders: string[]) {
      if (err) {
        console.log(`Encountered an error: ${err}`);
      }
      let articleLinks: string[] = [];
      articleLinks = loopThroughFolders(
        folders,
        compressFilesIfJpeg,
        articleLinks
      );
      console.log(articleLinks);
      generateGeneratedLinksForIndex(articleLinks);
    }
  );
};

main();
