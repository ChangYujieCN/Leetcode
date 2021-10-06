/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function (nums) {
  let min = 0,sum = 0;
  for (const item of nums) {
    sum += item;
    min = Math.min(min, sum);
  }
  return 1 - min;
};
