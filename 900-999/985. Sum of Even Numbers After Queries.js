/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
// 1. even + odd    deduct A[index]
// 2. even + even   add both
// 3. odd + odd     add both
// 4. odd + even    no influence

const sumEvenAfterQueries = function(A, queries) {
  let sum = 0;
  for (const num of A) {
    if (num % 2 === 0) sum += num;
  }
  const ans =[];
  for (const [val, index] of queries) {
    // 如果之前就是偶数 那么就扣除这个数字
    if (A[index] % 2 === 0) {
      // 1.  2.
      sum -= A[index];
    }
    // 加上新数字  并不知道val的奇偶性  接下来进行判断新的值
    A[index] += val;
    if (A[index] % 2 === 0) {
      // 2. 3.
      sum += A[index];
    }
    ans.push(sum);
  }
  return ans;
};
