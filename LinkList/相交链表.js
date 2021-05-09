function Node(val) {
  this.value = val
  this.next = null
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const getIntersectionNode = function (headA, headB) {
  let lastHeadA = null
  let lastHeadB = null
  let originHeadA = headA
  let originHeadB = headB
  if (!headA || !headB) {
    return null
  }
  while (true) {
    if (headB == headA) {
      return headB
    }
    if (headA && headA.next == null) {
      lastHeadA = headA
      headA = originHeadB
    } else {
      headA = headA.next
    }
    if (headB && headB.next == null) {
      lastHeadB = headB
      headB = originHeadA
    } else {
      headB = headB.next
    }
    if (lastHeadA && lastHeadB && lastHeadA != lastHeadB) {
      return null
    }
  }
}
console.log(getIntersectionNode(node1, node6));
console.log(getIntersectionNode(node1, node3));
