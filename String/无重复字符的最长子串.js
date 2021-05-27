/**
 * 题目: 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * leetcode: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * 方法一: 维护数组
 */
const lengthOfLongestSubstring1 = (str) => {
  const len = str.length
  if (len === 1) return 1
  const arr = []
  let i = 0,
    max = 0
  for (i; i < len; i++) {
    const index = arr.indexOf(str[i])
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(str[i])
    max = Math.max(arr.length, max)
  }
  return max
}

/**
 * 方法二: Map
 * 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标
 * 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标
 * 遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中
 * 最后，返回 max 即可
 * 结合实例和console去理解
 */
const lengthOfLongestSubstring2 = (str) => {
  let map = new Map(),
    len = str.length,
    max = 0,
    i = 0
  for (j = 0; j < len; j++) {
    if (map.has(str[j])) {
      i = Math.max(map.get(str[j]) + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(str[j], j)
  }
  return max
}

console.log(lengthOfLongestSubstring1('ababc'))
console.log(lengthOfLongestSubstring2('ababc'))

console.log(lengthOfLongestSubstring1('bbb'))
console.log(lengthOfLongestSubstring2('bbb'))

console.log(lengthOfLongestSubstring1('abcababcd'))
console.log(lengthOfLongestSubstring2('abcababcd'))
