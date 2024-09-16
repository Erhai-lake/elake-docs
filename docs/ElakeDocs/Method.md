---
id: Method
title: 编写方法
---

# 编写方法

## 新建一个文档

确认你需要创建文档的类型,目前有两种类型:`Project`,`Tutorials`

`Project`类型用于记录项目相关的知识,如`ElakeApi`,`ElakeMinecraftLoaderCore`等

`Tutorials`类型用于记录教程相关的知识,如`Java`,`JavaScript`等

其中`Tutorials`类型下,还有些分类,代码语言教程,需要放在`ProgrammingLanguage`文档中,如果不存在,可以创建一个新的(但是最好还是先联系我)

确认好类型后,例如我要创建Python的教程,那么就在`/docs/Tutorials/ProgrammingLanguage`目录下新建一个文件夹,如`Python`

## 创建一篇文章

在`Python`文件夹下新建第一篇文章,如果是第一篇,请创建`Python.md`

然后在头部添加元数据和一级标题

```md showLineNumbers
---
id: 文章的标识(文章的真实链接,同一目录下唯一,只能使用**小写字母,数字,下划线,中划线**)
title: 文档的标题(显示在侧边栏等地方的标题)
---

# 标题(最好与title一致)
```

例如:

```md title="/docs/Tutorials/ProgrammingLanguage/Python/Python.md" showLineNumbers
---
id: Python
title: Python
---

# Python
```

## 新建侧边栏目录

### 文档目录

在文档目录下新建`Directory.json`文件,并写入以下内容:

```json title="/docs/Tutorials/ProgrammingLanguage/Python/Directory.json" showLineNumbers
[
    {
        "type": "category",
        "label": "Python",
        "items": [
            "Tutorials/ProgrammingLanguage/Python/Python"
        ]
    }
]
```

其中`Tutorials/ProgrammingLanguage/Python/Python`是文档的相对路径,后缀`.md`需省略,如果后续有新的文档,可以继续添加到`items`中,例如:

```json title="/docs/Tutorials/ProgrammingLanguage/Python/Directory.json" showLineNumbers
[
    {
        "type": "category",
        "label": "Java",
        "items": [
            "Tutorials/ProgrammingLanguage/Python/Python",
            "Tutorials/ProgrammingLanguage/Python/Environment"
        ]
    }
]
```

### 文档入口目录

为了进入这个文档,还需要修改`/docs/Tutorials/ProgrammingLanguage/Directory.json`

```json title="/docs/Tutorials/ProgrammingLanguage/Directory.json" showLineNumbers
[
    {
        "type": "category",
        "label": "编程语言",
        "items": [
            "Tutorials/ProgrammingLanguage/ProgrammingLanguage",
            "Tutorials/ProgrammingLanguage/Python/Python"
        ]
    }
]
```

这一级的作用是可以在`ProgrammingLanguage`的侧边栏,显示`Python`

### 侧边栏总目录

`/Directory.js`是侧边栏的总目录

我们需要在`Directory.js`中添加新的目录

```js title="/Directory.js" showLineNumbers
const Directory = {
    //其他目录

    // Python
    Python: require('./docs/Tutorials/ProgrammingLanguage/Python/Directory.json'),
}

export default Directory
```

这里面为了可读性,请写注释!

## 其他操作

请联系我

其实以上的所有操作,都可以直接联系我帮你完成

一般情况下,各位编辑者,只需要提交文章就行了,文档和目录我们会负责配置好的,但是文档内的目录还是需要各位手动配置的
