/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = function(nums) {
  const ret = [];
  for (let i = 0; i < nums.length; i++) {
    // 第一次遍历  将数组从 1-n  转化为 0 - n-1
    // 如果是正的  就将此数字作为索引将 那个位置的数字置负   因为可能遍历到那个地方之后  该位置已经为负值  又因为索引不能为负  所以要取绝对值
    const val = Math.abs(nums[i]) - 1;
    // 可能会遇到重复的数字  所以判断  大于0 才取反
    if (nums[val] > 0) {
      nums[val] = -nums[val];
    }
  }
  // 现在只要查看哪些值还是正  就说明我们的索引没有取到这个位置   即没有出现这个数字
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) ret.push(i + 1);
  }
  return ret;
};

