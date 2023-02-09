from typing import List


class Solution:

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        i = self.find_l_bound(nums, target, 0, len(nums))
        lower_bound = i if i != len(nums) and nums[i] == target else -1
        if lower_bound == -1:
            return [-1, -1]
        j = self.find_r_bound(nums, target, 0, len(nums))
        upper_bound = j - 1 if j > 0 and nums[j - 1] == target else -1
        return [lower_bound, upper_bound]

    def find_l_bound(self, a, x, lo, hi):
        while lo < hi:
            mid = (lo + hi) // 2
            if a[mid] < x:
                lo = mid + 1
            else:
                hi = mid
        return lo

    def find_r_bound(self, a, x, lo, hi):
        while lo < hi:
            mid = (lo + hi) // 2
            if x < a[mid]:
                hi = mid
            else:
                lo = mid + 1
        return lo


so = Solution()
lst = [1, 2]
x = -1
a = so.find_r_bound(lst, x, 0, len(lst))
print(a - 1 if a != len(lst) or lst[a - 1] == x else -1)
