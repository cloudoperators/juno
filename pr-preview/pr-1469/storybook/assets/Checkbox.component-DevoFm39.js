import{r as t,j as e}from"./iframe-B4yXLd1L.js";import{L as Q}from"./Label.component-DkFqLZMW.js";import{I as F}from"./Icon.component-BfGXLch-.js";import{F as y}from"./FormHint.component-vE25lbMs.js";const ne=`
  jn:mb-4
  jn:last:mb-0
`,ae=`
  jn:relative
  jn:rounded
  jn:border
  jn:py-1
`,se=`
  jn:border-transparent
`,oe=`
  jn:border-theme-success
  jn:px-2
`,ie=`
  jn:border-theme-error
  jn:px-2
`,U=`
  jn:absolute
  jn:right-2
  jn:top-1.5
`,H=t.createContext(void 0),P=({children:o,className:R="",disabled:r=!1,errortext:n="",helptext:h="",id:M="",invalid:k=!1,label:b,name:C="",onChange:N,required:V=!1,selected:d,successtext:u="",valid:c=!1,...I})=>{const a=i=>!(typeof i=="string"&&i.trim().length===0),$=()=>"juno-checkboxgroup-"+t.useId(),p=C||$(),S=M||$(),[s,l]=t.useState(d),[j,m]=t.useState(!1),[f,_]=t.useState(!1),w=t.useMemo(()=>c||!!(u&&a(u)),[c,u]),q=t.useMemo(()=>k||!!(n&&a(n)),[k,n]);t.useEffect(()=>{d&&l(d)},[d]),t.useEffect(()=>{m(w)},[w]),t.useEffect(()=>{_(q)},[q]);const E=i=>{const x=i;s&&s.includes(i)?l(s.filter(g=>g!==x)):s&&!s.includes(i)?l(g=>[...g||[],x]):l([x]),N&&N(i)},z=i=>{d||l(x=>[...x||[],i])};return e.jsx(H.Provider,{value:{selectedOptions:s,name:p,disabled:r,handleCheckboxChange:E,updateSelectedValue:z},children:e.jsxs("div",{className:`
          juno-checkboxgroup 
          ${j?"juno-checkboxgroup-valid":""} 
          ${f?"juno-checkboxgroup-invalid":""} 
          ${ne} 
          ${R}
        `,id:S,role:"group",...I,children:[b&&a(b)?e.jsx(Q,{text:b,htmlFor:S,disabled:r,required:V}):"",e.jsxs("div",{className:`
            juno-checkbox-group-options 
            ${ae} 
            ${j?oe:""} 
            ${f?ie:""} 
            ${j||f?"":se}
          `,children:[f?e.jsx(F,{icon:"dangerous",color:"jn:text-theme-error",className:`${U}`}):"",j?e.jsx(F,{icon:"checkCircle",color:"jn:text-theme-success",className:`${U}`}):"",o]}),n&&a(n)?e.jsx(y,{text:n,variant:"error"}):"",u&&a(u)?e.jsx(y,{text:u,variant:"success"}):"",h&&a(h)?e.jsx(y,{text:h}):""]})})};try{H.displayName="CheckboxGroupContext",H.__docgenInfo={description:"",displayName:"CheckboxGroupContext",props:{}}}catch{}try{P.displayName="CheckboxGroup",P.__docgenInfo={description:`The \`CheckboxGroup\` component provides a context-managed grouping of checkbox elements.
It manages the collective state for checkboxes, allowing for individual or batch validation
and selection. It supports states such as disabled, valid, and invalid, and offers customization
for error and success messages. It also furnishes a grouped label and help text for a unified UI.`,displayName:"CheckboxGroup",props:{children:{defaultValue:null,description:"The Checkbox children of the CheckboxGroup.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names for styling the CheckboxGroup.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disables all checkboxes in the group.",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"Text displayed if validation fails or there is an error. Indicates group invalidity when set.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"Additional text explaining the significance of this group.",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"The group's ID. Automatically generated if not provided.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Indicates if the CheckboxGroup is marked as invalid.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label text for the CheckboxGroup.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:{value:""},description:"Name for all checkboxes in the group. Generated if not supplied.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Event handler triggered when any checkbox selection changes.",name:"onChange",required:!1,type:{name:"EventUpdateHandler"}},required:{defaultValue:{value:"false"},description:"Specifies if a selection is required in this group.",name:"required",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Array of values representing the initially selected checkboxes in the group.",name:"selected",required:!1,type:{name:"string[]"}},successtext:{defaultValue:{value:""},description:"Text displayed upon successful validation, which marks the group as valid.",name:"successtext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Specifies if the CheckboxGroup has been successfully validated.",name:"valid",required:!1,type:{name:"boolean"}}}}}catch{}const le=`
  jn:inline-flex
  jn:items-center
`,re=o=>`
    jn:w-4
    jn:h-4
    jn:opacity-0
    jn:z-50
    ${o?"jn:cursor-not-allowed":"jn:cursor-pointer"}
  `,ce=`
  jn:relative
  jn:w-4
  jn:h-4
  jn:rounded-sm
  jn:bg-theme-checkbox
  jn:cursor-pointer
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`,de=`
  jn:ring-2
  jn:ring-theme-focus
`,ue=`
  jn:absolute
  jn:top-0
  jn:left-0
  jn:text-theme-checkbox-checked
  jn:fill-current
`,pe=`
  jn:absolute
  jn:w-2
  jn:h-0.5
  jn:top-1.5
  jn:left-[.2rem]
  jn:inline-block
  jn:bg-theme-focus
`,fe=`
  jn:pointer-events-none
  jn:opacity-50
  jn:cursor-not-allowed
`,he=`
  jn:border
  jn:border-transparent
`,me=`
  jn:border
  jn:border-theme-error
`,xe=`
  jn:border
  jn:border-theme-success
`,be=`
  jn:leading-0
  jn:ml-2
`,J=`
  jn:ml-1
`,B=`
  jn:mt-0
  jn:ml-6
`,K=({checked:o=!1,className:R="",disabled:r=!1,errortext:n="",helptext:h="",id:M="",indeterminate:k=!1,invalid:b=!1,label:C,name:N="",onChange:V,onClick:d,required:u=!1,successtext:c="",valid:I=!1,value:a="",...$})=>{const p=v=>!(typeof v=="string"&&v.trim().length===0),S=()=>"juno-checkbox-"+t.useId(),s=t.useContext(H),{selectedOptions:l,name:j,disabled:m,handleCheckboxChange:f,updateSelectedValue:_}=s||{},w=()=>s?!!(l&&l.includes(a)):!!o,[q,E]=t.useState(w()),[z,i]=t.useState(!1),[x,g]=t.useState(!1),[T,W]=t.useState(!1),[G,X]=t.useState(!1);t.useEffect(()=>{o&&s&&_&&_(a)},[]),t.useEffect(()=>{s||E(o)},[o]);const D=t.useMemo(()=>b||!!(n&&p(n)),[b,n]),L=t.useMemo(()=>I||!!(c&&p(c)),[I,c]);t.useEffect(()=>{i(k)},[k]),t.useEffect(()=>{W(D)},[D]),t.useEffect(()=>{X(L)},[L]);const Y=v=>{E(!q),f&&typeof f=="function"&&f(a),V&&V(v)},Z=v=>{d&&d(v)},ee=()=>{g(!0)},te=()=>{g(!1)},A=()=>s?!!(l&&l.includes(a)):q,O=M||S();return e.jsxs("div",{className:"jn-checkbox-outer",children:[e.jsxs("div",{className:`jn-checkbox-wrapper ${le}`,children:[e.jsxs("div",{className:`
            juno-checkbox 
            ${ce} 
            ${x?de:""} 
            ${m||r?fe:""} 
            ${T?me:""} 
            ${G?xe:""} 
            ${T||G?"":he}
            ${R}
          `,...$,children:[A()?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${ue}`,width:"16",height:"16",viewBox:"0 0 16 16",children:e.jsx("polygon",{points:"5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2"})}):"",e.jsx("input",{checked:A(),className:`
              ${re(m||r)} 
              ${T?"juno-checkbox-invalid":""} 
              ${G?"juno-checkbox-valid":""} 
            `,disabled:m||r,id:O,name:j||N,onBlur:te,onChange:Y,onClick:Z,onFocus:ee,type:"checkbox",value:a}),z&&!A()?e.jsx("div",{className:`${pe}`}):""]}),C&&p(C)?e.jsxs(e.Fragment,{children:[e.jsx(Q,{text:C,htmlFor:O,disabled:m||r,required:u,className:`${be}`}),T?e.jsx(F,{icon:"dangerous",color:"jn:text-theme-error",size:"1.125rem",className:`
                  ${J}
                  ${m||r?"jn:opacity-50":""}
                `}):"",G?e.jsx(F,{icon:"checkCircle",color:"jn:text-theme-success",size:"1.125rem",className:`
                  ${J}
                  ${r?"jn:opacity-50":""}
                `}):""]}):""]}),n&&p(n)?e.jsx(y,{text:n,variant:"error",className:`${B}`}):"",c&&p(c)?e.jsx(y,{text:c,variant:"success",className:`${B}`}):"",h&&p(h)?e.jsx(y,{text:h,className:`${B}`}):""]})};try{K.displayName="Checkbox",K.__docgenInfo={description:`The \`Checkbox\` component is a versatile form element that allows users to
select one or multiple options. It can display states such as checked,
indeterminate, invalid, and valid, and integrates with a checkbox group context
for collective state management. This component supports labels, icons,
error/success indicators, and custom event handlers.`,displayName:"Checkbox",props:{checked:{defaultValue:{value:"false"},description:"Specifies if the Checkbox is checked.",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom CSS class for styling the Checkbox.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Specifies if the Checkbox is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"Text to display when the Checkbox has an error.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"Help text explaining the significance of the Checkbox.",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"The ID of the Checkbox. Auto-generated if not provided.",name:"id",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Specifies if the Checkbox is in an indeterminate state; used for mixed states.",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Indicates whether the Checkbox validation failed.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label text for the Checkbox.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:{value:""},description:"The name attribute of the Checkbox.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Event handler for change events on the Checkbox.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"Event handler for click events on the Checkbox.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},required:{defaultValue:{value:"false"},description:"Specifies if the Checkbox is required for form validation.",name:"required",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"Text to display when the Checkbox passes validation.",name:"successtext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Indicates whether the Checkbox validation succeeded.",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"The value attribute of the Checkbox.",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{K as C,P as a};
