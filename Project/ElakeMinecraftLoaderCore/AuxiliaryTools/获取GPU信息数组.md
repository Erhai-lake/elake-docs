# 获取GPU的版本号

|  属性  |                 值                  |
| :----: | :---------------------------------: |
| 方法名 |           `GetGpuInfo()`            |
|  描述  | 获取GPU信息数组(品牌,型号,显存大小) |
|  返回  |         GPU信息数组 字符串          |

## 例子

<!-- tabs:start -->

<!-- tab:代码 -->

```C#
private void AuxiliaryTools()
{
    string[] GpuInfos = ElakeAuxiliaryTools.GetGpuInfo();
    foreach (string GpuInfo in GpuInfos)
    {
        Console.WriteLine(GpuInfo);
    }
}
```

<!-- tab:返回 -->

```
NVIDIA GeForce RTX 2060 4GB
Intel(R) UHD Graphics 1GB
```

<!-- tabs:end -->
