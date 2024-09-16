"use strict";(self.webpackChunkelake_docs=self.webpackChunkelake_docs||[]).push([[6612],{76912:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=i(86070),r=i(97525);const s={id:"BasicKnowledgeOfWebApi",title:"WebAPI\u57fa\u672c\u8ba4\u77e5"},l="WebAPI\u57fa\u672c\u8ba4\u77e5",d={id:"Tutorials/ProgrammingLanguage/JavaScript/BasicKnowledgeOfWebApi",title:"WebAPI\u57fa\u672c\u8ba4\u77e5",description:"\u4f5c\u7528\u548c\u5206\u7c7b",source:"@site/docs/Tutorials/ProgrammingLanguage/JavaScript/BasicKnowledgeOfWebApi.md",sourceDirName:"Tutorials/ProgrammingLanguage/JavaScript",slug:"/Tutorials/ProgrammingLanguage/JavaScript/BasicKnowledgeOfWebApi",permalink:"/docs/Tutorials/ProgrammingLanguage/JavaScript/BasicKnowledgeOfWebApi",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"BasicKnowledgeOfWebApi",title:"WebAPI\u57fa\u672c\u8ba4\u77e5"},sidebar:"JavaScript",previous:{title:"\u5185\u7f6e\u5bf9\u8c61Math",permalink:"/docs/Tutorials/ProgrammingLanguage/JavaScript/BuiltInObjectMath"},next:{title:"\u83b7\u53d6DOM\u5143\u7d20",permalink:"/docs/Tutorials/ProgrammingLanguage/JavaScript/GetDomElement"}},a={},c=[{value:"\u4f5c\u7528\u548c\u5206\u7c7b",id:"\u4f5c\u7528\u548c\u5206\u7c7b",level:2},{value:"DOM",id:"dom",level:2},{value:"DOM\u662f\u4ec0\u4e48",id:"dom\u662f\u4ec0\u4e48",level:3},{value:"DOM\u6811\u662f\u4ec0\u4e48",id:"dom\u6811\u662f\u4ec0\u4e48",level:3},{value:"DOM\u5bf9\u8c61(\u91cd\u8981)",id:"dom\u5bf9\u8c61\u91cd\u8981",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"webapi\u57fa\u672c\u8ba4\u77e5",children:"WebAPI\u57fa\u672c\u8ba4\u77e5"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f5c\u7528\u548c\u5206\u7c7b",children:"\u4f5c\u7528\u548c\u5206\u7c7b"}),"\n",(0,t.jsx)(n.p,{children:"\u5c31\u662f\u901a\u8fc7JS\u8c03\u7528WebAPI,\u53bb\u64cd\u4f5c\u7f51\u9875\u548c\u6d4f\u89c8\u5668"}),"\n",(0,t.jsx)(n.p,{children:"WebAPI\u5206\u4e24\u5927\u7c7b"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOM"}),": \u6587\u6863\u5bf9\u8c61\u6a21\u578b"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BOM"}),": \u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b(\u7528\u4e8e\u64cd\u4f5c\u6d4f\u89c8\u5668\u7684.\u4f8b\u5982\u5f39\u7a97,\u63a7\u5236\u53f0\u8f93\u51fa\u7b49)"]}),"\n",(0,t.jsx)(n.h2,{id:"dom",children:"DOM"}),"\n",(0,t.jsx)(n.h3,{id:"dom\u662f\u4ec0\u4e48",children:"DOM\u662f\u4ec0\u4e48"}),"\n",(0,t.jsxs)(n.p,{children:["DOM(Document Object Model ",(0,t.jsx)(n.strong,{children:"\u6587\u6863\u5bf9\u8c61\u6a21\u578b"}),")\u662f\u7528\u6765\u5448\u73b0\u4ee5\u53ca\u4e0e\u4efb\u610f",(0,t.jsx)(n.strong,{children:"Html"}),"\u6216",(0,t.jsx)(n.strong,{children:"XML"}),"\u6587\u6863\u4ea4\u4e92\u7684API"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u901a\u4fd7\u6613\u61c2\u7684\u8bdd\u6765\u8bf4,DOM\u662f\u6d4f\u89c8\u5668\u63d0\u4f9b\u7684\u4e00\u5957\u4e13\u95e8\u7528\u6765",(0,t.jsx)(n.strong,{children:"\u64cd\u4f5c\u7f51\u9875\u5185\u5bb9"}),"\u7684\u529f\u80fd"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f5c\u7528: \u5f00\u53d1\u9875\u9762\u5185\u5bb9\u7279\u6548\u548c\u5b9e\u73b0\u7528\u6237\u4ea4\u4e92"}),"\n",(0,t.jsx)(n.h3,{id:"dom\u6811\u662f\u4ec0\u4e48",children:"DOM\u6811\u662f\u4ec0\u4e48"}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u9875\u9762\u6587\u6863\u4ee5\u6811\u7ed3\u6784\u76f4\u89c2\u7684\u8868\u73b0\u51fa\u6765,\u6211\u4eec\u79f0\u4e4b\u4e3a\u6587\u6863\u6811\u6216DOM\u6811"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"DOM\u6811\u76f4\u89c2\u7684\u4f53\u73b0\u4e86\u6807\u7b7e\u4e0e\u6807\u7b7e\u4e4b\u95f4\u7684\u5173\u7cfb"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"showLineNumbers",children:'<!DOCTYPE html>\n<html lang="zh_CN">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Demo</title>\n</head>\n\n<body>\n    <p>\u6587\u672c</p>\n    <div>\n        <a href="www.elake.top" title="\u70b9\u6211">\u5b98\u7f51</a>\n    </div>\n</body>\n\n</html>\n'})}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD; document --\x3e html; html --\x3e hrad;hrad --\x3e meta --\x3e charset(charset); hrad --\x3e title1[title] --\x3e Demo{Demo}; html --\x3e body; body --\x3e p --\x3e \u6587\u672c{\u6587\u672c}; body --\x3e div --\x3e a; a --\x3e href(href); a --\x3e title2(title); a --\x3e \u5b98\u7f51{\u5b98\u7f51}; \u5143\u7d20\u8282\u70b9[\u5143\u7d20\u8282\u70b9] --\x3e \u5c5e\u6027\u8282\u70b9(\u5c5e\u6027\u8282\u70b9) --\x3e \u6587\u672c\u8282\u70b9{\u6587\u672c\u8282\u70b9}"}),"\n",(0,t.jsx)(n.h3,{id:"dom\u5bf9\u8c61\u91cd\u8981",children:"DOM\u5bf9\u8c61(\u91cd\u8981)"}),"\n",(0,t.jsxs)(n.p,{children:["DOM\u5bf9\u8c61: \u6d4f\u89c8\u5668\u6839\u636ehtml\u4fbf\u7b7e\u751f\u6210\u7684",(0,t.jsx)(n.strong,{children:"JS\u5bf9\u8c61"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6240\u6709\u7684\u6807\u7b7e\u5c5e\u6027\u90fd\u53ef\u4ee5\u5728\u8fd9\u4e2a\u5bf9\u8c61\u4e0a\u9762\u627e\u5230"}),"\n",(0,t.jsx)(n.li,{children:"\u4fee\u6539\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u4f1a\u81ea\u52a8\u6620\u5c04\u5230\u6807\u7b7e\u8eab\u4e0a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e3e\u4e2a\u4f8b\u5b50:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:"showLineNumbers",children:'<!DOCTYPE html>\n<html lang="zh_CN">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Demo</title>\n</head>\n\n<body>\n    <div>Test</div>\n    <script>\n        const Div = document.querySelector(\'div\')\n        console.log(Div)\n        console.log(typeof Div)\n        // object\n    <\/script>\n</body>\n\n</html>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c55\u5f00\u5728\u63a7\u5236\u53f0\u8f93\u51fa\u7684",(0,t.jsx)(n.code,{children:"Div"}),",\u53ef\u4ee5\u770b\u89c1\u91cc\u9762\u6709\u5f88\u591a\u7684\u5c5e\u6027"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"f77647152c06aa8720f15e4936f0d27a9344366b",src:i(63542).A+"",width:"380",height:"875"})}),"\n",(0,t.jsxs)(n.p,{children:["DOM\u7684\u6838\u5fc3\u601d\u60f3: \u628a\u7f51\u9875\u5185\u5bb9\u5f53\u505a",(0,t.jsx)(n.strong,{children:"\u5bf9\u8c61"}),"\u6765\u5904\u7406"]}),"\n",(0,t.jsx)(n.p,{children:"document\u5bf9\u8c61"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u662fDOM\u91cc\u63d0\u4f9b\u7684\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u5bf9\u8c61"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u6240\u6709\u4ed6\u63d0\u4f9b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u90fd\u662f",(0,t.jsx)(n.strong,{children:"\u7528\u6765\u8bbf\u95ee\u548c\u64cd\u4f5c\u7f51\u9875\u5185\u5bb9\u7684"}),",\u4f8b\u5982:",(0,t.jsx)(n.code,{children:"Document.write()"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u7f51\u9875\u6240\u6709\u5185\u5bb9\u90fd\u5728",(0,t.jsx)(n.code,{children:"document"}),"\u91cc\u9762"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},63542:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/f77647152c06aa8720f15e4936f0d27a9344366b-c9f67d11a383401ec83cc70d1eed536f.png"},97525:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var t=i(30758);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);