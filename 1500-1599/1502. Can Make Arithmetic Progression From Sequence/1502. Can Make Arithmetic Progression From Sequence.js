/**
 * @param {number[]} arr
 * @return {boolean}
 */
//  Time: O(N)
//  Space: O(N)
var canMakeArithmeticProgression = function (arr) {
  const min = Math.min(...arr);
  const gap = (Math.max(...arr) - min) / (arr.length - 1); // 获取每两个数相差多少的平均值
  if (gap === 0) return true; // 最大值和最小值相等  不用检测
  const set = new Set(arr.map((item) => item - min)); // 根据set的特性 如果长度发生变化 则肯定有两个数字相等
  const every = Array.from(set).every((diff) => diff % gap === 0); // diff必须是gap的整数倍
  return set.size === arr.length && every;
};
//  Time: O(N)
//  Space: O(1)
const canMakeArithmeticProgression2 = function (arr) {
  const min = Math.min(...arr);
  const gap = (Math.max(...arr) - min) / (arr.length - 1); // 获取每两个数相差多少的平均值
  if (gap === 0) return true; // 最大值和最小值相等  不用检测
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == min + i * gap) i += 1;
    else {
      const dis = arr[i] - min; // 计算当前数字本来应该在的位置 
      if (dis % gap !== 0) return false; // 1
      const pos = parseInt(dis / gap); // 转成整数  因为后面会用到它当索引
      // 这里如果不判断相等 两个数字相等 交换没有任何意义 同时i无法再增加 会陷入死循环
      // 同时 等差数列要么每个元素都想相等 要么 都不相等 , 前面相等的情况已经判断过, 这里的每个元素必定不相等 
      if (arr[pos] === arr[i]) return false; 
      // 只要能继续交换下去 只要能满足条件1 所有的数字都会被遍历到 
      [arr[pos], arr[i]] = [arr[i], arr[pos]]; //交换位置
    }
  }
  return true;
};
canMakeArithmeticProgression2([1,20,10,19])