/**
 * @题目 删除字符串中出现次数 >= 2 次的相邻字符
 * @描述 输入："abbbaca", 输出："ca", 解释："abbbaca" => "aaca"=>"ca"
 * @注意 与【删除字符串中的所有相邻重复项】区别
 */

/**
 * @方法 栈
 * @param str string
 * @returns string
 */
const removeDuplicate = (str) => {
  const len = str.length
  let i = 0
  let top = null
  let stack = []
  while (i < len) {
    top = stack[stack.length - 1]
    if (top === str[i]) {
      // 字符串中出现了相邻字符
      // 1. 移除栈顶字符
      // 2. 移动指针, 指向下一个不同的字符
      stack.pop()
      while (str[i] === top) i++
    } else {
      stack.push(str[i])
      i++
    }
  }
  return stack.join(',')
}

console.log(removeDuplicate('abbbaca'))
console.log(removeDuplicate('aaa'))
console.log(removeDuplicate('aaab'))
