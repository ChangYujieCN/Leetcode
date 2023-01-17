from typing import List


class Solution:

    def lengthOfLongestSubstring(self, s: str) -> int:
        start, max_l, used = 0, 0, {}
        for idx, chr in enumerate(s):
            if chr in used and start <= used[chr]:
                # 考虑 abba  索引在3 start因为b的原因已经移动到2 发现重复出现的a这个时候不需要把start移动到1因为已经有一个更大的start了
                start = used[chr] + 1
            used[chr] = idx
            max_l = max(max_l, idx - start + 1)
        return max_l

    # def lengthOfLongestSubstring(self, s: str) -> int:
    #     max_l = 0
    #     used = {}
    #     start = 0
    #     for idx, char in enumerate(s):
    #         if char in used:
    #             start = max(start, used[char] + 1)
    #         used[char] = idx
    #         max_l = max(max_l, idx - start + 1)
    #     return max_l


so = Solution()
so.lengthOfLongestSubstring('abba')