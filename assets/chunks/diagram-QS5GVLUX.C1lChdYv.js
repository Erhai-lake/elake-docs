import{p as w}from"./chunk-OQCM5LHU.DBf6NnL-.js";import{F as B,s as S,g as F,q as z,r as P,b as W,c as T,_ as n,l as v,G as x,H as D,t as _,K as A,k as E}from"../app.BvxD0psu.js";import{p as N}from"./gitGraph-YCYPL57B.DfCFPYEd.js";import"./framework.BPErc-vJ.js";import"./theme.DJ0GKk6K.js";import"./baseUniq.HZPL4mbx.js";import"./isUndefined.BcqvCWMy.js";import"./basePickBy.B1LOLv-M.js";import"./min.BJfZ6kJ6.js";import"./clone.Cg4NGqXY.js";var C={packet:[]},h=structuredClone(C),L=B.packet,Y=n(()=>{const t=x({...L,...D().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),G=n(()=>h.packet,"getPacket"),H=n(t=>{t.length>0&&h.packet.push(t)},"pushWord"),I=n(()=>{_(),h=structuredClone(C)},"clear"),u={pushWord:H,getPacket:G,getConfig:Y,clear:I,setAccTitle:S,getAccTitle:F,setDiagramTitle:z,getDiagramTitle:P,getAccDescription:W,setAccDescription:T},K=1e4,M=n(t=>{w(t,u);let e=-1,o=[],s=1;const{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,v.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=i+1&&u.getPacket().length<K;){const[b,c]=O({start:a,end:r,label:p},s,i);if(o.push(b),b.end+1===s*i&&(u.pushWord(o),o=[],s++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),O=n((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),q={parse:n(async t=>{const e=await N("packet",t);v.debug(e),M(e)},"parse")},R=n((t,e,o,s)=>{const i=s.db,a=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=a,m=i.getPacket(),l=i.getDiagramTitle(),g=r+p,d=g*(m.length+1)-(l?0:r),k=b*c+2,f=A(e);f.attr("viewbox",`0 0 ${k} ${d}`),E(f,d,k,a.useMaxWidth);for(const[$,y]of m.entries())U(f,y,$,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=n((t,e,o,{rowHeight:s,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),m=o*(s+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",m).attr("width",d).attr("height",s).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",m+s/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!b)continue;const k=l.end===l.start,f=m-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=n(({packet:t}={})=>{const e=x(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),st={parser:q,db:u,renderer:X,styles:J};export{st as diagram};