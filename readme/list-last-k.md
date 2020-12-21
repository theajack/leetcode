## 题目描述

[原题地址](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。


示例

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

## 解题

### 1. 比较好的解法

定义一个a，b，index，a可以想象成是前面走的人，b是后面走的人，index是拴住a、b的绳子，总长度为k，a先走，单a、b距离为k之后，a就拉着b走了，于是当a走到终点了，b也就是隔终点k步

```javascript
var getKthFromEnd = function(head, k) {
    let a = head, b = head, index = 1;
    while(a.next !== null){
        a = a.next;
        if(index < k){
            index ++;
        }else{
            b = b.next;
        }
    }
    return b;
};
```

时间复杂度：O(n)

空间复杂度：O(1)

### 2. 空间复杂度高但是好理解的解法

充分利用js特点。。。

```javascript
var getKthFromEnd = function(head, k) {
    let arr = [head];
    while(head.next !== null){
        head = head.next;
        arr.push(head);
    }
    return arr[arr.length-k];
};
```

时间复杂度：O(n)

空间复杂度：O(n)