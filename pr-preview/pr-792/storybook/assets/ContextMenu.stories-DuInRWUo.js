import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as g}from"./index-DysCNOs_.js";import{S as H}from"./headlessui-float-CRaAej_Z.js";import{o as z,a as U,s as W,b as F}from"./floating-ui.react-dom-t1-XbZXo.js";import{I as G}from"./Icon.component-CP9cv3L0.js";import{w as J}from"./withDeprecationWarning.component-DcP1MqMf.js";import{q as m}from"./menu-BV8S7JmC.js";import{a as t}from"./MenuItem.component-DWTBIUVQ.js";import{B as Y}from"./Button.component-B2dCEIVR.js";import{P as a}from"./PortalProvider.component-DJiEgPYG.js";import"./index-DxCGxluL.js";import"./keyboard-BayCKsX5.js";import"./widgets-BR6-ubtP.js";import"./use-text-value-CqB0ebPQ.js";import"./use-tree-walker-sKJwDSu4.js";import"./Spinner.component-CcUhSsaF.js";const K=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-rounded
  jn-bg-theme-background-lvl-1
`,Q=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,X=`
  jn-text-theme-accent
`,R=({children:o,open:p=!1})=>{const[x,P]=g.useState(!1),q=h=>{P(!x)};g.useEffect(()=>{P(p)},[p]);const L=[z(4),U({crossAxis:!0,allowedPlacements:["top-start","top-end","bottom-start","bottom-end"]}),W({boundary:"viewport",apply({availableWidth:h,availableHeight:V,elements:$}){Object.assign($.floating.style,{maxWidth:`${h}px`,maxHeight:`${V}px`,overflowY:"auto"})}}),F()];return e.jsx(m,{children:e.jsxs(H,{middleware:L,children:[e.jsx(m.Button,{onClick:q,className:`
            juno-contextmenu-toggle 
            ${Q} 
            ${x?X:""}
          `,children:e.jsx(G,{icon:"moreVert"})}),e.jsx(m.Items,{className:`${K}`,children:o})]})})};R.displayName="ContextMenu";const r=J(R,"ContextMenu is deprecated and will be removed in future versions. Use PopupMenu instead.");try{r.displayName="ContextMenu",r.__docgenInfo={description:"",displayName:"ContextMenu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"default"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"download"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}const he={title:"Deprecated/ContextMenu",component:r,argTypes:{children:{control:!1}},parameters:{docs:{description:{component:"DEPRECATED. Use PopupMenu instead."}}},decorators:[o=>e.jsx("div",{className:"jn-pb-12",style:{minHeight:"250px"},children:e.jsx(a,{children:e.jsx(o,{})})})]},d=[e.jsx(t,{label:"Juno on Github",href:"https://github.com/cloudoperators/juno"},"1"),e.jsx(t,{label:"This item does nothing",icon:"help"},"2"),e.jsx(t,{label:"Disabled Item",href:"https://github.com/cloudoperators/juno",disabled:!0},"3"),e.jsx(t,{children:e.jsx(Y,{label:"Button as Child of MenuItem",variant:"subdued",size:"small",className:"jn-w-full"},"0")},"4"),e.jsx(t,{onClick:()=>{},label:"Button as Item with OnClick",icon:"help"},"5")],Z=o=>e.jsx(r,{...o}),s=Z.bind({});s.args={children:d};const ee=o=>e.jsx(a,{children:e.jsx(a.Portal,{children:e.jsx(r,{...o})})}),n=ee.bind({});n.args={children:d};const l=o=>e.jsx(a,{children:e.jsx(a.Portal,{children:e.jsx(r,{...o})})});l.args={children:[e.jsx(t,{label:"Option 1"},"1"),e.jsx(t,{label:"Option 2"},"2"),e.jsx(t,{label:"Option 3"},"3"),e.jsx(t,{label:"Option 4"},"4"),e.jsx(t,{label:"Option 5"},"5"),e.jsx(t,{label:"Option 6"},"6"),e.jsx(t,{label:"Option 7"},"7"),e.jsx(t,{label:"Option 8"},"8"),e.jsx(t,{label:"Option 9"},"9"),e.jsx(t,{label:"Option 10"},"10"),e.jsx(t,{label:"Option 11"},"11"),e.jsx(t,{label:"Option 12"},"12"),e.jsx(t,{label:"Option 13"},"13"),e.jsx(t,{label:"Option 14"},"14"),e.jsx(t,{label:"Option 15"},"15")]};const v=({parentStyles:o,...p})=>e.jsx("div",{style:o,children:e.jsx(a,{children:e.jsx(a.Portal,{children:e.jsx(r,{...p})})})}),i=v.bind({});i.args={parentStyles:{position:"absolute",bottom:"0"},children:d};const c=v.bind({});c.args={parentStyles:{position:"absolute",right:"0"},children:d};const u=v.bind({});u.args={parentStyles:{position:"absolute",right:"0",bottom:"0"},children:d};var j,f,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:"args => <ContextMenu {...args} />",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,S,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args} />
    </PortalProvider.Portal>
  </PortalProvider>`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,M,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args} />
    </PortalProvider.Portal>
  </PortalProvider>`,...(w=(M=l.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var I,T,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`({
  parentStyles,
  ...args
}) => <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var B,N,D;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`({
  parentStyles,
  ...args
}) => <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,k,A;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`({
  parentStyles,
  ...args
}) => <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>`,...(A=(k=u.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const ge=["Default","InsidePortal","ManyOptions","BottomLeftPositionedSelect","TopRightPositionedSelect","BottomRightPositionedSelect"];export{i as BottomLeftPositionedSelect,u as BottomRightPositionedSelect,s as Default,n as InsidePortal,l as ManyOptions,c as TopRightPositionedSelect,ge as __namedExportsOrder,he as default};
