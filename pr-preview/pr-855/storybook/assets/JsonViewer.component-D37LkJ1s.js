import{j as a}from"./jsx-runtime-BP6H2k8O.js";import{e as u,r as c}from"./index-DysCNOs_.js";import{S as C}from"./SearchInput.component-pWfXUtZJ.js";const _={base00:"rgb(39, 40, 34)",base01:"rgb(245, 245, 245)",base02:"rgb(73, 72, 62)",base03:"#93a1a1",base04:"rgb(165, 159, 133)",base05:"rgb(248, 248, 242)",base06:"#073642",base07:"rgb(249, 248, 245)",base08:"rgb(249, 38, 114)",base09:"rgb(253, 151, 31)",base0A:"rgb(244, 191, 117)",base0B:"rgb(166, 226, 46)",base0C:"rgb(161, 239, 228)",base0D:"rgb(102, 217, 239)",base0E:"rgb(174, 129, 255)",base0F:"rgb(204, 102, 51)"},k={base00:"#fff",base01:"rgb(245, 245, 245)",base02:"rgb(235, 235, 235)",base03:"#93a1a1",base04:"rgba(0, 0, 0, 0.3)",base05:"#586e75",base06:"#073642",base07:"#002b36",base08:"#d33682",base09:"#cb4b16",base0A:"#dc322f",base0B:"#859900",base0C:"#6c71c4",base0D:"#586e75",base0E:"#2aa198",base0F:"#268bd2"},D=Object.freeze(Object.defineProperty({__proto__:null,dark:_,light:k},Symbol.toStringTag,{value:"Module"})),V=4,F=1,T={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"},E=e=>({background:e.base00,ellipsis:e.base09,brace:e.base07,key:e.base07,index:e.base0C,size:e.base04,border:e.base02,highlight:{foreground:e.base06,background:e.base02},toolbar:{border:e.base01,background:e.base01,foreground:e.base07},icon:{expanded:e.base0D,collapsed:e.base0E,expandAll:e.base0E},dataType:{boolean:e.base0E,date:e.base0D,float:e.base0B,function:e.base0D,integer:e.base0F,string:e.base09,nan:e.base08,null:e.base0A,undefined:e.base05,regexp:e.base0A,background:e.base02}}),b=u.createContext({colors:E(T),indentWidth:V,expanded:F}),L=()=>{const{colors:e}=c.useContext(b);return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:e.icon.expandAll,role:"img",children:[a.jsx("title",{children:"Expand All"}),a.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})]})},I=()=>{const{colors:e}=c.useContext(b);return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:e.icon.expandAll,role:"img",children:[a.jsx("title",{children:"Collapse All"}),a.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"})]})},S=5,z=100,O=4,B=1;function M(e){return e===null?"null":Array.isArray(e)?"array":e instanceof RegExp?"regexp":e instanceof Date?"date":"object"}function $(e){return Number.isNaN(e)?"nan":Number.isInteger(e)?"integer":"float"}const m=e=>{switch(typeof e){case"object":return M(e);case"number":return $(e);case"boolean":return"boolean";case"string":return"string";case"undefined":return"undefined";case"function":return"function";default:return"background"}},J=({expanded:e})=>{const{colors:s}=c.useContext(b);return a.jsxs("svg",{fill:e?s.icon.expanded:s.icon.collapsed,width:"1em",height:"1em",viewBox:"0 0 1792 1792",style:{verticalAlign:"middle",color:"var(--color-syntax-highlight-base0E)",height:"1em",width:"1em"},children:[a.jsx("title",{children:"Expand/Collapse"}),e?a.jsx("path",{d:"M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"}):a.jsx("path",{d:"M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"})]})},q=({value:e})=>{const{colors:s,searchTerm:t}=c.useContext(b),n=u.useMemo(()=>{if(e==null||!t||t==="")return null;try{const r=e.toString().toLowerCase().indexOf(t.toLowerCase());return r<0?null:{start:r,end:r+t.length}}catch(r){return console.debug("JsonViewer:",r),null}},[t]);return n?a.jsxs(a.Fragment,{children:[e.slice(0,n.start),a.jsx("span",{style:{backgroundColor:s.highlight.background,color:s.highlight.foreground},children:e.slice(n.start,n.end)}),e.slice(n.end)]}):e},R=({name:e})=>{const{colors:s}=c.useContext(b),t=typeof e=="number",n=t?s.index:s.key,r=t?`${e}`:`"${e}"`;return a.jsxs("span",{style:{color:n},children:[" ",a.jsx("span",{style:{opacity:.85},children:a.jsx(q,{value:r})})," : "]})},U=({type:e,value:s})=>{const{colors:t,truncate:n}=c.useContext(b),r=["nan","null","undefined"].includes(e);let l=e==="string"?`"${s}"`:`${s}`;if(n){const g=n===!0?z:n;l.length>g&&(l=l.slice(0,g-3)+"...")}return a.jsxs("span",{style:{color:t.dataType[e],backgroundColor:r?t.dataType.background:void 0,borderRadius:3,padding:r?"2px 5px":0},children:[!r&&a.jsx("span",{style:{opacity:.8,fontSize:"small",margin:"0 4px"},children:e}),a.jsx("span",{children:a.jsx(q,{value:l})})]})},W=()=>{var n;const{colors:e,onExpandAll:s,onSearch:t}=c.useContext(b);return a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:`1px solid ${(n=e.toolbar)==null?void 0:n.border}`,padding:"3px 0 5px 0"},children:[a.jsxs("span",{style:{display:"flex"},children:[a.jsx("span",{style:{cursor:"pointer"},onClick:()=>s&&s(!0),children:a.jsx(L,{})}),a.jsx("span",{style:{cursor:"pointer"},onClick:()=>s&&s(!1),children:a.jsx(I,{})})]}),a.jsx(C,{className:"jn-me-1",style:{backgroundColor:e.toolbar.background,color:e.toolbar.foreground},onChange:r=>t&&t(r.target.value),clear:!0,onClear:()=>t&&t(null)})]})},j=({children:e,isExpanded:s,setIsExpanded:t})=>a.jsx("span",{style:{cursor:"pointer",display:"inline-block"},onClick:()=>{t(!s)},children:e}),w=({name:e,value:s,nestedLevel:t=0})=>{const{colors:n,expanded:r,searchTerm:l,indentWidth:g,expandAll:y}=c.useContext(b),[p,h]=u.useState(r===!0||r!==!1&&r>t);c.useLayoutEffect(()=>{y&&h(y.expanded)},[y]),c.useLayoutEffect(()=>{if(s&&l)try{JSON.stringify(s).indexOf(l)>0&&h(!0)}catch{}},[l]);const d=u.useMemo(()=>m(s),[s]),o=u.useMemo(()=>d==="array"?s.map((i,x)=>({name:x,value:i})):d==="object"?Object.keys(s).map((i,x)=>({name:i,value:s[i]})):null,[d,s]);return a.jsx("div",{"data-json-viewer":e,children:a.jsxs("div",{style:{letterSpacing:.5,padding:"3px 0"},children:[o&&a.jsxs(a.Fragment,{children:[a.jsx(j,{isExpanded:p,setIsExpanded:h,children:a.jsx(J,{expanded:p})})," "]}),(e||e===0)&&a.jsx(R,{name:e}),o?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{color:n.brace},children:d==="array"?"[":"{"}),!p&&a.jsxs(a.Fragment,{children:[a.jsx(j,{isExpanded:p,setIsExpanded:h,children:a.jsx("span",{style:{color:n.ellipsis},children:"..."})}),a.jsx("span",{style:{color:n.brace},children:d==="array"?"]":"}"})]}),a.jsxs("span",{style:{color:n.size,opacity:.85,fontStyle:"italic",fontSize:"smaller"},children:[" ",o==null?void 0:o.length," ",(o==null?void 0:o.length)===1?"item":"items"]}),p&&a.jsxs(a.Fragment,{children:[a.jsx("div",{"data-body":e,style:{paddingLeft:S*g,marginLeft:8,borderLeft:`1px solid ${n.border}`},children:o==null?void 0:o.map((i,x)=>a.jsx(w,{name:i.name,value:i.value,nestedLevel:t+1},x))}),a.jsx("span",{style:{color:n.key,marginLeft:6},children:d==="array"?"]":"}"})]})]}):a.jsx(U,{type:d,value:s})]})})},v=({data:e={},showRoot:s=!1,toolbar:t=!1,theme:n,expanded:r=B,indentWidth:l=O,style:g,truncate:y=!1,className:p,...h})=>{const d=typeof n=="string"?D[n]:{...T,...n},o=E(d),[i,x]=u.useState(""),[A,N]=u.useState(null);return a.jsx(b.Provider,{value:{colors:o,expanded:r,expandAll:A,searchTerm:i,indentWidth:l,truncate:y,onExpandAll:f=>N({expanded:f,timestamp:Date.now()}),onSearch:f=>x(f)},children:a.jsxs("div",{"data-json-viewer":!0,className:`juno-json-viewer ${p}`,style:{backgroundColor:o.background,fontFamily:"monospace",overflow:"auto",...g},...h,children:[t&&a.jsx(W,{}),a.jsx(w,{name:s?"root":!1,value:e})]})})};try{m.displayName="getTypeOfTheValue",m.__docgenInfo={description:"",displayName:"getTypeOfTheValue",props:{}}}catch{}try{v.displayName="JsonViewer",v.__docgenInfo={description:"A component to render json data in a nice way.",displayName:"JsonViewer",props:{data:{defaultValue:{value:"{}"},description:"Pass a valid json. Required.",name:"data",required:!1,type:{name:"string | object | object[]"}},style:{defaultValue:null,description:"pass a styles object",name:"style",required:!1,type:{name:"object"}},toolbar:{defaultValue:{value:"false"},description:"show toolbar",name:"toolbar",required:!1,type:{name:"boolean"}},showRoot:{defaultValue:{value:"false"},description:"show root key",name:"showRoot",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:`dark, light or map of colors
@param dark dark theme
@param light light theme
@param base00 background
@param base01 NOT used
@param base02 border, NaN,null, undefined background
@param base03 NOT used
@param base04 size (x items)
@param base05 type "undefined"
@param base06 NOT used
@param base07 key, brace
@param base08 type "NaN"
@param base09 ellipsis (...), type "string"
@param base0A types: "null", "regex"
@param base0B type "float"
@param base0C index
@param base0D expanded icon, types: "date", "function"
@param base0E collapsed icon, types: "boolean"
@param base0F copy icon, type "integer"`,name:"theme",required:!1,type:{name:"JsonViewerTheme | ThemeType"}},expanded:{defaultValue:{value:"1"},description:"expanded can be true|false or a number. The number denotes the hierarchy level to which the object is expanded.",name:"expanded",required:!1,type:{name:"number | boolean"}},truncate:{defaultValue:{value:"false"},description:"",name:"truncate",required:!1,type:{name:"number | boolean"}},indentWidth:{defaultValue:{value:"4"},description:"",name:"indentWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{v as J};
