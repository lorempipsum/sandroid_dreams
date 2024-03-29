const fs = require('fs');

/**
 * Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
 *  */
export const createDirectoryRecursive = (relativePath: string) => {
  console.log(relativePath);
  return fs.mkdirSync(relativePath, { recursive: true }, (err: unknown) => {
    if (err) throw err;
  });
};

export const createFileAndFoldersIfNeeded = (
  relativePathToFile: string,
  data: string
) => {
  createDirectoryRecursive(
    relativePathToFile.split('/').slice(0, -1).join('/')
  );
  return fs.writeFileSync(relativePathToFile, data);
};
