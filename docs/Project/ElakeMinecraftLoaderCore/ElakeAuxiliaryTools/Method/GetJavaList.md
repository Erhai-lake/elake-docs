---
id: GetJavaList
title: 获取Java的列表
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取Java位长

|  属性  |                              值                              |
| :----: | :----------------------------------------------------------: |
| 方法名 |                       `GetJavaList()`                        |
|  描述  | 获取Java列表(版本号,位数,路径),使用where指令查找,耗时较长,只返回有效的Java |
|  返回  |       Java列表 列表([`JavaInfoList`](../Return/JavaInfoList))       |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private async void AuxiliaryTools()
        {
            var Java = await ElakeAuxiliaryTools.GetJavaList();
            if (Java.Count == 0)
            {
                Console.WriteLine("没有检测到Java");
            }
            else
            {
                foreach (var Info in Java)
                {
                    Console.WriteLine($"版本号: {Info.Version}");
                    Console.WriteLine($"位长: {Info.Bitness}");
                    Console.WriteLine($"路径: {Info.Path}");
                    Console.WriteLine();
                }
            }
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        版本号: 21.0.4
        位长: 64
        路径: D:\Java\JDK21

        版本号: 1.8.0-202
        位长: 64
        路径: DD:\Java\JDK8

        版本号: 1.8.0202
        位长: 64
        路径: D:\Java\JDk8\jre

        版本号: 1.8.0202
        位长: 64
        路径: D:\Java\Jre1.8.0202
        ```
    </TabItem>
</Tabs>