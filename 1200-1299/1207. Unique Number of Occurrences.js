/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  const mapObj = {};
  for (const elem of arr) {
    mapObj[elem] = (mapObj[elem] || 0) + 1;
  }
  return Object.keys(mapObj).length === new Set(Object.values(mapObj)).size;
};
