/**
 * 题目: 数值数组交集、并集、差集
 */

// 交集
intersect = (a, b) => {
  return a.filter((v) => b.indexOf(v) > -1)
}

// 并集
union = (a, b) => {
  return a.concat(b.filter((v) => !(a.indexOf(v) > -1)))
}

// 差集
minus = (a, b) => {
  return a.filter((v) => b.indexOf(v) === -1)
}
