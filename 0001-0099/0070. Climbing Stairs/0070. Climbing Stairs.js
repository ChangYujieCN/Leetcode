/**
 * @param {number} n
 * @return {number}
 */
// 问题可以从 n = 3的时候慢慢推导
const climbStairs = function (n) {
  if (n === 1 || n === 2) return n;
  let one = 2; //初始化为走到第二级台阶的走法
  let two = 1; //初始化为走到第一级台阶的走法
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    //最后跨2步 + 最后跨1步的走法
    sum = two + one;
    two = one;
    one = sum;
  }
  return sum;
};
