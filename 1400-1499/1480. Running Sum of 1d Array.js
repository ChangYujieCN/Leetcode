/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const prefixSum = [];
  for (let i = 0; i < nums.length; i++) {
    prefixSum[i] = (prefixSum[i - 1] || 0) + nums[i];
  }
  return prefixSum
};
