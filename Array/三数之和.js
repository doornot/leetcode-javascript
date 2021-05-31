/**
 * 题目: 两数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * leetcode: https://leetcode-cn.com/problems/3sum
 */

/**
 * @param nums number[]
 * @return number[]
 * @思路 按照两数之和的思路解题，遍历数组，选定一个数（ nums[i] ）作为三数之和的第一个数，然后题目就换成了在 i+1 到 nums.length-1 中两数之和问题。
 * @去重 结合console去理解
 */
const threeSum = (nums) => {
  let mySet = new Set()
  nums.sort((a, b) => a - b)
  const len = nums.length
  const result = []
  for (let i = 0; i < len; i++) {
    // 去重
    if (nums[i] === nums[i - 1]) {
      i++
    }
    let j = i + 1
    let first = nums[i]
    while (j < len) {
      let second = 0 - first - nums[j]
      let third = nums[j]
      if (mySet.has(second)) {
        result.push([first, second, third])
        // console.log('mySet: ', mySet)
        // console.log('[first, second, third]: ', [first, second, third])
        mySet.add(third)
        j++
        // 去重
        if (nums[j] === nums[j - 1]) {
          j++
        }
      } else {
        mySet.add(third)
        j++
      }
    }
    mySet = new Set()
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
