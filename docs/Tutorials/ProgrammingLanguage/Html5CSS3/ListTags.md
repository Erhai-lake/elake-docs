---
id: ListTags
title: 列表标签
---

# 列表标签

作用:布局内容排列整齐的区域

列表分为 3 种**无序列表**,**有序列表**,**定义列表**

## 无序列表

作用:布局排列整齐的**不需要规定顺序**的区域

标签名:`ul`,`li`双标签

```html showLineNumbers live
<html>
    <body>
        <ul>
            <li>表项一</li>
            <li>表项二</li>
            <li>表项三</li>
        </ul>
    </body>
</html>
```

:::warning

-   `ul`标签里面只能嵌套`li`标签
-   `li`标签里面可以嵌套如何内容
    :::

## 有序列表

作用:布局排列整齐的**需要规定顺序**的区域

标签名:`ol`,`li`双标签

```html showLineNumbers live
<html>
    <body>
        <ol>
            <li>表项一</li>
            <li>表项二</li>
            <li>表项三</li>
        </ol>
    </body>
</html>
```

:::warning

-   `ol`标签里面只能嵌套`ol`标签
-   `li`标签里面可以嵌套如何内容

:::

## 定义列表

标签名:`dl`,`dt`,`dd`双标签

```html showLineNumbers live
<html>
    <body>
        <dl>
            <dt>列表标题</dt>
            <dd>表项一</dd>
            <dd>表项二</dd>
            <dd>表项三</dd>
        </dl>
    </body>
</html>
```

:::warning

-   `dl`标签里面只能嵌套`dt`标签和`dd`标签
-   `dt`标签和`dd`标签里面可以嵌套如何内容

:::