const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-wnzdU8m9.js","./Shell-DurZz4BV.js","./index-BoUKfyqb.js","./index-BsZmCF_f.js","./index-DcUN_fe3.css","./resourceStatus-B50ptR8S.js","./App-pUv-CkwT.js","./App--pA3Cqxg.js","./App-DsYSiQuE.js"])))=>i.map(i=>d[i]);
import{c as j,j as e,u as _,v as h,X as A,H as z,y as S,a as E,T as P,x as T,q as N,n as C,b as L,k as O,M as I,U as W}from"./Shell-DurZz4BV.js";import{a as i}from"./index-BoUKfyqb.js";import{_ as m}from"./index-BsZmCF_f.js";const M=()=>j(o=>({active:"",actions:{setActive:t=>o({active:t})}})),u=i.createContext(),R=({options:o,children:t})=>e.jsx(u.Provider,{value:M(),children:t}),f=o=>_(i.useContext(u),o),x=()=>f(o=>o.active),y=()=>f(o=>o.actions),v=i.lazy(()=>m(()=>import("./App-wnzdU8m9.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),J=i.lazy(()=>m(()=>import("./App-pUv-CkwT.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url)),U=i.lazy(()=>m(()=>import("./App--pA3Cqxg.js"),__vite__mapDeps([7,1,2,3,4,5]),import.meta.url)),V=i.lazy(()=>m(()=>import("./App-DsYSiQuE.js"),__vite__mapDeps([8,1,2,3,4]),import.meta.url)),D=({apiEndpoint:o,auth:t})=>{var p,c,s,l;const r=x();let a;switch(r){case"clusters":a=v;break;case"secrets":a=J;break;case"plugins":a=U;break;case"teams":a=V;break;default:a=v}return t!=null&&t.JWT?e.jsx(h,{children:e.jsx(i.Suspense,{fallback:"Loading...",children:e.jsx(a,{apiEndpoint:o,token:t==null?void 0:t.JWT,namespace:(c=(p=t==null?void 0:t.parsed)==null?void 0:p.organizations)==null?void 0:c[0],expires:t==null?void 0:t.parsed.expiresAt,userGroup:(l=(s=t==null?void 0:t.parsed)==null?void 0:s.teams)==null?void 0:l[0],embedded:!0})})}):e.jsx("div",{children:"Authenticating"})},$="*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-auto{margin-left:auto}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-96{width:24rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity, 1))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity, 1))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity, 1))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity, 1))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity, 1))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity, 1))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity, 1))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity, 1))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity, 1))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity, 1))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}.text-opacity-50{--tw-text-opacity: .5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.svg-bg-test{background:url(assets/juno-danger.svg)}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity, 1))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity, 1))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity, 1))}",q=({apiEndpoint:o,auth:t})=>{var l;const[r,a]=i.useState(null),{addMessage:p}=A(),c=i.useMemo(()=>{var d,w;if(!((d=t==null?void 0:t.raw)!=null&&d.groups))return null;const n=(w=t==null?void 0:t.raw)==null?void 0:w.groups.find(k=>k.indexOf("organization:")===0);return n?n.split(":")[1]:null},[(l=t==null?void 0:t.raw)==null?void 0:l.groups]),s=i.useMemo(()=>!o||!(t!=null&&t.JWT)?null:z({apiEndpoint:o,token:t==null?void 0:t.JWT}),[o,t==null?void 0:t.JWT]);return i.useEffect(()=>{!s||!c||s.get(`/apis/greenhouse.sap/v1alpha1/organizations/${c}`).then(n=>{var d,w;a({name:(d=n==null?void 0:n.spec)==null?void 0:d.displayName,description:(w=n==null?void 0:n.spec)==null?void 0:w.description})}).catch(n=>{p({variant:"error",text:`Failed to fetch organization info. ${n.message}`})})},[s,c]),e.jsxs("div",{className:"org-info p-8 mb-8 bg-theme-background-lvl-0",children:[e.jsxs("div",{className:"org-name",children:[e.jsx("p",{className:"text-xs",children:"Organization"}),(r==null?void 0:r.name)&&e.jsx("h1",{className:"text-xl font-bold",children:r==null?void 0:r.name}),!(r!=null&&r.name)&&e.jsx("h1",{className:"text-xl font-bold",children:"Loading..."})]}),(r==null?void 0:r.description)&&e.jsx("p",{className:"org-description",children:r==null?void 0:r.description}),!(r!=null&&r.name)&&e.jsx("p",{className:"org-description"})]})},F=[{name:"clusters",label:"Clusters"},{name:"teams",label:"Teams"},{name:"plugins",label:"Plugins",beta:!0},{name:"secrets",label:"Secrets",beta:!0}],G=()=>{const o=x(),{setActive:t}=y();return e.jsx(S,{children:F.map((r,a)=>e.jsxs(E,{active:r.name===o,onClick:()=>t(r.name),children:[r.label," ",r.beta&&e.jsx(P,{text:"beta",variant:"info"})]},a))})},K="greenhouse-org-admin",g="a",b=T(K),X=()=>{const{setActive:o}=y(),t=x();i.useLayoutEffect(()=>{var a;let r=(a=b.currentState())==null?void 0:a[g];r&&o(r)},[]),i.useEffect(()=>{var r;((r=b.currentState())==null?void 0:r[g])!==t&&b.push({[g]:t})},[t])},Y=()=>(X(),null),H=(o={})=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsxs(C,{"data-testid":"greenhouse-org-admin",children:[e.jsx(L,{className:"mb-4"}),e.jsx(q,{auth:o.auth,apiEndpoint:o.apiEndpoint}),e.jsx(O,{children:e.jsxs(I,{fullWidth:!0,children:[e.jsx(G,{}),e.jsx(W,{children:e.jsx(D,{...o})})]})})]})]}),tt=o=>e.jsxs(N,{theme:`${o.theme?o.theme:"theme-dark"}`,children:[e.jsx("style",{children:$.toString()}),e.jsx(h,{children:e.jsx(R,{options:o,children:e.jsx(H,{...o})})})]});export{tt as default};
