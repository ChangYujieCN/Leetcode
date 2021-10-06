/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let i = 0,
    j = 1,
    n = A.length;
  while (i < n && j < n) {
    while (i < n && A[i] % 2 === 0) i += 2;
    while (j < n && A[j] % 2 === 1) j += 2;
    if (i < n && j < n) {
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return A;
};
