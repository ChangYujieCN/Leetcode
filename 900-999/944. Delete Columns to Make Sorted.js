/**
 * 这个问题描述并不清楚  其实就是找出来非增的列有几列
 * @param {string[]} A
 * @return {number}
 */

var minDeletionSize = function(A) {
  let count = 0;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        count++;
        break;
      }
    }
  }
  return count;
};
