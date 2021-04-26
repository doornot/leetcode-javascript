function Node(val) {
  this.value = val
  this.next = null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function traverse(head) {
  if (head === null) return
  console.log(head.value)
  traverse(head.next)
}
console.log('反转之前:')
traverse(node1)

// 方法1-递归
function reverse1(head) {
  if (head.next === null || head === null) {
    return head
  }
  const newHead = reverse1(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

const newHead = reverse1(node1)
console.log('反转之后:')
traverse(newHead)

// 方法2-迭代
var reverse2 = function (head) {
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
