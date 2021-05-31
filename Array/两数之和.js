/**
 * 题目: 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * leetcode: https://leetcode-cn.com/problems/two-sum
 */

/**
 * @方法1
 * @param nums number[]
 * @param target number
 * @return number[]
 */
const twoSum1 = (nums, target) => {
  const myMap = new Map()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    myMap.set(nums[i], i)
  }
  for (let i = 0; i < len; i++) {
    if (myMap.has(target - nums[i]) && myMap.get(target - nums[i]) !== i) {
      return [i, myMap.get(target - nums[i])]
    }
  }
}

/**
 * @方法2 方法1的基础上优化
 */
const twoSum2 = (nums, target) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i]
    if (map.has(k)) {
      return [map.get(k), i]
    }
    map.set(nums[i], i)
  }
  return []
}

console.log(twoSum1([1, 2, 3, 4, 5], 7))
console.log(twoSum2([1, 2, 3, 4, 5], 7))
