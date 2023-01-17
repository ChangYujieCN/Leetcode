from typing import List

#1 中位数定义: 中位数可将一个排序的数组,长度为a, 分成长度相等的两段,如果a是奇数,就是正中间的那个数字,
# 如果a是偶数,就是中间的两个数的平均值, 要把数组分为两段, 如果如果a是偶数那么左边一半的长度就是 a/2
# 如果a是奇数 我们把多出来的那个放在左边 那么左边一半的长度就是 (a + 1)/2  这两种情况可以都用 (a+1)>>1表示
#  left_part                |        right_part
#  A[0], A[1], ..., A[i-1]  |  A[i], A[i+1], ..., A[m-1]
#  B[0], B[1], ..., B[j-1]  |  B[j], B[j+1], ..., B[n-1]

# A[0]... A[i-1]|A[i]...B[m-1]
# B[0]... B[j-1]|B[j]...B[n-1]


#2 m <= n, i < m ==> j = (m+n+1)/2 - i > (m+n+1)/2 - m >= (2*m+1)/2 - m >= 0   不需要再加j>0的限定条件
#3
class Solution:

    def findMedianSortedArrays(self, A: List[int], B: List[int]) -> float:
        m, n = len(A), len(B)
        if m > n:
            A, B, m, n = B, A, n, m
        # i_min, i_max代表的不是索引而是分割的方法  长度为m分割的方法有m种
        # 虽然是指分割的方法 我们仍然可以使用它作为索引
        # | A[0] i为0
        i_min, i_max, half_len = 0, m, (m + n + 1) >> 1  # 见上面的内容1
        while i_min <= i_max:
            i = (i_min + i_max) >> 1  # i也代表切割的位置  切割的位置处左边有i个值
            j = half_len - i  # j也代表切割的位置  切割的位置左边有j个值
            if i > 0 and j < n and A[i - 1] > B[j]:  # 这里其实不需要j<n的判断见上面的证明2
                i_max = i - 1
            elif i < m and j > 0 and B[j - 1] > A[i]:
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


class Solution:

    def findMedianSortedArrays(self, A, B):
        l = len(A) + len(B)
        if l % 2 == 1:
            return self.kth(A, B, l // 2)
        else:
            return (self.kth(A, B, l // 2) + self.kth(A, B, l // 2 - 1)) / 2

    def kth(self, a, b, k):
        if not a:
            return b[k]
        if not b:
            return a[k]
        ia, ib = len(a) // 2, len(b) // 2
        ma, mb = a[ia], b[ib]
        # when k is bigger than the sum of a and b's median indices
        if ia + ib < k:  # ma 和 mb前面有 ia个 和 ib个 数字 < k前面的数字数量一定小于k  至少可以排除一半
            # if a's median is bigger than b's, b's first half doesn't include k
            if ma > mb:  # 删除掉一部分
                return self.kth(a, b[ib + 1:], k - ib - 1)
            else:
                return self.kth(a[ia + 1:], b, k - ia - 1)
        # when k is smaller than the sum of a and b's indices
        else:
            # if a's median is bigger than b's, a's second half doesn't include k
            if ma > mb:
                return self.kth(a[:ia], b, k)
            else:
                return self.kth(a, b[:ib], k)


so = Solution()
so.findMedianSortedArrays([1, 3], [2])
