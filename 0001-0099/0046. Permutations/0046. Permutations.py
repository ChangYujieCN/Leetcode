import collections
from typing import List


class Solution:
    # 这里用 OrderedDict 因为用set记录  set元素是无序的 本题的顺序要求很重要
    # 用普通的list记录 in 效率太低
    # 当然你可以用一个list记录temp_list  + dict来记录哪些已经被访问过  本质就是dfs
    def permute(self, nums: List[int]) -> List[List[int]]:
        visited = collections.OrderedDict()
        res = []
        self.backtracking(res, visited, nums)
        return res

    def backtracking(self, res, visited, nums):
        if len(visited) == len(nums):
            res.append(list(visited.keys()))
        for i in range(len(nums)):
            if nums[i] not in visited:
                visited[nums[i]] = 1
                self.backtracking(res, visited, nums)
                visited.popitem()