/**
 * @param {string[]} strs
 * @return {string}
 * @leetcode https://leetcode-cn.com/problems/longest-common-prefix/
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  let first = strs[0]
  if (first === '') return ''
  let minLen = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < strs.length; i++) {
    const len = twoStrLongestCommonPrefix(first, strs[i])
    minLen = Math.min(len, minLen)
  }
  return first.slice(0, minLen)
}

function twoStrLongestCommonPrefix(s, t) {
  let i = 0,
    j = 0
  let cnt = 0
  while (i < s.length && j < t.length) {
    console.log(s[i], t[j], cnt)
    if (s[i] === t[j]) {
      cnt++
    } else {
      return cnt
    }
    i++
    j++
  }
  return cnt
}
