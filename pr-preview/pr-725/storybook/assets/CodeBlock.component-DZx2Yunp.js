import{j as a}from"./jsx-runtime-D6fbYt3N.js";import{r as s,e as h}from"./index-DysCNOs_.js";import{J as x}from"./JsonViewer.component-B1UYibWI.js";import{I as v}from"./Icon.component-BzIpr4Ej.js";const k=`
  jn-bg-theme-code-block
  jn-rounded
`,w=e=>`
    jn-p-6
    ${e?"jn-break-words jn-break-all jn-whitespace-pre-wrap":"jn-overflow-x-auto"}
  `,C=e=>{switch(e){case"small":return`
        juno-codeblock-pre-small
        jn-max-h-64
        jn-overflow-y-auto
      `;case"medium":return`
        juno-codeblock-pre-medium
        jn-max-h-[32rem]
        jn-overflow-y-auto
      `;case"large":return`
        juno-codeblock-pre-large
        jn-max-h-[56rem]
        jn-overflow-y-auto
      `;default:return""}},N=`
  jn-bg-theme-code-block
  jn-text-sm
`,S=`
  jn-text-sm
  jn-border-b-[1px]
  jn-border-theme-codeblock-bar 
  jn-h-[3.4375rem]
  jn-flex
`,$=`
  jn-flex
  jn-font-bold
  jn-px-[1.5625rem]
  jn-items-center
`,V=`
  jn-flex 
  jn-justify-end 
  jn-px-3
  jn-py-2 
  jn-border-t-[1px]
  jn-border-theme-codeblock-bar
`,B=`
  jn-font-bold 
  jn-text-sm 
  jn-mr-4 
  jn-mt-1
`,T={fontFamily:"IBM Plex Mono",fontSize:"0.875rem",padding:"1.5rem"},q={base00:"var(--color-syntax-highlight-base00)",base01:"var(--color-syntax-highlight-base01)",base02:"var(--color-syntax-highlight-base02)",base03:"var(--color-syntax-highlight-base03)",base04:"var(--color-syntax-highlight-base04)",base05:"var(--color-syntax-highlight-base05)",base06:"var(--color-syntax-highlight-base06)",base07:"var(--color-syntax-highlight-base07)",base08:"var(--color-syntax-highlight-base08)",base09:"var(--color-syntax-highlight-base09)",base0A:"var(--color-syntax-highlight-base0A)",base0B:"var(--color-syntax-highlight-base0B)",base0C:"var(--color-syntax-highlight-base0C)",base0D:"var(--color-syntax-highlight-base0D)",base0E:"var(--color-syntax-highlight-base0E)",base0F:"var(--color-syntax-highlight-base0F)"},p=({content:e="",children:r,wrap:m=!0,size:b="auto",copy:j=!0,lang:t="",className:g="",...l})=>{const[f,c]=s.useState(!1),o=h.useRef(null),{heading:n}=l;h.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]);const i=s.useRef(null),y=s.useCallback(()=>{var u;const d=t==="json"?JSON.stringify(e||r):(u=i.current)==null?void 0:u.textContent;d&&navigator.clipboard.writeText(d).catch(()=>{console.warn("Cannot copy text to clipboard")}),c(!0),o.current&&clearTimeout(o.current),o.current=window.setTimeout(()=>c(!1),1e3)},[e,r,t]);return a.jsxs("div",{className:`juno-code-block ${k} ${t?`juno-code-block-lang-${t}`:""} ${g}`,"data-lang":t||null,...l,children:[n&&n.length?a.jsx("div",{className:`juno-codeblock-heading ${S}`,children:a.jsx("span",{className:`${$}`,children:n})}):"",t==="json"?a.jsx(x,{data:e,expanded:3,theme:q,style:T}):a.jsx("pre",{className:`juno-code-block-pre ${w(m)} ${C(b)}`,children:a.jsx("code",{className:`${N}`,ref:i,children:e||r})}),j?a.jsxs("div",{className:`juno-codeblock-bottombar ${V}`,children:[a.jsx("span",{className:`${B}`,children:f?"Copied!":""}),a.jsx(v,{icon:"contentCopy",onClick:y})]}):""]})};try{p.displayName="CodeBlock",p.__docgenInfo={description:"A basic CodeBlock component. Accepts a content prop or children. Will render a pre-wrapped code element.",displayName:"CodeBlock",props:{content:{defaultValue:{value:""},description:"The content to render. Will override children if passed.",name:"content",required:!1,type:{name:"string | object"}},children:{defaultValue:null,description:"The children to render. Will be overridden by content prop if passed as well.",name:"children",required:!1,type:{name:"object | ReactNode"}},heading:{defaultValue:null,description:"Pass at title to render. Will look like a single tab.",name:"heading",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"true"},description:"Set whether the code should wrap or not. Default is true.",name:"wrap",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"auto"},description:'Set the size of the CodeBlock. Default is "auto"',name:"size",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},copy:{defaultValue:{value:"true"},description:"Render a button to copy the code to the clipboard. Defaults to true",name:"copy",required:!1,type:{name:"boolean"}},lang:{defaultValue:{value:""},description:'Pass a lang prop. Passing "json" will render a fully-featured JsonView. Will also add a data-lang-attribute to the codeblock',name:"lang",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapper of the CodeBlock",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{p as C};
