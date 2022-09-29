from typing import List

# (1) if x is larger than all tails, append it, increase the size by 1
# (2) if tails[i-1] < x <= tails[i], update tails[i]
# [1,3,5,2,8,4,6]
# For this list, we can have LIS with different length.
# For length = 1, [1], [3], [5], [2], [8], [4], [6], we pick the one with smallest tail element as the representation of length=1, which is [1]
# For length = 2, [1,2] [1,3] [3,5] [2,8], ...., we pick [1,2] as the representation of length=2.
# Similarly, we can derive the sequence for length=3 and length=4
# The result sequence would be:
# len=1: [1]
# len=2: [1,2]
# len=3: [1,3,4]
# len=4: [1,3,5,6]

# According to the logic in the post,we can conclude that:
# (1) If there comes another element, 9
# We iterate all the sequences, found 9 is even greater than the tail of len=4 sequence, we then copy len=4 sequence to be a new sequece, and append 9 to the new sequence, which is len=5: [1,3,5,6,9]
# The result is:
# len=1: [1]
# len=2: [1,2]
# len=3: [1,3,4]
# len=4: [1,3,5,6]
# len=5: [1,3,5,6,9]

# (2) If there comes another 3,
# We found len=3 [1,3,4], whose tailer is just greater than 3, we update the len=3 sequence tobe [1,3,3]. The result is:
# len=1: [1]
# len=2: [1,2]
# len=3: [1,3,3]
# len=4: [1,3,5,6]

# (3) If there comes another 0,
# 0 is smaller than the tail in len=1 sequence, so we update the len=1 sequence. The result is:
# len=1: [0]
# len=2: [1,2]
# len=3: [1,3,3]
# len=4: [1,3,5,6]


class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        tails = [0] * len(nums)
        size = 0
        for x in nums:
            i, j = 0, size
            # 为何要寻找左侧边界
            # 因为右侧边界是size 永远比tails当前长度大1位
            # 如果遇到[7,7,7,7,7]这种不断寻找右边界就会造成
            # 最终的结果是5 而不是1
            while i < j:
                mid = (i + j) >> 1
                if tails[mid] < x:
                    i = mid + 1
                else:
                    j = mid  # 最终需要 tails[i-1] < x <= tails[i]
            tails[i] = x
            size = max(i + 1, size)
        return size


so = Solution()
so.lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
