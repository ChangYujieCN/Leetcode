import random
from typing import List


class Solution:
    def __init__(self, nums: List[int]):
        self.nums = nums

    def reset(self) -> List[int]:
        """
        Resets the array to its original configuration and return it.
        """
        return self.nums

    def shuffle(self) -> List[int]:
        """
        Returns a random shuffling of the array.
        """
        copy = self.nums[:]
        for i in range(1, len(copy)):
            # randrange(0,n)   a<n a>=0
            # randint(0,n)   a<=n  a>=0
            pos = random.randrange(0, i + 1)
            copy[i], copy[pos] = copy[pos], copy[i]
        return copy


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
