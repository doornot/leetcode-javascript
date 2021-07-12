/**
 * @题目 分发饼干
 * @leetcode https://leetcode-cn.com/problems/assign-cookies/
 * @date 2021-07-12
 */

/**
 * @方法 贪心算法
 * @param g 小孩数组 number[]
 * @param s 饼干数组 number[]
 * @returns number
 */

const findContentChildren = function (g, s) {
  if (!g.length || !s.length) return 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let gi = 0
  let si = 0
  while (gi < g.length && si < s.length) {
    if (g[gi] <= s[si++]) {
      gi++
    }
  }
  return gi
}

console.log(findContentChildren([1, 2, 3], [1, 1])) // 1
console.log(findContentChildren([1, 2], [1, 2, 3])) // 2
