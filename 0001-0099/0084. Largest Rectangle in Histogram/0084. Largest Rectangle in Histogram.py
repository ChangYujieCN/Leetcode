from typing import List


class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        # less_from_left[i]意味着: 在i的左边, 第一个小于 heights[i]的
        # 因为要找i最大面积处的最大面积  高度只能>=i
        less_from_left = [0] * n
        less_from_right = [0] * n
        less_from_right[n - 1] = n  # 从右边数最后一个元素的右边是空
        less_from_left[0] = -1  # 从左边数第一个元素的左边是空的
        for i in range(1, n):
            p = i - 1
            while p >= 0 and heights[p] >= heights[i]:
                p = less_from_left[p]
                # 既然 heights[p] >= heights[i] 那么我们去看比p这个位置的数字小的位置就行  而这个位置已经计算过了 查表得知 less_from_left[p]
            less_from_left[i] = p

        for i in range(n - 2, -1, -1):
            p = i + 1
            while p < n and heights[p] >= heights[i]:
                p = less_from_right[p]
            less_from_right[i] = p

        max_area = 0
        for i in range(n):
            max_area = max(
                max_area, heights[i] *
                (less_from_right[i] - less_from_left[i] - 1)
            )
        return max_area
# 学习单调栈
# 如果是单调递增栈 遇到比栈顶小的元素a  则比a小的元素都要出栈


class Solution2:
    def largestRectangleArea(self, heights: List[int]) -> int:
        heights.append(0)  # 希望所有元素都出栈 所以放入一个比所有元素都小的元素
        stack = [-1]
        res = 0
        for i in range(len(heights)):
            while heights[i] < heights[stack[-1]]:
                h = heights[stack.pop()]
                w = i - stack[-1] - 1  # 因为已经pop()过一次
                res = max(res, h * w)
            stack.append(i)
        heights.pop()
        return res


so = Solution2()
so.largestRectangleArea([2, 1, 5, 6, 2, 3])
