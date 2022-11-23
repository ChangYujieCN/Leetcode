from typing import List


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        height, width = len(matrix), len(matrix[0])
        heights = [0] * width
        res = 0
        heights.append(-1)
        for i in range(height):
            for j in range(width):
                heights[j] = heights[j] + 1 if matrix[i][j] == '1' else 0
            stack = [-1]
            for i in range(len(heights)):
                while heights[i] < heights[stack[-1]]:
                    h = heights[stack.pop()]
                    w = i - stack[-1] - 1
                    res = max(res, h * w)
                stack.append(i)
        return res
