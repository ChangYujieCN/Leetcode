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
                    stack.append(i)  # Records the last index that don't match
                else:
                    max_length = max(max_length, i - stack[-1])
        return max_length


class Solution:

    def longestValidParentheses(self, s: str) -> int:
        max_l = l = r = 0
        for letter in s:
            if letter == '(':
                l += 1
            else:
                r += 1
            if l == r:
                max_l = max(max_l, 2 * r)
            elif r > l:
                l = r = 0
        l = r = 0
        for letter in s[::-1]:
            if letter == '(':
                l += 1
            else:
                r += 1
            if l == r:
                max_l = max(max_l, 2 * r)
            elif l > r:
                l = r = 0
        return max_l


class Solution:

    def longestValidParentheses(self, s: str) -> int:
        n = len(s)
        l = 0
        dp = [0] * n
        for i in range(1, n):
            if s[i] == ')':
                if s[i - 1] == '(':
                    dp[i] = dp[i - 2] + 2
                # 不加前面的>0限制条件很可能后面的判断语句为s[-x],判断跑到字符的末尾而导致判断成功
                elif (i - dp[i - 1] > 0) and s[i - dp[i - 1] - 1] == '(':
                    dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
                l = max(l, dp[i])
        return l


so = Solution()
so.longestValidParentheses("(()))())(")