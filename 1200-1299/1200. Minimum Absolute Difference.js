/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  let min_diff = Number.MAX_VALUE;
  //find min difference
  for (let i = 0; i < arr.length - 1; i++) {
    min_diff = Math.min(arr[i + 1] - arr[i], min_diff);
  }

  //form a list of pairs with min difference, ascending
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === min_diff) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};
