/**
 * @题目 滑动窗口最大值问题
 * @描述 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * @示例
   - 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
   - 输出: [3,3,5,5,6,7] 
 * @leetcode https://leetcode-cn.com/problems/sliding-window-maximum/
 * @date 2021-06-26
 */

/**
 * @方法1 暴力解法
 * @param nums number[]
 * @param k number
 * @returns number[]
 * @复杂度分析
   - 时间复杂度：O(n*k) leetcode运行超时
   - 空间复杂度：O(n)
 */
const maxSlidingWindow1 = (nums, k) => {
  if (k === 1) return nums
  let result = []
  let arr = []
  let len = nums.length
  for (let i = 0; i < len; i++) {
    arr.push(nums[i])
    if (i >= k - 1) {
      result.push(Math.max(...arr))
      arr.shift()
    }
  }
  return result
}

/**
 * @方法2 双端队列
   - 双端队列（deque）是指允许两端都可以进行入队和出队操作的队列
 * @param 思路
   - 使用一个双端队列存储窗口中值的索引，并且保证双端队列中第一个元素永远是最大值
     - 比较当前元素 i 和双端队列第一个元素（索引值），相差 >= k 时队首出列
     - 依次比较双端队列的队尾与当前元素 i 对应的值，队尾元素值较小时出列，直至不小于当前元素 i 的值时，或者队列为空，这是为了保证当队头出队时，新的队头依旧是最大值
     - 当前元素入队
     - 从第 K 次遍历开始，依次把最大值（双端队列的队头）添加到结果 result 中
 */
const maxSlidingWindow2 = (nums, k) => {
  const deque = []
  const result = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (i - deque[0] >= k) {
      deque.shift()
    }
    // 注意这里是while语句，而不是if语句
    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }
    deque.push(i)
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }
  return result
}

const k = 3
const nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow1(nums, k)) // [ 3, 3, 5, 5, 6, 7 ]
console.log(maxSlidingWindow2(nums, k)) // [ 3, 3, 5, 5, 6, 7 ]
