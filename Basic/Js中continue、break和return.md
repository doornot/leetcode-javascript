### 一、continue 声明终止当前循环或标记循环的当前迭代中的语句执行，并在下一次迭代时继续执行循环。

与 break 语句的区别在于， continue 并不会终止循环的迭代，而是：

- 在 while 循环中，控制流跳转回条件判断；
- 在 for 循环中，控制流跳转到更新语句；

continue 语句可以包含一个可选的标号以控制程序跳转到指定循环的下一次迭代，而非当前循环。此时要求 continue 语句在对应的循环内部。

```js
// continue_例1
let text = ''

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue
  }
  text = text + i
}
console.log(text) // '012456789'

// continue_例2
let i = 0
let n = 0
while (i < 5) {
  i++
  if (i === 3) {
    continue
  }
  n += i
}
console.log(i) // 5
console.log(n) // 12

// continue_例3
var i = 0,
  j = 8
checkiandj: while (i < 4) {
  console.log('i: ' + i)
  i += 1

  checkj: while (j > 4) {
    console.log('j: ' + j)
    j -= 1
    if (j % 2 == 0) continue checkj
    console.log(j + ' is odd.')
  }
  console.log('i = ' + i)
  console.log('j = ' + j)
}
```

### 二、break 中止当前循环，switch 语句或 label 语句，并把程序控制流转到紧接着被中止语句后面的语句。

```js
// 例1
function testBreak(x) {
  var i = 0
  while (i < 6) {
    if (i == 3) {
      break
    }
    i += 1
  }
  return i * x
}
testBreak(2) // 6

// 例2
outer_block: {
  inner_block: {
    console.log('1')
    break outer_block // breaks out of both inner_block and outer_block
    console.log(':-(') // skipped
  }
  console.log('2') // skipped
}
```

### 三、return 终止函数的执行，并返回一个指定的值给函数调用者

```js
// 例1
function counter() {
  for (var count = 1; ; count++) {
    // 无限循环
    console.log(count + 'A') // 执行5次
    if (count === 5) {
      return
    }
    console.log(count + 'B') // 执行4次
  }
  console.log(count + 'C') // 永远不会执行
}
counter()

// 注意: return语句不可以直接用到没有函数包裹的循环中
// 下面的两个例子都会报错: `Uncaught SyntaxError: Illegal return statement`

let i = 0
let j = 10

for (i; i < 3; i++) {
  if (i > 1) {
    console.log('return false')
    return false
  }
  console.log('i', i)
}

while (j > 0) {
  if (j < 5) {
    console.log('return false')
    return false
  }
  console.log('j', j)
}
```

### 参考

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/continue

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return
