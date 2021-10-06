/**https://leetcode.com/problems/unique-morse-code-words/
 * 26个字母每个字母对应一个摩斯电码组合，给定一个字符串数组，检查数组内的元素翻译成摩斯电码，共有几种（因为翻译成摩斯电码后可能相同）
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  const code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  let b = [];
  function setMy(turn) {
    let temp = [...turn];
    temp.forEach(function(val, idx, array) {
      array[idx] = code[val.charCodeAt(0) - "a".charCodeAt(0)];
    });
    temp = temp.join("");
    return temp;
  }
  words.forEach(function(item, idx, arr) {
    let tmp = setMy(item);
    if (!b.includes(tmp)) {
      b.push(tmp);
    }
  });
  return b.length;
};

const uniqueMorseRepresentations2 = function(words) {
  const codes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  const getIdx = char => char.charCodeAt(0) - "a".charCodeAt(0);
  return words
    .map(word =>
      word
        .split("")
        .map(char => codes[getIdx(char)])
        .join("")
    )
    .reduce((set, cur) => set.add(cur), new Set()).size;
};
