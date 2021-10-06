# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# dummy -> a -> b ->c


class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = prev = ListNode()
        dummy.next = l = r = head
        while True:
            count = 0
            while r and count < k:
                count += 1
                r = r.next  # 最后r停留在下一个group的一个节点上
            if count == k:
                start, cur = r, l
                # 反转链表  start代表已经生成的链表的头元素  默认的头元素就是刚刚的r节点
                # 因为反转后当前group的第一个节点要和下个group的第一个节点连接
                for _ in range(k):
                    # 可以理解为先对右边取值,然后再对左边进行赋值
                    # cur.next, cur, pre = pre, cur.next, cur
                    temp = cur.next
                    cur.next = start
                    start = cur
                    cur = temp
                prev.next = start  # 将已经生成的链表挂载到 之前的元素上
                prev = l  # 由于l经过反转后已经是一个group的最后一个元素 所以将prev置为l
                l = r  # l置为下个group的开始点

            else:
                return dummy.next

