from typing import List


class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        self.backtrack(res, "", 0, 0, n)
        return res

    def backtrack(self, res, temp_str, left_part, right_part, max_pairs):
        if len(temp_str) == 2 * max_pairs:
            res.append(temp_str)
            return
        if left_part < max_pairs:
            self.backtrack(res, temp_str + '(', left_part + 1, right_part, max_pairs)
        if right_part < left_part:
            self.backtrack(res, temp_str + ')', left_part, right_part + 1, max_pairs)


so = Solution()
so.generateParenthesis(3)


#1-1 '' 后面的是参数
#2-1 '('
#3-1 '(('
#4-1 '((('
#5-2 '((()' 
#6-2 '((())'
#7-2 '((()))' append
#返回到6  '((())'
#返回到5  '((()'
#返回到4  '(((' 在这个context下  第一个backtrak无法执行 第二个执行完毕 
#返回到3  '((' 在这个context下 第一个backtrack执行完毕 去执行第二个
#3-2 '(()'
#4-1 '(()('
#5-2 '(()()'
#6-2 '(()())' append
#返回到5  '(()()' 
#返回到4  '(()('
#返回到3  '(()'
#4-2 '(())'
#