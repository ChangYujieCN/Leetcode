/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  const cnt = {};
  for (const item of arr) cnt[item] = (cnt[item] || 0) + 1;
  let lucky = -1;
  for (const [key, value] of Object.entries(cnt)) {
    if (Number(key) === value) lucky = value;
  }
  return lucky;
};

