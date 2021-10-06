# Dijkstra
# Time: O(E+VlogV)
# Space: O(V+E)

from typing import List
import collections
import heapq


class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        weights = collections.defaultdict(dict)
        for u, v, w in times:
            weights[u][v] = w
        heap = [(0, k)]
        dist = {}
        while heap:
            time, u = heapq.heappop(heap)
            if u not in dist:
                dist[u] = time
                for v in weights[u]:
                    heapq.heappush(heap, (dist[u] + weights[u][v], v))

        return max(dist.values()) if len(dist) == n else -1


# Floyd-Warshall
# Time: O(V^3)
# Space: O(V^2)


class Solution2:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        dist = [[0 if i == j else float("inf") for j in range(N)] for i in range(N)]
        for u, v, w in times:
            dist[u - 1][v - 1] = w
        for k in range(N):
            for i in range(N):
                for j in range(N):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
        return max(dist[K - 1]) if max(dist[K - 1]) < float("inf") else -1


# Bellman-Ford
# Time: O(VE)
# Space: O(N)

class Solution3:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        dist = [float("inf") for _ in range(N)]
        dist[K - 1] = 0
        for _ in range(N - 1):
            for u, v, w in times:
                if dist[u - 1] + w < dist[v - 1]:
                    dist[v - 1] = dist[u - 1] + w
        return max(dist) if max(dist) < float("inf") else -1


#  early stopping for Bellman-Ford
# def networkDelayTime2(self,times,n,k):
#         dist = [float('inf')] * n
#         dist[k-1] = 0
#         for _ in range(n-1):
#             stop = 1
#             for u,v,d in times:
#                 if dist[u-1]+d < dist[v-1]:
#                     dist[v-1] = dist[u-1]+d
#                     stop = 0
#             if stop: break
#         return max(dist) if max(dist)<float('inf') else -1
# SPFA
# Time: average O(E), worst O(VE)
# Space: O(V+E)


class Solution4:
    def networkDelayTime(self, times: List[List[int]], N: int, K: int) -> int:
        dist = [float("inf") for _ in range(N)]
        K -= 1
        dist[K] = 0
        weight = collections.defaultdict(dict)
        for u, v, w in times:
            weight[u - 1][v - 1] = w
        queue = collections.deque([K])
        while queue:
            u = queue.popleft()
            for v in weight[u]:
                if dist[u] + weight[u][v] < dist[v]:
                    dist[v] = dist[u] + weight[u][v]
                    queue.append(v)
        return max(dist) if max(dist) < float("inf") else -1
