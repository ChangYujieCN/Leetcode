class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.lstrip()
        if len(s) == 0:
            return 0
        i = 0
        sign = 1
        base = 0
        if s[0] == '-':
            i += 1
            sign = -1
        if s[0] == '+':
            i += 1
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        while i < len(s) and s[i].isdigit():
            if INT_MAX // 10 < base or (INT_MAX // 10 == base and int(s[i]) > INT_MAX % 10):
                return INT_MAX if sign == 1 else INT_MIN
            base = base * 10 + int(s[i])
            i += 1
        return base * sign


a = Solution()
a.myAtoi("42")
