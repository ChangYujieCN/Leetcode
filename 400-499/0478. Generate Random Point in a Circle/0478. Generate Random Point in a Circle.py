import math
import random

# random.random()  [0,1)
# random.uniform(a,b) a<=N<=b
class Solution:
    def __init__(self, radius: float, x_center: float, y_center: float):
        self.radius, self.x, self.y = radius, x_center, y_center

    def randPoint(self) -> List[float]:
        r = math.sqrt(random.random()) * self.radius
        deg = random.uniform(0, 2 * math.pi)
        x = self.x + r * math.cos(deg)
        y = self.y + r * math.sin(deg)
        return [x, y]


#
# x = rcosθ
# y = rsinθ
# r^2 = x^2 + y^2
# Your Solution object will be instantiated and called as such:
# obj = Solution(radius, x_center, y_center)
# param_1 = obj.randPoint()
# 由于面积和半径不是线性关系增长  我们只能看做是在面积里面 [0,area)取随机数
#  math.sqrt(random.uniform(0, area) / math.pi)
# =math.sqrt(random.uniform() * area / pi )
# =math.sqrt(random.uniform() * r^2 )
# =math.sqrt(random.uniform()) * r
# A = pi * r^2
# dA = pi * d(r^2)
# 面积增加和半径平方成正比

