/**https://leetcode.com/problems/flipping-an-image/
 * 给定一个像素图片，只有0和1，让每一行以中心轴翻转后，再对每一个元素取反
 * [
 *  [1,1,0],
 *  [1,0,1],
 *  [0,0,0]
 * ]
 * =>
 * [
 *  [1,0,0],
 *  [0,1,0],
 *  [1,1,1]
 * ]
 *  先把数组每一行都reverse,然后异或（1换成0，0换成1）
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  let row;
  for (let j = 0; j < A.length; j++) {
    row = A[j];
    for (let i = 0; i * 2 < A.length; i++) {
      if (row[i] === row[A.length - i - 1]) {
        row[i] = row[A.length - i - 1] = row[A.length - i - 1] ^ 1;
      }
    }
  }
  return A;
};
//这里用了一个奇妙的方法，当以中心轴分开的时候，如果两侧的数值不同，则反转之后再取异或，相当于不操作，即只需要操作两侧对称相同的元素让其取异或即可


const flipAndInvertImage2 = function(A) {
  return A.map(row => row.reverse().map(num => num ^ 1));
};
