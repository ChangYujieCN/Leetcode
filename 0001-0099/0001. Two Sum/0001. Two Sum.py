from typing import List


class Solution:

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}  # 如果是个空的花括号创建的就是dict  {1}就是set 验证print(type(seen))
        for i, value in enumerate(nums):
            remaining = target - value
            if remaining in seen:
                return [i, seen[remaining]]
            else:
                seen[value] = i
