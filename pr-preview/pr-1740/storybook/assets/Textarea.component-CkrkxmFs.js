import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-BPAE06x6.js";import{t as i}from"./Icon.component-BjLJNJPo.js";import{t as a}from"./Icon-CjNyPxci.js";import{t as o}from"./Label.component-CH8ioY_5.js";import{t as s}from"./Label-BnvDmC9M.js";import{n as c,t as l}from"./FormHint.component-BtnU1wwL.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{u=e(r()),s(),a(),c(),d=n(),f=`
  jn:inline-block
  jn:relative
`,p=`
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:px-4
  jn:rounded-3px
  jn:align-top
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
`,m=`
  jn:border-theme-textinput-default
`,h=`
  jn:border-theme-error
`,g=`
  jn:border-theme-success
`,_=`
  jn:pt-[1.125rem] 
  jn:pb-1
`,v=`
  jn:py-4
`,y=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
`,b=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,x=`
  jn:opacity-50
`,S=`
  jn:mt-0
`,C=({name:e,value:t=``,id:n=``,placeholder:r=``,disabled:a=!1,readOnly:s=!1,required:c=!1,invalid:C=!1,valid:w=!1,autoFocus:T=!1,className:E=``,autoComplete:D=`off`,helptext:O=``,successtext:k=``,errortext:A=``,onChange:j,onFocus:M,onBlur:N,label:P,width:F=`full`,wrapperClassName:ee=``,...I})=>{let L=e=>!(typeof e==`string`&&e.trim().length===0),R=()=>`juno-textarea-`+(0,u.useId)(),z=(0,u.useRef)(null),[B,V]=(0,u.useState)(``),[H,U]=(0,u.useState)(!1),[W,G]=(0,u.useState)(!1),[K,q]=(0,u.useState)(!1);(0,u.useEffect)(()=>{document.hasFocus()&&z.current&&z.current.contains(document.activeElement)&&U(!0)},[]),(0,u.useEffect)(()=>{V(t.toString())},[t]);let J=(0,u.useMemo)(()=>C||!!(A&&L(A)),[C,A]),Y=(0,u.useMemo)(()=>w||!!(k&&L(k)),[w,k]);(0,u.useEffect)(()=>{G(J)},[J]),(0,u.useEffect)(()=>{q(Y)},[Y]);let X=e=>{V(e.target.value),j&&j(e)},Z=e=>{U(!0),M&&M(e)},Q=e=>{U(!1),N&&N(e)},te=({disabled:e})=>K||W?(0,d.jsxs)(`div`,{className:`juno-textinput-row-icon-container ${b} ${e?x:``}`,children:[W?(0,d.jsx)(i,{icon:`dangerous`,color:`jn:text-theme-error`}):null,K?(0,d.jsx)(i,{icon:`checkCircle`,color:`jn:text-theme-success`}):null]}):``,$=n||R();return(0,d.jsxs)(`div`,{children:[(0,d.jsxs)(`div`,{className:`
          juno-textarea-wrapper 
          ${f}
          ${F==`auto`?`jn:inline-block`:`jn:block`}
          ${F==`auto`?`jn:w-auto`:`jn:w-full`}
          ${ee}
        `,children:[P&&P.length?(0,d.jsx)(o,{text:P,htmlFor:$,className:`${y}`,disabled:a,required:c,floating:!0,minimized:!!(r||H||B&&B.length)}):``,(0,d.jsx)(`textarea`,{name:e,autoComplete:D,value:B,id:$,ref:z,placeholder:r,disabled:a,readOnly:s,autoFocus:T,onChange:X,onFocus:Z,onBlur:Q,className:`juno-textarea 
            ${p}
            ${P?_:v}
            ${W?`juno-textarea-invalid `+h:``} 
            ${K?`juno-textarea-valid `+g:``}  
            ${K||W?``:m} 
            ${F==`auto`?`jn:w-auto`:`jn:w-full`}
            ${E}
          `,...I}),(0,d.jsx)(te,{disabled:a})]}),A&&L(A)?(0,d.jsx)(l,{text:A,variant:`error`,className:`${S}`}):``,k&&L(k)?(0,d.jsx)(l,{text:k,variant:`success`,className:`${S}`}):``,O&&L(O)?(0,d.jsx)(l,{text:O,className:`${S}`}):``]})};try{C.displayName=`Textarea`,C.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, URL derivatives.`,displayName:`Textarea`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Textarea/Textarea.component.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a name attribute`,name:`name`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`The label of the textarea`,name:`label`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}},value:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a value`,name:`value`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string | number`}},id:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass an id`,name:`id`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}},placeholder:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a placeholder`,name:`placeholder`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Render a disabled input`,name:`disabled`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`boolean`}},readOnly:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Render a readonly input`,name:`readOnly`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Whether the field is required`,name:`required`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Whether the field is invalid`,name:`invalid`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`boolean`}},valid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Whether the field is valid`,name:`valid`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`boolean`}},autoFocus:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Whether the field receives autofocus`,name:`autoFocus`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a classname. The class name is applied to the internal textarea element.`,name:`className`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}},autoComplete:{defaultValue:{value:`off`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a valid autocomplete value. We do not police validity.`,name:`autoComplete`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a change handler`,name:`onChange`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLTextAreaElement>`}},onFocus:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a focus handler`,name:`onFocus`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},onBlur:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a blur handler`,name:`onBlur`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},helptext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`A helptext to render to explain meaning and significance of the Textarea`,name:`helptext`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`A text to render when the Textarea was successfully validated`,name:`successtext`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`A text to render when the Textarea has an error or could not be validated`,name:`errortext`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`ReactNode`}},width:{defaultValue:{value:`full`},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`The width of the textarea. Either 'full' (default) or 'auto'.`,name:`width`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`enum`,raw:`WidthType`,value:[{value:`"auto"`},{value:`"full"`}]}},wrapperClassName:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`}],description:`Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.`,name:`wrapperClassName`,parent:{fileName:`ui-components/src/components/Textarea/Textarea.component.tsx`,name:`TextareaProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-textarea--docs
{@link TextareaProps }`}}}catch{}}));export{w as n,C as t};