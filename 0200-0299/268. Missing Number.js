/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const len = nums.length;
  const shouldSum = (len * (len + 1)) / 2;
  return shouldSum - nums.reduce((previousValue, currentValue) => previousValue + currentValue);
};

const missingNumber2 = function(nums) {
  let xor = 0,
    i = 0;
  // ^不同为1 相同为0 异或有交换律
    // 一共 n+1 个数字  数组只有n个
  for (i = 0; i < nums.length; i++) {
    xor = xor ^ i ^ nums[i];
  }
  return xor ^ i;
};

