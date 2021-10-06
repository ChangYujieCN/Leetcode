/**
 * @param {string} s
 * @return {boolean}
 */
// 时间复杂度 O(n)
// 空间复杂度 O(1)
const isAlphanumeric = (str) => {
  const charCode = str.charCodeAt(0);
  return (
    (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0)) || // numbers
    (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) || // uppercase
    (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) // lowercase
  );
};

const isPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) { // 采用start < end 可以保证只给定一个字符的时候 下面的 ++start  --end不会超过数组边界
    while (start < end && !isAlphanumeric(s[start])) ++start;
    while (start < end && !isAlphanumeric(s[end])) --end;
    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;
    ++start;
    --end;
  }
  return true;
};
