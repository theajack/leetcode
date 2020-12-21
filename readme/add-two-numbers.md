## 题目描述

[原题地址](https://leetcode-cn.com/problems/add-two-numbers/)

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

## 解题

### 1
   
记录当前位置， 需要注意的有

1. 进位
2. 两个链表长度不一致时的处理
3. 两个链表长度一致，但是最高位有进位

```javascript
var addTwoNumbers = function (l1, l2) {
    let p1 = l1,
        p2 = l2;
    let result = new ListNode(0, null);
    let head = result;
    let add = false;
    while (p1 || p2) {
        if (!p1) { p1 = new ListNode(0, null); }
        if (!p2) { p2 = new ListNode(0, null); }
        let n1 = p1 ? p1.val : 0;
        let n2 = p2 ? p2.val : 0;
        let sum = n1 + n2 + (add ? 1 : 0);
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
```

事件复杂度： O(max(m,n))
空间复杂度： O(max(m,n))