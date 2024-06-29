# CustomMaterial

> 什么是materials?

参考:[材料:工具材料](https://www.mcmod.cn/item/list/3725-1-1016623.html)下文称为"材料"或"工具材料"

> 什么是对象数组键值对?

参考:[JSON 语法](https://www.runoob.com/json/json-syntax.html)

## 开始之前

Ciallo ～(∠·ω< )⌒☆ 这里是**小狼娘fufu**~,你也可以叫我**fufu**

> 本篇使用的范例材料为`tconstruct:clay`

+ 关联的文件 +

	1. [定义(definition)](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/definition/clay.json)
	2. [部件(stats)](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/stats/clay.json)
	3. [特性(traits)](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/traits/clay.json)
	4. [配方-黏土球合成部件](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/clay_ball.json)
	5. [配方-黏土块合成部件](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/clay.json)
	6. [配方-黏土材料部件融化为融化黏土](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/melting.json)
	7. [语言文件(lang)](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/assets/lang/lang/zh_cn.json)
	8. [材质生成文件](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/assets/tconstruct/tinkering/materials/clay.json)

## 正式开始

确认你的`模组名称`和`材料名称`,下文将分别使用`ModID`和`ID`来代替!将注册一个名为`ModID:ID`的材料

> 在 `客户端/data/ModID/tinkering/materials/`下的`definition/`&`stats/`&`traits/`中各新建一个`ID.json`文件
>
> 在 `客户端/assets/ModID/tinkering/materials/`中新建一个与上文`ID.json`文件

确保这些新建的文件名为你所需的`材料名称`且**同名**之后,接着开始下一步

## 创建材料定义-**definition**

> 打开`客户端/data/.../definition/ID.json`参考[定义(definition)](definition.md)创建一个材料定义文件

[示例 >>>](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/definition/clay.json)

```json
{
  "craftable": true,
  "tier": 1,
  "sortOrder": 9,
  "hidden": false
}
```

## 创建材料部件-**stats**

> 打开`客户端/data/.../stats/ID.json`参考[部件(stats)](stats.md),创建一个材料部件文件

[示例 >>>](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/stats/clay.json)

```json
{
  "stats": {
    "tconstruct:binding": {},
    "tconstruct:shield_core": {}
  }
}
```

## 创建材料特性-**traits**

> 打开`客户端/data/.../traits/ID.json`参考[特性(traits)](traits.md),创建一个材料特性文件

[示例 >>>](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/data/tconstruct/tinkering/materials/traits/clay.json)

```json
{
  "default": [
    {
      "level": 1,
      "name": "tconstruct:hydraulic"
    }
  ]
}
```

## 承上启下

到此为止,我们所自定义的材料已经被成功的创建了出来

**加载数据包并重启游戏**,如果编写正确且材料未隐藏,将会发现你所自定义的材料已经出现在了对应的匠魂宝典之中

+ 本篇使用的范例材料"tconstruct:clay"展示(单击展开) +

    `defintion/clay.json`定义的材料等级和目录位置
    
    ![3-1](assets/3-1.png)
  
    ![3-2](assets/3-2.png)

    ![3-3](assets/3-3.png)

但此时它的材质和名称都为最原始的状态

> 此处黏土的材质和语言文件已经完善,原因是匠魂本身就有定义了黏土材料,只是未为其添加任何部件
> 如果是自定义的新材料,语言显示将是本地化键,材质显示将是灰度图

+ 例(单击展开) +

    ![3-4](assets/3-4.png)

因此,我们仍将进行下去,为其定义配方,语言文件和材质

## 创建材料配方

> 打开`客户端/data/.../recipes/`目录写入材料配方文件

详情查看 [配方(Recipes)](CustomRecipes.md)

## 创建材料语言文件

> 打开`客户端/assets/.../lang/zh_cn.json`写入以下内容为你的材料定义语言文件

### 本地化键

* `material.ModID.ID` (String):材料名称
* `material.ModID.ID.flavor`(String):材料在自身等级的匠魂宝典中的描述,一般比较粗略
* `material.ModID.ID.encyclopedia` (String):材料在[工匠大百科](https://www.mcmod.cn/item/637075.html)中的描述,一般比较详细

[示例 >>>](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/assets/lang/lang/zh_cn.json)

```json
{
  "material.tconstruct.clay": "粘土",
  "material.tconstruct.clay.flavor": "在水中更有力",
  "material.tconstruct.clay.encyclopedia": "下雨时+4挖掘速度, 在水中+8挖掘速度"
}
```

## 创建材料材质

> 打开`客户端/assets/.../materials/ID.json`参考[材质(assets)](assets.md),创建一个材料材质文件

[示例 >>>](https://github.com/LitterWolf-fufu/Tconstruct-3-Custom-Tutorials/tree/main/Packs/assets/tconstruct/tinkering/materials/clay.json)

```json
{
  "color": "FFA1A7B1",
  "generator": {
    "ignoreMaterialStats": false,
    "supportedStats": ["tconstruct:binding", "tconstruct:shield_core"],
    "transformer": {
      "type": "tconstruct:recolor_sprite",
      "color_mapping": {
        "type": "tconstruct:grey_to_color",
        "palette": [
          {
            "color": "FF000000",
            "grey": 0
          },
          {
            "color": "FF55627F",
            "grey": 63
          },
          {
            "color": "FF5E6C8D",
            "grey": 102
          },
          {
            "color": "FF757D90",
            "grey": 140
          },
          {
            "color": "FF9499A4",
            "grey": 178
          },
          {
            "color": "FFA1A7B1",
            "grey": 216
          },
          {
            "color": "FFAFB9D6",
            "grey": 255
          }
        ]
      }
    }
  },
  "luminosity": 0
}
```
