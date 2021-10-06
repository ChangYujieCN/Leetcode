/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function (arr) {
  const rawArr = [...arr];
  const sortedArray = arr.sort((a, b) => a - b);
  const rank = new Map();
  for (const item of sortedArray)
    if (!rank.get(item)) rank.set(item, rank.size + 1);
  const rankArr = rawArr.map((item) => rank.get(item));
  return rankArr;
};
