# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def lowestCommonAncestor(
        self, root: "TreeNode", p: "TreeNode", q: "TreeNode"
    ) -> "TreeNode":
        while root:
            if root.val > p.val and root.val > q.val:
                root = root.left
            if root.val < p.val and root.val < q.val:
                root = root.right
            else:
                return root


arr = [6, 2, 8, 0, 4, 7, 9, None, None, 3, 5]
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

so.lowestCommonAncestor(
    forest[0], forest[0].left.right.right, forest[0].left.right.left
)

