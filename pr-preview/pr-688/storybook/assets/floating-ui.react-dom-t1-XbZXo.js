import{r as C}from"./index-DysCNOs_.js";import{r as Yt}from"./index-DxCGxluL.js";function ut(){return typeof window<"u"}function et(t){return Ft(t)?(t.nodeName||"").toLowerCase():"#document"}function W(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(Ft(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ft(t){return ut()?t instanceof Node||t instanceof W(t).Node:!1}function _(t){return ut()?t instanceof Element||t instanceof W(t).Element:!1}function V(t){return ut()?t instanceof HTMLElement||t instanceof W(t).HTMLElement:!1}function Ot(t){return!ut()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof W(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=N(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Xt(t){return["table","td","th"].includes(et(t))}function dt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function yt(t){const e=vt(),n=_(t)?N(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function qt(t){let e=X(t);for(;V(e)&&!Z(e);){if(yt(e))return e;if(dt(e))return null;e=X(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Z(t){return["html","body","#document"].includes(et(t))}function N(t){return W(t).getComputedStyle(t)}function mt(t){return _(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function X(t){if(et(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ot(t)&&t.host||j(t);return Ot(e)?e.host:e}function $t(t){const e=X(t);return Z(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&ot(e)?e:$t(e)}function nt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$t(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=W(i);if(s){const c=pt(r);return e.concat(r,r.visualViewport||[],ot(i)?i:[],c&&n?nt(c):[])}return e.concat(i,nt(i,[],n))}function pt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}const Bt=["top","right","bottom","left"],Pt=["start","end"],Et=Bt.reduce((t,e)=>t.concat(e,e+"-"+Pt[0],e+"-"+Pt[1]),[]),q=Math.min,B=Math.max,st=Math.round,it=Math.floor,U=t=>({x:t,y:t}),Ut={left:"right",right:"left",bottom:"top",top:"bottom"},Kt={start:"end",end:"start"};function wt(t,e,n){return B(t,q(e,n))}function K(t,e){return typeof t=="function"?t(e):t}function z(t){return t.split("-")[0]}function H(t){return t.split("-")[1]}function Wt(t){return t==="x"?"y":"x"}function bt(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(z(t))?"y":"x"}function Rt(t){return Wt(G(t))}function Ht(t,e,n){n===void 0&&(n=!1);const o=H(t),i=Rt(t),s=bt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=lt(r)),[r,lt(r)]}function Gt(t){const e=lt(t);return[ct(t),e,ct(e)]}function ct(t){return t.replace(/start|end/g,e=>Kt[e])}function Jt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Qt(t,e,n,o){const i=H(t);let s=Jt(z(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(ct)))),s}function lt(t){return t.replace(/left|right|bottom|top/g,e=>Ut[e])}function Zt(t){return{top:0,right:0,bottom:0,left:0,...t}}function _t(t){return typeof t!="number"?Zt(t):{top:t,right:t,bottom:t,left:t}}function ft(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function St(t,e,n){let{reference:o,floating:i}=t;const s=G(e),r=Rt(e),c=bt(r),f=z(e),l=s==="y",a=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let u;switch(f){case"top":u={x:a,y:o.y-i.height};break;case"bottom":u={x:a,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-i.width,y:d};break;default:u={x:o.x,y:o.y}}switch(H(e)){case"start":u[r]-=m*(n&&l?-1:1);break;case"end":u[r]+=m*(n&&l?-1:1);break}return u}const te=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),f=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:d}=St(l,o,f),m=o,u={},g=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y:v,data:b,reset:y}=await p({x:a,y:d,initialPlacement:o,placement:m,strategy:i,middlewareData:u,rects:l,platform:r,elements:{reference:t,floating:e}});a=x??a,d=v??d,u={...u,[w]:{...u[w],...b}},y&&g<=50&&(g++,typeof y=="object"&&(y.placement&&(m=y.placement),y.rects&&(l=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:a,y:d}=St(l,m,f)),h=-1)}return{x:a,y:d,placement:m,strategy:i,middlewareData:u}};async function tt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:f}=t,{boundary:l="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=K(e,t),g=_t(u),w=c[m?d==="floating"?"reference":"floating":d],p=ft(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:a,strategy:f})),x=d==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},y=ft(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:v,strategy:f}):x);return{top:(p.top-y.top+g.top)/b.y,bottom:(y.bottom-p.bottom+g.bottom)/b.y,left:(p.left-y.left+g.left)/b.x,right:(y.right-p.right+g.right)/b.x}}const ee=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:f}=e,{element:l,padding:a=0}=K(t,e)||{};if(l==null)return{};const d=_t(a),m={x:n,y:o},u=Rt(i),g=bt(u),h=await r.getDimensions(l),w=u==="y",p=w?"top":"left",x=w?"bottom":"right",v=w?"clientHeight":"clientWidth",b=s.reference[g]+s.reference[u]-m[u]-s.floating[g],y=m[u]-s.reference[u],O=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let P=O?O[v]:0;(!P||!await(r.isElement==null?void 0:r.isElement(O)))&&(P=c.floating[v]||s.floating[g]);const L=b/2-y/2,M=P/2-h[g]/2-1,R=q(d[p],M),S=q(d[x],M),k=R,T=P-h[g]-S,E=P/2-h[g]/2+L,I=wt(k,E,T),D=!f.arrow&&H(i)!=null&&E!==I&&s.reference[g]/2-(E<k?R:S)-h[g]/2<0,F=D?E<k?E-k:E-T:0;return{[u]:m[u]+F,data:{[u]:I,centerOffset:E-I-F,...D&&{alignmentOffset:F}},reset:D}}});function ne(t,e,n){return(t?[...n.filter(i=>H(i)===t),...n.filter(i=>H(i)!==t)]:n.filter(i=>z(i)===i)).filter(i=>t?H(i)===t||(e?ct(i)!==i:!1):!0)}const oe=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:f,elements:l}=e,{crossAxis:a=!1,alignment:d,allowedPlacements:m=Et,autoAlignment:u=!0,...g}=K(t,e),h=d!==void 0||m===Et?ne(d||null,u,m):m,w=await tt(e,g),p=((n=r.autoPlacement)==null?void 0:n.index)||0,x=h[p];if(x==null)return{};const v=Ht(x,s,await(f.isRTL==null?void 0:f.isRTL(l.floating)));if(c!==x)return{reset:{placement:h[0]}};const b=[w[z(x)],w[v[0]],w[v[1]]],y=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:b}],O=h[p+1];if(O)return{data:{index:p+1,overflows:y},reset:{placement:O}};const P=y.map(R=>{const S=H(R.placement);return[R.placement,S&&a?R.overflows.slice(0,2).reduce((k,T)=>k+T,0):R.overflows[0],R.overflows]}).sort((R,S)=>R[1]-S[1]),M=((i=P.filter(R=>R[2].slice(0,H(R[0])?2:3).every(S=>S<=0))[0])==null?void 0:i[0])||P[0][0];return M!==c?{data:{index:p+1,overflows:y},reset:{placement:M}}:{}}}},ie=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:f,elements:l}=e,{mainAxis:a=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=K(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=z(i),x=G(c),v=z(c)===c,b=await(f.isRTL==null?void 0:f.isRTL(l.floating)),y=m||(v||!h?[lt(c)]:Gt(c)),O=g!=="none";!m&&O&&y.push(...Qt(c,h,g,b));const P=[c,...y],L=await tt(e,w),M=[];let R=((o=s.flip)==null?void 0:o.overflows)||[];if(a&&M.push(L[p]),d){const E=Ht(i,r,b);M.push(L[E[0]],L[E[1]])}if(R=[...R,{placement:i,overflows:M}],!M.every(E=>E<=0)){var S,k;const E=(((S=s.flip)==null?void 0:S.index)||0)+1,I=P[E];if(I)return{data:{index:E,overflows:R},reset:{placement:I}};let D=(k=R.filter(F=>F.overflows[0]<=0).sort((F,A)=>F.overflows[1]-A.overflows[1])[0])==null?void 0:k.placement;if(!D)switch(u){case"bestFit":{var T;const F=(T=R.filter(A=>{if(O){const $=G(A.placement);return $===x||$==="y"}return!0}).map(A=>[A.placement,A.overflows.filter($=>$>0).reduce(($,Y)=>$+Y,0)]).sort((A,$)=>A[1]-$[1])[0])==null?void 0:T[0];F&&(D=F);break}case"initialPlacement":D=c;break}if(i!==D)return{reset:{placement:D}}}return{}}}};function Ct(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Dt(t){return Bt.some(e=>t[e]>=0)}const re=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=K(t,e);switch(o){case"referenceHidden":{const s=await tt(e,{...i,elementContext:"reference"}),r=Ct(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Dt(r)}}}case"escaped":{const s=await tt(e,{...i,altBoundary:!0}),r=Ct(s,n.floating);return{data:{escapedOffsets:r,escaped:Dt(r)}}}default:return{}}}}};async function se(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=z(n),c=H(n),f=G(n)==="y",l=["left","top"].includes(r)?-1:1,a=s&&f?-1:1,d=K(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof g=="number"&&(u=c==="end"?g*-1:g),f?{x:u*a,y:m*l}:{x:m*l,y:u*a}}const ce=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,f=await se(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+f.x,y:s+f.y,data:{...f,placement:r}}}}},le=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...f}=K(t,e),l={x:n,y:o},a=await tt(e,f),d=G(z(i)),m=Wt(d);let u=l[m],g=l[d];if(s){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",x=u+a[w],v=u-a[p];u=wt(x,u,v)}if(r){const w=d==="y"?"top":"left",p=d==="y"?"bottom":"right",x=g+a[w],v=g-a[p];g=wt(x,g,v)}const h=c.fn({...e,[m]:u,[d]:g});return{...h,data:{x:h.x-n,y:h.y-o,enabled:{[m]:s,[d]:r}}}}}},fe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:s,platform:r,elements:c}=e,{apply:f=()=>{},...l}=K(t,e),a=await tt(e,l),d=z(i),m=H(i),u=G(i)==="y",{width:g,height:h}=s.floating;let w,p;d==="top"||d==="bottom"?(w=d,p=m===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(p=d,w=m==="end"?"top":"bottom");const x=h-a.top-a.bottom,v=g-a.left-a.right,b=q(h-a[w],x),y=q(g-a[p],v),O=!e.middlewareData.shift;let P=b,L=y;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(L=v),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(P=x),O&&!m){const R=B(a.left,0),S=B(a.right,0),k=B(a.top,0),T=B(a.bottom,0);u?L=g-2*(R!==0||S!==0?R+S:B(a.left,a.right)):P=h-2*(k!==0||T!==0?k+T:B(a.top,a.bottom))}await f({...e,availableWidth:L,availableHeight:P});const M=await r.getDimensions(c.floating);return g!==M.width||h!==M.height?{reset:{rects:!0}}:{}}}};function Nt(t){const e=N(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=V(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=st(n)!==s||st(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function At(t){return _(t)?t:t.contextElement}function Q(t){const e=At(t);if(!V(e))return U(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Nt(e);let r=(s?st(n.width):n.width)/o,c=(s?st(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ae=U(0);function Vt(t){const e=W(t);return!vt()||!e.visualViewport?ae:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ue(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==W(t)?!1:e}function J(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=At(t);let r=U(1);e&&(o?_(o)&&(r=Q(o)):r=Q(t));const c=ue(s,n,o)?Vt(s):U(0);let f=(i.left+c.x)/r.x,l=(i.top+c.y)/r.y,a=i.width/r.x,d=i.height/r.y;if(s){const m=W(s),u=o&&_(o)?W(o):o;let g=m,h=pt(g);for(;h&&o&&u!==g;){const w=Q(h),p=h.getBoundingClientRect(),x=N(h),v=p.left+(h.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(h.clientTop+parseFloat(x.paddingTop))*w.y;f*=w.x,l*=w.y,a*=w.x,d*=w.y,f+=v,l+=b,g=W(h),h=pt(g)}}return ft({width:a,height:d,x:f,y:l})}function de(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=j(o),c=e?dt(e.floating):!1;if(o===r||c&&s)return n;let f={scrollLeft:0,scrollTop:0},l=U(1);const a=U(0),d=V(o);if((d||!d&&!s)&&((et(o)!=="body"||ot(r))&&(f=mt(o)),V(o))){const m=J(o);l=Q(o),a.x=m.x+o.clientLeft,a.y=m.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-f.scrollLeft*l.x+a.x,y:n.y*l.y-f.scrollTop*l.y+a.y}}function me(t){return Array.from(t.getClientRects())}function xt(t,e){const n=mt(t).scrollLeft;return e?e.left+n:J(j(t)).left+n}function ge(t){const e=j(t),n=mt(t),o=t.ownerDocument.body,i=B(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=B(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+xt(t);const c=-n.scrollTop;return N(o).direction==="rtl"&&(r+=B(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function he(t,e){const n=W(t),o=j(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,f=0;if(i){s=i.width,r=i.height;const l=vt();(!l||l&&e==="fixed")&&(c=i.offsetLeft,f=i.offsetTop)}return{width:s,height:r,x:c,y:f}}function pe(t,e){const n=J(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=V(t)?Q(t):U(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,f=i*s.x,l=o*s.y;return{width:r,height:c,x:f,y:l}}function Tt(t,e,n){let o;if(e==="viewport")o=he(t,n);else if(e==="document")o=ge(j(t));else if(_(e))o=pe(e,n);else{const i=Vt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ft(o)}function zt(t,e){const n=X(t);return n===e||!_(n)||Z(n)?!1:N(n).position==="fixed"||zt(n,e)}function we(t,e){const n=e.get(t);if(n)return n;let o=nt(t,[],!1).filter(c=>_(c)&&et(c)!=="body"),i=null;const s=N(t).position==="fixed";let r=s?X(t):t;for(;_(r)&&!Z(r);){const c=N(r),f=yt(r);!f&&c.position==="fixed"&&(i=null),(s?!f&&!i:!f&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(r)&&!f&&zt(t,r))?o=o.filter(a=>a!==r):i=c,r=X(r)}return e.set(t,o),o}function xe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?dt(e)?[]:we(e,this._c):[].concat(n),o],c=r[0],f=r.reduce((l,a)=>{const d=Tt(e,a,i);return l.top=B(d.top,l.top),l.right=q(d.right,l.right),l.bottom=q(d.bottom,l.bottom),l.left=B(d.left,l.left),l},Tt(e,c,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function ye(t){const{width:e,height:n}=Nt(t);return{width:e,height:n}}function ve(t,e,n){const o=V(e),i=j(e),s=n==="fixed",r=J(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const f=U(0);if(o||!o&&!s)if((et(e)!=="body"||ot(i))&&(c=mt(e)),o){const u=J(e,!0,s,e);f.x=u.x+e.clientLeft,f.y=u.y+e.clientTop}else i&&(f.x=xt(i));let l=0,a=0;if(i&&!o&&!s){const u=i.getBoundingClientRect();a=u.top+c.scrollTop,l=u.left+c.scrollLeft-xt(i,u)}const d=r.left+c.scrollLeft-f.x-l,m=r.top+c.scrollTop-f.y-a;return{x:d,y:m,width:r.width,height:r.height}}function gt(t){return N(t).position==="static"}function Lt(t,e){if(!V(t)||N(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return j(t)===n&&(n=n.ownerDocument.body),n}function jt(t,e){const n=W(t);if(dt(t))return n;if(!V(t)){let i=X(t);for(;i&&!Z(i);){if(_(i)&&!gt(i))return i;i=X(i)}return n}let o=Lt(t,e);for(;o&&Xt(o)&&gt(o);)o=Lt(o,e);return o&&Z(o)&&gt(o)&&!yt(o)?n:o||qt(t)||n}const be=async function(t){const e=this.getOffsetParent||jt,n=this.getDimensions,o=await n(t.floating);return{reference:ve(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Re(t){return N(t).direction==="rtl"}const Ae={convertOffsetParentRelativeRectToViewportRelativeRect:de,getDocumentElement:j,getClippingRect:xe,getOffsetParent:jt,getElementRects:be,getClientRects:me,getDimensions:ye,getScale:Q,isElement:_,isRTL:Re};function Oe(t,e){let n=null,o;const i=j(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,f){c===void 0&&(c=!1),f===void 0&&(f=1),s();const{left:l,top:a,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const u=it(a),g=it(i.clientWidth-(l+d)),h=it(i.clientHeight-(a+m)),w=it(l),x={rootMargin:-u+"px "+-g+"px "+-h+"px "+-w+"px",threshold:B(0,q(1,f))||1};let v=!0;function b(y){const O=y[0].intersectionRatio;if(O!==f){if(!v)return r();O?r(!1,O):o=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return r(!0),s}function Fe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:f=!1}=o,l=At(t),a=i||s?[...l?nt(l):[],...nt(e)]:[];a.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=l&&c?Oe(l,n):null;let m=-1,u=null;r&&(u=new ResizeObserver(p=>{let[x]=p;x&&x.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var v;(v=u)==null||v.observe(e)})),n()}),l&&!f&&u.observe(l),u.observe(e));let g,h=f?J(t):null;f&&w();function w(){const p=J(t);h&&(p.x!==h.x||p.y!==h.y||p.width!==h.width||p.height!==h.height)&&n(),h=p,g=requestAnimationFrame(w)}return n(),()=>{var p;a.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),d==null||d(),(p=u)==null||p.disconnect(),u=null,f&&cancelAnimationFrame(g)}}const Pe=ce,Ee=oe,Se=le,Ce=ie,De=fe,$e=re,Mt=ee,Te=(t,e,n)=>{const o=new Map,i={platform:Ae,...n},s={...i.platform,_c:o};return te(t,e,{...i,platform:s})};var rt=typeof document<"u"?C.useLayoutEffect:C.useEffect;function at(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!at(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const s=i[o];if(!(s==="_owner"&&t.$$typeof)&&!at(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function It(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function kt(t,e){const n=It(t);return Math.round(e*n)/n}function ht(t){const e=C.useRef(t);return rt(()=>{e.current=t}),e}function Be(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:s,floating:r}={},transform:c=!0,whileElementsMounted:f,open:l}=t,[a,d]=C.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,u]=C.useState(o);at(m,o)||u(o);const[g,h]=C.useState(null),[w,p]=C.useState(null),x=C.useCallback(A=>{A!==O.current&&(O.current=A,h(A))},[]),v=C.useCallback(A=>{A!==P.current&&(P.current=A,p(A))},[]),b=s||g,y=r||w,O=C.useRef(null),P=C.useRef(null),L=C.useRef(a),M=f!=null,R=ht(f),S=ht(i),k=ht(l),T=C.useCallback(()=>{if(!O.current||!P.current)return;const A={placement:e,strategy:n,middleware:m};S.current&&(A.platform=S.current),Te(O.current,P.current,A).then($=>{const Y={...$,isPositioned:k.current!==!1};E.current&&!at(L.current,Y)&&(L.current=Y,Yt.flushSync(()=>{d(Y)}))})},[m,e,n,S,k]);rt(()=>{l===!1&&L.current.isPositioned&&(L.current.isPositioned=!1,d(A=>({...A,isPositioned:!1})))},[l]);const E=C.useRef(!1);rt(()=>(E.current=!0,()=>{E.current=!1}),[]),rt(()=>{if(b&&(O.current=b),y&&(P.current=y),b&&y){if(R.current)return R.current(b,y,T);T()}},[b,y,T,R,M]);const I=C.useMemo(()=>({reference:O,floating:P,setReference:x,setFloating:v}),[x,v]),D=C.useMemo(()=>({reference:b,floating:y}),[b,y]),F=C.useMemo(()=>{const A={position:n,left:0,top:0};if(!D.floating)return A;const $=kt(D.floating,a.x),Y=kt(D.floating,a.y);return c?{...A,transform:"translate("+$+"px, "+Y+"px)",...It(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:$,top:Y}},[n,c,D.floating,a.x,a.y]);return C.useMemo(()=>({...a,update:T,refs:I,elements:D,floatingStyles:F}),[a,T,I,D,F])}const Le=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:o,padding:i}=typeof t=="function"?t(n):t;return o&&e(o)?o.current!=null?Mt({element:o.current,padding:i}).fn(n):{}:o?Mt({element:o,padding:i}).fn(n):{}}}},We=(t,e)=>({...Pe(t),options:[t,e]}),He=(t,e)=>({...Se(t),options:[t,e]}),_e=(t,e)=>({...Ce(t),options:[t,e]}),Ne=(t,e)=>({...De(t),options:[t,e]}),Ve=(t,e)=>({...Ee(t),options:[t,e]}),ze=(t,e)=>({...Le(t),options:[t,e]});export{Ve as a,He as b,Fe as c,Pe as d,Ce as e,_e as f,nt as g,Se as h,_ as i,Ee as j,ze as k,$e as l,We as o,Ne as s,Be as u};
