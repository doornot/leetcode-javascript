/**
 * @题目 买卖股票的最佳时机
 * @描述 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
        如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
        注意：你不能在买入股票前卖出股票。
 * @leetcode https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @date 2021-07-12
 */

/**
 * @方法 动态规划
 * @param prices number[]
 * @returns number
 * 虽然此题归类为动态规划，但实际没有套用动态规划的解题思路，也轻松的解答出来了。
 */
const maxProfit = function (prices) {
  const len = prices.length
  let result = 0
  let temp = prices[0]
  for (let i = 0; i < len; i++) {
    if (prices[i] >= temp) {
      result = Math.max(prices[i] - temp, result)
    } else {
      temp = prices[i]
    }
  }
  return result
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 5, 3, 1])) // 0
