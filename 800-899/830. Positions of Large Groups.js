/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function(S) {
  let prev = 0;
  let cnt = 1;
  const record = [];
  for (let i = 1; i <= S.length; i++) {
    if (S[i] !== S[prev]) {
      if (cnt >= 3) {
        record.push([prev, i-1]);
      }
      prev = i;
      cnt = 1;
    } else {
      cnt++;
    }
  }
  return record;
};

