/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = function(queries, words) {
  const fCount = Array(11).fill(0);
  // 求出来每个word的frequency
  // fCount 统计某个frequency出现的次数
  for (const word of words) {
    fCount[getFrequency(word)]++;
  }

  let sum = 0;
  // 对频次进行求和 赋值   最后要返回  words中频次大于queries[i]有几个
  for (let i = 0; i < fCount.length; i++) {
    sum += fCount[i];
    fCount[i] = sum;
  }
  const res = Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const count = getFrequency(queries[i]);
    res[i] = fCount[fCount.length - 1] - fCount[count];
  }
  return res;
};

// Helper function to calculate frequency of smallest element
const getFrequency = (str) => {
  const count = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    // "a".charCodeAt(0)  === 97
    ++count[str.charCodeAt(i) - 97];
  }
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return count[i];
  }
  return 0;
};

numSmallerByFrequency(["cbd", "bbb", "cc"], ["zaaaz", "a", "aa", "aaa"]);
