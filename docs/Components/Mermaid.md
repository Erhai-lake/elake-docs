---
id: Mermaid
title: Mermaid
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Mermaid

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```mermaid
        flowchart TD
            A[Christmas] -->|Get money| B(Go shopping)
            B --> C{Let me think}
            C -->|One| D[Laptop]
            C -->|Two| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
            C --> D((This is the <br  />text<br  /> in the circle))
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`mermaid
        flowchart TD
            A[Christmas] -->|Get money| B(Go shopping)
            B --> C{Let me think}
            C -->|One| D[Laptop]
            C -->|Two| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
        \`\`\`
        ```
    </TabItem>
</Tabs>

在写文档时,需要压缩为一行

```md showLineNumbers
\`\`\`mermaid
flowchart TD; [Christmas] -->|Get money| B(Go shopping); B --> C{Let me think}; C -->|One| D[Laptop]; C -->|Two| E[iPhone]; C -->|Three| F[fa:fa-car Car]
\`\`\`
```

[在线编辑器](https://mermaid.live/edit)
