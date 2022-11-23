# import numpy
from typing import List


class Solution:

    def maximalSquare(self, matrix: List[List[str]]) -> int:
        m, n = len(matrix), len(matrix[0])
        sz = 0
        dp = [[0] * (n + 1) for i in range(m + 1)]
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == "1":
                    dp[i + 1][j + 1] = min(dp[i][j + 1],
                                           dp[i + 1][j], dp[i][j]) + 1
                    # print(numpy.matrix(dp))
                    sz = max(dp[i + 1][j + 1], sz)
        return sz * sz


# Time complexity : O(mn). Single pass - row x col (m=row; n=col)
# Space complexity : O(mn). Additional space for dp grid (don't need to worry about additional 1 row and col).
ma = [
    ["1", "0", "1", "0"],
    ["1", "0", "1", "1"],
    ["1", "0", "1", "1"],
    ["1", "1", "1", "1"],
]
so = Solution()
so.maximalSquare(ma)
