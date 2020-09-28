// 2020.09.28

/**
 * 二叉树遍历-概念
 * 二叉树前序遍历：根结点 ---> 左子树 ---> 右子树
 * 二叉树中序遍历：左子树---> 根结点 ---> 右子树
 * 二叉树后序遍历：左子树 ---> 右子树 ---> 根结点
 */

/**
 * 方法一(递归)
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var inorderTraversal1 = function (root) {
  const res = []
  const inorder = (root) => {
    if (!root) {
      return
    }
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}

/**
 * 方法二(栈)
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var inorderTraversal2 = function (root) {
  const res = []
  const stk = []
  while (root || stk.length) {
    while (root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

/**
 * 构建二叉树
 */
function BinaryTree() {
  this.root = null //根节点默认为null
  //节点类型的构造函数
  function Node(val) {
    this.val = val
    this.left = null
    this.right = null
  }

  //插入方法
  this.insert = function (val) {
    var newNode = new Node(val)
    if (this.root === null) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }
  var insertNode = function (node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (newNode.val > node.val) {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
  }
}

var nodeArr = [8, 3, 10, 1, 6, 14, 4, 7, 13]

var binaryTree = new BinaryTree()

nodeArr.forEach(function (key) {
  binaryTree.insert(key)
})

console.log('JSON.stringify(binaryTree.root): ', JSON.stringify(binaryTree.root))

const root = binaryTree.root

console.log('inorderTraversal1(root): ', inorderTraversal1(root)) // [ 1, 3, 4, 6, 7, 8, 10, 13, 14 ]
console.log('inorderTraversal2(root): ', inorderTraversal2(root)) // [ 1, 3, 4, 6, 7, 8, 10, 13, 14 ]

// 参考
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
