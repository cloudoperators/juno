import{a as rt,b as ce,c as ot}from"./chunk-CLHQHCD5.js";import{H as et,I as tt,V as at,W as nt,e as Ye,f as Ve,k as Xe,q as Ze,r as Qe,s as N,t as X,u as R}from"./chunk-I4O5YZ44.js";import{b as n,d as un}from"./chunk-5G2YJ22E.js";var ht=n((xp,dt)=>{function vn(){this.__data__=[],this.size=0}dt.exports=vn});var xe=n((Tp,gt)=>{function wn(t,r){return t===r||t!==t&&r!==r}gt.exports=wn});var Q=n((_p,vt)=>{var yn=xe();function bn(t,r){for(var o=t.length;o--;)if(yn(t[o][0],r))return o;return-1}vt.exports=bn});var yt=n((Sp,wt)=>{var xn=Q(),Tn=Array.prototype,_n=Tn.splice;function Sn(t){var r=this.__data__,o=xn(r,t);if(o<0)return!1;var a=r.length-1;return o==a?r.pop():_n.call(r,o,1),--this.size,!0}wt.exports=Sn});var xt=n((qp,bt)=>{var qn=Q();function An(t){var r=this.__data__,o=qn(r,t);return o<0?void 0:r[o][1]}bt.exports=An});var _t=n((Ap,Tt)=>{var jn=Q();function On(t){return jn(this.__data__,t)>-1}Tt.exports=On});var qt=n((jp,St)=>{var En=Q();function Nn(t,r){var o=this.__data__,a=En(o,t);return a<0?(++this.size,o.push([t,r])):o[a][1]=r,this}St.exports=Nn});var ee=n((Op,At)=>{var Pn=ht(),Ln=yt(),Cn=xt(),Dn=_t(),In=qt();function F(t){var r=-1,o=t==null?0:t.length;for(this.clear();++r<o;){var a=t[r];this.set(a[0],a[1])}}F.prototype.clear=Pn;F.prototype.delete=Ln;F.prototype.get=Cn;F.prototype.has=Dn;F.prototype.set=In;At.exports=F});var Ot=n((Ep,jt)=>{var Mn=ee();function kn(){this.__data__=new Mn,this.size=0}jt.exports=kn});var Nt=n((Np,Et)=>{function Gn(t){var r=this.__data__,o=r.delete(t);return this.size=r.size,o}Et.exports=Gn});var Lt=n((Pp,Pt)=>{function Rn(t){return this.__data__.get(t)}Pt.exports=Rn});var Dt=n((Lp,Ct)=>{function zn(t){return this.__data__.has(t)}Ct.exports=zn});var Te=n((Cp,It)=>{var Fn=typeof global=="object"&&global&&global.Object===Object&&global;It.exports=Fn});var O=n((Dp,Mt)=>{var Hn=Te(),Bn=typeof self=="object"&&self&&self.Object===Object&&self,Un=Hn||Bn||Function("return this")();Mt.exports=Un});var fe=n((Ip,kt)=>{var Kn=O(),Wn=Kn.Symbol;kt.exports=Wn});var Ft=n((Mp,zt)=>{var Gt=fe(),Rt=Object.prototype,$n=Rt.hasOwnProperty,Jn=Rt.toString,te=Gt?Gt.toStringTag:void 0;function Yn(t){var r=$n.call(t,te),o=t[te];try{t[te]=void 0;var a=!0}catch{}var l=Jn.call(t);return a&&(r?t[te]=o:delete t[te]),l}zt.exports=Yn});var Bt=n((kp,Ht)=>{var Vn=Object.prototype,Xn=Vn.toString;function Zn(t){return Xn.call(t)}Ht.exports=Zn});var re=n((Gp,Wt)=>{var Ut=fe(),Qn=Ft(),ei=Bt(),ti="[object Null]",ri="[object Undefined]",Kt=Ut?Ut.toStringTag:void 0;function oi(t){return t==null?t===void 0?ri:ti:Kt&&Kt in Object(t)?Qn(t):ei(t)}Wt.exports=oi});var _e=n((Rp,$t)=>{function ai(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}$t.exports=ai});var Se=n((zp,Jt)=>{var ni=re(),ii=_e(),si="[object AsyncFunction]",li="[object Function]",ui="[object GeneratorFunction]",ci="[object Proxy]";function pi(t){if(!ii(t))return!1;var r=ni(t);return r==li||r==ui||r==si||r==ci}Jt.exports=pi});var Vt=n((Fp,Yt)=>{var mi=O(),fi=mi["__core-js_shared__"];Yt.exports=fi});var Qt=n((Hp,Zt)=>{var qe=Vt(),Xt=function(){var t=/[^.]+$/.exec(qe&&qe.keys&&qe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function di(t){return!!Xt&&Xt in t}Zt.exports=di});var Ae=n((Bp,er)=>{var hi=Function.prototype,gi=hi.toString;function vi(t){if(t!=null){try{return gi.call(t)}catch{}try{return t+""}catch{}}return""}er.exports=vi});var rr=n((Up,tr)=>{var wi=Se(),yi=Qt(),bi=_e(),xi=Ae(),Ti=/[\\^$.*+?()[\]{}|]/g,_i=/^\[object .+?Constructor\]$/,Si=Function.prototype,qi=Object.prototype,Ai=Si.toString,ji=qi.hasOwnProperty,Oi=RegExp("^"+Ai.call(ji).replace(Ti,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ei(t){if(!bi(t)||yi(t))return!1;var r=wi(t)?Oi:_i;return r.test(xi(t))}tr.exports=Ei});var ar=n((Kp,or)=>{function Ni(t,r){return t?.[r]}or.exports=Ni});var M=n((Wp,nr)=>{var Pi=rr(),Li=ar();function Ci(t,r){var o=Li(t,r);return Pi(o)?o:void 0}nr.exports=Ci});var de=n(($p,ir)=>{var Di=M(),Ii=O(),Mi=Di(Ii,"Map");ir.exports=Mi});var oe=n((Jp,sr)=>{var ki=M(),Gi=ki(Object,"create");sr.exports=Gi});var cr=n((Yp,ur)=>{var lr=oe();function Ri(){this.__data__=lr?lr(null):{},this.size=0}ur.exports=Ri});var mr=n((Vp,pr)=>{function zi(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}pr.exports=zi});var dr=n((Xp,fr)=>{var Fi=oe(),Hi="__lodash_hash_undefined__",Bi=Object.prototype,Ui=Bi.hasOwnProperty;function Ki(t){var r=this.__data__;if(Fi){var o=r[t];return o===Hi?void 0:o}return Ui.call(r,t)?r[t]:void 0}fr.exports=Ki});var gr=n((Zp,hr)=>{var Wi=oe(),$i=Object.prototype,Ji=$i.hasOwnProperty;function Yi(t){var r=this.__data__;return Wi?r[t]!==void 0:Ji.call(r,t)}hr.exports=Yi});var wr=n((Qp,vr)=>{var Vi=oe(),Xi="__lodash_hash_undefined__";function Zi(t,r){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Vi&&r===void 0?Xi:r,this}vr.exports=Zi});var br=n((em,yr)=>{var Qi=cr(),es=mr(),ts=dr(),rs=gr(),os=wr();function H(t){var r=-1,o=t==null?0:t.length;for(this.clear();++r<o;){var a=t[r];this.set(a[0],a[1])}}H.prototype.clear=Qi;H.prototype.delete=es;H.prototype.get=ts;H.prototype.has=rs;H.prototype.set=os;yr.exports=H});var _r=n((tm,Tr)=>{var xr=br(),as=ee(),ns=de();function is(){this.size=0,this.__data__={hash:new xr,map:new(ns||as),string:new xr}}Tr.exports=is});var qr=n((rm,Sr)=>{function ss(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}Sr.exports=ss});var ae=n((om,Ar)=>{var ls=qr();function us(t,r){var o=t.__data__;return ls(r)?o[typeof r=="string"?"string":"hash"]:o.map}Ar.exports=us});var Or=n((am,jr)=>{var cs=ae();function ps(t){var r=cs(this,t).delete(t);return this.size-=r?1:0,r}jr.exports=ps});var Nr=n((nm,Er)=>{var ms=ae();function fs(t){return ms(this,t).get(t)}Er.exports=fs});var Lr=n((im,Pr)=>{var ds=ae();function hs(t){return ds(this,t).has(t)}Pr.exports=hs});var Dr=n((sm,Cr)=>{var gs=ae();function vs(t,r){var o=gs(this,t),a=o.size;return o.set(t,r),this.size+=o.size==a?0:1,this}Cr.exports=vs});var je=n((lm,Ir)=>{var ws=_r(),ys=Or(),bs=Nr(),xs=Lr(),Ts=Dr();function B(t){var r=-1,o=t==null?0:t.length;for(this.clear();++r<o;){var a=t[r];this.set(a[0],a[1])}}B.prototype.clear=ws;B.prototype.delete=ys;B.prototype.get=bs;B.prototype.has=xs;B.prototype.set=Ts;Ir.exports=B});var kr=n((um,Mr)=>{var _s=ee(),Ss=de(),qs=je(),As=200;function js(t,r){var o=this.__data__;if(o instanceof _s){var a=o.__data__;if(!Ss||a.length<As-1)return a.push([t,r]),this.size=++o.size,this;o=this.__data__=new qs(a)}return o.set(t,r),this.size=o.size,this}Mr.exports=js});var Rr=n((cm,Gr)=>{var Os=ee(),Es=Ot(),Ns=Nt(),Ps=Lt(),Ls=Dt(),Cs=kr();function U(t){var r=this.__data__=new Os(t);this.size=r.size}U.prototype.clear=Es;U.prototype.delete=Ns;U.prototype.get=Ps;U.prototype.has=Ls;U.prototype.set=Cs;Gr.exports=U});var Fr=n((pm,zr)=>{var Ds="__lodash_hash_undefined__";function Is(t){return this.__data__.set(t,Ds),this}zr.exports=Is});var Br=n((mm,Hr)=>{function Ms(t){return this.__data__.has(t)}Hr.exports=Ms});var Kr=n((fm,Ur)=>{var ks=je(),Gs=Fr(),Rs=Br();function he(t){var r=-1,o=t==null?0:t.length;for(this.__data__=new ks;++r<o;)this.add(t[r])}he.prototype.add=he.prototype.push=Gs;he.prototype.has=Rs;Ur.exports=he});var $r=n((dm,Wr)=>{function zs(t,r){for(var o=-1,a=t==null?0:t.length;++o<a;)if(r(t[o],o,t))return!0;return!1}Wr.exports=zs});var Yr=n((hm,Jr)=>{function Fs(t,r){return t.has(r)}Jr.exports=Fs});var Oe=n((gm,Vr)=>{var Hs=Kr(),Bs=$r(),Us=Yr(),Ks=1,Ws=2;function $s(t,r,o,a,l,i){var u=o&Ks,s=t.length,c=r.length;if(s!=c&&!(u&&c>s))return!1;var m=i.get(t),g=i.get(r);if(m&&g)return m==r&&g==t;var T=-1,v=!0,S=o&Ws?new Hs:void 0;for(i.set(t,r),i.set(r,t);++T<s;){var p=t[T],d=r[T];if(a)var _=u?a(d,p,T,r,t,i):a(p,d,T,t,r,i);if(_!==void 0){if(_)continue;v=!1;break}if(S){if(!Bs(r,function(f,w){if(!Us(S,w)&&(p===f||l(p,f,o,a,i)))return S.push(w)})){v=!1;break}}else if(!(p===d||l(p,d,o,a,i))){v=!1;break}}return i.delete(t),i.delete(r),v}Vr.exports=$s});var Zr=n((vm,Xr)=>{var Js=O(),Ys=Js.Uint8Array;Xr.exports=Ys});var eo=n((wm,Qr)=>{function Vs(t){var r=-1,o=Array(t.size);return t.forEach(function(a,l){o[++r]=[l,a]}),o}Qr.exports=Vs});var ro=n((ym,to)=>{function Xs(t){var r=-1,o=Array(t.size);return t.forEach(function(a){o[++r]=a}),o}to.exports=Xs});var so=n((bm,io)=>{var oo=fe(),ao=Zr(),Zs=xe(),Qs=Oe(),el=eo(),tl=ro(),rl=1,ol=2,al="[object Boolean]",nl="[object Date]",il="[object Error]",sl="[object Map]",ll="[object Number]",ul="[object RegExp]",cl="[object Set]",pl="[object String]",ml="[object Symbol]",fl="[object ArrayBuffer]",dl="[object DataView]",no=oo?oo.prototype:void 0,Ee=no?no.valueOf:void 0;function hl(t,r,o,a,l,i,u){switch(o){case dl:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case fl:return!(t.byteLength!=r.byteLength||!i(new ao(t),new ao(r)));case al:case nl:case ll:return Zs(+t,+r);case il:return t.name==r.name&&t.message==r.message;case ul:case pl:return t==r+"";case sl:var s=el;case cl:var c=a&rl;if(s||(s=tl),t.size!=r.size&&!c)return!1;var m=u.get(t);if(m)return m==r;a|=ol,u.set(t,r);var g=Qs(s(t),s(r),a,l,i,u);return u.delete(t),g;case ml:if(Ee)return Ee.call(t)==Ee.call(r)}return!1}io.exports=hl});var uo=n((xm,lo)=>{function gl(t,r){for(var o=-1,a=r.length,l=t.length;++o<a;)t[l+o]=r[o];return t}lo.exports=gl});var ge=n((Tm,co)=>{var vl=Array.isArray;co.exports=vl});var mo=n((_m,po)=>{var wl=uo(),yl=ge();function bl(t,r,o){var a=r(t);return yl(t)?a:wl(a,o(t))}po.exports=bl});var ho=n((Sm,fo)=>{function xl(t,r){for(var o=-1,a=t==null?0:t.length,l=0,i=[];++o<a;){var u=t[o];r(u,o,t)&&(i[l++]=u)}return i}fo.exports=xl});var vo=n((qm,go)=>{function Tl(){return[]}go.exports=Tl});var bo=n((Am,yo)=>{var _l=ho(),Sl=vo(),ql=Object.prototype,Al=ql.propertyIsEnumerable,wo=Object.getOwnPropertySymbols,jl=wo?function(t){return t==null?[]:(t=Object(t),_l(wo(t),function(r){return Al.call(t,r)}))}:Sl;yo.exports=jl});var To=n((jm,xo)=>{function Ol(t,r){for(var o=-1,a=Array(t);++o<t;)a[o]=r(o);return a}xo.exports=Ol});var ne=n((Om,_o)=>{function El(t){return t!=null&&typeof t=="object"}_o.exports=El});var qo=n((Em,So)=>{var Nl=re(),Pl=ne(),Ll="[object Arguments]";function Cl(t){return Pl(t)&&Nl(t)==Ll}So.exports=Cl});var Eo=n((Nm,Oo)=>{var Ao=qo(),Dl=ne(),jo=Object.prototype,Il=jo.hasOwnProperty,Ml=jo.propertyIsEnumerable,kl=Ao(function(){return arguments}())?Ao:function(t){return Dl(t)&&Il.call(t,"callee")&&!Ml.call(t,"callee")};Oo.exports=kl});var Po=n((Pm,No)=>{function Gl(){return!1}No.exports=Gl});var Ne=n((ie,K)=>{var Rl=O(),zl=Po(),Do=typeof ie=="object"&&ie&&!ie.nodeType&&ie,Lo=Do&&typeof K=="object"&&K&&!K.nodeType&&K,Fl=Lo&&Lo.exports===Do,Co=Fl?Rl.Buffer:void 0,Hl=Co?Co.isBuffer:void 0,Bl=Hl||zl;K.exports=Bl});var Mo=n((Lm,Io)=>{var Ul=9007199254740991,Kl=/^(?:0|[1-9]\d*)$/;function Wl(t,r){var o=typeof t;return r=r??Ul,!!r&&(o=="number"||o!="symbol"&&Kl.test(t))&&t>-1&&t%1==0&&t<r}Io.exports=Wl});var Pe=n((Cm,ko)=>{var $l=9007199254740991;function Jl(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=$l}ko.exports=Jl});var Ro=n((Dm,Go)=>{var Yl=re(),Vl=Pe(),Xl=ne(),Zl="[object Arguments]",Ql="[object Array]",eu="[object Boolean]",tu="[object Date]",ru="[object Error]",ou="[object Function]",au="[object Map]",nu="[object Number]",iu="[object Object]",su="[object RegExp]",lu="[object Set]",uu="[object String]",cu="[object WeakMap]",pu="[object ArrayBuffer]",mu="[object DataView]",fu="[object Float32Array]",du="[object Float64Array]",hu="[object Int8Array]",gu="[object Int16Array]",vu="[object Int32Array]",wu="[object Uint8Array]",yu="[object Uint8ClampedArray]",bu="[object Uint16Array]",xu="[object Uint32Array]",h={};h[fu]=h[du]=h[hu]=h[gu]=h[vu]=h[wu]=h[yu]=h[bu]=h[xu]=!0;h[Zl]=h[Ql]=h[pu]=h[eu]=h[mu]=h[tu]=h[ru]=h[ou]=h[au]=h[nu]=h[iu]=h[su]=h[lu]=h[uu]=h[cu]=!1;function Tu(t){return Xl(t)&&Vl(t.length)&&!!h[Yl(t)]}Go.exports=Tu});var Fo=n((Im,zo)=>{function _u(t){return function(r){return t(r)}}zo.exports=_u});var Bo=n((se,W)=>{var Su=Te(),Ho=typeof se=="object"&&se&&!se.nodeType&&se,le=Ho&&typeof W=="object"&&W&&!W.nodeType&&W,qu=le&&le.exports===Ho,Le=qu&&Su.process,Au=function(){try{var t=le&&le.require&&le.require("util").types;return t||Le&&Le.binding&&Le.binding("util")}catch{}}();W.exports=Au});var Ce=n((Mm,Wo)=>{var ju=Ro(),Ou=Fo(),Uo=Bo(),Ko=Uo&&Uo.isTypedArray,Eu=Ko?Ou(Ko):ju;Wo.exports=Eu});var Jo=n((km,$o)=>{var Nu=To(),Pu=Eo(),Lu=ge(),Cu=Ne(),Du=Mo(),Iu=Ce(),Mu=Object.prototype,ku=Mu.hasOwnProperty;function Gu(t,r){var o=Lu(t),a=!o&&Pu(t),l=!o&&!a&&Cu(t),i=!o&&!a&&!l&&Iu(t),u=o||a||l||i,s=u?Nu(t.length,String):[],c=s.length;for(var m in t)(r||ku.call(t,m))&&!(u&&(m=="length"||l&&(m=="offset"||m=="parent")||i&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Du(m,c)))&&s.push(m);return s}$o.exports=Gu});var Vo=n((Gm,Yo)=>{var Ru=Object.prototype;function zu(t){var r=t&&t.constructor,o=typeof r=="function"&&r.prototype||Ru;return t===o}Yo.exports=zu});var Zo=n((Rm,Xo)=>{function Fu(t,r){return function(o){return t(r(o))}}Xo.exports=Fu});var ea=n((zm,Qo)=>{var Hu=Zo(),Bu=Hu(Object.keys,Object);Qo.exports=Bu});var ra=n((Fm,ta)=>{var Uu=Vo(),Ku=ea(),Wu=Object.prototype,$u=Wu.hasOwnProperty;function Ju(t){if(!Uu(t))return Ku(t);var r=[];for(var o in Object(t))$u.call(t,o)&&o!="constructor"&&r.push(o);return r}ta.exports=Ju});var aa=n((Hm,oa)=>{var Yu=Se(),Vu=Pe();function Xu(t){return t!=null&&Vu(t.length)&&!Yu(t)}oa.exports=Xu});var ia=n((Bm,na)=>{var Zu=Jo(),Qu=ra(),ec=aa();function tc(t){return ec(t)?Zu(t):Qu(t)}na.exports=tc});var la=n((Um,sa)=>{var rc=mo(),oc=bo(),ac=ia();function nc(t){return rc(t,ac,oc)}sa.exports=nc});var pa=n((Km,ca)=>{var ua=la(),ic=1,sc=Object.prototype,lc=sc.hasOwnProperty;function uc(t,r,o,a,l,i){var u=o&ic,s=ua(t),c=s.length,m=ua(r),g=m.length;if(c!=g&&!u)return!1;for(var T=c;T--;){var v=s[T];if(!(u?v in r:lc.call(r,v)))return!1}var S=i.get(t),p=i.get(r);if(S&&p)return S==r&&p==t;var d=!0;i.set(t,r),i.set(r,t);for(var _=u;++T<c;){v=s[T];var f=t[v],w=r[v];if(a)var b=u?a(w,f,v,r,t,i):a(f,w,v,t,r,i);if(!(b===void 0?f===w||l(f,w,o,a,i):b)){d=!1;break}_||(_=v=="constructor")}if(d&&!_){var x=t.constructor,q=r.constructor;x!=q&&"constructor"in t&&"constructor"in r&&!(typeof x=="function"&&x instanceof x&&typeof q=="function"&&q instanceof q)&&(d=!1)}return i.delete(t),i.delete(r),d}ca.exports=uc});var fa=n((Wm,ma)=>{var cc=M(),pc=O(),mc=cc(pc,"DataView");ma.exports=mc});var ha=n(($m,da)=>{var fc=M(),dc=O(),hc=fc(dc,"Promise");da.exports=hc});var va=n((Jm,ga)=>{var gc=M(),vc=O(),wc=gc(vc,"Set");ga.exports=wc});var ya=n((Ym,wa)=>{var yc=M(),bc=O(),xc=yc(bc,"WeakMap");wa.exports=xc});var ja=n((Vm,Aa)=>{var De=fa(),Ie=de(),Me=ha(),ke=va(),Ge=ya(),qa=re(),$=Ae(),ba="[object Map]",Tc="[object Object]",xa="[object Promise]",Ta="[object Set]",_a="[object WeakMap]",Sa="[object DataView]",_c=$(De),Sc=$(Ie),qc=$(Me),Ac=$(ke),jc=$(Ge),k=qa;(De&&k(new De(new ArrayBuffer(1)))!=Sa||Ie&&k(new Ie)!=ba||Me&&k(Me.resolve())!=xa||ke&&k(new ke)!=Ta||Ge&&k(new Ge)!=_a)&&(k=function(t){var r=qa(t),o=r==Tc?t.constructor:void 0,a=o?$(o):"";if(a)switch(a){case _c:return Sa;case Sc:return ba;case qc:return xa;case Ac:return Ta;case jc:return _a}return r});Aa.exports=k});var Ia=n((Xm,Da)=>{var Re=Rr(),Oc=Oe(),Ec=so(),Nc=pa(),Oa=ja(),Ea=ge(),Na=Ne(),Pc=Ce(),Lc=1,Pa="[object Arguments]",La="[object Array]",ve="[object Object]",Cc=Object.prototype,Ca=Cc.hasOwnProperty;function Dc(t,r,o,a,l,i){var u=Ea(t),s=Ea(r),c=u?La:Oa(t),m=s?La:Oa(r);c=c==Pa?ve:c,m=m==Pa?ve:m;var g=c==ve,T=m==ve,v=c==m;if(v&&Na(t)){if(!Na(r))return!1;u=!0,g=!1}if(v&&!g)return i||(i=new Re),u||Pc(t)?Oc(t,r,o,a,l,i):Ec(t,r,c,o,a,l,i);if(!(o&Lc)){var S=g&&Ca.call(t,"__wrapped__"),p=T&&Ca.call(r,"__wrapped__");if(S||p){var d=S?t.value():t,_=p?r.value():r;return i||(i=new Re),l(d,_,o,a,i)}}return v?(i||(i=new Re),Nc(t,r,o,a,l,i)):!1}Da.exports=Dc});var Ra=n((Zm,Ga)=>{var Ic=Ia(),Ma=ne();function ka(t,r,o,a,l){return t===r?!0:t==null||r==null||!Ma(t)&&!Ma(r)?t!==t&&r!==r:Ic(t,r,o,a,ka,l)}Ga.exports=ka});var Fa=n((Qm,za)=>{var Mc=Ra();function kc(t,r){return Mc(t,r)}za.exports=kc});import I from"react";import Y,{useEffect as en}from"react";import{useCallback as Rc}from"react";import pn,{createContext as mn,useContext as fn}from"react";import{useStore as dn}from"zustand";import{createStore as cn}from"zustand";var it=()=>cn((t,r)=>({endpoint:"",namespace:"",token:"",currentTeam:"",defaultTeam:"",teamMemberships:[],namespace:"",isMock:!1,actions:{initialize:(o,a,l,i)=>t({endpoint:o,namespace:l,token:a,currentTeam:i}),setCurrentTeam:o=>t({currentTeam:o}),setTeamMemberships:o=>{let a=r().currentTeam;(a===""||a===void 0||a===null)&&(a=o?.[0]?.metadata?.name),t({teamMemberships:o,currentTeam:a})},setMock:o=>t({isMock:o})}}));var st=mn(),hn=({children:t})=>pn.createElement(st.Provider,{value:it()},t),P=t=>dn(fn(st),t),pe=()=>P(t=>t.endpoint),lt=()=>P(t=>t.namespace),ut=()=>P(t=>t.token),ct=()=>P(t=>t.isMock),z=()=>P(t=>t.currentTeam),me=()=>P(t=>t.defaultTeam),L=()=>P(t=>t.teamMemberships),C=()=>P(t=>t.actions),pt=hn;var gn=()=>{let t=pe(),r=ut();return{client:t&&r?at({apiEndpoint:t,token:r}):null}},mt=gn;var Z=t=>{let r=t;return typeof t=="string"&&(r=ft(t)),typeof t=="object"&&(console.log("Error parsing error message::object"),t?.message&&(r=ft(t?.message))),r},ft=t=>{let r=t;try{r=JSON.parse(t),r?.message&&(r=(r?.code?`${r.code}, `:"")+r?.message)}catch(o){console.error(o)}return r};var Fe=un(Fa());function ze(t){return t==null?!1:typeof t[Symbol.iterator]=="function"}function Gc(t,r,{added:o,modified:a,deleted:l}){let i=[...t];function u(s){return t.findIndex(function(c){return s===c.metadata.name})}if(o){if(!ze(o))return;Object.values(o)?.forEach(s=>{i.some(m=>s?.metadata?.name===m?.metadata?.name)||i.push(s)})}if(a){if(!ze(a))return;a.forEach(s=>{let c=u(s?.metadata?.name);c!==-1&&((0,Fe.default)(i[c],s)||(i[c]=s))})}if(l){if(!ze(l))return;l.forEach(s=>{let c=u(s?.metadata?.name);c!==-1&&(i=i.filter((m,g)=>g!==c))})}(0,Fe.default)(i,t)||r(i)}var we=Gc;var Ha=()=>{let t=lt(),{client:r}=mt(),{addMessage:o}=ce(),{setTeamMemberships:a}=C(),l=L();return{watchTeamMembers:Rc(()=>{if(!r||!t)return;let u=r.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${t}/teammemberships`);return u.on(r.WATCH_ERROR,s=>{console.log("ERROR: Failed to watch resource",s),o({variant:"error",text:Z(s.message)})}),u.on(r.WATCH_ADDED,s=>{we(l,a,{added:s})}),u.on(r.WATCH_MODIFIED,s=>{we(l,a,{modified:s})}),u.on(r.WATCH_DELETED,s=>{we(l,a,{deleted:s})}),u.start(),u.cancel()},[r,t,l,a,o,Z])}};import A,{useMemo as Qc}from"react";import ue from"react";var zc=({teamMember:t})=>ue.createElement(R,null,ue.createElement(N,null,t.id),ue.createElement(N,null,t.firstName),ue.createElement(N,null,t.lastName),ue.createElement(N,null,t.email)),Ba=zc;import D,{useState as Ua,useRef as Ka,useEffect as Fc,useMemo as Wa,useCallback as Hc}from"react";function $a(t,r){(r==null||r>t.length)&&(r=t.length);for(var o=0,a=Array(r);o<r;o++)a[o]=t[o];return a}function Bc(t){if(Array.isArray(t))return t}function Uc(t,r,o){return(r=Vc(r))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t}function Kc(t,r){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var a,l,i,u,s=[],c=!0,m=!1;try{if(i=(o=o.call(t)).next,r===0){if(Object(o)!==o)return;c=!1}else for(;!(c=(a=i.call(o)).done)&&(s.push(a.value),s.length!==r);c=!0);}catch(g){m=!0,l=g}finally{try{if(!c&&o.return!=null&&(u=o.return(),Object(u)!==u))return}finally{if(m)throw l}}return s}}function Wc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ja(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),o.push.apply(o,a)}return o}function He(t){for(var r,o=1;o<arguments.length;o++)r=arguments[o]==null?{}:arguments[o],o%2?Ja(Object(r),!0).forEach(function(a){Uc(t,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ja(Object(r)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(r,a))});return t}function $c(t,r){if(t==null)return{};var o,a,l=Jc(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)o=i[a],r.includes(o)||{}.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}function Jc(t,r){if(t==null)return{};var o={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(r.includes(a))continue;o[a]=t[a]}return o}function be(t,r){return Bc(t)||Kc(t,r)||Xc(t,r)||Wc()}function Yc(t,r){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var a=o.call(t,r||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Vc(t){var r=Yc(t,"string");return typeof r=="symbol"?r:r+""}function Be(t){"@babel/helpers - typeof";return Be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Be(t)}function Xc(t,r){if(t){if(typeof t=="string")return $a(t,r);var o={}.toString.call(t).slice(8,-1);return o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set"?Array.from(t):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?$a(t,r):void 0}}var Ya=function(t){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},o=Ua(20),a=be(o,2),l=a[0],i=a[1],u=Ua(!1),s=be(u,2),c=s[0],m=s[1],g=Ka(null),T=Ka();Fc(function(){return function(){return clearTimeout(g.current)}},[]);var v=Wa(function(){if(t)return t.slice(0,l)},[t,l]),S=Hc(function(d){c||(T.current&&T.current.disconnect(),T.current=new IntersectionObserver(function(_){_[0].isIntersecting&&l<=t.length&&(clearTimeout(g.current),m(!0),g.current=setTimeout(function(){m(!1),i(function(f){return f+10})},r?.delay||500))}),d&&T.current.observe(d))},[t,c]),p=Wa(function(){return{map:function(d){var _=v.map(d);return D.createElement(D.Fragment,null,_,c&&r?.showLoading!==!1&&D.createElement(D.Fragment,null,r!=null&&r.loadingObject?r.loadingObject:D.createElement("span",{id:"endlessScrollListLoading"},"Loading...")),r?.showRef!==!1&&D.createElement(D.Fragment,null,r!=null&&r.refFunction?r.refFunction(S):D.createElement("span",{id:"endlessScrollListLastItemRef",ref:S})))}}},[v,S]);return{scrollListItems:v,iterator:p}},Zc=["mock"],G=function(t){return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",Accept:"application/json"}})},E=function(t){return new Response(t,{status:404,headers:{"Content-Type":"application/json",Accept:"application/json"}})},y=null,ye=null,Ue=null,J=!1,Va=function(t){var r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};if(r!=null&&r.debug&&(J=!0),t===null)return J&&console.log("fetchProxyInitDB:: Reset localDB"),void(y=null);if(y&&console.warn('fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."'),Be(t)!=="object")throw new Error("It seems that jsonData is not a valid JSON object.");if(r!=null&&r.rewriteRoutes){J&&console.log("fetchProxyInitDB:: rewriteRoutes::",r?.rewriteRoutes);var o=Object.fromEntries(Object.entries(r?.rewriteRoutes).filter(function(i){var u=be(i,1),s=u[0];try{return new RegExp(s),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(s," for routes is not a valid regex expresion.")),!1}}));ye=o}if(r!=null&&r.rewriteResponses){var a=["GET","POST","PUT","DELETE","HEAD","OPTIONS"],l={};J&&console.log("fetchProxyInitDB:: rewriteResponses::",r?.rewriteResponses),Object.keys(r?.rewriteResponses).forEach(function(i){if(!a.includes(i))return void console.warn("It seems that the given rewrite rule ".concat(i," for responses is not a valid method."));var u=r?.rewriteResponses[i],s=Object.fromEntries(Object.entries(u).filter(function(c){var m=be(c,1),g=m[0];try{return new RegExp(g),!0}catch{return console.warn("It seems that the given rewrite rule ".concat(g," for responses is not a valid regex expresion.")),!1}}));l[i]=s}),Ue=l}if(Object.keys(t).some(function(i){return!Array.isArray(t[i])}))throw new Error("It seems that jsonData is not a collection of key value pairs with values as arrays.");J&&console.log("fetchProxyInitDB:: jsonData::",t),y=t},Xa=function(t,r){var o,a=r.mock,l=$c(r,Zc);if(a!==!0&&a!=="true")return console.log("fetchProxy:: real fetch for::",t),fetch(t,l);if(!y)throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`);var i=null;try{i=new URL(t)}catch{throw new Error("Invalid URL: ".concat(t))}var u=r?.method;u||(u="GET");var s=i.pathname,c=null;if((o=Ue)!==null&&o!==void 0&&o[u]){var m=Ue[u];for(var g in m){var T=new RegExp(g);if(T.test(s)){c=G(m[g]);break}}}if(ye)for(var v in ye){var S=new RegExp(v);if(S.test(s)){s=s.replace(S,ye[v]);break}}var p=s.split("/")[1],d=s.split("/")[2];J&&console.log("fetchProxy:: mock fetch with method: ",u,", path: ",s,", object: ",p,", id: ",d,", customResponse: ",c);var _=r?.body;return u==="GET"?new Promise(function(f){if(p){var w;if((w=y)!==null&&w!==void 0&&w[p]){var b;if(d){var x,q=(x=y)===null||x===void 0?void 0:x[p].findIndex(function(V){return V.id==d});if(0<=q){var j;return f(c||G((j=y)===null||j===void 0||(j=j[p])===null||j===void 0?void 0:j[q]))}return f(E("No id ".concat(d," for object ").concat(p," found")))}return f(c||G((b=y)===null||b===void 0?void 0:b[p]))}return f(E("No object ".concat(p," found")))}f(G(c||y))}):u==="POST"?new Promise(function(f){var w,b,x;p&&_||f(E("No object '".concat(p,"' or body '").concat(_,"' given"))),(w=y)!==null&&w!==void 0&&w[p]||f(E("No object '".concat(p,"' found")));var q=JSON.parse(_);if(q.id=1,0<((b=y)===null||b===void 0||(b=b[p])===null||b===void 0?void 0:b.length)){var j,V=(j=y)===null||j===void 0?void 0:j[p].reduce(function($e,Je){return Je.id>$e.id?Je:$e});q.id=(V?.id||0)+1}(x=y)===null||x===void 0||x[p].push(q),f(c||G(q))}):u==="PUT"?new Promise(function(f){var w,b;p&&d||f(E("No object '".concat(p,"' or id '").concat(d,"' given"))),(w=y)!==null&&w!==void 0&&w[p]||f(E("No object '".concat(p,"' found")));var x=(b=y)===null||b===void 0?void 0:b[p].findIndex(function(q){return q.id==d});return 0<=x?(y[p][x]=He(He(He({},y[p][x]),JSON.parse(_)),{},{id:y[p][x].id}),void f(c||G(y[p][x]))):f(E("No item with id '".concat(d,"' found")))}):u==="DELETE"?new Promise(function(f){var w,b;p&&d||f(E("No object '".concat(p,"' or id '").concat(d,"' given"))),(w=y)!==null&&w!==void 0&&w[p]||f(E("No object '".concat(p,"' found")));var x=(b=y)===null||b===void 0?void 0:b[p].findIndex(function(q){return q.id==d});return 0<=x?(y[p].splice(x,1),void f(c||G("Object deleted"))):f(E("No item with id '".concat(d,"' found")))}):void 0};var ep=()=>{let t=z(),r=me(),o=L(),a=t||r,l=Qc(()=>!a||!o?[]:o.find(c=>c.metadata.name===a)?.spec?.members||[],[a,o]),{scrollListItems:i,iterator:u}=Ya(l,{loadingObject:A.createElement(R,null,A.createElement(N,{colSpan:4},A.createElement("span",null,"Loading ..."))),refFunction:s=>A.createElement(R,null,A.createElement(N,{colSpan:4,className:"border-b-0 py-0"},A.createElement("span",{ref:s})))});return i?.length>0?A.createElement(A.Fragment,null,A.createElement(Qe,{columns:4},A.createElement(R,null,A.createElement(X,null,"ID"),A.createElement(X,null,"Firstname"),A.createElement(X,null,"Lastname"),A.createElement(X,null,"E-Mail")),u.map(s=>A.createElement(Ba,{key:s.id,teamMember:s})))):A.createElement("div",null,"There are no Team Members to display.")},Za=ep;import Ke from"react";var tp=`
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px`,rp=({onTeamChange:t})=>{let r=z(),o=L();return Ke.createElement(Xe,{direction:"vertical",gap:"4",className:`filters ${tp}`},Ke.createElement(et,{name:"team",className:"filter-label-select w-64 mb-0",label:"Team",value:r||defaultTeam,onChange:t},o?.map((a,l)=>Ke.createElement(tt,{value:a?.metadata?.name,label:a?.metadata?.name,key:l}))))},Qa=rp;var op=()=>{let t=L(),r=ct(),o=pe(),{watchTeamMembers:a}=Ha(),{setCurrentTeam:l,setTeamMemberships:i}=C(),{addMessage:u}=ce();en(()=>!a||r?void 0:a(),[a]),en(()=>{r&&Xa(`${o}/teammemberships`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},mock:!0}).then(c=>(c.ok||u({variant:"error",text:Z(e.message)}),c.json())).then(c=>{i(c)})},[r]);function s(c){l(c)}return Y.createElement(Ze,{py:!0,px:!0},Y.createElement(ot,{className:"pb-6"}),t?.length>0&&Y.createElement(Y.Fragment,null,Y.createElement(Qa,{onTeamChange:s}),Y.createElement(Za,null)))},tn=op;var rn=`/* Do not remove these tailwind directives. Without them styles won't work as expected */
*, ::before, ::after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  
}
.container {
    width: 100%
}
@media (min-width: 640px) {
    .container {
        max-width: 640px
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px
    }
}
@media (min-width: 1024px) {
    .container {
        max-width: 1024px
    }
}
@media (min-width: 1280px) {
    .container {
        max-width: 1280px
    }
}
@media (min-width: 1536px) {
    .container {
        max-width: 1536px
    }
}
@media (min-width: 1856px) {
    .container {
        max-width: 1856px
    }
}
.isolate {
    isolation: isolate
}
.mx-4 {
    margin-left: 1rem;
    margin-right: 1rem
}
.mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem
}
.my-px {
    margin-top: 1px;
    margin-bottom: 1px
}
.mb-0 {
    margin-bottom: 0px
}
.mb-2 {
    margin-bottom: 0.5rem
}
.mb-3 {
    margin-bottom: 0.75rem
}
.mb-4 {
    margin-bottom: 1rem
}
.mb-6 {
    margin-bottom: 1.5rem
}
.mb-8 {
    margin-bottom: 2rem
}
.ml-2 {
    margin-left: 0.5rem
}
.mr-3 {
    margin-right: 0.75rem
}
.mt-3 {
    margin-top: 0.75rem
}
.mt-4 {
    margin-top: 1rem
}
.mt-8 {
    margin-top: 2rem
}
.mt-auto {
    margin-top: auto
}
.inline {
    display: inline
}
.flex {
    display: flex
}
.table {
    display: table
}
.grid {
    display: grid
}
.h-8 {
    height: 2rem
}
.h-full {
    height: 100%
}
.h-screen {
    height: 100vh
}
.w-64 {
    width: 16rem
}
.w-8 {
    width: 2rem
}
.w-full {
    width: 100%
}
.flex-grow {
    flex-grow: 1
}
.cursor-pointer {
    cursor: pointer
}
.grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
}
.grid-cols-\\[max-content_auto\\] {
    grid-template-columns: max-content auto
}
.grid-rows-\\[minmax\\(100vh\\2c 100\\%\\)\\] {
    grid-template-rows: minmax(100vh,100%)
}
.gap-4 {
    gap: 1rem
}
.break-all {
    word-break: break-all
}
.rounded {
    border-radius: 0.25rem
}
.rounded-full {
    border-radius: 9999px
}
.border-y-2 {
    border-top-width: 2px;
    border-bottom-width: 2px
}
.border-b-0 {
    border-bottom-width: 0
}
.border-l-4 {
    border-left-width: 4px
}
.border-theme-background-lvl-1 {
    --tw-border-opacity: 1;
    border-color: rgba(var(--color-background-lvl-1-raw), var(--tw-border-opacity))
}
.bg-juno-grey-blue-11 {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--color-juno-grey-blue-11-raw), var(--tw-bg-opacity))
}
.bg-theme-accent\\/30 {
    background-color: rgba(var(--color-accent-raw), 0.3)
}
.bg-theme-background-lvl-0 {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--color-background-lvl-0-raw), var(--tw-bg-opacity))
}
.bg-theme-background-lvl-1 {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--color-background-lvl-1-raw), var(--tw-bg-opacity))
}
.bg-theme-background-lvl-2 {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity))
}
.bg-theme-global-bg {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--color-global-bg-raw), var(--tw-bg-opacity))
}
.bg-cover {
    background-size: cover
}
.fill-current {
    fill: currentColor
}
.p-8 {
    padding: 2rem
}
.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
.px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}
.py-0 {
    padding-top: 0px;
    padding-bottom: 0px
}
.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem
}
.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem
}
.pb-6 {
    padding-bottom: 1.5rem
}
.pl-4 {
    padding-left: 1rem
}
.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem
}
.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem
}
.text-xs {
    font-size: 0.75rem;
    line-height: 1rem
}
.font-bold {
    font-weight: 700
}
.text-theme-accent {
    --tw-text-opacity: 1;
    color: rgba(var(--color-accent-raw), var(--tw-text-opacity))
}
.text-theme-danger {
    --tw-text-opacity: 1;
    color: rgba(var(--color-danger-raw), var(--tw-text-opacity))
}
.text-theme-default {
    --tw-text-opacity: 1;
    color: rgba(var(--color-text-default-raw), var(--tw-text-opacity))
}
.text-theme-disabled {
    --tw-text-opacity: 1;
    color: rgba(var(--color-text-disabled-raw), var(--tw-text-opacity))
}
.text-theme-high {
    --tw-text-opacity: 1;
    color: rgba(var(--color-text-high-raw), var(--tw-text-opacity))
}
.text-theme-info {
    --tw-text-opacity: 1;
    color: rgba(var(--color-info-raw), var(--tw-text-opacity))
}
.text-theme-light {
    --tw-text-opacity: 1;
    color: rgba(var(--color-text-light-raw), var(--tw-text-opacity))
}
.text-theme-link {
    --tw-text-opacity: 1;
    color: rgba(var(--color-text-link-raw), var(--tw-text-opacity))
}
.text-white {
    --tw-text-opacity: 1;
    color: rgba(var(--color-white-raw), var(--tw-text-opacity))
}
.text-opacity-50 {
    --tw-text-opacity: 0.5
}
.shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
.filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.transition {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
/* If necessary, app styles can be added below */
.hover\\:bg-theme-background-lvl-2:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity))
}
.hover\\:text-theme-high:hover {
    --tw-text-opacity: 1;
    color: rgba(var(--color-text-high-raw), var(--tw-text-opacity))
}
.hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgba(var(--color-white-raw), var(--tw-text-opacity))
}`;import{useState as np,useEffect as on}from"react";var an="greenhouse-team-admin",We="team",ip=t=>{let[r,o]=np(!1),a=nt(t||an),{setCurrentTeam:l}=C(),i=z(),u=me();on(()=>{if(r)return;console.log(`Team-Admin: (${t||an}) setting up state from url:`,a.currentState());let s=a.currentState()?.[We];s&&l(s),o(!0)},[l]),on(()=>{r&&(a.push({[We]:i||u}),console.log("useUrlStateKey - after  urlStateManager.push: ",a.currentState()?.[We]))},[r,i,u])},nn=ip;var sp=({consumerId:t})=>(nn(t),null),sn=sp;var ln={teammemberships:[{metadata:{name:"team1",namespace:"ns1"},spec:{members:[{email:"new1@example.com",firstName:"Maximilian",id:"abc123",lastName:"M\xFCller"},{email:"new2@example.com",firstName:"Sophie",id:"def456",lastName:"Schmidt"}]}},{metadata:{name:"team2",namespace:"ns1"},spec:{members:[{email:"new3@example.com",firstName:"Felix",id:"ghi789",lastName:"Schulz"},{email:"new4@example.com",firstName:"Emilia",id:"jkl012",lastName:"Becker"},{email:"new5@example.com",firstName:"Lukas",id:"mno345",lastName:"Koch"},{email:"new6@example.com",firstName:"Julia",id:"pqr678",lastName:"Wagner"},{email:"new7@example.com",firstName:"Leonie",id:"stu901",lastName:"Hoffmann"}]}},{metadata:{name:"team3",namespace:"ns1"},spec:{members:[{email:"new8@example.com",firstName:"Matthias",id:"vwx234",lastName:"Sch\xE4fer"},{email:"new9@example.com",firstName:"Laura",id:"yza567",lastName:"Bauer"},{email:"new10@example.com",firstName:"Tim",id:"bcd890",lastName:"Hofmann"},{email:"new11@example.com",firstName:"Nina",id:"efg123",lastName:"Lehmann"},{email:"new12@example.com",firstName:"Sebastian",id:"hij456",lastName:"Krause"},{email:"new13@example.com",firstName:"Vanessa",id:"klm789",lastName:"Richter"},{email:"new14@example.com",firstName:"Max",id:"nop012",lastName:"Fischer"},{email:"new15@example.com",firstName:"Carolin",id:"qrs345",lastName:"Schneider"},{email:"new16@example.com",firstName:"Tobias",id:"tuv678",lastName:"Gluch"},{email:"new17@example.com",firstName:"Elena",id:"wxy901",lastName:"Beck"},{email:"new18@example.com",firstName:"Lars",id:"zab234",lastName:"Lorenz"},{email:"new19@example.com",firstName:"Julian",id:"cde567",lastName:"Vogel"},{email:"new20@example.com",firstName:"Johanna",id:"efg890",lastName:"Schwarz"},{email:"new21@example.com",firstName:"Dominik",id:"hij123",lastName:"Wolf"},{email:"new22@example.com",firstName:"Marie",id:"klm456",lastName:"Roth"},{email:"new23@example.com",firstName:"Moritz",id:"nop789",lastName:"Walter"},{email:"new24@example.com",firstName:"Lisa",id:"qrs012",lastName:"K\xFChn"}]}},{apiVersion:"greenhouse.sap/v1alpha1",kind:"TeamMembership",metadata:{name:"team4",namespace:"ns1"},spec:{members:[{email:"new25@example.com",firstName:"Jonathan",id:"tuv123",lastName:"Fuchs"},{email:"new26@example.com",firstName:"Hannah",id:"wxy456",lastName:"Herrmann"},{email:"new27@example.com",firstName:"Muhammad",id:"zab789",lastName:"Salz"},{email:"new28@example.com",firstName:"Laura",id:"cde012",lastName:"G\xFCnther"},{email:"new29@example.com",firstName:"Maximilian",id:"efg345",lastName:"Wenzel"},{email:"new30@example.com",firstName:"Sophia",id:"hij678",lastName:"Kr\xFCger"},{email:"new31@example.com",firstName:"Lukas",id:"klm901",lastName:"Hein"},{email:"new32@example.com",firstName:"Marie",id:"nop234",lastName:"Sauer"},{email:"new33@example.com",firstName:"Tim",id:"qrs567",lastName:"Schubert"},{email:"new34@example.com",firstName:"Vanessa",id:"tuv890",lastName:"Hahn"}]}}]};var up=(t={})=>{let{initialize:r,setMock:o}=C();return t.isMock===!0||t.isMock==="true"?(o(!0),Va(ln,{debug:!0,rewriteRoutes:{"/(?:apis/greenhouse\\.sap/v1alpha1/namespaces/[^/]+/teammemberships/(.*))":"/$1"}}),r(window.location.origin,null,null,null)):r(t.apiEndpoint,t.token,t.namespace,t.userGroup),I.createElement(rt,null,I.createElement(sn,null),I.createElement(Ye,{pageHeader:"Converged Cloud | Team Members",embedded:t.embedded==="true"||t.embedded===!0},I.createElement(tn,{props:t})))},cp=t=>I.createElement(Ve,{theme:`${t.theme?t.theme:"theme-dark"}`},I.createElement("style",null,rn.toString()),I.createElement(pt,null,I.createElement(up,{...t}))),Xf=cp;export{Xf as default};
