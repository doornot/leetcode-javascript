/**
 * 题目: 和为K的子数组
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 * leetcode: https://leetcode-cn.com/problems/subarray-sum-equals-k/
 */

/**
 * @方法1 暴力破解-双层循环
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum1 = function (nums, k) {
  let result = 0
  let sum = 0
  let j = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    sum = nums[i]
    if (sum === k) {
      result += 1
    }
    j = i + 1
    while (j < len) {
      // 当前元素组成的长度为1的数组
      sum += nums[j]
      if (sum === k) {
        result += 1
      }
      j++
    }
  }
  return result
}

/**
 * @方法2 哈希表
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum2 = function (nums, k) {
  let cnt = 0
  let sum0_i = 0,
    sum0_j = 0
  let map = new Map()
  map.set(0, 1)
  for (let i = 0; i <= nums.length; i++) {
    sum0_i += nums[i]
    sum0_j = sum0_i - k
    if (map.has(sum0_j)) {
      cnt += map.get(sum0_j)
    }
    let sumCnt = map.get(sum0_i) || 0
    map.set(sum0_i, sumCnt + 1)
  }
  return cnt
}

console.log(subarraySum1([1, 2, 3, 4, 5], 5))
console.log(subarraySum1([2, 0, 2, -2, 2], 2))

console.log(subarraySum2([1, 2, 3, 4, 5], 5))
console.log(subarraySum2([2, 0, 2, -2, 2], 2))
