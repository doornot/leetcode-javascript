/**
 * @题目 使用最小花费爬楼梯
 * @描述 
   数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
   每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
   请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。
 * @leetcode https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * @date 2021-06-28
 */

/**
 * @方法 动态规划
 * @思路
   第一步：定义子问题
      踏上第 i 级台阶的体力消耗为到达前两个阶梯的最小体力消耗加上本层体力消耗：
      最后迈 1 步踏上第 i 级台阶：dp[i-1] + cost[i]
      最后迈 2 步踏上第 i 级台阶：dp[i-2] + cost[i]
  第二步：实现需要反复执行解决的子子问题部分
      dp[i] = min(dp[i-2], dp[i-1]) + cost[i]
  第三步：识别并求解出边界条件
      第 0 级 cost[0] 种方案: dp[0] = cost[0]
      第 1 级，有两种情况
        1：分别踏上第0级与第1级台阶，花费cost[0] + cost[1]
        2：直接从地面开始迈两步直接踏上第1级台阶，花费cost[1]
      dp[1] = min(cost[0] + cost[1], cost[1]) = cost[1]
 */
const minCostClimbingStairs = (cost) => {
  const dp = []
  dp[0] = cost[0]
  dp[1] = cost[1]
  const len = cost.length
  for (let i = 2; i <= len; i++) {
    dp[i] = cost[i] ? Math.min(dp[i - 1], dp[i - 2]) + cost[i] : Math.min(dp[i - 1], dp[i - 2])
  }
  return dp[len]
}

console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
