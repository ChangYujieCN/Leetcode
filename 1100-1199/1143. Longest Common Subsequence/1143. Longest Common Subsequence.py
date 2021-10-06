class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                dp[i][j] = dp[i - 1][j - 1] + 1 if text1[i - 1] == text2[j - 1] else max(dp[i - 1][j], dp[i][j - 1])
        return dp[-1][-1]
# 优化 参与计算的只有两行 就可以优化空间复杂度
    def longestCommonSubsequence2(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        if m < n:
            text1, text2, m, n = text2, text1, n, m
        dp = [[0] * (n + 1) for _ in range(2)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1 if text1[i - 1] == text2[j - 1] else max(dp[(i - 1) % 2][j],
                                                                                                   dp[i % 2][j - 1])
        return dp[m % 2][-1]


so = Solution()
so.longestCommonSubsequence('fdasf', 'fadsad')

# x | a | b | d
# b | 0 | 1 | 1
# d | 0 | 1 | 2
# a | 1 | 1 | 2
# c | 0 | 1 | 2
