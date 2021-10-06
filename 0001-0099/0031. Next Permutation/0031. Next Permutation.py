from typing import List


class Solution:

    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums_len = len(nums)
        target_idx = nums_len - 2
        while target_idx >= 0:
            if nums[target_idx] < nums[target_idx + 1]:
                break
            target_idx -= 1
        if target_idx < 0:
            nums.reverse()
        else:
            for i in range(nums_len - 1, target_idx, -1):
                if nums[i] > nums[target_idx]:
                    nums[target_idx], nums[i] = nums[i], nums[target_idx]
                    break
            nums[target_idx + 1:] = nums[target_idx + 1:][::-1]
