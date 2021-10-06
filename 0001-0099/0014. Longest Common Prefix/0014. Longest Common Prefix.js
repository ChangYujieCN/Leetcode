/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const common = strs[0];
  let commonLen = strs[0].length
  for (let i = 1; i < strs.length; i++)
    for (let j = ( commonLen = Math.min(commonLen, strs[i].length)) - 1; j >= 0; j--)
      if (strs[i][j] !== common[j]) commonLen = j;
  return common.slice(0,commonLen);
};
