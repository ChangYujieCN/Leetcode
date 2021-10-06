# Definition for a binary tree node.

from typing import Optional
import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution2:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        if targetSum == root.val and not root.left and not root.right:
            return True
        targetSum = targetSum - root.val
        return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if not root:
            return False
        queue = [(root, targetSum)]
        while queue:
            cur, val = queue.pop(0)
            if not cur.left and not cur.right and val == cur.val:
                return True
            next_val = val - cur.val
            if cur.left:
                queue.append((cur.left, next_val))
            if cur.right:
                queue.append((cur.right, next_val))
        return False

#创建 二叉树
arr = [5, 4, 8, 11, None, 13, 4, 7, 2, None, None, None, 1]
forest = [TreeNode(x) if x is not None else None for x in arr]
count = len(arr)
root = None
for index, item in enumerate(arr):
    if arr[index] is not None:
        left_index = 2 * index + 1
        right_index = 2 * index + 2
        if left_index < count and forest[left_index]:
            forest[index].left = forest[left_index]
        if right_index < count and forest[right_index]:
            forest[index].right = forest[right_index]

so = Solution()
so.hasPathSum(forest[0], 22)
