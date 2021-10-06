import math


class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num == 1:
            return False
        total = 1
        i = 2
        sqrt_num = math.sqrt(num)
        while i <= sqrt_num:
            if num % i == 0:
                total += (i + num // i)
            i += 1
        return total == num
