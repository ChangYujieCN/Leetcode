# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy_head = ListNode(0)
        dummy_head.next = head
        tmp = dummy_head
        while tmp.next and tmp.next.next:
            first = tmp.next
            second = tmp.next.next
            tmp.next = second
            first.next = second.next
            second.next = first
            tmp = first
        return dummy_head.next


# a->b->c->d

