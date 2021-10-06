/**
 * 链表中节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// const arr = [1, 2, 3, 4, 5];
// let head,
//   current,
//   i = 1;
// for (i = 1, head = new ListNode(arr[0]), current = head; i < arr.length; i++) {
//   current.next = new ListNode(arr[i]);
//   current = current.next;
// }
const middleNode = function(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
