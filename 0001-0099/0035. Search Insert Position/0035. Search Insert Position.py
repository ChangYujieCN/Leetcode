from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lo, hi = 0, len(nums) - 1

        while lo <= hi:
            mid = lo + (hi - lo) // 2
            if nums[mid] < target:
                lo = mid + 1
            elif nums[mid] > target:
                hi = mid - 1
            else:
                return mid
        # 这里的 lo > hi => lo >= hi + 1
        # 插入的index位置只能是 [lo,hi+1]
        # 即  lo >= hi + 1  and  lo <= hi + 1
        # 即 lo == hi + 1
        # 插入的位置只能为lo
        return lo
