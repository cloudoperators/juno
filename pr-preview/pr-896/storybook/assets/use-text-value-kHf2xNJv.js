import{r as o}from"./index-DysCNOs_.js";import{n as s,o as m}from"./portal-BABn4eeb.js";function D(n,e){let t=o.useRef({left:0,top:0});if(s(()=>{if(!e)return;let u=e.getBoundingClientRect();u&&(t.current=u)},[n,e]),e==null||!n||e===document.activeElement)return!1;let r=e.getBoundingClientRect();return r.top!==t.current.top||r.left!==t.current.left}let f=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function a(n){var e,t;let r=(e=n.innerText)!=null?e:"",u=n.cloneNode(!0);if(!(u instanceof HTMLElement))return r;let l=!1;for(let c of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),l=!0;let i=l?(t=u.innerText)!=null?t:"":r;return f.test(i)&&(i=i.replace(f,"")),i}function g(n){let e=n.getAttribute("aria-label");if(typeof e=="string")return e.trim();let t=n.getAttribute("aria-labelledby");if(t){let r=t.split(" ").map(u=>{let l=document.getElementById(u);if(l){let i=l.getAttribute("aria-label");return typeof i=="string"?i.trim():a(l).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return a(n).trim()}function d(n){let e=o.useRef(""),t=o.useRef("");return m(()=>{let r=n.current;if(!r)return"";let u=r.innerText;if(e.current===u)return t.current;let l=g(r).trim().toLowerCase();return e.current=u,t.current=l,l})}export{d as a,D as s};
