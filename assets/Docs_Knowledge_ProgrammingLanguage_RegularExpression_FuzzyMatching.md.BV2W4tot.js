import{_ as a,c as d,a4 as c,o}from"./chunks/framework.BPErc-vJ.js";const l="/assets/0a609cefd8e5b8b135bc935edb055f7202c27573.CdTGmebG.png",i="/assets/143ca03a620b2fa005bea65a244b8c8c32fb4c2d.DCdRXK6j.png",t="/assets/40e4533d6b68612c8492082b07cd370c68b684c1.DPlmPqLM.png",p="/assets/9b34ff3921b6d2f5d0faa96d1f0448bfb0c78b29.BOWX7D9k.png",r="/assets/08235481de981a8a69d66be2168946e144e1a1b4.CpY4jlAd.png",s="/assets/1e201651d1656969624b975f3911f34a5cdb3942.Brt_ZoUi.png",n="/assets/e5508d6fe2a3d77fdc8f85cf5eddcf54d22dc82a.B8bxhvVy.png",b="/assets/b886745dcfdeb7ff7bb6f4eb803977cac31b3776.lkTHWEMZ.png",x=JSON.parse('{"title":"模糊匹配","description":"","frontmatter":{},"headers":[],"relativePath":"Docs/Knowledge/ProgrammingLanguage/RegularExpression/FuzzyMatching.md","filePath":"Docs/Knowledge/ProgrammingLanguage/RegularExpression/FuzzyMatching.md","lastUpdated":1727542257000}'),h={name:"Docs/Knowledge/ProgrammingLanguage/RegularExpression/FuzzyMatching.md"};function f(m,e,g,u,_,q){return o(),d("div",null,e[0]||(e[0]=[c('<h1 id="模糊匹配" tabindex="-1">模糊匹配 <a class="header-anchor" href="#模糊匹配" aria-label="Permalink to &quot;模糊匹配&quot;">​</a></h1><p>如果正则只有精确匹配是没多大意义的,比如<code>/hello/</code>,也只能匹配字符串中的<code>hello</code>这个字符串</p><p><img src="'+l+'" alt="0a609cefd8e5b8b135bc935edb055f7202c27573" loading="lazy"></p><p>正则表达式之所以强大,是因为其能实现模糊匹配</p><p>而模糊匹配,有两个方向上的模糊: 横向模糊和纵向模糊</p><h2 id="横向模糊匹配" tabindex="-1">横向模糊匹配 <a class="header-anchor" href="#横向模糊匹配" aria-label="Permalink to &quot;横向模糊匹配&quot;">​</a></h2><p>个正则可匹配的字符串的长度不是固定的,可以有多种可能</p><p>其实现的方式是使用量词.例如<code>{m,n}</code>,表示连续出现最少m次,最多n次</p><p><img src="'+i+'" alt="143ca03a620b2fa005bea65a244b8c8c32fb4c2d" loading="lazy"></p><h2 id="纵向模糊匹配" tabindex="-1">纵向模糊匹配 <a class="header-anchor" href="#纵向模糊匹配" aria-label="Permalink to &quot;纵向模糊匹配&quot;">​</a></h2><p>一个正则匹配的字符串,具体到某一位字符时,它可以不是某个确定的字符,可以有多种可能</p><p>其实现的方式是使用字符组.例如<code>[abc]</code>,表示该字符是可以字符<code>a</code>,<code>b</code>,<code>c</code>中的任何一个</p><p><img src="'+t+'" alt="40e4533d6b68612c8492082b07cd370c68b684c1" loading="lazy"></p><h2 id="量词" tabindex="-1">量词 <a class="header-anchor" href="#量词" aria-label="Permalink to &quot;量词&quot;">​</a></h2><p>量词也称重复.掌握<code>{m,n}</code>的准确含义后,只需要记住一些简写形式</p><h3 id="常见的简写形式" tabindex="-1">常见的简写形式 <a class="header-anchor" href="#常见的简写形式" aria-label="Permalink to &quot;常见的简写形式&quot;">​</a></h3><ul><li><code>{m,}</code> 表示至少出现<code>m</code>次</li><li><code>{m}</code>就是<code>{m,m}</code>.表示出现<code>m</code>次</li><li><code>?</code>就是<code>{0,1}</code>.表示出现或者不出现</li></ul><ul><li><code>+</code>就是<code>{1,}</code>.表示出现至少一次</li><li><code>*</code> 就是<code>{0,}</code>.表示出现任意次,有可能不出现</li></ul><h3 id="贪婪匹配" tabindex="-1">贪婪匹配 <a class="header-anchor" href="#贪婪匹配" aria-label="Permalink to &quot;贪婪匹配&quot;">​</a></h3><p><img src="'+p+'" alt="9b34ff3921b6d2f5d0faa96d1f0448bfb0c78b29" loading="lazy"></p><p><code>/\\d{2,5}/</code>表示数字连续出现2到5次.会匹配2位,3位,4位,5位连续数字</p><p>但是其实贪婪的,它会尽可能多的匹配.你能给我6个,我就要6个.你能给我3个,我就3要个.反正只要在能力范围内,越多越好</p><p>我们知道有时贪婪不是一件好事.</p><h3 id="惰性匹配" tabindex="-1">惰性匹配 <a class="header-anchor" href="#惰性匹配" aria-label="Permalink to &quot;惰性匹配&quot;">​</a></h3><p>而惰性匹配,就是尽可能少的匹配</p><p><img src="'+r+'" alt="08235481de981a8a69d66be2168946e144e1a1b4" loading="lazy"></p><p><code>/\\d{2,5}?/</code>表示虽然2到5次都行,当2个就够的时候,就不在往下尝试了</p><h2 id="字符组" tabindex="-1">字符组 <a class="header-anchor" href="#字符组" aria-label="Permalink to &quot;字符组&quot;">​</a></h2><p>虽叫字符组(字符类),但只是其中一个字符.例如<code>[abc]</code>,表示该字符是可以字符<code>a</code>,<code>b</code>,<code>c</code>中的任何一个</p><h3 id="范围表示法" tabindex="-1">范围表示法 <a class="header-anchor" href="#范围表示法" aria-label="Permalink to &quot;范围表示法&quot;">​</a></h3><p>如果字符组里的字符特别多的话怎么办?可以使用范围表示法</p><p>比如<code>[123456abcdefGHIJKLM]</code>,可以写成<code>[1-6a-fG-M]</code>.用连字符<code>-</code>来省略和简写</p><p>因为连字符有特殊用途,那么要匹配<code>a</code>,<code>-</code>,<code>z</code>这三者中任意一个字符,该怎么做呢?</p><p>不能写成<code>[a-z]</code>,因为其表示小写字符中的任何一个字符</p><p>可以写成如下的方式:<code>[-az]</code>或<code>[az-]</code>或<code>[a\\-z]</code></p><p>即要么放在开头,要么放在结尾,要么转义.总之不会让引擎认为是范围表示法就行了</p><h3 id="排除字符组" tabindex="-1">排除字符组 <a class="header-anchor" href="#排除字符组" aria-label="Permalink to &quot;排除字符组&quot;">​</a></h3><p>纵向模糊匹配,还有一种情形就是,某位字符可以是任何东西,但就不能是<code>a</code>,<code>b</code>,<code>c</code></p><p>此时就是排除字符组(反义字符组)的概念.例如<code>[^abc]</code>,表示是一个除<code>a</code>,<code>b</code>,<code>c</code>之外的任意一个字符.字符组的第一位放<code>^</code>(脱字符),表示求反的概念</p><p>当然,也有相应的范围表示法</p><h3 id="常见的简写形式-1" tabindex="-1">常见的简写形式 <a class="header-anchor" href="#常见的简写形式-1" aria-label="Permalink to &quot;常见的简写形式&quot;">​</a></h3><p>有了字符组的概念后,一些常见的符号我们也就理解了,因为它们都是系统自带的简写形式</p><ul><li><code>\\d</code>就是<code>[0-9]</code>.表示是一位数字</li><li><code>\\D</code>就是<code>[^0-9]</code>.表示除数字外的任意字符</li><li><code>\\w</code>就是<code>[0-9a-zA-Z_]</code>.表示数字,大小写字母和下划线</li><li><code>\\W</code>就是<code>[^0-9a-zA-Z_]</code>.非单词字符</li><li><code>\\s</code>就是<code>[ \\t\\v\\n\\r\\f]</code>.表示空白符,包括空格,水平制表符,垂直制表符,换行符,回车符,换页符</li><li><code>\\S</code>就是<code>[^ \\t\\v\\n\\r\\f]</code>. 非空白符</li><li><code>.</code>就是<code>[^\\n\\r\\u2028\\u2029]</code>.通配符,表示几乎任意字符.换行符,回车符,行分隔符和段分隔符除外</li></ul><h2 id="多选分支" tabindex="-1">多选分支 <a class="header-anchor" href="#多选分支" aria-label="Permalink to &quot;多选分支&quot;">​</a></h2><p>一个模式可以实现横向和纵向模糊匹配,而多选分支可以支持多个子模式任选其一</p><p>具体形式如下:<code>(p1|p2|p3)</code>,其中<code>p1</code>,<code>p2</code>,<code>p3</code>是子模式，,用<code>|</code>(管道符)分隔,表示其中任何之一</p><p>例如要匹配<code>aa</code>和<code>bb</code>可以使用<code>/aa|bb/</code></p><p><img src="'+s+'" alt="1e201651d1656969624b975f3911f34a5cdb3942" loading="lazy"></p><p>但有个事实我们应该注意,比如我用<code>/aa|aabb/</code>,去匹配<code>aabb</code>字符串时,结果是<code>aa</code></p><p><img src="'+n+'" alt="e5508d6fe2a3d77fdc8f85cf5eddcf54d22dc82a" loading="lazy"></p><p>而把正则改成<code>/aabb|aa/</code>后</p><p><img src="'+b+'" alt="b886745dcfdeb7ff7bb6f4eb803977cac31b3776" loading="lazy"></p><p>也就是说,分支结构也是惰性的,即当前面的匹配上了,后面的就不再尝试了</p>',53)]))}const P=a(h,[["render",f]]);export{x as __pageData,P as default};
