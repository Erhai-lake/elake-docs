# 获取最新的快照版本

|  属性  |         值         |
| :----: | :----------------: |
| 方法名 | `GetNewSnapshot()` |
|  描述  | 获取最新的快照版本 |
|  返回  |   字符串(版本号)   |

## 例子

```C# [代码示例]
private async void Resources()
{
    string Source = await ElakeResources.AutomaticallySelectSource();
    Console.WriteLine($"更快的源是:{Source}");
    if (!await ElakeResources.InitializeSource())
    {
        Console.WriteLine("源初始化失败");
    }
    Console.WriteLine(ElakeResources.GetNewSnapshot());
}
```

``` [输出]
更快的源是:MoJang
24w36a
```
