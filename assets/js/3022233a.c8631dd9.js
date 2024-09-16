"use strict";(self.webpackChunkelake_docs=self.webpackChunkelake_docs||[]).push([[7519],{55010:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=i(86070),l=i(97525);const t={id:"Git",title:"Git"},r="Git",o={id:"Tutorials/ProgrammingLanguage/Git/Git",title:"Git",description:"\u672c\u6587\u6863\u7f16\u5199\u4e8e 2024-01-16",source:"@site/docs/Tutorials/ProgrammingLanguage/Git/Git.md",sourceDirName:"Tutorials/ProgrammingLanguage/Git",slug:"/Tutorials/ProgrammingLanguage/Git/",permalink:"/docs/Tutorials/ProgrammingLanguage/Git/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"Git",title:"Git"},sidebar:"Git",next:{title:"\u4e0b\u8f7d\u5b89\u88c5",permalink:"/docs/Tutorials/ProgrammingLanguage/Git/DownloadAndInstall"}},c={},a=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u7248\u672c\u63a7\u5236\u5668\u7684\u65b9\u5f0f",id:"\u7248\u672c\u63a7\u5236\u5668\u7684\u65b9\u5f0f",level:2}];function d(n){const e={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u672c\u6587\u6863\u7f16\u5199\u4e8e 2024-01-16"}),"\n"]}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"git",children:"Git"})}),"\n",(0,s.jsx)(e.p,{children:"Git\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf,\u53ef\u4ee5\u6709\u6548,\u9ad8\u901f\u5730\u5904\u7406\u4ece\u5f88\u5c0f\u5230\u975e\u5e38\u5927\u7684\u9879\u76ee\u7248\u672c\u7ba1\u7406.\u4e5f\u662fLinus Torvalds\u4e3a\u4e86\u5e2e\u52a9\u7ba1\u7406Linux\u5185\u6838\u5f00\u53d1\u800c\u5f00\u53d1\u7684\u4e00\u4e2a\u5f00\u653e\u6e90\u7801\u7684\u7248\u672c\u63a7\u5236\u8f6f\u4ef6."}),"\n",(0,s.jsx)(e.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5907\u4efd","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c0f\u660e\u8d1f\u8d23\u7684\u6a21\u5757\u5c31\u8981\u5b8c\u6210\u4e86,\u5c31\u5728\u5373\u5c06Release\u4e4b\u524d\u7684\u4e00\u77ac\u95f4,\u7535\u8111\u7a81\u7136\u84dd\u5c4f,\u786c\u76d8\u5149\u8363\u727a\u7272!\u51e0\u4e2a\u6708\u6765\u7684\u52aa\u529b\u4ed8\u4e4b\u4e1c\u6d41."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4ee3\u7801\u8fd8\u539f","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u8fd9\u4e2a\u9879\u76ee\u4e2d\u9700\u8981\u4e00\u4e2a\u5f88\u590d\u6742\u7684\u529f\u80fd,\u8001\u738b\u6478\u7d22\u4e86\u4e00\u4e2a\u661f\u671f\u7ec8\u4e8e\u6709\u7709\u76ee\u4e86,\u53ef\u662f\u8fd9\u88ab\u6539\u5f97\u9762\u76ee\u5168\u975e\u7684\u4ee3\u7801\u5df2\u7ecf\u56de\u4e0d\u5230\u4ece\u524d\u4e86.\u4ec0\u4e48\u5730\u65b9\u80fd\u4e70\u5230\u54c6\u5566A\u68a6\u7684\u65f6\u5149\u673a\u554a?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u534f\u540c\u5f00\u53d1","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c0f\u521a\u548c\u5c0f\u5f3a\u5148\u540e\u4ece\u6587\u4ef6\u670d\u52a1\u5668\u4e0a\u4e0b\u8f7d\u4e86\u540c\u4e00\u4e2a\u6587\u4ef6: Analysis.java .\u5c0f\u521a\u5728 Analysis.java \u6587\u4ef6\u4e2d\u7684\u7b2c30\u884c\u58f0\u660e\u4e86\u4e00\u4e2a\u65b9\u6cd5,\u53eb count () ,\u5148\u4fdd\u5b58\u5230\u4e86\u6587\u4ef6\u670d\u52a1\u5668\u4e0a.\u5c0f\u5f3a\u5728 Analysis.java \u6587\u4ef6\u4e2d\u7684\u7b2c50\u884c\u58f0\u660e\u4e86\u4e00\u4e2a\u65b9\u6cd5,\u53eb sum () ,\u4e5f\u968f\u540e\u4fdd\u5b58\u5230\u4e86\u6587\u4ef6\u670d\u52a1\u5668\u4e0a,\u4e8e\u662f,count () \u65b9\u6cd5\u5c31\u53ea\u5b58\u5728\u4e8e\u5c0f\u521a\u7684\u8bb0\u5fc6\u4e2d\u4e86."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u8ffd\u6eaf\u95ee\u9898","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u8001\u738b\u662f\u53e6\u4e00\u4f4d\u9879\u76ee\u7ecf\u7406,\u6bcf\u6b21\u56e0\u4e3a\u9879\u76ee\u8fdb\u5ea6\u6328\u9a82\u4e4b\u540e,\u4ed6\u90fd\u4e0d\u77e5\u9053\u8be5\u6263\u54ea\u4e2a\u7a0b\u5e8f\u5458\u7684\u5de5\u8d44!\u5c31\u62ff\u8fd9\u6b21\u6765\u8bf4\u5427,\u6709\u4e2aBug\u8c03\u8bd5\u4e8630\u591a\u4e2a\u5c0f\u65f6\u624d\u77e5\u9053\u662f\u56e0\u4e3a\u76f8\u5173\u5c5e\u6027\u6ca1\u6709\u5728\u5e94\u7528\u521d\u59cb\u5316\u65f6\u8d4b\u503c!\u53ef\u662f\u4e8c\u80d6,\u738b\u4e1c,\u5218\u6d41\u548c\u6b63\u7ecf\u725b\u90fd\u4e0d\u627f\u8ba4\u662f\u81ea\u5df1\u5e72\u7684."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7248\u672c\u63a7\u5236\u5668\u7684\u65b9\u5f0f",children:"\u7248\u672c\u63a7\u5236\u5668\u7684\u65b9\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u6559\u7a0b\u4e3a\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177: Git"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177,\u7248\u672c\u5e93\u662f\u96c6\u4e2d\u5b58\u653e\u5728\u4e2d\u592e\u670d\u52a1\u5668\u7684,team\u91cc\u6bcf\u4e2a\u4ebawork\u65f6\u4ece\u4e2d\u592e\u670d\u52a1\u5668\u4e0b\u8f7d\u4ee3\u7801,\u662f\u5fc5\u987b\u8054\u7f51\u624d\u80fd\u5de5\u4f5c,\u5c40\u57df\u7f51\u6216\u4e92\u8054\u7f51.\u4e2a\u4eba\u4fee\u6539\u540e\u7136\u540e\u63d0\u4ea4\u5230\u4e2d\u592e\u7248\u672c\u5e93."}),"\n",(0,s.jsxs)(e.li,{children:["\u4e3e\u4f8b",":SVN","\u548cCVS"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u6ca1\u6709\u201c\u4e2d\u592e\u670d\u52a1\u5668\u201d,\u6bcf\u4e2a\u4eba\u7684\u7535\u8111\u4e0a\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u7248\u672c\u5e93,\u8fd9\u6837\u5de5\u4f5c\u7684\u65f6\u5019,\u65e0\u9700\u8981\u8054\u7f51\u4e86,\u56e0\u4e3a\u7248\u672c\u5e93\u5c31\u5728\u4f60\u81ea\u5df1\u7684\u7535\u8111\u4e0a.\u591a\u4eba\u534f\u4f5c\u53ea\u9700\u8981\u5404\u81ea\u7684\u4fee\u6539\u63a8\u9001\u7ed9\u5bf9\u65b9,\u5c31\u80fd\u4e92\u76f8\u770b\u5230\u5bf9\u65b9\u7684\u4fee\u6539\u4e86.","\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e3e\u4f8b",":Git"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},97525:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>o});var s=i(30758);const l={},t=s.createContext(l);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);