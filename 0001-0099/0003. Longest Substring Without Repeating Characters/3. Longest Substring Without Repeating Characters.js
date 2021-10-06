/**
 * @param {string} s
 * @return {number}
 */
//算法思路: 从左向右进行扫描 同时计算长度  如果遇到重复 如 a b..... a(第一个a的索引为 i) 
// 就选取重复值处的索引 + 1 => i+1为起点重新计算长度
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let maxLen = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        // map.get(s[i]) 存在值说明已经存在一s[i]处的值 
        // 为什么要判断大于 start 
        // 考虑 abbabc 在走到第二次的b时候 start已经被调整到 2
        // 再走到a发现又一次存在重复  start还是要以2为准而不能调整到1
        // 这样做不会造成遗漏  因为每走一步都会进行长度的更新  每次开始点的变更都代表一个局部最大的长度
        // 你可能会问  ac...bd...b...a... 这样一个字符串 从开头进行遍历 到第二个b处的时候start发生了第一次变更, 
        // start被调整到d
        // a 到 b之间都不需要考虑,也不可能作为start的值  假设我们选取了c作为一个start值, 他遭遇的情况和从a开始进行遍历一样,
        // 长度更新的时候反而还比从a小 所以无需考虑这些
        //  map.get(s[i]) === start 对应  abca
        //  map.get(s[i]) > start 对应  abb
        if (map.get(s[i]) >= start) start = map.get(s[i])+1  // 1
        map.set(s[i], i) // 记录下来每个出现的字幕  后面用get检测 如果能检测到 说明出现了重复
        // 这里为什么 i - start就可以获取到长度 是因为1里面存储是上次重复的位置 多存储了一位 
        // 例如 abbabc 我们到了第三个字母 经过步骤1 我们把start设置为了1   因为不能有重复 所以只能从start开始后开始进行遍历
        maxLen = Math.max(maxLen, i - start+1)
    }
    return maxLen
};
lengthOfLongestSubstring("abbabc")


