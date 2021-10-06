/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let list = [];
  if (root == null) return list;
  let stack = [root];
  while (stack.length > 0) {
    root = stack.pop();
    list.push(root.val);
    for (let i = root.children.length - 1; i >= 0; i--) {
      stack.push(root.children[i]);
    }
  }
  return list;
};
