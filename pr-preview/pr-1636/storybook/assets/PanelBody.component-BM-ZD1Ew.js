import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{_ as n,g as r}from"./iframe-qPHz0liX.js";import{t as i}from"./Icon.component-BYUQ4r57.js";import{n as a}from"./PortalProvider.component-C0iptKAD.js";var o=e(t()),s=e(n()),c=r(),l=(e,t,n)=>`
      jn:fixed
      jn:right-0
      jn:transition-transform
      jn:ease-out
      jn:duration-300
      jn:inset-y-0
      jn:z-9989
      jn:grid
      jn:grid-rows-[auto_1fr]
      jn:bg-theme-panel
      jn:backdrop-blur
      jn:backdrop-saturate-150     
      jn:shadow-md
      ${n===`large`?`
          jn:w-[90%]
          jn:xl:w-[80%]
          jn:2xl:w-[1228px]`:`
          jn:w-[75%]
          jn:xl:w-[55%]
          jn:2xl:w-[844px]`}
      ${e?``:`jn:translate-x-[100%]`}
      ${!e&&!t?`jn:invisible`:``}
    `.replace(/\n/g,` `).replace(/\s+/g,` `),u=`jn:overflow-auto`,d=`
  jn:flex
  jn:items-center
  jn:py-4
  jn:px-8
`,f=`
  jn:text-theme-high
  jn:text-lg
  jn:font-bold
`,p=({heading:e=``,size:t=`default`,opened:n=!1,closeable:r=!0,onClose:p,className:m=``,children:h,...g})=>{let[_,v]=(0,o.useState)(n),[y,b]=(0,o.useState)(r),[x,S]=(0,o.useState)(!1),C=(0,o.useRef)(null),w=a();(0,o.useEffect)(()=>v(n),[n]),(0,o.useEffect)(()=>b(r),[r]),(0,o.useEffect)(()=>()=>{C.current&&clearTimeout(C.current)},[]),(0,o.useEffect)(()=>{_||(S(!0),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>S(!1),500))},[_]);let T=e=>{v(!1),p?.(e)};return(0,s.createPortal)((0,c.jsxs)(`div`,{className:`juno-panel ${l(_,x,t)} ${m}`,role:`dialog`,"aria-labelledby":`juno-panel-title`,...g,children:[(0,c.jsxs)(`div`,{className:`juno-panel-header ${d}`,children:[(0,c.jsx)(`div`,{className:`juno-panel-title ${f}`,id:`juno-panel-title`,children:e}),y&&(0,c.jsx)(i,{icon:`close`,onClick:T,className:`juno-panel-close jn:ml-auto`})]}),(0,c.jsx)(`div`,{className:`juno-panel-content-wrapper ${u}`,children:h})]}),w||document.body)};try{p.displayName=`Panel`,p.__docgenInfo={description:`A Panel component that slides in from the right side of the screen.
It can be used to display additional content/controls for the content area.`,displayName:`Panel`,props:{heading:{defaultValue:{value:``},description:`Title of the panel.`,name:`heading`,required:!1,type:{name:`ReactNode`}},size:{defaultValue:{value:`default`},description:`Size of the opened panel.`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"large"`}]}},opened:{defaultValue:{value:`false`},description:`Controls whether the panel is open and visible.`,name:`opened`,required:!1,type:{name:`boolean`}},closeable:{defaultValue:{value:`true`},description:`Determines whether the panel can be closed using a close button.`,name:`closeable`,required:!1,type:{name:`boolean`}},onClose:{defaultValue:null,description:`Handler called when the close button is clicked.`,name:`onClose`,required:!1,type:{name:`MouseEventHandler<HTMLElement>`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the panel for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Content to be rendered inside the main body of the panel.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var m=`
  jn:px-8
  jn:py-4
`,h=({className:e=``,footer:t,children:n,...r})=>(0,c.jsxs)(`div`,{className:`juno-panel-body ${e}`,...r,children:[(0,c.jsx)(`div`,{className:`juno-panel-body-content ${m}`,children:n}),t]});try{h.displayName=`PanelBody`,h.__docgenInfo={description:`A PanelBody component is used to encapsulate the main content of a panel.
The primary content for the panel, such as forms or information, is rendered here.`,displayName:`PanelBody`,props:{className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the panel body for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`The content to be rendered inside the panel body.
Typically, this will include form elements and other interactive content.`,name:`children`,required:!1,type:{name:`ReactNode`}},footer:{defaultValue:null,description:`Optional footer component to be rendered below the main content.
The footer can include buttons or other control elements.`,name:`footer`,required:!1,type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}}}}catch{}export{p as n,h as t};