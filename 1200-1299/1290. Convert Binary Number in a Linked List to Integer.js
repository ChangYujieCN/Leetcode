/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number}
 */
const arr = [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
let head,
  current,
  i = 1;
for (i = 1, head = new ListNode(arr[0]), current = head; i < arr.length; i++) {
  current.next = new ListNode(arr[i]);
  current = current.next;
}

const getDecimalValue = function(head) {
  let ans = 0;
  while (head !== null) {
    //逻辑与 两个只要有一个为1 就为1¸
    ans = (ans << 1) | head.val;
    head = head.next;
  }
  return ans;
};
