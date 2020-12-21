## 题目描述

[原题地址](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/submissions/)

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。


示例

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

## 解题

### 解题思路

用递归把矩阵一圈一圈的剥掉，按照顺序加到数组里，做好边界判断就可以了

充分利用了js数组的api，不过感觉不是很优雅

### 代码

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let main = function(arr){
        if(matrix.length === 0 || matrix[0].length === 0)return arr;
        [].push.apply(arr,matrix.shift());
        for(let i = 0;i<matrix.length;i++){
            arr.push(matrix[i].pop());
        }
        if(matrix.length === 0 || matrix[0].length === 0)return arr;
        [].push.apply(arr,matrix.pop().reverse());
        for(let i = matrix.length-1;i>=0;i--){
            arr.push(matrix[i].shift());
        }
        return main(arr);
    }
    return main([])
};
```


时间复杂度: O(n^2)

空间复杂度:  O(1) (arr为返回结果，为必须使用的空间)

n表示矩阵长或宽

时空复杂度应该没有优化空间了