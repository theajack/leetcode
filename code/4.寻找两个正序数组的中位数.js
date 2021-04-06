/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
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
// @lc code=end

