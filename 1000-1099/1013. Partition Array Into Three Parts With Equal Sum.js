/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = function(A) {
  const sum = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue);
  const total = sum(A);
  const average = total / 3;
  let part = 0,
    cnt = 0;
  for (const a of A) {
    part += a;
    if (part !== average) continue;
    ++cnt;
    part = 0;
  }
  return cnt >= 3 && total % 3 === 0;
};
canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]);
