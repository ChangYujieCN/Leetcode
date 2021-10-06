/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = [];
  // 排序会让这个问题变得简单  让我们可以使用之前的双指针办法解决这个问题
  nums = nums.sort((a, b) => a - b);
  let target = 0;
  // 因为要找三个数 所以需要遍历到 len(nums) - 2 
  for (let left = 0; left < nums.length - 2; left++) {
    // 如果nums[i] 大于目标则没有必要再进行循环了  因为数组是排好序的  再往后只会变得更大
    if (nums[left] > target) break;
    // 因为这个方法是选定一个起点 和终点 找中间的值  所以为了避免重复值  遇到重复的数字要跳过
    // 你可能会问 
    // 如果 nums[left] ===  nums[left-1]这个时候 如果存在 nums[left-1] + nums[left] + nums[...] === target怎么办
    // 可以分两种情况讨论 
    // nums[left-1] === nums[left] !== nums[left+1] 假设 nums[left] === -1 且存在一项 === 2
    // 后面无论有几对满足情况的三胞胎 都无需考虑 因为毕竟起点都确定了 后面 mid right是自行调节的
    // 唯一少了的一项就是 [-1,-1,2] 但是这一项已经在前面保存下来了
    // 在考虑 nums[left-1] === nums[left] === nums[right] 这种情况只有一种就是他们都是0  
    // 同样舍弃掉后面的不会造成影响 
    // 假如以nums[left]项计算了的所有情况  假如 nums[left] === nums[left+1] 
    // 从后面一位nums[left+1]开始计算出来的三胞胎的值一定是从nums[left]开始计算的子集 
    // 从后面一位nums[left+1]开始计算出来的三胞胎的数量一定小于等于nums[left]
    if (nums[left] === nums[left - 1]) continue;
    let mid = left + 1;
    let right = nums.length - 1;
    while (mid < right) {
      let sum = nums[left] + nums[mid] + nums[right];
      if (sum === target) {
        results.push([nums[left], nums[mid], nums[right]]);
        // 如果有重复的值 需要跳过  不然结果中会出现多余项
        while (nums[mid] === nums[mid + 1]) ++mid;
        while (nums[right] === nums[right - 1]) --right;
        ++mid;
        --right;
      } else if (sum < target) ++mid;
      else --right;
    }
  }
  return results;
};
