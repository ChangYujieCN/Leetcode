from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left, right, total, min_len = 0, 0, 0, len(nums) + 1