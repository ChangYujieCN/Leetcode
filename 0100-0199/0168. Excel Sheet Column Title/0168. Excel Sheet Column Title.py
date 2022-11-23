# ord函数 返回对应的 ASCII 数值，或者 Unicode 数值
# chr将整数作为参数 返回对应的字符

# A   1     AA    26+ 1     BA  2×26+ 1     ...     ZA  26×26+ 1     AAA  1×26²+1×26+ 1
# B   2     AB    26+ 2     BB  2×26+ 2     ...     ZB  26×26+ 2     AAB  1×26²+1×26+ 2
# .   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
# .   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
# .   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
# Z  26     AZ    26+26     BZ  2×26+26     ...     ZZ  26×26+26     AAZ  1×26²+1×26+26

# Now we can see that ABCD＝A×26³＋B×26²＋C×26¹＋D＝1×26³＋2×26²＋3×26¹＋4

# But how to get the column title from the number? We can't simply use the n%26 method because:

# ZZZZ＝Z×26³＋Z×26²＋Z×26¹＋Z＝26×26³＋26×26²＋26×26¹＋26


# We can use (n-1)%26 instead, then we get a number range from 0 to 25.
class Solution:

    def convertToTitle(self, columnNumber: int) -> str:
        return ("" if columnNumber == 0 else self.convertToTitle(
            (columnNumber - 1) // 26) + chr((columnNumber - 1) % 26 + ord("A")))

    def convertToTitle2(self, columnNumber: int) -> str:
        capitals = [chr(x) for x in range(ord('A'), ord('Z') + 1)]
        result = []
        while columnNumber > 0:
            result.append(capitals[(columnNumber - 1) % 26])
            num = (num - 1) // 26
        result.reverse()
        return ''.join(result)


#1. 上文为何要麻烦创建一个数组保存字符串,而不直接用 + 拼接字符串, 因为字符串拼接相对于join速度慢得多

# n = (A+1) * 26^2 + (B+1) * 26^1 + (Z+1) * 26^0
# Why (A+1)? Because in char system 'A' is 0, but in excel system 'A' is one. Every char get an extra one.
# n - 1 = (A+1) * 26^2 + (B+1) * 26^1 + (Z) * 26^0
# (n-1)%26 =  Z                                                  (1)
# (n-1)/26 = (A+1) * 26^1 + (B+1) * 26^0                         (2)