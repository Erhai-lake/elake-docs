---
id: InitializeSearcher
title: 初始化搜索器
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 初始化搜索器

|      属性       |                                         值                                          |
| :-------------: | :---------------------------------------------------------------------------------: |
|     方法名      |                               `InitializeSearcher()`                                |
|      描述       | 选择[curseforge](//www.curseforge.com/minecraft)[还是modrinth](//modrinth.com/mods) |
| 参数 `Platform` |                    平台 数值(默认使用0,0:curseforge,1:modrinth)                     |
|      返回       |                                         无                                          |

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
