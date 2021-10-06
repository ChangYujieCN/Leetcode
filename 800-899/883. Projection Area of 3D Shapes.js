/**
 * [
 * ---------------
 *    |[2,2,2],
 *
 *   |[2,1,2],
 *
 *  |[2,2,2]
 * ] 取各个位置的坐标,(0,0)高度为2,(0,1)高度为2,(0,2)高度2
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function(grid) {
  let totalArea = 0,
    //xz投影
    xz,
    //yz投影
    yz;
  for (let i = 0; i < grid.length; i++) {
    //每次都要置空,因为每次都是从新的坐标开始 和以前的坐标无关
    xz = 0;
    yz = 0;
    //依次遍历找出最高的
    for (let j = 0; j < grid.length; j++) {
      xz = Math.max(xz, grid[i][j]);
      yz = Math.max(yz, grid[j][i]);
      //只要grid[i][j]有值 就代表一定有面积
      if (grid[i][j]) totalArea++;
    }
    totalArea += xz + yz;
  }
  return totalArea;
};
