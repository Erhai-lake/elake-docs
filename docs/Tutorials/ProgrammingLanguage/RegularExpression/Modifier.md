---
id: Modifier
title: 修饰符
---

# 修饰符

用于指定额外的匹配策略

修饰符不写在正则表达式里,修饰符位于表达式之外

`/正则表达式/修饰符`

修饰符可以使用多个.例如`/正则表达式/igm`

常用的修饰符:

| 修饰符 |               含义               |                                            描述                                            |
| :----: | :------------------------------: | :----------------------------------------------------------------------------------------: |
|  `i`   |           不区分大小写           |               将匹配设置为不区分大小写,搜索时不区分大小写: `A`和`a`没有区别                |
|  `g`   |             全局匹配             |                                      查找所有的匹配项                                      |
|  `m`   |             多行匹配             |      使边界字符`^`和`$`匹配每一行的开头和结尾,记住是多行,而不是整个字符串的开头和结尾      |
|  `s`   | 特殊字符圆点`.`中包含换行符 `\n` | 默认情况下的圆点`.`是匹配除换行符 `\n`之外的任何字符,加上`s`修饰符之后,`.`中包含换行符`\n` |
