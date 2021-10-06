/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
  // 3行 3列
  const aRow = Array(3).fill(0);
  const aCol = Array(3).fill(0);
  const bRow = Array(3).fill(0);
  const bCol = Array(3).fill(0);
  let aD1 = 0,
    aD2 = 0,
    bD1 = 0,
    bD2 = 0;
  let row = 0,
    col = 0;
  for (let i = 0; i < moves.length; i++) {
    row = moves[i][0];
    col = moves[i][1];
    // A先下 判断决定该轮是谁下棋
    if (i % 2 === 1) {
      // 如果某一行 或者某一列 或者某一对角 下了三次棋  必定胜利
      // 主对角轴  row === col
      // 副对角轴  row + col === 2
      if (++bRow[row] === 3 || ++bCol[col] === 3 || (row === col && ++bD1 === 3) || (row + col === 2 && ++bD2 === 3)) return "B";
    } else {
      if (++aRow[row] === 3 || ++aCol[col] === 3 || (row === col && ++aD1 === 3) || (row + col === 2 && ++aD2 === 3)) return "A";
    }
  }
  return moves.length === 9 ? "Draw" : "Pending";
};

// here are 8 ways to win for each player:
//
// 3 columns
// 3 rows
// 2 diagonals
// Players make moves one by one so all odd moves are for player A, even for B.
// Now we just need to track if we reach 3 in any line for any of the players.
// One array keeps all ways to win for each player:
//
// 0,1,2 - for rows
// 3,4,5 - for cols
// 6 - for diagonal top left - bottom right
// 7 - for diagonal top right - bottom left
const tictactoe2 = function(moves) {
  let a = Array(8).fill(0);
  let b = Array(8).fill(0);
  // console.log(a,b)
  for (let i = 0; i < moves.length; i++) {
    let row = moves[i][0],
      col = moves[i][1];
    let player = i % 2 === 0 ? a : b;
    player[row]++;
    player[col + 3]++;
    if (row === col) player[6]++;
    if (row + col === 2) player[7]++;
  }
  // console.log(a,b)
  for (let i = 0; i < 8; i++) {
    if (a[i] === 3) return "A";
    if (b[i] === 3) return "B";
  }
  return moves.length === 9 ? "Draw" : "Pending";
};
tictactoe2([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]])
