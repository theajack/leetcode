## 题目描述

[原题地址](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 解题

### 1. 暴力枚举
   
```javascript
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i,j]
            }
        }
    }
};
```

事件复杂度： O(n^2)
空间复杂度： O(1)

### 2. 使用字典存储

遍历每个元素时，去字典中查找是否有与其配对的数字

如果有，直接返回两个下标

如果没有，将当前元素需要的配对数字作为键，下标作为值存储在字典中

```javascript
var twoSum = function(nums, target) {
    let expected = {};
    for (var i = 0; i < nums.length; i++) {
        if (typeof expected[nums[i]] === 'number') {
            return [expected[nums[i]], i];
        }
        expected[target - nums[i]] = i;
    }
    return [];
};
```

事件复杂度： O(n)

空间复杂度： O(n)

