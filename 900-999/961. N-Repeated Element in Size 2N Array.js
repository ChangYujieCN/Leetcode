/**https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * 给定一个长度为 2N 的整数数组，其中有一个数字 a 出现了N次，剩余的整数都是唯一的，找出这个数a
 * @param {number[]} A
 * @return {number} a
 */
const repeatedNTimes = function(A) {
  let set = new Set();
  for (let a of A) {
    if (set.has(a)) return a;
    set.add(a);
  }
};
/*--------------------------*/
const repeatedNTimes2 = function(A) {
  return A.find((a, index, array) => array.indexOf(a) !== index);
};
