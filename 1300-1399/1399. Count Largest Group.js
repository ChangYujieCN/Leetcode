/**
 * @param {number} n
 * @return {number}
 */
const dsum = (n) => {
  return n === 0 ? 0 : (n % 10) + dsum(Math.floor(n / 10));
};
const dsum2 = (n) => {
  return Array(n)
    .fill(undefined)
    .map((_, index) =>
      String(index + 1)
        .split("")
        .map(Number)
    );
};
const sum = (arr) =>
  arr.reduce((previousValue, currentValue) => previousValue + currentValue);
const countLargestGroup = function (n) {
  const newArr = dsum2(n);
  const map = new Map();
  for (const item of newArr) {
    const sums = sum(item);
    map.set(sums, [
      ...(map.get(sums) || []),
      Number(item.map(String).join(""))
    ]);
  }
  const sortedArrayByLength = [...map]
    .sort((a, b) => b[1].length - a[1].length)
    .map((item, index) => item[1]);
  return sortedArrayByLength.filter(
    (item) => item.length === sortedArrayByLength[0].length
  ).length;
};
const countLargestGroup2 = (n) => {
  const cnt = Array(37).fill(0);
  for (let i = 1; i <= n; ++i) {
    const c = dsum(i);
    cnt[c] = cnt[c] + 1;
  }
  const max = Math.max(...cnt);
  return cnt.filter((item) => item === max).length
};

