// 2020.09.27

/**
 * 字符串解码(方法1)
 * 题目描述：给定一个经过编码的字符串，返回它解码后的字符串。编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 算法复杂度：O(n)
 */
var decodeString1 = function (s) {
  const numStack = []
  const strStack = []
  let result = ''
  let num = 0
  for (let char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char) // 例如：s === '12[a]'
    } else if (char === '[') {
      strStack.push(result) // 例如：s === 'a2[a]'
      result = ''
      numStack.push(num)
      num = 0
    } else if (char === ']') {
      let repeatTimes = numStack.pop()
      result = strStack.pop() + result.repeat(repeatTimes)
    } else {
      result += char // 例如：s === 'abc'
    }
  }
  return result
}

/**
 * 字符串解码(方法2)
 * 题目描述：给定一个经过编码的字符串，返回它解码后的字符串。编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 算法复杂度：O(n)
 */
var decodeString2 = (s) => {
  let stack = []
  for (const char of s) {
    if (char !== ']') {
      // ] 前的字符都入栈
      stack.push(char)
      continue
    }
    let cur = stack.pop() // 弹出一个来检测
    let str = '' // 组装字符串
    // 接下来肯定是遇到字母，直到遇到 [
    while (cur !== '[') {
      str = cur + str // cur字符加在左边
      cur = stack.pop() // 再拉出一个
    }
    // 此时cur为 [，接下来要遇到数字
    let num = ''
    cur = stack.pop() // 用下一个将 [ 覆盖
    while (!isNaN(cur)) {
      num = cur + num // 数字字符加在左边
      cur = stack.pop() // 再拉出一个
    }
    // 现在要么是字母，要么是 [
    stack.push(cur)
    stack.push(str.repeat(num))
  }
  return stack.join('')
}

// 参考：
// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/decode-string/solution/zhan-de-ji-yi-nei-ceng-de-jie-ma-liao-bie-wang-lia/
