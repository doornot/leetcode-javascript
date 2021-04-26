function Node(val) {
  this.value = val
  this.next = null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(2)
const node5 = new Node(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

// 方法1-递归(函数调用栈)
const isPalindrome1 = (head) => {
  let left = head
  function traverse(right) {
    if (right == null) return true
    let res = traverse(right.next)
    res = res && right.val === left.val
    left = left.next
    return res
  }
  return traverse(head)
}

// 方法2-遍历
const isPalindrome2 = (head) => {
  let right = reverse(findCenter(head))
  let left = head

  while (right != null) {
    if (left.val !== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }
  return true
}
// 快慢指针找中间节点
function findCenter(head) {
  let slower = head,
    faster = head
  while (faster && faster.next != null) {
    slower = slower.next
    faster = faster.next.next
  }

  if (faster != null) {
    slower = slower.next
  }
  return slower
}
// 链表反转
function reverse(head) {
  let prev = null,
    cur = head,
    nxt = head
  while (cur != null) {
    nxt = cur.next
    cur.next = prev
    prev = cur
    cur = nxt
  }
  return prev
}

console.log(isPalindrome1(node1))

console.log(isPalindrome2(node1))
