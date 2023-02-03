from typing import List


class Solution:

    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = len(nums)
        o = l - 2
        while o >= 0 and nums[o] >= nums[o + 1]:
            o -= 1
        if o < 0:
            nums.reverse()
        else:
            for i in range(l - 1, o, -1):
                if nums[i] > nums[o]:
                    nums[o], nums[i] = nums[i], nums[o]
                    break
            nums[o + 1:] = nums[o + 1:][::-1]
