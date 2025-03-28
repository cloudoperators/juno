import{j as e}from"./jsx-runtime-BP6H2k8O.js";import{r as M,e as m}from"./index-DysCNOs_.js";import{v as ke}from"./v4-CtRu48qb.js";import{S as D}from"./headlessui-float-pPOEMtsx.js";import{I as xe,K as Ae}from"./Icon.component-Cri6u08O.js";import{P as we}from"./PortalProvider.component-Dpl-KYct.js";import{q as E}from"./menu-CVtIKwDw.js";import{B as V}from"./Button.component-NwVs7jIc.js";import"./index-DxJeRO9x.js";import"./keyboard-RYHMaleb.js";import"./floating-ui.react-dom-C789hh8f.js";import"./widgets-BR6-ubtP.js";import"./use-text-value-BSk7WQuc.js";import"./use-tree-walker-C6BvWJRT.js";import"./Spinner.component-B25dgKgo.js";const{addons:Ee}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:Ne}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:F}=__STORYBOOK_MODULE_GLOBAL__;var We="storybook/actions",De=`${We}/action-event`,R={depth:10,clearOnStoryChange:!0,limit:50},Se=(t,s)=>{let o=Object.getPrototypeOf(t);return!o||s(o)?o:Se(o,s)},Re=t=>!!(typeof t=="object"&&t&&Se(t,s=>/^Synthetic(?:Base)?Event$/.test(s.constructor.name))&&typeof t.persist=="function"),Be=t=>{if(Re(t)){let s=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));s.persist();let o=Object.getOwnPropertyDescriptor(s,"view"),a=o==null?void 0:o.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(s,"view",{...o,value:Object.create(a.constructor.prototype)}),s}return t},Ve=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ke():Date.now().toString(36)+Math.random().toString(36).substring(2);function $e(t,s={}){let o={...R,...s},a=function(...l){var d,g;if(s.implicit){let f=(d="__STORYBOOK_PREVIEW__"in F?F.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(u=>u.phase==="playing"||u.phase==="rendering");if(f){let u=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),P=new Ne({phase:f.phase,name:t,deprecated:u});if(u)console.warn(P);else throw P}}let r=Ee.getChannel(),c=Ve(),b=5,i=l.map(Be),y=l.length>1?i:i[0],h={id:c,count:0,data:{name:t,args:y},options:{...o,maxDepth:b+(o.depth||3),allowFunction:o.allowFunction||!1}};r.emit(De,h)};return a.isAction=!0,a.implicit=s.implicit,a}var p=(...t)=>{let s=R,o=t;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(s={...R,...o.pop()});let a=o[0];(o.length!==1||typeof a=="string")&&(a={},o.forEach(r=>{a[r]=r}));let l={};return Object.keys(a).forEach(r=>{l[r]=$e(a[r],s)}),l};const Fe=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,Ce=`
  jn-cursor-not-allowed
  jn-opacity-50
`,qe=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-w-max
  jn-rounded
  jn-bg-theme-background-lvl-1
`,ze=`
  jn-text-base
  jn-text-theme-default
  jn-flex
  jn-w-full
  jn-items-center
  jn-whitespace-nowrap
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,He=`
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`,Le=`
  jn-text-sm
  jn-p-2
`,Ge=`
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`,Ke=`
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`,Ye=`
  jn-inline-block
  jn-mr-2
`,Je=`
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`,Ue=`
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`,Qe=`
  jn-h-
  jn-bg-theme-background-lvl-3
`,Xe=`
  jn-inline-flex
`,Te=M.createContext(null),N=()=>{const t=M.useContext(Te);if(!t)throw new Error("The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.");return t},n=({children:t,className:s="",disabled:o=!1,icon:a="moreVert",menuSize:l="normal",onClose:r,onOpen:c,...b})=>{const[i,y]=M.useState(!1),h=M.useRef(i);M.useEffect(()=>{i!==h.current&&(i?c==null||c():r==null||r()),h.current=i},[i,c,r]);const d=m.Children.toArray(t),g=d.some(u=>m.isValidElement(u)&&u.type===B),f=d.find(u=>m.isValidElement(u)&&u.type===Oe);return e.jsx(E,{as:"div",className:`juno-popupmenu ${s}`,...b,children:({open:u,close:P})=>(M.useEffect(()=>{u!==i&&y(u)},[u]),e.jsx(Te.Provider,{value:{isOpen:i,close:P,menuSize:l},children:e.jsxs(D,{as:m.Fragment,placement:"bottom-start",offset:4,shift:8,flip:8,composable:!0,children:[e.jsx(D.Reference,{children:e.jsxs("div",{className:`juno-popupmenu-float-reference-wrapper ${Xe}`,children:[!g&&e.jsx(n.Toggle,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${o?Ce:Fe}`,disabled:o,children:e.jsx(xe,{icon:a})}),d.map(W=>{if(m.isValidElement(W)&&W.type===B)return W})]})}),e.jsx(we.Portal,{children:e.jsx(D.Content,{children:e.jsx("div",{className:"juno-popupmenu-float-content-wrapper",children:f})})})]})}))})},B=({as:t="button",disabled:s=!1,children:o,className:a="",...l})=>e.jsx(E.Button,{as:t,className:`juno-popupmenu-toggle ${s&&Ce} ${a}`,disabled:s,...l,children:o}),Oe=({children:t,className:s="",...o})=>{const{menuSize:a}=N();return e.jsx(E.Items,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${a} ${qe} ${s}`,...o,children:t})},Ze=({as:t="div",children:s,className:o="",disabled:a=!1,href:l,icon:r,label:c="",rel:b,target:i,...y})=>{const{menuSize:h}=N(),d=h==="small"?Le:He;return e.jsx(E.Item,{as:t,disabled:a,className:`juno-popupmenu-item ${ze} ${a?Ke:Ge} ${d} ${o}`,...t==="a"?{href:l,rel:b,target:i}:{},...y,children:g=>e.jsxs(e.Fragment,{children:[r&&e.jsx(xe,{icon:r,size:"18",className:`juno-popupmenu-item-icon ${Ye}`}),c&&typeof c=="string"?c:typeof s=="function"?s(g):s]})})},en=({children:t,className:s="",...o})=>e.jsx("section",{className:`juno-popupmenu-section ${Je} ${s}`,...o,children:t}),nn=({children:t,label:s="",className:o="",...a})=>e.jsx("header",{className:`juno-popupmenu-section-title ${Ue} ${o}`,...a,children:e.jsx("h1",{children:s&&s.length?s:t})}),tn=({className:t="",...s})=>e.jsx("div",{className:`juno-popupmenu-section-divider ${Qe} ${t}`,...s});n.Toggle=B;n.Menu=Oe;n.Item=Ze;n.Section=en;n.SectionHeading=nn;n.SectionSeparator=tn;try{Context.displayName="Context",Context.__docgenInfo={description:`Context lets components pass information deep down without explicitly
passing props.

Created from {@link createContext}`,displayName:"Context",props:{}}}catch{}try{n.displayName="PopupMenu",n.__docgenInfo={description:"A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.",displayName:"PopupMenu",props:{children:{defaultValue:null,description:"The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the PopupMenu is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"moreVert"},description:"The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"search"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},menuSize:{defaultValue:{value:"normal"},description:"The size of the menu and its items.",name:"menuSize",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"normal"'}]}},onClose:{defaultValue:null,description:"Handler to run when the Menu closes.",name:"onClose",required:!1,type:{name:"(() => void)"}},onOpen:{defaultValue:null,description:"Handler to run when the Menu opens.",name:"onOpen",required:!1,type:{name:"(() => void)"}},as:{defaultValue:{value:"div"},description:"",name:"as",required:!1,type:{name:"ElementType"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},__demoMode:{defaultValue:null,description:"",name:"__demoMode",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}}}catch{}const Pn={title:"WiP/PopupMenu",component:n,subcomponents:{"PopupMenu.Toggle":n.Toggle,"PopupMenu.Menu":n.Menu,"PopupMenu.Item":n.Item,"PopupMenu.Section":n.Section},argTypes:{children:{control:!1},icon:{options:["moreVert",...Object.keys(Ae)],control:{type:"select"}}},decorators:[t=>e.jsx(we,{children:t()})]},$=m.forwardRef(({className:t="",onClick:s=void 0,...o},a)=>e.jsx(V,{ref:a,className:`my-custom-toggle ${t}`,onClick:s,...o,children:"Custom Toggle"}));$.displayName="ToggleButton";const _e=m.forwardRef((t,s)=>{const{isOpen:o}=N(),{className:a,...l}=t;return e.jsx(V,{ref:s,className:`toggle-button ${o?`
    jn-bg-theme-accent
    jn-text-theme-highest
   toggle-button-open`:"toggle-button-closed"} ${a||""}`,...l,children:t.children||"Toggle Me!"})});_e.displayName="StyledToggleButton";const on=t=>{const{close:s}=N();return e.jsx(V,{onClick:s,...t})},j={parameters:{docs:{description:{story:"When no `<PopupMenu.Menu>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."}}},args:{...p("onOpen","onClose"),children:e.jsx(n.Menu,{children:e.jsx("p",{children:"Menu goes here."})})}},I={parameters:{docs:{description:{story:"This story has no `PopupMenu.Menu` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{...p("onOpen","onClose")}},v={parameters:{args:{description:{story:"Disable the default toggle."}}},args:{...p("onOpen","onClose"),disabled:!0}},x={parameters:{docs:{description:{story:"Pass at least a `<PopupMenu.Menu>` component with `<PopupMenu.Item>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{...p("onOpen","onClose"),children:e.jsxs(n.Menu,{children:[e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"}),e.jsx(n.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})}},w={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenu.Item elements as links."}}},args:{...p("onOpen","onClose"),children:e.jsxs(n.Menu,{children:[e.jsx(n.Item,{as:"a",href:"https://github.com/cloudoperators/juno",label:"Go to Juno on Github"}),e.jsx(n.Item,{as:"a",href:"https://www.sap.com",label:"Got to sap.com",target:"_blank",icon:"openInNew"})]})}},S={parameters:{docs:{description:{story:"`PopupMenu.Item` elements may contain random elements other than `PopupMenu.Item`. In such cases you may consume the PupupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{...p("onOpen","onClose"),children:e.jsxs(n.Menu,{children:[e.jsx("p",{children:"Some content goes here."}),e.jsx(on,{variant:"primary",children:"Yay!"})]})}},C={parameters:{docs:{description:{story:"In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."}}},args:{...p("onOpen","onClose"),children:e.jsxs(n.Menu,{children:[e.jsxs(n.Section,{children:[e.jsx(n.SectionHeading,{children:"Section 1"}),e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"})]}),e.jsx(n.SectionSeparator,{}),e.jsxs(n.Section,{children:[e.jsx(n.SectionHeading,{label:"Section 2"}),e.jsx(n.Item,{label:"Menu Item 3"}),e.jsx(n.Item,{label:"Menu Item 4 Disabled",disabled:!0})]})]})}},T={parameters:{docs:{description:{story:"A default toggle can be rendered with a custom icon without having to pass a custom toggle element."}}},args:{...p("onOpen","onClose"),icon:"warning",children:e.jsxs(n.Menu,{children:[e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"}),e.jsx(n.Item,{label:"Menu Item 3 Disabled",disabled:!0})]})}},O={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{...p("onOpen","onClose"),children:[e.jsx(n.Toggle,{children:"The Toggle"},"t"),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"}),e.jsx(n.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},_={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenu.Toggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{...p("onOpen","onClose"),children:[e.jsx(n.Toggle,{as:$},"t"),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"}),e.jsx(n.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},k={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{...p("onOpen","onClose"),children:[e.jsx(n.Toggle,{as:_e},"t"),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"}),e.jsx(n.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}},A={parameters:{docs:{description:{story:"By default, `PopupMenu.Toggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenu.Toggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{...p("onOpen","onClose"),children:[e.jsx(n.Toggle,{as:m.Fragment,children:e.jsx($,{})},"t"),e.jsxs(n.Menu,{children:[e.jsx(n.Item,{label:"Menu Item 1"}),e.jsx(n.Item,{label:"Menu Item 2",icon:"deleteForever"}),e.jsx(n.Item,{label:"Menu Item 3 Disabled",disabled:!0})]},"m")]}};var q,z,H;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenu.Menu>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenu.Menu is passed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <p>Menu goes here.</p>
      </PopupMenu.Menu>
  }
}`,...(H=(z=j.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var L,G,K;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This story has no \`PopupMenu.Menu\` passed. The component should still render without any errors, and \`onOpen\` and \`onClose\` should be run regardless."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose")
  }
}`,...(K=(G=I.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Y,J,U;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    args: {
      description: {
        story: "Disable the default toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    disabled: true
  }
}`,...(U=(J=v.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Q,X,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenu.Menu>\` component with \`<PopupMenu.Item>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenu.Item elements as links."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <PopupMenu.Item as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenu.Item as="a" href="https://www.sap.com" label="Got to sap.com" target="_blank" icon="openInNew" />
      </PopupMenu.Menu>
  }
}`,...(te=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,se,ae;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenu.Item\` elements may contain random elements other than \`PopupMenu.Item\`. In such cases you may consume the PupupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenu.Menu>
  }
}`,...(ae=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var re,ue,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: <PopupMenu.Menu>
        <PopupMenu.Section>
          <PopupMenu.SectionHeading>Section 1</PopupMenu.SectionHeading>
          <PopupMenu.Item label="Menu Item 1" />
          <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        </PopupMenu.Section>
        <PopupMenu.SectionSeparator />
        <PopupMenu.Section>
          <PopupMenu.SectionHeading label="Section 2" />
          <PopupMenu.Item label="Menu Item 3" />
          <PopupMenu.Item label="Menu Item 4 Disabled" disabled />
        </PopupMenu.Section>
      </PopupMenu.Menu>
  }
}`,...(le=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var ie,pe,ce;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    icon: "warning",
    children: <PopupMenu.Menu>
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>
  }
}`,...(ce=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var de,me,he;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle key="t">The Toggle</PopupMenu.Toggle>, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(he=(me=O.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,Me,be;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenu.Toggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle as={ToggleButton} key="t" />, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(be=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:be.source}}};var ye,fe,Pe;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle as={StyledToggleButton} key="t" />, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(Pe=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:Pe.source}}};var je,Ie,ve;A.parameters={...A.parameters,docs:{...(je=A.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenu.Toggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenu.Toggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    ...actions("onOpen", "onClose"),
    children: [<PopupMenu.Toggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenu.Toggle>, <PopupMenu.Menu key="m">
        <PopupMenu.Item label="Menu Item 1" />
        <PopupMenu.Item label="Menu Item 2" icon="deleteForever" />
        <PopupMenu.Item label="Menu Item 3 Disabled" disabled />
      </PopupMenu.Menu>]
  }
}`,...(ve=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:ve.source}}};const jn=["Default","NoMenu","DisabledDefaultToggle","WithMenuChild","WitchChildrenAsLinks","WithMenuWithRandomContent","WithMenuChildWithSection","WithIcon","WithToggleAndMenuChildren","WithToggleAsButtonComponent","WithToggleAsButtonStyledByState","WithCustomButtonComponentAsChild"];export{j as Default,v as DisabledDefaultToggle,I as NoMenu,w as WitchChildrenAsLinks,A as WithCustomButtonComponentAsChild,T as WithIcon,x as WithMenuChild,C as WithMenuChildWithSection,S as WithMenuWithRandomContent,O as WithToggleAndMenuChildren,_ as WithToggleAsButtonComponent,k as WithToggleAsButtonStyledByState,jn as __namedExportsOrder,Pn as default};
