import{_ as e,c as o,a4 as t,o as i}from"./chunks/framework.BPErc-vJ.js";const r="/assets/50f64ae063c6160747c9c04044b348615d5f6bae.BmNLjlcB.png",u=JSON.parse('{"title":"常见指令","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Knowledge/ProgrammingLanguage/Git/CommonInstructions.md","filePath":"Docs/Knowledge/ProgrammingLanguage/Git/CommonInstructions.md","lastUpdated":1727542257000}'),l={name:"Docs/Knowledge/ProgrammingLanguage/Git/CommonInstructions.md"};function c(n,a,d,p,s,h){return i(),o("div",null,a[0]||(a[0]=[t('<h1 id="常见指令" tabindex="-1">常见指令 <a class="header-anchor" href="#常见指令" aria-label="Permalink to &quot;常见指令&quot;">​</a></h1><p>Git工作目录下对于文件的修改(增加,删除,更新)会存在几个状态,这些修改的状态会随着我们执行Git的命令而发生变化.</p><p><img src="'+r+'" alt="50f64ae063c6160747c9c04044b348615d5f6bae" loading="lazy"></p><h2 id="初始化git仓库" tabindex="-1">初始化Git仓库 <a class="header-anchor" href="#初始化git仓库" aria-label="Permalink to &quot;初始化Git仓库&quot;">​</a></h2><p><code>git inif</code></p><h2 id="加入暂存区" tabindex="-1">加入暂存区 <a class="header-anchor" href="#加入暂存区" aria-label="Permalink to &quot;加入暂存区&quot;">​</a></h2><p>将工作区的文件,加入暂存区</p><p><code>git add 单个文件名|通配符</code></p><p>通配符<code>.</code>是所有(一般是这么做的)</p><h2 id="提交本地仓库" tabindex="-1">提交本地仓库 <a class="header-anchor" href="#提交本地仓库" aria-label="Permalink to &quot;提交本地仓库&quot;">​</a></h2><p>将暂存区的文件提交到本地仓库的当前分支</p><p><code>git commit -m &quot;注释&quot;</code></p><p>注释是必填的</p><h2 id="查看文件的修改状态" tabindex="-1">查看文件的修改状态 <a class="header-anchor" href="#查看文件的修改状态" aria-label="Permalink to &quot;查看文件的修改状态&quot;">​</a></h2><p>查看文件的修改状态(暂存区,工作区)</p><p><code>git status</code></p><h2 id="查看提交日志" tabindex="-1">查看提交日志 <a class="header-anchor" href="#查看提交日志" aria-label="Permalink to &quot;查看提交日志&quot;">​</a></h2><p>查看提交日志信息</p><p><code>git log [参数]</code></p><ul><li>参数 <ul><li>--all 显示所有分支</li><li>--pretty=oneline 将提交信息显示为一行</li><li>--abbrev-commit 使输出的commit更简短</li><li>--graph 以图的形式输出</li></ul></li></ul><h2 id="版本回退" tabindex="-1">版本回退 <a class="header-anchor" href="#版本回退" aria-label="Permalink to &quot;版本回退&quot;">​</a></h2><p>版本切换</p><p><code>git reset --hard commitID</code></p><p>commitID 可以用<code>git log</code>查看</p><h2 id="查看版本回退日志" tabindex="-1">查看版本回退日志 <a class="header-anchor" href="#查看版本回退日志" aria-label="Permalink to &quot;查看版本回退日志&quot;">​</a></h2><p>查看版本回退日志</p><p><code>git reflog</code></p><h2 id="添加文件到忽略列表" tabindex="-1">添加文件到忽略列表 <a class="header-anchor" href="#添加文件到忽略列表" aria-label="Permalink to &quot;添加文件到忽略列表&quot;">​</a></h2><p>不希望一些文件被git管理</p><p>在工作目录创建一个文件<code>.gitignore</code>(文件名固定)</p><p>然后在里面写上要忽略的文件名/目录,支持通配符,一行一个</p>',31)]))}const g=e(l,[["render",c]]);export{u as __pageData,g as default};
