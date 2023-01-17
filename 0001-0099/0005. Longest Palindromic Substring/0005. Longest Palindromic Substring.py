class Solution:

    def helper(self, s, l, r):
        while l > -1 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1:r]

    def longestPalindrome(self, s: str) -> str:
        res = ''
        for i in range(len(s)):
            res = max(res, self.helper(s, i, i + 1), self.helper(s, i, i), key=len)
        return res


class Solution:

    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n == 0:
            return ''
        res = s[0]
        dp = [[False] * n for _ in range(n)]
        for i in range(n):
            dp[i][i] = True
        for end in range(n):
            for start in range(end - 1, -1, -1):
                if s[start] == s[end]:
                    if end - start == 1 or dp[start + 1][end - 1]:
                        dp[start][end] = True
                        res = max(res, s[start:end + 1], key=len)
        return res


so = Solution()
so.longestPalindrome("a")
