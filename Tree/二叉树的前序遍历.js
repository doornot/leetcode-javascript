/**
 * @题目 二叉树前序遍历
 * @描述 前序遍历: 根结点 -> 左子树 -> 右子树
 * @leetcode https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @date 2021-06-26
 */

/**
 * @方法1 递归方式
 */
const preorderTraversal1 = (root) => {
  const result = []
  const preOrderTraverseNode = (node) => {
    if (node) {
      // 根结点
      result.push(node.val)
      // 左子树
      preOrderTraverseNode(node.left)
      // 右子树
      preOrderTraverseNode(node.right)
    }
  }
  preOrderTraverseNode(root)
  return result
}

/**
 * @方法2 栈遍历
 * @思路 利用栈来记录遍历的过程，实际上，递归就使用了调用栈，所以这里我们可以使用栈来模拟递归的过程
   - 首先根入栈
   - 将根节点出栈，将根节点值放入结果数组中
   - 然后遍历左子树、右子树，因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
   - 继续出栈（左子树被出栈）...
 */
const preorderTraversal2 = (root) => {
  const result = []
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const currentNode = stack.pop()
    result.push(currentNode.val)
    if (currentNode.right) {
      stack.push(currentNode.right)
    }
    if (currentNode.left) {
      stack.push(currentNode.left)
    }
  }
  return result
}
