import{c as V,B as K,j as o,a as W,C as F,J as E,k as v,F as B,z as S,o as U,w as D,b as P,i as T,_ as L,f as q,q as G,r as R,s as C,g as _,m as J,h as Y,p as Q,d as $,L as H,x as X,t as Z,A as tt}from"./Shell-C-0AWmKP.js";import{r as b}from"./index--nQ0arqg.js";import"./index-DonPu94u.js";const et=t=>({globals:{urlStateKey:"",apiEndpoint:null,loggedIn:!1,authData:null,actions:{setUrlStateKey:e=>t(a=>({globals:{...a.globals,urlStateKey:e}})),setLoggedIn:e=>t(a=>({globals:{...a.globals,loggedIn:e}})),setAuthData:e=>t(a=>({globals:{...a.globals,authData:e}})),setEndpoint:e=>t(a=>({globals:{...a.globals,apiEndpoint:e}}))}}}),at=()=>V(K((t,e)=>({...et(t)}))),rt=b.createContext(),ot=({children:t})=>o.jsx(rt.Provider,{value:at(),children:t}),d=W(t=>({endpoint:"",token:"",namespace:"",initialize:(e,a,s)=>t(l=>({endpoint:e,token:a,namespace:s})),urlStateKey:"secret-admin",setUrlStateKey:e=>t(a=>({urlStateKey:e})),secrets:[],modifySecrets:e=>t(a=>{let s=[...a.secrets];return e.forEach(l=>{const i=s.findIndex(w=>w.metadata.name===l.metadata.name);i>=0?s[i]=l:s.push(l)}),{...a,secrets:s}}),deleteSecrets:e=>t(a=>({secrets:a.secrets.filter(l=>!e.some(i=>l.metadata.name===i.metadata.name))})),secretDetail:void 0,setSecretDetail:e=>t(a=>({secretDetail:e})),showSecretEdit:!1,setShowSecretEdit:e=>t(a=>({showSecretEdit:e})),isSecretEditMode:!1,setIsSecretEditMode:e=>t(a=>({isSecretEditMode:e}))})),I=t=>{const e=t.dataName?t.dataName:"Data",a=t.isSecret?t.isSecret:!1,s=(w,n)=>{let p=w.split("."),x=p[0],c=p[1];switch(x){case"dataKey":let r={...t.data},m=r[c];delete r[c],r[n]=m,t.setData(r);break;case"dataValue":t.mutateValue&&(n=t.mutateValue(n)),t.setData({...t.data,[c]:n});break;default:console.log("keyIdentifier not found");break}},l=w=>{let n={...t.data};delete n[w],t.setData(n)},i=()=>{t.setData({...t.data,"":""})};return o.jsxs(F,{title:t.title,children:[t.data&&Object.keys(t.data).length>0&&Object.keys(t.data).map(w=>o.jsxs(E,{distribution:"evenly",children:[o.jsx(v,{id:"dataKey."+w,label:`${e} Key`,value:w,onBlur:n=>s("dataKey."+w,n.target.value)}),o.jsx(B,{id:"dataValue"+w,type:a?"password":"text",label:`${e} Value`,value:t.data[w],onBlur:n=>s("dataValue."+w,n.target.value)}),o.jsx(S,{icon:"deleteForever",onClick:()=>l(w)})]},w)),o.jsx(S,{icon:"addCircle",label:`Add ${e}`,onClick:i})]})},st=()=>{const t=d(n=>n.setSecretDetail),e=d(n=>n.secretDetail),a=d(n=>n.isSecretEditMode),s=n=>{t({...e,metadata:{...e==null?void 0:e.metadata,name:n}})},l=n=>{t({...e,type:n})},i=n=>{t({...e,data:n})},w=n=>{t({...e,metadata:{...e==null?void 0:e.metadata,labels:n}})};return o.jsxs(U,{children:[o.jsxs(F,{title:"General",children:[o.jsx(D,{children:o.jsx(v,{id:"name",label:"Name",placeholder:"Name of this secret",...a&&{disabled:!0},value:e==null?void 0:e.metadata.name,onBlur:n=>s(n.target.value)})}),o.jsx(D,{children:o.jsx(v,{id:"type",label:"Type",placeholder:'Type of this secret, leave empty for default "Opaque" type',...a&&{disabled:!0},value:e==null?void 0:e.type,onBlur:n=>l(n.target.value)})})]}),o.jsx(I,{title:"Labels",dataName:"Label",data:e.metadata.labels,setData:w}),o.jsx(I,{title:"Data",data:e.data,setData:i,isSecret:!0})]})},nt=()=>{const t=d(s=>s.endpoint),e=d(s=>s.token);return{client:t&&e?P({apiEndpoint:t,token:e}):null}},it=t=>{const e=d(c=>c.namespace),{client:a}=nt(),s=b.useCallback(async(c,r,m)=>!a||!e?{ok:!1,message:"Client or namespace not available"}:await a.get(c+"/"+r.metadata.name,{params:m}).then(g=>g.kind!==r.kind?{ok:!1,message:`Failed getting ${r.kind}`,response:g}:{ok:!0,response:g,message:`Successfully got ${r.kind}`}).catch(g=>({ok:!1,message:`Failed getting ${r.kind}: ${g}`})),[a,e]),l=b.useCallback(async(c,r)=>!a||!e?{ok:!1,message:"Client or namespace not available"}:await a.post(c,r).then(m=>m.kind!==r.kind?{ok:!1,message:`Failed creating ${r.kind}`}:{ok:!0,response:m,message:`Successfully created ${r.kind}`}).catch(m=>({ok:!1,message:`Failed creating ${r.kind}: ${m}`})),[a,e]),i=b.useCallback(async(c,r)=>!a||!e?{ok:!1,message:"Client or namespace not available"}:await a.put(c+"/"+r.metadata.name,r).then(m=>m.kind!==r.kind?{ok:!1,message:`Failed updating ${r.kind}`}:{ok:!0,response:m,message:`Successfully updated ${r.kind}`}).catch(m=>({ok:!1,message:`Failed updating ${r.kind}: ${m}`})),[a,e]),w=b.useCallback(async(c,r,m)=>!a||!e?{ok:!1,message:"Client or namespace not available"}:await a.delete(c+"/"+r.metadata.name,{params:m}).then(g=>g.kind==r.kind||g.kind=="Status"&&g.status=="Success"?{ok:!0,message:`Successfully deleted ${r.kind}`}:{ok:!1,message:`Failed deleting ${r.kind}`}).catch(g=>({ok:!1,message:`Failed deleting ${r.kind}: ${g}`})),[a,e]),n=b.useCallback(async(c,r,m,g,u,f)=>!a||!e?(console.log("Cannot initialize watch: client or namespace not available, waiting for client or namespace to become available"),{ok:!1,message:"Client or namespace not available"}):x(c,r).then(k=>k.ok?(a.watch(c,{params:f}).on(a.WATCH_ERROR,()=>{console.log("ERROR: Failed to watch resource")}).on(a.WATCH_ADDED,h=>{console.log(`added ${h}`),p(h,r),m(h)}).on(a.WATCH_MODIFIED,h=>{console.log(`modified ${h}`),p(h,r),g(h)}).on(a.WATCH_DELETED,h=>{console.log(`deleted ${h}`),p(h,r),u(h)}).start(),{ok:!0,message:`Successfully watching ${r}s`}):{ok:!1,message:`Cannot initialize watch for ${r}: ${k.message}`,status:403}),[a,e]),p=(c,r)=>{c.forEach(m=>{m.kind=r})},x=b.useCallback(async(c,r)=>{var u;let g=await s(c,{metadata:{name:""},kind:r});return((u=g.response)==null?void 0:u.kind)==`${r}List`?{ok:!0,message:""}:{ok:g.ok,message:g.message}},[a,e]);return{get:s,create:l,update:i,deleteObject:w,watch:n}},O=()=>{const{get:t,create:e,update:a,deleteObject:s,watch:l}=it(),i=d(u=>u.namespace),w=d(u=>u.modifySecrets),n=d(u=>u.deleteSecrets);return{getSecret:u=>t(`/api/v1/namespaces/${i}/secrets`,u),createSecret:u=>e(`/api/v1/namespaces/${i}/secrets`,u),updateSecret:u=>a(`/api/v1/namespaces/${i}/secrets`,u),deleteSecret:u=>s(`/api/v1/namespaces/${i}/secrets`,u),watchSecrets:()=>l(`/api/v1/namespaces/${i}/secrets`,"Secret",w,w,n),watchSecretsWithoutHelm:()=>{const j={fieldSelector:"type!=helm.sh/release.v1"};return l(`/api/v1/namespaces/${i}/secrets`,"Secret",w,w,n,j)}}},ct=()=>({kind:"Secret",metadata:{name:"",namespace:""},data:{}}),lt=t=>{if(t.data){let e={};Object.keys(t.data).forEach(a=>{e[a]=btoa(t.data[a])}),t.data=e}return t},N=t=>{if(t.data){let e={};Object.keys(t.data).forEach(a=>{e[a]=atob(t.data[a])}),t.data=e}return t},dt=()=>{const{createSecret:t,updateSecret:e,deleteSecret:a}=O(),s=d(r=>r.secretDetail),l=d(r=>r.isSecretEditMode),i=d(r=>r.setShowSecretEdit),w=d(r=>r.setSecretDetail),n=d(r=>r.setIsSecretEditMode),{addMessage:p}=T(),x=async()=>{let r=await a(s);p({variant:r.ok?"success":"error",text:r.message}),r.ok&&setTimeout(()=>{i(!1),w(void 0),n(!1)},3e3)},c=()=>{let r=lt(s);(l?e(r):t(r)).then(async g=>{p({variant:g.ok?"success":"error",text:g.message}),g.ok&&(n(!0),g.response&&w(N(g.response)))})};return o.jsxs(E,{distribution:"between",children:[o.jsx(S,{onClick:x,variant:"primary-danger",children:"Delete Secret"}),o.jsx(S,{onClick:c,variant:"primary",children:l?"Update Secret":"Create Secret"})]})},wt=()=>o.jsx(L,{}),gt=()=>{const t=d(i=>i.showSecretEdit),e=d(i=>i.setShowSecretEdit),a=d(i=>i.setSecretDetail),s=d(i=>i.setIsSecretEditMode),l=()=>{e(!1),a(void 0),s(!1)};return o.jsx(q,{heading:o.jsx(E,{gap:"2",children:o.jsx("span",{children:"Edit Secret"})}),opened:!!t,onClose:l,size:"large",children:o.jsxs(G,{children:[o.jsx(wt,{}),o.jsx(st,{}),o.jsx(dt,{})]})})},mt=t=>{const e=d(i=>i.setSecretDetail),a=d(i=>i.setShowSecretEdit),s=d(i=>i.setIsSecretEditMode),l=()=>{let i=N(t.secret);e(i),s(!0),a(!0)};return o.jsxs(R,{className:"cursor-pointer",onClick:l,children:[o.jsx(C,{children:t.secret.metadata.name}),o.jsx(C,{children:t.secret.data?Object.keys(t.secret.data).join(", "):"No keys found"})]})},ut=()=>{const t=d(l=>l.setShowSecretEdit),e=d(l=>l.setSecretDetail),a=()=>{t(!0),e(ct())},s=d(l=>l.secrets);return o.jsx(o.Fragment,{children:o.jsxs(_,{children:[o.jsx(J,{children:o.jsx(Y,{children:o.jsx(S,{icon:"addCircle",label:"Add Secret",onClick:a})})}),o.jsxs(Q,{columns:2,className:"secrets",children:[o.jsxs(R,{children:[o.jsx($,{children:"Name"}),o.jsx($,{children:"Keys"})]}),s.map(l=>o.jsx(mt,{secret:l},l.metadata.name))]}),o.jsx(L,{})]})})},pt=()=>{const t=d(e=>e.showSecretEdit);return o.jsxs(_,{children:[o.jsx(ut,{}),t&&o.jsx(H,{children:o.jsx(gt,{})})]})},ht="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity, 1))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity, 1))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity, 1))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity, 1))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity, 1))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity, 1))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity, 1))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity, 1))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity, 1))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}.text-opacity-50{--tw-text-opacity: .5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.plugins .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity, 1))}.plugins .juno-datagrid-row.active .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.filtered{filter:grayscale(100%)}.markdown-body{background-color:transparent!important}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}",y="greenhouse-secrets-admin",M="sd",z="sse",A="isem",bt=t=>{const[e,a]=b.useState(!1),s=X(t||y),l=d(c=>c.showSecretEdit),i=d(c=>c.setShowSecretEdit),w=d(c=>c.secretDetail),n=d(c=>c.setSecretDetail),p=d(c=>c.isSecretEditMode),x=d(c=>c.setIsSecretEditMode);b.useEffect(()=>{var g,u,f;if(e)return;console.log(`${y}: (${t||y}) setting up state from url:`,s.currentState());const c=(g=s.currentState())==null?void 0:g[z],r=(u=s.currentState())==null?void 0:u[M],m=(f=s.currentState())==null?void 0:f[A];c&&i(c),r&&n(r),m&&x(m),a(!0)},[i]),b.useEffect(()=>{e&&s.push({[z]:l,[M]:w,[A]:p})},[l])},xt=t=>{bt(t.consumerId);const{addMessage:e}=T(),{watchSecretsWithoutHelm:a}=O();return b.useEffect(()=>{a().then(s=>{s.ok||s.message&&s.status==403&&e({variant:"error",text:s.message})})},[]),null},ft=(t={})=>(d(a=>a.initialize)(t.apiEndpoint,t.token,t.namespace),o.jsx(H,{children:o.jsxs(tt,{pageHeader:"Converged Cloud | Secrets",embedded:t.embedded==="true"||t.embedded===!0,children:[o.jsx(xt,{}),o.jsx(pt,{props:t})]})})),vt=t=>o.jsxs(Z,{theme:`${t.theme?t.theme:"theme-dark"}`,children:[o.jsx("style",{children:ht.toString()}),o.jsx(ot,{children:o.jsx(ft,{...t})})]});export{vt as default};
