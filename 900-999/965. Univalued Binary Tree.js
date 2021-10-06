/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (root.left !== null) {
    if (!isUnivalTree(root.left)) return false;
    if (root.left.val !== root.val) return false;
  }
  if (root.right !== null) {
    if (!isUnivalTree(root.right)) return false;
    if (root.right.val !== root.val) return false;
  }
  return true;
};

//DFS

var isUnivalTree = function(root) {
  const dfs = (root, value) => {
    return (
      root === null ||
      (root.val === value && dfs(root.left, value) && dfs(root.right, value))
    );
  };
};
