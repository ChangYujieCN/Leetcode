/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) res.push(Math.abs(index + 1));
    nums[index] = -nums[index];
  }
  return res;
};
