// 2020.09.24

/**
 * 每日温度
 * 题目描述：请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
   例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 算法复杂度：O(n)
 */

var dailyTemperatures = function (T) {
  let len = T.length
  let i = 0
  const tempStack = []
  const result = Array(len).fill(0)
  for (i; i < len; i++) {
    let stackTop = tempStack[tempStack.length - 1]
    while (tempStack.length && T[i] > T[stackTop]) {
      result[stackTop] = i - stackTop
      tempStack.pop()
      stackTop = tempStack[tempStack.length - 1]
    }
    tempStack.push(i)
  }
  return result
}

// 参考：
// 作者：aver58
// 链接：https://leetcode-cn.com/problems/daily-temperatures/solution/cheng-xu-yuan-de-zi-wo-xiu-yang-739-daily-temperat/
