/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function(arr) {
  let countZero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) countZero++;
  }
  let len = arr.length + countZero;
  //已经预留出所有的位置  只要依次赋值就可以  不会出现超出给定数组长度的情况
  //We just need O(1) space if we scan from back
  //i point to the original array, j point to the new location
  for (let i = arr.length - 1, j = len - 1; i < j; i--, j--) {
    if (arr[i] !== 0) {
      if (j < arr.length) arr[j] = arr[i];
    } else {
      if (j < arr.length) arr[j] = arr[i];
      j--;
      if (j < arr.length) arr[j] = arr[i]; //copy twice when hit '0'
    }
  }
};

const duplicateZeros2 = function(arr) {
  const queue = [];
  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);
    if (arr[i] === 0) {
      queue.push(0);
    }
    arr[i] = queue.shift();
  }
};

//性能太低
const duplicateZeros3 = function(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i += 1;
    }
  }
  arr.length = len;
};
