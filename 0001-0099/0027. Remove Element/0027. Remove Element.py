from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        n = len(nums)
        count = 0
        for i in range(n):
            if nums[i] == val:
                count += 1
            else:
                nums[i - count] = nums[i]
        return n - count
