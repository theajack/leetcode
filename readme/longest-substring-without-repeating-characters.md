## 题目描述

[原题地址](https://leetcode-cn.com/problems/xxx)

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 解题

### 1. 滑动窗口
   
例子：pwwkew

1.  p w w k e w
2. [p]w w k e w 左右指针都位于第一个 p未重复 记录到字典 p:0 记录max=1
3. [p w]w k e w 右指针右移一位 w未重复 记录到字典 w:1 记录max=2
4. [p w w]k e w 出现重复 滑动到**第一个重复字母位置+1** w:1 清空字典 
5.  p w[w]k e w 右指针右移一位 w未重复 记录到字典 w:2
6.  p w[w k]e w 右指针右移一位 k未重复 记录到字典 k:3
7.  p w[w k e]w 右指针右移一位 e未重复 记录到字典 e:4 记录max=3
8.  p w[w k e w] 出现重复 滑动到第一个重复字母位置+1 w2:1 清空字典
9.  p w w[k]e w ...
10. p w w[k e]w ...
11. p w w[k e w] 结束 max = 3

```javascript
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
```

时间复杂度： O(n);

空间复杂度： O(∣Σ∣)   ∣Σ∣ 表示字符集的大小 