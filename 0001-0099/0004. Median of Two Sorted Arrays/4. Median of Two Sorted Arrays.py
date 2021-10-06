from typing import List


# A[0]... A[i-1]|A[i]...B[m-1]
# B[0]... B[j-1]|B[j]...B[n-1]
class Solution:
    def findMedianSortedArrays(self, A: List[int], B: List[int]) -> float:
        m, n = len(A), len(B)
        if m > n:
            A, B, m, n = B, A, n, m
        if n == 0:
            raise ValueError
        i_min, i_max, half_len = 0, m, (m + n + 1) >> 1
        while i_min <= i_max:
            i = (i_min + i_max) >> 1
            j = half_len - i
            if i > 0 and A[i - 1] > B[j]:
                i_max = i - 1
            elif i < m and B[j - 1] > A[i]:
                i_min = i + 1
            else:
                if i == 0:
                    max_of_left = B[j - 1]
                elif j == 0:
                    max_of_left = A[i - 1]
                else:
                    max_of_left = max(A[i - 1], B[j - 1])

                #  m + n是奇数
                if (m + n) & 1:
                    return max_of_left
                #  最后一种分割的方法是i在m处
                # 左边有m个元素
                # 从0 - m一共m + 1
                # 种分割方法
                if i == m:
                    min_of_right = B[j]
                elif j == n:
                    min_of_right = A[i]
                else:
                    min_of_right = min(A[i], B[j])
                return (max_of_left + min_of_right) / 2
