/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
  const x1 = coordinates[0][0];
  const y1 = coordinates[0][1];
  const x2 = coordinates[1][0];
  const y2 = coordinates[1][1];
  const dx = x2 - x1;
  const dy = y2 - y1;
  for (const coo of coordinates) {
    const x = coo[0];
    const y = coo[1];
    if (dy * (x - x1) !== dx * (y - y1)) return false;
  }
  return true;
};

// dy / dx = (y - y1) / (x - x1)
