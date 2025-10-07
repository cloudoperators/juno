import{r as n,b as N,j as a}from"./iframe-DDDqEpI7.js";import{I as _}from"./Icon.component-DF_FqK9o.js";import{u as w}from"./PortalProvider.component-QZpFF5Ex.js";const S=(e,l,t)=>`
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
      ${t==="large"?`
          jn:w-[90%]
          jn:xl:w-[80%]
          jn:2xl:w-[1228px]`:`
          jn:w-[75%]
          jn:xl:w-[55%]
          jn:2xl:w-[844px]`}
      ${e?"":"jn:translate-x-[100%]"}
      ${!e&&!l?"jn:invisible":""}
    `.replace(/\n/g," ").replace(/\s+/g," "),C="jn:overflow-auto",T=`
  jn:flex
  jn:items-center
  jn:py-4
  jn:px-8
`,E=`
  jn:text-theme-high
  jn:text-lg
  jn:font-bold
`,u=({heading:e="",size:l="default",opened:t=!1,closeable:o=!0,onClose:m,className:f="",children:h,...j})=>{const[r,i]=n.useState(t),[y,b]=n.useState(o),[g,d]=n.useState(!1),s=n.useRef(null),c=w();n.useEffect(()=>i(t),[t]),n.useEffect(()=>b(o),[o]),n.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),n.useEffect(()=>{r||(d(!0),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>d(!1),500))},[r]);const x=v=>{i(!1),m?.(v)};return N.createPortal(a.jsxs("div",{className:`juno-panel ${S(r,g,l)} ${f}`,role:"dialog","aria-labelledby":"juno-panel-title",...j,children:[a.jsxs("div",{className:`juno-panel-header ${T}`,children:[a.jsx("div",{className:`juno-panel-title ${E}`,id:"juno-panel-title",children:e}),y&&a.jsx(_,{icon:"close",onClick:x,className:"juno-panel-close jn:ml-auto"})]}),a.jsx("div",{className:`juno-panel-content-wrapper ${C}`,children:h})]}),c||document.body)};try{u.displayName="Panel",u.__docgenInfo={description:`A Panel component that slides in from the right side of the screen.
It can be used to display additional content/controls for the content area.`,displayName:"Panel",props:{heading:{defaultValue:{value:""},description:"Title of the panel.",name:"heading",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"Size of the opened panel.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"large"'}]}},opened:{defaultValue:{value:"false"},description:"Controls whether the panel is open and visible.",name:"opened",required:!1,type:{name:"boolean"}},closeable:{defaultValue:{value:"true"},description:"Determines whether the panel can be closed using a close button.",name:"closeable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Handler called when the close button is clicked.",name:"onClose",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the panel for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content to be rendered inside the main body of the panel.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const P=`
  jn:px-8
  jn:py-4
`,p=({className:e="",footer:l,children:t,...o})=>a.jsxs("div",{className:`juno-panel-body ${e}`,...o,children:[a.jsx("div",{className:`juno-panel-body-content ${P}`,children:t}),l]});try{p.displayName="PanelBody",p.__docgenInfo={description:`A PanelBody component is used to encapsulate the main content of a panel.
The primary content for the panel, such as forms or information, is rendered here.`,displayName:"PanelBody",props:{className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the panel body for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`The content to be rendered inside the panel body.
Typically, this will include form elements and other interactive content.`,name:"children",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:`Optional footer component to be rendered below the main content.
The footer can include buttons or other control elements.`,name:"footer",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}export{u as P,p as a};
