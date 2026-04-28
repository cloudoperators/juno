import{g as e}from"./iframe-DaLLswkI.js";import{t}from"./Icon.component-q7FNz7wU.js";import"./Icon-aVEdnVJP.js";import{t as n}from"./Label.component-CaYvNWRj.js";import"./Label-BRbTMc3t.js";import{t as r}from"./FormHint.component-vvCeP4tD.js";import{useEffect as i,useId as a,useMemo as o,useRef as s,useState as c}from"react";var l=e(),u=`
  jn:inline-block
  jn:relative
`,d=`
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
`,f=`
  jn:border-theme-textinput-default
`,p=`
  jn:border-theme-error
`,m=`
  jn:border-theme-success
`,h=`
  jn:pt-[1.125rem] 
  jn:pb-1
`,g=`
  jn:py-4
`,_=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
`,v=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,y=`
  jn:opacity-50
`,b=`
  jn:mt-0
`,x=({name:e,value:x=``,id:S=``,placeholder:C=``,disabled:w=!1,readOnly:T=!1,required:E=!1,invalid:D=!1,valid:O=!1,autoFocus:k=!1,className:ee=``,autoComplete:te=`off`,helptext:A=``,successtext:j=``,errortext:M=``,onChange:N,onFocus:P,onBlur:F,label:I,width:L=`full`,wrapperClassName:R=``,...z})=>{let B=e=>!(typeof e==`string`&&e.trim().length===0),V=()=>`juno-textarea-`+a(),H=s(null),[U,W]=c(``),[G,K]=c(!1),[q,J]=c(!1),[Y,X]=c(!1);i(()=>{document.hasFocus()&&H.current&&H.current.contains(document.activeElement)&&K(!0)},[]),i(()=>{W(x.toString())},[x]);let Z=o(()=>D||!!(M&&B(M)),[D,M]),Q=o(()=>O||!!(j&&B(j)),[O,j]);i(()=>{J(Z)},[Z]),i(()=>{X(Q)},[Q]);let ne=e=>{W(e.target.value),N&&N(e)},re=e=>{K(!0),P&&P(e)},ie=e=>{K(!1),F&&F(e)},ae=({disabled:e})=>Y||q?(0,l.jsxs)(`div`,{className:`juno-textinput-row-icon-container ${v} ${e?y:``}`,children:[q?(0,l.jsx)(t,{icon:`dangerous`,color:`jn:text-theme-error`}):null,Y?(0,l.jsx)(t,{icon:`checkCircle`,color:`jn:text-theme-success`}):null]}):``,$=S||V();return(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{className:`
          juno-textarea-wrapper 
          ${u}
          ${L==`auto`?`jn:inline-block`:`jn:block`}
          ${L==`auto`?`jn:w-auto`:`jn:w-full`}
          ${R}
        `,children:[I&&I.length?(0,l.jsx)(n,{text:I,htmlFor:$,className:`${_}`,disabled:w,required:E,floating:!0,minimized:!!(C||G||U&&U.length)}):``,(0,l.jsx)(`textarea`,{name:e,autoComplete:te,value:U,id:$,ref:H,placeholder:C,disabled:w,readOnly:T,autoFocus:k,onChange:ne,onFocus:re,onBlur:ie,className:`juno-textarea 
            ${d}
            ${I?h:g}
            ${q?`juno-textarea-invalid `+p:``} 
            ${Y?`juno-textarea-valid `+m:``}  
            ${Y||q?``:f} 
            ${L==`auto`?`jn:w-auto`:`jn:w-full`}
            ${ee}
          `,...z}),(0,l.jsx)(ae,{disabled:w})]}),M&&B(M)?(0,l.jsx)(r,{text:M,variant:`error`,className:`${b}`}):``,j&&B(j)?(0,l.jsx)(r,{text:j,variant:`success`,className:`${b}`}):``,A&&B(A)?(0,l.jsx)(r,{text:A,className:`${b}`}):``]})};try{x.displayName=`Textarea`,x.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, URL derivatives.`,displayName:`Textarea`,props:{name:{defaultValue:null,description:`Pass a name attribute`,name:`name`,required:!1,type:{name:`string`}},label:{defaultValue:null,description:`The label of the textarea`,name:`label`,required:!1,type:{name:`string`}},value:{defaultValue:{value:``},description:`Pass a value`,name:`value`,required:!1,type:{name:`string | number`}},id:{defaultValue:{value:``},description:`Pass an id`,name:`id`,required:!1,type:{name:`string`}},placeholder:{defaultValue:{value:``},description:`Pass a placeholder`,name:`placeholder`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Render a disabled input`,name:`disabled`,required:!1,type:{name:`boolean`}},readOnly:{defaultValue:{value:`false`},description:`Render a readonly input`,name:`readOnly`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:`Whether the field is required`,name:`required`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Whether the field is invalid`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Whether the field is valid`,name:`valid`,required:!1,type:{name:`boolean`}},autoFocus:{defaultValue:{value:`false`},description:`Whether the field receives autofocus`,name:`autoFocus`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Pass a classname. The class name is applied to the internal textarea element.`,name:`className`,required:!1,type:{name:`string`}},autoComplete:{defaultValue:{value:`off`},description:`Pass a valid autocomplete value. We do not police validity.`,name:`autoComplete`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Pass a change handler`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLTextAreaElement>`}},onFocus:{defaultValue:null,description:`Pass a focus handler`,name:`onFocus`,required:!1,type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},onBlur:{defaultValue:null,description:`Pass a blur handler`,name:`onBlur`,required:!1,type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},helptext:{defaultValue:{value:``},description:`A helptext to render to explain meaning and significance of the Textarea`,name:`helptext`,required:!1,type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},description:`A text to render when the Textarea was successfully validated`,name:`successtext`,required:!1,type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},description:`A text to render when the Textarea has an error or could not be validated`,name:`errortext`,required:!1,type:{name:`ReactNode`}},width:{defaultValue:{value:`full`},description:`The width of the textarea. Either 'full' (default) or 'auto'.`,name:`width`,required:!1,type:{name:`enum`,value:[{value:`"auto"`},{value:`"full"`}]}},wrapperClassName:{defaultValue:{value:``},description:`Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{x as t};