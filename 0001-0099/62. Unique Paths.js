/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 1. 定义数组元素的含义
// 机器人从左上角走到(i, j), 一共有dp[i][j]种路径  要求的结果就是dp[i-1][j-1]
// 2. 找出关系数组元素间关系式
// 机器人到达(i, j)这个点只能从(i-1, j)或者(i, j-1走过来)
// 计算所有可能的步骤则 dp[i][j] = dp[i-1][j] + dp [i][j-1]
// 3. 找出初始值
// i j不能有为0的情况 因为关系式有 i-1 和 j-1
// i j为0 即最上一行 最左边一列
const uniquePaths = function (m, n) {
  const dp = Array(m).fill(Array(n).fill(1));
  for (let i = 1; i < m; i++)
      for (let j = 1; j < n; j++)
          dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
  return dp[m - 1][n - 1];
};
