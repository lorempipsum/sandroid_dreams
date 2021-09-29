/**
 *
 * Given:
 *    There's a bunch of jpeg files in a top-level folder outside of the usual
 * gatsby filesystem
 * Do:
 *    1. Copy the files to the appropriate place
 *    2. Compress the files for the web (imagemagick? Maybe there's like a
 * node version of it? A way to call it through node?)
 *    3. Create src/pages/${ALBUM_NAME}.js files
 *    4. Create links in pages/index.js. Make this a separate component
 * like <GeneratedAlbums /> or something, and import it?
 *
 **/
