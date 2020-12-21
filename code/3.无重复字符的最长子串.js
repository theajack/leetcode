/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

 // abbabcbb
var lengthOfLongestSubstring = function(s) {
    let dict = {};
    let max = 0;
    let left = 0, right;
    for(right = 0; right < s.length; right++){
        let current = s[right];
        let len = right + 1 - left;
        if(typeof dict[current] === 'number'){
            left = dict[current] + 1;
            right = dict[current];
            dict = {};
        }else{
            dict[current] = right;
            if(len > max)
                max = len;
        }
    }
    return max;
};
// @lc code=end

