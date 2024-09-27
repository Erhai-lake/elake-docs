# 获取游戏版本

|  属性  |                                 值                                  |
| :----: | :-----------------------------------------------------------------: |
| 方法名 |                           `GetVersions()`                           |
|  描述  |                      获取平台对模组划分的版本                       |
|  返回  | 游戏版本列表 列表([`VersionsInfoList`](../Return/VersionsInfoList)) |

## 例子

```C# [代码示例]
private async void Mods()
{
    Console.WriteLine("CF:");
    ElakeMods.InitializeSearcher(0);
    try
    {
        var Versions = await ElakeMods.GetVersions();
        if (Versions == null || Versions.Count == 0)
        {
            Console.WriteLine("没有版本");
        }
        else
        {
            foreach (var Info in Versions)
            {
                Console.WriteLine($"版本名称: {Info.Name}");
                Console.WriteLine();
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"发生错误: {ex.Message}");
    }

    Console.WriteLine("MR:");
    ElakeMods.InitializeSearcher(1);
    try
    {
        var Versions = await ElakeMods.GetVersions();
        if (Versions == null || Versions.Count == 0)
        {
            Console.WriteLine("没有版本");
        }
        else
        {
            foreach (var Info in Versions)
            {
                Console.WriteLine($"版本名称: {Info.Name}");
                Console.WriteLine();
            }
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"发生错误: {ex.Message}");
    }
}
```

``` [输出]
CF:
版本名称: 1.21.1

版本名称: 1.21

版本名称: 1.20.6

版本名称: 1.20.5

版本名称: 1.20.4

MR:
版本名称: 24w38a

版本名称: 24w37a

版本名称: 24w36a

版本名称: 24w35a

版本名称: 24w34a
```
