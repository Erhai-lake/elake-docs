---
id: Scope
title: 作用域
---

# 作用域

先来思考一下,下面这两个例子,控制台会输出什么?

```js showLineNumbers
for (let i = 0; i < 3; i++) {
    document.write('Test')
}
console.log(i)
```

```js showLineNumbers
function fun() {
    let Num = 20
}
fun()
console.log(Num)
```

不仅什么都不会输出,反而还会报错(变量未定义)

一般来说,一段代码中所用到的名字并不总是有效和可用的,而限定这个名字的**可用性和代码范围**就是这个名字的**作用域**

**作用域**(scope)规定了变量能够被访问的**范围**,离开了这个**范围**变量便不能被访问

**作用域**的使用提高了程序逻辑的局部性,增强了程序的可靠性,减少了名字冲突

* 全局作用域(全局有效)
  * 作用于所有代码执行的环境(整个script标签内部)或者一个独立的js文件
* 局部作用域(局部有效)
  * 作用于函数内的代码环境,就是局部作用域.因为跟函数有关系,所以也称为函数作用域

根据作用域的不同,变量可以分为:

* 全局变量(函数外部let的变量)
  * 全局变量在**任何区域**都可以访问和修改
* 局部变量(函数内部let变量)
  * 局部变量只能在**当前函数**内部访问和修改

## 例子

### 全局变量

```js showLineNumbers
let Num = 10
console.log(Num) // 正常输出10
function fun() {
    console.log(Num) // 正常输出10
}
fun()
```

### 局部变量

```js showLineNumbers
function fun() {
    let Num = 10
    console.log(Num) // 正常输出10
}
fun()
console.log(Num)  // 报错(变量未定义)
```

:::warning
如果函数内部,变量没有声明,直接赋值,也当**全局变量**看,但是强烈不推荐!

```js
function fun() {
 Num = 10
}
fun()
console.log(Num)  // 正常输出 10
```
:::

## 总结

* 只要是代码,就至少有一个作用域
* 写在函数内部的局部作用域
* 如果函数中还有函数,那么在这个作用域中就又可以诞生一个作用域
* 访问原则: **在能够访问到的情况下先局部,局部没有在找全局**