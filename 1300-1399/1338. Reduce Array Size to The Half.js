/**
 * @param {number[]} arr
 * @return {number}
 */
// 计数 然后对出现的次数进行排序
// 累加直到大于等于数组长度的1/2
const minSetSize = function (arr) {
  const counts = new Map();
  for (const elem of arr) counts.set(elem, (counts.get(elem) || 0) + 1);
  const sortedCounts = [...counts].sort((a, b) => b[1] - a[1]);
  let sum = 0;
  for (let i = 0; i < sortedCounts.length; i++) {
    sum += sortedCounts[i][1];
    if (sum * 2 >= arr.length) return i + 1;
  }
};

