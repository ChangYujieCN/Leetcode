/**https://leetcode.com/problems/di-string-match/
 * 给定一个长度为N的字符串只包含“I”和“D”代表（Increase,Decrease）,则[0,1,...,N]将此数组排列满足以下条件
 * 如果S[i]="I",A[i]<A[i+1]
 * 如果S[i]="D",A[i]>A[i+1]
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
  let n = S.length,
    left = 0,
    right = n;
  let res = Array(n + 1);
  for (let i = 0; i < n; ++i) res[i] = S.charAt(i) === "I" ? left++ : right--;
  res[n] = left;
  return res;
};
