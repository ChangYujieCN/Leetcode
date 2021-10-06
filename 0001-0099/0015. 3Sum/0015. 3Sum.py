from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        for left in range(len(nums) - 2):
            if nums[left] > 0:
                break
            if left > 0 and nums[left] == nums[left - 1]:
                continue
            mid = left + 1
            right = len(nums) - 1
            while mid < right:
                sum = nums[left] + nums[mid] + nums[right]
                if sum == 0:
                    res.append([nums[left], nums[mid], nums[right]])
                    while mid < right and nums[mid] == nums[mid+1]:
                        mid += 1
                    while mid < right and nums[right] == nums[right-1]:
                        right -= 1
                    mid += 1
                    right -= 1
                elif sum > 0:
                    right -= 1
                else:
                    mid += 1
        return res
