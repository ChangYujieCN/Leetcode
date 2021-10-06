/**
 * https://leetcode.com/problems/jewels-and-stones/
 * 找出J里面的字母到底在S里面出现了几次
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  return S.replace(new RegExp(`[^${J}]`, "g"), "").length;
};

const numJewelsInStones2 = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
};
