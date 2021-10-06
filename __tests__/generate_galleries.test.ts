import convertStringToComponentName from '../generate_galleries';

test('FOLDER_NAME turns into folderName', () => {
  const rawFolderName = 'FOLDER_NAME';
  const expectedFolderName = 'folderName';

  const convertedFolderName = convertStringToComponentName(rawFolderName);

  expect(convertedFolderName).toEqual(expectedFolderName);
});
