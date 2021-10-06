/**
 * 如果夏洛克N的时候输了那么他为N+1的时候 必定是赢的 因为他足够聪明  要把N留给华生  从1开始  夏洛克输 - 赢  -  输 -  赢
 * 夏洛克的策略是  为偶数的时候 选择x = 1 N = N -1 把奇数留给华生
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = function(N) {
  return (N & 1) === 0;
};

const divisorGame2 = function(N) {
  const dp = Array(N + 1).fill(false);
  dp[0] = null;
  dp[1] = false;
  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        //如果数组里面存在的这个数字为false  则只需要将这个数字给对方就可以获得胜利
        if (dp[i - j] === false) {
          dp[i] = true;
          break;
        }
      }
    }
  }
  return dp[N];
};
