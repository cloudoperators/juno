(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const y="modulepreload",g=function(s,n){return new URL(s,n).href},h={},v=function(n,l,u){let e=Promise.resolve();if(l&&l.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),m=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(l.map(i=>{if(i=g(i,u),i in h)return;h[i]=!0;const a=i.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!u)for(let f=o.length-1;f>=0;f--){const d=o[f];if(d.href===i&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":y,a||(c.as="script"),c.crossOrigin="",c.href=i,m&&c.setAttribute("nonce",m),document.head.appendChild(c),a)return new Promise((f,d)=>{c.addEventListener("load",f),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return e.then(o=>{for(const r of o||[])r.status==="rejected"&&t(r.reason);return n().catch(t)})};fetch("./appProps.json").then(s=>s.json()).catch(s=>{console.warn("No appProps found, using default props",s.message)}).then(s=>{v(()=>import("./index-qxgno7L1.js").then(n=>n.i),[],import.meta.url).then(n=>{n.mount(document.getElementById("root"),{props:s})})});export{v as _};
