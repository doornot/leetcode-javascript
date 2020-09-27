### 1、最早的数组遍历方式

```
var a = ["a", "b", "c"];
  for(var index = 0;index < a.length;index++){
  console.log(a[index]);
}
```

### 2、自从 ES5 发布以后,可以用内建的 forEach 来遍历数组

```
var a = ["a", "b", "c"];
a.forEach(function(element) {
  console.log(element);
});
# 简洁了许多，但是不能使用 break 来退出循环, 不能使用 return 语句来返回到外层
```

### 3、当然你也可以使用 for 循环语法来遍历数组,那么你一定会想到 for-in

```
var a = ["a", "b", "c"];
for(var index in a){
  console.log(index);
  console.log(a[index]);
  console.log(typeof index);
}
```

* 这是一个糟糕的选择!
  * 赋值给 index 并不是一个数字，而是一个 String，可能无意进行字符串计算，这给编程带来不便
  * 作用于数组的 for-in 循环除了遍历数组元素以外，还会遍历自定义属性。
    * 举个例子，如果你的数组中有一个课枚举的类型 a.name，那么循环将额外执行一次，遍历到名为 name 的索引，甚至数组原型链上的属性都能被访问到
  * 这段代码可能按照 随机顺序遍历数组
  * for-in 这个代码是为普通对象设计的，不适用于数组的遍历

### 4、for of

```
var a = ["a", "b", "c"];
for(var value of a){
  console.log("for of: " + value);
}
```

* 这个方法是最简洁的，并且修复了 for-in 循环的所有缺点，与 forEach()不同的是，它可以正确的响应 break、contine、return 语句。

* 不仅如此，for-of 还可以支持大部分的类数组对象。

* 注意：for-of 循环不支持普通对象，但是如果你想迭代一个对象的属性，可以使用 for-in 循环(这也是它的本职工作)或者内建的 Object.keys()方法

```
var student = {
  name: 'Jack',
  age: 22,
  city: 'xiamen',
}
for (var key of Object.keys(student)) {
  //使用 Object.keys()方法获取对象 key 的数组
  console.log(key + ': ' + student[key])
}

# 那还不如用 for-in
for (var prop in student) {
  console.log(prop + ': ' + student[prop])
}
```

### 5、结论：javascript 中 for of 和 for in 的区别

- 推荐在循环对象属性的时候，使用 for...in,在遍历数组的时候的时候使用 for...of。

- for...in 循环出的是 key，for...of 循环出的是 value

- for...of 是 ES6 新引入的特性。修复了 ES5 引入的 for...in 的不足

- for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用

### 参考：

* javascript总for of和for in的区别：https://segmentfault.com/q/1010000006658882

* Javascript中的for-of循环：https://github.com/wujunchuan/wujunchuan.github.io/issues/11
