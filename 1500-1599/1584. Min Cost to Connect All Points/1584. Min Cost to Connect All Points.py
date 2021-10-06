import heapq
from typing import List


# 路径优化 并查集
# https://zh.wikipedia.org/wiki/%E5%B9%B6%E6%9F%A5%E9%9B%86
class DisjointSet:
    def __init__(self, n):
        self.disjoint_set = [i for i in range(n)]
        self.size = [1 for i in range(n)]

    def find(self, x):
        if self.disjoint_set[x] == x:
            return x
        else:
            # 向上查询的同时，把在路径上的每个节点都直接连接到根上，以后查询时就能直接查询到根节点。
            self.disjoint_set[x] = self.find(self.disjoint_set[x])
            return self.disjoint_set[x]

    # 改写成循环
    # https://www.jianshu.com/p/a840691b017b
    def find2(self, x):
        stack = []
        while self.disjoint_set[x] != x:
            stack.append(x)
            x = self.disjoint_set[x]
        for item in stack:
            self.disjoint_set[item] = x
        return x

    def union(self, x, y):
        x_root = self.find(x)
        y_root = self.find(y)
        if x_root != y_root:
            if self.size[x_root] < self.size[y_root]:
                large, small = y_root, x_root
            else:
                large, small = x_root, y_root

            self.disjoint_set[small] = large
            self.size[large] = self.size[large] + self.size[small]


class Solution:
    def get_root(self, disjoint_set, x):
        stack = []
        while disjoint_set[x][0] != x:
            stack.append(x)
            x = disjoint_set[x][0]
        for item in stack:
            disjoint_set[item][0] = x
        return x

    def get_root2(self, disjoint_set, v):
        while v != disjoint_set[v][0]:
            v = disjoint_set[v][0]
        return v

    def get_root3(self, disjoint_set, x):
        if disjoint_set[x][0] == x:
            return x
        else:
            disjoint_set[x][0] = self.get_root(disjoint_set, disjoint_set[x][0])
            return disjoint_set[x][0]

    def manhattan(self, p1, p2):
        return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])

    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        edges = []
        n = len(points)
        for i in range(n):
            for j in range(i + 1, n):
                edges.append((self.manhattan(points[i], points[j]), i, j))
        disjoint_set = [[i, 1] for i in range(n)]  # 第一个为顶点 第二个为size 用size来标记树深度 大的树的根作为根节点
        edges.sort()
        total_distance, used = 0, 1
        for dis, v1, v2 in edges:
            a = self.get_root(disjoint_set, v1)
            b = self.get_root(disjoint_set, v2)
            if a != b:
                if disjoint_set[a][1] < disjoint_set[b][1]:
                    large, small = b, a
                else:
                    large, small = a, b
                disjoint_set[small][0] = large
                disjoint_set[large][1] = disjoint_set[large][1] + disjoint_set[small][1]
                total_distance += dis
                used += 1
                if used == n:
                    break
        return total_distance

    def minCostConnectPoints2(self, points: List[List[int]]) -> int:
        total_distance, length = 0, len(points)
        vertices = [(0, 0, 0)]  # distance  vertex1 vertex2
        used = set()  # in在set是O(1)
        while len(used) < length:
            dis, v1, v2 = heapq.heappop(vertices)
            if v2 in used:
                continue
            total_distance += dis
            used.add(v2)
            for i in range(length):
                if i not in used and i != v2:
                    heapq.heappush(vertices, (self.manhattan(points[v2], points[i]), v2, i))
        return total_distance


class SolutionEasy:
    def manhattan(self, p1, p2):
        return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])

    def get_root(self, disjoint_set, a):
        while a != disjoint_set[a]:
            a = disjoint_set[a]
        return a

    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        edges = []
        n = len(points)
        for i in range(n):
            for j in range(i + 1, n):
                edges.append((self.manhattan(points[i], points[j]), i, j))

        disjoint_set = [i for i in range(n)]
        edges.sort()
        total_dis, used = 0, 1
        for dis, v1, v2 in edges:
            a = self.get_root(disjoint_set, v1)
            b = self.get_root(disjoint_set, v2)
            if a != b:
                total_dis += dis
                used += 1
                disjoint_set[a] = b
                if used == n:
                    break
        return total_dis

    def minCostConnectPoints2(self, points: List[List[int]]) -> int:
        total_distance, length = 0, len(points)
        vertices = [(0, 0, 0)]  # distance  vertex1 vertex2
        used = set()  # in在set是O(1)
        while len(used) < length:
            dis, v1, v2 = heapq.heappop(vertices)
            if v2 in used:
                continue
            total_distance += dis
            used.add(v2)
            for i in range(length):
                if i not in used:
                    heapq.heappush(vertices, (self.manhattan(points[v2], points[i]), v2, i))
        return total_distance


so = Solution()
so.minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])
