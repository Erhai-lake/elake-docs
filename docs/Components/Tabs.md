---
id: Tabs
title: 选项卡
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 选项卡

<Tabs>
    <TabItem value="Browse" label="浏览">
        <Tabs>
            <TabItem value="Item1" label="选项一">
                选项一
            </TabItem>
            <TabItem value="Item2" label="选项二">
                选项二
            </TabItem>
            <TabItem value="Item3" label="选项三">
                选项三
            </TabItem>
        </Tabs>
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        import Tabs from '@theme/Tabs'
        import TabItem from '@theme/TabItem'

        <Tabs>
            <TabItem value="Item1" label="选项一">
                选项一
            </TabItem>
            <TabItem value="Item2" label="选项二">
                选项二
            </TabItem>
            <TabItem value="Item3" label="选项三">
                选项三
            </TabItem>
        </Tabs>
        ```
    </TabItem>

</Tabs>
