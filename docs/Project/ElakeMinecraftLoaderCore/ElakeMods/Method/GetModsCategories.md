# 获取模组分类

|  属性  |                                   值                                    |
| :----: | :---------------------------------------------------------------------: |
| 方法名 |                          `GetModsCategories()`                          |
|  描述  |                          获取平台对模组的分类                           |
|  返回  | 模组分类列表 列表([`CategoriesInfoList`](../Return/CategoriesInfoList)) |

## 例子

```C# [代码示例]
private async void Mods()
{
    Console.WriteLine("CF:");
    ElakeMods.InitializeSearcher(0);
    try
    {
        var Versions = await ElakeMods.GetModsCategories();
        if (Versions == null || Versions.Count == 0)
        {
            Console.WriteLine("没有类别");
        }
        else
        {
            foreach (var Info in Versions)
            {
                Console.WriteLine($"类别ID: {Info.ID}");
                Console.WriteLine($"类别名称: {Info.Name}");
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
        var Versions = await ElakeMods.GetModsCategories();
        if (Versions == null || Versions.Count == 0)
        {
            Console.WriteLine("没有类别");
        }
        else
        {
            foreach (var Info in Versions)
            {
                Console.WriteLine($"类别名称: {Info.Name}");
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
类别ID: 435
类别名称: Server Utility

类别ID: 434
类别名称: Armor, Tools, and Weapons

类别ID: 421
类别名称: API and Library

类别ID: 422
类别名称: Adventure and RPG

类别ID: 4671
类别名称: Twitch Integration

MR:
类别名称: adventure

类别名称: cursed

类别名称: decoration

类别名称: economy

类别名称: equipment
```
