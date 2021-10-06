/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [],
    current,
    depth = 0;
  queue.push(root);
  while (queue.length > 0) {
    let queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      current = queue.shift();
      queue.push(...current.children);
    }
    depth++;
  }
  return depth;
};
