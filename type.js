/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    
    // let index = 1;
    // let lastOddNode = head;
    // let lastNode = head;
    // let cnode = head;
    // if(!head){ // 空链表处理
    //     return head;
    // }
    // while(cnode.next){
    //     lastNode = cnode;
    //     cnode = cnode.next;
    //     index ++;
    //     if(index % 2 === 1){
    //         let node = lastOddNode.next;
    //         lastOddNode.next = cnode;
    //         lastNode.next = cnode.next;
    //         cnode.next = node;
    //         lastOddNode = cnode;
    //         cnode = lastNode;
    //     }
    // }

    // return head;
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