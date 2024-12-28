import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as a}from"./index-DysCNOs_.js";import{L as Y}from"./Label.component-D1jWKEjF.js";import{I as F}from"./Icon.component-BzIpr4Ej.js";import{F as v}from"./FormHint.component-Bac6eIcI.js";const ne=`
  jn-mb-4
  jn-last:mb-0
`,te=`
  jn-relative
  jn-rounded
  jn-border
  jn-py-1
`,se=`
  jn-border-transparent
`,le=`
  jn-border-theme-success
  jn-px-2
`,oe=`
  jn-border-theme-error
  jn-px-2
`,z=`
  jn-absolute
  jn-right-2
  jn-top-1.5
`,J=a.createContext(void 0),P=({children:c=null,className:A="",disabled:r=!1,errortext:n="",helptext:p="",id:G="",invalid:k=!1,label:x,name:C="",onChange:V,required:N=!1,selected:d,successtext:u="",valid:i=!1,...w})=>{const l=s=>!(typeof s=="string"&&s.trim().length===0),$=()=>"juno-checkboxgroup-"+a.useId(),h=C||$(),I=G||$(),[t,o]=a.useState(d),[b,m]=a.useState(!1),[f,S]=a.useState(!1),E=a.useMemo(()=>i||!!(u&&u.length),[i,u]),q=a.useMemo(()=>k||!!(n&&n.length),[k,n]);a.useEffect(()=>{d&&o(d)},[d]),a.useEffect(()=>{m(E)},[E]),a.useEffect(()=>{S(q)},[q]);const _=s=>{const j=s;t&&t.includes(s)?o(t.filter(g=>g!==j)):t&&!t.includes(s)?o(g=>[...g||[],j]):o([j]),V&&V(s)},H=s=>{d||o(j=>[...j||[],s])};return e.jsx(J.Provider,{value:{selectedOptions:t,name:h,disabled:r,handleCheckboxChange:_,updateSelectedValue:H},children:e.jsxs("div",{className:`
          juno-checkboxgroup 
          ${b?"juno-checkboxgroup-valid":""} 
          ${f?"juno-checkboxgroup-invalid":""} 
          ${ne} 
          ${A}
        `,id:I,role:"group",...w,children:[x&&l(x)?e.jsx(Y,{text:x,htmlFor:I,disabled:r,required:N}):"",e.jsxs("div",{className:`
            juno-checkbox-group-options 
            ${te} 
            ${b?le:""} 
            ${f?oe:""} 
            ${b||f?"":se}
          `,children:[f?e.jsx(F,{icon:"dangerous",color:"jn-text-theme-error",className:`${z}`}):"",b?e.jsx(F,{icon:"checkCircle",color:"jn-text-theme-success",className:`${z}`}):"",c]}),n&&l(n)?e.jsx(v,{text:n,variant:"error"}):"",u&&l(u)?e.jsx(v,{text:u,variant:"success"}):"",p&&l(p)?e.jsx(v,{text:p}):""]})})};try{P.displayName="CheckboxGroup",P.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{children:{defaultValue:{value:"null"},description:"The Checkbox children of the CheckboxGroup",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether all Checkboxes in the group are disabled",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed.",name:"errortext",required:!1,type:{name:"string"}},helptext:{defaultValue:{value:""},description:"A text to render to further explain meaning and significance of the group",name:"helptext",required:!1,type:{name:"string"}},id:{defaultValue:{value:""},description:"The id of the group. If not passed, a unique id will be created and used for the group as a whole.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label of the whole group.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:{value:""},description:"The name of all checkboxes in the group. If not passed, a unique name identifier will be created and used for the group as a whole.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"An onChange handler to execute when the selection of options changes",name:"onChange",required:!1,type:{name:"EventUpdateHandler"}},required:{defaultValue:{value:"false"},description:"Whether a selection in the group is required",name:"required",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Array of values of individual selected options in the group",name:"selected",required:!1,type:{name:"string[]"}},successtext:{defaultValue:{value:""},description:"Text to display in case validation is successful. When passed, will set the whole group to valid.",name:"successtext",required:!1,type:{name:"string"}},valid:{defaultValue:{value:"false"},description:"Whether the CheckboxGroup was successfully validated",name:"valid",required:!1,type:{name:"boolean"}}}}}catch{}const re=`
  jn-inline-flex
  jn-items-center
`,ie=`
  jn-w-4
  jn-h-4
  jn-opacity-0
  jn-z-50
`,ce=`
  jn-relative
  jn-w-4
  jn-h-4
  jn-rounded-sm
  jn-bg-theme-checkbox
  jn-cursor-pointer
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
`,de=`
  jn-ring-2
  jn-ring-theme-focus
`,ue=`
  jn-absolute
  jn-top-0
  jn-left-0
  jn-text-theme-checkbox-checked
  jn-fill-current
`,he=`
  jn-absolute
  jn-w-2
  jn-h-0.5
  jn-top-1.5
  jn-left-[.2rem]
  jn-inline-block
  jn-bg-theme-focus
`,fe=`
  jn-pointer-events-none
  jn-opacity-50
  jn-cursor-not-allowed
`,pe=`
  jn-border
  jn-border-transparent
`,me=`
  jn-border
  jn-border-theme-error
`,je=`
  jn-border
  jn-border-theme-success
`,xe=`
  jn-leading-0
  jn-ml-2
`,D=`
  jn-ml-1
`,R=`
  jn-mt-0
  jn-ml-6
`,U=({checked:c=!1,className:A="",disabled:r=!1,errortext:n="",helptext:p="",id:G="",indeterminate:k=!1,invalid:x=!1,label:C,name:V="",onChange:N,onClick:d,required:u=!1,successtext:i="",valid:w=!1,value:l,...$})=>{const h=y=>!(typeof y=="string"&&y.trim().length===0),I=()=>"juno-checkbox-"+a.useId(),t=a.useContext(J),{selectedOptions:o,name:b,disabled:m,handleCheckboxChange:f,updateSelectedValue:S}=t||{},E=()=>t?!!(o&&o.includes(l)):!!c,[q,_]=a.useState(E()),[H,s]=a.useState(!1),[j,g]=a.useState(!1),[T,K]=a.useState(!1),[W,Q]=a.useState(!1);a.useEffect(()=>{c&&t&&S&&S(l)},[]),a.useEffect(()=>{t||_(c)},[c]);const L=a.useMemo(()=>x||!!(n&&h(n)),[x,n]),O=a.useMemo(()=>w||!!(i&&h(i)),[w,i]);a.useEffect(()=>{s(k)},[k]),a.useEffect(()=>{K(L)},[L]),a.useEffect(()=>{Q(O)},[O]);const X=y=>{_(!q),f&&typeof f=="function"&&f(l),N&&N(y)},Z=y=>{d&&d(y)},ee=()=>{g(!0)},ae=()=>{g(!1)},M=()=>t?!!(o&&o.includes(l)):q,B=G||I();return e.jsxs("div",{className:"jn-checkbox-outer",children:[e.jsxs("div",{className:`jn-checkbox-wrapper ${re}`,children:[e.jsxs("div",{className:`
            juno-checkbox 
            ${ce} 
            ${j?de:""} 
            ${m||r?fe:""} 
            ${T?me:""} 
            ${W?je:""} 
            ${T||W?"":pe}
            ${A}
          `,...$,children:[M()?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`${ue}`,width:"16",height:"16",viewBox:"0 0 16 16",children:e.jsx("polygon",{points:"5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2"})}):"",e.jsx("input",{checked:M(),className:`
              ${ie} 
              ${T?"juno-checkbox-invalid":""} 
              ${W?"juno-checkbox-valid":""} 
              ${m||r?"jn-cursor-not-allowed":""}
            `,disabled:m||r,id:B,name:b||V,onBlur:ae,onChange:X,onClick:Z,onFocus:ee,type:"checkbox",value:l}),H&&!M()?e.jsx("div",{className:`${he}`}):""]}),C&&h(C)?e.jsxs(e.Fragment,{children:[e.jsx(Y,{text:C,htmlFor:B,disabled:m||r,required:u,className:`${xe}`}),T?e.jsx(F,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`
                  ${D}
                  ${m||r?"jn-opacity-50":""}
                `}):"",W?e.jsx(F,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`
                  ${D}
                  ${r?"jn-opacity-50":""}
                `}):""]}):""]}),n&&h(n)?e.jsx(v,{text:n,variant:"error",className:`${R}`}):"",i&&h(i)?e.jsx(v,{text:i,variant:"success",className:`${R}`}):"",p&&h(p)?e.jsx(v,{text:p,className:`${R}`}):""]})};try{U.displayName="Checkbox",U.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:{value:"false"},description:"Whether the Checkbox is checked",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the Checkbox is disabled",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"A text to render when the Checkbox has an error or could not be validated",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"A helptext to render to explain meaning and significance of the Checkbox",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"The id of the Radio. An id will be automatically generated if not passed.",name:"id",required:!1,type:{name:"string"}},indeterminate:{defaultValue:{value:"false"},description:"Whether the Checkbox is indeterminate. Applicable ONLY if the Checkbox represents multiple child Checkboxes with non--identical checked state.",name:"indeterminate",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Whether the Checkbox was validated unsuccessfully",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label of the Checkbox",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:{value:""},description:"The name of the Checkbox",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"handler to be executed when the Checkbox changes.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"handler to be executed when the Checkbox is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},required:{defaultValue:{value:"false"},description:"Whether the Checkbox is required",name:"required",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"A text to render when the Checkbox was successfully validated",name:"successtext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Whether the Checkbox was successfully validated",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the Checkbox",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{U as C,P as a};
