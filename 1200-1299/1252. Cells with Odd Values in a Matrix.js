/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function(n, m, indices) {
  const rows = Array(n);
  const columns = Array(m);
  for (const idx of indices) {
    // 按位异或后赋值
    rows[idx[0]] ^= true;
    columns[idx[1]] ^= true;
  }
  let cnt = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      // ^按位异或 两个值相同 值为0 不同为1
      cnt += rows[i] ^ columns[j] ? 1 : 0; // only cell (i, j) with odd times count of row + column would get odd values.
    }
  }
  return cnt;
};
oddCells(2, 3, [[0, 1], [1, 1]]);

