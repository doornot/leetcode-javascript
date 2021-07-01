/**
 * @题目 最大子序和
 * @描述 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @leetcode https://leetcode-cn.com/problems/maximum-subarray/
 * @date 2021-07-01
 */

/**
 * @方法 动态规划
 * @思路
   第一步：定义子问题
    - 假设我们已经知道了以第 i-1 个数结尾的连续子数组的最大和 dp[i-1]，
    - 显然以第i个数结尾的连续子数组的最大和的可能取值要么为 dp[i-1]+nums[i]，
    - 要么就是 nums[i] 单独成一组，也就是 nums[i] ，在这两个数中我们取最大值。
   第二步：实现需要反复执行解决的子子问题部分
    - dp[n] = Math.max(dp[n−1]+nums[n], nums[n])
   第三步：识别并求解出边界条件
    - dp[0]=nums[0]
   最后一步：把尾码翻译成代码，处理一些边界情况
    - 因为我们在计算 dp[i] 的时候，只关心 dp[i-1] 与 nums[i]，
    - 因此不用把整个 dp 数组保存下来，只需设置一个 pre 保存 dp[i-1] 就好了。
 */
const maxSubArray = function (nums) {
  let max = nums[0]
  let pre = 0
  for (const num of nums) {
    if (pre > 0) {
      pre += num
    } else {
      pre = num
    }
    max = Math.max(max, pre)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
