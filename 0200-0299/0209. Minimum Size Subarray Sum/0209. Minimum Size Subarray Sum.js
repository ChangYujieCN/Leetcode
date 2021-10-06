/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
  let [left, right, sum, min] = [0, 0, 0, Infinity];
  while (right < nums.length) {
    sum += nums[right++];
    while (sum >= target) {
      min = Math.min(min, right - left);
      sum -= nums[left++];
    }
  }
  return min === Infinity ? 0 : min;
};
