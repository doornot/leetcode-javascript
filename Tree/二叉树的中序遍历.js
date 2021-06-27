/**
 * @题目 二叉树中序遍历
 * @描述 前序遍历: 左子树 -> 根结点 -> 右子树
 * @leetcode https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @date 2021-06-27
 */

/**
 * @方法1 递归方式
 */
const inorderTraversal1 = (root) => {
  const result = []
  const inorderTraversalNode = (node) => {
    if (node) {
      // 左子树
      inorderTraversalNode(node.left)
      // 根结点
      result.push(node.val)
      // 右子树
      inorderTraversalNode(node.right)
    }
  }
  inorderTraversalNode(root)
  return result
}

/**
 * @方法2 栈+递归
 */
const inorderTraversal2 = (root) => {
  const stack = []
  const result = []
  let node = root
  while (node || stack.length) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    result.push(node.val)
    node = node.right
  }
  return result
}
