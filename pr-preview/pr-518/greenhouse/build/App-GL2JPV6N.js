import{a as P,b as T,c as O}from"./chunk-KGC4OGUR.js";import{E as X,F as Z,Q as j,R as A,V as ee,W as te,e as U,f as _,j as h,k as v,l as J,q as $,r as q,s as L,t as z,u as I,v as Y,w as Q,x as G,y as F}from"./chunk-IYLWJBKB.js";import"./chunk-5G2YJ22E.js";import x from"react";import Ae,{createContext as Ce,useContext as at}from"react";import{useStore as st}from"zustand";import{createStore as Ee}from"zustand";import{devtools as De}from"zustand/middleware";var ve=e=>({globals:{urlStateKey:"",apiEndpoint:null,loggedIn:!1,authData:null,actions:{setUrlStateKey:t=>e(r=>({globals:{...r.globals,urlStateKey:t}})),setLoggedIn:t=>e(r=>({globals:{...r.globals,loggedIn:t}})),setAuthData:t=>e(r=>({globals:{...r.globals,authData:t}})),setEndpoint:t=>e(r=>({globals:{...r.globals,apiEndpoint:t}}))}}}),re=ve;var oe=()=>Ee(De((e,t)=>({...re(e,t)})));var $e=Ce(),Ie=({children:e})=>Ae.createElement($e.Provider,{value:oe()},e);var ae=Ie;import K from"react";import k from"react";import{create as Fe}from"zustand";var Pe=Fe(e=>({endpoint:"",token:"",namespace:"",initialize:(t,r,a)=>e(l=>({endpoint:t,token:r,namespace:a})),urlStateKey:"secret-admin",setUrlStateKey:t=>e(r=>({urlStateKey:t})),secrets:[],modifySecrets:t=>e(r=>{let a=[...r.secrets];return t.forEach(l=>{let c=a.findIndex(p=>p.metadata.name===l.metadata.name);c>=0?a[c]=l:a.push(l)}),{...r,secrets:a}}),deleteSecrets:t=>e(r=>({secrets:r.secrets.filter(l=>!t.some(c=>l.metadata.name===c.metadata.name))})),secretDetail:void 0,setSecretDetail:t=>e(r=>({secretDetail:t})),showSecretEdit:!1,setShowSecretEdit:t=>e(r=>({showSecretEdit:t})),isSecretEditMode:!1,setIsSecretEditMode:t=>e(r=>({isSecretEditMode:t}))}));var i=Pe;import y from"react";import E from"react";var Te=e=>{let t=e.dataName?e.dataName:"Data",r=e.isSecret?e.isSecret:!1,a=(p,n)=>{let S=p.split("."),b=S[0],g=S[1];switch(b){case"dataKey":let s={...e.data},o=s[g];delete s[g],s[n]=o,e.setData(s);break;case"dataValue":e.mutateValue&&(n=e.mutateValue(n)),e.setData({...e.data,[g]:n});break;default:console.log("keyIdentifier not found");break}},l=p=>{let n={...e.data};delete n[p],e.setData(n)},c=()=>{e.setData({...e.data,"":""})};return E.createElement(F,{title:e.title},e.data&&Object.keys(e.data).length>0&&Object.keys(e.data).map(p=>E.createElement(v,{key:p,distribution:"evenly"},E.createElement(A,{id:"dataKey."+p,label:`${t} Key`,value:p,onBlur:n=>a("dataKey."+p,n.target.value)}),E.createElement(j,{id:"dataValue"+p,type:r?"password":"text",label:`${t} Value`,value:e.data[p],onBlur:n=>a("dataValue."+p,n.target.value)}),E.createElement(h,{icon:"deleteForever",onClick:()=>l(p)}))),E.createElement(h,{icon:"addCircle",label:`Add ${t}`,onClick:c}))},B=Te;var Oe=()=>{let e=i(n=>n.setSecretDetail),t=i(n=>n.secretDetail),r=i(n=>n.isSecretEditMode),a=n=>{e({...t,metadata:{...t?.metadata,name:n}})},l=n=>{e({...t,type:n})},c=n=>{e({...t,data:n})},p=n=>{e({...t,metadata:{...t?.metadata,labels:n}})};return y.createElement(Q,null,y.createElement(F,{title:"General"},y.createElement(G,null,y.createElement(A,{id:"name",label:"Name",placeholder:"Name of this secret",...r&&{disabled:!0},value:t?.metadata.name,onBlur:n=>a(n.target.value)})),y.createElement(G,null,y.createElement(A,{id:"type",label:"Type",placeholder:'Type of this secret, leave empty for default "Opaque" type',...r&&{disabled:!0},value:t?.type,onBlur:n=>l(n.target.value)}))),y.createElement(B,{title:"Labels",dataName:"Label",data:t.metadata.labels,setData:p}),y.createElement(B,{title:"Data",data:t.data,setData:c,isSecret:!0}))},ie=Oe;import N from"react";import{useCallback as D}from"react";var Me=()=>{let e=i(a=>a.endpoint),t=i(a=>a.token);return{client:e&&t?ee({apiEndpoint:e,token:t}):null}},se=Me;var Re=e=>{let t=i(s=>s.namespace),{client:r}=se(),a=e??!1,l=D(async(s,o,d)=>{let m;return!r||!t?{ok:!1,message:"Client or namespace not available"}:await r.get(s+"/"+o.metadata.name,{params:d}).then(f=>f.kind!==o.kind?(a&&console.log(`ERROR: Failed to get ${o.kind}, did not get ${o.kind}: ${JSON.stringify(f)}`),{ok:!1,message:`Failed getting ${o.kind}`,response:f}):{ok:!0,response:f,message:`Successfully got ${o.kind}`}).catch(f=>(a&&console.log(`ERROR: Failed to get ${o.kind}`,f),{ok:!1,message:`Failed getting ${o.kind}: ${f}`}))},[r,t]),c=D(async(s,o)=>!r||!t?{ok:!1,message:"Client or namespace not available"}:await r.post(s,o).then(d=>d.kind!==o.kind?(a&&console.log(`ERROR: Failed to create ${o.kind}, did not get ${o.kind}: ${JSON.stringify(d)}`),{ok:!1,message:`Failed creating ${o.kind}`}):{ok:!0,response:d,message:`Successfully created ${o.kind}`}).catch(d=>(a&&console.log(`ERROR: Failed to create ${o.kind}`,d),{ok:!1,message:`Failed creating ${o.kind}: ${d}`})),[r,t]),p=D(async(s,o)=>!r||!t?{ok:!1,message:"Client or namespace not available"}:await r.put(s+"/"+o.metadata.name,o).then(d=>d.kind!==o.kind?(a&&console.log(`ERROR: Failed to update ${o.kind}, did not get ${o.kind}: ${JSON.stringify(d)}`),{ok:!1,message:`Failed updating ${o.kind}`}):{ok:!0,response:d,message:`Successfully updated ${o.kind}`}).catch(d=>(a&&console.log(`ERROR: Failed to update ${o.kind}`,d),{ok:!1,message:`Failed updating ${o.kind}: ${d}`})),[r,t]),n=D(async(s,o,d)=>!r||!t?{ok:!1,message:"Client or namespace not available"}:await r.delete(s+"/"+o.metadata.name,{params:d}).then(m=>m.kind==o.kind||m.kind=="Status"&&m.status=="Success"?{ok:!0,message:`Successfully deleted ${o.kind}`}:(a&&console.log(`ERROR: Failed to delete ${o.kind} did not get ${o.kind}: ${JSON.stringify(m)}`),{ok:!1,message:`Failed deleting ${o.kind}`})).catch(m=>(a&&console.log(`ERROR: Failed to delete ${o.kind}`,m),{ok:!1,message:`Failed deleting ${o.kind}: ${m}`})),[r,t]),S=D(async(s,o,d,m,f,W)=>!r||!t?(console.log("Cannot initialize watch: client or namespace not available, waiting for client or namespace to become available"),{ok:!1,message:"Client or namespace not available"}):g(s,o).then(C=>C.ok?(r.watch(s,{params:W}).on(r.WATCH_ERROR,()=>{console.log("ERROR: Failed to watch resource")}).on(r.WATCH_ADDED,w=>{console.log(`added ${w}`),b(w,o),d(w)}).on(r.WATCH_MODIFIED,w=>{console.log(`modified ${w}`),b(w,o),m(w)}).on(r.WATCH_DELETED,w=>{console.log(`deleted ${w}`),b(w,o),f(w)}).start(),{ok:!0,message:`Successfully watching ${o}s`}):{ok:!1,message:`Cannot initialize watch for ${o}: ${C.message}`,status:403}),[r,t]),b=(s,o)=>{s.forEach(d=>{d.kind=o})},g=D(async(s,o)=>{let m=await l(s,{metadata:{name:""},kind:o});return m.response?.kind==`${o}List`?{ok:!0,message:""}:{ok:m.ok,message:m.message}},[r,t]);return{get:l,create:c,update:p,deleteObject:n,watch:S}},ne=Re;var Ke=()=>{let{get:e,create:t,update:r,deleteObject:a,watch:l}=ne(!1),c=i(m=>m.namespace),p=i(m=>m.modifySecrets),n=i(m=>m.deleteSecrets);return{getSecret:m=>e(`/api/v1/namespaces/${c}/secrets`,m),createSecret:m=>t(`/api/v1/namespaces/${c}/secrets`,m),updateSecret:m=>r(`/api/v1/namespaces/${c}/secrets`,m),deleteSecret:m=>a(`/api/v1/namespaces/${c}/secrets`,m),watchSecrets:()=>l(`/api/v1/namespaces/${c}/secrets`,"Secret",p,p,n),watchSecretsWithoutHelm:()=>{let C={fieldSelector:"type!=helm.sh/release.v1"};return l(`/api/v1/namespaces/${c}/secrets`,"Secret",p,p,n,C)}}},M=Ke;var ce=()=>({kind:"Secret",metadata:{name:"",namespace:""},data:{}}),le=e=>{if(e.data){let t={};Object.keys(e.data).forEach(r=>{t[r]=btoa(e.data[r])}),e.data=t}return e},R=e=>{if(e.data){let t={};Object.keys(e.data).forEach(r=>{t[r]=atob(e.data[r])}),e.data=t}return e};var Le=()=>{let{createSecret:e,updateSecret:t,deleteSecret:r}=M(),a=i(s=>s.secretDetail),l=i(s=>s.isSecretEditMode),c=i(s=>s.setShowSecretEdit),p=i(s=>s.setSecretDetail),n=i(s=>s.setIsSecretEditMode),{addMessage:S}=T();return N.createElement(v,{distribution:"between"},N.createElement(h,{onClick:async()=>{let s=await r(a);S({variant:s.ok?"success":"error",text:s.message}),s.ok&&setTimeout(()=>{c(!1),p(void 0),n(!1)},3e3)},variant:"primary-danger"},"Delete Secret"),N.createElement(h,{onClick:()=>{let s=le(a);(l?t(s):e(s)).then(async d=>{S({variant:d.ok?"success":"error",text:d.message}),d.ok&&(n(!0),d.response&&p(R(d.response)))})},variant:"primary"},l?"Update Secret":"Create Secret"))},de=Le;import ze from"react";var Ge=()=>ze.createElement(O,null),me=Ge;var Be=()=>{let e=i(c=>c.showSecretEdit),t=i(c=>c.setShowSecretEdit),r=i(c=>c.setSecretDetail),a=i(c=>c.setIsSecretEditMode);return k.createElement(X,{heading:k.createElement(v,{gap:"2"},k.createElement("span",null,"Edit Secret")),opened:!!e,onClose:()=>{t(!1),r(void 0),a(!1)},size:"large"},k.createElement(Z,null,k.createElement(me,null),k.createElement(ie,null),k.createElement(de,null)))},pe=Be;import u from"react";import V from"react";var Ne=e=>{let t=i(c=>c.setSecretDetail),r=i(c=>c.setShowSecretEdit),a=i(c=>c.setIsSecretEditMode);return V.createElement(I,{className:"cursor-pointer",onClick:()=>{let c=R(e.secret);t(c),a(!0),r(!0)}},V.createElement(L,null,e.secret.metadata.name),V.createElement(L,null,e.secret.data?Object.keys(e.secret.data).join(", "):"No keys found"))},ge=Ne;var Ve=()=>{let e=i(l=>l.setShowSecretEdit),t=i(l=>l.setSecretDetail),r=()=>{e(!0),t(ce())},a=i(l=>l.secrets);return u.createElement(u.Fragment,null,u.createElement($,null,u.createElement(Y,null,u.createElement(J,null,u.createElement(h,{icon:"addCircle",label:"Add Secret",onClick:r}))),u.createElement(q,{columns:2,className:"secrets"},u.createElement(I,null,u.createElement(z,null,"Name"),u.createElement(z,null,"Keys")),a.map(l=>u.createElement(ge,{key:l.metadata.name,secret:l}))),u.createElement(O,null)))},ue=Ve;var He=()=>{let e=i(t=>t.showSecretEdit);return K.createElement($,null,K.createElement(ue,null),e&&K.createElement(P,null,K.createElement(pe,null)))},we=He;var Se=`/* Do not remove these tailwind directives. Without them styles won't work as expected */
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
  --tw-contain-style:  ;
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
  --tw-contain-style:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
@media (min-width: 1856px) {
  .container {
    max-width: 1856px;
  }
}
.isolate {
  isolation: isolate;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.my-px {
  margin-top: 1px;
  margin-bottom: 1px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-auto {
  margin-top: auto;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.h-8 {
  height: 2rem;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.w-64 {
  width: 16rem;
}
.w-8 {
  width: 2rem;
}
.w-full {
  width: 100%;
}
.flex-grow {
  flex-grow: 1;
}
.cursor-pointer {
  cursor: pointer;
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-\\[max-content_auto\\] {
  grid-template-columns: max-content auto;
}
.grid-rows-\\[minmax\\(100vh\\2c 100\\%\\)\\] {
  grid-template-rows: minmax(100vh,100%);
}
.gap-4 {
  gap: 1rem;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border-y-2 {
  border-top-width: 2px;
  border-bottom-width: 2px;
}
.border-b-0 {
  border-bottom-width: 0;
}
.border-l-4 {
  border-left-width: 4px;
}
.border-theme-background-lvl-1 {
  --tw-border-opacity: 1;
  border-color: rgba(var(--color-background-lvl-1-raw), var(--tw-border-opacity));
}
.bg-juno-grey-blue-11 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-juno-grey-blue-11-raw), var(--tw-bg-opacity));
}
.bg-theme-accent\\/30 {
  background-color: rgba(var(--color-accent-raw), 0.3);
}
.bg-theme-background-lvl-0 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-0-raw), var(--tw-bg-opacity));
}
.bg-theme-background-lvl-1 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-1-raw), var(--tw-bg-opacity));
}
.bg-theme-background-lvl-2 {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}
.bg-theme-global-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-global-bg-raw), var(--tw-bg-opacity));
}
.bg-cover {
  background-size: cover;
}
.fill-current {
  fill: currentColor;
}
.p-8 {
  padding: 2rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pl-4 {
  padding-left: 1rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold {
  font-weight: 700;
}
.text-theme-accent {
  --tw-text-opacity: 1;
  color: rgba(var(--color-accent-raw), var(--tw-text-opacity));
}
.text-theme-danger {
  --tw-text-opacity: 1;
  color: rgba(var(--color-danger-raw), var(--tw-text-opacity));
}
.text-theme-default {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-default-raw), var(--tw-text-opacity));
}
.text-theme-disabled {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-disabled-raw), var(--tw-text-opacity));
}
.text-theme-high {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}
.text-theme-info {
  --tw-text-opacity: 1;
  color: rgba(var(--color-info-raw), var(--tw-text-opacity));
}
.text-theme-light {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-light-raw), var(--tw-text-opacity));
}
.text-theme-link {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-link-raw), var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(var(--color-white-raw), var(--tw-text-opacity));
}
.text-opacity-50 {
  --tw-text-opacity: 0.5;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
/* If necessary, app styles can be added below */
.plugins .juno-datagrid-row:hover .juno-datagrid-cell {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-1-raw), var(--tw-bg-opacity));
}
.plugins .juno-datagrid-row.active .juno-datagrid-cell {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}

.filtered {
  filter: grayscale(100%);
}

.markdown-body {
  background-color: transparent !important;
}

.hover\\:bg-theme-background-lvl-2:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--color-background-lvl-2-raw), var(--tw-bg-opacity));
}

.hover\\:text-theme-high:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--color-text-high-raw), var(--tw-text-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--color-white-raw), var(--tw-text-opacity));
}`;import{useEffect as Je}from"react";import{useEffect as fe,useState as Ue}from"react";var H="greenhouse-secrets-admin",be="sd",he="sse",ye="isem",_e=e=>{let[t,r]=Ue(!1),a=te(e||H),l=i(g=>g.showSecretEdit),c=i(g=>g.setShowSecretEdit),p=i(g=>g.secretDetail),n=i(g=>g.setSecretDetail),S=i(g=>g.isSecretEditMode),b=i(g=>g.setIsSecretEditMode);fe(()=>{if(t)return;console.log(`${H}: (${e||H}) setting up state from url:`,a.currentState());let g=a.currentState()?.[he],s=a.currentState()?.[be],o=a.currentState()?.[ye];g&&c(g),s&&n(s),o&&b(o),r(!0)},[c]),fe(()=>{t&&a.push({[he]:l,[be]:p,[ye]:S})},[l])},xe=_e;var qe=e=>{xe(e.consumerId);let{addMessage:t}=T(),{watchSecretsWithoutHelm:r}=M();return Je(()=>{r().then(a=>{a.ok||a.message&&a.status==403&&t({variant:"error",text:a.message})})},[]),null},ke=qe;var Ye=(e={})=>(i(r=>r.initialize)(e.apiEndpoint,e.token,e.namespace),x.createElement(P,null,x.createElement(U,{pageHeader:"Converged Cloud | Secrets",embedded:e.embedded==="true"||e.embedded===!0},x.createElement(ke,null),x.createElement(we,{props:e})))),Qe=e=>x.createElement(_,{theme:`${e.theme?e.theme:"theme-dark"}`},x.createElement("style",null,Se.toString()),x.createElement(ae,null,x.createElement(Ye,{...e}))),Fr=Qe;export{Fr as default};
