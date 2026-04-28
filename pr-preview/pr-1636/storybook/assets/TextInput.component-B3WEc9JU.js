import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./Icon.component-Bc6oc1sZ.js";import"./Icon-D5Vcq2jT.js";import{t as n}from"./Label.component-Db6EWwaM.js";import"./Label-n8ntNt14.js";import{t as r}from"./FormHint.component-BzW4IR94.js";import{useEffect as i,useId as a,useMemo as o,useRef as s,useState as c}from"react";var l=e(),u=`
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
`,d=`
  jn:border-theme-textinput-default
`,f=`
  jn:border-theme-error
`,p=`
  jn:border-theme-success
`,m=`
  jn:pt-[1.125rem] 
  jn:pb-1
`,h=`
  jn:py-4
`,ee=`
  jn:inline-block
  jn:relative
`,g=`
  jn:peer-autofill:text-theme-textinput-autofill-label
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
`,_=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,v=`
  jn:opacity-50
`,y=`
  jn:mt-0
`,b=({value:e=``,id:b=``,name:x,placeholder:S=``,disabled:C=!1,readOnly:w=!1,required:T=!1,invalid:E=!1,valid:D=!1,autoFocus:O=!1,className:te=``,autoComplete:ne=`off`,helptext:k=``,successtext:A=``,errortext:j=``,onChange:M,onFocus:N,onBlur:P,type:F,label:I,width:L=`full`,wrapperClassName:R=``,...z})=>{let B=e=>!(typeof e==`string`&&e.trim().length===0),V=()=>`juno-textinput-`+a(),H=s(null),[U,W]=c(``),[G,K]=c(!1),[q,J]=c(!1),[Y,X]=c(!1);i(()=>{document.hasFocus()&&H.current.contains(document.activeElement)&&K(!0)},[]),i(()=>{W(e)},[e]);let Z=o(()=>E||!!(j&&B(j)),[E,j]),Q=o(()=>D||!!(A&&B(A)),[D,A]);i(()=>{J(Z)},[Z]),i(()=>{X(Q)},[Q]);let re=e=>{W(e.target.value),M&&M(e)},ie=e=>{K(!0),N&&N(e)},ae=e=>{K(!1),P&&P(e)},oe=({disabled:e})=>Y||q?(0,l.jsxs)(`div`,{className:`juno-textinput-row-icon-container ${_} ${e?v:``}`,children:[q?(0,l.jsx)(t,{icon:`dangerous`,color:`jn:text-theme-error`}):null,Y?(0,l.jsx)(t,{icon:`checkCircle`,color:`jn:text-theme-success`}):null]}):``,$=b||V();return(0,l.jsxs)(`div`,{className:`juno-textinput-outer-wrapper`,children:[(0,l.jsxs)(`span`,{className:`
          juno-textinput-wrapper 
          ${ee}
          ${L==`auto`?`jn:inline-block`:`jn:block`}
          ${L==`auto`?`jn:w-auto`:`jn:w-full`}
          ${R}
          `,children:[(0,l.jsx)(`input`,{type:F,name:x,autoComplete:ne,value:U,id:$,ref:H,placeholder:S,disabled:C,readOnly:w,autoFocus:O,onChange:re,onFocus:ie,onBlur:ae,className:`juno-textinput 
            ${u}
            ${I?m:h}
            ${q?`juno-textinput-invalid `+f:``} 
            ${Y?`juno-textinput-valid `+p:``}  
            ${Y||q?``:d} 
            ${L==`auto`?`jn:w-auto`:`jn:w-full`}
            ${te}
          `,...z}),I&&I.length?(0,l.jsx)(n,{text:I,htmlFor:$,className:`${g}`,disabled:C,required:T,floating:!0,minimized:!!(S||G||U&&B(U))}):``,(0,l.jsx)(oe,{disabled:C})]}),j&&B(j)?(0,l.jsx)(r,{text:j,variant:`error`,className:`${y}`}):``,A&&B(A)?(0,l.jsx)(r,{text:A,variant:`success`,className:`${y}`}):``,k&&B(k)?(0,l.jsx)(r,{text:k,className:`${y}`}):``]})};try{b.displayName=`TextInput`,b.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, URL derivatives.`,displayName:`TextInput`,props:{name:{defaultValue:null,description:`Pass a name attribute`,name:`name`,required:!1,type:{name:`string`}},value:{defaultValue:{value:``},description:`Pass a value`,name:`value`,required:!1,type:{name:`string | number`}},id:{defaultValue:{value:``},description:`Pass an id`,name:`id`,required:!1,type:{name:`string`}},placeholder:{defaultValue:{value:``},description:`Pass a placeholder`,name:`placeholder`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Render a disabled input`,name:`disabled`,required:!1,type:{name:`boolean`}},readOnly:{defaultValue:{value:`false`},description:`Render a readonly input`,name:`readOnly`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:`Whether the field is required`,name:`required`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Whether the field is invalid`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Whether the field is valid`,name:`valid`,required:!1,type:{name:`boolean`}},autoFocus:{defaultValue:{value:`false`},description:`Whether the field receives autofocus`,name:`autoFocus`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Pass a classname. The class name is applied to the internal input element.`,name:`className`,required:!1,type:{name:`string`}},autoComplete:{defaultValue:{value:`off`},description:`Pass a valid autocomplete value. We do not police validity.`,name:`autoComplete`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Pass a change handler`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLInputElement>`}},onFocus:{defaultValue:null,description:`Pass a focus handler`,name:`onFocus`,required:!1,type:{name:`FocusEventHandler<HTMLInputElement>`}},onBlur:{defaultValue:null,description:`Pass a blur handler`,name:`onBlur`,required:!1,type:{name:`FocusEventHandler<HTMLInputElement>`}},type:{defaultValue:null,description:`Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers.`,name:`type`,required:!1,type:{name:`enum`,value:[{value:`"number"`},{value:`"text"`},{value:`"tel"`},{value:`"url"`},{value:`"email"`},{value:`"password"`}]}},label:{defaultValue:null,description:`The label of the input`,name:`label`,required:!1,type:{name:`string`}},helptext:{defaultValue:{value:``},description:`A helptext to render to explain meaning and significance of the TextInput`,name:`helptext`,required:!1,type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},description:`A text to render when the TextInput was successfully validated`,name:`successtext`,required:!1,type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},description:`A text to render when the TextInput has an error or could not be validated`,name:`errortext`,required:!1,type:{name:`ReactNode`}},width:{defaultValue:{value:`full`},description:`The width of the text input. Either 'full' (default) or 'auto'.`,name:`width`,required:!1,type:{name:`enum`,value:[{value:`"auto"`},{value:`"full"`}]}},wrapperClassName:{defaultValue:{value:``},description:`Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{b as t};