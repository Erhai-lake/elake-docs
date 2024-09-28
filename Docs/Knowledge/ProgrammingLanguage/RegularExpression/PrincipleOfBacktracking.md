# 回溯法原理

学习正则表达式,是需要懂点儿匹配原理的

而研究匹配原理时,有两个字出现的频率比较高:**回溯**

假设我们的正则是`/ab{1,3}c/`,其可视化形式是

![08c0485f3168442650ae37a106d3346b4be02cff](Assets/08c0485f3168442650ae37a106d3346b4be02cff.png)

## 没有回溯的匹配

而当目标字符串是`abbbc`时,就没有所谓的**回溯**.其匹配过程如下:

| 步骤  |                                               正则                                               |                                               文本                                               |
| :---: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|   1   | ![82f1865377798741ee8e8805c59cb9576e65954e](Assets/82f1865377798741ee8e8805c59cb9576e65954e.png) | ![d1a417e210f391b557b95a4fb2b4f983d50c8054](Assets/d1a417e210f391b557b95a4fb2b4f983d50c8054.png) |
|   2   | ![4c14b82cf12272f8e27743a3934fcd9c5f107650](Assets/4c14b82cf12272f8e27743a3934fcd9c5f107650.png) | ![4dcfc861afd2eff76d26f97351e35c76c927ad1e](Assets/4dcfc861afd2eff76d26f97351e35c76c927ad1e.png) |
|   3   | ![330825db09d623f59112ab26a3e31543fd73074a](Assets/330825db09d623f59112ab26a3e31543fd73074a.png) | ![6b625809f8ef3deb1187aa9f6de4b4c4a7220ede](Assets/6b625809f8ef3deb1187aa9f6de4b4c4a7220ede.png) |
|   4   | ![bbdb33d93a057da294cd5b8752d326ce0f08e48e](Assets/bbdb33d93a057da294cd5b8752d326ce0f08e48e.png) | ![51e8a34a76c3c0c9037dc571b7b3019446554a73](Assets/51e8a34a76c3c0c9037dc571b7b3019446554a73.png) |
|   5   | ![89faabae19a9de794eeba0cecb2c67b9b2f9bf4b](Assets/89faabae19a9de794eeba0cecb2c67b9b2f9bf4b.png) | ![38c44e3f207cea6846fbe960b261b665e8686d2d](Assets/38c44e3f207cea6846fbe960b261b665e8686d2d.png) |
|   6   | ![f73806243d02f6ea367519e508b6365d1262cad8](Assets/f73806243d02f6ea367519e508b6365d1262cad8.png) | ![851260e55531d61eafbea6d92320a0159694c7a6](Assets/851260e55531d61eafbea6d92320a0159694c7a6.png) |

其中子表达式`b{1,3}`表示`b`字符连续出现1到3次

## 有回溯的匹配

如果目标字符串是`abbc`中间就有**回溯**

| 步骤  |                                               正则                                               |                                               文本                                               |
| :---: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|   1   | ![0f0cb5dff80f7d924579983654e7896301494606](Assets/0f0cb5dff80f7d924579983654e7896301494606.png) | ![1243f3508635d358fe1b7c2f174cab42b3475571](Assets/1243f3508635d358fe1b7c2f174cab42b3475571.png) |
|   2   | ![a867957350ea82bb895a01fb00d92506e1e15a0e](Assets/a867957350ea82bb895a01fb00d92506e1e15a0e.png) | ![5ebe76407fa5a92bae50a593eb6859fed4c37e45](Assets/5ebe76407fa5a92bae50a593eb6859fed4c37e45.png) |
|   3   | ![521752ac8b120a6ac100acf854271e1d532fe07e](Assets/521752ac8b120a6ac100acf854271e1d532fe07e.png) | ![4bed40bfe8cb43edfaea4dc9661123c28dab7f62](Assets/4bed40bfe8cb43edfaea4dc9661123c28dab7f62.png) |
|   4   | ![ea3d9c3dcb32a399c1b98df10e4e0b8e4e983226](Assets/ea3d9c3dcb32a399c1b98df10e4e0b8e4e983226.png) | ![4c985724247c053fc3de8ff22f198625f22125fe](Assets/4c985724247c053fc3de8ff22f198625f22125fe.png) |
|   5   | ![4c0241c4cbee1027cf79a3523c5b61b649fbc049](Assets/4c0241c4cbee1027cf79a3523c5b61b649fbc049.png) | ![ccf159593101b2a8393d77ebe9852cf5c37bd1cb](Assets/ccf159593101b2a8393d77ebe9852cf5c37bd1cb.png) |
|   6   | ![9742719e7f1a0ebba4a2924975cf388f4f7f8f53](Assets/9742719e7f1a0ebba4a2924975cf388f4f7f8f53.png) | ![a51461eedc41f293f40d095381b87ca4196d8573](Assets/a51461eedc41f293f40d095381b87ca4196d8573.png) |
|   7   | ![3a65bfb335c0b168668b0f4e13aa5d3715378ca1](Assets/3a65bfb335c0b168668b0f4e13aa5d3715378ca1.png) | ![b8a60b99a12397d01a2469980251c940019e442b](Assets/b8a60b99a12397d01a2469980251c940019e442b.png) |

图中第5步有红颜色,表示匹配不成功.此时`b{1,3}`已经匹配到了2个字符`b`,准备尝试第三个时,结果发现接下来的字符是`c`.那么就认为`b{1,3}`就已经匹配完毕.然后状态又回到之前的状态(即第6步,与第4步一样),最后再用子表达式`c`,去匹配字符`c`.当然,此时整个表达式匹配成功了

图中的第6步,就是**回溯**

## 常见的回溯形式

正则表达式匹配字符串的这种方式,有个学名,叫回溯法

回溯法也称试探法,它的基本思想是:从问题的某一种状态(初始状态)出发,搜索从这种状态出发所能达到的所有**状态**,当一条路走到尽头的时候(不能再前进),再后退一步或若干步,从另一种可能**状态**出发,继续搜索,直到所有的**路径**(状态)都试探过

这种不断**前进**,不断**回溯**寻找解的方法,就称作**回溯法**

本质上就是深度优先搜索算法.**其中退到之前的某一步这一过程,我们称为“回溯”.**从上面的描述过程中,可以看出,路走不通时,就会发生**回溯**.即,**尝试匹配失败时,接下来的一步通常就是回溯**

道理懂了,那什么地方会产生呢?

### 贪婪量词

之前的例子都是贪婪量词相关的.比如`b{1,3}`,因为其是贪婪的,尝试可能的顺序是从多往少的方向去尝试.首先会尝试`bbb`,然后再看整个正则是否能匹配.不能匹配时,吐出一个`b`,即在`bb`的基础上,再继续尝试.如果还不行,再吐出一个,再试.如果还不行呢?只能说明匹配失败了

虽然局部匹配是贪婪的,但也要满足整体能正确匹配.否则,皮之不存,毛将焉附?

此时我们不禁会问,如果当多个贪婪量词挨着存在,并相互有冲突时,此时会是怎样?

答案是,先下手为强!因为深度优先搜索

![9d27da851472275ac99a924463b0278625c86549](Assets/9d27da851472275ac99a924463b0278625c86549.png)

其中,前面的`\d{1,3}`匹配的是`123`后面的`\d{1,3}`匹配的是`45`

### 惰性量词

惰性量词就是在贪婪量词后面加个问号.表示尽可能少的匹配,比如:

![721726745c037f933428a1828d65204013501f89](Assets/721726745c037f933428a1828d65204013501f89.png)

其中`\d{1,3}?`只匹配到一个字符`1`,而后面的`\d{1,3}`匹配了`234`

虽然惰性量词不贪,但也会有回溯的现象.比如正则是:

![02df41964e59f8f0301e2a71f489b04ebe1917b7](Assets/02df41964e59f8f0301e2a71f489b04ebe1917b7.png)

目标字符串是`12345`,匹配过程是:

| 步骤  |                                               正则                                               |                                               文本                                               |
| :---: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|   1   | ![76f02a9aa5fce837adb33e32a0db1aea2ec6eb5f](Assets/76f02a9aa5fce837adb33e32a0db1aea2ec6eb5f.png) | ![e87954f62c9366aa1380188947ac619e5a78a61f](Assets/bbcf235cf51e7b6c31dac1f4507fe268f11ee144.png) |
|   2   | ![47fce99ab3122a3320a66116c28dc5a4829c2ca1](Assets/47fce99ab3122a3320a66116c28dc5a4829c2ca1.png) | ![83531b70cae629e3ce568b071bee11516a219eae](Assets/83531b70cae629e3ce568b071bee11516a219eae.png) |
|   3   | ![e87954f62c9366aa1380188947ac619e5a78a61f](Assets/e87954f62c9366aa1380188947ac619e5a78a61f.png) | ![c6c826ce7cb7261e1fce5efda1a006c9cf038ced](Assets/c6c826ce7cb7261e1fce5efda1a006c9cf038ced.png) |
|   4   | ![51765e2520dfe5a5a975f5f05f34805f9b785ecd](Assets/51765e2520dfe5a5a975f5f05f34805f9b785ecd.png) | ![50ab1e3bb60ba1b49b177902aee024ce09b89f19](Assets/50ab1e3bb60ba1b49b177902aee024ce09b89f19.png) |
|   5   | ![3b7d3cfe9fe579d54ae5a2545e71a52d98c5a0ff](Assets/3b7d3cfe9fe579d54ae5a2545e71a52d98c5a0ff.png) | ![3c0eaf162b11a8b0d70cb7926879e16e3f101998](Assets/3c0eaf162b11a8b0d70cb7926879e16e3f101998.png) |
|   6   | ![0be8d6035d60fdf8770c38728b14e4fa806b9b92](Assets/0be8d6035d60fdf8770c38728b14e4fa806b9b92.png) | ![124701f7c154d22f535406c1baf721a000c048a2](Assets/124701f7c154d22f535406c1baf721a000c048a2.png) |
|   7   | ![22e0227e4fe9351cf8d9191f47b1a1651d22a07e](Assets/22e0227e4fe9351cf8d9191f47b1a1651d22a07e.png) | ![87075e86b72f8c27c8e871c91baf0b60150f84d6](Assets/87075e86b72f8c27c8e871c91baf0b60150f84d6.png) |
|   8   | ![c67b062022ca60747592d8092beb9fefeecf58eb](Assets/c67b062022ca60747592d8092beb9fefeecf58eb.png) | ![c669ef87794974405dfbfd64bf198b509344d2a4](Assets/c669ef87794974405dfbfd64bf198b509344d2a4.png) |
|   9   | ![ae33abb45cb82fb4e7945810c53991721a55df06](Assets/ae33abb45cb82fb4e7945810c53991721a55df06.png) | ![42d1f10dfab7d7ba0f2461ea22c0bfaf88fe2f4f](Assets/42d1f10dfab7d7ba0f2461ea22c0bfaf88fe2f4f.png) |

知道你不贪,很知足,但是为了整体匹配成,没办法,也只能给你多塞点了.因此最后`\d{1,3}?`匹配的字符是`12`,是两个数字,而不是一个

### 分支结构

我们知道分支也是惰性的,比如`/can|candy/`,去匹配字符串`candy`,得到的结果是`can`,因为分支会一个一个尝试,如果前面的满足了,后面就不会再试验了

分支结构,可能前面的子模式会形成了局部匹配,如果接下来表达式整体不匹配时,仍会继续尝试剩下的分支.这种尝试也可以看成一种回溯

比如正则

![eae2b65be51a08923fa53fa82c0fa09d8f55d1c8](Assets/eae2b65be51a08923fa53fa82c0fa09d8f55d1c8.png)

目标字符串是`candy`,匹配过程

| 步骤  |                                               正则                                               |                                               文本                                               |
| :---: | :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|   1   | ![779cb3d88724f252cd9998e115c81e558f63c40e](Assets/779cb3d88724f252cd9998e115c81e558f63c40e.png) | ![69806d335f88e35bcffeb3cd390251391d3e63f8](Assets/69806d335f88e35bcffeb3cd390251391d3e63f8.png) |
|   2   | ![2b1f4e52075c074be414eeda23e0b6f2673ba7c2](Assets/2b1f4e52075c074be414eeda23e0b6f2673ba7c2.png) | ![b1ef3675b6cfa573046f349119d97146a13614c0](Assets/b1ef3675b6cfa573046f349119d97146a13614c0.png) |
|   3   | ![e9d829eb19637df562581231a5d9b7204a462a31](Assets/e9d829eb19637df562581231a5d9b7204a462a31.png) | ![d76d6442d0598a24752470fa7e568f02ff5de7d4](Assets/d76d6442d0598a24752470fa7e568f02ff5de7d4.png) |
|   4   | ![1b692bb5fe3a50751c9c1e5fd2141245c27ac9d6](Assets/1b692bb5fe3a50751c9c1e5fd2141245c27ac9d6.png) | ![39bfc3e333aaf81fe57eda79bc8576b478bffad4](Assets/39bfc3e333aaf81fe57eda79bc8576b478bffad4.png) |
|   5   | ![aea6885e45e76c7c90511a47cbfda098298758c2](Assets/aea6885e45e76c7c90511a47cbfda098298758c2.png) | ![822e74c734b83eadd66631fb371547263ea0658e](Assets/822e74c734b83eadd66631fb371547263ea0658e.png) |
|   6   | ![8de6f9a40aad780a5ea0d60605b606d55d0ddd44](Assets/8de6f9a40aad780a5ea0d60605b606d55d0ddd44.png) | ![33778d55b8203e60d1821ea62a47adf87c5c628f](Assets/33778d55b8203e60d1821ea62a47adf87c5c628f.png) |

上面第5步,虽然没有回到之前的状态,但仍然回到了分支结构,尝试下一种可能.所以,可以认为它是一种回溯的