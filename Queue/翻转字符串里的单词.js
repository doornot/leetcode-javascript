/**
 * @题目 翻转字符串里的单词
 * @描述 给定一个字符串，逐个翻转字符串中的每个单词
 * @leetcode https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @date 2021-06-26
 */

/**
 * @方法1 正则 + JS API
 * @param str string
 * @returns string
 */

const reverseWords1 = (str) => {
  return str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}

/**
 * @方法2 双端队列
 * @思路 字符串去头尾空格，然后遍历字符串，依次从队列头插入单词，最后再输出
 */
const reverseWords2 = (str) => {
  let left = 0
  let right = str.length - 1
  let queue = []
  let word = ''
  while (str.charAt(left) === ' ') left++
  while (str.charAt(right) === ' ') right--
  while (left <= right) {
    if (str.charAt(left) === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if (str.charAt(left) !== ' ') {
      word += str.charAt(left)
    }
    left++
  }
  queue.unshift(word)
  return queue.join(' ')
}

console.log(reverseWords1('welcome to shanghai')) // shanghai to welcome
console.log(reverseWords2('welcome to shanghai')) // shanghai to welcome
