function myAtoi(s) {
    let sign = 1,
        base = 0,
        i = 0;
    s = s.trimLeft();
    if (s[i] === "-" || s[i] === "+") {
        sign = 1 - 2 * (s[i++] === "-");
    }
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    while (s[i] >= "0" && s[i] <= "9") {
        if (
            base > Math.trunc(INT_MAX / 10) ||  // 1
            (base === Math.trunc(INT_MAX / 10) && s[i] - "0" > INT_MAX % 10) // 2
        ) {
            if (sign === 1) return INT_MAX;
            else return INT_MIN;
        }
        base = 10 * base + (s[i++] - "0");
    }
    return base * sign;
}
//先讨论为正的情况 满足条件1的时候,就说明base的最后一位已经大于INT_MAX的十位,在往下计算x10必定会超过INT_MAX
//满足条件2的时候说明base的最后一位和INT_MAX的十位一样,接下来要比较个位,个位大于INT_MAX就要返回INT_MAX
//那么为负怎么办 因为有个例外  负的最大数是 -2**31 2147483648 
// (base === Math.trunc(INT_MAX / 10) && s[i] - "0" > INT_MAX % 10)  这个条件 -2**31执行结果是true 会返回 INT_MIN 其他正向越界也会返回INT_MAX
