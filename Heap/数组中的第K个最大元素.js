/*
 * 方法一：数组排序，取第 k 个数
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 */
let findKthLargest1 = function (nums, k) {
  nums.sort((a, b) => b - a).slice(0, k)
  return nums[k - 1]
}

/*
 * 方法二：构造前 k 个最大元素小顶堆，取堆顶
 * 时间复杂度：遍历数组需要 O(n) 的时间复杂度，一次堆化需要 O(logk) 时间复杂度，所以利用堆求 Top k 问题的时间复杂度为 O(nlogk)
 * 空间复杂度：O(k)
 * 概念：完全二叉树、堆
 */
let findKthLargest2 = function (nums, k) {
  // 从 nums 中取出前 k 个数，构建一个小顶堆
  let heap = [],
    i = 0
  while (i < k) {
    heap.push(nums[i++])
  }
  buildHeap(heap, k)

  // 从 k 位开始遍历数组
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      // 替换并堆化
      heap[1] = nums[i]
      heapify(heap, k, 1)
    }
  }

  // 返回堆顶元素
  return heap[1]
}

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
  if (k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}

// 堆化
let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while (true) {
    let minIndex = i
    if (2 * i <= k && arr[2 * i] < arr[i]) {
      minIndex = 2 * i
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
      minIndex = 2 * i + 1
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex)
      i = minIndex
    } else {
      break
    }
  }
}

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

findKthLargest2([1,2,3,4,5], 2)

// 参考： https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/javascriptsi-chong-fang-shi-jie-topkwen-ti-by-user/
