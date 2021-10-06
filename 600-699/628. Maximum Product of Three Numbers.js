/**
 * @param {number[]} nums
 * @return {number}
 */
// Simply find out the three largest numbers and the two smallest numbers using one pass.
const maximumProduct = function(nums) {
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  for (const number of nums) {
    if (number > max1) {
      [max3, max2, max1] = [max2, max1, number];
    } else if (number > max2) {
      [max3, max2] = [max2, number];
    } else if (number > max3) {
      max3 = number;
    }
  // min1 min2  max3 max2 max1
    if (number < min1) {
      [min2, min1] = [min1, number];
    } else if (number < min2) {
      min2 = number;
    }
  }
  return Math.max(max1 * max2 * max3, min2 * min1 * max1);
};
console.log(maximumProduct([-1,-2,-3]))
// 3 positive -> 3 largest (+)
// 2 positive + 1 negative -> 1 largest (+) 2 smallest (-)
// 1 positive + 2 negative -> 1 largest (+) 2 smallest (-)
// 3 negative -> 3 largest (-)
