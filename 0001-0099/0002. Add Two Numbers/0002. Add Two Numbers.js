/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//  Output: [8,9,9,9,0,0,0,1]
// 由于数字是倒着排列 所以上面的l1 = 9999999 l2 = 9999 output=10009998
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
    // 根节点
    const root = new ListNode(0);
    let d = root;
    let carry = 0;
    // 由于步骤1  可能会出现两个链表都遍历完毕了 但是carry 还有值 需要在链表的下一位补上  
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }
        // 只保留个位
        d.next = new ListNode(carry % 10);
        // 如果carry > 10 需要保留  在下一位继续参与计算
        carry = Math.trunc(carry / 10); // 1
        d = d.next;
    }
    return root.next;
};
