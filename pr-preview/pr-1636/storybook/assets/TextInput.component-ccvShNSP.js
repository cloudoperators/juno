import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";import{t as i}from"./Label.component-3mysfpZZ.js";import"./Label-BqZqxTuH.js";import{t as a}from"./FormHint.component-DOXQVwyU.js";var o=e(t()),s=n(),c=`
  jn:bg-theme-textinput
  jn:text-theme-textinput
  jn:border
  jn:text-base
  jn:leading-4
  jn:px-4
  jn:h-textinput
  jn:rounded-3px
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
  jn:autofill:bg-theme-textinput-autofill
  jn:autofill:text-theme-textinput-autofill
  peer
`,l=`
  jn:border-theme-textinput-default
`,u=`
  jn:border-theme-error
`,d=`
  jn:border-theme-success
`,f=`
  jn:pt-[1.125rem] 
  jn:pb-1
`,p=`
  jn:py-4
`,m=`
  jn:inline-block
  jn:relative
`,h=`
  jn:peer-autofill:text-theme-textinput-autofill-label
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
`,g=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,_=`
  jn:opacity-50
`,v=`
  jn:mt-0
`,y=({value:e=``,id:t=``,name:n,placeholder:y=``,disabled:b=!1,readOnly:ee=!1,required:x=!1,invalid:S=!1,valid:C=!1,autoFocus:w=!1,className:T=``,autoComplete:E=`off`,helptext:D=``,successtext:O=``,errortext:k=``,onChange:A,onFocus:j,onBlur:M,type:N,label:P,width:F=`full`,wrapperClassName:I=``,...L})=>{let R=e=>!(typeof e==`string`&&e.trim().length===0),z=()=>`juno-textinput-`+(0,o.useId)(),B=(0,o.useRef)(null),[V,H]=(0,o.useState)(``),[U,W]=(0,o.useState)(!1),[G,K]=(0,o.useState)(!1),[q,J]=(0,o.useState)(!1);(0,o.useEffect)(()=>{document.hasFocus()&&B.current.contains(document.activeElement)&&W(!0)},[]),(0,o.useEffect)(()=>{H(e)},[e]);let Y=(0,o.useMemo)(()=>S||!!(k&&R(k)),[S,k]),X=(0,o.useMemo)(()=>C||!!(O&&R(O)),[C,O]);(0,o.useEffect)(()=>{K(Y)},[Y]),(0,o.useEffect)(()=>{J(X)},[X]);let Z=e=>{H(e.target.value),A&&A(e)},Q=e=>{W(!0),j&&j(e)},te=e=>{W(!1),M&&M(e)},ne=({disabled:e})=>q||G?(0,s.jsxs)(`div`,{className:`juno-textinput-row-icon-container ${g} ${e?_:``}`,children:[G?(0,s.jsx)(r,{icon:`dangerous`,color:`jn:text-theme-error`}):null,q?(0,s.jsx)(r,{icon:`checkCircle`,color:`jn:text-theme-success`}):null]}):``,$=t||z();return(0,s.jsxs)(`div`,{className:`juno-textinput-outer-wrapper`,children:[(0,s.jsxs)(`span`,{className:`
          juno-textinput-wrapper 
          ${m}
          ${F==`auto`?`jn:inline-block`:`jn:block`}
          ${F==`auto`?`jn:w-auto`:`jn:w-full`}
          ${I}
          `,children:[(0,s.jsx)(`input`,{type:N,name:n,autoComplete:E,value:V,id:$,ref:B,placeholder:y,disabled:b,readOnly:ee,autoFocus:w,onChange:Z,onFocus:Q,onBlur:te,className:`juno-textinput 
            ${c}
            ${P?f:p}
            ${G?`juno-textinput-invalid `+u:``} 
            ${q?`juno-textinput-valid `+d:``}  
            ${q||G?``:l} 
            ${F==`auto`?`jn:w-auto`:`jn:w-full`}
            ${T}
          `,...L}),P&&P.length?(0,s.jsx)(i,{text:P,htmlFor:$,className:`${h}`,disabled:b,required:x,floating:!0,minimized:!!(y||U||V&&R(V))}):``,(0,s.jsx)(ne,{disabled:b})]}),k&&R(k)?(0,s.jsx)(a,{text:k,variant:`error`,className:`${v}`}):``,O&&R(O)?(0,s.jsx)(a,{text:O,variant:`success`,className:`${v}`}):``,D&&R(D)?(0,s.jsx)(a,{text:D,className:`${v}`}):``]})};try{y.displayName=`TextInput`,y.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, URL derivatives.`,displayName:`TextInput`,props:{name:{defaultValue:null,description:`Pass a name attribute`,name:`name`,required:!1,type:{name:`string`}},value:{defaultValue:{value:``},description:`Pass a value`,name:`value`,required:!1,type:{name:`string | number`}},id:{defaultValue:{value:``},description:`Pass an id`,name:`id`,required:!1,type:{name:`string`}},placeholder:{defaultValue:{value:``},description:`Pass a placeholder`,name:`placeholder`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Render a disabled input`,name:`disabled`,required:!1,type:{name:`boolean`}},readOnly:{defaultValue:{value:`false`},description:`Render a readonly input`,name:`readOnly`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:`Whether the field is required`,name:`required`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Whether the field is invalid`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Whether the field is valid`,name:`valid`,required:!1,type:{name:`boolean`}},autoFocus:{defaultValue:{value:`false`},description:`Whether the field receives autofocus`,name:`autoFocus`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Pass a classname. The class name is applied to the internal input element.`,name:`className`,required:!1,type:{name:`string`}},autoComplete:{defaultValue:{value:`off`},description:`Pass a valid autocomplete value. We do not police validity.`,name:`autoComplete`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Pass a change handler`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLInputElement>`}},onFocus:{defaultValue:null,description:`Pass a focus handler`,name:`onFocus`,required:!1,type:{name:`FocusEventHandler<HTMLInputElement>`}},onBlur:{defaultValue:null,description:`Pass a blur handler`,name:`onBlur`,required:!1,type:{name:`FocusEventHandler<HTMLInputElement>`}},type:{defaultValue:null,description:`Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers.`,name:`type`,required:!1,type:{name:`enum`,value:[{value:`"number"`},{value:`"text"`},{value:`"tel"`},{value:`"url"`},{value:`"email"`},{value:`"password"`}]}},label:{defaultValue:null,description:`The label of the input`,name:`label`,required:!1,type:{name:`string`}},helptext:{defaultValue:{value:``},description:`A helptext to render to explain meaning and significance of the TextInput`,name:`helptext`,required:!1,type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},description:`A text to render when the TextInput was successfully validated`,name:`successtext`,required:!1,type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},description:`A text to render when the TextInput has an error or could not be validated`,name:`errortext`,required:!1,type:{name:`ReactNode`}},width:{defaultValue:{value:`full`},description:`The width of the text input. Either 'full' (default) or 'auto'.`,name:`width`,required:!1,type:{name:`enum`,value:[{value:`"auto"`},{value:`"full"`}]}},wrapperClassName:{defaultValue:{value:``},description:`Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{y as t};