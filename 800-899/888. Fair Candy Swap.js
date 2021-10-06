/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const fairCandySwap = function(A, B) {
  const accumulate = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue);
  const dif = (accumulate(A) - accumulate(B)) / 2;
  const set = new Set();
  for (const a of A) set.add(a);
  for (const b of B) if (set.has(b + dif)) return [b + dif, b];
  return [0];
};

