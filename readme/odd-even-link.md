## 题目描述

[原题地址](https://leetcode-cn.com/problems/odd-even-linked-list/)

给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例1

```
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
```

示例2

```
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
```

## 解题

### 1. 逢奇调换算法

思路：从第二个往后遍历，将奇数项与该项前面的偶数项链表片段进行换位

图示：

```
input: 1->2->3->4->5->6->7->8->9->N
1:     1->3->2->4->5->6->7->8->9->N // 3和2调换
2:     1->3->2->4->5->6->7->8->9->N // 5和2->4调换
3:     1->3->5->7->2->4->6->8->9->N // 7和2->4->6调换
4:     1->3->5->7->9->2->4->6->8->N // 9和2->4->6->8调换
```

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next){ // 空链表或只有一个元素的链表处理
        return head;
    }
    let index = 1;
    let lastOddNode = head;
    let lastNode = head;
    let cnode = head;
    while(cnode.next){
        lastNode = cnode;
        cnode = cnode.next;
        index ++;
        if(index % 2 === 1){
            let node = lastOddNode.next;
            lastOddNode.next = cnode;
            lastNode.next = cnode.next;
            cnode.next = node;
            lastOddNode = cnode;
            cnode = lastNode;
        }
    }
    return head;
};
```

时间复杂度：O(n)

空间复杂度：O(1)

### 2. 奇偶队列拼接算法

思路：这个比较好理解，将第一项作为奇数表表头，并生成odd指针，第二项作为偶数表表头，并生成firstEven和even指针，从第三项往后遍历，遇到奇数项就将odd.next指向该项，否则将even.next指向该项，odd或even指针向下移动

最后将odd（此时指向奇数链表的尾部）的next指向firstEven

最后不要忘记even.next置为空，否则链表没有表尾

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next){ // 空链表或只有一个元素的链表处理
        return head;
    }
    let odd = head;
    let even = head.next;
    let firstEven = head.next;
    let cnode = head.next;
    let index = 2;
    while(cnode.next){
        cnode = cnode.next;
        index ++;
        if(index % 2 === 1){
            odd.next = cnode;
            odd = cnode;
        }else{
            even.next = cnode;
            even = cnode;
        }
    }
    even.next = null;
    odd.next = firstEven;
    return head;
};
```

时间复杂度：O(n)

空间复杂度：O(1)