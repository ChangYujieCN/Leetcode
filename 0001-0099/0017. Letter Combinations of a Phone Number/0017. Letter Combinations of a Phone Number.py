from typing import List


class Solution:

    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        mapping = ['0', '1', "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        queue = ['']
        for item in digits:
            for _ in range(len(queue)):
                tmp = queue.pop(0)
                for letter in mapping[int(item)]:
                    queue.append(tmp + letter)
        return queue
