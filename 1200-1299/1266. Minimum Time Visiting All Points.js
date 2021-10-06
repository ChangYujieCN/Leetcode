/**
 * @param {number[][]} points
 * @return {number}
 */

const minTimeToVisitAllPoints = function(points) {
  let seconds = 0;
  for (let i = 1; i < points.length; i++) {
    seconds += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }
  return seconds;
};
