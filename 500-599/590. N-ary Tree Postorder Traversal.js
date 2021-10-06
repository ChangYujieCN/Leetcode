/** 
 * N叉树的后序遍历
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

const postorder = function (root) {
    if (root==null) return [];
    let stack = [root];
    let list = [];
    while (stack.length > 0) {
        root = stack.pop();
        list.push(root.val)
        root.children.forEach(element => {
            stack.push(element);
        });
    }
    return list.reverse();
};