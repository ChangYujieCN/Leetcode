# 1, If p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];
# 2, If p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];
# 3, If p.charAt(j) == '*':
#    here are two sub conditions:
#                1   if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]  //in this case, a* only counts as empty
#                2   if p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.':
#                               dp[i][j] = dp[i-1][j]    //in this case, a* counts as multiple a
#                            or dp[i][j] = dp[i][j-1]   // in this case, a* counts as single a
#                            or dp[i][j] = dp[i][j-2]   // in this case, a* counts as empty
from functools import cache
import numpy


class Solution:

    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        dp[0][0] = True
        for j in range(len(p)):  # 1
            dp[0][j + 1] = p[j] == '*' and dp[0][j - 1]
        for i in range(len(s)):
            for j in range(len(p)):
                if p[j] == '.':
                    dp[i + 1][j + 1] = dp[i][j]
                if p[j] == s[i]:
                    dp[i + 1][j + 1] = dp[i][j]
                if p[j] == '*':
                    if p[j - 1] != s[i] and p[j - 1] != '.':
                        dp[i + 1][j + 1] = dp[i + 1][j - 1]
                    else:
                        dp[i + 1][j + 1] = dp[i + 1][j] or dp[i][j + 1] or dp[i + 1][j - 1]
        print(numpy.matrix(dp))
        return dp[-1][-1]


class Solution:
    # TLE
    def isMatch2(self, text, pattern):
        if not pattern:
            return not text
        # bool(str) empty strings evaluate to False, but everything else evaluates to True
        first_match = bool(text) and pattern[0] in {text[0], '.'}
        if len(pattern) >= 2 and pattern[1] == '*':
            return self.isMatch2(text, pattern[2:]) or (first_match and self.isMatch2(text[1:], pattern))
        else:
            return first_match and self.isMatch2(text[1:], pattern[1:])

    def isMatch(self, text, pattern):

        @cache
        def dp(i, j):
            if j == len(pattern):
                ans = i == len(text)
            else:
                first_match = i < len(text) and pattern[j] in {text[i], '.'}
                if j + 1 < len(pattern) and pattern[j + 1] == '*':
                    ans = dp(i, j + 2) or first_match and dp(i + 1, j)
                else:
                    ans = first_match and dp(i + 1, j + 1)
            return ans

        return dp(0, 0)

    def isMatch3(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [[False] * (n + 1) for _ in range(m + 1)]

        for i in range(m, -1, -1):
            for j in range(n, -1, -1):
                if i == m and j == n:
                    dp[i][j] = True
                else:
                    first_match = i < m and j < n and p[j] in {s[i], '.'}
                    if j + 1 < n and p[j + 1] == '*':
                        dp[i][j] = dp[i][j + 2] or first_match and dp[i + 1][j]
                    else:
                        dp[i][j] = first_match and dp[i + 1][j + 1]

        return dp[0][0]


# dp 代表的是字符的长度

so = Solution()
# so.isMatch('aab', 'c*a*b')
so.isMatch2("abc", "a.c")
# 1 处理这种情况
# s = "aab" p = "c*a*b"