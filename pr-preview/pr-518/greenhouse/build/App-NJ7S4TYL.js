import{a as c,b as P,c as C}from"./chunk-CLHQHCD5.js";import{K as S,L as A,V as z,W as N,a as x,b as h,c as f,d as v,f as y,g as k}from"./chunk-I4O5YZ44.js";import"./chunk-5G2YJ22E.js";import e from"react";import Y,{createContext as D,useContext as F}from"react";import{useStore as V}from"zustand";import{createStore as K}from"zustand";var M=()=>K(t=>({active:"",actions:{setActive:r=>t({active:r})}}));var T=D(),q=({options:t,children:r})=>Y.createElement(T.Provider,{value:M(t)},r),I=t=>V(F(T),t),s=()=>I(t=>t.active),l=()=>I(t=>t.actions),W=q;import p from"react";import{lazy as d,Suspense as H}from"react";var E=d(()=>import("./App-XKYUDUIA.js")),Q=d(()=>import("./App-WUOPMWVW.js")),X=d(()=>import("./App-BYYJBLGM.js")),Z=d(()=>import("./App-VQF4CCDA.js")),R=({apiEndpoint:t,auth:r})=>{let o=s(),a;switch(o){case"clusters":a=E;break;case"secrets":a=Q;break;case"plugins":a=X;break;case"teams":a=Z;break;default:a=E}return r?.JWT?p.createElement(c,null,p.createElement(H,{fallback:"Loading..."},p.createElement(a,{apiEndpoint:t,token:r?.JWT,namespace:r?.parsed?.organizations?.[0],expires:r?.parsed.expiresAt,userGroup:r?.parsed?.teams?.[0],embedded:!0}))):p.createElement("div",null,"Authenticating")},_=R;var J=`/* Do not remove these tailwind directives. Without them styles won't work as expected */
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
.svg-bg-test {
  background: url("assets/juno-danger.svg");
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
}`;import n,{useMemo as L,useEffect as rt,useState as ot}from"react";var et=({apiEndpoint:t,auth:r})=>{let[o,a]=ot(null),{addMessage:$}=P(),m=L(()=>{if(!r?.raw?.groups)return null;let i=r?.raw?.groups.find(G=>G.indexOf("organization:")===0);return i?i.split(":")[1]:null},[r?.raw?.groups]),w=L(()=>!t||!r?.JWT?null:z({apiEndpoint:t,token:r?.JWT}),[t,r?.JWT]);return rt(()=>{!w||!m||w.get(`/apis/greenhouse.sap/v1alpha1/organizations/${m}`).then(i=>{a({name:i?.spec?.displayName,description:i?.spec?.description})}).catch(i=>{$({variant:"error",text:`Failed to fetch organization info. ${i.message}`})})},[w,m]),n.createElement("div",{className:"org-info p-8 mb-8 bg-theme-background-lvl-0"},n.createElement("div",{className:"org-name"},n.createElement("p",{className:"text-xs"},"Organization"),o?.name&&n.createElement("h1",{className:"text-xl font-bold"},o?.name),!o?.name&&n.createElement("h1",{className:"text-xl font-bold"},"Loading...")),o?.description&&n.createElement("p",{className:"org-description"},o?.description),!o?.name&&n.createElement("p",{className:"org-description"}))},O=et;import g from"react";var at=[{name:"clusters",label:"Clusters"},{name:"teams",label:"Teams"},{name:"plugins",label:"Plugins",beta:!0},{name:"secrets",label:"Secrets",beta:!0}],it=()=>{let t=s(),{setActive:r}=l();return g.createElement(S,null,at.map((o,a)=>g.createElement(A,{key:a,active:o.name===t,onClick:()=>r(o.name)},o.label," ",o.beta&&g.createElement(k,{text:"beta",variant:"info"}))))},U=it;import{useEffect as nt,useLayoutEffect as st}from"react";var ct="greenhouse-org-admin",b="a",u=N(ct),lt=()=>{let{setActive:t}=l(),r=s();st(()=>{let o=u.currentState()?.[b];o&&t(o)},[]),nt(()=>{u.currentState()?.[b]!==r&&u.push({[b]:r})},[r])},j=lt;var pt=()=>(j(),null),B=pt;var dt=(t={})=>e.createElement(e.Fragment,null,e.createElement(B,null),e.createElement(x,{"data-testid":"greenhouse-org-admin"},e.createElement(C,{className:"mb-4"}),e.createElement(O,{auth:t.auth,apiEndpoint:t.apiEndpoint}),e.createElement(h,null,e.createElement(f,{fullWidth:!0},e.createElement(U,null),e.createElement(v,null,e.createElement(_,{...t})))))),mt=t=>e.createElement(y,{theme:`${t.theme?t.theme:"theme-dark"}`},e.createElement("style",null,J.toString()),e.createElement(c,null,e.createElement(W,{options:t},e.createElement(dt,{...t})))),qt=mt;export{qt as default};
