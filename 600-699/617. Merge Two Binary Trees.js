/**https://leetcode.com/problems/merge-two-binary-trees/
 * 将两棵树相同位置的数字相加 合并成为一棵新树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  const root = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
  root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  /*if t1 exists and t2 also , the top line =
    root.right = mergeTrees(t1.right,t2.right);*/
  return root;
};
