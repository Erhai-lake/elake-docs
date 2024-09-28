import{_ as i,a as t,b as o}from"./chunks/cccfc9f0d8573d07fddba87e4f5155a94dcd5553.BeGtNnA2.js";import{_ as p,c as r,j as e,a as l,b as n,w as s,a5 as f,a4 as b,B as g,o as c,G as m}from"./chunks/framework.BPErc-vJ.js";const u="/assets/2835eff5a06179d1a3348b577e0c38498f36886b.C83HRsB7.png",_="/assets/d6d42a3c4712e62981bdb79a079c340020366135.Q3ie-2Uo.png",k="/assets/d1eb988b8c4719c741ab9c8996b5e608f456be2f.Be-g0-Jm.png",h="/assets/9a4af7410ddde57085d0a7ff3973f25182d73244.DELZ6XTL.png",D="/assets/7bcad0f14268953b537f1e6702be2031c3519dce.DPduX-AN.png",B="/assets/37eed0b33be505b6a2c68f90e5a5af585637d972.DsULXC8z.png",v="/assets/62353ed0a902a1570d6ab3308039b539fd6e02d8.COPSMgPZ.png",E="/assets/2cef05eb9573b13081f39614a4c491d77fae1d9f.CDyKMUPH.png",P="/assets/fba6c4aedccabfd87b303082f76b19c6063eac25.BRrfc5J5.png",y="/assets/a891f04f13c30afc7969686b8be89087318707ef.DdHgYsu5.png",z="/assets/2d46dcb07e8a96fee4d2c456db0fc8dced04d846.BCpxfJcM.png",L=JSON.parse('{"title":"Java项目的代码结构","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Knowledge/ProgrammingLanguage/Java/JavaProjectStructure.md","filePath":"Docs/Knowledge/ProgrammingLanguage/Java/JavaProjectStructure.md","lastUpdated":1727545103000}'),A={name:"Docs/Knowledge/ProgrammingLanguage/Java/JavaProjectStructure.md"};function J(j,a,x,C,q,I){const d=g("Mermaid");return c(),r("div",null,[a[1]||(a[1]=e("h1",{id:"java项目的代码结构",tabindex:"-1"},[l("Java项目的代码结构 "),e("a",{class:"header-anchor",href:"#java项目的代码结构","aria-label":'Permalink to "Java项目的代码结构"'},"​")],-1)),(c(),n(f,null,{default:s(()=>[m(d,{id:"mermaid-3",class:"mermaid",graph:"flowchart%20TD%3B%20A%5B%22project(%E5%B7%A5%E7%A8%8B)%22%5D%20--%3E%20B%5B%22moduke(%E6%A8%A1%E5%9D%97)%22%5D%20--%3E%20C%5B%22package(%E5%8C%85)%22%5D%20--%3E%20D%5B%22class(%E7%B1%BB)%22%5D%0A"})]),fallback:s(()=>a[0]||(a[0]=[l(" Loading... ")])),_:1})),a[2]||(a[2]=b('<p>我来举个例子,比如说我要写个B站</p><ul><li>B站系统(project) <ul><li>首页(moduke) <ul><li>用户界面(package) <ul><li>主页(class)</li><li>视频播放器(class)</li><li>搜索栏(class)</li></ul></li><li>数据服务(package) <ul><li>视频服务(class)</li><li>用户服务(class)</li></ul></li></ul></li><li>个人主页(moduke) <ul><li>用户界面(package) <ul><li>个人资料页面(class)</li><li>关注列表(class)</li></ul></li><li>数据服务(package) <ul><li>简介服务(class)</li><li>会计服务(class)</li></ul></li></ul></li><li>推荐(moduke) <ul><li>个性化推荐(package) <ul><li>推荐算法(class)</li><li>内容筛选器(class)</li></ul></li><li>用户界面(package) <ul><li>推荐列表(class)</li><li>建议栏(class)</li></ul></li></ul></li></ul></li></ul><p>差不多就是这个样子,将不同的功能分开</p><h2 id="在idea创建project" tabindex="-1">在IDEA创建project <a class="header-anchor" href="#在idea创建project" aria-label="Permalink to &quot;在IDEA创建project&quot;">​</a></h2><p><img src="'+i+'" alt="f95d5197e55a96e174f49d5e7afb9488f57c68e1" loading="lazy"></p><p><img src="'+t+'" alt="3a1505191e18b75ca8f1adfc32b06f70cdd61085" loading="lazy"></p><p><img src="'+o+'" alt="cccfc9f0d8573d07fddba87e4f5155a94dcd5553" loading="lazy"></p><p>这样一个全新的项目就诞生了</p><h2 id="在idea创建moduke" tabindex="-1">在IDEA创建moduke <a class="header-anchor" href="#在idea创建moduke" aria-label="Permalink to &quot;在IDEA创建moduke&quot;">​</a></h2><p><img src="'+u+'" alt="2835eff5a06179d1a3348b577e0c38498f36886b" loading="lazy"></p><p><img src="'+_+'" alt="d6d42a3c4712e62981bdb79a079c340020366135" loading="lazy"></p><p><img src="'+k+'" alt="d1eb988b8c4719c741ab9c8996b5e608f456be2f" loading="lazy"></p><p>这样一个新的模块就诞生了</p><h2 id="在idea创建package" tabindex="-1">在IDEA创建package <a class="header-anchor" href="#在idea创建package" aria-label="Permalink to &quot;在IDEA创建package&quot;">​</a></h2><p><img src="'+h+'" alt="9a4af7410ddde57085d0a7ff3973f25182d73244" loading="lazy"></p><p><img src="'+D+'" alt="7bcad0f14268953b537f1e6702be2031c3519dce" loading="lazy"></p><div class="warning custom-block"><p class="custom-block-title">警告</p><p>包名不是单单一个名字这么简单,一般是倒过来的公司域名和技术名,全部小写,例如:</p><p><code>top.elake.hello</code></p></div><p>输入完后回车</p><p><img src="'+B+'" alt="37eed0b33be505b6a2c68f90e5a5af585637d972" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果你的包不是像我这个的,而是这样的</p><p><img src="'+v+'" alt="62353ed0a902a1570d6ab3308039b539fd6e02d8" loading="lazy"></p><p>可以按着下面的方法设置,看个人喜好</p><p><img src="'+E+'" alt="2cef05eb9573b13081f39614a4c491d77fae1d9f" loading="lazy"></p></div><p>这样一个新的包就诞生了</p><h2 id="在idea创建class" tabindex="-1">在IDEA创建class <a class="header-anchor" href="#在idea创建class" aria-label="Permalink to &quot;在IDEA创建class&quot;">​</a></h2><p><img src="'+P+'" alt="fba6c4aedccabfd87b303082f76b19c6063eac25" loading="lazy"></p><p><img src="'+y+'" alt="a891f04f13c30afc7969686b8be89087318707ef" loading="lazy"></p><p>输入完名称后回车</p><p><img src="'+z+'" alt="2d46dcb07e8a96fee4d2c456db0fc8dced04d846" loading="lazy"></p><p>这样一个新的类就诞生了</p>',27))])}const N=p(A,[["render",J]]);export{L as __pageData,N as default};