/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let sum = 0,
    count = 0;
  for (const ele of s) {
    sum += ele === "L" ? -1 : 1;
    if (sum === 0) {
      count++;
    }
  }
  return count;
};
