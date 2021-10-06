/**https://leetcode.com/problems/sort-array-by-parity/
 * 给定一个非负整数数组，将其中的偶数全部排列到前一部分，其后面全是奇数
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  let i = 0;
  let j = A.length - 1;
  while (i < j) {
    if (A[i] % 2 === 0) {
      i++;
      continue;
    }
    if (A[j] % 2 === 1) {
      j--;
      continue;
    }
    if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      [A[i], A[j]] = [A[j], A[i]];
      i++;
      j--;
    }
  }
  return A;
};
const sortArrayByParity2 = function(A) {
  return [...A.filter(x => x % 2 === 0), ...A.filter(x => x % 2 === 1)];
};
