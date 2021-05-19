function Node(val) {
  this.value = val
  this.next = null
}

const node1 = new Node(4)
const node2 = new Node(1)
const node3 = new Node(2)
const node4 = new Node(3)

node1.next = node2
node2.next = node3
node3.next = node4

/**
 * 链表排序
 */
const sortList = (head) => {
  if (null) return null
  return mergeSort(head)
}
/**
 * 归并排序
 * 若分裂后的两个链表长度不为 1，则继续分裂
 * 直到分裂后的链表长度都为 1，
 * 然后合并小链表
 */
const mergeSort = (head) => {
  if (head.next !== null) {
    // 获取中间节点
    let slower = getCnter(head)
    // 分裂成两个链表
    let nxt = slower.next
    slower.next = null
    // 继续分裂（递归分裂）
    const left = mergeSort(head)
    const right = mergeSort(nxt)
    // 合并两个有序链表
    head = merge(left, right)
  }
  return head
}
/**
 * 合并两个有序链表
 */
const merge = (left, right) => {
  let newHead = new Node(0)
  let current = newHead
  while (left && right) {
    if (left.value < right.value) {
      current.next = left
      left = left.next
    } else {
      current.next = right
      right = right.next
    }
    current = current.next
  }
  current.next = left || right
  return newHead.next
}

/**
 * 获取中间节点
 * 如果链表长度为奇数，则返回中间节点
 * 如果链表长度为偶数，则有两个中间节点，这里返回第一个
 */
const getCnter = (head) => {
  let slower = head
  let faster = head.next
  while (faster !== null && faster.next !== null) {
    slower = slower.next
    faster = faster.next.next
  }
  return slower
}

/**
 * 链表遍历
 */
function traverse(head) {
  if (head === null) return
  console.log(head.value)
  traverse(head.next)
}

console.log('获取node1中间节点: ')
console.log(getCnter(node1))

console.log('排序之前: ')
traverse(node1)

console.log('排序之后: ')
traverse(sortList(node1))
