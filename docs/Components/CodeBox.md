---
id: CodeBox
title: 代码框
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# 代码框

## 不带标题

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```js
        console.log('危险操作!')
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`js
        console.log('危险操作!')
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 带标题

在代码块中添加`title`标签

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```js title="这里可以写标题或者文件名"
        console.log('危险操作!')
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`js title="这里可以写标题或者文件名"
        console.log('危险操作!')
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 实时运行且可交互的代码编辑器

在代码块中添加`live`标签

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```jsx live
        function Clock(props) {
          const [date, setDate] = useState(new Date())
          useEffect(() => {
            const timerID = setInterval(() => tick(), 1000)

            return function cleanup() {
              clearInterval(timerID)
            }
          })
          function tick() {
            setDate(new Date())
          }
          return (
            <div>
              <h2>{date.toLocaleTimeString()}</h2>
            </div>
          )
        }
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`jsx live
        function Clock(props) {
          const [date, setDate] = useState(new Date())
          useEffect(() => {
            const timerID = setInterval(() => tick(), 1000)

            return function cleanup() {
              clearInterval(timerID)
            }
          })
          function tick() {
            setDate(new Date())
          }
          return (
            <div>
              <h2>{date.toLocaleTimeString()}</h2>
            </div>
          )
        }
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 行号

在代码块中添加`showLineNumbers`标签

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```js showLineNumbers
        function Clock(props) {
          const [date, setDate] = useState(new Date())
          useEffect(() => {
            const timerID = setInterval(() => tick(), 1000)

            return function cleanup() {
              clearInterval(timerID)
            }
          })
          function tick() {
            setDate(new Date())
          }
          return (
            <div>
              <h2>{date.toLocaleTimeString()}</h2>
            </div>
          )
        }
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`jsx showLineNumbers
        function Clock(props) {
          const [date, setDate] = useState(new Date())
          useEffect(() => {
            const timerID = setInterval(() => tick(), 1000)

            return function cleanup() {
              clearInterval(timerID)
            }
          })
          function tick() {
            setDate(new Date())
          }
          return (
            <div>
              <h2>{date.toLocaleTimeString()}</h2>
            </div>
          )
        }
        \`\`\`
        ```
    </TabItem>
</Tabs>

## 高亮代码

### 在代码块中添加注释

`highlight-next-line`: 高亮下一行

`highlight-start`: 高亮开始

`highlight-end`: 高亮结束

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```js
        function HighlightSomeText(highlight) {
          if (highlight) {
            // highlight-next-line
            return '这行被高亮了！'
          }
          return '这里不会'
        }
        function HighlightMoreText(highlight) {
          // highlight-start
          if (highlight) {
            return '这块被高亮了！'
          }
          // highlight-end
          return '这里不会'
        }
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`js
        function HighlightSomeText(highlight) {
          if (highlight) {
            // highlight-next-line
            return '这行被高亮了！'
          }
          return '这里不会'
        }
        function HighlightMoreText(highlight) {
          // highlight-start
          if (highlight) {
            return '这块被高亮了！'
          }
          // highlight-end
          return '这里不会'
        }
        \`\`\`
        ```
    </TabItem>
</Tabs>

受支持的注释语法

|   样式    |           语法           |
| :-------: | :----------------------: |
|  C 样式   | `/* ... */` and `// ...` |
| JSX 样式  |      `{/* ... */}`       |
| Bash 样式 |         `# ...`          |
| HTML 样式 |      `<!-- ... -->`      |

### 在代码块中添加`{行号}`

<Tabs>
    <TabItem value="Browse" label="浏览">
        ```js {3,8-10}
        function HighlightSomeText(highlight) {
          if (highlight) {
            return '这行被高亮了！'
          }
          return '这里不会'
        }
        function HighlightMoreText(highlight) {
          if (highlight) {
            return '这块被高亮了！'
          }
          return '这里不会'
        }
        ```
    </TabItem>
    <TabItem value="Code" label="代码">
        ```md showLineNumbers
        \`\`\`js
        function HighlightSomeText(highlight) {
          if (highlight) {
            // highlight-next-line
            return '这行被高亮了！'
          }
          return '这里不会'
        }
        function HighlightMoreText(highlight) {
          // highlight-start
          if (highlight) {
            return '这块被高亮了！'
          }
          // highlight-end
          return '这里不会'
        }
        \`\`\`
        ```
    </TabItem>
</Tabs>
