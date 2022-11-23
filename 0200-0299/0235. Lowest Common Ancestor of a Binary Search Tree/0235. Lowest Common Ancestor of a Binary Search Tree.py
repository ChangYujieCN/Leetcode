# Definition for a binary tree node.
class TreeNode:

    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:

    def lowestCommonAncestor(self, root: "TreeNode", p: "TreeNode", q: "TreeNode") -> "TreeNode":
        while root:
            if root.val > p.val and root.val > q.val:  # 1
                root = root.left
            # 保证一次只走一次分支逻辑  否则可能走完第一个逻辑后就直接返回了
            # 比如走完1之后然后需要进行下次逻辑了 但是假如走完1发现还需要再走一次1这时候
            # 2如果写if而不是elif 就会走到条件语句2,如果期望的结果不对就会直接返回 而不是再去下个while循环里再执行一次循环
            elif root.val < p.val and root.val < q.val:  #2
                root = root.right
            else:  #3
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

so.lowestCommonAncestor(forest[0], forest[0].left.right.right, forest[0].left.right.left)
