/**
 * 题目: 最长连续递增序列
 * 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
 * leetcode: https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  const len = nums.length
  if (len === 0) return 0
  let maxLen = 1
  let temp = 1
  let left = 0
  let right = 1
  while (right < len) {
    if (nums[left] < nums[right]) {
      temp++
    } else {
      temp = 1
    }
    maxLen = Math.max(maxLen, temp)
    left++
    right++
  }
  return maxLen
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])) // 3
console.log(findLengthOfLCIS([10, 3, 5, 4, 7, 8])) // 3
