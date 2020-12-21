/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
var addTwoNumbers = function (l1, l2) {
    let p1 = l1, p2 = l2;
    let result = new ListNode(0, null);
    let head = result;
    let add = false;
    while (p1 || p2) {
        if (!p1) { p1 = new ListNode(0, null); }
        if (!p2) { p2 = new ListNode(0, null); }
        let sum = p1.val + p2.val + (add ? 1 : 0);
        add = false;
        if (sum >= 10) {
            add = true;
            sum -= 10;
        }
        if (!p1.next && (p2.next || add)) {
            p1.next = new ListNode(0, null);
        }
        head.val = sum;
        p1 = p1.next;
        p2 = p2.next;
        if(p1 || p2){
            head.next = new ListNode(0, null);
            head = head.next;
        }
    }
    return result;
};
// @lc code=end
