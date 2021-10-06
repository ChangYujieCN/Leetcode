/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const sum = (arr) => {
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
const findNSum = (left, right, N, target, tempList, result, nums, flag) => {
  if (right - left + 1 < N || N < 2) return;
  if (N === 2) {
    while (left < right) {
      const total = nums[left] + nums[right] + sum(tempList);
      if (Math.abs(total - target) < Math.abs(sum(result) - target)) {
        result.length = 0;
        result.push(...tempList, nums[left], nums[right]);
      }
      if (total > target) {
        while (left < right && nums[right] == nums[right - 1]) right--;
        right--;
      } else if (total < target) {
        while (left < right && nums[left] == nums[left + 1]) left++;
        left++;
      } else {
        flag.continue = false;
        return;
      }
    }
  } else
    for (let i = left; i <= right; i++) {
      if(!flag.continue) break;
      if (i === left || (i > left && nums[i] !== nums[i - 1]))
        findNSum(i + 1, right, N - 1, target, [...tempList, nums[i]], result, nums, flag);
    }
};
const nSum = (nums, target, N) => {
  nums = nums.sort((a, b) => a - b);
  const result = nums.slice(0, N);
  findNSum(0, nums.length - 1, N, target, [], result, nums, { continue: true });
  return sum(result);
};
const threeSumClosest = (nums, target) => {
  return nSum(nums, target, 3);
};
threeSumClosest([0, 1, 2], 3);
