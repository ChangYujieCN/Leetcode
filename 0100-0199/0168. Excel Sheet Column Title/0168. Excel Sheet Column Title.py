# ord函数 返回对应的 ASCII 数值，或者 Unicode 数值
# chr将整数作为参数 返回对应的字符
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        return (
            ""
            if columnNumber == 0
            else self.convertToTitle((columnNumber - 1) // 26)
            + chr((columnNumber - 1) % 26 + ord("A"))
        )


# columnNumber - 1  // 26 的 -1 有什么用
# 首先是对26进行整除  大部分情况下 对结果没有影响
# 只有一个情况 能被26整除的时候  结果会少1
# 如果不对其进行-1 则为导致高位出现一个1 会多出一个A
# 公式推理
# ABZ
# n = (A) * 26^2 + (B) * 26^1 + (Z) * 26^0
# n = (1+0) * 26^2 + (1+1) * 26^1 + (1+25) * 26^0
# n = (1+0) * 26^2 + (1+1) * 26^1 + (1+25) * 26^0
# n - 1 = (1+0) * 26^2 + (1+1) * 26^1 + (25)
# (n - 1)%26 = 25
# (n - 1)//26 = (1+0) * 26^2 + (1+1)

