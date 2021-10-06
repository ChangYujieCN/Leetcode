/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function(arr) {
  let len = arr.length,
    range = len >> 2;
  for (let i = 0; i < len - range; i++) {
    if (arr[i] === arr[i + range]) return arr[i];
  }
  return -1;
};
