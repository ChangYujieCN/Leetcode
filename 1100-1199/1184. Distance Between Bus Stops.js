/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start];
  let res = 0,
    total = 0;
  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      res += distance[i];
    }
    total += distance[i];
  }
  return Math.min(res, total - res);
};
