const reverse = function(x) {
    let result = 0;
    while (x !== 0) {
        const tail = x % 10;
        const newResult = (Math.imul(result,10) + tail) | 0
        if (Math.trunc(newResult / 10) !== result) return 0  // 这里不需要减去tail 因为除10自然去掉个位
        result = newResult;
        x = Math.trunc(x / 10)
    }
    return result;
};
//位运算会强制使用32位整数
// 由于 |0这种做法 对于乘法不起作用 需要Math.mul
// const a = 210 | 0; // 强制使用32bit整数来模拟此题目的情况
// https://stackoverflow.com/questions/19843652/32-bit-signed-integer-math-in-javascript

