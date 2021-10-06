from typing import List


class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if len(matrix)==0:
            return 0
        m, n = len(matrix), len(matrix[0])
        heights = [0] * (n)
        res = 0
        for i in range(m):
            for j in range(n):
                heights[j] = heights[j]+1 if matrix[i][j] == '1' else 0
            heights.append(-1)
            stack = [-1]
            for i in range(len(heights)):
                while heights[i] < heights[stack[-1]]:
                    h = heights[stack.pop()]
                    w = i - stack[-1] - 1 # 因为已经pop()过一次
                    res = max(res, h * w)
                stack.append(i)            
            heights.pop()
        return res