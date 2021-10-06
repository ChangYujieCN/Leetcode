/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * Given a matrix, each row and each column is increasing.
 Find all coordinates (i,j) that A[i][j] == z
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
const findSolution = function(customfunction, z) {
  const res = [];
  let y = 1000;
  for (let x = 1; x < 1000; ++x) {
    while (y > 1 && customfunction.f(x, y) > z) y--;
    if (customfunction.f(x, y) === z) res.push([x, y]);
  }
  return res;
};
