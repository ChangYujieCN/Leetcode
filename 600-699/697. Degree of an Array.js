/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function(nums) {
  const countMap = new Map();
  const firstMap = new Map();
  let res = 0,
    degree = 0;
  for (let i = 0; i < nums.length; i++) {
    // 确定数字第一次出现的位置
    if (!firstMap.has(nums[i])) firstMap.set(nums[i], i);
    // 记录下数字出现的次数
    countMap.set(nums[i], countMap.has(nums[i]) ? countMap.get(nums[i]) + 1 : 1);
    // 如果数字出现的次数大于记录的最大次数  更新记录  更新子数组的长度
    if (countMap.get(nums[i]) > degree) {
      degree = countMap.get(nums[i]);
      // 因为返回的是子数组长度  所以需要+1
      res = i - firstMap.get(nums[i]) + 1;
    } else if (countMap.get(nums[i]) === degree) {
      //如果有某些数字出现的次数和已经记录的最大次数相同 则取数组长度比较小的那个
      res = Math.min(res, i - firstMap.get(nums[i]) + 1);
    }
  }
  return res;
};
