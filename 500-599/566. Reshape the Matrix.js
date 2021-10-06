/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function(nums, r, c) {
  const originalRows = nums.length;
  const originalCols = nums[0].length;
  if (r * c !== originalCols * originalRows) return nums;
  const res = Array(r)
    .fill(undefined)
    .map((item) => Array(c));
  for (let i = 0; i < r * c; i++) {
    res[Math.floor(i / c)][i % c] = nums[Math.floor(i / originalCols)][i % originalCols];
  }
  return res;
};
