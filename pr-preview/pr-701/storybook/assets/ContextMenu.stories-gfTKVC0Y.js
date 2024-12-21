import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as g}from"./index-DysCNOs_.js";import{S as H}from"./headlessui-float-CRaAej_Z.js";import{o as D,a as z,s as W,b as F}from"./floating-ui.react-dom-t1-XbZXo.js";import{I as G}from"./Icon.component-AKbg8iWE.js";import{q as m,a as t}from"./MenuItem.component-B4V-XQB6.js";import{B as J}from"./Button.component-Br0mwWQX.js";import{P as a}from"./PortalProvider.component-DuC_IbOk.js";import"./index-DxCGxluL.js";import"./keyboard-BayCKsX5.js";import"./widgets-BR6-ubtP.js";import"./use-text-value-CqB0ebPQ.js";import"./use-tree-walker-sKJwDSu4.js";import"./Spinner.component-a74gjTKo.js";const Y=`
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-rounded
  jn-bg-theme-background-lvl-1
`,K=`
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`,Q=`
  jn-text-theme-accent
`,r=({children:o=null,open:p=!1})=>{const[x,P]=g.useState(!1),E=h=>{P(!x)};g.useEffect(()=>{P(p)},[p]);const L=[D(4),z({crossAxis:!0,allowedPlacements:["top-start","top-end","bottom-start","bottom-end"]}),W({boundary:"viewport",apply({availableWidth:h,availableHeight:V,elements:$}){Object.assign($.floating.style,{maxWidth:`${h}px`,maxHeight:`${V}px`,overflowY:"auto"})}}),F()];return e.jsx(m,{children:e.jsxs(H,{middleware:L,children:[e.jsx(m.Button,{onClick:E,className:`
            juno-contextmenu-toggle 
            ${K} 
            ${x?Q:""}
          `,children:e.jsx(G,{icon:"moreVert"})}),e.jsx(m.Items,{className:`${Y}`,children:o})]})})};try{r.displayName="ContextMenu",r.__docgenInfo={description:"A context menu with a toggle.",displayName:"ContextMenu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"WiP/ContextMenu/ContextMenu",component:r,argTypes:{children:{control:!1}},decorators:[o=>e.jsx("div",{className:"jn-pb-12",style:{minHeight:"250px"},children:e.jsx(a,{children:e.jsx(o,{})})})]},d=[e.jsx(t,{label:"Juno on Github",href:"https://github.com/cloudoperators/juno"},"1"),e.jsx(t,{label:"This item does nothing",icon:"help"},"2"),e.jsx(t,{label:"Disabled Item",href:"https://github.com/cloudoperators/juno",disabled:!0},"3"),e.jsx(t,{children:e.jsx(J,{label:"Button as Child of MenuItem",variant:"subdued",size:"small",className:"jn-w-full"},"0")},"4"),e.jsx(t,{onClick:()=>{},label:"Button as Item with OnClick",icon:"help"},"5")],U=o=>e.jsx(r,{...o}),l=U.bind({});l.args={children:d};const X=o=>e.jsx(a,{children:e.jsx(a.Portal,{children:e.jsx(r,{...o})})}),s=X.bind({});s.args={children:d};const n=o=>e.jsx(a,{children:e.jsx(a.Portal,{children:e.jsx(r,{...o})})});n.args={children:[e.jsx(t,{label:"Option 1"},"1"),e.jsx(t,{label:"Option 2"},"2"),e.jsx(t,{label:"Option 3"},"3"),e.jsx(t,{label:"Option 4"},"4"),e.jsx(t,{label:"Option 5"},"5"),e.jsx(t,{label:"Option 6"},"6"),e.jsx(t,{label:"Option 7"},"7"),e.jsx(t,{label:"Option 8"},"8"),e.jsx(t,{label:"Option 9"},"9"),e.jsx(t,{label:"Option 10"},"10"),e.jsx(t,{label:"Option 11"},"11"),e.jsx(t,{label:"Option 12"},"12"),e.jsx(t,{label:"Option 13"},"13"),e.jsx(t,{label:"Option 14"},"14"),e.jsx(t,{label:"Option 15"},"15")]};const v=({parentStyles:o,...p})=>e.jsx("div",{style:o,children:e.jsx(a,{children:e.jsx(a.Portal,{children:e.jsx(r,{...p})})})}),i=v.bind({});i.args={parentStyles:{position:"absolute",bottom:"0"},children:d};const c=v.bind({});c.args={parentStyles:{position:"absolute",right:"0"},children:d};const u=v.bind({});u.args={parentStyles:{position:"absolute",right:"0",bottom:"0"},children:d};var j,b,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:"args => <ContextMenu {...args} />",...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,S,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args} />
    </PortalProvider.Portal>
  </PortalProvider>`,...(O=(S=s.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var C,M,w;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`args => <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args} />
    </PortalProvider.Portal>
  </PortalProvider>`,...(w=(M=n.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var I,_,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`({
  parentStyles,
  ...args
}) => <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>`,...(B=(_=i.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var T,N,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`({
  parentStyles,
  ...args
}) => <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var A,R,q;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`({
  parentStyles,
  ...args
}) => <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const ve=["Default","InsidePortal","ManyOptions","BottomLeftPositionedSelect","TopRightPositionedSelect","BottomRightPositionedSelect"];export{i as BottomLeftPositionedSelect,u as BottomRightPositionedSelect,l as Default,s as InsidePortal,n as ManyOptions,c as TopRightPositionedSelect,ve as __namedExportsOrder,me as default};
