from typing import List
import collections


class Solution:
    def findLHS(self, nums: List[int]) -> int:
        counter = collections.Counter(nums)
        ans = 0
        for x in counter:
            if x + 1 in counter:
                ans = max(ans, counter[x] + counter[x + 1])
        return ans


so = Solution()
so.findLHS([1, 3, 2, 2, 5, 2, 3, 7])

# counter相当于是个计数的词典
