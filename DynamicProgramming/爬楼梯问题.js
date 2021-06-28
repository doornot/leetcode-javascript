/**
 * @题目 爬楼梯问题
 * @leetcode https://leetcode-cn.com/problems/climbing-stairs/
 * @date 2021-06-28
 */

/**
  * @方法 动态规划
  * @思路 
    我们使用动态规划求解问题时，需要遵循以下几个重要步骤：
    第一步：定义子问题
      如果用 dp[n] 表示第 n 级台阶的方案数，并且由题目知：最后一步可能迈 2 个台阶，也可迈 1 个台阶，即第 n 级台阶的方案数等于第 n-1 级台阶的方案数加上第 n-2 级台阶的方案数
    第二步：实现需要反复执行解决的子子问题部分
      dp[n] = dp[n−1] + dp[n−2]
    第三步：识别并求解出边界条件
      第 0 级 1 种方案: dp[0]=1 
      第 1 级也是 1 种方案: dp[1]=1
  * @空间复杂度 O(n)
  */
const climbStairs1 = (n) => {
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/**
 * @优化 空间复杂度 O(1)
 */
const climbStairs2 = (n) => {
  let temp1 = 1
  let temp2 = 1
  let result = 0
  for (let i = 2; i <= n; i++) {
    result = temp1 + temp2
    temp1 = temp2
    temp2 = result
  }
  return result
}

console.log(climbStairs1(5)) // 8
console.log(climbStairs2(5)) // 8
