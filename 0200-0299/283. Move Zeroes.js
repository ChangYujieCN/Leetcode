/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  if (!nums || !nums.length) return;
  let insertPos = 0;
  for (const num of nums) {
    if (num !== 0) nums[insertPos++] = num;
  }
  while (insertPos < nums.length) nums[insertPos++] = 0;
};
