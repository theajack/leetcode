## 题目描述

[原题地址](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

给定一个二叉树，返回它的 后序 遍历。

示例:

```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```

## 解题

比较常规的递归，按照后序遍历规则，先左后右

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = [];
    var traversal = function(root, res){
        if(root!==null){
            traversal(root.left, res);
            traversal(root.right, res);
            res.push(root.val);
        }
    }
    traversal(root, res);
    return res;
};
```
