from typing import Optional, List


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []
        if not root:
            return res
        queue = []
        queue.append(root)
        while queue:
            level_no = len(queue)
            temp_list = []
            for i in range(level_no):
                if queue[0].left is not None:
                    queue.append(queue[0].left)
                if queue[0].right is not None:
                    queue.append(queue[0].right)
                temp_list.append(queue.pop(0).val)
            res.append(temp_list)
        return res
