import{j as l}from"./jsx-runtime-D6fbYt3N.js";import{e as D}from"./index-DysCNOs_.js";import{P as t}from"./index-BHU3UH5b.js";import{C as O}from"./ContentArea.component-D9Wb44zZ.js";import{C as W}from"./ContentAreaToolbar.component-C_f9pJgm.js";import{k as _,I as L}from"./Icon.component-BXxTB2S-.js";import{S as M}from"./Spinner.component-CxM1ZFOh.js";import"./withDeprecationWarning.component-Cd49MbBc.js";import"./widgets-BR6-ubtP.js";const E=`
  jn-relative
  jn-grow
  jn-flex
  jn-flex-col
  jn-overflow-hidden
`,r=({className:e="",children:n=null,...o})=>l.jsx("div",{className:`juno-content-area-wrapper ${E} ${e}`,...o,children:n});r.propTypes={className:t.string,children:t.node};r.__docgenInfo={description:"Deprecated: Will be deleted!",methods:[],displayName:"ContentAreaWrapper",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const w=`
  jn-font-bold
  jn-inline-flex 
  jn-justify-center 
  jn-items-center
  jn-rounded
  jn-shadow-sm 
  jn-w-auto
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  disabled:jn-pointer-events-none
`,$=`
  jn-text-sm
  jn-leading-5
`,q=`
  jn-text-base
  jn-leading-6
`,R=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,H=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,F=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,G=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,S=(e,n)=>e==="small"?n==="subdued"?`${H}`:`${R}`:n==="subdued"?`${G}`:`${F}`,J=`
  jn-mr-2
`,U=`
  jn-mr-2
`,K=e=>e==="small"?`${J}`:`${U}`,V=e=>e?"in-progress":"",Q=e=>{switch(e){case"default":return"jn-text-theme-accent";case"primary":return"jn-text-white";case"primary-danger":return"jn-text-white";default:return""}},c=D.forwardRef(({label:e,title:n=null,variant:o,size:a="default",disabled:m=null,href:f=null,icon:v=null,className:b="",onClick:d,children:h,progress:s=!1,progressLabel:j="",...y},g)=>{const i=o||"default",p=n||e||"",x=s?l.jsx(M,{size:a==="small"?"1.125rem":"1.5rem",color:`${Q(i)}`}):v?l.jsx(L,{icon:v,title:p,className:`juno-button-icon ${e||h?K(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,C=s&&j?j:e||h,T=P=>{d&&d(P)},I=l.jsxs("button",{type:"button",className:`
          juno-button 
          juno-button-${i} 
          juno-button-${a}-size 
          ${w} 
          ${a==="small"?$:q} 
          ${S(a,o)}
          ${V(s)} 
          ${b}`,disabled:m,onClick:T,title:p,ref:g,...y,children:[x,C]}),k=l.jsxs("a",{href:f,role:"button",className:`
          juno-button 
          juno-button-${i} 
          juno-button-${a}-size 
          ${w} 
          ${a==="small"?$:q}
          ${S(a,o)}
          ${V(s)} 
          ${b}
        `,disabled:m,onClick:d,title:p,ref:g,...y,children:[x,C]});return f?k:I});c.displayName="Button";c.propTypes={children:t.any,variant:t.oneOf(["primary","primary-danger","default","subdued"]),size:t.oneOf(["small","default"]),disabled:t.bool,href:t.string,label:t.string,title:t.string,icon:t.oneOf(_),className:t.string,onClick:t.func,progress:t.bool,progressLabel:t.string};c.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",methods:[],displayName:"Button",props:{title:{defaultValue:{value:"null",computed:!1},description:"Specify title for accessibility. Gets value of label if no title specified",type:{name:"string"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Whether the button is disabled",type:{name:"bool"},required:!1},href:{defaultValue:{value:"null",computed:!1},description:"Optionally specify an href. This will turn the Button into an <a> element",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},progress:{defaultValue:{value:"false",computed:!1},description:"Whether the button action is in progress",type:{name:"bool"},required:!1},progressLabel:{defaultValue:{value:'""',computed:!1},description:"Display an alternative label while the button action is in progress",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1},variant:{description:"Choose a variant for your purpose. May leave empty to get default button.",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"default"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},label:{description:"Button label can be passed like this or as children",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1}}};const se={title:"Deprecated/ContentAreaWrapper",component:r,argTypes:{children:{control:!1}}},X=e=>l.jsxs(r,{...e,children:[l.jsx(W,{children:l.jsx(c,{children:"Example"})}),l.jsx(O,{children:"Content goes here"})]}),u={render:X};var A,B,N;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template
}`,...(N=(B=u.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const ue=["Basic"];export{u as Basic,ue as __namedExportsOrder,se as default};
