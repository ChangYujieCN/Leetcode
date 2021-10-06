/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  return newIncreasingBST(root, null);
};
const newIncreasingBST = (root, tail = null) => {
  let res;
  if (!root) return tail;
  res = newIncreasingBST(root.left, root);
  root.left = null;
  root.right = newIncreasingBST(root.right, tail);
  return res;
};

let prev = null, head = null;
const increasingBST2 = function(root) {
  if (!root) return null;
  increasingBST2(root.left);
  if (prev !== null) {
    root.left = null;
    //we no longer needs the left side of the node, so set it to null
    prev.right = root;
  }
  if (head === null) { //record the most left node as it will be our root
    head = root;
  }
  prev = root;  // keep track of the prev node
  increasingBST2(root.right);
  return head;
};
