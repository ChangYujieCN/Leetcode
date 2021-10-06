/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/**
 * 定义一个数组dp[i][j] 描述 word1[0..i)转化为word2[0..j)所需要的最小步数
 * 将一个字符串转化为空字符串 和把空字符串转化为一个字符串显然 需要的操作数为  dp[i][0] = i  dp[0][j] = j
 * 如果我们知道word1[0..i-1)如何转化为word2[0..j-1) 即 dp[i-1][j-1] 如果word1[i-1] === word2[j-1] 则不需要操作 dp[i][j] = dp[i-1][j-1]
 * 如果word1[i-1] !== word2[j-1] 需要考虑三种情况
 * 1. 用word2[j-1]替换word1[i-1]  dp[i][j] = dp[i-1][j-1] + 1
 * 2. 如果 word1[0..i-1) = word2[0..j) 删除 word1[i-1]  dp[i][j] = dp[i-1][j] +1
 * 3. 如果 word1[0..i) + word2[j-1] = word2[0..j) 插入 word2[j-1]到word1[0..i) dp[i][j] = dp[i][j-1] + 1
 * 当word1[i-1] != word2[j-1] dp[i][j]是上面三个值的最小值
 */
const minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from({ length: m + 1 }, (e) => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) dp[i][0] = i;
  for (let i = 1; i <= n; i++) dp[0][i] = i;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  return dp[m][n];
};
