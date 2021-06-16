/**
 * @题目 有效的括号
 * @描述 给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。
 *   有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。
 *   注意空字符串可被认为是有效字符串。
 * @leetcode https://leetcode-cn.com/problems/valid-parentheses/
 */

/**
 * @方法1 栈数据结构
 * @解题思路 将字符串中的字符依次入栈，遍历字符依次判断：
 *   首先判断该元素是否是 { 、 ( 、 [ ，直接入栈
 *   否则该字符为 } 、 ) 、 ] 中的一种，如果该字符串有效，则该元素应该与栈顶匹配，例如栈中元素有 ({， 如果继续遍历到的元素为 ), 那么当前元素序列为 ({) 是不可能有效的，所以此时与栈顶元素匹配失败，则直接返回 false ，字符串无效
 *   当遍历完成时，所有已匹配的字符都已匹配出栈，如果此时栈为空，则字符串有效，如果栈不为空，说明字符串中还有未匹配的字符，字符串无效
 */
const isValidBrackets1 = (str) => {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let i = 0
  let len = str.length
  const stack = []
  for (i; i < len; i++) {
    if (map[str[i]]) {
      stack.push(str[i])
    } else if (str[i] !== map[stack.pop()]) {
      return false
    }
  }
  return stack.length === 0
}

/**
 * @方法2 replace
 */
const isValidBrackets2 = (s) => {
  while (s.length) {
    var temp = s
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
    if (s == temp) return false
  }
  return true
}

console.log(isValidBrackets1('[]')) // true
console.log(isValidBrackets1('([]')) // false
console.log(isValidBrackets1('([])')) // true

console.log(isValidBrackets2('[]')) // true
console.log(isValidBrackets2('([]')) // false
console.log(isValidBrackets2('([])')) // true
