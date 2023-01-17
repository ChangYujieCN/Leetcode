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


class Solution:

    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        events = [x for start, end in intervals for x in ((start, 1), (end, -1))]
        events.sort()
        ans = cur = 0
        for _, e in events:
            cur += e
            ans = max(ans, cur)
        return ans


so = Solution()
# print(so.minMeetingRooms([[13, 15], [1, 13]]))
print(so.minMeetingRooms([[0, 30], [5, 10], [15, 20]]))
