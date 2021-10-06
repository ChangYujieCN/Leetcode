/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  for (let i = n - 1, j = nums.length - 1; j >= n; j--, i--) {
    // i 从 n-1 位开始   j从末尾开始  组合两个数字  用最后n个数字存储前面n个数字的信息
    // 因为数字 < 10^3  所以用10位二进制数可以表示所以只需要左移10位  然后用最后十位按位或 就可以存储  前面相应位置的数字
    nums[j] <<= 10;
    nums[j] |= nums[i];
  }
  for (let i = 0, j = n; j < nums.length; j++, i += 2) {
    const num1 = nums[j] & 1023; //按位与 同1为1 否则为0   取最后10位  即 前面存储的 xn
    const num2 = nums[j] >> 10; // 移位取得yn
    nums[i] = num1;
    nums[i + 1] = num2;
  }
  return nums;
};
const shuffle2 = (nums, n) => {
  const res = Array(2 * n).fill(0);
  for (let i = 0; i < nums.length; i++)
    res[i] = i % 2 === 0 ? nums[i >> 1] : nums[n + (i >> 1)];
  return res;
};
