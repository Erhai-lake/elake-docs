---
id: GetJavaVersion
title: 获取Java的版本号
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取Java的版本号

|      属性       |                值                |
| :-------------: | :------------------------------: |
|     方法名      |        `GetJavaVersion()`        |
|      描述       | 通过输入Java路径来获取Java版本号 |
| 参数 `JavaPath` |         Java路径 字符串          |
|      返回       |          版本号 字符串           |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private void AuxiliaryTools()
        {
            Console.WriteLine(ElakeAuxiliaryTools.GetJavaVersion("D:/java/JDK21"));
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        21.0.4
        ```
    </TabItem>
</Tabs>
