/**https://leetcode.com/problems/self-dividing-numbers/
 * 自除数是自身除以自己的每一位都能除尽  128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
 * 给定一个数组区间，返回一个其中全部是自除数的数组
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
  let lists = [];
  for (let i = left; i <= right; i++) {
    let j = i;
    for (; j > 0; j = Math.floor(j / 10)) {
      if (j % 10 === 0 || i % (j % 10) !== 0) {
        break;
      }
    }
    if (j === 0) {
      lists.push(i);
    }
  }
  return lists;
};
