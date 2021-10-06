/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  let countCharsArr = [];
  let total = 0;
  for (let char of chars) {
    countCharsArr[char] = (countCharsArr[char] || 0) + 1;
  }
  for (let word of words) {
    let countWordsArr = [];
    let canBeFormed = true;
    for (let ch of word) {
      countWordsArr[ch] = (countWordsArr[ch] || 0) + 1;
      if (!countCharsArr[ch] || countWordsArr[ch] > countCharsArr[ch]) {
        canBeFormed = false;
        break;
      }
    }
    if (canBeFormed) total += word.length;
  }
  return total;
};
