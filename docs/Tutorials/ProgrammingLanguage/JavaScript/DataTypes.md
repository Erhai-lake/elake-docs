---
id: DataTypes
title: 数据类型
---

# 数据类型

数据类型,简单来说就是给数据分类

,那么为什么要给数据分类呢?

* 更加充分和高效的利用内存
* 也更加方便程序员使用数据

JS的数据类型分为两大类

* 基本数据类型
  * number 数值型
  * string 字符串型
  * boolean 布尔型
  * undefined 未定义
  * null 空
* 引用数据类型
  * object 对象

## number 数值型

整数,小数,正数,负数统一被称为数值型

```js showLineNumbers
let Test1 = 1145 // 正数
let Test2 = 14.19 // 小数
```

### 算术运算符

数值可以有很多操作.例如加减乘除等,所以经常和算术运算符一起

数学运算符也叫做**算术运算符**

* `+`:求和
* `-`:求差
* `*`:求积
* `/`:求商
* `%`:求模(取余)

算术运算符的优先级

同时使用多个算术运算符时,优先级越高的会先执行,**优先级相同的,以从左往右执行**

1. `()`
2. `*`, `/`, `%`
3. `+`, `-`

和我们的数学运算是一样的,先乘除后加减,有括号先算括号里面的

```js showLineNumbers
console.log(1 + 2 * 3) // 7
console.log(10 - 8 / 2) // 6
console.log(2 % 5 + 4 * 2) // 10
```

## string 字符串型

通过单引号`''`,双引号`""`,反引号`(就是这个符号,这里只打一半,大全会转义成代码行,谅解一下谢谢)包裹的数据都叫字符串,单引号和双引号没有本质上的区别,但是推荐优先使用单引号

```js showLineNumbers
let Test1 = '单引号'
let Test2 = "双引号"
let Test3 = `反引号`
let Test1 = '145141919810' // 虽然看上去是数值,但是使用单引号包起来了就是字符串
let Test5 = '' // 空字符串
let Test6 = '单引号嵌套"双引号"'
let Test7 = "双引号嵌套'单引号'"
let Test8 = '使用转义符输出\'单引号\''
```

无论是那种引号,都必须成对使用

单引号和双引号可以互相嵌套,但是不能嵌套自己

必要时,可以使用转义符`\`进行转义,输出单引号或者双引号等

### 字符串拼接

运算符 `+` 可以实现字符串的拼接

```js showLineNumbers
let Name = '张三'
let Age = 18
console.log('我叫' + Name + ',人家刚满' + Age + '岁~')// 我叫张三,人家刚满18岁~
```

#### 模板字符串

用于更方便拼接字符串与变量,在没有使用它之前拼接字符串与变量十分麻烦,使用他后:

```js showLineNumbers
console.log(`我叫${Name},人家刚满${Age}岁~`)// 我叫张三,人家刚满18岁~
```

使用反引号,然后在字符串内使用`${}`包住变量即可

## boolean 布尔型

表示肯定或否定时,在计算机中对应的是布尔型数据

它有两个固定的值,`true`和`false`,表示肯定的数据用`true`真,表示否定的数据用false假

```js showLineNumbers
// JS难么
let Difficulty = false
console.log(Difficulty)
```

## undefined 未定义

未定义是比较特殊的类型,只有一个值`undefined`

为什么会出现未定义类型

只声明了变量,不赋值的情况下,变量的默认值为`undefined`,一般不会直接为某个变量赋值为`undefined`

使用场景:

我们开发中经常声明一个变量,等待传递过来的数据

我们不知道这个数据是否传递过来,此时就可以检测这个变量是不是`undefined`来判断用户是否有数据传递过来

## null 空

JS中的`null`仅仅是一个代表**无**,**空**或**未知**的特殊

```js showLineNumbers
let Obj = null
console.log(Obj)
```

`null`和`undefined`的区别

* `undefined`表示没有赋值
* `null`表示赋值了,但是内容为空

官方解释:把`null`作为尚未创建的对象

白话:将来有个变量里面存放的是一个对象,但是对象还没创建好.可以先给个`null`

## 检测数据类型

通过`typeof`关键字来检测数据类型,它支持两种语法形式

1. 作为运算符:typeof 变量名 (最常见的写法)
2. 函数形式:typeof (变量名)

换言之有没有括号都是一样的,所以直接使用**运算符**的写法

```js showLineNumbers
let Test1 = 1145
let Test2 = 'aaa'
let Test3 = true
let Test4
let Test5 = null

console.log(typeof Test1) // number
console.log(typeof Test2) // string
console.log(typeof Test3) // boolean
console.log(typeof Test4) // undefined
console.log(typeof Test5) // object
```

## 类型转换

为什么要类型转换

举个例子

```js showLineNumbers
// 这里有两个存放数值的字符串变量
let Test1 = '114514'
let Test2 = '1919810'

// 如果你想将他们相加
console.log(Test1 + Test2)
// 由于不是数值型而是字符串类型,最终输出的结果为:'1145141919810',就不是简单的加分运算了
```

使用表单,或者输入框获取的数据默认都是字符串类型的,此时是不能直接进行运算的

也就是说,类型转换就是将一种类型,转为另一种类型

### 隐式转换

某些运算符被执行时,系统内部自动将数据类型进行转换,这种转换称为隐式转换

规则:

* `+`号两边只要有一个字符串,都会把另一个转为字符串
* **除了`+`以外**的算术运算符,例如`-`,`*`等,都会把数据转成数值类型

缺点:转换类型不明确,考经验才能总结

```js showLineNumbers
console.log(11 +11) // 22
console.log('11' + '11') // 1111
console.log(11 - 11) // 0
console.log('11' -11) // 0
console.log(1 * 1) // 1
console.log('1' * 1) // 1
console.log(typeof '123') // string
console.log(typeof + '123') // number
console.log(+ '11' + 11) // 22
```

### 显式转换

编写程序时,过度依赖系统内部的隐式转换是不严谨的,因为隐式转换规律并不清晰,大多是靠经验总结的规律

为了避免隐式转换带来的问题,通常根逻辑需要对数据进行显示转换

也就是又程序员告诉系统该转换为那种类型

#### 转换为数值型

##### Number ()

这个函数可以将类型转换为数值型

如果传入了非数字,转换失败时会返回NaN(Not a Number) 意为不是一个数字

NaN也是number类型的数据,代表非数字

```js showLineNumbers
console.log(Number('123')) // 123
```

##### parseint ()

这个函数只会保留整数

```js showLineNumbers
console.log(parseint('114.514')) // 114
```

##### parseFloat ()

这个函数可以保留小数

```js showLineNumbers
console.log(parseFloat('114.514')) // 114.514
```