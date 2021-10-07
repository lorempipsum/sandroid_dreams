import {
  generateComponentInPagesDirectory,
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
    console.log('file already exists: ', outputPath);
    return 1;
  }
  return im.convert(ImageMagickArgs, function (err: any) {
    console.log(`converting ${inputPath}`);
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
const copyFileIfJpeg = (
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

const loopThroughFiles = (
  files: string[],
  folderName: string,
  originFolderPath: string
) => {
  return files.forEach((file) =>
    copyFileIfJpeg(file, folderName, originFolderPath)
  );
};

/**
 * Go through each folder, collect all the filenames, and
 * do $SOMETHING to the array of filenames
 */
const loopThroughFolders = (
  folders: string[],
  functionToRunOnFiles: (
    fileNames: string[],
    folder: string,
    folderPath: string
  ) => void
) => {
  return folders.forEach(function (folder) {
    console.log(`Found folder: ${folder}`);

    const folderPath = path.join(albumSourceDirectoryPath, folder);
    generateComponentInPagesDirectory(folder);

    fs.readdir(folderPath, function (err: unknown, files: string[]) {
      if (err) {
        console.log(`Encountered an error: ${err}`);
      }
      functionToRunOnFiles(files, folder, folderPath);
    });
  });
};

const main = () => {
  // Get all the folders in albumSourceDirectoryPath
  return fs.readdir(
    albumSourceDirectoryPath,
    function (err: unknown, folders: string[]) {
      if (err) {
        console.log(`Encountered an error: ${err}`);
      }
      loopThroughFolders(folders, loopThroughFiles);
    }
  );
};

main();
