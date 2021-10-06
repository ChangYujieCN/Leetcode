/**https://leetcode.com/problems/squares-of-a-sorted-array/
 * 给定一个非减数组，包括正负数，返回一个将所有元素平方后再排序为非减序列的数组
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  let i = 0,
    j = A.length - 1,
    r = A.length - 1;
  let result = new Array(A.length);
  while (i <= j) {
    if (A[i] * A[i] > A[j] * A[j]) {
      result[r] = A[i] * A[i];
      i++;
    } else {
      result[r] = A[j] * A[j];
      j--;
    }
    r--;
  }
  return result;
};

const sortedSquares2 = function(A) {
  A = A.map(x => x * x);
  A.sort((a, b) => a - b);
  return A;
};
