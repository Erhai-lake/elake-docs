---
id: AutomaticallySelectSource
title: 自动选择延迟更低的源
---

# 自动选择延迟更低的源

|  属性  |              值               |
| :----: | :---------------------------: |
| 方法名 | `AutomaticallySelectSource()` |
|  描述  | 自动选择`MoJang`或`BMCLAPI`源 |
|  返回  |  字符串(`MoJang`,`BMCLAPI`)   |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private async void Resources()
        {
            string Source = await ElakeResources.AutomaticallySelectSource();
            Console.WriteLine($"更快的源是:{Source}");
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        更快的源是:MoJang
        ```
    </TabItem>
</Tabs>
