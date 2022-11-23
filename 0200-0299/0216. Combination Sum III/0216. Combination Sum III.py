from typing import List


class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        ans = []
        self.comb(ans, [], k, 1, n)
        return ans

    def comb(self, ans, temp_arr, k, start, n):
        # k个元素 和为n
        if len(temp_arr) == k and n == 0:
            ans.append(temp_arr[:])
        elif len(temp_arr) < k:
            for i in range(start, 10):
                temp_arr.append(i)
                self.comb(ans, temp_arr, k, i + 1, n - i)
                temp_arr.pop()
