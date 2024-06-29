# traits

材料特性定义文件路径`data/ModID/tinkering/materials/tratis/ID.json`

## 键

`defualt`(数组):默认特性,该材料所有可制作的[工具部件](#一些补充)拥有的特性

包含一个或多个特性对象(object):

* `name`([traitID](Gammers.md#traitid)):特性名称,必须与`level`同时存在
* `level`(integer):特性等级,必须与`name`同时存在
* `perStat`(对象):指定特性,该材料指定可制作的部件拥有的特性
* `tconstruct:head`(数组):代表**头部**部件,包含一个或多个特性对象(object)
* `tconstruct:handle`(数组):代表**手柄**部件,包含一个或多个特性对象(object)
* `tconstruct:binding`(数组):代表**绑定结**部件,包含一个或多个特性对象(object)在 1.19.2 版本以下应为`tconstruct:extra`
* `tconstruct:limb`(数组):代表**弓臂**部件包含一个或多个特性对象(object)
* `tconstruct:grip`(数组):代表**弓把**部件,包含一个或多个特性对象(object)
* `tconstruct:bowstring`(数组):代表**弓弦**部件,包含一个或多个特性对象(object)
* `tconstruct:armor`(数组)代表[盔甲部件](#一些补充),包含一个或多个特性对象(object)
