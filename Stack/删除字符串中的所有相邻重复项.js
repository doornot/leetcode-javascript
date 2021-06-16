/**
 * @题目 删除字符串中的所有相邻重复项
 * @描述 给出由小写字母组成的字符串 str ，重复项删除操作 会选择两个相邻且相同的字母，并删除它们。
 *      在 str 上反复执行重复项删除操作，直到无法继续删除。
 *      在完成所有重复项删除操作后返回最终的字符串。
 * @leetcode https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 */

/**
 * @方法 栈数据结构
 * @思路 遍历字符串，取出栈头字符，判断当前字符与栈头字符是否一致
 *      不一致，栈头字符进栈，当前字符进栈
 *      一致，即栈头字符与当前字符相同相邻，都不需要进栈，直接进入下次遍历即可
 */
const removeDuplicates = (str) => {
  const stack = []
  for (s of str) {
    const prev = stack.pop()
    if (s !== prev) {
      stack.push(prev)
      stack.push(s)
    }
  }
  return stack.join('')
}

console.log(removeDuplicates('abbaca')) // ca

/**
 * @题目 删除字符串中的所有相邻重复项 II（上一题的升级版）
 *      给你一个字符串 str，「k 倍重复项删除操作」将会从 str 中选择 k 个相邻且相等的字母，并删除它们，使被删去的字符串的左侧和右侧连在一起。
 *      你需要对 str 重复进行无限次这样的删除操作，直到无法继续为止。
 *      在执行完所有删除操作后，返回最终得到的字符串。
 * @leetcode https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 */

/**
 * @方法 栈数据结构
 * @思路 本题解题思路与上题是一致的，区别在于上一题中每个栈元素的长度都为1，本题的栈元素长度为1 ～ k-1
 *      遍历字符串依次入栈，入栈时，判断当前元素与栈头元素是否一致，如果不一致则入栈，
 *      如果一致，判断栈头字符是否长度为 k - 1 ，如果为 k-1 ，即加入该字符时，满足连续相同字符 k 个，
 *      此时，需要栈头出栈，当前字符不进栈，如果小于 k-1 ，则取出栈头字符，加上当前字符，重新入栈
 */
const removeDuplicates2 = (str, k) => {
  const stack = []
  for (s of str) {
    const prev = stack.pop()
    if (!prev || prev[0] !== s) {
      stack.push(prev)
      stack.push(s)
    } else if (prev.length < k - 1) {
      stack.push(prev + s)
    }
  }
  return stack.join('')
}

console.log(removeDuplicates2('deeedbbcccbdaa', 3)) // aa
