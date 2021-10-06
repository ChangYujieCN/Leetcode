/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function(A) {
  let m = A.length,  // m 行 n 列
    n = A[0].length;
  const B = Array(n)    // n行m列
    .fill(undefined)
    .map((item) => Array(m));
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      B[j][i] = A[i][j];
    }
  }
  return B;
};
