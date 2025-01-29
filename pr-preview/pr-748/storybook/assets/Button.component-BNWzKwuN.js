import{j as n}from"./jsx-runtime-D6fbYt3N.js";import{e as I}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{k as P,I as N}from"./Icon.component-BXxTB2S-.js";import{S as T}from"./Spinner.component-CxM1ZFOh.js";const $=`
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
`,w=`
  jn-text-sm
  jn-leading-5
`,x=`
  jn-text-base
  jn-leading-6
`,D=`
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`,L=`
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`,O=`
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`,A=`
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`,C=(t,l)=>t==="small"?l==="subdued"?`${L}`:`${D}`:l==="subdued"?`${A}`:`${O}`,M=`
  jn-mr-2
`,R=`
  jn-mr-2
`,H=t=>t==="small"?`${M}`:`${R}`,q=t=>t?"in-progress":"",W=t=>{switch(t){case"default":return"jn-text-theme-accent";case"primary":return"jn-text-white";case"primary-danger":return"jn-text-white";default:return""}},d=I.forwardRef(({label:t,title:l=null,variant:o,size:a="default",disabled:i=null,href:m=null,icon:f=null,className:p="",onClick:s,children:v,progress:u=!1,progressLabel:b="",...y},h)=>{const r=o||"default",c=l||t||"",j=u?n.jsx(T,{size:a==="small"?"1.125rem":"1.5rem",color:`${W(r)}`}):f?n.jsx(N,{icon:f,title:c,className:`juno-button-icon ${t||v?H(a):""} `,size:a==="small"?"1.125rem":"1.5rem"}):null,g=u&&b?b:t||v,B=k=>{s&&s(k)},S=n.jsxs("button",{type:"button",className:`
          juno-button 
          juno-button-${r} 
          juno-button-${a}-size 
          ${$} 
          ${a==="small"?w:x} 
          ${C(a,o)}
          ${q(u)} 
          ${p}`,disabled:i,onClick:B,title:c,ref:h,...y,children:[j,g]}),V=n.jsxs("a",{href:m,role:"button",className:`
          juno-button 
          juno-button-${r} 
          juno-button-${a}-size 
          ${$} 
          ${a==="small"?w:x}
          ${C(a,o)}
          ${q(u)} 
          ${p}
        `,disabled:i,onClick:s,title:c,ref:h,...y,children:[j,g]});return m?V:S});d.displayName="Button";d.propTypes={children:e.any,variant:e.oneOf(["primary","primary-danger","default","subdued"]),size:e.oneOf(["small","default"]),disabled:e.bool,href:e.string,label:e.string,title:e.string,icon:e.oneOf(P),className:e.string,onClick:e.func,progress:e.bool,progressLabel:e.string};d.__docgenInfo={description:"The basic button component. Use this for `onClick` interactions.",methods:[],displayName:"Button",props:{title:{defaultValue:{value:"null",computed:!1},description:"Specify title for accessibility. Gets value of label if no title specified",type:{name:"string"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Whether the button is disabled",type:{name:"bool"},required:!1},href:{defaultValue:{value:"null",computed:!1},description:"Optionally specify an href. This will turn the Button into an <a> element",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},progress:{defaultValue:{value:"false",computed:!1},description:"Whether the button action is in progress",type:{name:"bool"},required:!1},progressLabel:{defaultValue:{value:'""',computed:!1},description:"Display an alternative label while the button action is in progress",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1},variant:{description:"Choose a variant for your purpose. May leave empty to get default button.",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"default"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},label:{description:"Button label can be passed like this or as children",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1}}};export{d as B};
