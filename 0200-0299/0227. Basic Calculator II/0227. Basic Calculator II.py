# O(n) O(n)
class Solution:
    def update(self, op, v, stack):
        if op == "+": stack.append(v)
        if op == "-": stack.append(-v)
        if op == "*": stack.append(stack.pop() * v)  # for BC II and BC III
        if op == "/": stack.append(int(stack.pop() / v))  # for BC II and BC III

    def helper(self, s, i):
        num = 0
        stack = []
        sign = '+'
        while i < len(s):
            if s[i].isdigit():
                num = num * 10 + int(s[i])
            elif s[i] in "+-*/":
                self.update(sign, num, stack)
                num, sign = 0, s[i]
            elif s[i] == '(':
                num, j = self.helper(s, i + 1)
                i = j
            elif s[i] == ')':
                self.update(sign, num, stack)
                return sum(stack), i
            i += 1
        self.update(sign, num, stack)
        return sum(stack)

    def calculate(self, s: str) -> int:
        return self.helper(s, 0)


so = Solution()
so.calculate("6-4/2")
