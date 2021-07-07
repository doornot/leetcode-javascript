/**
 * @题目 在排序数组中查找元素的第一个和最后一个位置
 * @leetcode https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @date 2021-07-07
 */

/**
 * @方法1 js-array-api findIndex 和 lastIndexOf
 */

console.log([[5, 7, 7, 8, 8, 10].findIndex((ele) => ele === 8), [5, 7, 7, 8, 8, 10].lastIndexOf(8)]) // [3, 4]

/**
 * @方法2 二分法
 */
const searchRange = function (nums, target) {
  return [leftSearch(nums, target), rightSearch(nums, target)]
}

const leftSearch = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  let mid = 0
  // 边界: nums只有一个元素
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2)
    if (nums[mid] > target) {
      high = mid - 1
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      // 向左收缩-关键步骤
      high = mid - 1
    }
  }
  if (low >= nums.length || nums[low] !== target) {
    return -1
  }
  return low
}

const rightSearch = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  let mid = 0
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2)
    if (nums[mid] > target) {
      high = mid - 1
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      // 向右收缩-关键步骤
      low = mid + 1
    }
  }
  if (high < 0 || nums[high] !== target) {
    return -1
  }
  return high
}

console.log('[searchRange]: ', searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
