/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  return s
    .split(" ")
    .map(item => [...item].reverse().join(""))
    .join(" ");
};

const reverseWords2 = function(str) {
  let res = "";
  let word = "";
  for (let char of str) {
    if (char === " ") {
      res += word + char;
      word = "";
    } else {
      word = char + word;
    }
  }
  return res + word;
};
reverseWords2("Let's take LeetCode contest");
