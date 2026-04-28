import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./Icon.component-Bc6oc1sZ.js";import{n}from"./PortalProvider.component-BHnpU9n4.js";import{useEffect as r,useRef as i,useState as a}from"react";import{createPortal as o}from"react-dom";var s=e(),c=(e,t,n)=>`
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
    `.replace(/\n/g,` `).replace(/\s+/g,` `),l=`jn:overflow-auto`,u=`
  jn:flex
  jn:items-center
  jn:py-4
  jn:px-8
`,d=`
  jn:text-theme-high
  jn:text-lg
  jn:font-bold
`,f=({heading:e=``,size:f=`default`,opened:p=!1,closeable:m=!0,onClose:h,className:g=``,children:_,...v})=>{let[y,b]=a(p),[x,S]=a(m),[C,w]=a(!1),T=i(null),E=n();r(()=>b(p),[p]),r(()=>S(m),[m]),r(()=>()=>{T.current&&clearTimeout(T.current)},[]),r(()=>{y||(w(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>w(!1),500))},[y]);let D=e=>{b(!1),h?.(e)};return o((0,s.jsxs)(`div`,{className:`juno-panel ${c(y,C,f)} ${g}`,role:`dialog`,"aria-labelledby":`juno-panel-title`,...v,children:[(0,s.jsxs)(`div`,{className:`juno-panel-header ${u}`,children:[(0,s.jsx)(`div`,{className:`juno-panel-title ${d}`,id:`juno-panel-title`,children:e}),x&&(0,s.jsx)(t,{icon:`close`,onClick:D,className:`juno-panel-close jn:ml-auto`})]}),(0,s.jsx)(`div`,{className:`juno-panel-content-wrapper ${l}`,children:_})]}),E||document.body)};try{f.displayName=`Panel`,f.__docgenInfo={description:`A Panel component that slides in from the right side of the screen.
It can be used to display additional content/controls for the content area.`,displayName:`Panel`,props:{heading:{defaultValue:{value:``},description:`Title of the panel.`,name:`heading`,required:!1,type:{name:`ReactNode`}},size:{defaultValue:{value:`default`},description:`Size of the opened panel.`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"large"`}]}},opened:{defaultValue:{value:`false`},description:`Controls whether the panel is open and visible.`,name:`opened`,required:!1,type:{name:`boolean`}},closeable:{defaultValue:{value:`true`},description:`Determines whether the panel can be closed using a close button.`,name:`closeable`,required:!1,type:{name:`boolean`}},onClose:{defaultValue:null,description:`Handler called when the close button is clicked.`,name:`onClose`,required:!1,type:{name:`MouseEventHandler<HTMLElement>`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the panel for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Content to be rendered inside the main body of the panel.`,name:`children`,required:!1,type:{name:`ReactNode`}}}}}catch{}var p=`
  jn:px-8
  jn:py-4
`,m=({className:e=``,footer:t,children:n,...r})=>(0,s.jsxs)(`div`,{className:`juno-panel-body ${e}`,...r,children:[(0,s.jsx)(`div`,{className:`juno-panel-body-content ${p}`,children:n}),t]});try{m.displayName=`PanelBody`,m.__docgenInfo={description:`A PanelBody component is used to encapsulate the main content of a panel.
The primary content for the panel, such as forms or information, is rendered here.`,displayName:`PanelBody`,props:{className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the panel body for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`The content to be rendered inside the panel body.
Typically, this will include form elements and other interactive content.`,name:`children`,required:!1,type:{name:`ReactNode`}},footer:{defaultValue:null,description:`Optional footer component to be rendered below the main content.
The footer can include buttons or other control elements.`,name:`footer`,required:!1,type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}}}}catch{}export{f as n,m as t};