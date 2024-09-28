import{_ as i,c as s,a4 as e,o as l}from"./chunks/framework.BPErc-vJ.js";const o=JSON.parse('{"title":"规范","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Knowledge/ProgrammingLanguage/Java/Specification.md","filePath":"Docs/Knowledge/ProgrammingLanguage/Java/Specification.md","lastUpdated":1727545103000}'),n={name:"Docs/Knowledge/ProgrammingLanguage/Java/Specification.md"};function t(p,a,h,r,d,k){return l(),s("div",null,a[0]||(a[0]=[e(`<h1 id="规范" tabindex="-1">规范 <a class="header-anchor" href="#规范" aria-label="Permalink to &quot;规范&quot;">​</a></h1><p>和别的语言一样,为了编写时可以舒服一点,一样需要一个简单的规范</p><p>本文档只介绍几个简单的规范,如果想要看详细的请看<a href="https://developer.aliyun.com/ebook/386/read" target="_blank" rel="noreferrer"><strong>阿里巴巴Java开发手册</strong></a></p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>不同类型的变量间(例如示例变量,局部变量和静态变量等)有一些命名规范和约定</p><p>遵循一些基本规则,这有助于提高代码的可读性和维护性</p><p>以下是各种变量命名规则的概述:</p><ul><li>使用有意义的名字: 变量名应该具有清晰的含义,能够准确的反映变量的用途. 避免使用单个字符和无意义的缩写</li><li>小驼峰命名法: 在变量名中使用小驼峰命名法,即每个单词的首字母大写(除了第一个单词外),例如: <code>myVariableName</code></li><li>大驼峰命名法: 和小驼峰的区别不大,唯一的区别就是第一个单词的首字母也是大写,例如: <code>MyVariableName</code>,这个命名法基本不用,主要看个人或团队需求</li><li>避免关键字: 不要使用Java的关键字(例如<code>class</code> <code>int</code> <code>boolean</code>等关键字)作为变量名</li><li>区分大小写: Java是大小写敏感的,因此变量中的大小写字母将会被视为不同的符号,例如<code>MyVariableName</code>和<code>myVariableName</code>是两个不同的变量</li><li>不以数字开头: 变量名可以包含数字,但是不能以数字作为变量名开头</li><li>遵循命名约定: 对于不同类型的变量(局部变量,实例变量和静态变量等),可以采用不同的命名约定,例如使用前缀或后缀来区分</li></ul><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><p>和上面的变量需求大差不差,但也有几个不一样的</p><p>Java的规范和JavaScript有些许不一样,Java的常量需要全大写(理论上其实JavaScript也需要,但是太难看了所以一般没人会写全大写),其中为了确保可读性,可以使用下划线<code>_</code>进行单词间的分割</p><p>举个简单的例子</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String SAND_STONE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sand_stone&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="局部变量" tabindex="-1">局部变量 <a class="header-anchor" href="#局部变量" aria-label="Permalink to &quot;局部变量&quot;">​</a></h3><ul><li>使用驼峰命名法</li><li>应该以小写字母开头</li><li>变量名应该是描述性的,能清晰的表示其用途</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myVariableName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 114514</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="示例变量-成员变量" tabindex="-1">示例变量(成员变量) <a class="header-anchor" href="#示例变量-成员变量" aria-label="Permalink to &quot;示例变量(成员变量)&quot;">​</a></h3><ul><li>使用驼峰命名法</li><li>应该以小写字母开头</li><li>变量名应该是描述性的,能清晰的表示其用途</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myVariableName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1919810</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="静态变量-类变量" tabindex="-1">静态变量(类变量) <a class="header-anchor" href="#静态变量-类变量" aria-label="Permalink to &quot;静态变量(类变量)&quot;">​</a></h3><ul><li>使用驼峰命名法,应该以小写字母开头</li><li>通常也可以使用大写蛇形命名法,全大写字母,单词之间使用下划线进行分隔</li><li>变量名应该是描述性的,能清晰的表示其用途</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用驼峰命名法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myVariableName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 520</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用大写蛇形命名法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MAX_SIZE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1314</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="常量-1" tabindex="-1">常量 <a class="header-anchor" href="#常量-1" aria-label="Permalink to &quot;常量&quot;">​</a></h3><ul><li>使用全大写字母,单词之间用下划线分割</li><li>常量通常使用<code>final</code>修饰</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PI </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 521</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li>使用驼峰命名法,应该以小写字母开头</li><li>通常也可以使用大写蛇形命名法,全大写字母,单词之间使用下划线进行分隔</li><li>参数名应该是描述性的,能清晰的表示其用途</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myParameter) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 方法体</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="类名" tabindex="-1">类名 <a class="header-anchor" href="#类名" aria-label="Permalink to &quot;类名&quot;">​</a></h3><ul><li>使用驼峰命名法,应该以大写字母开头</li><li>以大写字母开头</li><li>类名名应该是描述性的,能清晰的表示其用途</li></ul><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HelloWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	// 类的成员和方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,31)]))}const u=i(n,[["render",t]]);export{o as __pageData,u as default};