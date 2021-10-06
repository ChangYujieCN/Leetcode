/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function (rectangle) {
  this.rectangle = [...rectangle];
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (let i = row1; i <= row2; ++i)
    for (let j = col1; i <= col2; ++j) this.rectangle[i][j] = newValue;
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rectangle[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
const SubrectangleQueries2 = function (rectangle) {
  this.rectangle = [...rectangle];
  this.snapshots = [];
};
SubrectangleQueries2.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  this.snapshots.push([row1, col1, row2, col2, newValue]);
};
SubrectangleQueries2.prototype.getValue = function (row, col) {
  const n = this.snapshots.length;
  // 改变的肯定是最后一步  所以要倒着来  只要在范围内 就直接返回就行了
  for (let i = n - 1; i >= 0; i--)
    if (
      this.snapshots[i][0] <= row &&
      row <= this.snapshots[i][2] &&
      this.snapshots[i][1] <= col &&
      col <= this.snapshots[i][3]
    )
      return this.snapshots[i][4];
  return this.rectangle[row][col];
};
