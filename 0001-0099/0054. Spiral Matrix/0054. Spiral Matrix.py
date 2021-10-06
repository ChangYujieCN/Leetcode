# /**
#  * @param {number[][]} matrix
#  * @return {number[]}
#  */
# var spiralOrder = function (matrix) {
#   const result = matrix[0];
#   const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
#   let currentDirIdx = 0;
#   let [m, n] = [matrix.length, matrix[0].length];
#   const position = [0, n - 1];
#   let rest = (m - 1) * n;
#   while (rest > 0) {
#     for (let j = 1; j < m; j++) {
#       rest--;
#       position[0] += dirs[currentDirIdx][0];
#       position[1] += dirs[currentDirIdx][1];
#       result.push(matrix[position[0]][position[1]]);
#     }
#     m--;
#     [m, n] = [n, m];
#     currentDirIdx = (currentDirIdx + 1) % 4;
#   }
#   return result;
# };
from typing import List


class Solution2:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        return matrix and [*matrix.pop(0)] + self.spiralOrder([*zip(*matrix)][::-1])


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        row_begin, row_end, col_begin, col_end = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
        res = []
        while row_begin <= row_end and col_begin <= col_end:
            for i in range(col_begin, col_end + 1):
                res.append(matrix[row_begin][i])
            row_begin += 1
            for i in range(row_begin, row_end + 1):
                res.append(matrix[i][col_end])
            col_end -= 1
            if row_begin <= row_end:
                for i in range(col_end, col_begin - 1, -1):
                    res.append(matrix[row_end][i])
            row_end -= 1
            if col_begin <= col_end:
                for i in range(row_end, row_begin - 1, -1):
                    res.append(matrix[i][col_begin])
            col_begin += 1
        return res


so = Solution()
so.spiralOrder([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])
