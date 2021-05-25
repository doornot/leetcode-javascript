/**
 * 题目: 判断字符串是否回文
 */

/**
 * @方法一 基于 js api
 * @str string
 * @return boolean
 */
function isPalindrome1(str) {
  if (typeof str !== 'string') return false
  return str.split('').reverse().join('') === str
}

/**
 * @方法二 遍历
 * @str string
 * @return boolean
 */
function isPalindrome2(str) {
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

console.log(isPalindrome1('hello'))
console.log(isPalindrome1('12321'))
console.log(isPalindrome2('hello'))
console.log(isPalindrome2('12321'))

/**
 * charAt
 * charAt() 方法从一个字符串中返回指定的字符。
 * 语法 str.charAt(index)
 * 参数 index 一个介于0 和字符串长度减1之间的整数。默认为0
 * 示例如下
 */
const a = 'hello'
a.charAt() // 'h'
a.charAt(1) // 'e'
