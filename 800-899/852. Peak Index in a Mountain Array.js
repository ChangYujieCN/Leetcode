/**https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * 一个单峰数组A里面满足一个数字A[i]   A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 找出这个数字的index
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
  return A.indexOf(Math.max(...A));
};

const peakIndexInMountainArray2 = function(A) {
  let l = 0,
    r = A.length - 1,
    mid;
  while (l < r) {
    mid = Math.round((l + r) / 2);
    if (A[mid] < A[mid + 1]) l = mid;
    else if (A[mid - 1] > A[mid]) r = mid;
    else return mid;
  }
};

const peakIndexInMountainArray3 = function(A) {
  let gold1 = (l, r) => l + Math.round((r - l) * 0.382);
  let gold2 = (l, r) => l + Math.round((r - l) * 0.618);
  let l = 0,
    r = A.length - 1;
  let [x1, x2] = [gold1(l, r), gold2(l, r)];
  while (x1 < x2) {
    if (A[x1] < A[x2]) {
      l = x1; //将 x1 作为搜索的起点
      x1 = x2; //因为 (0.618 - 0.382 )/0.618 = 0.382
      x2 = gold1(x1, r); //计算得到新搜索x2 的位置
    } else {
      r = x2;
      x2 = x1;
      x1 = gold2(l, x2);
    }
  }
  if (A[x1 + 1] > A[x1] && A[x1] > A[x1 - 1]) {
    return r;
  }
  if (A[x1 + 1] < A[x1] && A[x1] < A[x1 - 1]) {
    return l;
  }
  return x1;
};
