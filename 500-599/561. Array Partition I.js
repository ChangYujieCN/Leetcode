/**https://leetcode.com/problems/array-partition-i/
 * 给定一个数组长度为2N，将其分为N组，(a1,b1),(a2,b2),(a3,b3), 找出每一组的最小值，再求和，求这个和的最大值为多少？
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  let sum = 0;
  nums.sort((a, b) => a - b); //降序排序
  for (let i = 0; i * 2 < nums.length - 1; i++) {
    sum = sum + nums[2 * i];//取偶数位
  }
  return sum;
};
