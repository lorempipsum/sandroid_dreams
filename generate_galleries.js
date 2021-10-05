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
var im = require('imagemagick');

const path = require('path');

const fs = require('fs');

const albumSourceDirectoryPath = path.join(__dirname, 'ALBUM_SOURCE');

const ACCEPTABLE_FILE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

const copyAndResizeImage = (inputPath, outputPath) => {
  const ImageMagickArgs = [inputPath, '-strip', '-quality', '75', outputPath];

  // TODO check if file exists already. If it does, then do nothing.
  // Else do the convee
  return im.convert(ImageMagickArgs, function (err, stdout) {
    console.log(`converting ${inputPath}`);
    if (err) {
      console.log(`error converting: ${err}`);
      console.log(inputPath);
    }
  });
};

fs.readdir(albumSourceDirectoryPath, function (err, folders) {
  if (err) {
    console.log(`Encountered an error: ${err}`);
  }

  folders.forEach(function (folder) {
    console.log(`Found folder: ${folder}`);

    const folderPath = path.join(albumSourceDirectoryPath, folder);

    fs.readdir(folderPath, function (err, files) {
      if (err) {
        console.log(`Encountered an error: ${err}`);
      }

      files.forEach(function (file) {
        const fileNameExtension = path.extname(file).toLowerCase();
        if (ACCEPTABLE_FILE_EXTENSIONS.includes(fileNameExtension)) {
          const inputPath = path.join(folderPath, file);
          const outputPath = path.join(
            `./src/data/images/generatedAlbums/`,
            folder,
            file
          );
          const outputFolder = path.join(
            `./src/data/images/generatedAlbums/`,
            folder
          );
          if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder, { recursive: true });
          }
          copyAndResizeImage(inputPath, outputPath);
        }
      });
    });
  });
});
