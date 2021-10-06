class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        height = len(obstacleGrid)
        width = len(obstacleGrid[0])
        dp = [[0] * (width + 1) for _ in range(height + 1)]
        dp[0][1] = 1
        for i in range(1, height + 1):
            for j in range(1, width + 1):
                if obstacleGrid[i - 1][j - 1] == 0:
                    dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        return dp[-1][-1]
