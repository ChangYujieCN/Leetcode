/** 给定数组长度 返回一个数组  里面的数字之和是0
 * @param {number} n
 * @return {number[]}
 */
// keep it simple.   Add all values till n-1 and then balance it with -sum.
// Starting from i+1 instead of i to avoid the case of 0 and 0 when n = 2.
const sumZero = function(n) {
  const arr = Array(n);
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    arr[i] = i + 1;
    sum += arr[i];
  }
  arr[n - 1] = -sum;
  return arr;
};

// wave spread
// n = 1, [0]
// n = 2, [-1, 1]
// Now write more base on this
// n = 3, [-2, 0, 2]
// n = 4, [-3, -1, 1, 3]
// n = 5, [-4, -2, 0, 2, 4]
// A[i] = i * 2 - n + 1
// Complexity
// Time O(N)
// Space O(N)
const sumZero2 = function(n) {
    return Array(n).fill(0).map((value, index) => index * 2 - n + 1);
};