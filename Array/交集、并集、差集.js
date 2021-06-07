/**
 * 题目: 数值数组交集、并集、差集
 */

// 交集
const intersect = (a, b) => {
  return a.filter((v) => b.indexOf(v) > -1)
}

// 并集
const union = (a, b) => {
  return a.concat(b.filter((v) => !(a.indexOf(v) > -1)))
}

// 差集
const minus = (a, b) => {
  return a.filter((v) => b.indexOf(v) === -1)
}

const a = [1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7]

console.log('intersect: ' + intersect(a, b))
console.log('union: ' + union(a, b))
console.log('minus: ' + minus(a, b))
