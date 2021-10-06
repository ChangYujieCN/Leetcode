from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)
        max_len = 0
        for x in nums:
            if x - 1 not in nums:  # 说明是最小的元素了
                y = x + 1
                while y in nums:
                    y += 1
                max_len = max(max_len, y - x)
        return max_len
