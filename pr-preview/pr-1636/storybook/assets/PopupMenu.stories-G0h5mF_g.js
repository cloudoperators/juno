import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,z as r}from"./iframe-DBTlayAM.js";import{n as i,r as a,t as o}from"./Icon.component-CDdmvFqh.js";import{n as s,t as c}from"./PortalProvider.component-CAjn9I0k.js";import{t as l}from"./PortalProvider-q8omBXK1.js";import{t as u}from"./Button.component-DjdMSjpQ.js";import{t as d}from"./Button-V-83ke-9.js";import{a as f,i as ee,n as p,r as te,t as m}from"./headlessui.esm-lZOShXCA.js";import{_ as ne,d as re,i as ie,m as ae,p as oe,t as h}from"./floating-ui.react-BP_yhw8T.js";var g,_,v,y,b,x,S,C,se,ce,w,le,ue,de,T,E,D,O,k,A,j,M,N,P,fe=e((()=>{g=t(r()),m(),h(),a(),l(),_=n(),v=`
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`,y=`
  jn:cursor-not-allowed
  jn:opacity-50
`,b=`
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`,x=`
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,S=`
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`,C=`
  jn:text-sm
  jn:p-2
`,se=`
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`,ce=`
  jn:cursor-not-allowed
  jn:opacity-50
  jn:bg-theme-background-lvl-1
`,w=`
  jn:inline-block
  jn:mr-2
`,le=`
  jn:border-b
  jn:border-theme-background-lvl-3
  jn:last:border-b-0
`,ue=`
  jn:text-theme-light
  jn:text-xs
  jn:p-2
  jn:cursor-default
`,de=`
  jn:h-
  jn:bg-theme-background-lvl-3
`,T=`
  jn:inline-flex
`,E=(0,g.createContext)(null),D=()=>{let e=(0,g.useContext)(E);if(!e)throw Error(`The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext.`);return e},O=({children:e,className:t=``,disabled:n=!1,icon:r=`moreVert`,menuSize:i=`normal`,onClose:a,onOpen:s,...l})=>{let[u,d]=(0,g.useState)(!1),f=(0,g.useRef)(u),{refs:p,floatingStyles:te,update:m}=ie({placement:`bottom-start`,middleware:[oe(4),re(),ae({padding:8})],whileElementsMounted:ne});(0,g.useEffect)(()=>{u!==f.current&&(u?s?.():a?.()),f.current=u},[u,s,a]);let h=g.Children.toArray(e),b=h.some(e=>(0,g.isValidElement)(e)&&e.type===k),x=h.find(e=>(0,g.isValidElement)(e)&&e.type===A);return(0,_.jsx)(ee,{as:`div`,className:`juno-popupmenu ${t}`,...l,children:({open:e,close:t})=>((0,g.useEffect)(()=>{e!==u&&(d(e),e&&m())},[e]),(0,_.jsxs)(E.Provider,{value:{isOpen:u,close:t,menuSize:i},children:[(0,_.jsxs)(`div`,{ref:p.setReference,className:`juno-popupmenu-float-reference-wrapper ${T}`,children:[!b&&(0,_.jsx)(k,{className:`juno-popupmenu-toggle juno-popupmenu-toggle-default ${n?y:v}`,disabled:n,children:(0,_.jsx)(o,{icon:r})}),h.map((e,t)=>(0,g.isValidElement)(e)&&e.type===k?(0,g.cloneElement)(e,{key:t}):null)]}),u&&(0,_.jsx)(c.Portal,{children:(0,_.jsx)(`div`,{ref:p.setFloating,style:te,className:`juno-popupmenu-float-content-wrapper`,children:x})})]}))})},k=({as:e=`button`,disabled:t=!1,children:n,className:r=``,...i})=>(0,_.jsx)(p,{as:e,className:`juno-popupmenu-toggle ${t&&y} ${r}`,disabled:t,...i,children:n}),A=({children:e,className:t=``,...n})=>{let{menuSize:r}=D();return(0,_.jsx)(f,{className:`juno-popupmenu-menu juno-popupmenu-menu-size-${r} ${b} ${t}`,...n,children:e})},j=({as:e=`div`,children:t,className:n=``,disabled:r=!1,href:i,icon:a,label:s=``,rel:c,target:l,...u})=>{let{menuSize:d}=D();return(0,_.jsx)(te,{as:e,disabled:r,className:`juno-popupmenu-item ${x} ${r?ce:se} ${d===`small`?C:S} ${n}`,...e===`a`?{href:i,rel:c,target:l}:{},...u,children:e=>(0,_.jsxs)(_.Fragment,{children:[a&&(0,_.jsx)(o,{icon:a,size:`18`,className:`juno-popupmenu-item-icon ${w}`}),s&&typeof s==`string`?s:typeof t==`function`?t(e):t]})})},M=({children:e,className:t=``,...n})=>(0,_.jsx)(`section`,{className:`juno-popupmenu-section ${le} ${t}`,...n,children:e}),N=({children:e,label:t=``,className:n=``,...r})=>(0,_.jsx)(`header`,{className:`juno-popupmenu-section-title ${ue} ${n}`,...r,children:(0,_.jsx)(`h1`,{children:t&&t.length?t:e})}),P=({className:e=``,...t})=>(0,_.jsx)(`div`,{className:`juno-popupmenu-section-divider ${de} ${e}`,...t});try{k.displayName=`PopupMenuToggle`,k.__docgenInfo={description:``,displayName:`PopupMenuToggle`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{as:{defaultValue:{value:`div`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuToggleProps`}],description:`Element type to render as`,name:`as`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuToggleProps`},required:!1,tags:{},type:{name:`ElementType`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuToggleProps`}],description:`Whether the toggle is disabled`,name:`disabled`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuToggleProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}try{A.displayName=`PopupMenuOptions`,A.__docgenInfo={description:``,displayName:`PopupMenuOptions`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{as:{defaultValue:{value:`div`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuOptionsProps`}],description:``,name:`as`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuOptionsProps`},required:!1,tags:{},type:{name:`ElementType`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuOptionsProps`}],description:``,name:`className`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuOptionsProps`},required:!1,tags:{},type:{name:`string`}},key:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuOptionsProps`}],description:``,name:`key`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuOptionsProps`},required:!1,tags:{},type:{name:`Key`}}},tags:{}}}catch{}try{j.displayName=`PopupMenuItem`,j.__docgenInfo={description:``,displayName:`PopupMenuItem`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{as:{defaultValue:{value:`div`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`as`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`ElementType`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`className`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`disabled`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`boolean`}},href:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`href`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`string`}},icon:{defaultValue:{value:`moreVert`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`icon`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`enum`,raw:`"info" | "warning" | "danger" | "error" | "success" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | ... 45 more ...`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"search"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"default"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"download"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`label`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`string`}},rel:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`rel`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`string`}},target:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`}],description:``,name:`target`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuItemProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{M.displayName=`PopupMenuSection`,M.__docgenInfo={description:``,displayName:`PopupMenuSection`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionProps`}],description:``,name:`className`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{N.displayName=`PopupMenuSectionHeading`,N.__docgenInfo={description:``,displayName:`PopupMenuSectionHeading`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionHeadingProps`}],description:``,name:`className`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionHeadingProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionHeadingProps`}],description:``,name:`label`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionHeadingProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{P.displayName=`PopupMenuSectionSeparator`,P.__docgenInfo={description:``,displayName:`PopupMenuSectionSeparator`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionSeparatorProps`}],description:``,name:`className`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuSectionSeparatorProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{O.displayName=`PopupMenu`,O.__docgenInfo={description:`A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.`,displayName:`PopupMenu`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,methods:[],props:{disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`}],description:`Whether the PopupMenu is disabled.`,name:`disabled`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`},required:!1,tags:{},type:{name:`boolean`}},icon:{defaultValue:{value:`moreVert`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`}],description:`The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed.`,name:`icon`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`},required:!1,tags:{},type:{name:`enum`,raw:`"info" | "warning" | "danger" | "error" | "success" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | "bolt" | "calendarToday" | ... 45 more ...`,value:[{value:`"info"`},{value:`"warning"`},{value:`"danger"`},{value:`"error"`},{value:`"success"`},{value:`"search"`},{value:`"accessTime"`},{value:`"accountCircle"`},{value:`"addCircle"`},{value:`"autoAwesomeMosaic"`},{value:`"autoAwesomeMotion"`},{value:`"bolt"`},{value:`"calendarToday"`},{value:`"cancel"`},{value:`"check"`},{value:`"checkCircle"`},{value:`"chevronLeft"`},{value:`"chevronRight"`},{value:`"close"`},{value:`"comment"`},{value:`"contentCopy"`},{value:`"dangerous"`},{value:`"default"`},{value:`"deleteForever"`},{value:`"description"`},{value:`"dns"`},{value:`"download"`},{value:`"edit"`},{value:`"errorOutline"`},{value:`"exitToApp"`},{value:`"expandLess"`},{value:`"expandMore"`},{value:`"filterAlt"`},{value:`"forum"`},{value:`"help"`},{value:`"home"`},{value:`"language"`},{value:`"manageAccounts"`},{value:`"monitorHeart"`},{value:`"moreVert"`},{value:`"nightsStay"`},{value:`"notificationsOff"`},{value:`"openInBrowser"`},{value:`"openInNew"`},{value:`"place"`},{value:`"severityLow"`},{value:`"severityMedium"`},{value:`"severityHigh"`},{value:`"severityVeryHigh"`},{value:`"severityCritical"`},{value:`"severityUnknown"`},{value:`"sortShortWideArrowUp"`},{value:`"sortShortWideArrowDown"`},{value:`"sortWideShortArrowUp"`},{value:`"sortWideShortArrowDown"`},{value:`"upload"`},{value:`"wbSunny"`},{value:`"widgets"`}]}},menuSize:{defaultValue:{value:`normal`},declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`}],description:`The size of the menu and its items.`,name:`menuSize`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`},required:!1,tags:{},type:{name:`enum`,raw:`"small" | "normal"`,value:[{value:`"small"`},{value:`"normal"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`}],description:`Handler to run when the Menu closes.`,name:`onClose`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`},required:!1,tags:{},type:{name:`(() => void)`}},onOpen:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`}],description:`Handler to run when the Menu opens.`,name:`onOpen`,parent:{fileName:`ui-components/src/components/PopupMenu/PopupMenu.component.tsx`,name:`PopupMenuProps`},required:!1,tags:{},type:{name:`(() => void)`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/wip-popupmenu--docs
{@link PopupMenuProps }`}}}catch{}})),pe=e((()=>{fe()})),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,me;e((()=>{F=t(r()),pe(),a(),s(),d(),I=n(),{fn:L}=__STORYBOOK_MODULE_TEST__,R={title:`WiP/PopupMenu`,component:O,subcomponents:{PopupMenuToggle:k,PopupMenuOptions:A,PopupMenuItem:j,PopupMenuSection:M},argTypes:{children:{control:!1},icon:{options:[`moreVert`,...Object.keys(i)],control:{type:`select`}}},decorators:[e=>(0,I.jsx)(c,{children:(0,I.jsx)(e,{})})]},z=F.forwardRef(({className:e=``,onClick:t=void 0,...n},r)=>(0,I.jsx)(u,{ref:r,className:`my-custom-toggle ${e}`,onClick:t,...n,children:`Custom Toggle`})),z.displayName=`ToggleButton`,B=F.forwardRef((e,t)=>{let{isOpen:n}=D(),{className:r,...i}=e;return(0,I.jsx)(u,{ref:t,className:`toggle-button ${n?`
    jn:bg-theme-accent
    jn:text-theme-highest
   toggle-button-open`:`toggle-button-closed`} ${r||``}`,...i,children:e.children||`Toggle Me!`})}),B.displayName=`StyledToggleButton`,V=e=>{let{close:t}=D();return(0,I.jsx)(u,{onClick:t,...e})},H={parameters:{docs:{description:{story:"When no `<PopupMenuOptions>` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."}}},args:{onOpen:L(),onClose:L(),children:(0,I.jsx)(A,{children:(0,I.jsx)(`p`,{children:`Menu goes here.`})})}},U={parameters:{docs:{description:{story:"This story has no `PopupMenuOptions` passed. The component should still render without any errors, and `onOpen` and `onClose` should be run regardless."}}},args:{onOpen:L(),onClose:L()}},W={parameters:{args:{description:{story:`Disable the default toggle.`}}},args:{onOpen:L(),onClose:L(),disabled:!0}},G={parameters:{docs:{description:{story:"Pass at least a `<PopupMenuOptions>` component with `<PopupMenuItem>` elements inside to render a functional menu. A default toggle element will be rendered."}}},args:{onOpen:L(),onClose:L(),children:(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(j,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},K={parameters:{docs:{description:{story:"Pass `as` as `anchor` and supply a `href` prop in order to render PopupMenuItem elements as links."}}},args:{onOpen:L(),onClose:L(),children:(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{as:`a`,href:`https://github.com/cloudoperators/juno`,label:`Go to Juno on Github`}),(0,I.jsx)(j,{as:`a`,href:`https://www.sap.com`,label:`Go to sap.com`,target:`_blank`,icon:`openInNew`})]})}},q={parameters:{docs:{description:{story:"`PopupMenuItem` elements may contain random elements other than `PopupMenuItem`. In such cases you may consume the PopupMenu context using the `usePopupMenuContext` hook that contains a `close` function that can be used by custom components to close the menu if needed."}}},args:{onOpen:L(),onClose:L(),children:(0,I.jsxs)(A,{children:[(0,I.jsx)(`p`,{children:`Some content goes here.`}),(0,I.jsx)(V,{variant:`primary`,children:`Yay!`})]})}},J={parameters:{docs:{description:{story:`In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers.`}}},args:{onOpen:L(),onClose:L(),children:(0,I.jsxs)(A,{children:[(0,I.jsxs)(M,{children:[(0,I.jsx)(N,{children:`Section 1`}),(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`})]}),(0,I.jsx)(P,{}),(0,I.jsxs)(M,{children:[(0,I.jsx)(N,{label:`Section 2`}),(0,I.jsx)(j,{label:`Menu Item 3`}),(0,I.jsx)(j,{label:`Menu Item 4 Disabled`,disabled:!0})]})]})}},Y={parameters:{docs:{description:{story:`A default toggle can be rendered with a custom icon without having to pass a custom toggle element.`}}},args:{onOpen:L(),onClose:L(),icon:`warning`,children:(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(j,{label:`Menu Item 3 Disabled`,disabled:!0})]})}},X={parameters:{docs:{description:{story:"In the simplest case, a toggle can contain only a string. `PopupMenu` will render a `<button>` element containing that string or any opther children."}}},args:{onOpen:L(),onClose:L(),children:[(0,I.jsx)(k,{children:`The Toggle`},`t`),(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(j,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},Z={parameters:{docs:{description:{story:"Pass a custom component to render `as={MyCustomComponent}` to render as a toggle. Make sure to forward refs. Note we may change the standard `<PopupMenuToggle>` to use our own `<Button>` component, in this case we would need a different example component here."}}},args:{onOpen:L(),onClose:L(),children:[(0,I.jsx)(k,{as:z},`t`),(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(j,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},Q={parameters:{docs:{description:{story:"A custom toggle component may consume the PopupMenu context using the `usePopupMenuContext` hook. This hook exposes the current `isOpen` state of the menu that can be used e.g. to apply conditional styling to the toggle."}}},args:{onOpen:L(),onClose:L(),children:[(0,I.jsx)(k,{as:B},`t`),(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(j,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},$={parameters:{docs:{description:{story:"By default, `PopupMenuToggle` will render a `<button>` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the `PopupMenuToggle`'s `as` prop to `React.Fragment` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."}}},args:{onOpen:L(),onClose:L(),children:[(0,I.jsx)(k,{as:F.Fragment,children:(0,I.jsx)(z,{})},`t`),(0,I.jsxs)(A,{children:[(0,I.jsx)(j,{label:`Menu Item 1`}),(0,I.jsx)(j,{label:`Menu Item 2`,icon:`deleteForever`}),(0,I.jsx)(j,{label:`Menu Item 3 Disabled`,disabled:!0})]},`m`)]}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When no \`<PopupMenuOptions>\` child is passed, the component will render but there will be no visible menu unless passed. This story only adds a simple placeholder for the menu for illustrational purposes. OnOpen and onClose handlers will be run though, even if no PopupMenuOptions is passed."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <p>Menu goes here.</p>
      </PopupMenuOptions>
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "This story has no \`PopupMenuOptions\` passed. The component should still render without any errors, and \`onOpen\` and \`onClose\` should be run regardless."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn()
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    args: {
      description: {
        story: "Disable the default toggle."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    disabled: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass at least a \`<PopupMenuOptions>\` component with \`<PopupMenuItem>\` elements inside to render a functional menu. A default toggle element will be rendered."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`as\` as \`anchor\` and supply a \`href\` prop in order to render PopupMenuItem elements as links."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuItem as="a" href="https://github.com/cloudoperators/juno" label="Go to Juno on Github" />
        <PopupMenuItem as="a" href="https://www.sap.com" label="Go to sap.com" target="_blank" icon="openInNew" />
      </PopupMenuOptions>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "\`PopupMenuItem\` elements may contain random elements other than \`PopupMenuItem\`. In such cases you may consume the PopupMenu context using the \`usePopupMenuContext\` hook that contains a \`close\` function that can be used by custom components to close the menu if needed."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <p>Some content goes here.</p>
        <CloseButton variant="primary">Yay!</CloseButton>
      </PopupMenuOptions>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In order to better group and organize options, a PopupMenu menu may contain one or multiple sections with optional titles and dividers."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: <PopupMenuOptions>
        <PopupMenuSection>
          <PopupMenuSectionHeading>Section 1</PopupMenuSectionHeading>
          <PopupMenuItem label="Menu Item 1" />
          <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        </PopupMenuSection>
        <PopupMenuSectionSeparator />
        <PopupMenuSection>
          <PopupMenuSectionHeading label="Section 2" />
          <PopupMenuItem label="Menu Item 3" />
          <PopupMenuItem label="Menu Item 4 Disabled" disabled />
        </PopupMenuSection>
      </PopupMenuOptions>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A default toggle can be rendered with a custom icon without having to pass a custom toggle element."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    icon: "warning",
    children: <PopupMenuOptions>
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "In the simplest case, a toggle can contain only a string. \`PopupMenu\` will render a \`<button>\` element containing that string or any opther children."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle key="t">The Toggle</PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass a custom component to render \`as={MyCustomComponent}\` to render as a toggle. Make sure to forward refs. Note we may change the standard \`<PopupMenuToggle>\` to use our own \`<Button>\` component, in this case we would need a different example component here."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={ToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A custom toggle component may consume the PopupMenu context using the \`usePopupMenuContext\` hook. This hook exposes the current \`isOpen\` state of the menu that can be used e.g. to apply conditional styling to the toggle."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={StyledToggleButton} key="t" />, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, \`PopupMenuToggle\` will render a \`<button>\` element as a toggle. When passing a custom component as a child, that will itself render a button or an element with button-like behavior, set the \`PopupMenuToggle\`'s \`as\` prop to \`React.Fragment\` to prevent rendering a button inside a button, which is invalid. When using a custom toggle component this way, make sure to forward refs and handle accessibility requirements properly."
      }
    }
  },
  args: {
    onOpen: fn(),
    onClose: fn(),
    children: [<PopupMenuToggle as={React.Fragment} key="t">
        <ToggleButton />
      </PopupMenuToggle>, <PopupMenuOptions key="m">
        <PopupMenuItem label="Menu Item 1" />
        <PopupMenuItem label="Menu Item 2" icon="deleteForever" />
        <PopupMenuItem label="Menu Item 3 Disabled" disabled />
      </PopupMenuOptions>]
  }
}`,...$.parameters?.docs?.source}}},me=[`Default`,`NoMenu`,`DisabledDefaultToggle`,`WithMenuChild`,`WithChildrenAsLinks`,`WithMenuWithRandomContent`,`WithMenuChildWithSection`,`WithIcon`,`WithToggleAndMenuChildren`,`WithToggleAsButtonComponent`,`WithToggleAsButtonStyledByState`,`WithCustomButtonComponentAsChild`]}))();export{H as Default,W as DisabledDefaultToggle,U as NoMenu,K as WithChildrenAsLinks,$ as WithCustomButtonComponentAsChild,Y as WithIcon,G as WithMenuChild,J as WithMenuChildWithSection,q as WithMenuWithRandomContent,X as WithToggleAndMenuChildren,Z as WithToggleAsButtonComponent,Q as WithToggleAsButtonStyledByState,me as __namedExportsOrder,R as default};