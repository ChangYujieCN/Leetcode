/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
  const stack = [];
  for (const char of S) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
//双指针
const removeDuplicates2 = function(s) {
  s = [...s];
  let i = 0,
    n = s.length;
  for (let j = 0; j < n; ++j, ++i) {
    //将j位置的值赋值到i  如果i和前一个元素一样则前移两位代表清空
    s[i] = s[j];
    if (i > 0 && s[i - 1] === s[i]) i -= 2;
  }
  return s.join("").substring(0, i);
};
const removeDuplicates3 = function(S) {
  let startLength;
  //. 匹配除了换行符的任意字符 \1代表前一个括号匹配的内容
  const pattern = /(.)\1/gm;
  while (S.length !== startLength) {
    startLength = S.length;
    S = S.replace(pattern, "");
  }
  return S;
};
