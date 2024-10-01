function f(e){let t={serviceName:null,initialFetch:!0,fetchFn:null,watch:!0,watchInterval:3e5,onFetchStart:null,onFetchEnd:null,onFetchError:null,debug:!1},s=!1,r=Object.keys(t),n,a=()=>{if(t.fetchFn)return t.onFetchStart&&t.onFetchStart(),t?.debug&&console.info(`ApiService::${t.serviceName||""}: start fetch`),s=!0,t.fetchFn().then(()=>{t.onFetchEnd&&t.onFetchEnd()}).catch(o=>{console.warn("ApiService::%s:%s",t.serviceName,o),t.onFetchError&&t.onFetchError(o)});t?.debug&&console.warn(`ApiService::${t.serviceName||""}: missing fetch function`)},d=o=>{s&&o.watch===t.watch&&o.watchInterval===t.watchInterval||(clearInterval(n),t.watch&&(n=setInterval(a,t.watchInterval||3e5)))};this.configure=o=>{let g={...t};t={...t,...o},Object.keys(t).forEach(i=>r.indexOf(i)<0&&delete t[i]),t?.debug&&console.debug("ApiService::%s: new config: %s",t.serviceName,t),d(g),t.initialFetch&&!s&&a()},this.fetch=a,this.configure(e)}var l=f;var c=class extends Error{constructor(t,s){super(s||t),this.name="HTTPError",this.statusCode=t}},E=e=>e.status<400?e:e.text().then(t=>{var s=new c(e.status,t||e.statusText);return s.statusCode=e.status,s.httperror=!0,Promise.reject(s)}),S={"Content-Type":"application/json",Accept:"application/json"},m=(e,t={})=>{let s={headers:S,...t};return fetch(e,s).then(E).then(r=>{let n=r.headers.get("Content-Type");return n&&n.includes("application/json")?r.json():r.text()})};var u=(e,t={})=>m(e,{method:"GET",...t});var h=e=>{let t={};return!e||e.length===0?{}:(e.forEach(s=>{let r=s.status?.state;t[r]||(t[r]=[]),t[r].push(s)}),t)};var v=e=>u(`${e}/silences`,{}).then(t=>{let s=t.reduce((n,a)=>(n[a.id]=a,n),{}),r=h(t);self.postMessage({action:"SILENCES_UPDATE",silences:t,silencesHash:s,silencesBySate:r})}),p=new l({serviceName:"silences",debug:!0,onFetchStart:()=>self.postMessage({action:"SILENCES_FETCH_START"}),onFetchEnd:()=>self.postMessage({action:"SILENCES_FETCH_END"}),onFetchError:e=>{self.postMessage({action:"SILENCES_FETCH_ERROR",error:e.message})}});self.onmessage=e=>{switch(e.data.action){case"SILENCES_CONFIGURE":e.data?.apiEndpoint&&(e.data.fetchFn=()=>v(e.data?.apiEndpoint)),p.configure(e.data);break;case"SILENCES_FETCH":p.fetch();break}};export{v as fetchAction};