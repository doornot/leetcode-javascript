/**
 * 方法一：map+数组
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
let topKFrequent1 = function(nums, k) {
  let map = new Map(), arr = [...new Set(nums)]
  nums.map((num) => {
      if(map.has(num)) map.set(num, map.get(num)+1)
      else map.set(num, 1)
  })
  return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};


/**
 * 方法二：map + 小顶堆
 * 思路：遍历一遍数组统计每个元素的频率，并将元素值（ key ）与出现的频率（ value ）保存到 map 中。
   通过 map 数据构建一个前 k 个高频元素小顶堆，小顶堆上的任意节点值都必须小于等于其左右子节点值，即堆顶是最小值。
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
let topKFrequent2 = function(nums, k) {
  let map = new Map(), heap = [,]
  nums.map((num) => {
      if(map.has(num)) map.set(num, map.get(num)+1)
      else map.set(num, 1)
  })
  
  // 如果元素数量小于等于 k
  if(map.size <= k) {
      return [...map.keys()]
  }
  
  // 如果元素数量大于 k，遍历map，构建小顶堆
  let i = 0
  map.forEach((value, key) => {
      if(i < k) {
          // 取前k个建堆, 插入堆
          heap.push(key)
          // 原地建立前 k 堆
          if(i === k-1) buildHeap(heap, map, k)
      } else if(map.get(heap[1]) < value) {
          // 替换并堆化
          heap[1] = key
          // 自上而下式堆化第一个元素
          heapify(heap, map, k, 1)
      }
      i++
  })
  // 删除heap中第一个元素
  heap.shift()
  return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, map, k) => {
  if(k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for(let i = Math.floor(k/2); i>=1 ; i--) {
      heapify(heap, map, k, i)
  }
}

// 堆化
let heapify = (heap, map, k, i) => {
  // 自上而下式堆化
  while(true) {
      let minIndex = i
      if(2*i <= k && map.get(heap[2*i]) < map.get(heap[i])) {
          minIndex = 2*i
      }
      if(2*i+1 <= k && map.get(heap[2*i+1]) < map.get(heap[minIndex])) {
          minIndex = 2*i+1
      }
      if(minIndex !== i) {
          swap(heap, i, minIndex)
          i = minIndex
      } else {
          break
      }
  }
}

// 交换
let swap = (arr, i , j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 参考：
// 作者：user7746o
// 链接：https://leetcode-cn.com/problems/top-k-frequent-elements/solution/javascript-qian-k-ge-gao-pin-yuan-su-by-user7746o/
