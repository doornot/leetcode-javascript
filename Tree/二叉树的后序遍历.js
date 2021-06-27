/**
 * @题目 二叉树后序遍历
 * @描述 前序遍历: 左子树 -> 右子树 -> 根结点
 * @leetcode https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * @date 2021-06-27
 */

/**
 * @方法1 递归方式
 */
const postorderTraversal1 = (root) => {
  const result = []
  const postorderTraversalNode = (node) => {
    if (node) {
      // 左子树
      postorderTraversalNode(node.left)
      // 右子树
      postorderTraversalNode(node.right)
      // 根结点
      result.push(node.val)
    }
  }
  postorderTraversalNode(root)
  return result
}

/**
 * @方法2 栈+递归
 */
const postorderTraversal2 = (root) => {
  const stack = []
  const result = []
  if (root) stack.push(root)
  while (stack.length) {
    const curNode = stack.pop()
    result.unshift(curNode.val)
    // 先进栈左子树后右子树，出栈的顺序就变更为先右后左
    // 右先头插法入list，左再头插法入list
    if (curNode.left) {
      stack.push(curNode.left)
    }
    if (curNode.right) {
      stack.push(curNode.right)
    }
  }
  return result
}
