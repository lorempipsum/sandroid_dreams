/**
 * Converts an arbitrary string to camelCase
 *
 * @param inputString arbitrary string to convert
 *
 * @returns null
 */
export const convertStringToComponentName = (inputString: string): string => {
  // 2. Split the string by spaces.
  let camelCasedString = camelCaseString(inputString.toLowerCase(), ['_', ' ']);

  return camelCasedString;
};

/**
 *
 * @param word A string at least 1 character long with upper or lowercase characters
 * @returns Capitalizes the first character.
 */
export const capitalizeWord = (word: string): string => {
  const wordLength = word.length;

  if (wordLength === 1) {
    return word.toUpperCase();
  }

  const capitalizedLetter = word[0].toUpperCase();
  const newWord = capitalizedLetter + word.slice(1, wordLength);

  return newWord;
};

// ALBUM_SOURCE:
// .split(_) => [ALBUM, SOURCE]
// 2
// ALBUM SOURCE_FOLDER
// .split(_) => [ALBUM SOURCE, FOLDER]
// .split(" ") =>

export const camelCaseString = (
  rawString: string,
  splitters: string[]
): string => {
  let stringToSplit = rawString;

  const splitString = splitters.forEach(function (splitter) {
    let splitStringArray = stringToSplit.split(splitter);

    if (splitStringArray.length === 1) {
      return splitStringArray.join('');
    }

    splitStringArray = splitStringArray.map((word) => capitalizeWord(word));

    stringToSplit = splitStringArray.join('');
  });

  return stringToSplit;
};
