/**
 * 题目: 回文子串
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
 * 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 * leetcode: https://leetcode-cn.com/problems/palindromic-substrings/
 */

/**
 * @方法一 暴力解法
 * @str string
 * @return number
 */
let countSubstrings1 = (str) => {
  let count = 0,
    i = 0,
    j = 0,
    len = str.length
  for (i; i < len; i++) {
    for (j = i; j < len; j++) {
      if (isPalindrome(str.substring(i, j + 1))) {
        count++
      }
    }
  }
  return count
}

/**
 * 判断字符串是否回文
 */
function isPalindrome(str) {
  if (typeof str !== 'string') return false
  let i = 0
  let j = str.length - 1
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) return false
    i++
    j--
  }
  return true
}

/**
 * @方法二 动态规划
 * 一个字符串是回文串，它的首尾字符相同，且剩余子串也是一个回文串。
 * 其中，剩余子串是否为回文串，就是规模小一点的子问题，它的结果影响大问题的结果。
 * 一个子串由两端的 i 、j 指针确定，就是描述子问题的变量，子串 s[i...j] （ dp[i][j] ） 是否是回文串，就是子问题。
 * i === j： dp[i][j]=true
 * j - i == 1 && s[i] == s[j]： dp[i][j] = true
 * j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]： dp[i][j] = true
 * @str string
 * @return number
 */
let countSubstrings2 = function (str) {
  const len = str.length
  let count = 0
  const dp = new Array(len)

  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(false)
  }
  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (str[i] == str[j] && (j - i <= 1 || dp[i + 1][j - 1])) {
        dp[i][j] = true
        count++
      } else {
        dp[i][j] = false
      }
    }
  }
  return count
}

console.log(countSubstrings1('aaa')) // 6
console.log(countSubstrings2('aaa')) // 6
console.log(countSubstrings1('12321')) // 7
console.log(countSubstrings2('12321')) // 7
