from typing import List
import heapq


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        heapq.heapify(intervals)
        max_rooms = 0
        if intervals:
            heap2 = [heapq.heappop(intervals)[1]]
            max_rooms = 1
        while intervals:
            new_meeting = heapq.heappop(intervals)
            soonest = heap2[0]
            if new_meeting[0] >= soonest:
                heapq.heappop(heap2)
                heapq.heappush(heap2, new_meeting[1])
            else:
                heapq.heappush(heap2, new_meeting[1])
            max_rooms = max(max_rooms, len(heap2))
        return max_rooms


so = Solution()
so.minMeetingRooms([[13, 15], [1, 13]])

