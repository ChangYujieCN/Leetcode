# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# 算法核心 只有遇到p q的时候才会返回上来
# 没有遇到p q到树的最下面一定返回None
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if root in (None, p, q):
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        return root if left and right else left or right
# lowestCommonAncestor(3,5,8) = 3
#     left = lowestCommonAncestor(5,5,8) = 5
#         return 5
#     right = lowestCommonAncestor(1,5,8) = 8
#         left = lowestCommonAncestor(0,5,8) = None
#             left = lowestCommonAncestor(None,5,8) = None
#                 return None
#             right = lowestCommonAncestor(None,5,8) = None
#                 return None
#             return None
#         right = lowestCommonAncestor(8,5,8) = 8
#             return 8

arr = [3,5,1,6,2,0,8,None,None,7,4]
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

so.lowestCommonAncestor(forest[0],forest[0].left,forest[0].right.right)
#       1        返回p
#   2        p  left:None  right:返回p
# 4    5   6    q
#       1
#   2        3
# 4    5   p    q