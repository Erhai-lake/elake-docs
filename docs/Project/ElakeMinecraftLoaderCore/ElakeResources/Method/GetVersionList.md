---
id: GetVersionList
title: 获取版本列表
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取版本列表

|       属性        |                           值                           |
| :---------------: | :----------------------------------------------------: |
|      方法名       |                   `GetVersionList()`                   |
|       描述        |                      获取版本列表                      |
| 参数 `SourceJson` | 源Json 字符串(默认使用[`VersionJson`](../Variables/VersionJson)) |
|  参数 `Release`   |          是否获取正式版 布尔值(默认使用true)           |
|  参数 `Snapshot`  |          是否获取快照版 布尔值(默认使用true)           |
|    参数 `Old`     |          是否获取远古版 布尔值(默认使用true)           |
|       返回        | 版本列表 列表([`VersionInfoList`](../Return/VersionInfoList)) |

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
            var Versions = ElakeResources.GetVersionList(null, false, false, true);
            if (Versions.Count == 0)
            {
                Console.WriteLine("没有检测到版本");
            }
            else
            {
                foreach (var Info in Versions)
                {
                    Console.WriteLine($"版本名称: {Info.Name}");
                    Console.WriteLine($"版本类型: {Info.Type}");
                    Console.WriteLine($"版本下载地址: {Info.URL}");
                    Console.WriteLine($"版本发布时间: {Info.Time}");
                    Console.WriteLine($"版本文件SHA1值: {Info.SHA1}");
                    Console.WriteLine();
                }
            }
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        版本名称:rd-132328
        版本类型:old_alpha
        版本下载地址: https://piston-meta.mojang.com/v1/packages/4ec49ff663f96e78a5cf0d9538adb9d1358fc485/rd-132328.json
        版本发布时间:2009-05-13T21:28:00+00:00
        版本文件SHA1值:4ec49ff663f96e78a5cf0d9538adb9d1358fc485

        版本名称:rd-132211
        版本类型:oldalpha
        版本下载地址: https://piston-meta.mojang.com/v1/packages/d090f5d3766a28425316473d9ab6c37234d48b02/rd-132211.json
        版本发布时间:2009-05-13T20:11:00+00:00
        版本文件SHA1值:d090f5d3766a28425316473d9ab6c37234d48b02
        ```
    </TabItem>
</Tabs>
