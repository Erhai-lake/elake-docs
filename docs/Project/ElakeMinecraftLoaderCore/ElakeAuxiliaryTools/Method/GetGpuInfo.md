---
id: GetGpuInfo
title: 获取GPU的版本号
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取GPU的版本号

|  属性  |                 值                  |
| :----: | :---------------------------------: |
| 方法名 |           `GetGpuInfo()`            |
|  描述  | 获取GPU信息数组(品牌,型号,显存大小) |
|  返回  |         GPU信息数组 字符串          |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private void AuxiliaryTools()
        {
            string[] GpuInfos = ElakeAuxiliaryTools.GetGpuInfo();
            foreach (string GpuInfo in GpuInfos)
            {
                Console.WriteLine(GpuInfo);
            }
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        NVIDIA GeForce RTX 2060 4GB
        Intel(R) UHD Graphics 1GB
        ```
    </TabItem>
</Tabs>
