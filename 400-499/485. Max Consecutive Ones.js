/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let maxHere = 0,
    max = 0;
  for (const item of nums) {
    max = Math.max(max, (maxHere = item === 0 ? 0 : maxHere + 1));
  }
  return max;
};
