/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
  const range = grid[0].length;
  const arr = grid.reduce((acc, val) => acc.concat(val), []);
  for (k %= arr.length; k > 0; k--) arr.unshift(arr.pop());
  const ans = [];
  for (let i = 0; i + range < arr.length + 1; i += range) {
    ans.push(arr.slice(i, i + range));
  }
  return ans;
};
