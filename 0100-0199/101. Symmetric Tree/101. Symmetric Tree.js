/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 把节点为null看做对称
var isSymmetric = function (root) {
  if (root === null) return true;
  const stack = [];
  stack.push(root.left);
  stack.push(root.right);
  while (stack.length) {
    a = stack.pop();
    b = stack.pop();
    if (a === null && b === null) continue;
    if (a === null || b === null) return false;
    if (a.val !== b.val) return false;
    stack.push(a.left, b.right);
    stack.push(a.right, b.left);
  }
  return true;
};
const isSymmetricHelper = (a, b) => {
  if (a !== null && b !== null) {
    return (
      a.val === b.val &&
      isSymmetricHelper(a.left, b.right) &&
      isSymmetricHelper(a.right, b.left)
    );
  } else return a === b;
};
const isSymmetric2 = (root) => {
  return root === null || isSymmetricHelper(root.left, root.right);
};
