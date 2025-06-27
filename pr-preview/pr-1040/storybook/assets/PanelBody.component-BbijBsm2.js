import{r as n,b as N,j as a}from"./iframe-DlbXkkhY.js";import{I as _}from"./Icon.component-BSv4oWQ5.js";import{u as w}from"./PortalProvider.component-ScOmIrml.js";const S=(e,l,t)=>`
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
    `.replace(/\n/g," ").replace(/\s+/g," "),T="jn:overflow-auto",E=`
  jn:flex
  jn:items-center
  jn:py-4
  jn:px-8
`,P=`
  jn:text-theme-high
  jn:text-lg
  jn:font-bold
`,p=({heading:e="",size:l="default",opened:t=!1,closeable:o=!0,onClose:r,className:f="",children:h,...j})=>{const[i,d]=n.useState(t),[y,b]=n.useState(o),[g,c]=n.useState(!1),s=n.useRef(null),u=w();n.useEffect(()=>d(t),[t]),n.useEffect(()=>b(o),[o]),n.useEffect(()=>()=>{s.current&&clearTimeout(s.current)},[]),n.useEffect(()=>{i||(c(!0),s.current&&clearTimeout(s.current),s.current=setTimeout(()=>c(!1),500))},[i]);const x=v=>{d(!1),r==null||r(v)};return N.createPortal(a.jsxs("div",{className:`juno-panel ${S(i,g,l)} ${f}`,role:"dialog","aria-labelledby":"juno-panel-title",...j,children:[a.jsxs("div",{className:`juno-panel-header ${E}`,children:[a.jsx("div",{className:`juno-panel-title ${P}`,id:"juno-panel-title",children:e}),y&&a.jsx(_,{icon:"close",onClick:x,className:"juno-panel-close jn:ml-auto"})]}),a.jsx("div",{className:`juno-panel-content-wrapper ${T}`,children:h})]}),u||document.body)};try{p.displayName="Panel",p.__docgenInfo={description:`A Panel component that slides in from the right side of the screen.
It can be used to display additional content/controls for the content area.`,displayName:"Panel",props:{heading:{defaultValue:{value:""},description:"Title of the panel.",name:"heading",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"Size of the opened panel.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"large"'}]}},opened:{defaultValue:{value:"false"},description:"Controls whether the panel is open and visible.",name:"opened",required:!1,type:{name:"boolean"}},closeable:{defaultValue:{value:"true"},description:"Determines whether the panel can be closed using a close button.",name:"closeable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Handler called when the close button is clicked.",name:"onClose",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the panel for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content to be rendered inside the main body of the panel.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const q=`
  jn:px-8
  jn:py-4
`,m=({className:e="",footer:l,children:t,...o})=>a.jsxs("div",{className:`juno-panel-body ${e}`,...o,children:[a.jsx("div",{className:`juno-panel-body-content ${q}`,children:t}),l]});try{m.displayName="PanelBody",m.__docgenInfo={description:`A PanelBody component is used to encapsulate the main content of a panel.
The primary content for the panel, such as forms or information, is rendered here.`,displayName:"PanelBody",props:{className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the panel body for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`The content to be rendered inside the panel body.
Typically, this will include form elements and other interactive content.`,name:"children",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:`Optional footer component to be rendered below the main content.
The footer can include buttons or other control elements.`,name:"footer",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}export{p as P,m as a};
