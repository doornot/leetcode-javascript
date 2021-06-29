/**
  * @快排
    快排使用了分治策略的思想，所谓分治，顾名思义，就是分而治之。
    将一个复杂的问题，分成两个或多个相似的子问题，再把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解则为子问题解的合并。
  * @算法步骤
    - 首先从序列中选取一个数作为基准数
    - 将比这个数大的数全部放到它的右边，把小于或者等于它的数全部放到它的左边 （一次快排 partition）
    - 然后分别对基准的左右两边重复以上的操作，直到数组完全排序
  * @date 2021-06-29  
  */
function quickSort(arr) {
  sort(arr, 0, arr.length - 1)
  return arr
}

// 递归
function sort(arr, left, right) {
  const len = arr.length
  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    sort(arr, left, partitionIndex - 1)
    sort(arr, partitionIndex + 1, right)
  }
}

// 分区操作-快排的核心
function partition(arr, left, right) {
  const pivot = arr[left]
  let i = left
  let j = right
  while (1) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i == j) {
      return i
    } else if (i > j) {
      return i - 1
    }
    swap(arr, i, j)
    i++
    j--
  }
}

// 交换数组2个元素位置
function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(quickSort([1, 3, 2, 5, 4])) // [1,2,3,4,5]
console.log(quickSort([1, 3, 1, 2, 6, 2])) // [ 1, 1, 2, 2, 3, 6 ]
