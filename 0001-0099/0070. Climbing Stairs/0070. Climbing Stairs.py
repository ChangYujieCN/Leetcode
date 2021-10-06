class Solution:
    def climbStairs(self, n: int) -> int:
        if n <= 2:
            return n
        i = 3
        one = 2
        two = 1
        while i <= n:
            one = one + two
            two = one
            i+=1
        return one
