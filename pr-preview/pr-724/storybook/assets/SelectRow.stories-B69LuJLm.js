import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{r as a}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{L as gt,F as ee}from"./FormHint.component-Dbm6hcqV.js";import{I as q}from"./Icon.component-BXxTB2S-.js";import{S as vt}from"./Spinner.component-CxM1ZFOh.js";import{S as te}from"./headlessui-float-D1q9tfUr.js";import{o as bt,a as yt,s as St,b as wt}from"./floating-ui.react-dom-t1-XbZXo.js";import{r as nt}from"./index-DxCGxluL.js";import{I as V}from"./listbox-gJSzcfDz.js";import{F as xt}from"./FormRow.component-DNDnl0QH.js";import{w as jt}from"./withDeprecationWarning.component-Cd49MbBc.js";import"./widgets-BR6-ubtP.js";import"./keyboard-BPbr_PVR.js";import"./form-DKE-ZYVu.js";import"./use-text-value-BR7n_mDO.js";const Ot="juno-portal-root",ne=a.createContext(),qt={position:"absolute",top:"0",left:"0",zIndex:"9999"},Vt={position:"relative",zIndex:"1"},ae=({children:n})=>{const l=a.useContext(ne),[r,i]=a.useState(!1);if(a.useEffect(()=>{l!=null&&l.current&&i(!0)},[l]),!r)return null;const o=t.jsx("div",{className:"juno-portal",style:Vt,children:n});return nt.createPortal(o,l.current||document.body)};ae.propTypes={children:e.node};function Pt(){const n=a.useContext(ne),l=a.useRef(null),[r,i]=a.useState(!1);return a.useEffect(()=>{if(!n||!(n!=null&&n.current)){console.warn("usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually.");return}const o=document.createElement("div");return o.style.position="relative",o.style.zIndex="1",o.classList.add("juno-portal"),n.current.append(o),l.current=o,i(!0),()=>{l.current&&(n!=null&&n.current)&&(n.current.removeChild(l.current),l.current=null)}},[n]),l!=null&&l.current&&r?l.current:null}const P=({children:n,className:l="",id:r=Ot})=>{const i=a.useRef(),[o,p]=a.useState(!1);return a.useEffect(()=>{i.current&&p(!0)},[]),t.jsxs(ne.Provider,{value:i,children:[o&&n,t.jsx("div",{className:`juno-portal-root ${l}`,id:r,ref:i,style:qt})]})};P.Portal=ae;ae.displayName="PortalProvider.Portal";P.propTypes={className:e.string,id:e.string,children:e.node};P.Portal.propTypes={children:e.node};P.__docgenInfo={description:"A PortalProvider component that helps using and managing portals.\nIt renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.\nNormally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.",methods:[{name:"Portal",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null}],displayName:"PortalProvider",props:{className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the portal root container in which portals will be mounted",type:{name:"string"},required:!1},id:{defaultValue:{value:'"juno-portal-root"',computed:!1},description:"Pass a custom id to the portal root container in which portals will be mounted",type:{name:"string"},required:!1},children:{description:"The children of the PortalProvider. Typically, this will be the whole app.",type:{name:"node"},required:!1}}};const Ct=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,Tt=`
  jn-appearance-none
  jn-h-[2.375rem]
  jn-inline-flex
  jn-items-center
  jn-px-4
  jn-rounded-3px
  jn-select-none
  jn-text-base
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
`,Rt=`
  jn-border
  jn-border-theme-success
`,At=`
  jn-border
  jn-border-theme-error
`,Et=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,Nt=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,Wt=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,at=a.createContext(),le=({ariaLabel:n="",children:l,className:r="",defaultValue:i,disabled:o=!1,error:p=!1,errortext:m="",helptext:f="",id:O="",invalid:y=!1,label:g,loading:C=!1,multiple:T=!1,name:Y,onChange:R,onValueChange:A,placeholder:E="Select…",required:B=!1,successtext:v="",truncateOptions:J=!1,valid:N=!1,value:K,valueLabel:se,variant:Q="default",width:X="full",wrapperClassName:ot="",...rt})=>{const S=d=>!(typeof d=="string"&&d.trim().length===0),ie=O||"juno-select-"+a.useId(),de="juno-select-helptext-"+a.useId(),[ue,st]=a.useState(new Map),[w,it]=a.useState(!1),[ce,dt]=a.useState(!1),[pe,ut]=a.useState(!1),[x,ct]=a.useState(!1),pt=(d,c,h)=>{st(b=>new Map(b).set(d||h,{val:d,label:c,children:h,displayName:h||c||d}))},me=a.useMemo(()=>y||!!(m&&S(m)),[y,m]),fe=a.useMemo(()=>N||!!(v&&S(v)),[N,v]);a.useEffect(()=>{it(p)},[p]),a.useEffect(()=>{dt(me)},[me]),a.useEffect(()=>{ut(fe)},[fe]),a.useEffect(()=>{ct(C)},[C]);const mt=d=>{R&&R(d||""),A&&A(d||"")},he=Pt(),ft=[bt(4),yt({crossAxis:!0,allowedPlacements:["bottom","top"]}),St({boundary:"viewport",apply({availableWidth:d,availableHeight:c,elements:h}){Object.assign(h.floating.style,{maxWidth:`${d}px`,maxHeight:`${c}px`,overflowY:"auto"})}}),wt()],ht=d=>{const c=b=>{var ge;const Z=ue.get(b);if(Z)return(ge=Z.displayName)!=null&&ge.length?Z.displayName:null};return d.map(b=>c(b)).filter(b=>b&&b.toString().trim().length>0).join(", ")};return t.jsx(at.Provider,{value:{truncateOptions:J,addOptionValueAndLabel:pt},children:t.jsxs("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${X=="auto"?"jn-inline-block":"jn-block"}
          ${X=="auto"?"jn-w-auto":"jn-w-full"}
          ${ot}
        `,children:[t.jsxs(V,{disabled:o||x||w,multiple:T,name:Y,onChange:mt,value:K,defaultValue:i,children:[g&&S(g)?t.jsx(V.Label,{as:gt,htmlFor:ie,text:g,className:`${Ct}`,disabled:o||x||w,required:B,floating:!0,minimized:!0}):"",t.jsxs(te,{composable:!0,adaptiveWidth:!0,middleware:ft,children:[t.jsx(te.Reference,{children:t.jsx(V.Button,{"aria-describedby":f?de:"","aria-label":n||g,as:"button",id:ie,className:`
                    juno-select-toggle
                    ${Q&&Q.length?"juno-select-toggle-"+Q:"juno-select-toggle-default"}
                    ${X=="auto"?"jn-w-auto":"jn-w-full"}
                    ${Tt}
                    ${g&&S(g)?"jn-pt-[0.4rem]":""}
                    ${o?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${x||w?"jn-justify-center":"jn-justify-between"}
                    ${ce?"juno-select-invalid "+At:""} 
                    ${pe?"juno-select-valid "+Rt:""}  
                    
                    ${x?"juno-select-loading jn-cursor-not-allowed":""}
                    ${w?"juno-select-error jn-cursor-not-allowed":""}
                    ${r}
                  `,...rt,children:({open:d,value:c})=>{var h;return!w&&!x?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:`${Wt}`,children:T?ht(c)||se||c.join(", ")||E:((h=ue.get(c))==null?void 0:h.displayName)||se||c||E}),t.jsxs("span",{className:"jn-flex",children:[pe?t.jsx(q,{icon:"checkCircle",color:"jn-text-theme-success"}):"",ce?t.jsx(q,{icon:"dangerous",color:"jn-text-theme-error"}):"",t.jsx("span",{children:t.jsx(q,{icon:d?"expandLess":"expandMore"})})]})]}):t.jsx("span",{className:`${Et}`,children:w?t.jsx(q,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):x?t.jsx(vt,{className:"jn-cursor-not-allowed"}):""})}})}),nt.createPortal(t.jsx(te.Content,{children:t.jsx(V.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${Nt}
                      `,children:l})}),he||document.body)]})]}),m&&S(m)?t.jsx(ee,{text:m,variant:"error"}):"",v&&S(v)?t.jsx(ee,{text:v,variant:"success"}):"",f&&S(f)?t.jsx(ee,{text:f,id:de}):""]})})},It=n=>{const{multiple:l,value:r}=n;if(r){if(l&&!Array.isArray(r))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!l&&typeof r!="string")return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}};le.propTypes={ariaLabel:e.string,children:e.node,className:e.string,defaultValue:e.string,disabled:e.bool,error:e.bool,errortext:e.node,helptext:e.node,id:e.string,invalid:e.bool,label:e.string,loading:e.bool,multiple:e.bool,name:e.string,onChange:e.func,onValueChange:e.func,placeholder:e.string,required:e.bool,successtext:e.node,truncateOptions:e.bool,valid:e.bool,value:It,valueLabel:e.string,variant:e.oneOf(["default","primary","primary-danger","subdued"]),width:e.oneOf(["full","auto"]),wrapperClassName:e.string};le.__docgenInfo={description:"A Select component that can be configured to allow selecting a single item or multiple items.\n  Pass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.",methods:[],displayName:"Select",props:{ariaLabel:{defaultValue:{value:'""',computed:!1},description:"Pass an aria-label to the Select toggle button",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the internal Select toggle button",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is disabled",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead.",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A small message rendered in red text below the Select toggle.",type:{name:"node"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id to the Select toggle",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select has been validated unsuccessfully / negatively",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is busy loading options. Will show a Spinner in the Select toggle.",type:{name:"bool"},required:!1},multiple:{defaultValue:{value:"false",computed:!1},description:"Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively.",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:'A placeholder to render when no value has been selected. Default is "Select…".',type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible.",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`.",type:{name:"node"},required:!1},truncateOptions:{defaultValue:{value:"false",computed:!1},description:'Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated.',type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle.",type:{name:"bool"},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic variant of the Select toggle button.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:'Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state.',type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},children:{description:"The children to render as options. Use the SelectOption component, and SelectDivider if needed.",type:{name:"node"},required:!1},defaultValue:{description:"Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.",type:{name:"string"},required:!1},label:{description:"Pass a label to render in the Select toggle button",type:{name:"string"},required:!1},name:{description:"Pass a name attribute to the Select to be transmitted when used in a form.",type:{name:"string"},required:!1},onChange:{description:"Handler to be executed when the selected value changes",type:{name:"func"},required:!1},onValueChange:{description:"LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead.",type:{name:"func"},required:!1},value:{description:"The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string.",type:{name:"custom",raw:`(props) => {
  const { multiple, value } = props

  // only validate if value is not undefined to avoid throwing an error when not necessary:
  if (value) {
    if (multiple && !Array.isArray(value)) {
      return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.")
    }
    if (!multiple && typeof value !== "string") {
      return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")
    }
  }
}`},required:!1},valueLabel:{description:`The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for
 human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly.`,type:{name:"string"},required:!1}}};const oe=({name:n=null,variant:l,label:r=null,id:i=null,helptext:o=null,required:p=null,className:m="",disabled:f=null,invalid:O=!1,errortext:y="",valid:g,placeholder:C="Select…",successtext:T,children:Y,value:R,onValueChange:A,onChange:E,defaultValue:B,open:v,error:J,loading:N,...K})=>t.jsx(xt,{children:t.jsx(le,{name:n,id:i,label:r,required:p,placeholder:C,onChange:A||E,disabled:f,invalid:O,valid:g,value:R,variant:l,defaultValue:B,open:v,error:J,loading:N,errortext:y,helptext:o,successtext:T,className:m,...K,children:Y})});oe.propTypes={name:e.string,label:e.string,placeholder:e.string,id:e.string,helptext:e.node,required:e.bool,className:e.string,disabled:e.bool,invalid:e.bool,errortext:e.string,children:e.node,valid:e.bool,value:e.string,variant:e.oneOf(["default","primary","primary-danger","subdued"]),onValueChange:e.func,onChange:e.func,onOpenChange:e.func,defaultValue:e.string,open:e.bool,error:e.bool,loading:e.bool,successtext:e.string};const re=jt(oe,"SelectRow is deprecated and will be removed in future versions. To be future-proof, use Select instead.");oe.__docgenInfo={description:"DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead.",methods:[],displayName:"SelectRow",props:{name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the input",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the select is required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the select",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the SelectRow is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"The error text to display in the SelectGroup. WHen passed, the SelectGroup will be invalidated automatically.",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:'The placeholder to show in the Select if no value is selected. defaults to "Select…".',type:{name:"string"},required:!1},children:{description:"Children to render",type:{name:"node"},required:!1},valid:{description:"Specify whether the select is valid",type:{name:"bool"},required:!1},value:{description:"Passing a value turns the select into a controlled component. If you pass a value you must also specify an onChange handler to deal with value changes",type:{name:"string"},required:!1},variant:{description:"The semantic variant of the Select toggle button.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},onValueChange:{description:"Pass a handler to the Select element to execute once the value changes",type:{name:"func"},required:!1},onChange:{description:"Deprecated: Use `onValueChange` instead.",type:{name:"func"},required:!1},onOpenChange:{description:"Pass handler to execute once the Selects open state changes",type:{name:"func"},required:!1},defaultValue:{description:"Pass a default Value that should be selected initially. Use this if you want to use the select as an uncontrolled component.",type:{name:"string"},required:!1},open:{description:"Whether the Select is open",type:{name:"bool"},required:!1},error:{description:"Whether the Select has an error, e.g. when loading necessary option data failed. When the Select has been negatively validated, use `invalid` instead.",type:{name:"bool"},required:!1},loading:{description:"Whether the Select is currently busy loading options. Will display a Spinner Icon.",type:{name:"bool"},required:!1},successtext:{description:"Pass a value for success message",type:{name:"string"},required:!1}}};const $t=`
  jn-flex
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-pr-[0.875rem]
  jn-select-none
  data-[headlessui-state=active]:jn-outline-none
  data-[headlessui-state=active]:jn-ring-2
  data-[headlessui-state=active]:jn-ring-inset
  data-[headlessui-state=active]:jn-ring-theme-focus
  data-[headlessui-state=active]:jn-bg-theme-background-lvl-3
`,Lt=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,kt=`
  jn-text-theme-accent
  jn-pl-3.5
`,Dt=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,Ht=`
  jn-opacity-50
  jn-cursor-not-allowed
`,_t=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,j=({children:n,className:l="",disabled:r=!1,value:i="",label:o,...p})=>{const m=a.useContext(at),{truncateOptions:f,addOptionValueAndLabel:O}=m||{};return a.useEffect(()=>{O(i,o,n)},[i,o,n]),t.jsx(V.Option,{as:a.Fragment,disabled:r,value:i||n,children:({selected:y})=>t.jsxs("li",{className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${$t}
          ${y?"juno-select-option-selected "+kt:Lt}
          ${r?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${f?"juno-select-option-truncate":""}
          ${l}
        `,...p,children:[y?t.jsx(q,{icon:"check",size:"18",className:`${Dt}`}):"",t.jsx("span",{className:`
            ${r?Ht:""}
            ${f?_t:""}
          `,children:n||o||i})]})})};j.propTypes={children:e.string,className:e.string,disabled:e.bool,value:e.string,label:e.string};j.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1}}};const on={title:"Deprecated/SelectRow",component:re,parameters:{docs:{description:{component:"DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead."}}},argTypes:{items:{table:{disable:!0}}},decorators:[n=>t.jsx(P,{children:n()})]},s={value:"Option 1"},u=({items:n,...l})=>t.jsx(re,{...l,children:n.map((r,i)=>a.createElement(j,{...r,key:`${i}`}))});u.propTypes={items:e.array};const lt=({value:n,children:l,...r})=>{const[i,o]=a.useState(void 0);return a.useEffect(()=>{o(n)},[n]),t.jsx(re,{value:i,onValueChange:p=>{o(p)},...r,children:l})};lt.propTypes={value:e.string,children:e.array};const W={render:u,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",helptext:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},I={render:lt,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",helptext:"",disabled:!1,invalid:!1,errortext:"",onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Controlled SelectRow",value:"2",children:[t.jsx(j,{value:"1",children:"Value 1"},"1"),t.jsx(j,{value:"2",children:"Value 2"},"2"),t.jsx(j,{value:"3",children:"Value 3"},"3")]}},$={render:u,args:{name:"",id:"",required:!1,className:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row with Helptext and placeholder",helptext:"Select one",placeholder:"Select an option…",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},L={render:u,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row with Helptext",helptext:t.jsxs(t.Fragment,{children:["Helptext with a ",t.jsx("a",{href:"#",children:"Link"})]}),items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},k={render:u,args:{label:"Required Select Row",required:!0,items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},D={render:u,args:{label:"Select Row with selected option",required:!0,value:"d-2",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2 is selected"},{...s,value:"d-3",label:"Option 3"}]}},H={render:u,args:{label:"Required Select Row",disabled:!0,items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},_={render:u,args:{invalid:!0,label:"Invalid SelectRow",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},M={render:u,args:{label:"Select Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the SelectRow will be set to invalid automatically.",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]},parameters:{docs:{description:{story:"Passing an `errortext` prop to the SelectRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},F={render:u,args:{valid:!0,label:"Valid SelectRow",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]}},z={render:u,args:{label:"Select Row with Error Text",successtext:"When passed an successtext prop, the SelectRow will be set to valid automatically.",items:[{...s,value:"d-1",label:"Option 1"},{...s,value:"d-2",label:"Option 2"}]},parameters:{docs:{description:{story:"Passing a `successtext` prop to the SelectRow component will automatically validate it, so there is no need to explicitly set `valid` as well."}}}},U={render:u,args:{loading:!0,label:"Loading options…",items:[]},parameters:{docs:{description:{story:"Set a SelectRow to `loading` when a Select is busy loading the optiins to display"}}}},G={render:u,args:{error:!0,label:"Loading options failed",items:[]},parameters:{docs:{description:{story:"Set a SelectRow to `error` when a loading options, e.g. from a remote API, failed. When the Select has been negatively validated, use `invalid` instead."}}}};var ve,be,ye;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: "",
    placeholder: "Select…",
    id: "",
    required: false,
    className: "",
    helptext: "",
    disabled: false,
    invalid: false,
    errortext: "",
    value: undefined,
    onValueChange: undefined,
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Select Row",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(ye=(be=W.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,we,xe;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    name: "",
    placeholder: "Select…",
    id: "",
    required: false,
    className: "",
    helptext: "",
    disabled: false,
    invalid: false,
    errortext: "",
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Controlled SelectRow",
    value: "2",
    children: [<SelectOption value="1" key="1">
        Value 1
      </SelectOption>, <SelectOption value="2" key="2">
        Value 2
      </SelectOption>, <SelectOption value="3" key="3">
        Value 3
      </SelectOption>]
  }
}`,...(xe=(we=I.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var je,Oe,qe;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: "",
    id: "",
    required: false,
    className: "",
    disabled: false,
    invalid: false,
    errortext: "",
    value: undefined,
    onValueChange: undefined,
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Select Row with Helptext and placeholder",
    helptext: "Select one",
    placeholder: "Select an option…",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(qe=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ve,Pe,Ce;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: Template,
  args: {
    name: "",
    placeholder: "Select…",
    id: "",
    required: false,
    className: "",
    disabled: false,
    invalid: false,
    errortext: "",
    value: undefined,
    onValueChange: undefined,
    onChange: undefined,
    onOpenChange: undefined,
    defaultValue: undefined,
    open: undefined,
    error: undefined,
    loading: undefined,
    label: "Select Row with Helptext",
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>,
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(Ce=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var Te,Re,Ae;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Required Select Row",
    required: true,
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(Ae=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Ee,Ne,We;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select Row with selected option",
    required: true,
    value: "d-2",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2 is selected"
    }, {
      ...defaultSelectArgs,
      value: "d-3",
      label: "Option 3"
    }]
  }
}`,...(We=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Ie,$e,Le;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Required Select Row",
    disabled: true,
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(Le=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var ke,De,He;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: Template,
  args: {
    invalid: true,
    label: "Invalid SelectRow",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(He=(De=_.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var _e,Me,Fe;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the SelectRow will be set to invalid automatically.",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Passing an \`errortext\` prop to the SelectRow component will automatically invalidate it, so there is no need to explicitly set \`invalid\` as well."
      }
    }
  }
}`,...(Fe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var ze,Ue,Ge;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: Template,
  args: {
    valid: true,
    label: "Valid SelectRow",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  }
}`,...(Ge=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Ye,Be,Je;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "Select Row with Error Text",
    successtext: "When passed an successtext prop, the SelectRow will be set to valid automatically.",
    items: [{
      ...defaultSelectArgs,
      value: "d-1",
      label: "Option 1"
    }, {
      ...defaultSelectArgs,
      value: "d-2",
      label: "Option 2"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Passing a \`successtext\` prop to the SelectRow component will automatically validate it, so there is no need to explicitly set \`valid\` as well."
      }
    }
  }
}`,...(Je=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: Template,
  args: {
    loading: true,
    label: "Loading options…",
    items: []
  },
  parameters: {
    docs: {
      description: {
        story: "Set a SelectRow to \`loading\` when a Select is busy loading the optiins to display"
      }
    }
  }
}`,...(Xe=(Qe=U.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: Template,
  args: {
    error: true,
    label: "Loading options failed",
    items: []
  },
  parameters: {
    docs: {
      description: {
        story: "Set a SelectRow to \`error\` when a loading options, e.g. from a remote API, failed. When the Select has been negatively validated, use \`invalid\` instead."
      }
    }
  }
}`,...(tt=(et=G.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const rn=["Default","Controlled","WithHelpTextAndPlaceholder","WithHelpTextWithLink","Required","WithSelectedOption","Disabled","Invalid","WithErrorText","Valid","WithSuccessText","Loading","Error"];export{I as Controlled,W as Default,H as Disabled,G as Error,_ as Invalid,U as Loading,k as Required,F as Valid,M as WithErrorText,$ as WithHelpTextAndPlaceholder,L as WithHelpTextWithLink,D as WithSelectedOption,z as WithSuccessText,rn as __namedExportsOrder,on as default};
