import heapq
from typing import List


class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        heapq.heapify(intervals)
        if intervals:
            prev = heapq.heappop(intervals)
        while intervals:
            cur = heapq.heappop(intervals)
            if prev[1] > cur[0]:
                return False
            prev = cur
        return True


so = Solution()
so.canAttendMeetings([[7, 10], [2, 4]])
