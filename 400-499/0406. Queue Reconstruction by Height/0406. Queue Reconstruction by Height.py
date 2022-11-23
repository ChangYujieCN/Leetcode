from typing import List
import collections


class Solution:

    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        people_dict = collections.defaultdict(list)
        res = []
        for h, k in people:
            people_dict[h].append((h, k))
        for h in sorted(people_dict.keys(), reverse=True):
            for a, b in sorted(people_dict[h]):
                res.insert(b, (a, b))
        return res


so = Solution()
so.reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])

# input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
# subarray after step 1: [[7,0], [7,1]]
# subarray after step 2: [[7,0], [6,1], [7,1]]
# 输入的数组是无序的 每个元素表示了元素原本应该所在的位置  还原出元素所在的位置
