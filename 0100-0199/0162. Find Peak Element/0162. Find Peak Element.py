from typing import List

# 当情况是  [1,2,3,4,5]
# 代码会一直找峰值 直到 lo == hi == 4这时不满足循环条件 直接退出  返回结果
# 右边一直找\这种坡度的
# 左边一直找/这种坡度的
# 并且逐渐逼近
# lo 比左边的大
# hi 比右边的大
# 一旦他们相等  即找到了位置
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        lo, hi = 0, len(nums) - 1
        while lo < hi:
            mid1 = lo + ((hi - lo) >> 1)
            mid2 = mid1 + 1
            if nums[mid1] < nums[mid2]:
                lo = mid2
            else:
                hi = mid1
        return lo
so = Solution()
# so.findPeakElement([1,2,3,4,5])
so.findPeakElement([1,2,1,3,5,6,4])

#          5   5                           5
#         / \ / \                         / \
#        4   4   4                       4  -∞
#       /         \                     /
#      3           3           3       3
#     /             \         / \     /
#    2               2       2   2   2
#   /                 \     /     \ /
# -∞                   1   1       1
#                       \ /