/**
 * @题目 二叉树的层次遍历
 * @描述 给定一个二叉树，返回其节点值自底向上的层次遍历。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
    3
   / \
  9  20      左侧的二叉树返回: [[15,7],[9,20],[3]]
    /  \
   15   7
 * @leetcode https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * @date 2021-06-27
 */

/**
 * @方法1 BFS (Breadth First Search) 广度优先遍历
 * @思路 将根节点放到队列中，然后不断遍历队列
 */
const levelOrderBottom1 = (root) => {
  if (!root) return []
  const result = []
  let queue = [root]
  while (queue.length) {
    let nodeArr = []
    let tempQueue = []
    while (queue.length) {
      let node = queue.shift()
      nodeArr.push(node.val)
      if (node.left) tempQueue.push(node.left)
      if (node.right) tempQueue.push(node.right)
    }
    queue = tempQueue
    result.push(nodeArr)
  }
  return result.reverse()
}

/**
 * @方法2 DFS (Depth First Search) 深度优先遍历
 */
const levelOrderBottom2 = (root) => {
  const result = []
  const dep = (node, depth) => {
    if (node) {
      result[depth] = result[depth] || []
      result[depth].push(node.val)
      if (node.left) dep(node.left, depth + 1)
      if (node.right) dep(node.right, depth + 1)
    }
  }
  dep(root, 0)
  return result.reverse()
}
