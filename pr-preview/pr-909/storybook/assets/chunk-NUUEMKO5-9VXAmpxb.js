const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BNKwieNI.js","./index-BXnWnNu-.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./iframe-DeUL--Wj.js";import{r as s,e as n}from"./index-BXnWnNu-.js";import{ak as p,al as h,am as E,an as d}from"./index-u03vPF_6.js";import{c as v}from"./client-D3r2zoDw.js";var a=new Map;function R(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var f=({callback:e,children:t})=>{let r=s.useRef();return s.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let e=null,t=null;return{promise:new Promise((r,o)=>{e=r,t=o}),resolve:e,reject:t}});var w=async(e,t,r)=>{let o=await g(t,r);if(R()){o.render(e);return}let{promise:i,resolve:u}=Promise.withResolvers();return o.render(s.createElement(f,{callback:u},e)),i},_=(e,t)=>{let r=a.get(e);r&&(r.unmount(),a.delete(e))},g=async(e,t)=>{let r=a.get(e);return r||(r=v(e,t),a.set(e,r)),r},x={code:E,a:h,...p},y=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},T=class{constructor(){this.render=async(e,t,r)=>{let o={...x,...t==null?void 0:t.components},i=d;return new Promise((u,c)=>{m(async()=>{const{MDXProvider:l}=await import("./index-BNKwieNI.js");return{MDXProvider:l}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:l})=>w(n.createElement(y,{showException:c,key:Math.random()},n.createElement(l,{components:o},n.createElement(i,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{_(e)}}};export{T as D,x as d};
