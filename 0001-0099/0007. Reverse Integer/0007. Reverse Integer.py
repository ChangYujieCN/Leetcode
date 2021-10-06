class Solution:
    def reverse(self, x: int) -> int:
        max_int = 2 ** 31 - 1
        min_int = -(2 ** 31)
        res = 0
        while x != 0:
            tail = x % 10 if x > 0 else x % -10
            if (
                x > 0
                and (
                    max_int // 10 > res
                    or (max_int // 10 == res and max_int % 10 > tail)
                )
            ) or (
                x < 0
                and (
                    int(min_int / 10) < res
                    or (int(min_int / 10) == res and min_int % -10 < tail)
                )
            ):
                res = res * 10 + tail
                x = int(x / 10)
            else:
                return 0
        return res