import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as a}from"./index-DysCNOs_.js";import{L as ue}from"./Label.component-B3thB2lY.js";import{I as y}from"./Icon.component-DteN3msQ.js";import{S as de}from"./Spinner.component-CcUhSsaF.js";import{F as O}from"./FormHint.component-Bac6eIcI.js";import{S as I}from"./headlessui-float-CRaAej_Z.js";import{o as ce,a as pe,s as me,b as fe}from"./floating-ui.react-dom-t1-XbZXo.js";import{u as he}from"./PortalProvider.component-DJiEgPYG.js";import{r as je}from"./index-DxCGxluL.js";import{I as b}from"./listbox-Dqb8rs3Q.js";const ge=`
  jn-no-wrap
  jn-pointer-events-none
  jn-top-2
  jn-left-4
`,ye=`
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
`,be=`
  jn-border
  jn-border-theme-success
`,ve=`
  jn-border
  jn-border-theme-error
`,Se=`
  jn-absolute
  jn-top-1/2
  jn-left-1/2
  jn-translate-y-[-50%]
  jn-translate-x-[-0.75rem]
`,xe=`
  jn-rounded
  jn-bg-theme-background-lvl-1
  jn-w-full
  jn-overflow-y-auto
`,we=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,Y=a.createContext(void 0),z=({ariaLabel:l="",children:S,className:j="",defaultValue:d,disabled:r=!1,error:v=!1,errortext:s="",helptext:i="",id:x="",invalid:g=!1,label:c,loading:W=!1,multiple:k=!1,name:B,onChange:C,onValueChange:L,placeholder:w="Select…",required:G=!1,successtext:p="",truncateOptions:J=!1,valid:_=!1,value:K,valueLabel:V,variant:q="default",width:N="full",wrapperClassName:Q="",...X})=>{const u=t=>!(typeof t=="string"&&t.trim().length===0),A=x||"juno-select-"+a.useId(),P="juno-select-helptext-"+a.useId(),[E,Z]=a.useState(new Map),[m,ee]=a.useState(!1),[T,te]=a.useState(!1),[D,ae]=a.useState(!1),[f,ne]=a.useState(!1),le=(t,n,h)=>{Z(o=>new Map(o).set(t||h,{val:t,label:n,children:h,displayName:h||n||t}))},R=a.useMemo(()=>g||!!(s&&u(s)),[g,s]),H=a.useMemo(()=>_||!!(p&&u(p)),[_,p]);a.useEffect(()=>{ee(v)},[v]),a.useEffect(()=>{te(R)},[R]),a.useEffect(()=>{ae(H)},[H]),a.useEffect(()=>{ne(W)},[W]);const se=t=>{C&&C(t),L&&L(t)},M=he(),oe=[ce(4),pe({crossAxis:!0,allowedPlacements:["bottom","top"]}),me({boundary:"viewport",apply({availableWidth:t,availableHeight:n,elements:h}){Object.assign(h.floating.style,{maxWidth:`${t}px`,maxHeight:`${n}px`,overflowY:"auto"})}}),fe()],re=t=>{const n=o=>{var F;const $=E.get(o);if($)return(F=$.displayName)!=null&&F.length?$.displayName:null};return t.map(o=>n(o)).filter(o=>o&&o.toString().trim().length>0).join(", ")};return e.jsx(Y.Provider,{value:{truncateOptions:J,addOptionValueAndLabel:le},children:e.jsxs("div",{className:`
          juno-select-wrapper 
          jn-relative
          ${N=="auto"?"jn-inline-block":"jn-block"}
          ${N=="auto"?"jn-w-auto":"jn-w-full"}
          ${Q}
        `,children:[e.jsxs(b,{disabled:r||f||m,multiple:k,name:B,onChange:se,value:K,defaultValue:d,children:[c&&u(c)?e.jsx(b.Label,{as:ue,htmlFor:A,text:c,className:`${ge}`,disabled:r||f||m,required:G,floating:!0,minimized:!0}):"",e.jsxs(I,{composable:!0,adaptiveWidth:!0,middleware:oe,children:[e.jsx(I.Reference,{children:e.jsx(b.Button,{"aria-describedby":i?P:"","aria-label":l||c,as:"button",id:A,className:`
                    juno-select-toggle
                    ${q&&q.length?"juno-select-toggle-"+q:"juno-select-toggle-default"}
                    ${N=="auto"?"jn-w-auto":"jn-w-full"}
                    ${ye}
                    ${c&&u(c)?"jn-pt-[0.4rem]":""}
                    ${r?"juno-select-disabled jn-opacity-50 jn-cursor-not-allowed":""}
                    ${f||m?"jn-justify-center":"jn-justify-between"}
                    ${T?"juno-select-invalid "+ve:""} 
                    ${D?"juno-select-valid "+be:""}  
                    
                    ${f?"juno-select-loading jn-cursor-not-allowed":""}
                    ${m?"juno-select-error jn-cursor-not-allowed":""}
                    ${j}
                  `,...X,children:({open:t,value:n})=>!m&&!f?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`${we}`,children:ie(n)}),e.jsxs("span",{className:"jn-flex",children:[D?e.jsx(y,{icon:"checkCircle",color:"jn-text-theme-success"}):"",T?e.jsx(y,{icon:"dangerous",color:"jn-text-theme-error"}):"",e.jsx("span",{children:e.jsx(y,{icon:t?"expandLess":"expandMore"})})]})]}):e.jsx("span",{className:`${Se}`,children:m?e.jsx(y,{icon:"errorOutline",color:"jn-text-theme-error",className:"jn-cursor-not-allowed"}):f?e.jsx(de,{className:"jn-cursor-not-allowed"}):""})})}),je.createPortal(e.jsx(I.Content,{children:e.jsx(b.Options,{unmount:!1,className:`
                        juno-select-menu
                        ${xe}
                      `,children:S})}),M||document.body)]})]}),s&&u(s)?e.jsx(O,{text:s,variant:"error"}):"",p&&u(p)?e.jsx(O,{text:p,variant:"success"}):"",i&&u(i)?e.jsx(O,{text:i,id:P}):""]})});function ie(t){if(k)return re(t)||V||t.join(", ")||w;{const n=E.get(t);return n?n.displayName||V||t||w:V||t||w}}};try{z.displayName="Select",z.__docgenInfo={description:"A Select component that can be configured to allow selecting a single item or multiple items.\nPass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.",displayName:"Select",props:{ariaLabel:{defaultValue:{value:""},description:"Pass an aria-label to the Select toggle button",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render as options. Use the SelectOption component, and SelectDivider if needed.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className to the internal Select toggle button",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.",name:"defaultValue",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the Select is disabled",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead.",name:"error",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"A small message rendered in red text below the Select toggle.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"Pass an id to the Select toggle",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Whether the Select has been validated unsuccessfully / negatively",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Pass a label to render in the Select toggle button",name:"label",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Whether the Select is busy loading options. Will show a Spinner in the Select toggle.",name:"loading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Pass a name attribute to the Select to be transmitted when used in a form.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to be executed when the selected value changes",name:"onChange",required:!1,type:{name:"((value?: string | number | string[]) => void)"}},open:{defaultValue:null,description:"Handle for openning of select",name:"open",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead.",name:"onValueChange",required:!1,type:{name:"((...args: unknown[]) => unknown)"}},placeholder:{defaultValue:{value:"Select…"},description:'A placeholder to render when no value has been selected. Default is "Select…".',name:"placeholder",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible.",name:"required",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`.",name:"successtext",required:!1,type:{name:"ReactNode"}},truncateOptions:{defaultValue:{value:"false"},description:'Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated.',name:"truncateOptions",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle.",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string.",name:"value",required:!1,type:{name:"unknown"}},valueLabel:{defaultValue:null,description:`The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for
human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly.`,name:"valueLabel",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"The semantic variant of the Select toggle button.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"primary-danger"'},{value:'"subdued"'}]}},width:{defaultValue:{value:"full"},description:'Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state.',name:"width",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"full"'}]}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const Ve=`
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
`,qe=`
  jn-text-theme-default
  jn-pl-[2.375rem]
`,Ne=`
  jn-text-theme-accent
  jn-pl-3.5
`,$e=`
  jn-inline-block
  jn-mr-1.5
  jn-overflow-auto
`,Oe=`
  jn-opacity-50
  jn-cursor-not-allowed
`,Ie=`
  jn-block
  jn-h-6
  jn-overflow-hidden
  jn-text-ellipsis
  jn-whitespace-nowrap
`,U=({children:l,className:S="",disabled:j=!1,value:d="",label:r,...v})=>{const s=a.useContext(Y),{truncateOptions:i,addOptionValueAndLabel:x}=s||{truncateOptions:!1,addOptionValueAndLabel:()=>{}};return a.useEffect(()=>{x(d,r,l)},[d,r,l]),e.jsx(b.Option,{as:a.Fragment,disabled:j,value:d||l,children:({selected:g})=>e.jsxs("li",{className:`
          juno-select-option 
          jn-min-h-[2.5rem]
          ${Ve}
          ${g?"juno-select-option-selected "+Ne:qe}
          ${j?"juno-select-option-disabled jn-opacity-50 jn-cursor-not-allowed":""}
          ${i?"juno-select-option-truncate":""}
          ${S}
        `,...v,children:[g?e.jsx(y,{icon:"check",size:"18",className:$e}):"",e.jsx("span",{className:`
            ${j?Oe:""}
            ${i?Ie:""}
          `,children:l||r||d})]})})};try{U.displayName="SelectOption",U.__docgenInfo={description:"",displayName:"SelectOption",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{z as S,U as a};
