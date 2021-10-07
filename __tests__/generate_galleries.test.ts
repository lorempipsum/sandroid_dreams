import { convertStringToComponentName } from '../stringOperationsUtils';

test('FOLDER_NAME turns into FolderName', () => {
  const rawFolderName = 'FOLDER_NAME';
  const expectedFolderName = 'FolderName';

  const convertedFolderName = convertStringToComponentName(rawFolderName);

  expect(convertedFolderName).toEqual(expectedFolderName);
});

test('SOURCE FOLDER_NAME turns into SourceFolderName', () => {
  const rawFolderName = 'SOURCE FOLDER_NAME';
  const expectedFolderName = 'SourceFolderName';

  const convertedFolderName = convertStringToComponentName(rawFolderName);

  expect(convertedFolderName).toEqual(expectedFolderName);
});
