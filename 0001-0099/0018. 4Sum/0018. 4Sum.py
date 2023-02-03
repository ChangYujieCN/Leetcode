from typing import List


class Solution:

    def find(self, nums, target, res, tmp_arr, N, l, r):
        if r - l + 1 < N or N < 2:
            return
        if N == 2:
            while l < r:
                total = sum(tmp_arr) + nums[l] + nums[r]
                if total == target:
                    res.append(tmp_arr + [nums[l], nums[r]])
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1
                    r -= 1
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    l += 1
                elif total > target:
                    while l < r and nums[r] == nums[r - 1]:
                        r -= 1
                    r -= 1
                else:
                    while l < r and nums[l] == nums[l + 1]:
                        l += 1
                    l += 1

        else:
            for i in range(l, r + 1):
                if i == l or (i > l and nums[i] != nums[i - 1]):
                    self.find(nums, target, res, tmp_arr + [nums[i]], N - 1, i + 1, r)

    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        nums.sort()
        self.find(nums, target, res, [], 4, 0, len(nums) - 1)
        return res


so = Solution()
so.fourSum([1, 0, -1, 0, -2, 2], 0)
