import{c as Da,j as f,u as La,H as Ga,t as Ha,f as N,Z as P,a2 as Fa,Y as Ma,g as F,h as Na,B as Ka,F as Ua,R as za,e as Ba,x as $a,y as Wa,Q as Ja,C as Va}from"./Shell-CPBP_i-V.js";import{a as E,d as M,g as Ya}from"./index-DOxb1Xyc.js";import"./index-CpWNG-sz.js";const Qa=()=>Da((r,e)=>({endpoint:"",namespace:"",token:"",currentTeam:"",defaultTeam:"",teamMemberships:[],namespace:"",actions:{initialize:(t,a,n,i)=>r({endpoint:t,namespace:n,token:a,currentTeam:i}),setCurrentTeam:t=>r({currentTeam:t}),setTeamMemberships:t=>{var n,i;let a=e().currentTeam;(a===""||a===void 0||a===null)&&(a=(i=(n=t==null?void 0:t[0])==null?void 0:n.metadata)==null?void 0:i.name),r({teamMemberships:t,currentTeam:a})}}})),xa=E.createContext(),Za=({children:r})=>f.jsx(xa.Provider,{value:Qa(),children:r}),k=r=>La(E.useContext(xa),r),Xa=()=>k(r=>r.endpoint),rn=()=>k(r=>r.namespace),en=()=>k(r=>r.token),ke=()=>k(r=>r.currentTeam),qa=()=>k(r=>r.defaultTeam),K=()=>k(r=>r.teamMemberships),U=()=>k(r=>r.actions),tn=()=>{const r=Xa(),e=en();return{client:r&&e?Ga({apiEndpoint:r,token:e}):null}},Ge=r=>{let e=r;return typeof r=="string"&&(e=He(r)),typeof r=="object"&&(console.log("Error parsing error message::object"),r!=null&&r.message&&(e=He(r==null?void 0:r.message))),e},He=r=>{let e=r;try{e=JSON.parse(r),e!=null&&e.message&&(e=(e!=null&&e.code?`${e.code}, `:"")+(e==null?void 0:e.message))}catch(t){console.error(t)}return e};var Q,Fe;function an(){if(Fe)return Q;Fe=1;function r(){this.__data__=[],this.size=0}return Q=r,Q}var Z,Me;function Ta(){if(Me)return Z;Me=1;function r(e,t){return e===t||e!==e&&t!==t}return Z=r,Z}var X,Ne;function z(){if(Ne)return X;Ne=1;var r=Ta();function e(t,a){for(var n=t.length;n--;)if(r(t[n][0],a))return n;return-1}return X=e,X}var rr,Ke;function nn(){if(Ke)return rr;Ke=1;var r=z(),e=Array.prototype,t=e.splice;function a(n){var i=this.__data__,o=r(i,n);if(o<0)return!1;var s=i.length-1;return o==s?i.pop():t.call(i,o,1),--this.size,!0}return rr=a,rr}var er,Ue;function on(){if(Ue)return er;Ue=1;var r=z();function e(t){var a=this.__data__,n=r(a,t);return n<0?void 0:a[n][1]}return er=e,er}var tr,ze;function sn(){if(ze)return tr;ze=1;var r=z();function e(t){return r(this.__data__,t)>-1}return tr=e,tr}var ar,Be;function un(){if(Be)return ar;Be=1;var r=z();function e(t,a){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,a])):n[i][1]=a,this}return ar=e,ar}var nr,$e;function B(){if($e)return nr;$e=1;var r=an(),e=nn(),t=on(),a=sn(),n=un();function i(o){var s=-1,u=o==null?0:o.length;for(this.clear();++s<u;){var c=o[s];this.set(c[0],c[1])}}return i.prototype.clear=r,i.prototype.delete=e,i.prototype.get=t,i.prototype.has=a,i.prototype.set=n,nr=i,nr}var ir,We;function cn(){if(We)return ir;We=1;var r=B();function e(){this.__data__=new r,this.size=0}return ir=e,ir}var or,Je;function ln(){if(Je)return or;Je=1;function r(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}return or=r,or}var sr,Ve;function fn(){if(Ve)return sr;Ve=1;function r(e){return this.__data__.get(e)}return sr=r,sr}var ur,Ye;function dn(){if(Ye)return ur;Ye=1;function r(e){return this.__data__.has(e)}return ur=r,ur}var cr,Qe;function Aa(){if(Qe)return cr;Qe=1;var r=typeof M=="object"&&M&&M.Object===Object&&M;return cr=r,cr}var lr,Ze;function I(){if(Ze)return lr;Ze=1;var r=Aa(),e=typeof self=="object"&&self&&self.Object===Object&&self,t=r||e||Function("return this")();return lr=t,lr}var fr,Xe;function Pe(){if(Xe)return fr;Xe=1;var r=I(),e=r.Symbol;return fr=e,fr}var dr,rt;function hn(){if(rt)return dr;rt=1;var r=Pe(),e=Object.prototype,t=e.hasOwnProperty,a=e.toString,n=r?r.toStringTag:void 0;function i(o){var s=t.call(o,n),u=o[n];try{o[n]=void 0;var c=!0}catch{}var d=a.call(o);return c&&(s?o[n]=u:delete o[n]),d}return dr=i,dr}var hr,et;function vn(){if(et)return hr;et=1;var r=Object.prototype,e=r.toString;function t(a){return e.call(a)}return hr=t,hr}var vr,tt;function $(){if(tt)return vr;tt=1;var r=Pe(),e=hn(),t=vn(),a="[object Null]",n="[object Undefined]",i=r?r.toStringTag:void 0;function o(s){return s==null?s===void 0?n:a:i&&i in Object(s)?e(s):t(s)}return vr=o,vr}var pr,at;function Ca(){if(at)return pr;at=1;function r(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}return pr=r,pr}var gr,nt;function Sa(){if(nt)return gr;nt=1;var r=$(),e=Ca(),t="[object AsyncFunction]",a="[object Function]",n="[object GeneratorFunction]",i="[object Proxy]";function o(s){if(!e(s))return!1;var u=r(s);return u==a||u==n||u==t||u==i}return gr=o,gr}var _r,it;function pn(){if(it)return _r;it=1;var r=I(),e=r["__core-js_shared__"];return _r=e,_r}var br,ot;function gn(){if(ot)return br;ot=1;var r=pn(),e=function(){var a=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}();function t(a){return!!e&&e in a}return br=t,br}var yr,st;function Ra(){if(st)return yr;st=1;var r=Function.prototype,e=r.toString;function t(a){if(a!=null){try{return e.call(a)}catch{}try{return a+""}catch{}}return""}return yr=t,yr}var wr,ut;function _n(){if(ut)return wr;ut=1;var r=Sa(),e=gn(),t=Ca(),a=Ra(),n=/[\\^$.*+?()[\]{}|]/g,i=/^\[object .+?Constructor\]$/,o=Function.prototype,s=Object.prototype,u=o.toString,c=s.hasOwnProperty,d=RegExp("^"+u.call(c).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l(b){if(!t(b)||e(b))return!1;var x=r(b)?d:i;return x.test(a(b))}return wr=l,wr}var mr,ct;function bn(){if(ct)return mr;ct=1;function r(e,t){return e==null?void 0:e[t]}return mr=r,mr}var xr,lt;function D(){if(lt)return xr;lt=1;var r=_n(),e=bn();function t(a,n){var i=e(a,n);return r(i)?i:void 0}return xr=t,xr}var qr,ft;function De(){if(ft)return qr;ft=1;var r=D(),e=I(),t=r(e,"Map");return qr=t,qr}var Tr,dt;function W(){if(dt)return Tr;dt=1;var r=D(),e=r(Object,"create");return Tr=e,Tr}var Ar,ht;function yn(){if(ht)return Ar;ht=1;var r=W();function e(){this.__data__=r?r(null):{},this.size=0}return Ar=e,Ar}var Cr,vt;function wn(){if(vt)return Cr;vt=1;function r(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}return Cr=r,Cr}var Sr,pt;function mn(){if(pt)return Sr;pt=1;var r=W(),e="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function n(i){var o=this.__data__;if(r){var s=o[i];return s===e?void 0:s}return a.call(o,i)?o[i]:void 0}return Sr=n,Sr}var Rr,gt;function xn(){if(gt)return Rr;gt=1;var r=W(),e=Object.prototype,t=e.hasOwnProperty;function a(n){var i=this.__data__;return r?i[n]!==void 0:t.call(i,n)}return Rr=a,Rr}var jr,_t;function qn(){if(_t)return jr;_t=1;var r=W(),e="__lodash_hash_undefined__";function t(a,n){var i=this.__data__;return this.size+=this.has(a)?0:1,i[a]=r&&n===void 0?e:n,this}return jr=t,jr}var Or,bt;function Tn(){if(bt)return Or;bt=1;var r=yn(),e=wn(),t=mn(),a=xn(),n=qn();function i(o){var s=-1,u=o==null?0:o.length;for(this.clear();++s<u;){var c=o[s];this.set(c[0],c[1])}}return i.prototype.clear=r,i.prototype.delete=e,i.prototype.get=t,i.prototype.has=a,i.prototype.set=n,Or=i,Or}var Ir,yt;function An(){if(yt)return Ir;yt=1;var r=Tn(),e=B(),t=De();function a(){this.size=0,this.__data__={hash:new r,map:new(t||e),string:new r}}return Ir=a,Ir}var Er,wt;function Cn(){if(wt)return Er;wt=1;function r(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}return Er=r,Er}var kr,mt;function J(){if(mt)return kr;mt=1;var r=Cn();function e(t,a){var n=t.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}return kr=e,kr}var Pr,xt;function Sn(){if(xt)return Pr;xt=1;var r=J();function e(t){var a=r(this,t).delete(t);return this.size-=a?1:0,a}return Pr=e,Pr}var Dr,qt;function Rn(){if(qt)return Dr;qt=1;var r=J();function e(t){return r(this,t).get(t)}return Dr=e,Dr}var Lr,Tt;function jn(){if(Tt)return Lr;Tt=1;var r=J();function e(t){return r(this,t).has(t)}return Lr=e,Lr}var Gr,At;function On(){if(At)return Gr;At=1;var r=J();function e(t,a){var n=r(this,t),i=n.size;return n.set(t,a),this.size+=n.size==i?0:1,this}return Gr=e,Gr}var Hr,Ct;function ja(){if(Ct)return Hr;Ct=1;var r=An(),e=Sn(),t=Rn(),a=jn(),n=On();function i(o){var s=-1,u=o==null?0:o.length;for(this.clear();++s<u;){var c=o[s];this.set(c[0],c[1])}}return i.prototype.clear=r,i.prototype.delete=e,i.prototype.get=t,i.prototype.has=a,i.prototype.set=n,Hr=i,Hr}var Fr,St;function In(){if(St)return Fr;St=1;var r=B(),e=De(),t=ja(),a=200;function n(i,o){var s=this.__data__;if(s instanceof r){var u=s.__data__;if(!e||u.length<a-1)return u.push([i,o]),this.size=++s.size,this;s=this.__data__=new t(u)}return s.set(i,o),this.size=s.size,this}return Fr=n,Fr}var Mr,Rt;function En(){if(Rt)return Mr;Rt=1;var r=B(),e=cn(),t=ln(),a=fn(),n=dn(),i=In();function o(s){var u=this.__data__=new r(s);this.size=u.size}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=a,o.prototype.has=n,o.prototype.set=i,Mr=o,Mr}var Nr,jt;function kn(){if(jt)return Nr;jt=1;var r="__lodash_hash_undefined__";function e(t){return this.__data__.set(t,r),this}return Nr=e,Nr}var Kr,Ot;function Pn(){if(Ot)return Kr;Ot=1;function r(e){return this.__data__.has(e)}return Kr=r,Kr}var Ur,It;function Dn(){if(It)return Ur;It=1;var r=ja(),e=kn(),t=Pn();function a(n){var i=-1,o=n==null?0:n.length;for(this.__data__=new r;++i<o;)this.add(n[i])}return a.prototype.add=a.prototype.push=e,a.prototype.has=t,Ur=a,Ur}var zr,Et;function Ln(){if(Et)return zr;Et=1;function r(e,t){for(var a=-1,n=e==null?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}return zr=r,zr}var Br,kt;function Gn(){if(kt)return Br;kt=1;function r(e,t){return e.has(t)}return Br=r,Br}var $r,Pt;function Oa(){if(Pt)return $r;Pt=1;var r=Dn(),e=Ln(),t=Gn(),a=1,n=2;function i(o,s,u,c,d,l){var b=u&a,x=o.length,A=s.length;if(x!=A&&!(b&&A>x))return!1;var m=l.get(o),w=l.get(s);if(m&&w)return m==s&&w==o;var y=-1,h=!0,q=u&n?new r:void 0;for(l.set(o,s),l.set(s,o);++y<x;){var g=o[y],T=s[y];if(c)var _=b?c(T,g,y,s,o,l):c(g,T,y,o,s,l);if(_!==void 0){if(_)continue;h=!1;break}if(q){if(!e(s,function(v,C){if(!t(q,C)&&(g===v||d(g,v,u,c,l)))return q.push(C)})){h=!1;break}}else if(!(g===T||d(g,T,u,c,l))){h=!1;break}}return l.delete(o),l.delete(s),h}return $r=i,$r}var Wr,Dt;function Hn(){if(Dt)return Wr;Dt=1;var r=I(),e=r.Uint8Array;return Wr=e,Wr}var Jr,Lt;function Fn(){if(Lt)return Jr;Lt=1;function r(e){var t=-1,a=Array(e.size);return e.forEach(function(n,i){a[++t]=[i,n]}),a}return Jr=r,Jr}var Vr,Gt;function Mn(){if(Gt)return Vr;Gt=1;function r(e){var t=-1,a=Array(e.size);return e.forEach(function(n){a[++t]=n}),a}return Vr=r,Vr}var Yr,Ht;function Nn(){if(Ht)return Yr;Ht=1;var r=Pe(),e=Hn(),t=Ta(),a=Oa(),n=Fn(),i=Mn(),o=1,s=2,u="[object Boolean]",c="[object Date]",d="[object Error]",l="[object Map]",b="[object Number]",x="[object RegExp]",A="[object Set]",m="[object String]",w="[object Symbol]",y="[object ArrayBuffer]",h="[object DataView]",q=r?r.prototype:void 0,g=q?q.valueOf:void 0;function T(_,v,C,S,j,p,O){switch(C){case h:if(_.byteLength!=v.byteLength||_.byteOffset!=v.byteOffset)return!1;_=_.buffer,v=v.buffer;case y:return!(_.byteLength!=v.byteLength||!p(new e(_),new e(v)));case u:case c:case b:return t(+_,+v);case d:return _.name==v.name&&_.message==v.message;case x:case m:return _==v+"";case l:var R=n;case A:var Y=S&o;if(R||(R=i),_.size!=v.size&&!Y)return!1;var H=O.get(_);if(H)return H==v;S|=s,O.set(_,v);var Pa=a(R(_),R(v),S,j,p,O);return O.delete(_),Pa;case w:if(g)return g.call(_)==g.call(v)}return!1}return Yr=T,Yr}var Qr,Ft;function Kn(){if(Ft)return Qr;Ft=1;function r(e,t){for(var a=-1,n=t.length,i=e.length;++a<n;)e[i+a]=t[a];return e}return Qr=r,Qr}var Zr,Mt;function Le(){if(Mt)return Zr;Mt=1;var r=Array.isArray;return Zr=r,Zr}var Xr,Nt;function Un(){if(Nt)return Xr;Nt=1;var r=Kn(),e=Le();function t(a,n,i){var o=n(a);return e(a)?o:r(o,i(a))}return Xr=t,Xr}var re,Kt;function zn(){if(Kt)return re;Kt=1;function r(e,t){for(var a=-1,n=e==null?0:e.length,i=0,o=[];++a<n;){var s=e[a];t(s,a,e)&&(o[i++]=s)}return o}return re=r,re}var ee,Ut;function Bn(){if(Ut)return ee;Ut=1;function r(){return[]}return ee=r,ee}var te,zt;function $n(){if(zt)return te;zt=1;var r=zn(),e=Bn(),t=Object.prototype,a=t.propertyIsEnumerable,n=Object.getOwnPropertySymbols,i=n?function(o){return o==null?[]:(o=Object(o),r(n(o),function(s){return a.call(o,s)}))}:e;return te=i,te}var ae,Bt;function Wn(){if(Bt)return ae;Bt=1;function r(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}return ae=r,ae}var ne,$t;function V(){if($t)return ne;$t=1;function r(e){return e!=null&&typeof e=="object"}return ne=r,ne}var ie,Wt;function Jn(){if(Wt)return ie;Wt=1;var r=$(),e=V(),t="[object Arguments]";function a(n){return e(n)&&r(n)==t}return ie=a,ie}var oe,Jt;function Vn(){if(Jt)return oe;Jt=1;var r=Jn(),e=V(),t=Object.prototype,a=t.hasOwnProperty,n=t.propertyIsEnumerable,i=r(function(){return arguments}())?r:function(o){return e(o)&&a.call(o,"callee")&&!n.call(o,"callee")};return oe=i,oe}var L={exports:{}},se,Vt;function Yn(){if(Vt)return se;Vt=1;function r(){return!1}return se=r,se}L.exports;var Yt;function Ia(){return Yt||(Yt=1,function(r,e){var t=I(),a=Yn(),n=e&&!e.nodeType&&e,i=n&&!0&&r&&!r.nodeType&&r,o=i&&i.exports===n,s=o?t.Buffer:void 0,u=s?s.isBuffer:void 0,c=u||a;r.exports=c}(L,L.exports)),L.exports}var ue,Qt;function Qn(){if(Qt)return ue;Qt=1;var r=9007199254740991,e=/^(?:0|[1-9]\d*)$/;function t(a,n){var i=typeof a;return n=n??r,!!n&&(i=="number"||i!="symbol"&&e.test(a))&&a>-1&&a%1==0&&a<n}return ue=t,ue}var ce,Zt;function Ea(){if(Zt)return ce;Zt=1;var r=9007199254740991;function e(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=r}return ce=e,ce}var le,Xt;function Zn(){if(Xt)return le;Xt=1;var r=$(),e=Ea(),t=V(),a="[object Arguments]",n="[object Array]",i="[object Boolean]",o="[object Date]",s="[object Error]",u="[object Function]",c="[object Map]",d="[object Number]",l="[object Object]",b="[object RegExp]",x="[object Set]",A="[object String]",m="[object WeakMap]",w="[object ArrayBuffer]",y="[object DataView]",h="[object Float32Array]",q="[object Float64Array]",g="[object Int8Array]",T="[object Int16Array]",_="[object Int32Array]",v="[object Uint8Array]",C="[object Uint8ClampedArray]",S="[object Uint16Array]",j="[object Uint32Array]",p={};p[h]=p[q]=p[g]=p[T]=p[_]=p[v]=p[C]=p[S]=p[j]=!0,p[a]=p[n]=p[w]=p[i]=p[y]=p[o]=p[s]=p[u]=p[c]=p[d]=p[l]=p[b]=p[x]=p[A]=p[m]=!1;function O(R){return t(R)&&e(R.length)&&!!p[r(R)]}return le=O,le}var fe,ra;function Xn(){if(ra)return fe;ra=1;function r(e){return function(t){return e(t)}}return fe=r,fe}var G={exports:{}};G.exports;var ea;function ri(){return ea||(ea=1,function(r,e){var t=Aa(),a=e&&!e.nodeType&&e,n=a&&!0&&r&&!r.nodeType&&r,i=n&&n.exports===a,o=i&&t.process,s=function(){try{var u=n&&n.require&&n.require("util").types;return u||o&&o.binding&&o.binding("util")}catch{}}();r.exports=s}(G,G.exports)),G.exports}var de,ta;function ka(){if(ta)return de;ta=1;var r=Zn(),e=Xn(),t=ri(),a=t&&t.isTypedArray,n=a?e(a):r;return de=n,de}var he,aa;function ei(){if(aa)return he;aa=1;var r=Wn(),e=Vn(),t=Le(),a=Ia(),n=Qn(),i=ka(),o=Object.prototype,s=o.hasOwnProperty;function u(c,d){var l=t(c),b=!l&&e(c),x=!l&&!b&&a(c),A=!l&&!b&&!x&&i(c),m=l||b||x||A,w=m?r(c.length,String):[],y=w.length;for(var h in c)(d||s.call(c,h))&&!(m&&(h=="length"||x&&(h=="offset"||h=="parent")||A&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||n(h,y)))&&w.push(h);return w}return he=u,he}var ve,na;function ti(){if(na)return ve;na=1;var r=Object.prototype;function e(t){var a=t&&t.constructor,n=typeof a=="function"&&a.prototype||r;return t===n}return ve=e,ve}var pe,ia;function ai(){if(ia)return pe;ia=1;function r(e,t){return function(a){return e(t(a))}}return pe=r,pe}var ge,oa;function ni(){if(oa)return ge;oa=1;var r=ai(),e=r(Object.keys,Object);return ge=e,ge}var _e,sa;function ii(){if(sa)return _e;sa=1;var r=ti(),e=ni(),t=Object.prototype,a=t.hasOwnProperty;function n(i){if(!r(i))return e(i);var o=[];for(var s in Object(i))a.call(i,s)&&s!="constructor"&&o.push(s);return o}return _e=n,_e}var be,ua;function oi(){if(ua)return be;ua=1;var r=Sa(),e=Ea();function t(a){return a!=null&&e(a.length)&&!r(a)}return be=t,be}var ye,ca;function si(){if(ca)return ye;ca=1;var r=ei(),e=ii(),t=oi();function a(n){return t(n)?r(n):e(n)}return ye=a,ye}var we,la;function ui(){if(la)return we;la=1;var r=Un(),e=$n(),t=si();function a(n){return r(n,t,e)}return we=a,we}var me,fa;function ci(){if(fa)return me;fa=1;var r=ui(),e=1,t=Object.prototype,a=t.hasOwnProperty;function n(i,o,s,u,c,d){var l=s&e,b=r(i),x=b.length,A=r(o),m=A.length;if(x!=m&&!l)return!1;for(var w=x;w--;){var y=b[w];if(!(l?y in o:a.call(o,y)))return!1}var h=d.get(i),q=d.get(o);if(h&&q)return h==o&&q==i;var g=!0;d.set(i,o),d.set(o,i);for(var T=l;++w<x;){y=b[w];var _=i[y],v=o[y];if(u)var C=l?u(v,_,y,o,i,d):u(_,v,y,i,o,d);if(!(C===void 0?_===v||c(_,v,s,u,d):C)){g=!1;break}T||(T=y=="constructor")}if(g&&!T){var S=i.constructor,j=o.constructor;S!=j&&"constructor"in i&&"constructor"in o&&!(typeof S=="function"&&S instanceof S&&typeof j=="function"&&j instanceof j)&&(g=!1)}return d.delete(i),d.delete(o),g}return me=n,me}var xe,da;function li(){if(da)return xe;da=1;var r=D(),e=I(),t=r(e,"DataView");return xe=t,xe}var qe,ha;function fi(){if(ha)return qe;ha=1;var r=D(),e=I(),t=r(e,"Promise");return qe=t,qe}var Te,va;function di(){if(va)return Te;va=1;var r=D(),e=I(),t=r(e,"Set");return Te=t,Te}var Ae,pa;function hi(){if(pa)return Ae;pa=1;var r=D(),e=I(),t=r(e,"WeakMap");return Ae=t,Ae}var Ce,ga;function vi(){if(ga)return Ce;ga=1;var r=li(),e=De(),t=fi(),a=di(),n=hi(),i=$(),o=Ra(),s="[object Map]",u="[object Object]",c="[object Promise]",d="[object Set]",l="[object WeakMap]",b="[object DataView]",x=o(r),A=o(e),m=o(t),w=o(a),y=o(n),h=i;return(r&&h(new r(new ArrayBuffer(1)))!=b||e&&h(new e)!=s||t&&h(t.resolve())!=c||a&&h(new a)!=d||n&&h(new n)!=l)&&(h=function(q){var g=i(q),T=g==u?q.constructor:void 0,_=T?o(T):"";if(_)switch(_){case x:return b;case A:return s;case m:return c;case w:return d;case y:return l}return g}),Ce=h,Ce}var Se,_a;function pi(){if(_a)return Se;_a=1;var r=En(),e=Oa(),t=Nn(),a=ci(),n=vi(),i=Le(),o=Ia(),s=ka(),u=1,c="[object Arguments]",d="[object Array]",l="[object Object]",b=Object.prototype,x=b.hasOwnProperty;function A(m,w,y,h,q,g){var T=i(m),_=i(w),v=T?d:n(m),C=_?d:n(w);v=v==c?l:v,C=C==c?l:C;var S=v==l,j=C==l,p=v==C;if(p&&o(m)){if(!o(w))return!1;T=!0,S=!1}if(p&&!S)return g||(g=new r),T||s(m)?e(m,w,y,h,q,g):t(m,w,v,y,h,q,g);if(!(y&u)){var O=S&&x.call(m,"__wrapped__"),R=j&&x.call(w,"__wrapped__");if(O||R){var Y=O?m.value():m,H=R?w.value():w;return g||(g=new r),q(Y,H,y,h,g)}}return p?(g||(g=new r),a(m,w,y,h,q,g)):!1}return Se=A,Se}var Re,ba;function gi(){if(ba)return Re;ba=1;var r=pi(),e=V();function t(a,n,i,o,s){return a===n?!0:a==null||n==null||!e(a)&&!e(n)?a!==a&&n!==n:r(a,n,i,o,t,s)}return Re=t,Re}var je,ya;function _i(){if(ya)return je;ya=1;var r=gi();function e(t,a){return r(t,a)}return je=e,je}var bi=_i();const wa=Ya(bi);function Oe(r){return r==null?!1:typeof r[Symbol.iterator]=="function"}function Ie(r,e,{added:t,modified:a,deleted:n}){var s;let i=[...r];function o(u){return r.findIndex(function(c){return u===c.metadata.name})}if(t){if(!Oe(t))return;(s=Object.values(t))==null||s.forEach(u=>{i.some(d=>{var l,b;return((l=u==null?void 0:u.metadata)==null?void 0:l.name)===((b=d==null?void 0:d.metadata)==null?void 0:b.name)})||i.push(u)})}if(a){if(!Oe(a))return;a.forEach(u=>{var d;let c=o((d=u==null?void 0:u.metadata)==null?void 0:d.name);c!==-1&&(wa(i[c],u)||(i[c]=u))})}if(n){if(!Oe(n))return;n.forEach(u=>{var d;let c=o((d=u==null?void 0:u.metadata)==null?void 0:d.name);c!==-1&&(i=i.filter((l,b)=>b!==c))})}wa(i,r)||e(i)}const yi=()=>{const r=rn(),{client:e}=tn(),{addMessage:t}=Ha(),{setTeamMemberships:a}=U(),n=K();return{watchTeamMembers:E.useCallback(()=>{if(!e||!r)return;const o=e.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${r}/teammemberships`);return o.on(e.WATCH_ERROR,s=>{console.log("ERROR: Failed to watch resource",s),t({variant:"error",text:Ge(s.message)})}),o.on(e.WATCH_ADDED,s=>{Ie(n,a,{added:s})}),o.on(e.WATCH_MODIFIED,s=>{Ie(n,a,{modified:s})}),o.on(e.WATCH_DELETED,s=>{Ie(n,a,{deleted:s})}),o.start(),o.cancel()},[e,r,n,a,t,Ge])}},wi=({teamMember:r})=>f.jsxs(N,{children:[f.jsx(P,{children:r.id}),f.jsx(P,{children:r.firstName}),f.jsx(P,{children:r.lastName}),f.jsx(P,{children:r.email})]}),mi=()=>{const r=ke(),e=qa(),t=K(),a=r||e,n=E.useMemo(()=>{var u;if(!a||!t)return[];const s=t.find(c=>c.metadata.name===a);return((u=s==null?void 0:s.spec)==null?void 0:u.members)||[]},[a,t]),{scrollListItems:i,iterator:o}=Fa(n,{loadingObject:f.jsx(N,{children:f.jsx(P,{colSpan:4,children:f.jsx("span",{children:"Loading ..."})})}),refFunction:s=>f.jsx(N,{children:f.jsx(P,{colSpan:4,className:"border-b-0 py-0",children:f.jsx("span",{ref:s})})})});return(i==null?void 0:i.length)>0?f.jsx(f.Fragment,{children:f.jsxs(Ma,{columns:4,children:[f.jsxs(N,{children:[f.jsx(F,{children:"ID"}),f.jsx(F,{children:"Firstname"}),f.jsx(F,{children:"Lastname"}),f.jsx(F,{children:"E-Mail"})]}),o.map(s=>f.jsx(wi,{teamMember:s},s.id))]})}):f.jsx("div",{children:"There are no Team Members to display."})},xi=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px`,qi=({onTeamChange:r})=>{const e=ke(),t=K();return f.jsx(Na,{direction:"vertical",gap:"4",className:`filters ${xi}`,children:f.jsx(Ka,{name:"team",className:"filter-label-select w-64 mb-0",label:"Team",value:e||defaultTeam,onChange:r,children:t==null?void 0:t.map((a,n)=>{var i,o;return f.jsx(Ua,{value:(i=a==null?void 0:a.metadata)==null?void 0:i.name,label:(o=a==null?void 0:a.metadata)==null?void 0:o.name},n)})})})},Ti=()=>{const r=K(),{watchTeamMembers:e}=yi(),{setCurrentTeam:t}=U();E.useEffect(()=>e?e():void 0,[e]);function a(n){t(n)}return f.jsxs(za,{py:!0,px:!0,children:[f.jsx(Ba,{className:"pb-6"}),(r==null?void 0:r.length)>0&&f.jsxs(f.Fragment,{children:[f.jsx(qi,{onTeamChange:a}),f.jsx(mi,{})]})]})},Ai="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-auto{margin-left:auto}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-96{width:24rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity, 1))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity, 1))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity, 1))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity, 1))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity, 1))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity, 1))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity, 1))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity, 1))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity, 1))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}.text-opacity-50{--tw-text-opacity: .5 }.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}",ma="greenhouse-team-admin",Ee="team",Ci=r=>{const[e,t]=E.useState(!1),a=$a(r||ma),{setCurrentTeam:n}=U(),i=ke(),o=qa();E.useEffect(()=>{var u;if(e)return;console.log(`Team-Admin: (${r||ma}) setting up state from url:`,a.currentState());const s=(u=a.currentState())==null?void 0:u[Ee];s&&n(s),t(!0)},[n]),E.useEffect(()=>{var s;e&&(a.push({[Ee]:i||o}),console.log("useUrlStateKey - after  urlStateManager.push: ",(s=a.currentState())==null?void 0:s[Ee]))},[e,i,o])},Si=({consumerId:r})=>(Ci(r),null),Ri=(r={})=>{const{initialize:e}=U();return e(r.apiEndpoint,r.token,r.namespace,r.userGroup),f.jsxs(Ja,{children:[f.jsx(Si,{}),f.jsx(Va,{pageHeader:"Converged Cloud | Team Members",embedded:r.embedded==="true"||r.embedded===!0,children:f.jsx(Ti,{props:r})})]})},Ei=r=>f.jsxs(Wa,{theme:`${r.theme?r.theme:"theme-dark"}`,children:[f.jsx("style",{children:Ai.toString()}),f.jsx(Za,{children:f.jsx(Ri,{...r})})]});export{Ei as default};
