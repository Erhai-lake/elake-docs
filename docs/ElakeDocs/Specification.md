---
id: Specification
title: 文档编写规范
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 文档编写规范

## 必须的文章元数据

在每篇文章中,必须在头部添加以下元数据:

```md showLineNumbers
---
id: 文章的标识(文章的真实链接,同一目录下唯一,只能使用**小写字母,数字,下划线,中划线**)
title: 文档的标题(显示在侧边栏等地方的标题)
---
```

## 每篇文档需要编写日期

在每篇文档的第一个文章头部,元数据下面添加以下内容:

```md showLineNumbers
> 本文档编写于 xxxx-xx-xx
```

## 每篇文档有且只能有一个一级标题

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        # 标题1
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        # 标题1

        # 标题2

        # 标题3
        ```
    </TabItem>
</Tabs>

## 每一个块之间空一行

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        # 标题1

        # 标题2

        第1行

        第2行

        * 第1项
        * 第2项
        * 第3项
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        # 标题1
        # 标题2

        第1行
        第2行

        * 第1项

        * 第2项

        * 第3项
        ```
    </TabItem>
</Tabs>

## 代码块内的内容需在编辑器中格式化

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        \`\`\`js
        let i = 1;
        while (i <= 3) {
            console.log(`这是我循环的第${i}遍`)
            i++
        }
        \`\`\`
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        \`\`\`js
        let i=1;
        while(i<=3){
            console.log(`这是我循环的第${i}遍`)
            i++
        }
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 代码块缩进大小为4

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        \`\`\`js
        let i = 1;
        while (i <= 3) {
            console.log(`这是我循环的第${i}遍`)
            i++
        }
        \`\`\`
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        \`\`\`js
        let i = 1
        while (i <= 3) {
          console.log(`这是我循环的第${i}遍`)
          i++
        }
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 加粗两边不能加空格

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        **JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        **JS** 全称 **JavaScript** ,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
        ```
    </TabItem>
</Tabs>

## 逗号后面不加空格

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        **JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        **JS**全称**JavaScript**, 是一门跨平台,面向对象的脚本语言, 它能使网页可交互(例如拥有复杂的动画, 可点击的按钮, 通俗的菜单等)
        ```
    </TabItem>
</Tabs>

## 所有标点符号使用半角符号

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        **JS**全称**JavaScript**,是一门跨平台,面向对象的脚本语言,它能使网页可交互(例如拥有复杂的动画,可点击的按钮,通俗的菜单等)
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        **JS**全称**JavaScript**，是一门跨平台，面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）
        ```
    </TabItem>
</Tabs>

## 优先使用文档内置的组件

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        :::note
        1 + 1 = 2
        :::
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        > 注意: 1 + 1 = 2
        ```
    </TabItem>
</Tabs>

更多组件,请浏览[文档组件](/docs/Components)

如果没有你想要的,你可以自己写一个,文档的框架是[docusaurus](//docusaurus.io),经过检查后可以加入

## 代码块全部加上行号显示

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        \`\`\`md showLineNumbers
        \`\`\`
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        \`\`\`md
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 图片插入格式

```md showLineNumbers
[图片SHA1](Assets/图片SHA1.png)
```

SHA1获取方式:cmd输入命令`certutil -hashfile 图片地址 SHA1`,例如`certutil -hashfile 2-1.png SHA1`

<Tabs>
    <TabItem value="Proportional" label="正比">
        ```md showLineNumbers
        [4ab7e42e6d6cda0a1cafa04d208a4820c3c70cfc](Assets/4ab7e42e6d6cda0a1cafa04d208a4820c3c70cfc.png)

        [baafbc8f716001dc4416df2e56ed951ae714abf0](Assets/baafbc8f716001dc4416df2e56ed951ae714abf0.png)
        ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
        ```md showLineNumbers
        [编写规范的图1](assets/编写规范的图1.png)

        [编写规范的图2](assets/编写规范的图2.png)
        ```
    </TabItem>
</Tabs>

## 外网超链接插入格式

```md showLineNumbers
[超链接文本](//超链接地址)
```

<Tabs>
    <TabItem value="Proportional" label="正比">
    ```md showLineNumbers
    [百度](//www.baidu.com)

    [Google](//www.google.com)

    [Github](//github.com)
    ```
    </TabItem>
    <TabItem value="InverselyProportional" label="反比">
    ```md showLineNumbers
    [百度](https://www.baidu.com)

    [Google](https://www.google.com)

    [Github](https://github.com)
    ```
    </TabItem>
</Tabs>
