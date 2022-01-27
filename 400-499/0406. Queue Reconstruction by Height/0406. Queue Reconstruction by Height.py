from typing import List
import collections


class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        people_dict = collections.defaultdict(list)
        for h, k in people:
            people_dict[h].append((h, k))
        res = []
        for h in sorted(people_dict.keys(), reverse=True):
            group = sorted(people_dict[h])
            if not res:
                res += group
            else:
                for h, k in group:
                    res.insert(k, (h, k))
        return res


# input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
# subarray after step 1: [[7,0], [7,1]]
# subarray after step 2: [[7,0], [6,1], [7,1]]