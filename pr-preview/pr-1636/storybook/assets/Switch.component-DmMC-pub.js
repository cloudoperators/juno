import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import{t as i}from"./Label.component-3mysfpZZ.js";import{t as a}from"./FormHint.component-DOXQVwyU.js";var o=e(t()),s=n(),c=`
    jn:rounded-full
    jn:relative
    jn:p-0
    jn:leading-0
    jn:border
    jn:g-theme-default
    jn:focus:outline-hidden
    jn:focus:ring-2
    jn:focus:ring-theme-focus
    jn:disabled:opacity-50
    jn:disabled:cursor-not-allowed
`,l=`
    jn:border-theme-switch-default
`,u=`
    jn:flex
    jn:flex-row
    jn:items-center
`,d=`
    jn:inline-block
    jn:absolute
    jn:top-[1px]
    jn:rounded-full
    jn:bg-theme-switch-handle
    jn:border-theme-default
`,f=`
    jn:right-[1px] 
    jn:bg-theme-switch-handle-checked
`,p=`
    jn:left-[1px]
`,m=`
    jn:border-theme-success
`,h=`
    jn:border-theme-error
`,g=`
    jn:inline-block 
    jn:ml-1 
    jn:leading-1
    jn:mt-[-.2rem]
`,_=`
    jn:mt-0
`,v=e=>typeof e==`string`&&e.trim().length>0,y=e=>{switch(e){case`small`:return`jn:w-[1.75rem] jn:h-4`;case`large`:return`jn:w-[3.125rem] jn:h-[1.6875rem]`;default:return`jn:w-switch-default jn:h-switch-default`}},b=e=>{switch(e){case`small`:return`jn:w-[0.75rem] jn:h-[0.75rem]`;case`large`:return`jn:w-[1.4375rem] jn:h-[1.4375rem]`;default:return`jn:w-switch-handle-default jn:h-switch-handle-default`}},x=(e,t,n)=>{let i=`1.125rem`,a=`${g} ${n?`jn:opacity-50`:``}`;return e?(0,s.jsx)(r,{icon:`dangerous`,color:`jn:text-theme-error`,size:i,className:a}):t?(0,s.jsx)(r,{icon:`checkCircle`,color:`jn:text-theme-success`,size:i,className:a}):null},S=(e,t,n)=>v(e)?(0,s.jsx)(a,{text:e,variant:`error`,className:_}):v(t)?(0,s.jsx)(a,{text:t,variant:`success`,className:_}):v(n)?(0,s.jsx)(a,{text:n,className:_}):null,C=({name:e=``,id:t=``,label:n,required:r=!1,size:a=`default`,on:g=!1,disabled:_=!1,invalid:C=!1,valid:w=!1,helptext:T=``,errortext:E=``,successtext:D=``,className:O=``,onChange:k,onClick:A,wrapperClassName:j=``,...M})=>{let N=()=>`juno-switch-`+(0,o.useId)(),[P,F]=(0,o.useState)(g),[I,L]=(0,o.useState)(!1),[R,z]=(0,o.useState)(!1);(0,o.useEffect)(()=>{F(g)},[g]);let B=(0,o.useMemo)(()=>C||!!v(E),[C,E]),V=(0,o.useMemo)(()=>w||!!v(D),[w,D]);(0,o.useEffect)(()=>{L(B)},[B]),(0,o.useEffect)(()=>{z(V)},[V]);let H=e=>{F(!P),A&&A(e),k&&k(e)},U=t||N();return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`span`,{className:`
          juno-switch-wrapper 
          ${u}
          ${j}
        `,children:[(0,s.jsx)(`button`,{type:`button`,role:`switch`,name:e,id:U,"aria-checked":P,disabled:_,onClick:H,className:`
            juno-switch 
            juno-switch-${a} 
            ${c} 
            ${y(a)} 
            ${I?`juno-switch-invalid `+h:``} 
            ${R?`juno-switch-valid `+m:``} 
            ${R||I?``:l} 
            ${O}`,...M,children:(0,s.jsx)(`span`,{className:`juno-switch-handle ${d} ${b(a)} ${P?f:p}`})}),(0,s.jsx)(i,{text:n,htmlFor:U,className:`jn:ml-2`,disabled:_,required:r}),x(I,R,_)]}),S(E,D,T)]})};try{C.displayName=`Switch`,C.__docgenInfo={description:`A basic switch component for toggling between two options.
Use this component for interactions that produce immediate results.
For form scenarios requiring submission, use checkboxes instead.`,displayName:`Switch`,props:{name:{defaultValue:{value:``},description:`HTML name attribute for the switch button`,name:`name`,required:!1,type:{name:`string`}},id:{defaultValue:{value:``},description:`HTML id attribute for the switch button`,name:`id`,required:!1,type:{name:`string`}},label:{defaultValue:null,description:`Label to display next to the Switch component`,name:`label`,required:!1,type:{name:`string`}},required:{defaultValue:{value:`false`},description:`Indicates if the Switch is required`,name:`required`,required:!1,type:{name:`boolean`}},size:{defaultValue:{value:`default`},description:`Specifies the size of the Switch component`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"small"`},{value:`"large"`}]}},on:{defaultValue:{value:`false`},description:`Sets the initial checked state of the Switch component for use in uncontrolled mode`,name:`on`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},description:`Disabled state of the Switch component`,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Indicates if the Switch has an error state`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Indicates if the Switch has been validated successfully`,name:`valid`,required:!1,type:{name:`boolean`}},helptext:{defaultValue:{value:``},description:`Help text to provide additional information about the Switch`,name:`helptext`,required:!1,type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},description:`Text to display when the Switch has validation errors`,name:`errortext`,required:!1,type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},description:`Text to display when the Switch has been validated successfully`,name:`successtext`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Custom class name to apply to the internal button element`,name:`className`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Callback function to handle changes to the switch state`,name:`onChange`,required:!1,type:{name:`((event: ChangeEvent<HTMLButtonElement, Element>) => void)`}},onClick:{defaultValue:null,description:`Callback function to handle click events on the switch`,name:`onClick`,required:!1,type:{name:`((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`}},wrapperClassName:{defaultValue:{value:``},description:`Custom class name to apply to the wrapper element
Useful for styling and positioning the outermost element of the component`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{C as t};