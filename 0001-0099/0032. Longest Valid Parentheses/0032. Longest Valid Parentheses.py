class Solution:
    def longestValidParentheses(self, s: str) -> int:
        max_length = 0
        n = len(s)
        stack = [-1]
        for i in range(n):
            if s[i] == '(':
                stack.append(i)
            else:
                stack.pop()
                if not stack:
                    stack.append(i) # Records the last index that don't match
                else:
                    max_length = max(max_length, i-stack[-1])
        return max_length
so = Solution()
so.longestValidParentheses("))()())((")