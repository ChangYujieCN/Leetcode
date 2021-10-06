from typing import List


# O(n) O(1)
class Solution:
    def trap(self, height: List[int]) -> int:
        max_left = max_right = 0
        res = 0
        left, right = 0, len(height) - 1
        # 只需要left<right就可以满足条件  因为装雨水  至少需要左边一个边 右边一个边 中间来装雨水
        # 然而这里 left<=right也可执行成功
        # 为什么 当left+1 == right时候,left和right其中有一个在整个数组的最大值上
        # 而经历过最后这次循环后 两个数字都在最大值上
        # 也就不可能执行新的赋值操作  所以对结果没有任何影响
        # 同样 left+1 == right就终止也不会少计算
        # 因为最后那个是最大的 不可能装得下水
        while left <= right:
            if height[left] <= height[right]:
                if height[left] >= max_left:
                    max_left = height[left]
                else:
                    res += (max_left - height[left])
                left += 1
            else:
                if height[right] >= max_right:
                    max_right = height[right]
                else:
                    res += (max_right - height[right])
                right -= 1
        return res
