---
id: GetRAMInfo
title: 获取RAM的版本号
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 获取RAM的版本号

|  属性  |                  值                  |
| :----: | :----------------------------------: |
| 方法名 |            `GetRAMInfo()`            |
|  描述  | 获取RAM信息数组(品牌,型号,容量,速度) |
|  返回  |          RAM信息数组 字符串          |

## 例子

<Tabs>
    <TabItem value="Code" label="代码">
        ```C# showLineNumbers
        private void AuxiliaryTools()
        {
            string[] RAMInfos = ElakeAuxiliaryTools.GetRAMInfo();
            foreach (string RAMInfo in RAMInfos)
            {
                Console.WriteLine(RAMInfo);
            }
        }
        ```
    </TabItem>
    <TabItem value="Return" label="返回">
        ``` showLineNumbers
        Crucial CT16G4SFRA32A.C8FF 16GB 3200MHz
        ```
    </TabItem>
</Tabs>
