import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{r as n}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{L as pt,F as Z}from"./FormHint.component-Dbm6hcqV.js";import{I as q}from"./Icon.component-BXxTB2S-.js";import{S as mt}from"./Spinner.component-CxM1ZFOh.js";import{S as ee}from"./headlessui-float-CRaAej_Z.js";import{o as ft,a as ht,s as gt,b as vt}from"./floating-ui.react-dom-t1-XbZXo.js";import{u as bt,P as St}from"./PortalProvider.component-ClZ293rf.js";import{r as yt}from"./index-DxCGxluL.js";import{I as V}from"./listbox-Dqb8rs3Q.js";import{F as wt}from"./FormRow.component-DNDnl0QH.js";import{w as jt}from"./withDeprecationWarning.component-Cd49MbBc.js";import"./widgets-BR6-ubtP.js";import"./keyboard-BayCKsX5.js";import"./form-DbO9dA4O.js";import"./use-text-value-CqB0ebPQ.js";const xt=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,Ot=`
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
`,qt=`
  jn-border
  jn-border-theme-success
`,Vt=`
  jn-border
  jn-border-theme-error
`,Ct=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,Rt=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,Tt=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,Ze=n.createContext(),te=({ariaLabel:l="",children:i,className:s="",defaultValue:d,disabled:u=!1,error:h=!1,errortext:p="",helptext:m="",id:O="",invalid:S=!1,label:g,loading:C=!1,multiple:R=!1,name:G,onChange:T,onValueChange:A,placeholder:W="Select…",required:Y=!1,successtext:v="",truncateOptions:B=!1,valid:P=!1,value:J,valueLabel:le,variant:K="default",width:Q="full",wrapperClassName:tt="",...at})=>{const y=o=>!(typeof o=="string"&&o.trim().length===0),se=O||"juno-select-"+n.useId(),oe="juno-select-helptext-"+n.useId(),[re,nt]=n.useState(new Map),[w,lt]=n.useState(!1),[ie,st]=n.useState(!1),[de,ot]=n.useState(!1),[j,rt]=n.useState(!1),it=(o,c,f)=>{nt(b=>new Map(b).set(o||f,{val:o,label:c,children:f,displayName:f||c||o}))},ue=n.useMemo(()=>S||!!(p&&y(p)),[S,p]),ce=n.useMemo(()=>P||!!(v&&y(v)),[P,v]);n.useEffect(()=>{lt(h)},[h]),n.useEffect(()=>{st(ue)},[ue]),n.useEffect(()=>{ot(ce)},[ce]),n.useEffect(()=>{rt(C)},[C]);const dt=o=>{T&&T(o||""),A&&A(o||"")},pe=bt(),ut=[ft(4),ht({crossAxis:!0,allowedPlacements:["bottom","top"]}),gt({boundary:"viewport",apply({availableWidth:o,availableHeight:c,elements:f}){Object.assign(f.floating.style,{maxWidth:`${o}px`,maxHeight:`${c}px`,overflowY:"auto"})}}),vt()],ct=o=>{const c=b=>{var me;const X=re.get(b);if(X)return(me=X.displayName)!=null&&me.length?X.displayName:null};return o.map(b=>c(b)).filter(b=>b&&b.toString().trim().length>0).join(", ")};return t.jsx(Ze.Provider,{value:{truncateOptions:B,addOptionValueAndLabel:it},children:t.jsxs("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${Q=="auto"?"jn-inline-block":"jn-block"}
          ${Q=="auto"?"jn-w-auto":"jn-w-full"}
          ${tt}
        `,children:[t.jsxs(V,{disabled:u||j||w,multiple:R,name:G,onChange:dt,value:J,defaultValue:d,children:[g&&y(g)?t.jsx(V.Label,{as:pt,htmlFor:se,text:g,className:`${xt}`,disabled:u||j||w,required:Y,floating:!0,minimized:!0}):"",t.jsxs(ee,{composable:!0,adaptiveWidth:!0,middleware:ut,children:[t.jsx(ee.Reference,{children:t.jsx(V.Button,{"aria-describedby":m?oe:"","aria-label":l||g,as:"button",id:se,className:`
                    juno-select-toggle
                    ${K&&K.length?"juno-select-toggle-"+K:"juno-select-toggle-default"}
                    ${Q=="auto"?"jn-w-auto":"jn-w-full"}
                    ${Ot}
                    ${g&&y(g)?"jn-pt-[0.4rem]":""}
                    ${u?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${j||w?"jn-justify-center":"jn-justify-between"}
                    ${ie?"juno-select-invalid "+Vt:""} 
                    ${de?"juno-select-valid "+qt:""}  
                    
                    ${j?"juno-select-loading jn-cursor-not-allowed":""}
                    ${w?"juno-select-error jn-cursor-not-allowed":""}
                    ${s}
                  `,...at,children:({open:o,value:c})=>{var f;return!w&&!j?t.jsxs(t.Fragment,{children:[t.jsx("span",{className:`${Tt}`,children:R?ct(c)||le||c.join(", ")||W:((f=re.get(c))==null?void 0:f.displayName)||le||c||W}),t.jsxs("span",{className:"jn-flex",children:[de?t.jsx(q,{icon:"checkCircle",color:"jn-text-theme-success"}):"",ie?t.jsx(q,{icon:"dangerous",color:"jn-text-theme-error"}):"",t.jsx("span",{children:t.jsx(q,{icon:o?"expandLess":"expandMore"})})]})]}):t.jsx("span",{className:`${Ct}`,children:w?t.jsx(q,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):j?t.jsx(mt,{className:"jn-cursor-not-allowed"}):""})}})}),yt.createPortal(t.jsx(ee.Content,{children:t.jsx(V.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${Rt}
                      `,children:i})}),pe||document.body)]})]}),p&&y(p)?t.jsx(Z,{text:p,variant:"error"}):"",v&&y(v)?t.jsx(Z,{text:v,variant:"success"}):"",m&&y(m)?t.jsx(Z,{text:m,id:oe}):""]})})},At=l=>{const{multiple:i,value:s}=l;if(s){if(i&&!Array.isArray(s))return new Error("Invalid prop value supplied to Select component: Pass an array when using as a multi-select.");if(!i&&typeof s!="string")return new Error("Invalid prop value supplied to Select component: Pass a string when using as single select.")}};te.propTypes={ariaLabel:e.string,children:e.node,className:e.string,defaultValue:e.string,disabled:e.bool,error:e.bool,errortext:e.node,helptext:e.node,id:e.string,invalid:e.bool,label:e.string,loading:e.bool,multiple:e.bool,name:e.string,onChange:e.func,onValueChange:e.func,placeholder:e.string,required:e.bool,successtext:e.node,truncateOptions:e.bool,valid:e.bool,value:At,valueLabel:e.string,variant:e.oneOf(["default","primary","primary-danger","subdued"]),width:e.oneOf(["full","auto"]),wrapperClassName:e.string};te.__docgenInfo={description:"A Select component that can be configured to allow selecting a single item or multiple items.\n  Pass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.",methods:[],displayName:"Select",props:{ariaLabel:{defaultValue:{value:'""',computed:!1},description:"Pass an aria-label to the Select toggle button",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the internal Select toggle button",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is disabled",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead.",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A small message rendered in red text below the Select toggle.",type:{name:"node"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element",type:{name:"node"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"Pass an id to the Select toggle",type:{name:"string"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select has been validated unsuccessfully / negatively",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is busy loading options. Will show a Spinner in the Select toggle.",type:{name:"bool"},required:!1},multiple:{defaultValue:{value:"false",computed:!1},description:"Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively.",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:'A placeholder to render when no value has been selected. Default is "Select…".',type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible.",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`.",type:{name:"node"},required:!1},truncateOptions:{defaultValue:{value:"false",computed:!1},description:'Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated.',type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle.",type:{name:"bool"},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},description:"The semantic variant of the Select toggle button.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},width:{defaultValue:{value:'"full"',computed:!1},description:'Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state.',type:{name:"enum",value:[{value:'"full"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},children:{description:"The children to render as options. Use the SelectOption component, and SelectDivider if needed.",type:{name:"node"},required:!1},defaultValue:{description:"Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.",type:{name:"string"},required:!1},label:{description:"Pass a label to render in the Select toggle button",type:{name:"string"},required:!1},name:{description:"Pass a name attribute to the Select to be transmitted when used in a form.",type:{name:"string"},required:!1},onChange:{description:"Handler to be executed when the selected value changes",type:{name:"func"},required:!1},onValueChange:{description:"LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead.",type:{name:"func"},required:!1},value:{description:"The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string.",type:{name:"custom",raw:`(props) => {
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
 human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly.`,type:{name:"string"},required:!1}}};const ae=({name:l=null,variant:i,label:s=null,id:d=null,helptext:u=null,required:h=null,className:p="",disabled:m=null,invalid:O=!1,errortext:S="",valid:g,placeholder:C="Select…",successtext:R,children:G,value:T,onValueChange:A,onChange:W,defaultValue:Y,open:v,error:B,loading:P,...J})=>t.jsx(wt,{children:t.jsx(te,{name:l,id:d,label:s,required:h,placeholder:C,onChange:A||W,disabled:m,invalid:O,valid:g,value:T,variant:i,defaultValue:Y,open:v,error:B,loading:P,errortext:S,helptext:u,successtext:R,className:p,...J,children:G})});ae.propTypes={name:e.string,label:e.string,placeholder:e.string,id:e.string,helptext:e.node,required:e.bool,className:e.string,disabled:e.bool,invalid:e.bool,errortext:e.string,children:e.node,valid:e.bool,value:e.string,variant:e.oneOf(["default","primary","primary-danger","subdued"]),onValueChange:e.func,onChange:e.func,onOpenChange:e.func,defaultValue:e.string,open:e.bool,error:e.bool,loading:e.bool,successtext:e.string};const ne=jt(ae,"SelectRow is deprecated and will be removed in future versions. To be future-proof, use Select instead.");ae.__docgenInfo={description:"DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead.",methods:[],displayName:"SelectRow",props:{name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the input",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the select is required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the select",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the SelectRow is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"The error text to display in the SelectGroup. WHen passed, the SelectGroup will be invalidated automatically.",type:{name:"string"},required:!1},placeholder:{defaultValue:{value:'"Select…"',computed:!1},description:'The placeholder to show in the Select if no value is selected. defaults to "Select…".',type:{name:"string"},required:!1},children:{description:"Children to render",type:{name:"node"},required:!1},valid:{description:"Specify whether the select is valid",type:{name:"bool"},required:!1},value:{description:"Passing a value turns the select into a controlled component. If you pass a value you must also specify an onChange handler to deal with value changes",type:{name:"string"},required:!1},variant:{description:"The semantic variant of the Select toggle button.",type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"primary"',computed:!1},{value:'"primary-danger"',computed:!1},{value:'"subdued"',computed:!1}]},required:!1},onValueChange:{description:"Pass a handler to the Select element to execute once the value changes",type:{name:"func"},required:!1},onChange:{description:"Deprecated: Use `onValueChange` instead.",type:{name:"func"},required:!1},onOpenChange:{description:"Pass handler to execute once the Selects open state changes",type:{name:"func"},required:!1},defaultValue:{description:"Pass a default Value that should be selected initially. Use this if you want to use the select as an uncontrolled component.",type:{name:"string"},required:!1},open:{description:"Whether the Select is open",type:{name:"bool"},required:!1},error:{description:"Whether the Select has an error, e.g. when loading necessary option data failed. When the Select has been negatively validated, use `invalid` instead.",type:{name:"bool"},required:!1},loading:{description:"Whether the Select is currently busy loading options. Will display a Spinner Icon.",type:{name:"bool"},required:!1},successtext:{description:"Pass a value for success message",type:{name:"string"},required:!1}}};const Wt=`
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
`,Pt=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,Et=`
  jn-text-theme-accent
  jn-pl-3.5
`,Nt=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,It=`
  jn-opacity-50
  jn-cursor-not-allowed
`,$t=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,x=({children:l,className:i="",disabled:s=!1,value:d="",label:u,...h})=>{const p=n.useContext(Ze),{truncateOptions:m,addOptionValueAndLabel:O}=p||{};return n.useEffect(()=>{O(d,u,l)},[d,u,l]),t.jsx(V.Option,{as:n.Fragment,disabled:s,value:d||l,children:({selected:S})=>t.jsxs("li",{className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${Wt}
          ${S?"juno-select-option-selected "+Et:Pt}
          ${s?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${m?"juno-select-option-truncate":""}
          ${i}
        `,...h,children:[S?t.jsx(q,{icon:"check",size:"18",className:`${Nt}`}):"",t.jsx("span",{className:`
            ${s?It:""}
            ${m?$t:""}
          `,children:l||u||d})]})})};x.propTypes={children:e.string,className:e.string,disabled:e.bool,value:e.string,label:e.string};x.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"string"},required:!1},label:{description:"",type:{name:"string"},required:!1}}};const ta={title:"Deprecated/SelectRow",component:ne,parameters:{docs:{description:{component:"DEPRECATED: A select group containing a select, an associated label, and necessary structural markup. This component is DEPRECATED, use Select instead."}}},argTypes:{items:{table:{disable:!0}}},decorators:[l=>t.jsx(St,{children:l()})]},a={value:"Option 1"},r=({items:l,...i})=>t.jsx(ne,{...i,children:l.map((s,d)=>n.createElement(x,{...s,key:`${d}`}))});r.propTypes={items:e.array};const et=({value:l,children:i,...s})=>{const[d,u]=n.useState(void 0);return n.useEffect(()=>{u(l)},[l]),t.jsx(ne,{value:d,onValueChange:h=>{u(h)},...s,children:i})};et.propTypes={value:e.string,children:e.array};const E={render:r,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",helptext:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},N={render:et,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",helptext:"",disabled:!1,invalid:!1,errortext:"",onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Controlled SelectRow",value:"2",children:[t.jsx(x,{value:"1",children:"Value 1"},"1"),t.jsx(x,{value:"2",children:"Value 2"},"2"),t.jsx(x,{value:"3",children:"Value 3"},"3")]}},I={render:r,args:{name:"",id:"",required:!1,className:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row with Helptext and placeholder",helptext:"Select one",placeholder:"Select an option…",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},$={render:r,args:{name:"",placeholder:"Select…",id:"",required:!1,className:"",disabled:!1,invalid:!1,errortext:"",value:void 0,onValueChange:void 0,onChange:void 0,onOpenChange:void 0,defaultValue:void 0,open:void 0,error:void 0,loading:void 0,label:"Select Row with Helptext",helptext:t.jsxs(t.Fragment,{children:["Helptext with a ",t.jsx("a",{href:"#",children:"Link"})]}),items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},L={render:r,args:{label:"Required Select Row",required:!0,items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},k={render:r,args:{label:"Select Row with selected option",required:!0,value:"d-2",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2 is selected"},{...a,value:"d-3",label:"Option 3"}]}},D={render:r,args:{label:"Required Select Row",disabled:!0,items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},H={render:r,args:{invalid:!0,label:"Invalid SelectRow",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},_={render:r,args:{label:"Select Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the SelectRow will be set to invalid automatically.",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]},parameters:{docs:{description:{story:"Passing an `errortext` prop to the SelectRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},F={render:r,args:{valid:!0,label:"Valid SelectRow",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]}},M={render:r,args:{label:"Select Row with Error Text",successtext:"When passed an successtext prop, the SelectRow will be set to valid automatically.",items:[{...a,value:"d-1",label:"Option 1"},{...a,value:"d-2",label:"Option 2"}]},parameters:{docs:{description:{story:"Passing a `successtext` prop to the SelectRow component will automatically validate it, so there is no need to explicitly set `valid` as well."}}}},U={render:r,args:{loading:!0,label:"Loading options…",items:[]},parameters:{docs:{description:{story:"Set a SelectRow to `loading` when a Select is busy loading the optiins to display"}}}},z={render:r,args:{error:!0,label:"Loading options failed",items:[]},parameters:{docs:{description:{story:"Set a SelectRow to `error` when a loading options, e.g. from a remote API, failed. When the Select has been negatively validated, use `invalid` instead."}}}};var fe,he,ge;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(ge=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,be,Se;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Se=(be=N.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var ye,we,je;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(je=(we=I.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};var xe,Oe,qe;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(qe=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ve,Ce,Re;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Re=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var Te,Ae,We;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(We=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var Pe,Ee,Ne;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Ie,$e,Le;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Le=($e=H.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var ke,De,He;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(He=(De=_.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var _e,Fe,Me;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Me=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Ue,ze,Ge;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ge=(ze=M.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Ye,Be,Je;U.parameters={...U.parameters,docs:{...(Ye=U.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const aa=["Default","Controlled","WithHelpTextAndPlaceholder","WithHelpTextWithLink","Required","WithSelectedOption","Disabled","Invalid","WithErrorText","Valid","WithSuccessText","Loading","Error"];export{N as Controlled,E as Default,D as Disabled,z as Error,H as Invalid,U as Loading,L as Required,F as Valid,_ as WithErrorText,I as WithHelpTextAndPlaceholder,$ as WithHelpTextWithLink,k as WithSelectedOption,M as WithSuccessText,aa as __namedExportsOrder,ta as default};
