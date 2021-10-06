/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
  let k = 0;
  const resultArr = [];
  const countArr = new Int8Array(1001);
  for (const i of arr1) {
    countArr[i]++;
  }
  //把arr2中有的元素全部添加到resultArr中去
  for (const j of arr2) {
    while (countArr[j]-- > 0) {
      resultArr[k++] = j;
    }
  }
  //此时arr2中有的元素已经全部添加,剩下的元素本身就是排好序的,从头遍历一遍就可
  for (let l = 0; l < 1001; l++) {
    while (countArr[l]-- > 0) {
      resultArr[k++] = l;
    }
  }
  return resultArr;
};
