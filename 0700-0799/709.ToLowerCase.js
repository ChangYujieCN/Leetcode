/** https://leetcode.com/problems/to-lower-case/
 * 转成小写
 * @param {string} str
 * @return {string}
 */

const toLowerCase = str => {
  const diff = "a".charCodeAt(0) - "A".charCodeAt(0);
  return Array.from(str)
    .map(char =>
      char >= "A" && char <= "Z"
        ? String.fromCharCode(char.charCodeAt(0) + diff)
        : char
    )
    .join("");
};

const toLowerCase2 = str => {
  return str.replace(/[A-Z]/g, char =>
    String.fromCharCode(char.charCodeAt(0) + 32)
  );
};
