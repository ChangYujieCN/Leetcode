# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional, List


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        if not root:
            return res
        queue = []
        queue.append(root)
        ltr = True
        while queue:
            level_no = len(queue)
            temp_list = []
            for i in range(level_no):
                if queue[0].left is not None:
                    queue.append(queue[0].left)
                if queue[0].right is not None:
                    queue.append(queue[0].right)
                temp_list.append(queue.pop(0).val) if ltr else temp_list.insert(0, queue.pop(0).val)
            ltr = not ltr
            res.append(temp_list)
        return res

