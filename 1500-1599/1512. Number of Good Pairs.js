/**
 * @param {number[]} nums
 * @return {number}
 */
const getPairs = (n) => {
  return n > 1 ? (n * (n - 1)) / 2 : 0;
};
const numIdenticalPairs = function (nums) {
  const cnt = {};
  for (const item of nums) cnt[item] = (cnt[item] || 0) + 1;
  let sum = 0;
  for (const item of Object.values(cnt)) sum += getPairs(item);
  return sum;
};

const numIdenticalPairs2 = function (nums) {
  let res = 0;
  const count = Array(101).fill(0);
  for (const item of nums) res += count[item]++;
  return res;
};
