// const zip = rows => rows[0].map((_, c) => rows.map(row => row[c]));
// var spiralOrder = function (matrix) {
//   return matrix.length && [...matrix.shift()].concat(matrix.length ? spiralOrder([...zip(matrix)].reverse()) : []);
// };

var spiralOrder = function (matrix) {
  const result = matrix[0];
  const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
  let currentDirIdx = 0;
  let [m, n] = [matrix.length, matrix[0].length];
  const position = [0, n - 1];
  let rest = (m - 1) * n;
  while (rest > 0) {
    for (let j = 1; j < m; j++) {
      rest--;
      position[0] += dirs[currentDirIdx][0];
      position[1] += dirs[currentDirIdx][1];
      result.push(matrix[position[0]][position[1]]);
    }
    m--;
    [m, n] = [n, m];
    currentDirIdx = (currentDirIdx + 1) % 4;
  }
  return result;
};
spiralOrder([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]);