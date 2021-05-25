/**
 * 题目: 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。
 * leetcode: https://leetcode-cn.com/problems/longest-palindromic-substring/
 */

/**
 * 方法一: 动态规划
 */
const longestPalindrome1 = (str) => {
  const len = str.length
  if (len < 2) return str
  let res = str[0],
    dp = new Array(len).fill(new Array(len).fill(false))
  for (let j = 1; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (j === i) {
        dp[i][j] = true
      } else if (j - i === 1 && str[i] === str[j]) {
        dp[i][j] = true
      } else if (str[i] === str[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true
      }
      // 获取当前最长回文子串
      if (dp[i][j] && j - i + 1 > res.length) {
        res = str.substring(i, j + 1)
      }
    }
  }

  return res
}

/**
 * 方法二：遍历
 */
function longestPalindrome2(str) {}

console.log(longestPalindrome1('hello')) // ll
// console.log(longestPalindrome2('hello'))
console.log(longestPalindrome1('12321')) // 12321
// console.log(longestPalindrome2('12321'))
