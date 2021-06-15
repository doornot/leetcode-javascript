/**
 * @题目 编写一个函数计算多个数组的交集
 */

/**
 * @方法 reduce + filter + includes
 */
const intersection = (...args) => {
  if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  return [
    ...new Set(
      args.reduce((prev, current) => {
        return prev.filter((ele) => current.includes(ele))
      })
    )
  ]
}

console.log(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]))
