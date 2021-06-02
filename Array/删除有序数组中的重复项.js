/**
 * 题目: 删除有序数组中的重复项
 * 给你一个有序数组 nums ，请你原地删除重复出现的元素，使每个元素只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * leetcode：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
 */

/**
 * @方法 快慢指针
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const len = nums.length
  if (len <= 1) return len
  let slow = 0,
    faster = 0
  while (faster < len) {
    if (nums[slow] === nums[faster]) {
      faster++
    }
    if (nums[slow] !== nums[faster] && faster < len) {
      slow++
      nums[slow] = nums[faster]
    }
    faster++
  }
  return slow + 1
}

console.log(removeDuplicates([1, 2, 3, 3, 3]))
console.log(removeDuplicates([1, 2, 2, 3, 3]))
