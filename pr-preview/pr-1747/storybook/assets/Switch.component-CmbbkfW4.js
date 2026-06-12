import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-CqBrPJ8x.js";import{r as i,t as a}from"./Icon.component-B6XlXT13.js";import{n as o,t as s}from"./Label.component-CuqbSAJj.js";import{n as c,t as l}from"./FormHint.component-DXqAL3QA.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{u=e(r()),o(),i(),c(),d=n(),f=`
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
`,p=`
    jn:border-theme-switch-default
`,m=`
    jn:flex
    jn:flex-row
    jn:items-center
`,h=`
    jn:inline-block
    jn:absolute
    jn:top-[1px]
    jn:rounded-full
    jn:bg-theme-switch-handle
    jn:border-theme-default
`,g=`
    jn:right-[1px] 
    jn:bg-theme-switch-handle-checked
`,_=`
    jn:left-[1px]
`,v=`
    jn:border-theme-success
`,y=`
    jn:border-theme-error
`,b=`
    jn:inline-block 
    jn:ml-1 
    jn:leading-1
    jn:mt-[-.2rem]
`,x=`
    jn:mt-0
`,S=e=>typeof e==`string`&&e.trim().length>0,C=e=>{switch(e){case`small`:return`jn:w-[1.75rem] jn:h-4`;case`large`:return`jn:w-[3.125rem] jn:h-[1.6875rem]`;default:return`jn:w-switch-default jn:h-switch-default`}},w=e=>{switch(e){case`small`:return`jn:w-[0.75rem] jn:h-[0.75rem]`;case`large`:return`jn:w-[1.4375rem] jn:h-[1.4375rem]`;default:return`jn:w-switch-handle-default jn:h-switch-handle-default`}},T=(e,t,n)=>{let r=`1.125rem`,i=`${b} ${n?`jn:opacity-50`:``}`;return e?(0,d.jsx)(a,{icon:`dangerous`,color:`jn:text-theme-error`,size:r,className:i}):t?(0,d.jsx)(a,{icon:`checkCircle`,color:`jn:text-theme-success`,size:r,className:i}):null},E=(e,t,n)=>S(e)?(0,d.jsx)(l,{text:e,variant:`error`,className:x}):S(t)?(0,d.jsx)(l,{text:t,variant:`success`,className:x}):S(n)?(0,d.jsx)(l,{text:n,className:x}):null,D=({name:e=``,id:t=``,label:n,required:r=!1,size:i=`default`,on:a=!1,disabled:o=!1,invalid:c=!1,valid:l=!1,helptext:b=``,errortext:x=``,successtext:D=``,className:O=``,onChange:k,onClick:A,wrapperClassName:j=``,...M})=>{let N=()=>`juno-switch-`+(0,u.useId)(),[P,F]=(0,u.useState)(a),[I,L]=(0,u.useState)(!1),[R,z]=(0,u.useState)(!1);(0,u.useEffect)(()=>{F(a)},[a]);let B=(0,u.useMemo)(()=>c||!!S(x),[c,x]),V=(0,u.useMemo)(()=>l||!!S(D),[l,D]);(0,u.useEffect)(()=>{L(B)},[B]),(0,u.useEffect)(()=>{z(V)},[V]);let H=e=>{F(!P),A&&A(e),k&&k(e)},U=t||N();return(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`span`,{className:`
          juno-switch-wrapper 
          ${m}
          ${j}
        `,children:[(0,d.jsx)(`button`,{type:`button`,role:`switch`,name:e,id:U,"aria-checked":P,disabled:o,onClick:H,className:`
            juno-switch 
            juno-switch-${i} 
            ${f} 
            ${C(i)} 
            ${I?`juno-switch-invalid `+y:``} 
            ${R?`juno-switch-valid `+v:``} 
            ${R||I?``:p} 
            ${O}`,...M,children:(0,d.jsx)(`span`,{className:`juno-switch-handle ${h} ${w(i)} ${P?g:_}`})}),(0,d.jsx)(s,{text:n,htmlFor:U,className:`jn:ml-2`,disabled:o,required:r}),T(I,R,o)]}),E(x,D,b)]})};try{D.displayName=`Switch`,D.__docgenInfo={description:`A basic switch component for toggling between two options.
Use this component for interactions that produce immediate results.
For form scenarios requiring submission, use checkboxes instead.`,displayName:`Switch`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Switch/Switch.component.tsx`,methods:[],props:{name:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`HTML name attribute for the switch button`,name:`name`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`string`}},id:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`HTML id attribute for the switch button`,name:`id`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Label to display next to the Switch component`,name:`label`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`string`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Indicates if the Switch is required`,name:`required`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Specifies the size of the Switch component`,name:`size`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`enum`,raw:`SwitchSize`,value:[{value:`"default"`},{value:`"small"`},{value:`"large"`}]}},on:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Sets the initial checked state of the Switch component for use in uncontrolled mode`,name:`on`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Disabled state of the Switch component`,name:`disabled`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Indicates if the Switch has an error state`,name:`invalid`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`boolean`}},valid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Indicates if the Switch has been validated successfully`,name:`valid`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`boolean`}},helptext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Help text to provide additional information about the Switch`,name:`helptext`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Text to display when the Switch has validation errors`,name:`errortext`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Text to display when the Switch has been validated successfully`,name:`successtext`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Custom class name to apply to the internal button element`,name:`className`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Callback function to handle changes to the switch state`,name:`onChange`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`((event: ChangeEvent<HTMLButtonElement, Element>) => void)`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Callback function to handle click events on the switch`,name:`onClick`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)`}},wrapperClassName:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`}],description:`Custom class name to apply to the wrapper element
Useful for styling and positioning the outermost element of the component`,name:`wrapperClassName`,parent:{fileName:`ui-components/src/components/Switch/Switch.component.tsx`,name:`SwitchProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-switch--docs
{@link SwitchProps }`}}}catch{}}));export{O as n,D as t};