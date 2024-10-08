# 折叠面板

:::tabs
=== 效果

<FoldingPanel></FoldingPanel>

=== 示例

```vue
<FoldingPanel></FoldingPanel>
```
:::

## 参数

* Height 整数型
  * 折叠面板高度
* Title 字符串
  * 鼠标悬浮时的标题

## 插销

### 标题

```vue
<template #Title></template>
```

### 内容
```vue
<template #Content></template>
```

## 例子

更新日志就是个例子()

:::tabs
=== 效果

<FoldingPanel :Height=600 :Title="'洱海\n工作室\n的Logo'">
    <template #Title>
        <span>洱海工作室Logo</span>
    </template>
    <template #Content>
        <img src="//api.elake.top/Logo/" style="margin: 0 auto;">
    </template>
</FoldingPanel>

=== 示例

```md
<FoldingPanel :Height=600 :Title="'洱海\n工作室\n的Logo'">
    <template #Title>
        <span>洱海工作室Logo</span>
    </template>
    <template #Content>
        <img src="//api.elake.top/Logo/" style="margin: 0 auto;">
    </template>
</FoldingPanel>
```
:::
