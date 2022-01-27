from typing import List
from functools import lru_cache
import math


class Solution:
    def minDistance(self, houses: List[int], k: int) -> int:
        n = len(houses)
        houses.sort()
        costs = [[0] * n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                median_pos = houses[(i + j) >> 1]
                for m in range(i, j + 1):
                    costs[i][j] += abs(median_pos - houses[m])
        # @functools.lru_cache(maxsize=None, typed=False)
        # maxsize缓存的最大数量
        # typed=True（注意，在 functools32 中没有此参数），
        # 则不同参数类型的调用将分别缓存，例如 f(3) 和 f(3.0)。
        # 缓存函数的值 避免重复计算同一个值
        @lru_cache(None)
        def dp(k, i):  #
            if k == 0 and i == n:
                return 0
            if k == 0 or i == n:
                return math.inf
            ans = math.inf
            for j in range(i, n):
                cost = costs[i][j]  # Try to put a mailbox among house[i:j]
                ans = min(ans, cost + dp(k - 1, j + 1))
            return ans

        return dp(k, 0)
