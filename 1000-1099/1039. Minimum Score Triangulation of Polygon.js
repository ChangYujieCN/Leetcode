/**
 * @param {number[]} A
 * @param i
 * @param j
 * @param res
 * @return {number}
 */
const dp = Array.from({ length: 50 }, (e) => Array(50).fill(0));
const minScoreTriangulation = function (A, i = 0, j = 0, res = 0) {
  // 如果j为0 则遍历的终点未确认  设定遍历终点
  if (j === 0) j = A.length - 1;
  // 如果之前记录就直接去取之前的多边形记录的值
  if (dp[i][j] !== 0) return dp[i][j];
  for (let k = i + 1; k < j; ++k)
    res = Math.min(
      res === 0 ? Number.MAX_SAFE_INTEGER : res,
      minScoreTriangulation(A, i, k) +
        A[i] * A[j] * A[k] +
        minScoreTriangulation(A, k, j)
    );
  return (dp[i][j] = res);
};

// 因为最后得到的结果是 dp[0][length-1] 已经是最终结果
// 而表达式 dp[i][j] = Math.min(dp[i][j] === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j], dp[i][k] + A[i] * A[j] * A[k] + dp[k][j]);
// 依赖 dp[k][j]  所以需要先计算出 dp[k][j] dp[i][k]
const minScoreTriangulation2 = (A) => {
  const dp = Array.from({ length: 6 }, (e) => Array(6).fill(0));
  for (let i = A.length - 1; i >= 0; --i)
    for (let j = i + 1; j < A.length; ++j)
      for (let k = i + 1; k < j; ++k) {
        dp[i][j] = Math.min(
          dp[i][j] === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j],
          dp[i][k] + A[i] * A[j] * A[k] + dp[k][j]
        );
        console.log(dp, i, j, k);
      }
  return dp[0][A.length - 1];
};
// minScoreTriangulation2([1, 3, 1, 4, 1, 5]);
