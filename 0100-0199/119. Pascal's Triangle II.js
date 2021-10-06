/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const row = Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i < rowIndex + 1; i++)
    for (let j = i; j >= 1; j--)
        row[j] += row[j - 1];
  return row;
};
