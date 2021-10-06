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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
    if (root === null) {
        return new TreeNode(val)
    } else {
        val < root.val ? root.left = insertIntoBST(root.left, val) : root.right = insertIntoBST(root.right, val);
    }
    return root;
};
const insertIntoBST2 = function (root, val) {
    if (root === null) return new TreeNode(val);
    let cur = root;
    while (true) {
        if (cur.val <= val) {
            if (cur.right !== null) cur = cur.right;
            else {
                cur.right = new TreeNode(val);
                break;
            }
        } else {
            if (cur.left !== null) cur = cur.left;
            else {
                cur.left = new TreeNode(val);
                break;
            }
        }
    }
    return root;
};