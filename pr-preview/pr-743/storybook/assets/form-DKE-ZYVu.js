import{r as i}from"./index-DysCNOs_.js";import{q as h,l as p,b as g,U as m,C as v}from"./keyboard-BPbr_PVR.js";function $(e,r){let[n,o]=i.useState(e),t=h(e);return p(()=>o(t.current),[t,o,...r]),n}function x(e,r,n){let[o,t]=i.useState(n),u=e!==void 0,a=i.useRef(u),d=i.useRef(!1),l=i.useRef(!1);return u&&!a.current&&!d.current?(d.current=!0,a.current=u,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!u&&a.current&&!l.current&&(l.current=!0,a.current=u,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[u?e:o,g(c=>(u||t(c),r==null?void 0:r(c)))]}let b="div";var y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(y||{});function w(e,r){var n;let{features:o=1,...t}=e,u={ref:r,"aria-hidden":(o&2)===2?!0:(n=t["aria-hidden"])!=null?n:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return v({ourProps:u,theirProps:t,slot:{},defaultTag:b,name:"Hidden"})}let H=m(w);function S(e={},r=null,n=[]){for(let[o,t]of Object.entries(e))f(n,s(r,o),t);return n}function s(e,r){return e?e+"["+r+"]":r}function f(e,r,n){if(Array.isArray(n))for(let[o,t]of n.entries())f(e,s(r,o.toString()),t);else n instanceof Date?e.push([r,n.toISOString()]):typeof n=="boolean"?e.push([r,n?"1":"0"]):typeof n=="string"?e.push([r,n]):typeof n=="number"?e.push([r,`${n}`]):n==null?e.push([r,""]):S(n,r,e)}export{x as T,S as e,$ as i,y as s,H as u};
