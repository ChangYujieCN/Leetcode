from itertools import product
from typing import List
from functools import lru_cache, cache
import math
import numpy


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
        print(numpy.matrix(costs))
        # @functools.lru_cache(maxsize=None, typed=False)
        # maxsize缓存的最大数量
        # typed=True（注意，在 functools32 中没有此参数），
        # 则不同参数类型的调用将分别缓存，例如 f(3) 和 f(3.0)。
        # 缓存函数的值 避免重复计算同一个值
        # @lru_cache(None)
        @cache
        def dp(k, i):  # k个邮筒
            if k == 0 and i == n:
                return 0
            if k == 0 or i == n:
                return math.inf


# k==0 and not i!=n that means you alloted k mailboxes but not to all houses
# or case 2:
# k!=0&& i==n that mean you grouped all houses but you used less than k mailboxes.

            ans = math.inf
            for j in range(i, n):
                cost = costs[i][j]  # Try to put a mailbox among house[i:j]
                ans = min(ans, cost + dp(k - 1, j + 1))
            return ans

        return dp(k, 0)


class Solution2:

    def minDistance(self, houses, k):
        n = len(houses)
        houses = sorted(houses)
        costs = [[0] * n for _ in range(n)]

        for i, j in product(range(n), range(n)):
            median = houses[(i + j) >> 1]
            for t in range(i, j + 1):
                costs[i][j] += abs(median - houses[t])

        dp = [[math.inf] * k for _ in range(n)]
        for i in range(n):
            dp[i][0] = costs[0][i]  # 只有一个邮筒的时候的时候

        for k_it in range(1, k):
            for i_1 in range(n):
                for i_2 in range(i_1):
                    dp[i_1][k_it] = min(dp[i_1][k_it], dp[i_2][k_it - 1] + costs[i_2 + 1][i_1])

        return dp[-1][-1]


so = Solution()
so.minDistance([1, 4, 8, 10, 20], 3)
# [[ 0  3  7 13 25]
#  [ 0  0  4  6 18]
#  [ 0  0  0  2 12]
#  [ 0  0  0  0 10]
#  [ 0  0  0  0  0]]
