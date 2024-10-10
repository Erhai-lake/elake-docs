import{_ as a,c as r,a6 as o,o as t}from"./chunks/framework.D4mCxCc5.js";const n="/assets/dad38b68bc511a2d4ee8c076930459526957e328.wCGOx_CF.png",s="/assets/07b78f1f954e4b68925bbdbaca2092c52028e821.D9ZVrOsE.png",f=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Knowledge/ProgrammingLanguage/RegularExpression/RegularExpression.md","filePath":"Docs/Knowledge/ProgrammingLanguage/RegularExpression/RegularExpression.md","lastUpdated":1727508316000}'),p={name:"Docs/Knowledge/ProgrammingLanguage/RegularExpression/RegularExpression.md"};function g(l,e,c,d,i,b){return t(),r("div",null,e[0]||(e[0]=[o('<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><blockquote><p>参考:<a href="//segmentfault.com/a/1190000040988916" target="_blank" rel="noreferrer">正则表达式完整教程 SegmentFault</a></p></blockquote><p><strong>正则表达式</strong>(Regular Expression)是一种<strong>文本模式</strong>,包括普通字符(例如a到z之间的字母)和特殊字符(称为<strong>元字符</strong>),可以用来描述和匹配字符串的特定模式</p><p><strong>正则表达式</strong>是一种用于模式匹配和搜索文本的工具</p><p><strong>正则表达式</strong>提供了一种灵活且强大的方式来查找,替换,验证和提取文本数据</p><p><strong>正则表达式</strong>可以应用于各种编程语言和文本处理工具中,如 <strong>JavaScript</strong>,<strong>Python</strong>,<strong>Java</strong>等</p><p>:::note 正则表达式是匹配模式,要么匹配字符,要么匹配位置.请记住这句话</p><p>关于正则如何匹配字符,大部分人都觉得这块比较杂乱</p><p>毕竟元字符太多了,看起来没有系统性,不好记(<s>我也不好写...</s>) :::</p><p><a href="//www.jyshare.com/front-end/854/" target="_blank" rel="noreferrer">在线测试网站</a></p><p><a href="//www.jyshare.com/front-end/7625/" target="_blank" rel="noreferrer">可视化工具</a></p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><p>只能输入英文字符,数字或者下划线,且长度在3~16字符之间</p><p><code>/^[a-z0-9_-]{3,16}$/</code></p><p><img src="'+n+'" alt="dad38b68bc511a2d4ee8c076930459526957e328" data-fancybox="gallery" loading="lazy"></p><p>匹配邮箱</p><p><code>/\\b[\\w.%+-]+@[\\w.-]+\\.[a-zA-Z]{2,6}\\b/</code></p><p><img src="'+s+'" alt="07b78f1f954e4b68925bbdbaca2092c52028e821" data-fancybox="gallery" loading="lazy"></p>',18)]))}const u=a(p,[["render",g]]);export{f as __pageData,u as default};