// 2020.09.22

/**
 * 最小栈
 * 时间复杂度：O(1)
 * 空间复杂度：O(n)
 */
var MinStack = function () {
  this.x_stack = []
  this.min_stack = [Infinity]
}

MinStack.prototype.push = function (x) {
  this.x_stack.push(x)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
}

MinStack.prototype.pop = function () {
  this.x_stack.pop()
  this.min_stack.pop()
}

MinStack.prototype.top = function () {
  return this.x_stack[this.x_stack.length - 1]
}

MinStack.prototype.getMin = function () {
  return this.min_stack[this.min_stack.length - 1]
}

// 参考
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/min-stack/solution/zui-xiao-zhan-by-leetcode-solution/
