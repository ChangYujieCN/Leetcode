from typing import List, Dict


class Solution:

    def find_n_sum_closest(self, left: int, right: int, N: int, target: int, temp_list: List[int], result: List[int],
                           nums: List[int]):
        if (right - left + 1) < N or N < 2:
            return
        if N == 2:
            while left < right:
                total = nums[left] + nums[right] + sum(temp_list)
                if abs(total - target) < abs(sum(result) - target):
                    result.clear()
                    result.extend(temp_list + [nums[left], nums[right]])
                if total == target:
                    break
                elif total > target:
                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1
                    right -= 1
                else:
                    while left < right and nums[left] == nums[left + 1]:
                        left += 1
                    left += 1

        else:
            for i in range(left, right + 1):
                if sum(result) == target:
                    break
                if i == left or (i > left and nums[i] != nums[i - 1]):
                    self.find_n_sum_closest(i + 1, right, N - 1, target, temp_list + [nums[i]], result, nums)

    def n_sum_closest(self, nums: List[int], target: int, N: int) -> int:
        nums.sort()
        result = nums[:N]
        self.find_n_sum_closest(0, len(nums) - 1, N, target, [], result, nums)
        return sum(result)

    def threeSumClosest(self, nums: List[int], target: int) -> int:
        return self.n_sum_closest(nums, target, 3)


so = Solution()
so.threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)
