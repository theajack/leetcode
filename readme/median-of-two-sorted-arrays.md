## 题目描述

[原题地址](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

```
输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
```

```
输入：nums1 = [], nums2 = [1]
输出：1.00000
```

```
输入：nums1 = [2], nums2 = []
输出：2.00000
```

## 解题

### 双指针

因为两个数组都是正序，只需要
   
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i1 = 0;
    let i2 = 0;
    let prev, prev2;

    let n = nums1.length + nums2.length;
    for(let i = 0; i <= n/2; i ++){
        if(i1 >= nums1.length || nums1[i1] > nums2[i2]){
            prev2 = prev;
            prev = nums2[i2]
            i2++;
        }else{
            prev2 = prev;
            prev = nums1[i1]
            i1++;
        }
    }
    return (n % 2) === 1 ? prev : ((prev+prev2)/2);
};
```

时间复杂度： 

空间复杂度： 