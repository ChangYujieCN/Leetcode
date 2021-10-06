/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// 中位数定义: 中位数可将一个排序的数组,长度为a, 分成长度相等的两段,如果a是奇数,就是正中间的那个数字,
// 如果a是偶数,就是中间的两个数的平均值, 要把数组分为两段, 如果如果a是偶数那么左边一半的长度就是 a/2
// 如果a是奇数 我们把多出来的那个放在左边 那么左边一半的长度就是 (a + 1)/2  这两种情况可以都用 (a+1)>>1表示
//  left_part                |        right_part
//  A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
//  B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]

const findMedianSortedArrays = function (A, B) {
  let m = A.length;
  let n = B.length;
  // 确保 n >= m 不然 1 式 可能会出现j为负值 索引显然不能为负值 j =  Math.floor(m+n+1) / 2  - i 其中i∈[0,m]
  if (m > n) {
    [A, B, m, n] = [B, A, n, m];
  }
  // 确定 m<=n
  if (n === 0) {
    throw new Error("A B length can not be zero");
  }
  // 因为A是有序的 执行在A里面的二分查找
  // 确定合并之后的数组 左边一半的长度 halfLen
  // iMin iMax 同样代表切割方式而不是索引
  let [iMin, iMax, halfLen] = [0, m, (m + n + 1) >> 1];
  // 为什么halfLen这么取值 参见上面的中位数定义
  let maxOfLeft, minOfRight;
  // 无论如何要保证 maxOfLeft <= minOfRight
  while (iMin <= iMax) {
    // 这里的i,j不是指索引 而是指切割的方式  一个长度为m的数组有 m+1种切割方式
    const i = (iMin + iMax) >> 1;
    const j = halfLen - i; // 1

    /* 
        <a> (j == 0 or i == m or B[j-1] <= A[i]) and (i == 0 or j = n or A[i-1] <= B[j])
        Means i is perfect, we can stop searching.

        <b> j > 0 and i < m and B[j - 1] > A[i]
        Means i is too small, we must increase it.

        <c> i > 0 and j < n and A[i - 1] > B[j]
        Means i is too big, we must decrease it. 
        */

    //确保i<m 如果 i === m 的话 j = (m + n +1) >> 1 - i 如果m===n时 j===0 j-1是负值
    if (/* j>0 && */ i < m && B[j - 1] > A[i]) {
      // m <= n, i < m ==> j = (m+n+1)/2 - i > (m+n+1)/2 - m >= (2*m+1)/2 - m >= 0   不需要再加j>0的限定条件
      iMin = i + 1; // 考虑  iMin == iMax 避免死循环
      // 确保i>0 如果i===0 i-1是负值
    } else if (/* j<n && */ i > 0 && A[i - 1] > B[j]) {
      //m <= n, i > 0 ==> j = (m+n+1)/2 - i < (m+n+1)/2 <= (2*n+1)/2 <= n
      iMax = i - 1;
    } else {
      // 特殊情况
      if (i === 0) {
        maxOfLeft = B[j - 1];
      } else if (j === 0) {
        maxOfLeft = A[i - 1];
      } else {
        maxOfLeft = Math.max(A[i - 1], B[j - 1]);
      }
      //  m + n是奇数
      if ((m + n) & 1) return maxOfLeft;
      //  最后一种分割的方法是i在m处 左边有m个元素  从0 - m一共m+1种分割方法
      if (i === m) {
        minOfRight = B[j];
      } else if (j === n) {
        minOfRight = A[i];
      } else {
        minOfRight = Math.min(A[i], B[j]);
      }
      return (maxOfLeft + minOfRight) / 2;
    }
  }
};

// A[0] ... A[i-1] | A[i] ... A[m-1]
// B[0] ... B[j-1] | B[j] ... B[n-1]

var findMedianSortedArrays = function (A, B) {
  let [m, n] = [A.length, B.length];
  if (n < m) [A, B, m, n] = [B, A, n, m];
  if (n === 0) throw new Error();  let [iMin, iMax, halfLen] = [0, m, (m + n + 1) >> 1];
  let maxOfLeft, minOfRight;
  while (iMin <= iMax) {
    const i = (iMin + iMax) >> 1;
    const j = halfLen - i;

    if (i < m && B[j - 1] > A[i]) iMin = i + 1;
    else if (i > 0 && A[i - 1] > B[j]) iMax = i - 1;
    else {
      if (i === 0) maxOfLeft = B[j - 1];
      else if (j === 0) maxOfLeft = A[i - 1];
      else maxOfLeft = Math.max(A[i - 1], B[j - 1]);
      if ((m + n) & 1) return maxOfLeft;
      if (i === m) minOfRight = B[j];
      else if (j === n) minOfRight = A[i];
      else minOfRight = Math.min(A[i], B[j]);
      return (maxOfLeft + minOfRight) / 2;
    }
  }
};
