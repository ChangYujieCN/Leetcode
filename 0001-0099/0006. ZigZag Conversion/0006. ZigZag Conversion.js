/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const len = s.length;
    const stringArray = Array.from({length:numRows},e=>"")
    let i = 0;
    while(i<len){
        // 构造竖列 要时常判断是否i过界 以便及时停止遍历
        // 有几行就构造几个数字  index代表行的序号
        for(let index=0;index<numRows && i<len; index++)  // vertically down
            stringArray[index] += s[i++]  
        // 构造斜列 要从下往上 而且要注意索引 第一行和最后一行是没有斜列的数字的  所以 index > 0 且index 从 numRows-2开始 index代表行的序号
        for(let index=numRows-2; index>0 && i<len; index--)  // obliquely up
            stringArray[index] += s[i++]
    }
    return stringArray.join('')
};
// convert("PAYPALISHIRING", 3)
// 1 2 3 4 5 6 7  
// P   A   H   N  1
// A P L S I I G  2
// Y   I   R      3
// 算法思路 将上面的形式拆解  为一个竖列  加上一个斜着的列 以此往复
// 所以我们从左往右构造 构造一个竖列  构造一个斜列 到最后将每一行链接起来就得到结果
  
