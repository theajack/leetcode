### 题目描述

[原题地址](https://leetcode-cn.com/problems/three-steps-problem-lcci/)

三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

```
输入：n = 3 
输出：4
说明: 有四种走法
```


### 解题思路

一开始上来想的是递归，超出时间限制了

看别人的答案想起来是动态规划，从0到n，比从n到0效率提高了不止一丁点

核心就是理清楚公式（斐波那契数列）

`s(n) = s(n-3) + s(n-2) + s(n-1);`

### 代码

从差的到好，先放个递归，动态规划在最后

#### 1. 递归

这个比较好理解，直接套公式

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    if(n === 1){
        return 1;
    }
    if(n === 2){
        return 1 + waysToStep(1);
    }
    if(n === 3){
        return 1 + waysToStep(2) + waysToStep(1);
    }
    return (waysToStep(n-1) + waysToStep(n-2) + waysToStep(n-3)) % 1000000007
};
```

时间复杂度：O(2^n)
 
空间复杂度：O(1)


#### 2. 递归 + 字典

没有使用字典会大量的重复计算，所以这里加上字典

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    let dict = {};
    let step = function(x){
        if(dict[x]){
            return dict[x]
        }
        if(x===0) return 0;
        let s = 0;
        if(x === 1){
            s = 1;
        }else if(x === 2){
            s = 1 + step(1);
        }else if(x === 3){
            s = 1 + step(2) + step(1);
        }else{
            s =  (step(x-1) + step(x-2) + step(x-3)) % 1000000007
        }
        if(!dict[x]){
            dict[x] = s;
        }
        return s;
    }
    return step(n)
};
```

时间复杂度：O(n^2) 
 
空间复杂度：O(n)

数据很大的时候，执行起来js调用栈还是溢出来了

#### 3. 动态规划

从1层到n层来计算

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
    let result = [0,1,2,4];
    for (let i = 4; i <= n; i++) {
        result[i] = (result[i - 1] + result[i - 2] + result[i - 3])%1000000007;
    }
    return result[n];
};
```

时间复杂度：O(n) 
 
空间复杂度：O(n)

#### 4. 动态规划 + 空间复杂度优化

动态规划效率已经很高了，但是我发现result这个数组里其实只需要用到前三个数字就行，所以空间上造成了一定的浪费，这里用队列可以降低空间复杂度，而js中的数组可以很好实现这个功能

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
    let m = 1000000007;
    let result = [0,1,2,4];
    if(n<=3){
        return result[n];
    }
    for (let i = 4; i <= n; i++) {
        result.shift();
        result.push((result[2] + result[1] + result[0])%m);
    }
    return result.pop();
};
```

时间复杂度：O(n) 
 
空间复杂度：O(1)

以下是运行结果比较

![image.png](https://pic.leetcode-cn.com/c0e06a905aa51c385946e04cd08701078b89de5b56581e8f61fb474ec7586f35-image.png)