import{_ as a,c as t,a4 as e,o as i}from"./chunks/framework.BPErc-vJ.js";const g=JSON.parse('{"title":"日期对象","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Knowledge/ProgrammingLanguage/JavaScript/DateObject.md","filePath":"Docs/Knowledge/ProgrammingLanguage/JavaScript/DateObject.md","lastUpdated":1727545103000}'),n={name:"Docs/Knowledge/ProgrammingLanguage/JavaScript/DateObject.md"};function l(r,s,p,h,d,k){return i(),t("div",null,s[0]||(s[0]=[e(`<h1 id="日期对象" tabindex="-1">日期对象 <a class="header-anchor" href="#日期对象" aria-label="Permalink to &quot;日期对象&quot;">​</a></h1><p>用来表示日期的对象,用于获取系统当前时间</p><h2 id="获取当前时间" tabindex="-1">获取当前时间 <a class="header-anchor" href="#获取当前时间" aria-label="Permalink to &quot;获取当前时间&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Sun Jul 28 2024 10:43:57 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="获取指定时间" tabindex="-1">获取指定时间 <a class="header-anchor" href="#获取指定时间" aria-label="Permalink to &quot;获取指定时间&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2024-08-26 08:26:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Mon Aug 26 2024 08:26:00 GMT+0800 (中国标准时间)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="时间对象里的方法" tabindex="-1">时间对象里的方法 <a class="header-anchor" href="#时间对象里的方法" aria-label="Permalink to &quot;时间对象里的方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">方法</th><th style="text-align:center;">作用</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>getFullYear()</code></td><td style="text-align:center;">获取年份</td><td style="text-align:center;">获取4位年份</td></tr><tr><td style="text-align:center;"><code>getMonth()</code></td><td style="text-align:center;">获取月份</td><td style="text-align:center;">取值为<strong>0~11</strong></td></tr><tr><td style="text-align:center;"><code>getDate()</code></td><td style="text-align:center;">获取月份中的每一天</td><td style="text-align:center;">不同月份的取值也不相同</td></tr><tr><td style="text-align:center;"><code>getDay()</code></td><td style="text-align:center;">获取星期</td><td style="text-align:center;">取值为<strong>0~6</strong></td></tr><tr><td style="text-align:center;"><code>getHours()</code></td><td style="text-align:center;">获取小时</td><td style="text-align:center;">取值为0~23</td></tr><tr><td style="text-align:center;"><code>getMinutes()</code></td><td style="text-align:center;">获取分钟</td><td style="text-align:center;">取值为0~59</td></tr><tr><td style="text-align:center;"><code>getSeconds()</code></td><td style="text-align:center;">获取秒</td><td style="text-align:center;">取值为0~59</td></tr><tr><td style="text-align:center;"><code>getTime</code></td><td style="text-align:center;">获取时间戳</td><td style="text-align:center;">看下面的章节</td></tr></tbody></table><p>时间对象里的函数远远不止这些</p><h2 id="时间戳" tabindex="-1">时间戳 <a class="header-anchor" href="#时间戳" aria-label="Permalink to &quot;时间戳&quot;">​</a></h2><p>时间戳是指从<strong>1970-01-01 00:00:00</strong>到现在的<strong>毫秒数</strong>,它是一种特殊的计量时间的方法</p><p>时间戳可以很方便的进行计算,例如<strong>将来的时间戳 - 现在的时间戳 = 剩余时间的毫秒数</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第一种方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第二种方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第三种方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>第一和第二种方法,都可以通过<code>new Date(&#39;2024-08-26 08:26:00&#39;)</code>来获取指定时间的时间戳,而第三种,只能获取当前时间戳</p>`,14)]))}const o=a(n,[["render",l]]);export{g as __pageData,o as default};