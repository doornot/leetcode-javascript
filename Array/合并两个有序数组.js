/**
 * @题目 合并两个有序数组
 * @描述 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 * @leetcode https://leetcode-cn.com/problems/merge-sorted-array/
 */

/**
 * @方法 双指针
 * @param nums1 数组1
 * @param m nums1长度
 * @param nums2 数组2
 * @param n nums2长度
 */
const merge = (nums1, m, nums2, n) => {
  let p1 = 0
  let p2 = 0
  let cur = 0
  const arr = new Array(m + n).fill(0)
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      // nums1 已全部遍历完
      cur = nums2[p2]
      p2++
    } else if (p2 === n) {
      // nums2 已全部遍历完
      cur = nums1[p1]
      p1++
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums2[p2]
      p2++
    } else {
      cur = nums1[p1]
      p1++
    }
    arr[p1 + p2 - 1] = cur
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = arr[i]
  }
  return nums1
}

console.log(merge([1, 11, 22], 3, [2, 3, 5, 30], 4))
