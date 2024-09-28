# 文档编写规范

::: danger 逼话
不以规矩无以成方圆

Nothing can be accomplished without norms or standards
:::

## 每篇文档有且只能有一个一级标题

### 正例

```md
# 标题1
```

### 反例

```md
# 标题1

# 标题2

# 标题3
```

## 每一个结构之间空一行

### 正例

```md
# 标题1

# 标题2

第1行

第2行

* 第1项
* 第2项
* 第3项
```

### 反例

```md
# 标题1
# 标题2

第1行
第2行

* 第1项

* 第2项

* 第3项
```

## 代码块内的内容需在编辑器中格式化

### 正例

````md
```js
let i = 1;
while (i <= 3) {
    console.log(`这是我循环的第${i}遍`)
    i++
}
```
````

### 反例

````md
```js
let i=1;
while(i<=3){
console.log(`这是我循环的第${i}遍`)
 i++
}
```
````

## 代码块缩进大小为4

### 正例

````md
```js
let i = 1;
while (i <= 3) {
    console.log(`这是我循环的第${i}遍`)
    i++
}
```
````

### 反例

````md
```js
let i = 1
while (i <= 3) {
  console.log(`这是我循环的第${i}遍`)
  i++
}
```
````

## 加粗两边不需要加空格

### 正例

```md
**JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
```

### 反例

```md
**JS** 全称 **JavaScript** ,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
```

## 逗号后面不加空格

### 正例

```md
**JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
```

### 反例

```md
**JS**全称**JavaScript**, 是一门跨平台,面向对象的脚本语言, 它能使网页可交互(例如拥有复杂的动画, 可点击的按钮, 通俗的菜单等)
```

## 所有标点符号使用半角符号

### 正例

```md
**JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
```

### 反例

```md
**JS**全称**JavaScript**，是一门跨平台，面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）
```

## 优先使用文档内置的组件

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md
        :::note
        1 + 1 = 2
        :::
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md
        > 注意: 1 + 1 = 2
        ```
    </TabItem>
</Tabs>

更多组件,请浏览[文档组件](/Docs/ElakeDocs/Components/AlarmBox)

如果没有你想要的,你可以自己写一个,文档的框架是[docusaurus](//docusaurus.io),经过检查后可以加入

## 图片插入格式

```md
[图片SHA1](Assets/图片SHA1.png)
```

SHA1获取方式:cmd输入命令`certutil -hashfile 图片地址 SHA1`,例如`certutil -hashfile 2-1.png SHA1`

### 正例

```md
[4ab7e42e6d6cda0a1cafa04d208a4820c3c70cfc](Assets/4ab7e42e6d6cda0a1cafa04d208a4820c3c70cfc.png)

[baafbc8f716001dc4416df2e56ed951ae714abf0](Assets/baafbc8f716001dc4416df2e56ed951ae714abf0.png)
```

### 反例

```md
[编写规范的图1](assets/编写规范的图1.png)

[编写规范的图2](assets/编写规范的图2.png)
```

## 外网超链接插入格式

```md
[超链接文本](//超链接地址)
```

### 正例

```md
[百度](//www.baidu.com)

[Google](//www.google.com)

[Github](//github.com)
```

### 反例

```md
[百度](https://www.baidu.com)

[Google](https://www.google.com)

[Github](https://github.com)
```
