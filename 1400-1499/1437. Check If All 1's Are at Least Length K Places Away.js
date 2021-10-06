/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  for (let i = 0, position = -k - 1; i < nums.length; ++i) {
    if (nums[i] === 1) {
      if (i - position <= k) return false;
      position = i;
    }
  }
  return true;
};
