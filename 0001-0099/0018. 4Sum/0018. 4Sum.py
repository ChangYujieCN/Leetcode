from typing import List


class Solution:
    def find_n_sum(self, left: int, right: int, nums: List[int], target: int, n: int, temp_list: List[int],
                   results: List[List[int]]):
        if right - left + 1 < n or n < 2 or nums[left] * n > target or nums[right] * n < target:
            return
        if n == 2:
            while left < right:
                total = nums[left] + nums[right]
                if total == target:
                    results.append(temp_list + [nums[left], nums[right]])
                    while left < right and nums[left] == nums[left + 1]: left += 1
                    while left < right and nums[right] == nums[right - 1]: right -= 1
                    left += 1
                    right -= 1
                elif target > total:
                    left += 1
                else:
                    right -= 1
        else:
            for i in range(left, right + 1):
                if i == left or (i > left and nums[i] != nums[i - 1]):
                    self.find_n_sum(i + 1, right, nums, target - nums[i], n - 1, temp_list + [nums[i]], results)

    def n_sum(self, nums: List[int], target: int, n: int) -> List[List[int]]:
        nums.sort()
        results = []
        self.find_n_sum(0, len(nums) - 1, nums, target, n, [], results)
        return results

    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        return self.n_sum(nums, target, 4)


so = Solution()
so.fourSum([1, 0, -1, 0, -2, 2], 0)
