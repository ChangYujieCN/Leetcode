/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
// 2,3,6,5,4,1 为例子
var nextPermutation = function (nums) {
  const len = nums.length;
  let k, l;
  // 因为至少需要两个数比较  所以只能从len-2开始 从len-1开始  没有k+1
  // 从数组末尾找,找到第一个不是递增的数字 即 3
  //  / \
  //      \
  //        \
  // 因为除了3,后面都是递增地,这样找到的必定是以3开头的最后一个排列
  // 那么要找到下面一个排列  就需要找到一个刚好比3大的数字 来与3交换
  // 然后 后面的数字全部reverse 变成从左边数递增的   如果想不明白  就把整个数组理解成一个数字个十百千位
  // 找到这个数与3交换就一定能满足条件吗
  // 答案是肯定的  因为末尾是递增的  找到刚好大于3的数  右面的都小于3  左边的都大于3  交换后情况仍然不变 递增情况依然不变
  // 所以reverse之后就能满足条件
  for (k = len - 2; k >= 0; k--) if (nums[k] < nums[k + 1]) break;
  // 数组
  if (k < 0) nums.reverse();
  else {
    for (l = len - 1; l > k; l--) if (nums[l] > nums[k]) break;
    [nums[k], nums[l]] = [nums[l], nums[k]];
    reverse(nums, k + 1, len - 1);
  }
};
