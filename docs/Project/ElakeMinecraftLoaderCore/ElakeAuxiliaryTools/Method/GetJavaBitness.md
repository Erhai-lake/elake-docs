---
id: GetJavaBitness
title:  获取Java位长
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取Java位长

|      属性       |                值                |
| :-------------: | :------------------------------: |
|     方法名      |        `GetJavaBitness()`        |
|      描述       | 通过输入Java路径来获取Java的位长 |
| 参数 `JavaPath` |         Java路径 字符串          |
|      返回       |      位数 字符串(`32`,`64`)      |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private void AuxiliaryTools()
        {
            Console.WriteLine(ElakeAuxiliaryTools.GetJavaBitness("D:/java/JDK21"));
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        64
        ```
    </TabItem>
</Tabs>
