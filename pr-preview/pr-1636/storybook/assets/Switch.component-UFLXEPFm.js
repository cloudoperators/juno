import{g as e}from"./iframe-DaLLswkI.js";import{t}from"./Icon.component-q7FNz7wU.js";import{t as n}from"./Label.component-CaYvNWRj.js";import{t as r}from"./FormHint.component-vvCeP4tD.js";import{useEffect as i,useId as a,useMemo as o,useState as s}from"react";var c=e(),l=`
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
`,u=`
    jn:border-theme-switch-default
`,d=`
    jn:flex
    jn:flex-row
    jn:items-center
`,f=`
    jn:inline-block
    jn:absolute
    jn:top-[1px]
    jn:rounded-full
    jn:bg-theme-switch-handle
    jn:border-theme-default
`,p=`
    jn:right-[1px] 
    jn:bg-theme-switch-handle-checked
`,m=`
    jn:left-[1px]
`,h=`
    jn:border-theme-success
`,g=`
    jn:border-theme-error
`,_=`
    jn:inline-block 
    jn:ml-1 
    jn:leading-1
    jn:mt-[-.2rem]
`,v=`
    jn:mt-0
`,y=e=>typeof e==`string`&&e.trim().length>0,b=e=>{switch(e){case`small`:return`jn:w-[1.75rem] jn:h-4`;case`large`:return`jn:w-[3.125rem] jn:h-[1.6875rem]`;default:return`jn:w-switch-default jn:h-switch-default`}},x=e=>{switch(e){case`small`:return`jn:w-[0.75rem] jn:h-[0.75rem]`;case`large`:return`jn:w-[1.4375rem] jn:h-[1.4375rem]`;default:return`jn:w-switch-handle-default jn:h-switch-handle-default`}},S=(e,n,r)=>{let i=`1.125rem`,a=`${_} ${r?`jn:opacity-50`:``}`;return e?(0,c.jsx)(t,{icon:`dangerous`,color:`jn:text-theme-error`,size:i,className:a}):n?(0,c.jsx)(t,{icon:`checkCircle`,color:`jn:text-theme-success`,size:i,className:a}):null},C=(e,t,n)=>y(e)?(0,c.jsx)(r,{text:e,variant:`error`,className:v}):y(t)?(0,c.jsx)(r,{text:t,variant:`success`,className:v}):y(n)?(0,c.jsx)(r,{text:n,className:v}):null,w=({name:e=``,id:t=``,label:r,required:_=!1,size:v=`default`,on:w=!1,disabled:T=!1,invalid:E=!1,valid:D=!1,helptext:O=``,errortext:k=``,successtext:A=``,className:j=``,onChange:M,onClick:N,wrapperClassName:P=``,...F})=>{let I=()=>`juno-switch-`+a(),[L,R]=s(w),[z,B]=s(!1),[V,H]=s(!1);i(()=>{R(w)},[w]);let U=o(()=>E||!!y(k),[E,k]),W=o(()=>D||!!y(A),[D,A]);i(()=>{B(U)},[U]),i(()=>{H(W)},[W]);let G=e=>{R(!L),N&&N(e),M&&M(e)},K=t||I();return(0,c.jsxs)(`div`,{children:[(0,c.jsxs)(`span`,{className:`
          juno-switch-wrapper 
          ${d}
          ${P}
        `,children:[(0,c.jsx)(`button`,{type:`button`,role:`switch`,name:e,id:K,"aria-checked":L,disabled:T,onClick:G,className:`
            juno-switch 
            juno-switch-${v} 
            ${l} 
            ${b(v)} 
            ${z?`juno-switch-invalid `+g:``} 
            ${V?`juno-switch-valid `+h:``} 
            ${V||z?``:u} 
            ${j}`,...F,children:(0,c.jsx)(`span`,{className:`juno-switch-handle ${f} ${x(v)} ${L?p:m}`})}),(0,c.jsx)(n,{text:r,htmlFor:K,className:`jn:ml-2`,disabled:T,required:_}),S(z,V,T)]}),C(k,A,O)]})};try{w.displayName=`Switch`,w.__docgenInfo={description:`A basic switch component for toggling between two options.
Use this component for interactions that produce immediate results.
For form scenarios requiring submission, use checkboxes instead.`,displayName:`Switch`,props:{name:{defaultValue:{value:``},description:`HTML name attribute for the switch button`,name:`name`,required:!1,type:{name:`string`}},id:{defaultValue:{value:``},description:`HTML id attribute for the switch button`,name:`id`,required:!1,type:{name:`string`}},label:{defaultValue:null,description:`Label to display next to the Switch component`,name:`label`,required:!1,type:{name:`string`}},required:{defaultValue:{value:`false`},description:`Indicates if the Switch is required`,name:`required`,required:!1,type:{name:`boolean`}},size:{defaultValue:{value:`default`},description:`Specifies the size of the Switch component`,name:`size`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"small"`},{value:`"large"`}]}},on:{defaultValue:{value:`false`},description:`Sets the initial checked state of the Switch component for use in uncontrolled mode`,name:`on`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},description:`Disabled state of the Switch component`,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Indicates if the Switch has an error state`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Indicates if the Switch has been validated successfully`,name:`valid`,required:!1,type:{name:`boolean`}},helptext:{defaultValue:{value:``},description:`Help text to provide additional information about the Switch`,name:`helptext`,required:!1,type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},description:`Text to display when the Switch has validation errors`,name:`errortext`,required:!1,type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},description:`Text to display when the Switch has been validated successfully`,name:`successtext`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Custom class name to apply to the internal button element`,name:`className`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Callback function to handle changes to the switch state`,name:`onChange`,required:!1,type:{name:`((event: ChangeEvent<HTMLButtonElement, Element>) => void)`}},onClick:{defaultValue:null,description:`Callback function to handle click events on the switch`,name:`onClick`,required:!1,type:{name:`((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`}},wrapperClassName:{defaultValue:{value:``},description:`Custom class name to apply to the wrapper element
Useful for styling and positioning the outermost element of the component`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{w as t};