// 2020.09.20

/**
 * 方法一
 */
var isValid1 = function (s) {
  while (s.length) {
    var temp = s
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
    if (s == temp) return false
  }
  return true
}

/**
 * 方法二
 */
var isValid2 = function (s) {
  var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  var leftArr = []
  for (var ch of s) {
    if (ch in map) {
      // 为左括号时，顺序保存
      leftArr.push(ch)
    } else {
      // 为右括号时，与数组末位匹配
      if (ch != map[leftArr.pop()]) return false
    }
  }
  return !leftArr.length // 防止全部为左括号
}

// 参考：
// 作者：rhinoc
// 链接：https://leetcode-cn.com/problems/valid-parentheses/solution/javascript-you-xiao-de-gua-hao-by-rhinoc/
