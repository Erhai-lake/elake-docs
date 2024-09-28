import{m as tt,c as et,i as it,a as nt,p as st}from"./chunk-UGV5ZQQN.DrKffZUE.js";import{c as at,a as G,s as rt}from"./chunk-BAVOGKFW.Bd-f_MRp.js";import{c as lt,u as ot,s as ct,i as dt,p as M,a as F,b as R}from"./chunk-YWFND7JV.DACBPeS2.js";import{_ as g,l as s,d as m,j as T,u as ft,aa as ut,ab as $,ac as H,ad as z,v as ht,e as W,ae as J,A as B,D as gt}from"../app.BgEExVjU.js";import{G as q}from"./graph.OS1LgaGz.js";import{l as wt}from"./layout.DpZ88cLO.js";import{w as S}from"./json.HD6m5PcI.js";import"./framework.BPErc-vJ.js";import"./theme.BRWr2ncu.js";import"./baseUniq.DP50JYdM.js";import"./isUndefined.CJrybPlc.js";import"./min.CAze_cLG.js";import"./basePickBy.CYvyGO6s.js";import"./pick.Cv19epZu.js";import"./clone.CWmSEJEc.js";var u={},x={},V={},yt=g(()=>{x={},V={},u={}},"clear"),L=g((e,t)=>(s.trace("In isDescendant",t," ",e," = ",x[t].includes(e)),!!x[t].includes(e)),"isDescendant"),bt=g((e,t)=>(s.info("Descendants of ",t," is ",x[t]),s.info("Edge is ",e),e.v===t||e.w===t?!1:x[t]?x[t].includes(e.v)||L(e.v,t)||L(e.w,t)||x[t].includes(e.w):(s.debug("Tilt, ",t,",not in descendants"),!1)),"edgeInCluster"),j=g((e,t,i,l)=>{s.warn("Copying children of ",e,"root",l,"data",t.node(e),l);const n=t.children(e)||[];e!==l&&n.push(e),s.warn("Copying (nodes) clusterId",e,"nodes",n),n.forEach(a=>{if(t.children(a).length>0)j(a,t,i,l);else{const r=t.node(a);s.info("cp ",a," to ",l," with parent ",e),i.setNode(a,r),l!==t.parent(a)&&(s.warn("Setting parent",a,t.parent(a)),i.setParent(a,t.parent(a))),e!==l&&a!==e?(s.debug("Setting parent",a,e),i.setParent(a,e)):(s.info("In copy ",e,"root",l,"data",t.node(e),l),s.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==l,"node!==clusterId",a!==e));const f=t.edges(a);s.debug("Copying Edges",f),f.forEach(d=>{s.info("Edge",d);const h=t.edge(d.v,d.w,d.name);s.info("Edge data",h,l);try{bt(d,l)?(s.info("Copying as ",d.v,d.w,h,d.name),i.setEdge(d.v,d.w,h,d.name),s.info("newGraph edges ",i.edges(),i.edge(i.edges()[0]))):s.info("Skipping copy of edge ",d.v,"-->",d.w," rootId: ",l," clusterId:",e)}catch(b){s.error(b)}})}s.debug("Removing node",a),t.removeNode(a)})},"copy"),K=g((e,t)=>{const i=t.children(e);let l=[...i];for(const n of i)V[n]=e,l=[...l,...K(n,t)];return l},"extractDescendants"),k=g((e,t)=>{s.trace("Searching",e);const i=t.children(e);if(s.trace("Searching children of id ",e,i),i.length<1)return s.trace("This is a valid node",e),e;for(const l of i){const n=k(l,t);if(n)return s.trace("Found replacement for",e," => ",n),n}},"findNonClusterChild"),X=g(e=>!u[e]||!u[e].externalConnections?e:u[e]?u[e].id:e,"getAnchorId"),mt=g((e,t)=>{if(!e||t>10){s.debug("Opting out, no graph ");return}else s.debug("Opting in, graph ");e.nodes().forEach(function(i){e.children(i).length>0&&(s.warn("Cluster identified",i," Replacement id in edges: ",k(i,e)),x[i]=K(i,e),u[i]={id:k(i,e),clusterData:e.node(i)})}),e.nodes().forEach(function(i){const l=e.children(i),n=e.edges();l.length>0?(s.debug("Cluster identified",i,x),n.forEach(a=>{if(a.v!==i&&a.w!==i){const r=L(a.v,i),f=L(a.w,i);r^f&&(s.warn("Edge: ",a," leaves cluster ",i),s.warn("Descendants of XXX ",i,": ",x[i]),u[i].externalConnections=!0)}})):s.debug("Not a cluster ",i,x)});for(let i of Object.keys(u)){const l=u[i].id,n=e.parent(l);n!==i&&u[n]&&!u[n].externalConnections&&(u[i].id=n)}e.edges().forEach(function(i){const l=e.edge(i);s.warn("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(i)),s.warn("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(e.edge(i)));let n=i.v,a=i.w;if(s.warn("Fix XXX",u,"ids:",i.v,i.w,"Translating: ",u[i.v]," --- ",u[i.w]),u[i.v]&&u[i.w]&&u[i.v]===u[i.w]){s.warn("Fixing and trixing link to self - removing XXX",i.v,i.w,i.name),s.warn("Fixing and trixing - removing XXX",i.v,i.w,i.name),n=X(i.v),a=X(i.w),e.removeEdge(i.v,i.w,i.name);const r=i.w+"---"+i.v;e.setNode(r,{domId:r,id:r,labelStyle:"",labelText:l.label,padding:0,shape:"labelRect",style:""});const f=structuredClone(l),d=structuredClone(l);f.label="",f.arrowTypeEnd="none",d.label="",f.fromCluster=i.v,d.toCluster=i.v,e.setEdge(n,r,f,i.name+"-cyclic-special"),e.setEdge(r,a,d,i.name+"-cyclic-special")}else if(u[i.v]||u[i.w]){if(s.warn("Fixing and trixing - removing XXX",i.v,i.w,i.name),n=X(i.v),a=X(i.w),e.removeEdge(i.v,i.w,i.name),n!==i.v){const r=e.parent(n);u[r].externalConnections=!0,l.fromCluster=i.v}if(a!==i.w){const r=e.parent(a);u[r].externalConnections=!0,l.toCluster=i.w}s.warn("Fix Replacing with XXX",n,a,i.name),e.setEdge(n,a,l,i.name)}}),s.warn("Adjusted Graph",S(e)),Q(e,0),s.trace(u)},"adjustClustersAndEdges"),Q=g((e,t)=>{var n,a;if(s.warn("extractor - ",t,S(e),e.children("D")),t>10){s.error("Bailing out");return}let i=e.nodes(),l=!1;for(const r of i){const f=e.children(r);l=l||f.length>0}if(!l){s.debug("Done, no node has children",e.nodes());return}s.debug("Nodes = ",i,t);for(const r of i)if(s.debug("Extracting node",r,u,u[r]&&!u[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!u[r])s.debug("Not a cluster",r,t);else if(!u[r].externalConnections&&e.children(r)&&e.children(r).length>0){s.warn("Cluster without external connections, without a parent and with children",r,t);let d=e.graph().rankdir==="TB"?"LR":"TB";(a=(n=u[r])==null?void 0:n.clusterData)!=null&&a.dir&&(d=u[r].clusterData.dir,s.warn("Fixing dir",u[r].clusterData.dir,d));const h=new q({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});s.warn("Old graph before copy",S(e)),j(r,e,h,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:u[r].clusterData,labelText:u[r].labelText,graph:h}),s.warn("New graph after copy node: (",r,")",S(h)),s.debug("Old graph after copy",S(e))}else s.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!u[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),s.debug(u);i=e.nodes(),s.warn("New list of nodes",i);for(const r of i){const f=e.node(r);s.warn(" Now next level",r,f),f.clusterNode&&Q(f.graph,t+1)}},"extractor"),U=g((e,t)=>{if(t.length===0)return[];let i=Object.assign(t);return t.forEach(l=>{const n=e.children(l),a=U(e,n);i=[...i,...a]}),i},"sorter"),pt=g(e=>U(e,e.children()),"sortNodesByHierarchy"),vt=g((e,t)=>{s.info("Creating subgraph rect for ",t.id,t);const i=m(),l=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),n=l.insert("rect",":first-child"),a=B(i.flowchart.htmlLabels),r=l.insert("g").attr("class","cluster-label"),f=t.labelType==="markdown"?gt(r,t.labelText,{style:t.labelStyle,useHtmlLabels:a},i):r.node().appendChild(F(t.labelText,t.labelStyle,void 0,!0));let d=f.getBBox();if(B(i.flowchart.htmlLabels)){const c=f.children[0],o=T(f);d=c.getBoundingClientRect(),o.attr("width",d.width),o.attr("height",d.height)}const h=0*t.padding,b=h/2,y=t.width<=d.width+h?d.width+h:t.width;t.width<=d.width+h?t.diff=(d.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,s.trace("Data ",t,JSON.stringify(t)),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-y/2).attr("y",t.y-t.height/2-b).attr("width",y).attr("height",t.height+h);const{subGraphTitleTopMargin:p}=J(i);a?r.attr("transform",`translate(${t.x-d.width/2}, ${t.y-t.height/2+p})`):r.attr("transform",`translate(${t.x}, ${t.y-t.height/2+p})`);const w=n.node().getBBox();return t.width=w.width,t.height=w.height,t.intersect=function(c){return R(t,c)},l},"rect"),xt=g((e,t)=>{const i=e.insert("g").attr("class","note-cluster").attr("id",t.id),l=i.insert("rect",":first-child"),n=0*t.padding,a=n/2;l.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+n).attr("height",t.height+n).attr("fill","none");const r=l.node().getBBox();return t.width=r.width,t.height=r.height,t.intersect=function(f){return R(t,f)},i},"noteGroup"),St=g((e,t)=>{const i=m(),l=e.insert("g").attr("class",t.classes).attr("id",t.id),n=l.insert("rect",":first-child"),a=l.insert("g").attr("class","cluster-label"),r=l.append("rect"),f=a.node().appendChild(F(t.labelText,t.labelStyle,void 0,!0));let d=f.getBBox();if(B(i.flowchart.htmlLabels)){const c=f.children[0],o=T(f);d=c.getBoundingClientRect(),o.attr("width",d.width),o.attr("height",d.height)}d=f.getBBox();const h=0*t.padding,b=h/2,y=t.width<=d.width+t.padding?d.width+t.padding:t.width;t.width<=d.width+t.padding?t.diff=(d.width+t.padding*0-t.width)/2:t.diff=-t.padding/2,n.attr("class","outer").attr("x",t.x-y/2-b).attr("y",t.y-t.height/2-b).attr("width",y+h).attr("height",t.height+h),r.attr("class","inner").attr("x",t.x-y/2-b).attr("y",t.y-t.height/2-b+d.height-1).attr("width",y+h).attr("height",t.height+h-d.height-3);const{subGraphTitleTopMargin:p}=J(i);a.attr("transform",`translate(${t.x-d.width/2}, ${t.y-t.height/2-t.padding/3+(B(i.flowchart.htmlLabels)?5:3)+p})`);const w=n.node().getBBox();return t.height=w.height,t.intersect=function(c){return R(t,c)},l},"roundedWithTitle"),Nt=g((e,t)=>{const i=e.insert("g").attr("class",t.classes).attr("id",t.id),l=i.insert("rect",":first-child"),n=0*t.padding,a=n/2;l.attr("class","divider").attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2).attr("width",t.width+n).attr("height",t.height+n);const r=l.node().getBBox();return t.width=r.width,t.height=r.height,t.diff=-t.padding/2,t.intersect=function(f){return R(t,f)},i},"divider"),Et={rect:vt,roundedWithTitle:St,noteGroup:xt,divider:Nt},Y={},Ct=g((e,t)=>{s.trace("Inserting cluster");const i=t.shape||"rect";Y[t.id]=Et[i](e,t)},"insertCluster"),Tt=g(()=>{Y={}},"clear"),Z=g(async(e,t,i,l,n,a)=>{s.info("Graph in recursive render: XXX",S(t),n);const r=t.graph().rankdir;s.trace("Dir in recursive render - dir:",r);const f=e.insert("g").attr("class","root");t.nodes()?s.info("Recursive render XXX",t.nodes()):s.info("No nodes found for",t),t.edges().length>0&&s.trace("Recursive edges",t.edge(t.edges()[0]));const d=f.insert("g").attr("class","clusters"),h=f.insert("g").attr("class","edgePaths"),b=f.insert("g").attr("class","edgeLabels"),y=f.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(c){const o=t.node(c);if(n!==void 0){const v=JSON.parse(JSON.stringify(n.clusterData));s.info("Setting data for cluster XXX (",c,") ",v,n),t.setNode(n.id,v),t.parent(c)||(s.trace("Setting parent",c,n.id),t.setParent(c,n.id,v))}if(s.info("(Insert) Node XXX"+c+": "+JSON.stringify(t.node(c))),o!=null&&o.clusterNode){s.info("Cluster identified",c,o.width,t.node(c));const{ranksep:v,nodesep:E}=t.graph();o.graph.setGraph({...o.graph.graph(),ranksep:v,nodesep:E});const D=await Z(y,o.graph,i,l,t.node(c),a),N=D.elem;ot(o,N),o.diff=D.diff||0,s.info("Node bounds (abc123)",c,o,o.width,o.x,o.y),ct(N,o),s.warn("Recursive render complete ",N,o)}else t.children(c).length>0?(s.info("Cluster - the non recursive path XXX",c,o.id,o,t),s.info(k(o.id,t)),u[o.id]={id:k(o.id,t),node:o}):(s.info("Node - the non recursive path",c,o.id,o),await dt(y,t.node(c),r))})),t.edges().forEach(async function(c){const o=t.edge(c.v,c.w,c.name);s.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c)),s.info("Edge "+c.v+" -> "+c.w+": ",c," ",JSON.stringify(t.edge(c))),s.info("Fix",u,"ids:",c.v,c.w,"Translating: ",u[c.v],u[c.w]),await it(b,o)}),t.edges().forEach(function(c){s.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(c))}),s.info("Graph before layout:",JSON.stringify(S(t))),s.info("#############################################"),s.info("###                Layout                 ###"),s.info("#############################################"),s.info(t),wt(t),s.info("Graph after layout:",JSON.stringify(S(t)));let p=0;const{subGraphTitleTotalMargin:w}=J(a);return pt(t).forEach(function(c){const o=t.node(c);s.info("Position "+c+": "+JSON.stringify(t.node(c))),s.info("Position "+c+": ("+o.x,","+o.y,") width: ",o.width," height: ",o.height),o!=null&&o.clusterNode?(o.y+=w,M(o)):t.children(c).length>0?(o.height+=w,Ct(d,o),u[o.id].node=o):(o.y+=w/2,M(o))}),t.edges().forEach(function(c){const o=t.edge(c);s.info("Edge "+c.v+" -> "+c.w+": "+JSON.stringify(o),o),o.points.forEach(E=>E.y+=w/2);const v=nt(h,c,o,u,i,t,l);st(o,v)}),t.nodes().forEach(function(c){const o=t.node(c);s.info(c,o.type,o.diff),o.type==="group"&&(p=o.diff)}),{elem:f,diff:p}},"recursiveRender"),kt=g(async(e,t,i,l,n)=>{tt(e,i,l,n),lt(),et(),Tt(),yt(),s.warn("Graph at first:",JSON.stringify(S(t))),mt(t),s.warn("Graph after:",JSON.stringify(S(t)));const a=m();await Z(e,t,l,n,void 0,a)},"render"),O=g(e=>W.sanitizeText(e,m()),"sanitizeText"),_={dividerMargin:10,padding:5,textHeight:10,curve:void 0},Dt=g(function(e,t,i,l){s.info("keys:",[...e.keys()]),s.info(e),e.forEach(function(n){var f,d;const r={shape:"rect",id:n.id,domId:n.domId,labelText:O(n.id),labelStyle:"",style:"fill: none; stroke: black",padding:((f=m().flowchart)==null?void 0:f.padding)??((d=m().class)==null?void 0:d.padding)};t.setNode(n.id,r),I(n.classes,t,i,l,n.id),s.info("setNode",r)})},"addNamespaces"),I=g(function(e,t,i,l,n){s.info("keys:",[...e.keys()]),s.info(e),[...e.values()].filter(a=>a.parent===n).forEach(function(a){var p,w;const r=a.cssClasses.join(" "),f=$(a.styles),d=a.label??a.id,h=0,y={labelStyle:f.labelStyle,shape:"class_box",labelText:O(d),classData:a,rx:h,ry:h,class:r,style:f.style,id:a.id,domId:a.domId,tooltip:l.db.getTooltip(a.id,n)||"",haveCallback:a.haveCallback,link:a.link,width:a.type==="group"?500:void 0,type:a.type,padding:((p=m().flowchart)==null?void 0:p.padding)??((w=m().class)==null?void 0:w.padding)};t.setNode(a.id,y),n&&t.setParent(a.id,n),s.info("setNode",y)})},"addClasses"),Xt=g(function(e,t,i,l){s.info(e),e.forEach(function(n,a){var o,v;const r=n,f="",d={labelStyle:"",style:""},h=r.text,b=0,p={labelStyle:d.labelStyle,shape:"note",labelText:O(h),noteData:r,rx:b,ry:b,class:f,style:d.style,id:r.id,domId:r.id,tooltip:"",type:"note",padding:((o=m().flowchart)==null?void 0:o.padding)??((v=m().class)==null?void 0:v.padding)};if(t.setNode(r.id,p),s.info("setNode",p),!r.class||!l.has(r.class))return;const w=i+a,c={id:`edgeNote${w}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:H(_.curve,z)};t.setEdge(r.id,r.class,c,w)})},"addNotes"),Bt=g(function(e,t){const i=m().flowchart;let l=0;e.forEach(function(n){var r;l++;const a={classes:"relation",pattern:n.relation.lineType==1?"dashed":"solid",id:ht(n.id1,n.id2,{prefix:"id",counter:l}),arrowhead:n.type==="arrow_open"?"none":"normal",startLabelRight:n.relationTitle1==="none"?"":n.relationTitle1,endLabelLeft:n.relationTitle2==="none"?"":n.relationTitle2,arrowTypeStart:A(n.relation.type1),arrowTypeEnd:A(n.relation.type2),style:"fill:none",labelStyle:"",curve:H(i==null?void 0:i.curve,z)};if(s.info(a,n),n.style!==void 0){const f=$(n.style);a.style=f.style,a.labelStyle=f.labelStyle}n.text=n.title,n.text===void 0?n.style!==void 0&&(a.arrowheadStyle="fill: #333"):(a.arrowheadStyle="fill: #333",a.labelpos="c",((r=m().flowchart)==null?void 0:r.htmlLabels)??m().htmlLabels?(a.labelType="html",a.label='<span class="edgeLabel">'+n.text+"</span>"):(a.labelType="text",a.label=n.text.replace(W.lineBreakRegex,`
`),n.style===void 0&&(a.style=a.style||"stroke: #333; stroke-width: 1.5px;fill:none"),a.labelStyle=a.labelStyle.replace("color:","fill:"))),t.setEdge(n.id1,n.id2,a,l)})},"addRelations"),Lt=g(function(e){_={..._,...e}},"setConf"),Rt=g(async function(e,t,i,l){s.info("Drawing class - ",t);const n=m().flowchart??m().class,a=m().securityLevel;s.info("config:",n);const r=(n==null?void 0:n.nodeSpacing)??50,f=(n==null?void 0:n.rankSpacing)??50,d=new q({multigraph:!0,compound:!0}).setGraph({rankdir:l.db.getDirection(),nodesep:r,ranksep:f,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),h=l.db.getNamespaces(),b=l.db.getClasses(),y=l.db.getRelations(),p=l.db.getNotes();s.info(y),Dt(h,d,t,l),I(b,d,t,l),Bt(y,d),Xt(p,d,y.length+1,b);let w;a==="sandbox"&&(w=T("#i"+t));const c=a==="sandbox"?T(w.nodes()[0].contentDocument.body):T("body"),o=c.select(`[id="${t}"]`),v=c.select("#"+t+" g");if(await kt(v,d,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),ft.insertTitle(o,"classTitleText",(n==null?void 0:n.titleTopMargin)??5,l.db.getDiagramTitle()),ut(d,o,n==null?void 0:n.diagramPadding,n==null?void 0:n.useMaxWidth),!(n!=null&&n.htmlLabels)){const E=a==="sandbox"?w.nodes()[0].contentDocument:document,D=E.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const N of D){const P=N.getBBox(),C=E.createElementNS("http://www.w3.org/2000/svg","rect");C.setAttribute("rx",0),C.setAttribute("ry",0),C.setAttribute("width",P.width),C.setAttribute("height",P.height),N.insertBefore(C,N.firstChild)}}},"draw");function A(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}g(A,"getArrowMarker");var _t={setConf:Lt,draw:Rt},Qt={parser:at,db:G,renderer:_t,styles:rt,init:g(e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,G.clear()},"init")};export{Qt as diagram};
