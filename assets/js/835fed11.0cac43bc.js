"use strict";(self.webpackChunkelake_docs=self.webpackChunkelake_docs||[]).push([[9540],{93945:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(86070),a=s(97525);const i={},t="If\u8bed\u53e5",l={id:"Tutorials/ProgrammingLanguage/JavaScript/IfStatement",title:"If\u8bed\u53e5",description:"If\u8bed\u53e5\u6709\u4e09\u79cd\u4f7f\u7528:\u5355\u5206\u652f,\u53cc\u5206\u652f,\u591a\u5206\u652f",source:"@site/docs/Tutorials/ProgrammingLanguage/JavaScript/IfStatement.md",sourceDirName:"Tutorials/ProgrammingLanguage/JavaScript",slug:"/Tutorials/ProgrammingLanguage/JavaScript/IfStatement",permalink:"/docs/Tutorials/ProgrammingLanguage/JavaScript/IfStatement",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",permalink:"/docs/Tutorials/ProgrammingLanguage/JavaScript/ExpressionsAndStatements"},next:{title:"\u4e09\u5143\u8fd0\u7b97\u7b26",permalink:"/docs/Tutorials/ProgrammingLanguage/JavaScript/TernaryOperator"}},c={},o=[{value:"\u5355\u5206\u652f",id:"\u5355\u5206\u652f",level:2},{value:"\u53cc\u5206\u652f",id:"\u53cc\u5206\u652f",level:2},{value:"\u591a\u5206\u652f",id:"\u591a\u5206\u652f",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"if\u8bed\u53e5",children:"If\u8bed\u53e5"})}),"\n",(0,r.jsx)(n.p,{children:"If\u8bed\u53e5\u6709\u4e09\u79cd\u4f7f\u7528:\u5355\u5206\u652f,\u53cc\u5206\u652f,\u591a\u5206\u652f"}),"\n",(0,r.jsx)(n.h2,{id:"\u5355\u5206\u652f",children:"\u5355\u5206\u652f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"if (\u6761\u4ef6) {\n  \u6761\u4ef6\u4e3a\u771f(\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6761\u4ef6\u4e3atrue\u65f6,\u6267\u884c\u5927\u62ec\u53f7\u5185\u7684\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// \u6761\u4ef6\u4e3atrue,\u6267\u884c\u5927\u62ec\u53f7\u5185\u4ee3\u7801\nif (2 === 2) {\n  console.log('\u6267\u884c')\n}\n// \u6761\u4ef6\u4e3afalse,\u4e0d\u6267\u884c\u5927\u62ec\u53f7\u5185\u4ee3\u7801\nif (2 === '2') {\n  console.log('\u6267\u884c')\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6761\u4ef6\u8fd4\u56de\u7684\u7ed3\u679c\u5982\u679c\u4e0d\u662f\u5e03\u5c14\u578b,\u4f1a\u53d1\u751f\u9690\u5f0f\u8f6c\u6362\u4e3a\u5e03\u5c14\u578b(0\u548c\u7a7a\u5b57\u7b26\u4e32\u4f1a\u8f6c\u4e3afalse,\u5176\u4ed6\u90fd\u662ftrue)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// \u6761\u4ef6\u4e3a0,\u9690\u5f0f\u8f6c\u6362\u4e3afalse,\u4e0d\u6267\u884c\u5927\u62ec\u53f7\u5185\u4ee3\u7801\nif (0) {\n  console.log('\u6267\u884c')\n}\n// \u6761\u4ef6\u4e3a\u7a7a\u5b57\u7b26\u4e32,\u9690\u5f0f\u8f6c\u6362\u4e3afalse,\u4e0d\u6267\u884c\u5927\u62ec\u53f7\u5185\u4ee3\u7801\nif ('') {\n  console.log('\u6267\u884c')\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u5927\u62ec\u53f7\u5185\u53ea\u6709\u4e00\u4e2a\u8bed\u53e5,\u5927\u62ec\u53f7\u53ef\u4ee5\u7701\u7565,\u4f46\u662f\u4e0d\u63a8\u8350"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// \u53ea\u6709\u4e00\u4e2a\u8bed\u53e5,\u5927\u62ec\u53f7\u53ef\u4ee5\u7701\u7565\nif (1 == 1) console.log('\u6267\u884c')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53cc\u5206\u652f",children:"\u53cc\u5206\u652f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"if (\u6761\u4ef6) {\n  \u6761\u4ef6\u4e3a\u771f(\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n} else {\n  \u6761\u4ef6\u4e3a\u5047(\u4e0d\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"if (2 === 2) {\n  console.log('\u771f')\n} else {\n  console.log('\u5047')\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u591a\u5206\u652f",children:"\u591a\u5206\u652f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"if (\u6761\u4ef61) {\n  \u4ee3\u78011\n  \u6761\u4ef61\u4e3a\u771f(\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n} else if (\u6761\u4ef62) {\n  \u4ee3\u78012\n  \u6761\u4ef62\u4e3a\u771f(\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n} else if (\u6761\u4ef63) {\n  \u4ee3\u78013\n  \u6761\u4ef63\u4e3a\u771f(\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n} else {\n  \u4ee3\u78014\n  \u4ee5\u4e0a\u6761\u4ef6\u90fd\u4e3a\u5047(\u90fd\u4e0d\u6ee1\u8db3\u6761\u4ef6)\u540e\u6267\u884c\u7684\u4ee3\u7801\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5148\u5224\u65ad\u6761\u4ef61,\u5982\u679c\u6ee1\u8db3\u6761\u4ef61\u5c31\u6267\u884c\u4ee3\u78011,\u5176\u4ed6\u4e0d\u6267\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef61,\u5219\u5411\u4e0b\u5224\u65ad\u6761\u4ef62,\u6ee1\u8db3\u6761\u4ef62\u5c31\u6267\u884c\u4ee3\u78012,\u5176\u4ed6\u4e0d\u6267\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef62,\u5219\u5411\u4e0b\u5224\u65ad\u6761\u4ef63,\u6ee1\u8db3\u6761\u4ef63\u5c31\u6267\u884c\u4ee3\u78013,\u5176\u4ed6\u4e0d\u6267\u884c"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u90fd\u4e0d\u6ee1\u8db3,\u5219\u6267\u884c\u4ee3\u78014"}),"\n",(0,r.jsx)(n.p,{children:"\u591a\u5206\u652f\u6bcf\u6b21\u53ea\u4f1a\u6709\u4e00\u6bb5\u4ee3\u7801\u88ab\u6267\u884c"}),"\n",(0,r.jsxs)(n.p,{children:["\u7406\u8bba\u4e0a",(0,r.jsx)(n.code,{children:"else if"}),"\u53ef\u4ee5\u5199\u65e0\u6570\u4e2a,\u8fd9\u91cc\u4e3a\u4e86\u6f14\u793a,\u53ea\u5199\u4e863\u4e2a"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97525:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(30758);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);