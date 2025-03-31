import{j as l}from"./jsx-runtime-BP6H2k8O.js";import{e as N}from"./index-DysCNOs_.js";import{I}from"./Icon.component-BTYDzMmf.js";import{S as L}from"./Spinner.component-D_tPrRjo.js";const g=`
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
`,w=`
  jn-text-base
  jn-leading-6
`,M=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,_=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,k=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,P=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,x=(e,n)=>e==="small"?n==="subdued"?`${_}`:`${M}`:n==="subdued"?`${P}`:`${k}`,T=`
  jn-mr-2
`,A=`
  jn-mr-2
`,D=e=>e==="small"?`${T}`:`${A}`,C=e=>e?"in-progress":"",H=e=>{switch(e){case"default":return"jn-text-theme-accent";case"primary":return"jn-text-white";case"primary-danger":return"jn-text-white";default:return""}},i=N.forwardRef(({label:e,title:n,variant:u,size:a="default",disabled:c,href:d,icon:m,className:v="",onClick:o,children:f,progress:t=!1,progressLabel:p="",...b},h)=>{const s=u||"default",r=n||e||"",j=t?l.jsx(L,{size:a==="small"?"1.125rem":"1.5rem",color:`${H(s)}`}):m?l.jsx(I,{icon:m,title:r,className:`juno-button-icon ${e||f?D(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,y=t&&p?p:e||f,V=S=>{o&&o(S)},B=l.jsxs("button",{className:`
          juno-button 
          juno-button-${s} 
          juno-button-${a}-size 
          ${g} 
          ${a==="small"?$:w} 
          ${x(a,u)}
          ${C(t)} 
          ${v}`,disabled:c||void 0,onClick:V,ref:h,...b,type:"button",title:r,children:[j,y]}),q=l.jsxs("a",{href:d||void 0,role:"button",className:`
          juno-button 
          juno-button-${s} 
          juno-button-${a}-size 
          ${g} 
          ${a==="small"?$:w}
          ${x(a,u)}
          ${C(t)} 
          ${v}
        `,disabled:c,onClick:o,ref:h,...b,title:r,children:[j,y]});return d?q:B});i.displayName="Button";try{i.displayName="Button",i.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",displayName:"Button",props:{size:{defaultValue:{value:"default"},description:"Leave empty for default size",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},disabled:{defaultValue:null,description:"Whether the button is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"Optionally specify an href. This will turn the Button into an <a> element",name:"href",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Button label can be passed like this or as children",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a className",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Specify title for accessibility. Gets value of label if no title specified",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>"}},icon:{defaultValue:null,description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"danger"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"error"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"info"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"success"'},{value:'"upload"'},{value:'"warning"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},variant:{defaultValue:null,description:"Choose a variant for your purpose. May leave empty to get default button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},progress:{defaultValue:{value:"false"},description:"Whether the button action is in progress",name:"progress",required:!1,type:{name:"boolean"}},progressLabel:{defaultValue:{value:""},description:"Display an alternative label while the button action is in progress",name:"progressLabel",required:!1,type:{name:"string"}}}}}catch{}export{i as B};
