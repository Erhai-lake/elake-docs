---
id: GetNewRelease
title: 获取最新的正式版本
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取最新的正式版本

|       属性        |                           值                           |
| :---------------: | :----------------------------------------------------: |
|      方法名       |                   `GetNewRelease()`                    |
|       描述        |                   获取最新的正式版本                   |
| 参数 `SourceJson` | 源Json 字符串(默认使用[`VersionJson`](../Variables/VersionJson)) |
|       返回        |                     字符串(版本号)                     |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private async void Resources()
        {
            string Source = await ElakeResources.AutomaticallySelectSource();
            Console.WriteLine($"更快的源是:{Source}");
            if (!await ElakeResources.InitializeSource())
            {
                Console.WriteLine("源初始化失败");
            }
            // Console.WriteLine(ElakeResources.VersionJson);
            Console.WriteLine(ElakeResources.GetNewSnapshot());
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        更快的源是:MoJang
        1.21.1
        ```
    </TabItem>
</Tabs>
