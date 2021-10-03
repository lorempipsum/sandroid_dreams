/**
 *
 * Given:
 *    There's a bunch of jpeg files in D/Art/Photography/Somewhere
 * Do:
 *    1. Copy the files to the appropriate place
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
        console.log(fileNameExtension);
        if (ACCEPTABLE_FILE_EXTENSIONS.includes(fileNameExtension)) {
          console.log(`Found file: ${file}`);
        }
      });
    });
  });
});
