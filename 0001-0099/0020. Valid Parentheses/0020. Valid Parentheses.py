# class Solution:

#     def isValid(self, s: str) -> bool:
#         stack = []
#         pairs = {'(': ')', '{': '}', '[': ']'}
#         for char in s:
#             if char == '(':
#                 stack.append(')')
#             elif char == '{':
#                 stack.append('}')
#             elif char == '[':
#                 stack.append(']')
#             else:
#                 if not stack or stack.pop() != char:
#                     return False

#         return len(stack) == 0


class Solution:

    def isValid(self, s: str) -> bool:
        stack = []
        pairs = {'(': ')', '{': '}', '[': ']'}
        for letter in s:
            if letter in pairs:
                stack.append(pairs[letter])
            else:
                if not stack or stack.pop() != letter:
                    return False

        return not stack


so = Solution()
so.isValid('()')