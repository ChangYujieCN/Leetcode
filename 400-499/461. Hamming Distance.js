/** https://leetcode.com/problems/self-dividing-numbers/
 * 汉明距离就是将两个数字转化为二进制后，数字不同的位有几个
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
  //异或 相同为0，不同为1
  return [...(x ^ y).toString(2)]
    .map(x => parseInt(x))
    .reduce((acc, x) => acc + x);
};
const hammingDistance2 = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
  //转化为二进制字符串用正则表达式将全局中的0换为''空再统计字符串长度
};

const hammingDistance3 = function(x, y) {
  return [...(x ^ y).toString(2)].filter(c => c === "1").length;
};
