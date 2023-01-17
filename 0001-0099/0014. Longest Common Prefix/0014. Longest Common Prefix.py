from typing import List


class Solution:

    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        list_n, str0_n = len(strs), len(strs[0])
        for i in range(str0_n):
            chr = strs[0][i]
            if any(i == len(strs[j]) or strs[j][i] != chr for j in range(1, list_n)):
                return strs[0][:i]
        return strs[0]


so = Solution()
so.longestCommonPrefix(["ab", "a"])
