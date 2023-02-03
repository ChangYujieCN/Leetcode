# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:

    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = pre = ListNode(0, head)
        while pre.next and pre.next.next:
            n0 = pre.next
            n1 = pre.next.next
            next = n1.next
            pre.next = n1
            n0.next = next
            n1.next = n0
            pre = n0
        return dummy.next


# a->b->c->d

