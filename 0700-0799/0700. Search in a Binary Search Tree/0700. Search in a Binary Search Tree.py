class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional


class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if (not root) or root.val == val:
            return root
        else:
            return self.searchBST(root.left, val) if val < root.val else self.searchBST(root.right, val)
