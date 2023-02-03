# Definition for singly-linked list.
from typing import Optional


class ListNode:

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# dummy -> a -> b ->c


class Solution:

    def reverse(self, head, tail):
        pre = None
        cur = head
        while pre != tail:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        return tail, head

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = pre = tail = ListNode(0, head)
        while head:
            for _ in range(k):
                tail = tail.next
                if not tail:
                    return dummy.next
            nex = tail.next
            head, tail = self.reverse(head, tail)
            pre.next = head
            tail.next = nex
            pre = tail
            head = nex
        return dummy.next