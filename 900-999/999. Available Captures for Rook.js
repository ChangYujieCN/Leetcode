/**
 * 计算车通过一次移动,能吃到哪些小兵,算出有几种情况
 * R代表白色车
 * .代表格子
 * B代表白色象可以阻挡白色车
 * p代表小兵
 * @param {string[][]} board
 * @return {number}
 */
const numRookCaptures = function(board) {
  let x0 = 0,
    y0 = 0,
    res = 0;
  //找到车的坐标
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        x0 = i;
        y0 = j;
        break;
      }
    }
  }
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  // 向4个方向寻找棋子
  for (const d of direction) {
    for (
      let x = x0 + d[0], y = y0 + d[1];
      0 <= x && x < 8 && 0 <= y && y < 8;
      x += d[0], y += d[1]
    ) {
      //找到小兵就增加
      if (board[x][y] === "p") res++;
      //不是空白格子说明被阻挡立即停止
      if (board[x][y] !== ".") break;
    }
  }
  return res;
};
