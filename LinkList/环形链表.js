function Node(val) {
  this.value = val
  this.next = null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.next = node2
node2.next = node3
// node3.next = node1
node3.next = node4

function hasCycle(head) {
  if (head === null || head.next === null) return false
  let slower = head
  let faster = head
  while (faster !== null && faster.next !== null) {
    slower = slower.next
    faster = faster.next.next
    if (slower === faster) {
      return true
    }
  }
  return false
}

console.log(hasCycle(node1))
