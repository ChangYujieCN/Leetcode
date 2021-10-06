# O(n) O(n)
class Solution:
    def update(self, op, v, stack):
        if op == "+": stack.append(v)
        elif op == "-": stack.append(-v)
        elif op == "*": stack.append(stack.pop() * v)  # for BC II and BC III
        elif op == "/": stack.append(int(stack.pop() / v))  # for BC II and BC III
    # 核心思想就是  每次遇到一个新的运算符号  或者新的) 或者到达结尾 代表参数输入完毕 可以执行前面的一步运算
    # 如果遇到了新的符号  因为还没输入操作数完毕 所以会先执行前一步的操作 把这个符号暂存
    def helper(self, s, i):
        num = 0
        stack = []
        sign = '+'
        while i < len(s):
            if s[i].isdigit():
                num = num * 10 + int(s[i])
            elif s[i] in "+-*/":
                self.update(sign, num, stack) # 遇到了新的符号 说明数字输入完毕 数字入栈
                num, sign = 0, s[i] # 所有的计算符号都会在这里更新  供后面使用  由于每次符号更新 都是在后面更新  所以能够保证数字计算正确
            elif s[i] == '(':
                num, j = self.helper(s, i + 1)
                i = j
            elif s[i] == ')':
                self.update(sign, num, stack) # 遇到了) 数字取完了 可以执行计算
                return sum(stack), i
            i += 1
        self.update(sign, num, stack)
        return sum(stack)

    def calculate(self, s: str) -> int:
        return self.helper(s, 0)


so = Solution()
so.calculate("(2+6*3+5-(3*14/7+2)*5)+3")