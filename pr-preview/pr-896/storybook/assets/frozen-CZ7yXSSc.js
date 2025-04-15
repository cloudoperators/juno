import{r as l,e as a}from"./index-DysCNOs_.js";import{o as y,L as b,D as v,p as E,Z as S}from"./portal-BABn4eeb.js";import{r as N}from"./index-DxJeRO9x.js";function A(e,t,n){let[r,o]=l.useState(n),u=e!==void 0,i=l.useRef(u),f=l.useRef(!1),d=l.useRef(!1);return u&&!i.current&&!f.current?(f.current=!0,i.current=u,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!u&&i.current&&!d.current&&(d.current=!0,i.current=u,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[u?e:r,y(c=>(u||o(c),t==null?void 0:t(c)))]}function C(e){let[t]=l.useState(e);return t}function m(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))h(n,p(t,r),o);return n}function p(e,t){return e?e+"["+t+"]":t}function h(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())h(e,p(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):m(n,t,e)}function R(e){var t,n;let r=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(r){for(let o of r.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(n=r.requestSubmit)==null||n.call(r)}}let T="span";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});function F(e,t){var n;let{features:r=1,...o}=e,u={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return v()({ourProps:u,theirProps:o,slot:{},defaultTag:T,name:"Hidden"})}let g=b(F),$=l.createContext(null);function w({children:e}){let t=l.useContext($);if(!t)return a.createElement(a.Fragment,null,e);let{target:n}=t;return n?N.createPortal(a.createElement(a.Fragment,null,e),n):null}function k({data:e,form:t,disabled:n,onReset:r,overrides:o}){let[u,i]=l.useState(null),f=E();return l.useEffect(()=>{if(r&&u)return f.addEventListener(u,"reset",r)},[u,t,r]),a.createElement(w,null,a.createElement(x,{setForm:i,formId:t}),m(e).map(([d,c])=>a.createElement(g,{features:s.Hidden,...S({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:t,disabled:n,name:d,value:c,...o})})))}function x({setForm:e,formId:t}){return l.useEffect(()=>{if(t){let n=document.getElementById(t);n&&e(n)}},[e,t]),t?null:a.createElement(g,{features:s.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:n=>{if(!n)return;let r=n.closest("form");r&&e(r)}})}function I(e,t){return e!==null&&t!==null&&typeof e=="object"&&typeof t=="object"&&"id"in e&&"id"in t?e.id===t.id:e===t}function D(e=I){return l.useCallback((t,n)=>{if(typeof e=="string"){let r=e;return(t==null?void 0:t[r])===(n==null?void 0:n[r])}return e(t,n)},[e])}function U({children:e,freeze:t}){let n=H(t,e);return a.createElement(a.Fragment,null,n)}function H(e,t){let[n,r]=l.useState(t);return!e&&n!==t&&r(t),e?n:t}export{A as T,C as a,U as f,k as j,H as l,R as p,D as u};
