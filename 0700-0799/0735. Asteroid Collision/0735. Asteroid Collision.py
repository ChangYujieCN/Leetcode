from typing import List


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for item in asteroids:
            while stack and item < 0 and stack[-1] > 0:
                # 两个星球相同大小  碰撞之后都消失
                if stack[-1] == -item:
                    stack.pop()
                    break
                # 比新的星球小 则栈里的消失  继续观察
                elif stack[-1] < -item:
                    stack.pop()
                    continue
                # 比新的星球大  直接跳过
                elif stack[-1] > -item:
                    break
            else:
                stack.append(item)

        return stack

