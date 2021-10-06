/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {
  const len = arr.length;
  let count = 0;
  const prefixSum = Array(len + 1).fill(0);
  // 计算累加值
  for (let i = 0; i < len; ++i) prefixSum[i + 1] = prefixSum[i] + arr[i];
  // 使用一个窗口  如 sum(5+3) - sum(5) 就是计算5之后三个数字的和
  for (let i = 0; i + k <= len; ++i)
    if (prefixSum[i + k] - prefixSum[i] >= k * threshold) ++count;
  return count;
};
