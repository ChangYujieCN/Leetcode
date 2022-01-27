from typing import List


class Solution:
    def maxKilledEnemies(self, grid: List[List[str]]) -> int:
        if len(grid) == 0:
            return 0
        pre = 0
        m, n = len(grid), len(grid[0])
        boom = [[0] * n for _ in range(m)]
        for i in range(m):
            pre = 0
            for j in range(n):
                if grid[i][j] == "W":
                    pre = 0
                elif grid[i][j] == "E":
                    pre += 1
                boom[i][j] += pre
            pre = 0
            for j in range(n - 1, -1, -1):
                if grid[i][j] == "W":
                    pre = 0
                elif grid[i][j] == "E":
                    pre += 1
                boom[i][j] += pre
        for j in range(n):
            pre = 0
            for i in range(m):
                if grid[i][j] == "W":
                    pre = 0
                elif grid[i][j] == "E":
                    pre += 1
                boom[i][j] += pre
            pre = 0
            for i in range(m - 1, -1, -1):
                if grid[i][j] == "W":
                    pre = 0
                elif grid[i][j] == "E":
                    pre += 1
                boom[i][j] += pre
        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == "0":
                    ans = max(ans, boom[i][j])
        return ans

