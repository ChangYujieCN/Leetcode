/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const result = this.nums.slice();
  for (let i = 1; i < result.length; i++) { //必须要从1开始  因为从0开始 第一个随机数无论怎么生成都是0
    const pos = Math.trunc(Math.random() * (i + 1));  // 取[0,i]的随机数
    [result[i], result[pos]] = [result[pos], result[i]];
  }
  return result;
};
  /**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/