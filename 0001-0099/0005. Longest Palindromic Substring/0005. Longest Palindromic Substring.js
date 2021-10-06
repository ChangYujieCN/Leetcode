/**
 * @param {string} s
 * @return {string}
 */
const extendPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--; // 1
        right++; // 2
    }

    // 因为经历了上面的步骤1,2后,最后的结果肯定是不满足while条件的, 而且长度还超了2, 因为j,k各自多跑了1个单位, 所以要返回
    // s.substring(left+1. right)
    // 当 left+1 === right 的时候 substring函数返回 ""
    return s.substring(left + 1, right);
};
// extendPalindrome(s, i, i) 针对  abba 情况
// extendPalindrome(s, i, i + 1) 针对 aba 情况
const longestPalindrome = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        res = [extendPalindrome(s, i, i), extendPalindrome(s, i, i + 1), res].reduce((accumulator, currentValue) => {
            return accumulator.length > currentValue.length ? accumulator : currentValue
        }, "")
    }
    return res
};


