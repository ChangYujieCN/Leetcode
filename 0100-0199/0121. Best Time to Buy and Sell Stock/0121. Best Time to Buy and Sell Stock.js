/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  let maxCur = 0,
    maxSoFar = 0;
  for (let i = 1; i < prices.length; i++) {
    //为什么差值为负数要置0  因为你已经知道这样买一定会亏损  那么你完全可以选择开头不买   在这个低点买入
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]));
    maxSoFar = Math.max(maxCur, maxSoFar);
  }
  return maxSoFar;
};
// *maxCur = current maximum value
//
// *maxSoFar = maximum value found so far
