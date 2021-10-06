/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const ans = [];
  if (!digits.length) return ans;
  ans.push("");
  const mapping = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  while (ans[0].length !== digits.length) {
    const t = ans.shift();
    for (const item of [...mapping[digits[t.length]]]) {
      ans.push(t + item);
    }
  }
  return ans;
};
letterCombinations("23");
