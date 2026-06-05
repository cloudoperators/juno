import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,W as r,tt as i}from"./iframe-Cr5SycZT.js";import{r as a,t as o}from"./Icon.component-BCTD8iml.js";import{n as s,r as c}from"./PortalProvider.component-St2mN_uy.js";var l,u,d,f,p,m,h,g,_=t((()=>{l=e(i()),u=e(r()),a(),s(),d=n(),f=(e,t,n)=>`
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
    `.replace(/\n/g,` `).replace(/\s+/g,` `),p=`jn:overflow-auto`,m=`
  jn:flex
  jn:items-center
  jn:py-4
  jn:px-8
`,h=`
  jn:text-theme-high
  jn:text-lg
  jn:font-bold
`,g=({heading:e=``,size:t=`default`,opened:n=!1,closeable:r=!0,onClose:i,className:a=``,children:s,...g})=>{let[_,v]=(0,l.useState)(n),[y,b]=(0,l.useState)(r),[x,S]=(0,l.useState)(!1),C=(0,l.useRef)(null),w=c();(0,l.useEffect)(()=>v(n),[n]),(0,l.useEffect)(()=>b(r),[r]),(0,l.useEffect)(()=>()=>{C.current&&clearTimeout(C.current)},[]),(0,l.useEffect)(()=>{_||(S(!0),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>S(!1),500))},[_]);let T=e=>{v(!1),i?.(e)};return(0,u.createPortal)((0,d.jsxs)(`div`,{className:`juno-panel ${f(_,x,t)} ${a}`,role:`dialog`,"aria-labelledby":`juno-panel-title`,...g,children:[(0,d.jsxs)(`div`,{className:`juno-panel-header ${m}`,children:[(0,d.jsx)(`div`,{className:`juno-panel-title ${h}`,id:`juno-panel-title`,children:e}),y&&(0,d.jsx)(o,{icon:`close`,onClick:T,className:`juno-panel-close jn:ml-auto`})]}),(0,d.jsx)(`div`,{className:`juno-panel-content-wrapper ${p}`,children:s})]}),w||document.body)};try{g.displayName=`Panel`,g.__docgenInfo={description:`A Panel component that slides in from the right side of the screen.
It can be used to display additional content/controls for the content area.`,displayName:`Panel`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Panel/Panel.component.tsx`,methods:[],props:{heading:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Title of the panel.`,name:`heading`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`ReactNode`}},size:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Size of the opened panel.`,name:`size`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`enum`,raw:`PanelSize`,value:[{value:`"large"`},{value:`"default"`}]}},opened:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Controls whether the panel is open and visible.`,name:`opened`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`boolean`}},closeable:{defaultValue:{value:`true`},declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Determines whether the panel can be closed using a close button.`,name:`closeable`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Handler called when the close button is clicked.`,name:`onClose`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLElement>`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Additional CSS classes to apply to the panel for custom styling.`,name:`className`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`}],description:`Content to be rendered inside the main body of the panel.`,name:`children`,parent:{fileName:`ui-components/src/components/Panel/Panel.component.tsx`,name:`PanelProps`},required:!1,tags:{},type:{name:`ReactNode`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/layout-panel-panel--docs
{@link PanelProps }`}}}catch{}})),v,y,b,x=t((()=>{i(),v=n(),y=`
  jn:px-8
  jn:py-4
`,b=({className:e=``,footer:t,children:n,...r})=>(0,v.jsxs)(`div`,{className:`juno-panel-body ${e}`,...r,children:[(0,v.jsx)(`div`,{className:`juno-panel-body-content ${y}`,children:n}),t]});try{b.displayName=`PanelBody`,b.__docgenInfo={description:`A PanelBody component is used to encapsulate the main content of a panel.
The primary content for the panel, such as forms or information, is rendered here.`,displayName:`PanelBody`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PanelBody/PanelBody.component.tsx`,methods:[],props:{className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PanelBody/PanelBody.component.tsx`,name:`PanelBodyProps`}],description:`Additional CSS classes to apply to the panel body for custom styling.`,name:`className`,parent:{fileName:`ui-components/src/components/PanelBody/PanelBody.component.tsx`,name:`PanelBodyProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PanelBody/PanelBody.component.tsx`,name:`PanelBodyProps`}],description:`The content to be rendered inside the panel body.
Typically, this will include form elements and other interactive content.`,name:`children`,parent:{fileName:`ui-components/src/components/PanelBody/PanelBody.component.tsx`,name:`PanelBodyProps`},required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PanelBody/PanelBody.component.tsx`,name:`PanelBodyProps`}],description:`Optional footer component to be rendered below the main content.
The footer can include buttons or other control elements.`,name:`footer`,parent:{fileName:`ui-components/src/components/PanelBody/PanelBody.component.tsx`,name:`PanelBodyProps`},required:!1,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/layout-panel-panelbody--docs
{@link PanelBodyProps }`}}}catch{}}));export{_ as i,x as n,g as r,b as t};