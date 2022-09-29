from typing import List


class Solution:
    def get_counter(self, s):
        counter_0 = counter_1 = 0
        for letter in s:
            if letter == '0':
                counter_0 += 1
            elif letter == '1':
                counter_1 += 1
        return counter_0, counter_1

    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        strs_len = len(strs)
        dp = [[[0] * (n + 1) for _ in range(m + 1)]
              for _ in range(strs_len + 1)]
        for i in range(1, strs_len + 1):
            counter_0, counter_1 = self.get_counter(strs[i - 1])
            for j in range(m + 1):
                for k in range(n + 1):
                    dp[i][j][k] = dp[i - 1][j][k]
                    if j >= counter_0 and k >= counter_1:
                        dp[i][j][k] = max(
                            dp[i][j][k],
                            dp[i - 1][j - counter_0][k - counter_1] + 1)
        return dp[-1][-1][-1]

    def findMaxForm2(self, strs: List[str], m: int, n: int) -> int:
        dp = [[0] * (n+1) for _ in range(m+1)]
        for s in strs:
            zeroes = s.count('0')
            ones = len(s) - zeroes
            for i in range(m, zeroes-1, -1):
                for j in range(n, ones-1, -1):
                    dp[i][j] = max(dp[i][j], 1+dp[i-zeroes][j-ones])

        return dp[-1][-1]


# 子集中所有条目的0的总数和1的总数不能超过m和n
so = Solution()
so.findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)
