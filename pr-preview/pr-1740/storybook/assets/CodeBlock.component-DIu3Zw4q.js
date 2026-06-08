import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-BPAE06x6.js";import{t as i}from"./Icon.component-BjLJNJPo.js";import{t as a}from"./Icon-CjNyPxci.js";import{n as o,t as s}from"./JsonViewer-WLfgf9Sv.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x=t((()=>{c=e(r()),s(),a(),l=n(),u=`
  jn:bg-theme-code-block
  jn:rounded
`,d=e=>`
    jn:p-6
    ${e?`jn:break-words jn:break-all jn:whitespace-pre-wrap`:`jn:overflow-x-auto`}
  `,f=e=>{switch(e){case`small`:return`
        juno-codeblock-pre-small
        jn:max-h-64
        jn:overflow-y-auto
      `;case`medium`:return`
        juno-codeblock-pre-medium
        jn:max-h-[32rem]
        jn:overflow-y-auto
      `;case`large`:return`
        juno-codeblock-pre-large
        jn:max-h-[56rem]
        jn:overflow-y-auto
      `;default:return``}},p=`
  jn:bg-theme-code-block
  jn:text-sm
`,m=`
  jn:text-sm
  jn:border-b-[1px]
  jn:border-theme-codeblock-bar 
  jn:h-[3.4375rem]
  jn:flex
`,h=`
  jn:flex
  jn:font-bold
  jn:px-[1.5625rem]
  jn:items-center
`,g=`
  jn:flex 
  jn:justify-end 
  jn:px-3
  jn:py-2 
  jn:border-t-[1px]
  jn:border-theme-codeblock-bar
`,_=`
  jn:font-bold 
  jn:text-sm 
  jn:mr-4 
  jn:mt-1
`,v={fontFamily:`IBM Plex Mono`,fontSize:`0.875rem`,padding:`1.5rem`},y={base00:`var(--color-syntax-highlight-base00)`,base01:`var(--color-syntax-highlight-base01)`,base02:`var(--color-syntax-highlight-base02)`,base03:`var(--color-syntax-highlight-base03)`,base04:`var(--color-syntax-highlight-base04)`,base05:`var(--color-syntax-highlight-base05)`,base06:`var(--color-syntax-highlight-base06)`,base07:`var(--color-syntax-highlight-base07)`,base08:`var(--color-syntax-highlight-base08)`,base09:`var(--color-syntax-highlight-base09)`,base0A:`var(--color-syntax-highlight-base0A)`,base0B:`var(--color-syntax-highlight-base0B)`,base0C:`var(--color-syntax-highlight-base0C)`,base0D:`var(--color-syntax-highlight-base0D)`,base0E:`var(--color-syntax-highlight-base0E)`,base0F:`var(--color-syntax-highlight-base0F)`},b=({content:e=``,children:t,wrap:n=!0,size:r=`auto`,copy:a=!0,lang:s=``,className:b=``,...x})=>{let[S,C]=(0,c.useState)(!1),w=(0,c.useRef)(null),{heading:T}=x;(0,c.useEffect)(()=>()=>{w.current&&clearTimeout(w.current)},[]);let E=(0,c.useRef)(null),D=(0,c.useCallback)(()=>{let n=s===`json`?JSON.stringify(e||t):E.current?.textContent;n&&navigator.clipboard.writeText(n).catch(()=>{console.warn(`Cannot copy text to clipboard`)}),C(!0),w.current&&clearTimeout(w.current),w.current=window.setTimeout(()=>C(!1),1e3)},[e,t,s]);return(0,l.jsxs)(`div`,{className:`juno-code-block ${u} ${s?`juno-code-block-lang-${s}`:``} ${b}`,"data-lang":s||null,...x,children:[T&&T.length?(0,l.jsx)(`div`,{className:`juno-codeblock-heading ${m}`,children:(0,l.jsx)(`span`,{className:`${h}`,children:T})}):``,s===`json`?(0,l.jsx)(o,{data:e,expanded:3,theme:y,style:v}):(0,l.jsx)(`pre`,{className:`juno-code-block-pre ${d(n)} ${f(r)}`,children:(0,l.jsx)(`code`,{className:`${p}`,ref:E,children:t??(typeof e==`string`?e:null)})}),a?(0,l.jsxs)(`div`,{className:`juno-codeblock-bottombar ${g}`,children:[(0,l.jsx)(`span`,{className:`${_}`,children:S?`Copied!`:``}),(0,l.jsx)(i,{icon:`contentCopy`,onClick:D})]}):``]})};try{b.displayName=`CodeBlock`,b.__docgenInfo={description:"The `CodeBlock` component renders a block of preformatted code or content. It offers features such\nas optional wrapping, copying to clipboard, and syntax highlighting for JSON content via a custom viewer.",displayName:`CodeBlock`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,methods:[],props:{content:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:'The content to render. Used when `lang` is "json". Overrides children if not specified.\nDefaults to an empty string or object.',name:`content`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{},type:{name:`string | object`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:'Elements or text to render inside the code block. Used when `lang` is not "json", overriding `content`.',name:`children`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{},type:{name:`ReactNode`}},heading:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:`Optional caption or title to render, styled like a tab.`,name:`heading`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{},type:{name:`string`}},wrap:{defaultValue:{value:`true`},declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:`Determines whether the code should wrap.`,name:`wrap`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{default:`true`},type:{name:`boolean`}},size:{defaultValue:{value:`auto`},declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:`Specifies the size of the CodeBlock.`,name:`size`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{default:`"auto"`},type:{name:`enum`,raw:`CodeBlockSize`,value:[{value:`"auto"`},{value:`"small"`},{value:`"medium"`},{value:`"large"`}]}},copy:{defaultValue:{value:`true`},declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:`Enables or disables the copy-to-clipboard option.`,name:`copy`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{default:`true`},type:{name:`boolean`}},lang:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:`Language for the content. "json" will render a structured JsonView. Adds a data-lang attribute.`,name:`lang`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`}],description:`Additional CSS classes for customizing the CodeBlock styling.`,name:`className`,parent:{fileName:`ui-components/src/components/CodeBlock/CodeBlock.component.tsx`,name:`CodeBlockProps`},required:!1,tags:{default:`""`},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/components-codeblock--docs
{@link CodeBlockProps }`}}}catch{}}));export{x as n,b as t};