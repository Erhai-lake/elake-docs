---
id: GetCpuInfo
title: 获取CPU信息数组
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取CPU信息数组

|  属性  |               值                |
| :----: | :-----------------------------: |
| 方法名 |         `GetCpuInfo()`          |
|  描述  | 获取CPU信息数组(品牌,型号,主频) |
|  返回  |       CPU信息数组 字符串        |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private void AuxiliaryTools()
        {
            string[] CpuInfos = ElakeAuxiliaryTools.GetCpuInfo();
            foreach (string CpuInfo in CpuInfos)
            {
                Console.WriteLine(CpuInfo);
            }
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        GenuineIntel Intel(R)Core(TM)i7-10875H CPU @ 2.30GHz
        ```
    </TabItem>
</Tabs>
