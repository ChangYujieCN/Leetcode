/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 计数排序
var smallerNumbersThanCurrent = function (nums) {
  // 题目限制条件 所有的数字 0 <= n <= 100
  // 创建一个能够容纳下所有数字范围的数组
  const count = Array(101).fill(0);
  // 存放结果的数组和原数组长度一样
  const res = Array(nums.length).fill(0);
  // 计数排序核心操作  在对应的索引上操作 + 1
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  for (let i = 1; i <= 100; i++) {
    // 相加确定 比 i + 1 小的数字有多少个 每个位置存的都是 比 i + 1小的数字个数
    count[i] += count[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) res[i] = 0;
    // 由于不能出现负索引 所以 num[i] === 0 的情况要单独处理
    else res[i] = count[nums[i] - 1];
  }

  return res;
};
var smallerNumbersThanCurrent2 = function (nums) {
  const copy = [...nums];
  const save = new Map();
  copy.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 因为可能有重复元素存在  所以只有第一次出现才把索引存进去 如 [0,1,2,2,3] 
    if (!save.has(copy[i])) save.set(copy[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    // 索引就代表前面有多少个数字 直接取出索引
    copy[i] = save.get(nums[i]);
  }
  return copy;
};
