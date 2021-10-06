from typing import List
import collections


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        mapping = ['0', '1',  "abc", "def", "ghi",
                   "jkl", "mno", "pqrs", "tuv", "wxyz"]
        result = collections.deque()
        if len(digits) == 0:
            return result
        result.append("")
        while len(result[0]) != len(digits):
            t = result.popleft()
            for letter in mapping[int(digits[len(t)])]:
                result.append(t+letter)
        return result
