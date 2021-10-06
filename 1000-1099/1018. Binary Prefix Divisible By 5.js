/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = function(A) {
  const answer = [];
  let num = 0;
  for (let i = 0; i < A.length; i++) {
    num = (num * 2 + A[i]) % 5;
    answer.push(num === 0);
  }
  return answer;
};
