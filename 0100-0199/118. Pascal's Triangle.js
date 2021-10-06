/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const allRows = Array(numRows)
    .fill(undefined)
    .map((item) => []);
  for (let i = 0; i < numRows; i++) {
    allRows[i].length = i + 1;
    allRows[i][0] = allRows[i][i] = 1;
    for (let j = 1; j < i; j++) allRows[i][j] = allRows[i - 1][j - 1] + allRows[i - 1][j];
  }
  return allRows;
};

