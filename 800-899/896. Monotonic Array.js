/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function(A) {
  let increase = true,
    decrease = true;
  for (let i = 1; i < A.length; i++) {
    // &= 同1为1 否则为0
    // 只要有一次不是递增 increase就为false 只要有一次不是递减 decrease就为false
    // increase decrease 互斥
    // 只要出现一次false 后面都为false
    increase &= A[i - 1] <= A[i];
    decrease &= A[i - 1] >= A[i];
  }
  return increase || decrease;
};
