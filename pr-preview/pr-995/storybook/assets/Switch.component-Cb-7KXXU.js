import{r as n,j as t}from"./iframe-D_NY3Wq-.js";import{L}from"./Label.component-B9kIAiFM.js";import{I as N}from"./Icon.component-DDSh8YIW.js";import{F as p}from"./FormHint.component-GoGREziL.js";const T=`
    jn-rounded-full
    jn-relative
    jn-p-0
    jn-leading-0
    jn-border
    jn-g-theme-default
    focus:jn-outline-none
    focus:jn-ring-2
    focus:jn-ring-theme-focus
    disabled:jn-opacity-50
    disabled:jn-cursor-not-allowed
`,F=`
    jn-border-theme-switch-default
`,z=`
    jn-flex
    jn-flex-row
    jn-items-center
`,O=`
    jn-inline-block
    jn-absolute
    jn-top-[1px]
    jn-rounded-full
    jn-bg-theme-switch-handle
    jn-border-theme-default
`,R=`
    jn-right-[1px] 
    jn-bg-theme-switch-handle-checked
`,U=`
    jn-left-[1px]
`,A=`
    jn-border-theme-success
`,D=`
    jn-border-theme-error
`,W=`
    jn-inline-block 
    jn-ml-1 
    jn-leading-1
    jn-mt-[-.2rem]
`,j=`
    jn-mt-0
`,i=e=>typeof e=="string"&&e.trim().length>0,G=e=>{switch(e){case"small":return"jn-w-[1.75rem] jn-h-4";case"large":return"jn-w-[3.125rem] jn-h-[1.6875rem]";default:return"jn-w-switch-default jn-h-switch-default"}},J=e=>{switch(e){case"small":return"jn-w-[0.75rem] jn-h-[0.75rem]";case"large":return"jn-w-[1.4375rem] jn-h-[1.4375rem]";default:return"jn-w-switch-handle-default jn-h-switch-handle-default"}},K=(e,a,s)=>{const r="1.125rem",l=`${W} ${s?"jn-opacity-50":""}`;return e?t.jsx(N,{icon:"dangerous",color:"jn-text-theme-error",size:r,className:l}):a?t.jsx(N,{icon:"checkCircle",color:"jn-text-theme-success",size:r,className:l}):null},P=(e,a,s)=>i(e)?t.jsx(p,{text:e,variant:"error",className:j}):i(a)?t.jsx(p,{text:a,variant:"success",className:j}):i(s)?t.jsx(p,{text:s,className:j}):null,I=({name:e="",id:a="",label:s,required:r=!1,size:l="default",on:o=!1,disabled:c=!1,invalid:w=!1,valid:y=!1,helptext:C="",errortext:u="",successtext:d="",className:$="",onChange:v,onClick:b,wrapperClassName:k="",...E})=>{const B=()=>"juno-switch-"+n.useId(),[m,S]=n.useState(o),[h,H]=n.useState(!1),[f,M]=n.useState(!1);n.useEffect(()=>{S(o)},[o]);const g=n.useMemo(()=>w||!!i(u),[w,u]),x=n.useMemo(()=>y||!!i(d),[y,d]);n.useEffect(()=>{H(g)},[g]),n.useEffect(()=>{M(x)},[x]);const _=V=>{S(!m),b&&b(V),v&&v(V)},q=a||B();return t.jsxs("div",{children:[t.jsxs("span",{className:`
          juno-switch-wrapper 
          ${z}
          ${k}
        `,children:[t.jsx("button",{type:"button",role:"switch",name:e,id:q,"aria-checked":m,disabled:c,onClick:_,className:`
            juno-switch 
            juno-switch-${l} 
            ${T} 
            ${G(l)} 
            ${h?"juno-switch-invalid "+D:""} 
            ${f?"juno-switch-valid "+A:""} 
            ${f||h?"":F} 
            ${$}`,...E,children:t.jsx("span",{className:`juno-switch-handle ${O} ${J(l)} ${m?R:U}`})}),t.jsx(L,{text:s,htmlFor:q,className:"jn-ml-2",disabled:c,required:r}),K(h,f,c)]}),P(u,d,C)]})};try{I.displayName="Switch",I.__docgenInfo={description:`A basic switch component for toggling between two options.
Use this component for interactions that produce immediate results.
For form scenarios requiring submission, use checkboxes instead.`,displayName:"Switch",props:{name:{defaultValue:{value:""},description:"HTML name attribute for the switch button",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:{value:""},description:"HTML id attribute for the switch button",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label to display next to the Switch component",name:"label",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"Indicates if the Switch is required",name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"Specifies the size of the Switch component",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'},{value:'"large"'}]}},on:{defaultValue:{value:"false"},description:"Sets the initial checked state of the Switch component for use in uncontrolled mode",name:"on",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disabled state of the Switch component",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Indicates if the Switch has an error state",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Indicates if the Switch has been validated successfully",name:"valid",required:!1,type:{name:"boolean"}},helptext:{defaultValue:{value:""},description:"Help text to provide additional information about the Switch",name:"helptext",required:!1,type:{name:"ReactNode"}},errortext:{defaultValue:{value:""},description:"Text to display when the Switch has validation errors",name:"errortext",required:!1,type:{name:"ReactNode"}},successtext:{defaultValue:{value:""},description:"Text to display when the Switch has been validated successfully",name:"successtext",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class name to apply to the internal button element",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback function to handle changes to the switch state",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLButtonElement>) => void)"}},onClick:{defaultValue:null,description:"Callback function to handle click events on the switch",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},wrapperClassName:{defaultValue:{value:""},description:`Custom class name to apply to the wrapper element
Useful for styling and positioning the outermost element of the component`,name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}export{I as S};
