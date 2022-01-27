class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        a, b, c = len(s1), len(s2), len(s3)
        if c != a + b:
            return False
        dp = [[True] * (b + 1) for _ in range(a + 1)]
        for i in range(1, a + 1):
            dp[i][0] = dp[i - 1][0] and s1[i - 1] == s3[i - 1]
        for j in range(1, b + 1):
            dp[0][j] = dp[0][j - 1] and s2[j - 1] == s3[j - 1]
        for i in range(1, a + 1):
            for j in range(1, b + 1):
                # 能够构成交错字符串 只要s1前面i-1个元素和s2前j个元素能构成交错字符串且s1第i个元素等于s3第i+j个元素
                # 或者...
                dp[i][j] = (dp[i - 1][j] and s1[i - 1] == s3[i - 1 + j]) or (
                    dp[i][j - 1] and s2[j - 1] == s3[i - 1 + j])
        return dp[-1][-1]
