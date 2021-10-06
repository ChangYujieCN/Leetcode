from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        common = str[0]
        common_len = len(str[0])
        for i in range(1, len(strs)):
            common_len = min(common_len, len(strs[i]))
            for j in range(common_len):
                if str[i][j] != common[j]:
                    common_len = j
                    break
        return common[:common_len]


so = Solution()
so.longestCommonPrefix(["ab", "a"])
