/**
 * @param {number[]} nums
 * @return {number[]}
 */
//第一个数字是 出现的次数  第二个数是值
const decompressRLElist = function(nums) {
  const res = [];
  let i = 0;
  while (2 * i + 1 < nums.length) {
    let count = nums[2 * i];
    const value = nums[2 * i + 1];
    while (count--) res.push(value);
    i++;
  }
  return res;
};
