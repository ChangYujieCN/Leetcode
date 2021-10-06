/**
 * @param {number[][]} M
 * @return {number[][]}
 */
const imageSmoother = function(M) {
  const m = M.length;
  const n = M[0].length;
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = M[i][j],
        cnt = 1;
      for (let k = 0; k < dirs.length; k++) {
        let x = i + dirs[k][0],
          y = j + dirs[k][1];
        if (x < 0 || x > m - 1 || y < 0 || y > n - 1) continue;
        // 经过下面的左移计算  M[i][j]可能已经发生变化   然后最后8位还存有原始信息
        sum += M[x][y] & 0xff;
        cnt++;
      }
      //  将M[i][j]保存在最后8位  将取值放在前 8位
      M[i][j] |= Math.floor(sum / cnt) << 8;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //直接右移取值
      M[i][j] >>= 8;
    }
  }
  return M;
};
imageSmoother([
  [1, 3, 2],
  [6, 2, 25]
]);
