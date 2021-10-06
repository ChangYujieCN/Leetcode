/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  return nums.map(String).reduce((previousValue, currentValue) => {
    return !(currentValue.length & 1) ? 1 + previousValue : previousValue;
  }, 0);
};
