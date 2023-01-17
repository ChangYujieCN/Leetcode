# Definition for singly-linked list.
from typing import List, Optional
from queue import PriorityQueue
import heapq


class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:

    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # 优先队列用于多线程 有不需要的锁的开销  这里用heapq就行了 作为练习
        pq = PriorityQueue()
        dummy = ListNode(None)
        cur = dummy

        # TypeError: '<' not supported between instances of 'ListNode' and 'ListNode'
        # 优先队列第一个元素相等的时候 会比较第二个元素 如果直接传入node就会报上面的错
        # 这里写入idx作为可以比较的值
        def add_node_in_pq(node, idx):
            if node:
                pq.put((node.val, idx, node))

        for idx, head in enumerate(lists):
            add_node_in_pq(head, idx)

        while not pq.empty():
            val, idx, node = pq.get()
            cur.next = node
            cur = cur.next
            add_node_in_pq(cur.next, idx)

        return dummy.next


class Solution:

    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        pq = []
        dummy = ListNode(None)
        cur = dummy

        def add_node(node, idx):
            if node:
                heapq.heappush(pq, (node.val, idx, node))

        for idx, head in enumerate(lists):
            add_node(head, idx)

        while pq:
            val, idx, node = heapq.heappop(pq)
            cur.next = node
            cur = cur.next
            add_node(cur.next, idx)
        return dummy.next