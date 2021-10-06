class Solution:
    def extendPalindrome(self, s, left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]
    # [1,2][0:0] == []
    # [1,2][0,1] == [1]
    def longestPalindrome(self, s: str) -> str:
        res = ''
        for i in range(len(s)):
            res = max([self.extendPalindrome(s, i, i), self.extendPalindrome(s, i, i + 1), res], key=len)
        return res
