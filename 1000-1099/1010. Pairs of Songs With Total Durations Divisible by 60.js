/**
 * @param {number[]} time
 * @return {number}
 */
//  x % 60 = 60 - t % 60    t % 60 ∈ [0,59]  =>  x % 60 ∈ [1, 60] => (60 - (t % 60)) % 60 ∈ [0,59]
const numPairsDivisibleBy60 = function(time) {
  const c = Array(60).fill(0);
  let res = 0;
  for (const t of time) {
    res += c[(60 - (t % 60)) % 60];
    c[t % 60] += 1;
  }
  return res;
};
