/**
 * https://leetcode.com/problems/remove-outermost-parentheses/
 * 移除每一个整块的最外层的一个括号，每当第一次碰到（的时候算作第一个整块
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(S) {
  let counter = 0;
  let result = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      counter++;
    } else {
      counter--;
    }
    if (!(counter === 1 && S[i] === "(") && !(counter === 0 && S[i] === ")")) {
      result += S[i];
    }
  }
  return result;
};
