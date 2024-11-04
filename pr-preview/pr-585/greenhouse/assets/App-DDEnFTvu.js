import{c as _t,j as p,u as $t,b as Tt,l as nt,D as q,f as I,Q as jt,i as St,e as F,S as At,v as Ot,w as Nt,P as Ct,x as Et,A as Pt,C as kt}from"./Shell-T-IZjxXQ.js";import{r as O,d as U,g as It}from"./index-MWXP7VhR.js";import{C as Dt,A as Rt}from"./Container.component-xJsCyUG8-BznTfyaJ.js";import"./index-r7jsXmHR.js";import"./App-BXAnPb94.js";const Lt=()=>_t((t,r)=>({endpoint:"",namespace:"",token:"",currentTeam:"",defaultTeam:"",teamMemberships:[],namespace:"",isMock:!1,actions:{initialize:(a,n,i,o)=>t({endpoint:a,namespace:i,token:n,currentTeam:o}),setCurrentTeam:a=>t({currentTeam:a}),setTeamMemberships:a=>{var i,o;let n=r().currentTeam;(n===""||n===void 0||n===null)&&(n=(o=(i=a==null?void 0:a[0])==null?void 0:i.metadata)==null?void 0:o.name),t({teamMemberships:a,currentTeam:n})},setMock:a=>t({isMock:a})}})),ot=O.createContext(),Mt=({children:t})=>p.jsx(ot.Provider,{value:Lt(),children:t}),C=t=>$t(O.useContext(ot),t),it=()=>C(t=>t.endpoint),Gt=()=>C(t=>t.namespace),zt=()=>C(t=>t.token),Ht=()=>C(t=>t.isMock),ye=()=>C(t=>t.currentTeam),st=()=>C(t=>t.defaultTeam),Y=()=>C(t=>t.teamMemberships),Q=()=>C(t=>t.actions),Bt=()=>{const t=it(),r=zt();return{client:t&&r?Tt({apiEndpoint:t,token:r}):null}},pe=t=>{let r=t;return typeof t=="string"&&(r=Se(t)),typeof t=="object"&&(console.log("Error parsing error message::object"),t!=null&&t.message&&(r=Se(t==null?void 0:t.message))),r},Se=t=>{let r=t;try{r=JSON.parse(t),r!=null&&r.message&&(r=(r!=null&&r.code?`${r.code}, `:"")+(r==null?void 0:r.message))}catch(a){console.error(a)}return r};function Ft(){this.__data__=[],this.size=0}var Ut=Ft;function Kt(t,r){return t===r||t!==t&&r!==r}var ct=Kt,qt=ct;function Wt(t,r){for(var a=t.length;a--;)if(qt(t[a][0],r))return a;return-1}var Z=Wt,Jt=Z,Vt=Array.prototype,Xt=Vt.splice;function Yt(t){var r=this.__data__,a=Jt(r,t);if(a<0)return!1;var n=r.length-1;return a==n?r.pop():Xt.call(r,a,1),--this.size,!0}var Qt=Yt,Zt=Z;function er(t){var r=this.__data__,a=Zt(r,t);return a<0?void 0:r[a][1]}var tr=er,rr=Z;function ar(t){return rr(this.__data__,t)>-1}var nr=ar,or=Z;function ir(t,r){var a=this.__data__,n=or(a,t);return n<0?(++this.size,a.push([t,r])):a[n][1]=r,this}var sr=ir,cr=Ut,lr=Qt,ur=tr,dr=nr,pr=sr;function D(t){var r=-1,a=t==null?0:t.length;for(this.clear();++r<a;){var n=t[r];this.set(n[0],n[1])}}D.prototype.clear=cr;D.prototype.delete=lr;D.prototype.get=ur;D.prototype.has=dr;D.prototype.set=pr;var ee=D,fr=ee;function mr(){this.__data__=new fr,this.size=0}var vr=mr;function gr(t){var r=this.__data__,a=r.delete(t);return this.size=r.size,a}var hr=gr;function wr(t){return this.__data__.get(t)}var br=wr;function yr(t){return this.__data__.has(t)}var xr=yr,_r=typeof U=="object"&&U&&U.Object===Object&&U,lt=_r,$r=lt,Tr=typeof self=="object"&&self&&self.Object===Object&&self,jr=$r||Tr||Function("return this")(),N=jr,Sr=N,Ar=Sr.Symbol,xe=Ar,Ae=xe,ut=Object.prototype,Or=ut.hasOwnProperty,Nr=ut.toString,B=Ae?Ae.toStringTag:void 0;function Cr(t){var r=Or.call(t,B),a=t[B];try{t[B]=void 0;var n=!0}catch{}var i=Nr.call(t);return n&&(r?t[B]=a:delete t[B]),i}var Er=Cr,Pr=Object.prototype,kr=Pr.toString;function Ir(t){return kr.call(t)}var Dr=Ir,Oe=xe,Rr=Er,Lr=Dr,Mr="[object Null]",Gr="[object Undefined]",Ne=Oe?Oe.toStringTag:void 0;function zr(t){return t==null?t===void 0?Gr:Mr:Ne&&Ne in Object(t)?Rr(t):Lr(t)}var te=zr;function Hr(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var dt=Hr,Br=te,Fr=dt,Ur="[object AsyncFunction]",Kr="[object Function]",qr="[object GeneratorFunction]",Wr="[object Proxy]";function Jr(t){if(!Fr(t))return!1;var r=Br(t);return r==Kr||r==qr||r==Ur||r==Wr}var pt=Jr,Vr=N,Xr=Vr["__core-js_shared__"],Yr=Xr,oe=Yr,Ce=function(){var t=/[^.]+$/.exec(oe&&oe.keys&&oe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Qr(t){return!!Ce&&Ce in t}var Zr=Qr,ea=Function.prototype,ta=ea.toString;function ra(t){if(t!=null){try{return ta.call(t)}catch{}try{return t+""}catch{}}return""}var ft=ra,aa=pt,na=Zr,oa=dt,ia=ft,sa=/[\\^$.*+?()[\]{}|]/g,ca=/^\[object .+?Constructor\]$/,la=Function.prototype,ua=Object.prototype,da=la.toString,pa=ua.hasOwnProperty,fa=RegExp("^"+da.call(pa).replace(sa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ma(t){if(!oa(t)||na(t))return!1;var r=aa(t)?fa:ca;return r.test(ia(t))}var va=ma;function ga(t,r){return t==null?void 0:t[r]}var ha=ga,wa=va,ba=ha;function ya(t,r){var a=ba(t,r);return wa(a)?a:void 0}var R=ya,xa=R,_a=N,$a=xa(_a,"Map"),_e=$a,Ta=R,ja=Ta(Object,"create"),re=ja,Ee=re;function Sa(){this.__data__=Ee?Ee(null):{},this.size=0}var Aa=Sa;function Oa(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}var Na=Oa,Ca=re,Ea="__lodash_hash_undefined__",Pa=Object.prototype,ka=Pa.hasOwnProperty;function Ia(t){var r=this.__data__;if(Ca){var a=r[t];return a===Ea?void 0:a}return ka.call(r,t)?r[t]:void 0}var Da=Ia,Ra=re,La=Object.prototype,Ma=La.hasOwnProperty;function Ga(t){var r=this.__data__;return Ra?r[t]!==void 0:Ma.call(r,t)}var za=Ga,Ha=re,Ba="__lodash_hash_undefined__";function Fa(t,r){var a=this.__data__;return this.size+=this.has(t)?0:1,a[t]=Ha&&r===void 0?Ba:r,this}var Ua=Fa,Ka=Aa,qa=Na,Wa=Da,Ja=za,Va=Ua;function L(t){var r=-1,a=t==null?0:t.length;for(this.clear();++r<a;){var n=t[r];this.set(n[0],n[1])}}L.prototype.clear=Ka;L.prototype.delete=qa;L.prototype.get=Wa;L.prototype.has=Ja;L.prototype.set=Va;var Xa=L,Pe=Xa,Ya=ee,Qa=_e;function Za(){this.size=0,this.__data__={hash:new Pe,map:new(Qa||Ya),string:new Pe}}var en=Za;function tn(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}var rn=tn,an=rn;function nn(t,r){var a=t.__data__;return an(r)?a[typeof r=="string"?"string":"hash"]:a.map}var ae=nn,on=ae;function sn(t){var r=on(this,t).delete(t);return this.size-=r?1:0,r}var cn=sn,ln=ae;function un(t){return ln(this,t).get(t)}var dn=un,pn=ae;function fn(t){return pn(this,t).has(t)}var mn=fn,vn=ae;function gn(t,r){var a=vn(this,t),n=a.size;return a.set(t,r),this.size+=a.size==n?0:1,this}var hn=gn,wn=en,bn=cn,yn=dn,xn=mn,_n=hn;function M(t){var r=-1,a=t==null?0:t.length;for(this.clear();++r<a;){var n=t[r];this.set(n[0],n[1])}}M.prototype.clear=wn;M.prototype.delete=bn;M.prototype.get=yn;M.prototype.has=xn;M.prototype.set=_n;var mt=M,$n=ee,Tn=_e,jn=mt,Sn=200;function An(t,r){var a=this.__data__;if(a instanceof $n){var n=a.__data__;if(!Tn||n.length<Sn-1)return n.push([t,r]),this.size=++a.size,this;a=this.__data__=new jn(n)}return a.set(t,r),this.size=a.size,this}var On=An,Nn=ee,Cn=vr,En=hr,Pn=br,kn=xr,In=On;function G(t){var r=this.__data__=new Nn(t);this.size=r.size}G.prototype.clear=Cn;G.prototype.delete=En;G.prototype.get=Pn;G.prototype.has=kn;G.prototype.set=In;var Dn=G,Rn="__lodash_hash_undefined__";function Ln(t){return this.__data__.set(t,Rn),this}var Mn=Ln;function Gn(t){return this.__data__.has(t)}var zn=Gn,Hn=mt,Bn=Mn,Fn=zn;function J(t){var r=-1,a=t==null?0:t.length;for(this.__data__=new Hn;++r<a;)this.add(t[r])}J.prototype.add=J.prototype.push=Bn;J.prototype.has=Fn;var Un=J;function Kn(t,r){for(var a=-1,n=t==null?0:t.length;++a<n;)if(r(t[a],a,t))return!0;return!1}var qn=Kn;function Wn(t,r){return t.has(r)}var Jn=Wn,Vn=Un,Xn=qn,Yn=Jn,Qn=1,Zn=2;function eo(t,r,a,n,i,o){var l=a&Qn,s=t.length,c=r.length;if(s!=c&&!(l&&c>s))return!1;var u=o.get(t),f=o.get(r);if(u&&f)return u==r&&f==t;var _=-1,v=!0,j=a&Zn?new Vn:void 0;for(o.set(t,r),o.set(r,t);++_<s;){var d=t[_],h=r[_];if(n)var T=l?n(h,d,_,r,t,o):n(d,h,_,t,r,o);if(T!==void 0){if(T)continue;v=!1;break}if(j){if(!Xn(r,function(m,w){if(!Yn(j,w)&&(d===m||i(d,m,a,n,o)))return j.push(w)})){v=!1;break}}else if(!(d===h||i(d,h,a,n,o))){v=!1;break}}return o.delete(t),o.delete(r),v}var vt=eo,to=N,ro=to.Uint8Array,ao=ro;function no(t){var r=-1,a=Array(t.size);return t.forEach(function(n,i){a[++r]=[i,n]}),a}var oo=no;function io(t){var r=-1,a=Array(t.size);return t.forEach(function(n){a[++r]=n}),a}var so=io,ke=xe,Ie=ao,co=ct,lo=vt,uo=oo,po=so,fo=1,mo=2,vo="[object Boolean]",go="[object Date]",ho="[object Error]",wo="[object Map]",bo="[object Number]",yo="[object RegExp]",xo="[object Set]",_o="[object String]",$o="[object Symbol]",To="[object ArrayBuffer]",jo="[object DataView]",De=ke?ke.prototype:void 0,ie=De?De.valueOf:void 0;function So(t,r,a,n,i,o,l){switch(a){case jo:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case To:return!(t.byteLength!=r.byteLength||!o(new Ie(t),new Ie(r)));case vo:case go:case bo:return co(+t,+r);case ho:return t.name==r.name&&t.message==r.message;case yo:case _o:return t==r+"";case wo:var s=uo;case xo:var c=n&fo;if(s||(s=po),t.size!=r.size&&!c)return!1;var u=l.get(t);if(u)return u==r;n|=mo,l.set(t,r);var f=lo(s(t),s(r),n,i,o,l);return l.delete(t),f;case $o:if(ie)return ie.call(t)==ie.call(r)}return!1}var Ao=So;function Oo(t,r){for(var a=-1,n=r.length,i=t.length;++a<n;)t[i+a]=r[a];return t}var No=Oo,Co=Array.isArray,$e=Co,Eo=No,Po=$e;function ko(t,r,a){var n=r(t);return Po(t)?n:Eo(n,a(t))}var Io=ko;function Do(t,r){for(var a=-1,n=t==null?0:t.length,i=0,o=[];++a<n;){var l=t[a];r(l,a,t)&&(o[i++]=l)}return o}var Ro=Do;function Lo(){return[]}var Mo=Lo,Go=Ro,zo=Mo,Ho=Object.prototype,Bo=Ho.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,Fo=Re?function(t){return t==null?[]:(t=Object(t),Go(Re(t),function(r){return Bo.call(t,r)}))}:zo,Uo=Fo;function Ko(t,r){for(var a=-1,n=Array(t);++a<t;)n[a]=r(a);return n}var qo=Ko;function Wo(t){return t!=null&&typeof t=="object"}var ne=Wo,Jo=te,Vo=ne,Xo="[object Arguments]";function Yo(t){return Vo(t)&&Jo(t)==Xo}var Qo=Yo,Le=Qo,Zo=ne,gt=Object.prototype,ei=gt.hasOwnProperty,ti=gt.propertyIsEnumerable,ri=Le(function(){return arguments}())?Le:function(t){return Zo(t)&&ei.call(t,"callee")&&!ti.call(t,"callee")},ai=ri,V={exports:{}};function ni(){return!1}var oi=ni;V.exports;(function(t,r){var a=N,n=oi,i=r&&!r.nodeType&&r,o=i&&!0&&t&&!t.nodeType&&t,l=o&&o.exports===i,s=l?a.Buffer:void 0,c=s?s.isBuffer:void 0,u=c||n;t.exports=u})(V,V.exports);var ht=V.exports,ii=9007199254740991,si=/^(?:0|[1-9]\d*)$/;function ci(t,r){var a=typeof t;return r=r??ii,!!r&&(a=="number"||a!="symbol"&&si.test(t))&&t>-1&&t%1==0&&t<r}var li=ci,ui=9007199254740991;function di(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ui}var wt=di,pi=te,fi=wt,mi=ne,vi="[object Arguments]",gi="[object Array]",hi="[object Boolean]",wi="[object Date]",bi="[object Error]",yi="[object Function]",xi="[object Map]",_i="[object Number]",$i="[object Object]",Ti="[object RegExp]",ji="[object Set]",Si="[object String]",Ai="[object WeakMap]",Oi="[object ArrayBuffer]",Ni="[object DataView]",Ci="[object Float32Array]",Ei="[object Float64Array]",Pi="[object Int8Array]",ki="[object Int16Array]",Ii="[object Int32Array]",Di="[object Uint8Array]",Ri="[object Uint8ClampedArray]",Li="[object Uint16Array]",Mi="[object Uint32Array]",g={};g[Ci]=g[Ei]=g[Pi]=g[ki]=g[Ii]=g[Di]=g[Ri]=g[Li]=g[Mi]=!0;g[vi]=g[gi]=g[Oi]=g[hi]=g[Ni]=g[wi]=g[bi]=g[yi]=g[xi]=g[_i]=g[$i]=g[Ti]=g[ji]=g[Si]=g[Ai]=!1;function Gi(t){return mi(t)&&fi(t.length)&&!!g[pi(t)]}var zi=Gi;function Hi(t){return function(r){return t(r)}}var Bi=Hi,X={exports:{}};X.exports;(function(t,r){var a=lt,n=r&&!r.nodeType&&r,i=n&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===n,l=o&&a.process,s=function(){try{var c=i&&i.require&&i.require("util").types;return c||l&&l.binding&&l.binding("util")}catch{}}();t.exports=s})(X,X.exports);var Fi=X.exports,Ui=zi,Ki=Bi,Me=Fi,Ge=Me&&Me.isTypedArray,qi=Ge?Ki(Ge):Ui,bt=qi,Wi=qo,Ji=ai,Vi=$e,Xi=ht,Yi=li,Qi=bt,Zi=Object.prototype,es=Zi.hasOwnProperty;function ts(t,r){var a=Vi(t),n=!a&&Ji(t),i=!a&&!n&&Xi(t),o=!a&&!n&&!i&&Qi(t),l=a||n||i||o,s=l?Wi(t.length,String):[],c=s.length;for(var u in t)(r||es.call(t,u))&&!(l&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Yi(u,c)))&&s.push(u);return s}var rs=ts,as=Object.prototype;function ns(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||as;return t===a}var os=ns;function is(t,r){return function(a){return t(r(a))}}var ss=is,cs=ss,ls=cs(Object.keys,Object),us=ls,ds=os,ps=us,fs=Object.prototype,ms=fs.hasOwnProperty;function vs(t){if(!ds(t))return ps(t);var r=[];for(var a in Object(t))ms.call(t,a)&&a!="constructor"&&r.push(a);return r}var gs=vs,hs=pt,ws=wt;function bs(t){return t!=null&&ws(t.length)&&!hs(t)}var ys=bs,xs=rs,_s=gs,$s=ys;function Ts(t){return $s(t)?xs(t):_s(t)}var js=Ts,Ss=Io,As=Uo,Os=js;function Ns(t){return Ss(t,Os,As)}var Cs=Ns,ze=Cs,Es=1,Ps=Object.prototype,ks=Ps.hasOwnProperty;function Is(t,r,a,n,i,o){var l=a&Es,s=ze(t),c=s.length,u=ze(r),f=u.length;if(c!=f&&!l)return!1;for(var _=c;_--;){var v=s[_];if(!(l?v in r:ks.call(r,v)))return!1}var j=o.get(t),d=o.get(r);if(j&&d)return j==r&&d==t;var h=!0;o.set(t,r),o.set(r,t);for(var T=l;++_<c;){v=s[_];var m=t[v],w=r[v];if(n)var y=l?n(w,m,v,r,t,o):n(m,w,v,t,r,o);if(!(y===void 0?m===w||i(m,w,a,n,o):y)){h=!1;break}T||(T=v=="constructor")}if(h&&!T){var x=t.constructor,$=r.constructor;x!=$&&"constructor"in t&&"constructor"in r&&!(typeof x=="function"&&x instanceof x&&typeof $=="function"&&$ instanceof $)&&(h=!1)}return o.delete(t),o.delete(r),h}var Ds=Is,Rs=R,Ls=N,Ms=Rs(Ls,"DataView"),Gs=Ms,zs=R,Hs=N,Bs=zs(Hs,"Promise"),Fs=Bs,Us=R,Ks=N,qs=Us(Ks,"Set"),Ws=qs,Js=R,Vs=N,Xs=Js(Vs,"WeakMap"),Ys=Xs,fe=Gs,me=_e,ve=Fs,ge=Ws,he=Ys,yt=te,z=ft,He="[object Map]",Qs="[object Object]",Be="[object Promise]",Fe="[object Set]",Ue="[object WeakMap]",Ke="[object DataView]",Zs=z(fe),ec=z(me),tc=z(ve),rc=z(ge),ac=z(he),P=yt;(fe&&P(new fe(new ArrayBuffer(1)))!=Ke||me&&P(new me)!=He||ve&&P(ve.resolve())!=Be||ge&&P(new ge)!=Fe||he&&P(new he)!=Ue)&&(P=function(t){var r=yt(t),a=r==Qs?t.constructor:void 0,n=a?z(a):"";if(n)switch(n){case Zs:return Ke;case ec:return He;case tc:return Be;case rc:return Fe;case ac:return Ue}return r});var nc=P,se=Dn,oc=vt,ic=Ao,sc=Ds,qe=nc,We=$e,Je=ht,cc=bt,lc=1,Ve="[object Arguments]",Xe="[object Array]",K="[object Object]",uc=Object.prototype,Ye=uc.hasOwnProperty;function dc(t,r,a,n,i,o){var l=We(t),s=We(r),c=l?Xe:qe(t),u=s?Xe:qe(r);c=c==Ve?K:c,u=u==Ve?K:u;var f=c==K,_=u==K,v=c==u;if(v&&Je(t)){if(!Je(r))return!1;l=!0,f=!1}if(v&&!f)return o||(o=new se),l||cc(t)?oc(t,r,a,n,i,o):ic(t,r,c,a,n,i,o);if(!(a&lc)){var j=f&&Ye.call(t,"__wrapped__"),d=_&&Ye.call(r,"__wrapped__");if(j||d){var h=j?t.value():t,T=d?r.value():r;return o||(o=new se),i(h,T,a,n,o)}}return v?(o||(o=new se),sc(t,r,a,n,i,o)):!1}var pc=dc,fc=pc,Qe=ne;function xt(t,r,a,n,i){return t===r?!0:t==null||r==null||!Qe(t)&&!Qe(r)?t!==t&&r!==r:fc(t,r,a,n,xt,i)}var mc=xt,vc=mc;function gc(t,r){return vc(t,r)}var hc=gc;const Ze=It(hc);function ce(t){return t==null?!1:typeof t[Symbol.iterator]=="function"}function le(t,r,{added:a,modified:n,deleted:i}){var s;let o=[...t];function l(c){return t.findIndex(function(u){return c===u.metadata.name})}if(a){if(!ce(a))return;(s=Object.values(a))==null||s.forEach(c=>{o.some(f=>{var _,v;return((_=c==null?void 0:c.metadata)==null?void 0:_.name)===((v=f==null?void 0:f.metadata)==null?void 0:v.name)})||o.push(c)})}if(n){if(!ce(n))return;n.forEach(c=>{var f;let u=l((f=c==null?void 0:c.metadata)==null?void 0:f.name);u!==-1&&(Ze(o[u],c)||(o[u]=c))})}if(i){if(!ce(i))return;i.forEach(c=>{var f;let u=l((f=c==null?void 0:c.metadata)==null?void 0:f.name);u!==-1&&(o=o.filter((_,v)=>v!==u))})}Ze(o,t)||r(o)}const wc=()=>{const t=Gt(),{client:r}=Bt(),{addMessage:a}=nt(),{setTeamMemberships:n}=Q(),i=Y();return{watchTeamMembers:O.useCallback(()=>{if(!r||!t)return;const l=r.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${t}/teammemberships`);return l.on(r.WATCH_ERROR,s=>{console.log("ERROR: Failed to watch resource",s),a({variant:"error",text:pe(s.message)})}),l.on(r.WATCH_ADDED,s=>{le(i,n,{added:s})}),l.on(r.WATCH_MODIFIED,s=>{le(i,n,{modified:s})}),l.on(r.WATCH_DELETED,s=>{le(i,n,{deleted:s})}),l.start(),l.cancel()},[r,t,i,n,a,pe])}},bc=({teamMember:t})=>p.jsxs(q,{children:[p.jsx(I,{children:t.id}),p.jsx(I,{children:t.firstName}),p.jsx(I,{children:t.lastName}),p.jsx(I,{children:t.email})]}),yc=()=>{const t=ye(),r=st(),a=Y(),n=t||r,i=O.useMemo(()=>{var c;if(!n||!a)return[];const s=a.find(u=>u.metadata.name===n);return((c=s==null?void 0:s.spec)==null?void 0:c.members)||[]},[n,a]),{scrollListItems:o,iterator:l}=jt(i,{loadingObject:p.jsx(q,{children:p.jsx(I,{colSpan:4,children:p.jsx("span",{children:"Loading ..."})})}),refFunction:s=>p.jsx(q,{children:p.jsx(I,{colSpan:4,className:"border-b-0 py-0",children:p.jsx("span",{ref:s})})})});return(o==null?void 0:o.length)>0?p.jsx(p.Fragment,{children:p.jsxs(St,{columns:4,children:[p.jsxs(q,{children:[p.jsx(F,{children:"ID"}),p.jsx(F,{children:"Firstname"}),p.jsx(F,{children:"Lastname"}),p.jsx(F,{children:"E-Mail"})]}),l.map(s=>p.jsx(bc,{teamMember:s},s.id))]})}):p.jsx("div",{children:"There are no Team Members to display."})},xc=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px`,_c=({onTeamChange:t})=>{const r=ye(),a=Y();return p.jsx(At,{direction:"vertical",gap:"4",className:`filters ${xc}`,children:p.jsx(Ot,{name:"team",className:"filter-label-select w-64 mb-0",label:"Team",value:r||defaultTeam,onChange:t,children:a==null?void 0:a.map((n,i)=>{var o,l;return p.jsx(Nt,{value:(o=n==null?void 0:n.metadata)==null?void 0:o.name,label:(l=n==null?void 0:n.metadata)==null?void 0:l.name},i)})})})};function et(t,r){(r==null||r>t.length)&&(r=t.length);for(var a=0,n=Array(r);a<r;a++)n[a]=t[a];return n}function $c(t){if(Array.isArray(t))return t}function Tc(t,r,a){return(r=Cc(r))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function jc(t,r){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,i,o,l,s=[],c=!0,u=!1;try{if(o=(a=a.call(t)).next,r!==0)for(;!(c=(n=o.call(a)).done)&&(s.push(n.value),s.length!==r);c=!0);}catch(f){u=!0,i=f}finally{try{if(!c&&a.return!=null&&(l=a.return(),Object(l)!==l))return}finally{if(u)throw i}}return s}}function Sc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,n)}return a}function ue(t){for(var r,a=1;a<arguments.length;a++)r=arguments[a]==null?{}:arguments[a],a%2?tt(Object(r),!0).forEach(function(n){Tc(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))});return t}function Ac(t,r){if(t==null)return{};var a,n,i=Oc(t,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],r.includes(a)||{}.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}function Oc(t,r){if(t==null)return{};var a={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(r.includes(n))continue;a[n]=t[n]}return a}function rt(t,r){return $c(t)||jc(t,r)||Ec(t,r)||Sc()}function Nc(t,r){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Cc(t){var r=Nc(t,"string");return typeof r=="symbol"?r:r+""}function we(t){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},we(t)}function Ec(t,r){if(t){if(typeof t=="string")return et(t,r);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?et(t,r):void 0}}var Pc=["mock"],E=function(t){return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",Accept:"application/json"}})},A=function(t){return new Response(t,{status:404,headers:{"Content-Type":"application/json",Accept:"application/json"}})},b=null,W=null,be=null,k=!1,kc=function(t){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};if(r!=null&&r.debug&&(k=!0),t===null)return k&&console.log("fetchProxyInitDB:: Reset localDB"),void(b=null);if(b&&console.warn('fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."'),we(t)!=="object")throw new Error("It seems that jsonData is not a valid JSON object.");if(r!=null&&r.rewriteRoutes){k&&console.log("fetchProxyInitDB:: rewriteRoutes::",r==null?void 0:r.rewriteRoutes);var a=Object.fromEntries(Object.entries(r==null?void 0:r.rewriteRoutes).filter(function(o){var l=rt(o,1),s=l[0];try{return new RegExp(s),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(s," for routes is not a valid regex expresion.")),!1}}));W=a}if(r!=null&&r.rewriteResponses){var n=["GET","POST","PUT","DELETE","HEAD","OPTIONS"],i={};k&&console.log("fetchProxyInitDB:: rewriteResponses::",r==null?void 0:r.rewriteResponses),Object.keys(r==null?void 0:r.rewriteResponses).forEach(function(o){if(!n.includes(o))return void console.warn("It seems that the given rewrite rule ".concat(o," for responses is not a valid method."));var l=r==null?void 0:r.rewriteResponses[o],s=Object.fromEntries(Object.entries(l).filter(function(c){var u=rt(c,1),f=u[0];try{return new RegExp(f),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(f," for responses is not a valid regex expresion.")),!1}}));i[o]=s}),be=i}if(Object.keys(t).some(function(o){return!Array.isArray(t[o])}))throw new Error("It seems that jsonData is not a collection of key value pairs with values as arrays.");k&&console.log("fetchProxyInitDB:: jsonData::",t),b=t},Ic=function(t,r){var a,n=r.mock,i=Ac(r,Pc);if(n!==!0&&n!=="true")return console.log("fetchProxy:: real fetch for::",t),fetch(t,i);if(!b)throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`);var o=null;try{o=new URL(t)}catch{throw new Error("Invalid URL: ".concat(t))}var l=r==null?void 0:r.method;l||(l="GET");var s=o.pathname,c=null;if((a=be)!==null&&a!==void 0&&a[l]){var u=be[l];for(var f in u){var _=new RegExp(f);if(_.test(s)){c=E(u[f]);break}}}if(W)for(var v in W){var j=new RegExp(v);if(j.test(s)){s=s.replace(j,W[v]);break}}var d=s.split("/")[1],h=s.split("/")[2];k&&console.log("fetchProxy:: mock fetch with method: ",l,", path: ",s,", object: ",d,", id: ",h,", customResponse: ",c);var T=r==null?void 0:r.body;return l==="GET"?new Promise(function(m){if(d){var w;if((w=b)!==null&&w!==void 0&&w[d]){var y;if(h){var x,$=(x=b)===null||x===void 0?void 0:x[d].findIndex(function(H){return H.id==h});if(0<=$){var S;return m(c||E((S=b)===null||S===void 0||(S=S[d])===null||S===void 0?void 0:S[$]))}return m(A("No id ".concat(h," for object ").concat(d," found")))}return m(c||E((y=b)===null||y===void 0?void 0:y[d]))}return m(A("No object ".concat(d," found")))}m(E(c||b))}):l==="POST"?new Promise(function(m){var w,y,x;d&&T||m(A("No object '".concat(d,"' or body '").concat(T,"' given"))),(w=b)!==null&&w!==void 0&&w[d]||m(A("No object '".concat(d,"' found")));var $=JSON.parse(T);if($.id=1,0<((y=b)===null||y===void 0||(y=y[d])===null||y===void 0?void 0:y.length)){var S,H=(S=b)===null||S===void 0?void 0:S[d].reduce(function(Te,je){return je.id>Te.id?je:Te});$.id=((H==null?void 0:H.id)||0)+1}(x=b)===null||x===void 0||x[d].push($),m(c||E($))}):l==="PUT"?new Promise(function(m){var w,y;d&&h||m(A("No object '".concat(d,"' or id '").concat(h,"' given"))),(w=b)!==null&&w!==void 0&&w[d]||m(A("No object '".concat(d,"' found")));var x=(y=b)===null||y===void 0?void 0:y[d].findIndex(function($){return $.id==h});return 0<=x?(b[d][x]=ue(ue(ue({},b[d][x]),JSON.parse(T)),{},{id:b[d][x].id}),void m(c||E(b[d][x]))):m(A("No item with id '".concat(h,"' found")))}):l==="DELETE"?new Promise(function(m){var w,y;d&&h||m(A("No object '".concat(d,"' or id '").concat(h,"' given"))),(w=b)!==null&&w!==void 0&&w[d]||m(A("No object '".concat(d,"' found")));var x=(y=b)===null||y===void 0?void 0:y[d].findIndex(function($){return $.id==h});return 0<=x?(b[d].splice(x,1),void m(c||E("Object deleted"))):m(A("No item with id '".concat(h,"' found")))}):void 0};const Dc=()=>{const t=Y(),r=Ht(),a=it(),{watchTeamMembers:n}=wc(),{setCurrentTeam:i,setTeamMemberships:o}=Q(),{addMessage:l}=nt();O.useEffect(()=>!n||r?void 0:n(),[n]),O.useEffect(()=>{r&&Ic(`${a}/teammemberships`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mock:!0}).then(c=>(c.ok||l({variant:"error",text:pe(e.message)}),c.json())).then(c=>{o(c)})},[r]);function s(c){i(c)}return p.jsxs(Dt,{py:!0,px:!0,children:[p.jsx(Ct,{className:"pb-6"}),(t==null?void 0:t.length)>0&&p.jsxs(p.Fragment,{children:[p.jsx(_c,{onTeamChange:s}),p.jsx(yc,{})]})]})},Rc="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity: .5 }.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}",at="greenhouse-team-admin",de="team",Lc=t=>{const[r,a]=O.useState(!1),n=Et(t||at),{setCurrentTeam:i}=Q(),o=ye(),l=st();O.useEffect(()=>{var c;if(r)return;console.log(`Team-Admin: (${t||at}) setting up state from url:`,n.currentState());const s=(c=n.currentState())==null?void 0:c[de];s&&i(s),a(!0)},[i]),O.useEffect(()=>{var s;r&&(n.push({[de]:o||l}),console.log("useUrlStateKey - after  urlStateManager.push: ",(s=n.currentState())==null?void 0:s[de]))},[r,o,l])},Mc=({consumerId:t})=>(Lc(t),null),Gc=[{metadata:{name:"team1",namespace:"ns1"},spec:{members:[{email:"new1@example.com",firstName:"Maximilian",id:"abc123",lastName:"Müller"},{email:"new2@example.com",firstName:"Sophie",id:"def456",lastName:"Schmidt"}]}},{metadata:{name:"team2",namespace:"ns1"},spec:{members:[{email:"new3@example.com",firstName:"Felix",id:"ghi789",lastName:"Schulz"},{email:"new4@example.com",firstName:"Emilia",id:"jkl012",lastName:"Becker"},{email:"new5@example.com",firstName:"Lukas",id:"mno345",lastName:"Koch"},{email:"new6@example.com",firstName:"Julia",id:"pqr678",lastName:"Wagner"},{email:"new7@example.com",firstName:"Leonie",id:"stu901",lastName:"Hoffmann"}]}},{metadata:{name:"team3",namespace:"ns1"},spec:{members:[{email:"new8@example.com",firstName:"Matthias",id:"vwx234",lastName:"Schäfer"},{email:"new9@example.com",firstName:"Laura",id:"yza567",lastName:"Bauer"},{email:"new10@example.com",firstName:"Tim",id:"bcd890",lastName:"Hofmann"},{email:"new11@example.com",firstName:"Nina",id:"efg123",lastName:"Lehmann"},{email:"new12@example.com",firstName:"Sebastian",id:"hij456",lastName:"Krause"},{email:"new13@example.com",firstName:"Vanessa",id:"klm789",lastName:"Richter"},{email:"new14@example.com",firstName:"Max",id:"nop012",lastName:"Fischer"},{email:"new15@example.com",firstName:"Carolin",id:"qrs345",lastName:"Schneider"},{email:"new16@example.com",firstName:"Tobias",id:"tuv678",lastName:"Gluch"},{email:"new17@example.com",firstName:"Elena",id:"wxy901",lastName:"Beck"},{email:"new18@example.com",firstName:"Lars",id:"zab234",lastName:"Lorenz"},{email:"new19@example.com",firstName:"Julian",id:"cde567",lastName:"Vogel"},{email:"new20@example.com",firstName:"Johanna",id:"efg890",lastName:"Schwarz"},{email:"new21@example.com",firstName:"Dominik",id:"hij123",lastName:"Wolf"},{email:"new22@example.com",firstName:"Marie",id:"klm456",lastName:"Roth"},{email:"new23@example.com",firstName:"Moritz",id:"nop789",lastName:"Walter"},{email:"new24@example.com",firstName:"Lisa",id:"qrs012",lastName:"Kühn"}]}},{apiVersion:"greenhouse.sap/v1alpha1",kind:"TeamMembership",metadata:{name:"team4",namespace:"ns1"},spec:{members:[{email:"new25@example.com",firstName:"Jonathan",id:"tuv123",lastName:"Fuchs"},{email:"new26@example.com",firstName:"Hannah",id:"wxy456",lastName:"Herrmann"},{email:"new27@example.com",firstName:"Muhammad",id:"zab789",lastName:"Salz"},{email:"new28@example.com",firstName:"Laura",id:"cde012",lastName:"Günther"},{email:"new29@example.com",firstName:"Maximilian",id:"efg345",lastName:"Wenzel"},{email:"new30@example.com",firstName:"Sophia",id:"hij678",lastName:"Krüger"},{email:"new31@example.com",firstName:"Lukas",id:"klm901",lastName:"Hein"},{email:"new32@example.com",firstName:"Marie",id:"nop234",lastName:"Sauer"},{email:"new33@example.com",firstName:"Tim",id:"qrs567",lastName:"Schubert"},{email:"new34@example.com",firstName:"Vanessa",id:"tuv890",lastName:"Hahn"}]}}],zc={teammemberships:Gc},Hc=(t={})=>{const{initialize:r,setMock:a}=Q();return t.isMock===!0||t.isMock==="true"?(a(!0),kc(zc,{debug:!0,rewriteRoutes:{"/(?:apis/greenhouse\\.sap/v1alpha1/namespaces/[^/]+/teammemberships/(.*))":"/$1"}}),r(window.location.origin,null,null,null)):r(t.apiEndpoint,t.token,t.namespace,t.userGroup),p.jsxs(kt,{children:[p.jsx(Mc,{}),p.jsx(Rt,{pageHeader:"Converged Cloud | Team Members",embedded:t.embedded==="true"||t.embedded===!0,children:p.jsx(Dc,{props:t})})]})},Wc=t=>p.jsxs(Pt,{theme:`${t.theme?t.theme:"theme-dark"}`,children:[p.jsx("style",{children:Rc.toString()}),p.jsx(Mt,{children:p.jsx(Hc,{...t})})]});export{Wc as default};
