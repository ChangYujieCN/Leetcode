from typing import List


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start, max_len, used = 0, 0, {}
        for index, char in enumerate(s):
            if char in used and start <= used[char]:  # 考虑 abb和 abca
                start = used[char] + 1
            used[char] = index
            max_len = max(max_len, index - start + 1)
        return max_len
