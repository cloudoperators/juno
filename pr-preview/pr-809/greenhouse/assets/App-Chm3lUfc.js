import{c as nr,j as l,u as or,b as ir,i as sr,e as N,d as A,a2 as cr,m as lr,$ as D,J as ur,K as pr,M as dr,o as gr,_ as fr,x as vr,t as hr,L as br,C as wr}from"./Shell-CKtUoMsW.js";import{r as m,b as R,g as yr}from"./index-HdII1ymj.js";import"./index-DoPPlVqA.js";const mr=()=>nr((t,r)=>({endpoint:"",namespace:"",token:"",currentTeam:"",defaultTeam:"",teamMemberships:[],namespace:"",actions:{initialize:(e,a,o,n)=>t({endpoint:e,namespace:o,token:a,currentTeam:n}),setCurrentTeam:e=>t({currentTeam:e}),setTeamMemberships:e=>{var o,n;let a=r().currentTeam;(a===""||a===void 0||a===null)&&(a=(n=(o=e==null?void 0:e[0])==null?void 0:o.metadata)==null?void 0:n.name),t({teamMemberships:e,currentTeam:a})}}})),zt=m.createContext(),_r=({children:t})=>l.jsx(zt.Provider,{value:mr(),children:t}),T=t=>or(m.useContext(zt),t),xr=()=>T(t=>t.endpoint),$r=()=>T(t=>t.namespace),Tr=()=>T(t=>t.token),st=()=>T(t=>t.currentTeam),Ut=()=>T(t=>t.defaultTeam),z=()=>T(t=>t.teamMemberships),U=()=>T(t=>t.actions),Ar=()=>{const t=xr(),r=Tr();return{client:t&&r?ir({apiEndpoint:t,token:r}):null}},dt=t=>{let r=t;return typeof t=="string"&&(r=gt(t)),typeof t=="object"&&(console.log("Error parsing error message::object"),t!=null&&t.message&&(r=gt(t==null?void 0:t.message))),r},gt=t=>{let r=t;try{r=JSON.parse(t),r!=null&&r.message&&(r=(r!=null&&r.code?`${r.code}, `:"")+(r==null?void 0:r.message))}catch(e){console.error(e)}return r};function jr(){this.__data__=[],this.size=0}var Sr=jr;function Cr(t,r){return t===r||t!==t&&r!==r}var Kt=Cr,Or=Kt;function Er(t,r){for(var e=t.length;e--;)if(Or(t[e][0],r))return e;return-1}var K=Er,Pr=K,Ir=Array.prototype,kr=Ir.splice;function Lr(t){var r=this.__data__,e=Pr(r,t);if(e<0)return!1;var a=r.length-1;return e==a?r.pop():kr.call(r,e,1),--this.size,!0}var Dr=Lr,Rr=K;function Gr(t){var r=this.__data__,e=Rr(r,t);return e<0?void 0:r[e][1]}var Nr=Gr,Hr=K;function Fr(t){return Hr(this.__data__,t)>-1}var Mr=Fr,zr=K;function Ur(t,r){var e=this.__data__,a=zr(e,t);return a<0?(++this.size,e.push([t,r])):e[a][1]=r,this}var Kr=Ur,qr=Sr,Br=Dr,Wr=Nr,Jr=Mr,Xr=Kr;function j(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var a=t[r];this.set(a[0],a[1])}}j.prototype.clear=qr;j.prototype.delete=Br;j.prototype.get=Wr;j.prototype.has=Jr;j.prototype.set=Xr;var q=j,Yr=q;function Zr(){this.__data__=new Yr,this.size=0}var Qr=Zr;function Vr(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}var te=Vr;function re(t){return this.__data__.get(t)}var ee=re;function ae(t){return this.__data__.has(t)}var ne=ae,oe=typeof R=="object"&&R&&R.Object===Object&&R,qt=oe,ie=qt,se=typeof self=="object"&&self&&self.Object===Object&&self,ce=ie||se||Function("return this")(),w=ce,le=w,ue=le.Symbol,ct=ue,ft=ct,Bt=Object.prototype,pe=Bt.hasOwnProperty,de=Bt.toString,I=ft?ft.toStringTag:void 0;function ge(t){var r=pe.call(t,I),e=t[I];try{t[I]=void 0;var a=!0}catch{}var o=de.call(t);return a&&(r?t[I]=e:delete t[I]),o}var fe=ge,ve=Object.prototype,he=ve.toString;function be(t){return he.call(t)}var we=be,vt=ct,ye=fe,me=we,_e="[object Null]",xe="[object Undefined]",ht=vt?vt.toStringTag:void 0;function $e(t){return t==null?t===void 0?xe:_e:ht&&ht in Object(t)?ye(t):me(t)}var B=$e;function Te(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var Wt=Te,Ae=B,je=Wt,Se="[object AsyncFunction]",Ce="[object Function]",Oe="[object GeneratorFunction]",Ee="[object Proxy]";function Pe(t){if(!je(t))return!1;var r=Ae(t);return r==Ce||r==Oe||r==Se||r==Ee}var Jt=Pe,Ie=w,ke=Ie["__core-js_shared__"],Le=ke,Y=Le,bt=function(){var t=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function De(t){return!!bt&&bt in t}var Re=De,Ge=Function.prototype,Ne=Ge.toString;function He(t){if(t!=null){try{return Ne.call(t)}catch{}try{return t+""}catch{}}return""}var Xt=He,Fe=Jt,Me=Re,ze=Wt,Ue=Xt,Ke=/[\\^$.*+?()[\]{}|]/g,qe=/^\[object .+?Constructor\]$/,Be=Function.prototype,We=Object.prototype,Je=Be.toString,Xe=We.hasOwnProperty,Ye=RegExp("^"+Je.call(Xe).replace(Ke,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ze(t){if(!ze(t)||Me(t))return!1;var r=Fe(t)?Ye:qe;return r.test(Ue(t))}var Qe=Ze;function Ve(t,r){return t==null?void 0:t[r]}var ta=Ve,ra=Qe,ea=ta;function aa(t,r){var e=ea(t,r);return ra(e)?e:void 0}var S=aa,na=S,oa=w,ia=na(oa,"Map"),lt=ia,sa=S,ca=sa(Object,"create"),W=ca,wt=W;function la(){this.__data__=wt?wt(null):{},this.size=0}var ua=la;function pa(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var da=pa,ga=W,fa="__lodash_hash_undefined__",va=Object.prototype,ha=va.hasOwnProperty;function ba(t){var r=this.__data__;if(ga){var e=r[t];return e===fa?void 0:e}return ha.call(r,t)?r[t]:void 0}var wa=ba,ya=W,ma=Object.prototype,_a=ma.hasOwnProperty;function xa(t){var r=this.__data__;return ya?r[t]!==void 0:_a.call(r,t)}var $a=xa,Ta=W,Aa="__lodash_hash_undefined__";function ja(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Ta&&r===void 0?Aa:r,this}var Sa=ja,Ca=ua,Oa=da,Ea=wa,Pa=$a,Ia=Sa;function C(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var a=t[r];this.set(a[0],a[1])}}C.prototype.clear=Ca;C.prototype.delete=Oa;C.prototype.get=Ea;C.prototype.has=Pa;C.prototype.set=Ia;var ka=C,yt=ka,La=q,Da=lt;function Ra(){this.size=0,this.__data__={hash:new yt,map:new(Da||La),string:new yt}}var Ga=Ra;function Na(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}var Ha=Na,Fa=Ha;function Ma(t,r){var e=t.__data__;return Fa(r)?e[typeof r=="string"?"string":"hash"]:e.map}var J=Ma,za=J;function Ua(t){var r=za(this,t).delete(t);return this.size-=r?1:0,r}var Ka=Ua,qa=J;function Ba(t){return qa(this,t).get(t)}var Wa=Ba,Ja=J;function Xa(t){return Ja(this,t).has(t)}var Ya=Xa,Za=J;function Qa(t,r){var e=Za(this,t),a=e.size;return e.set(t,r),this.size+=e.size==a?0:1,this}var Va=Qa,tn=Ga,rn=Ka,en=Wa,an=Ya,nn=Va;function O(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var a=t[r];this.set(a[0],a[1])}}O.prototype.clear=tn;O.prototype.delete=rn;O.prototype.get=en;O.prototype.has=an;O.prototype.set=nn;var Yt=O,on=q,sn=lt,cn=Yt,ln=200;function un(t,r){var e=this.__data__;if(e instanceof on){var a=e.__data__;if(!sn||a.length<ln-1)return a.push([t,r]),this.size=++e.size,this;e=this.__data__=new cn(a)}return e.set(t,r),this.size=e.size,this}var pn=un,dn=q,gn=Qr,fn=te,vn=ee,hn=ne,bn=pn;function E(t){var r=this.__data__=new dn(t);this.size=r.size}E.prototype.clear=gn;E.prototype.delete=fn;E.prototype.get=vn;E.prototype.has=hn;E.prototype.set=bn;var wn=E,yn="__lodash_hash_undefined__";function mn(t){return this.__data__.set(t,yn),this}var _n=mn;function xn(t){return this.__data__.has(t)}var $n=xn,Tn=Yt,An=_n,jn=$n;function H(t){var r=-1,e=t==null?0:t.length;for(this.__data__=new Tn;++r<e;)this.add(t[r])}H.prototype.add=H.prototype.push=An;H.prototype.has=jn;var Sn=H;function Cn(t,r){for(var e=-1,a=t==null?0:t.length;++e<a;)if(r(t[e],e,t))return!0;return!1}var On=Cn;function En(t,r){return t.has(r)}var Pn=En,In=Sn,kn=On,Ln=Pn,Dn=1,Rn=2;function Gn(t,r,e,a,o,n){var s=e&Dn,i=t.length,c=r.length;if(i!=c&&!(s&&c>i))return!1;var u=n.get(t),g=n.get(r);if(u&&g)return u==r&&g==t;var f=-1,d=!0,b=e&Rn?new In:void 0;for(n.set(t,r),n.set(r,t);++f<i;){var v=t[f],h=r[f];if(a)var y=s?a(h,v,f,r,t,n):a(v,h,f,t,r,n);if(y!==void 0){if(y)continue;d=!1;break}if(b){if(!kn(r,function(_,x){if(!Ln(b,x)&&(v===_||o(v,_,e,a,n)))return b.push(x)})){d=!1;break}}else if(!(v===h||o(v,h,e,a,n))){d=!1;break}}return n.delete(t),n.delete(r),d}var Zt=Gn,Nn=w,Hn=Nn.Uint8Array,Fn=Hn;function Mn(t){var r=-1,e=Array(t.size);return t.forEach(function(a,o){e[++r]=[o,a]}),e}var zn=Mn;function Un(t){var r=-1,e=Array(t.size);return t.forEach(function(a){e[++r]=a}),e}var Kn=Un,mt=ct,_t=Fn,qn=Kt,Bn=Zt,Wn=zn,Jn=Kn,Xn=1,Yn=2,Zn="[object Boolean]",Qn="[object Date]",Vn="[object Error]",to="[object Map]",ro="[object Number]",eo="[object RegExp]",ao="[object Set]",no="[object String]",oo="[object Symbol]",io="[object ArrayBuffer]",so="[object DataView]",xt=mt?mt.prototype:void 0,Z=xt?xt.valueOf:void 0;function co(t,r,e,a,o,n,s){switch(e){case so:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case io:return!(t.byteLength!=r.byteLength||!n(new _t(t),new _t(r)));case Zn:case Qn:case ro:return qn(+t,+r);case Vn:return t.name==r.name&&t.message==r.message;case eo:case no:return t==r+"";case to:var i=Wn;case ao:var c=a&Xn;if(i||(i=Jn),t.size!=r.size&&!c)return!1;var u=s.get(t);if(u)return u==r;a|=Yn,s.set(t,r);var g=Bn(i(t),i(r),a,o,n,s);return s.delete(t),g;case oo:if(Z)return Z.call(t)==Z.call(r)}return!1}var lo=co;function uo(t,r){for(var e=-1,a=r.length,o=t.length;++e<a;)t[o+e]=r[e];return t}var po=uo,go=Array.isArray,ut=go,fo=po,vo=ut;function ho(t,r,e){var a=r(t);return vo(t)?a:fo(a,e(t))}var bo=ho;function wo(t,r){for(var e=-1,a=t==null?0:t.length,o=0,n=[];++e<a;){var s=t[e];r(s,e,t)&&(n[o++]=s)}return n}var yo=wo;function mo(){return[]}var _o=mo,xo=yo,$o=_o,To=Object.prototype,Ao=To.propertyIsEnumerable,$t=Object.getOwnPropertySymbols,jo=$t?function(t){return t==null?[]:(t=Object(t),xo($t(t),function(r){return Ao.call(t,r)}))}:$o,So=jo;function Co(t,r){for(var e=-1,a=Array(t);++e<t;)a[e]=r(e);return a}var Oo=Co;function Eo(t){return t!=null&&typeof t=="object"}var X=Eo,Po=B,Io=X,ko="[object Arguments]";function Lo(t){return Io(t)&&Po(t)==ko}var Do=Lo,Tt=Do,Ro=X,Qt=Object.prototype,Go=Qt.hasOwnProperty,No=Qt.propertyIsEnumerable,Ho=Tt(function(){return arguments}())?Tt:function(t){return Ro(t)&&Go.call(t,"callee")&&!No.call(t,"callee")},Fo=Ho,F={exports:{}};function Mo(){return!1}var zo=Mo;F.exports;(function(t,r){var e=w,a=zo,o=r&&!r.nodeType&&r,n=o&&!0&&t&&!t.nodeType&&t,s=n&&n.exports===o,i=s?e.Buffer:void 0,c=i?i.isBuffer:void 0,u=c||a;t.exports=u})(F,F.exports);var Vt=F.exports,Uo=9007199254740991,Ko=/^(?:0|[1-9]\d*)$/;function qo(t,r){var e=typeof t;return r=r??Uo,!!r&&(e=="number"||e!="symbol"&&Ko.test(t))&&t>-1&&t%1==0&&t<r}var Bo=qo,Wo=9007199254740991;function Jo(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Wo}var tr=Jo,Xo=B,Yo=tr,Zo=X,Qo="[object Arguments]",Vo="[object Array]",ti="[object Boolean]",ri="[object Date]",ei="[object Error]",ai="[object Function]",ni="[object Map]",oi="[object Number]",ii="[object Object]",si="[object RegExp]",ci="[object Set]",li="[object String]",ui="[object WeakMap]",pi="[object ArrayBuffer]",di="[object DataView]",gi="[object Float32Array]",fi="[object Float64Array]",vi="[object Int8Array]",hi="[object Int16Array]",bi="[object Int32Array]",wi="[object Uint8Array]",yi="[object Uint8ClampedArray]",mi="[object Uint16Array]",_i="[object Uint32Array]",p={};p[gi]=p[fi]=p[vi]=p[hi]=p[bi]=p[wi]=p[yi]=p[mi]=p[_i]=!0;p[Qo]=p[Vo]=p[pi]=p[ti]=p[di]=p[ri]=p[ei]=p[ai]=p[ni]=p[oi]=p[ii]=p[si]=p[ci]=p[li]=p[ui]=!1;function xi(t){return Zo(t)&&Yo(t.length)&&!!p[Xo(t)]}var $i=xi;function Ti(t){return function(r){return t(r)}}var Ai=Ti,M={exports:{}};M.exports;(function(t,r){var e=qt,a=r&&!r.nodeType&&r,o=a&&!0&&t&&!t.nodeType&&t,n=o&&o.exports===a,s=n&&e.process,i=function(){try{var c=o&&o.require&&o.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}}();t.exports=i})(M,M.exports);var ji=M.exports,Si=$i,Ci=Ai,At=ji,jt=At&&At.isTypedArray,Oi=jt?Ci(jt):Si,rr=Oi,Ei=Oo,Pi=Fo,Ii=ut,ki=Vt,Li=Bo,Di=rr,Ri=Object.prototype,Gi=Ri.hasOwnProperty;function Ni(t,r){var e=Ii(t),a=!e&&Pi(t),o=!e&&!a&&ki(t),n=!e&&!a&&!o&&Di(t),s=e||a||o||n,i=s?Ei(t.length,String):[],c=i.length;for(var u in t)(r||Gi.call(t,u))&&!(s&&(u=="length"||o&&(u=="offset"||u=="parent")||n&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Li(u,c)))&&i.push(u);return i}var Hi=Ni,Fi=Object.prototype;function Mi(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||Fi;return t===e}var zi=Mi;function Ui(t,r){return function(e){return t(r(e))}}var Ki=Ui,qi=Ki,Bi=qi(Object.keys,Object),Wi=Bi,Ji=zi,Xi=Wi,Yi=Object.prototype,Zi=Yi.hasOwnProperty;function Qi(t){if(!Ji(t))return Xi(t);var r=[];for(var e in Object(t))Zi.call(t,e)&&e!="constructor"&&r.push(e);return r}var Vi=Qi,ts=Jt,rs=tr;function es(t){return t!=null&&rs(t.length)&&!ts(t)}var as=es,ns=Hi,os=Vi,is=as;function ss(t){return is(t)?ns(t):os(t)}var cs=ss,ls=bo,us=So,ps=cs;function ds(t){return ls(t,ps,us)}var gs=ds,St=gs,fs=1,vs=Object.prototype,hs=vs.hasOwnProperty;function bs(t,r,e,a,o,n){var s=e&fs,i=St(t),c=i.length,u=St(r),g=u.length;if(c!=g&&!s)return!1;for(var f=c;f--;){var d=i[f];if(!(s?d in r:hs.call(r,d)))return!1}var b=n.get(t),v=n.get(r);if(b&&v)return b==r&&v==t;var h=!0;n.set(t,r),n.set(r,t);for(var y=s;++f<c;){d=i[f];var _=t[d],x=r[d];if(a)var pt=s?a(x,_,d,r,t,n):a(_,x,d,t,r,n);if(!(pt===void 0?_===x||o(_,x,e,a,n):pt)){h=!1;break}y||(y=d=="constructor")}if(h&&!y){var k=t.constructor,L=r.constructor;k!=L&&"constructor"in t&&"constructor"in r&&!(typeof k=="function"&&k instanceof k&&typeof L=="function"&&L instanceof L)&&(h=!1)}return n.delete(t),n.delete(r),h}var ws=bs,ys=S,ms=w,_s=ys(ms,"DataView"),xs=_s,$s=S,Ts=w,As=$s(Ts,"Promise"),js=As,Ss=S,Cs=w,Os=Ss(Cs,"Set"),Es=Os,Ps=S,Is=w,ks=Ps(Is,"WeakMap"),Ls=ks,et=xs,at=lt,nt=js,ot=Es,it=Ls,er=B,P=Xt,Ct="[object Map]",Ds="[object Object]",Ot="[object Promise]",Et="[object Set]",Pt="[object WeakMap]",It="[object DataView]",Rs=P(et),Gs=P(at),Ns=P(nt),Hs=P(ot),Fs=P(it),$=er;(et&&$(new et(new ArrayBuffer(1)))!=It||at&&$(new at)!=Ct||nt&&$(nt.resolve())!=Ot||ot&&$(new ot)!=Et||it&&$(new it)!=Pt)&&($=function(t){var r=er(t),e=r==Ds?t.constructor:void 0,a=e?P(e):"";if(a)switch(a){case Rs:return It;case Gs:return Ct;case Ns:return Ot;case Hs:return Et;case Fs:return Pt}return r});var Ms=$,Q=wn,zs=Zt,Us=lo,Ks=ws,kt=Ms,Lt=ut,Dt=Vt,qs=rr,Bs=1,Rt="[object Arguments]",Gt="[object Array]",G="[object Object]",Ws=Object.prototype,Nt=Ws.hasOwnProperty;function Js(t,r,e,a,o,n){var s=Lt(t),i=Lt(r),c=s?Gt:kt(t),u=i?Gt:kt(r);c=c==Rt?G:c,u=u==Rt?G:u;var g=c==G,f=u==G,d=c==u;if(d&&Dt(t)){if(!Dt(r))return!1;s=!0,g=!1}if(d&&!g)return n||(n=new Q),s||qs(t)?zs(t,r,e,a,o,n):Us(t,r,c,e,a,o,n);if(!(e&Bs)){var b=g&&Nt.call(t,"__wrapped__"),v=f&&Nt.call(r,"__wrapped__");if(b||v){var h=b?t.value():t,y=v?r.value():r;return n||(n=new Q),o(h,y,e,a,n)}}return d?(n||(n=new Q),Ks(t,r,e,a,o,n)):!1}var Xs=Js,Ys=Xs,Ht=X;function ar(t,r,e,a,o){return t===r?!0:t==null||r==null||!Ht(t)&&!Ht(r)?t!==t&&r!==r:Ys(t,r,e,a,ar,o)}var Zs=ar,Qs=Zs;function Vs(t,r){return Qs(t,r)}var tc=Vs;const Ft=yr(tc);function V(t){return t==null?!1:typeof t[Symbol.iterator]=="function"}function tt(t,r,{added:e,modified:a,deleted:o}){var i;let n=[...t];function s(c){return t.findIndex(function(u){return c===u.metadata.name})}if(e){if(!V(e))return;(i=Object.values(e))==null||i.forEach(c=>{n.some(g=>{var f,d;return((f=c==null?void 0:c.metadata)==null?void 0:f.name)===((d=g==null?void 0:g.metadata)==null?void 0:d.name)})||n.push(c)})}if(a){if(!V(a))return;a.forEach(c=>{var g;let u=s((g=c==null?void 0:c.metadata)==null?void 0:g.name);u!==-1&&(Ft(n[u],c)||(n[u]=c))})}if(o){if(!V(o))return;o.forEach(c=>{var g;let u=s((g=c==null?void 0:c.metadata)==null?void 0:g.name);u!==-1&&(n=n.filter((f,d)=>d!==u))})}Ft(n,t)||r(n)}const rc=()=>{const t=$r(),{client:r}=Ar(),{addMessage:e}=sr(),{setTeamMemberships:a}=U(),o=z();return{watchTeamMembers:m.useCallback(()=>{if(!r||!t)return;const s=r.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${t}/teammemberships`);return s.on(r.WATCH_ERROR,i=>{console.log("ERROR: Failed to watch resource",i),e({variant:"error",text:dt(i.message)})}),s.on(r.WATCH_ADDED,i=>{tt(o,a,{added:i})}),s.on(r.WATCH_MODIFIED,i=>{tt(o,a,{modified:i})}),s.on(r.WATCH_DELETED,i=>{tt(o,a,{deleted:i})}),s.start(),s.cancel()},[r,t,o,a,e,dt])}},ec=({teamMember:t})=>l.jsxs(N,{children:[l.jsx(A,{children:t.id}),l.jsx(A,{children:t.firstName}),l.jsx(A,{children:t.lastName}),l.jsx(A,{children:t.email})]}),ac=()=>{const t=st(),r=Ut(),e=z(),a=t||r,o=m.useMemo(()=>{var c;if(!a||!e)return[];const i=e.find(u=>u.metadata.name===a);return((c=i==null?void 0:i.spec)==null?void 0:c.members)||[]},[a,e]),{scrollListItems:n,iterator:s}=cr(o,{loadingObject:l.jsx(N,{children:l.jsx(A,{colSpan:4,children:l.jsx("span",{children:"Loading ..."})})}),refFunction:i=>l.jsx(N,{children:l.jsx(A,{colSpan:4,className:"border-b-0 py-0",children:l.jsx("span",{ref:i})})})});return(n==null?void 0:n.length)>0?l.jsx(l.Fragment,{children:l.jsxs(lr,{columns:4,children:[l.jsxs(N,{children:[l.jsx(D,{children:"ID"}),l.jsx(D,{children:"Firstname"}),l.jsx(D,{children:"Lastname"}),l.jsx(D,{children:"E-Mail"})]}),s.map(i=>l.jsx(ec,{teamMember:i},i.id))]})}):l.jsx("div",{children:"There are no Team Members to display."})},nc=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px`,oc=({onTeamChange:t})=>{const r=st(),e=z();return l.jsx(ur,{direction:"vertical",gap:"4",className:`filters ${nc}`,children:l.jsx(pr,{name:"team",className:"filter-label-select w-64 mb-0",label:"Team",value:r||defaultTeam,onChange:t,children:e==null?void 0:e.map((a,o)=>{var n,s;return l.jsx(dr,{value:(n=a==null?void 0:a.metadata)==null?void 0:n.name,label:(s=a==null?void 0:a.metadata)==null?void 0:s.name},o)})})})},ic=()=>{const t=z(),{watchTeamMembers:r}=rc(),{setCurrentTeam:e}=U();m.useEffect(()=>r?r():void 0,[r]);function a(o){e(o)}return l.jsxs(gr,{py:!0,px:!0,children:[l.jsx(fr,{className:"pb-6"}),(t==null?void 0:t.length)>0&&l.jsxs(l.Fragment,{children:[l.jsx(oc,{onTeamChange:a}),l.jsx(ac,{})]})]})},sc="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-auto{margin-left:auto}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-32{width:8rem}.w-64{width:16rem}.w-8{width:2rem}.w-96{width:24rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity, 1))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity, 1))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity, 1))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity, 1))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity, 1))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity, 1))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity, 1))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity, 1))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity, 1))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}.text-opacity-50{--tw-text-opacity: .5 }.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}",Mt="greenhouse-team-admin",rt="team",cc=t=>{const[r,e]=m.useState(!1),a=vr(t||Mt),{setCurrentTeam:o}=U(),n=st(),s=Ut();m.useEffect(()=>{var c;if(r)return;console.log(`Team-Admin: (${t||Mt}) setting up state from url:`,a.currentState());const i=(c=a.currentState())==null?void 0:c[rt];i&&o(i),e(!0)},[o]),m.useEffect(()=>{var i;r&&(a.push({[rt]:n||s}),console.log("useUrlStateKey - after  urlStateManager.push: ",(i=a.currentState())==null?void 0:i[rt]))},[r,n,s])},lc=({consumerId:t})=>(cc(t),null),uc=(t={})=>{const{initialize:r}=U();return r(t.apiEndpoint,t.token,t.namespace,t.userGroup),l.jsxs(br,{children:[l.jsx(lc,{}),l.jsx(wr,{pageHeader:"Converged Cloud | Team Members",embedded:t.embedded==="true"||t.embedded===!0,children:l.jsx(ic,{props:t})})]})},fc=t=>l.jsxs(hr,{theme:`${t.theme?t.theme:"theme-dark"}`,children:[l.jsx("style",{children:sc.toString()}),l.jsx(_r,{children:l.jsx(uc,{...t})})]});export{fc as default};
