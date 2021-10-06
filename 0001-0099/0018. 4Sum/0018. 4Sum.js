/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const findNSum = function (left, right, target, N, result, results, nums) {
  if (right - left + 1 < N || N < 2 || target < nums[left] * N || target > nums[right] * N) return;
  if (N === 2) {
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum === target) {
        results.push([...result, nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (right > left && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) left++;
      else right--;
    }
  } else
    for (let i = left; i <= right; i++)
      if (i === left || (i > left && nums[i - 1] !== nums[i]))
        // 避免重复
        findNSum(i + 1, right, target - nums[i], N - 1, [...result, nums[i]], results, nums);
};
const nSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  const results = [];
  findNSum(0, nums.length - 1, target, 4, [], results, nums);
  return results;
};
const fourSum = (nums, target) => nSum(nums, target);
