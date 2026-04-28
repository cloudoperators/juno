import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";import{t as i}from"./Label.component-3mysfpZZ.js";import"./Label-BqZqxTuH.js";import{t as a}from"./FormHint.component-DOXQVwyU.js";var o=e(t()),s=n(),c=`
  jn:inline-block
  jn:relative
`,l=`
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
`,u=`
  jn:border-theme-textinput-default
`,d=`
  jn:border-theme-error
`,f=`
  jn:border-theme-success
`,p=`
  jn:pt-[1.125rem] 
  jn:pb-1
`,m=`
  jn:py-4
`,h=`
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
  jn:pr-4
  jn:bg-theme-textinput
`,ee=`
  jn:inline-flex
  jn:absolute
  jn:top-[.4rem]
  jn:right-3
`,g=`
  jn:opacity-50
`,_=`
  jn:mt-0
`,v=({name:e,value:t=``,id:n=``,placeholder:v=``,disabled:y=!1,readOnly:b=!1,required:x=!1,invalid:S=!1,valid:C=!1,autoFocus:w=!1,className:T=``,autoComplete:E=`off`,helptext:D=``,successtext:O=``,errortext:k=``,onChange:A,onFocus:j,onBlur:M,label:N,width:P=`full`,wrapperClassName:F=``,...I})=>{let L=e=>!(typeof e==`string`&&e.trim().length===0),R=()=>`juno-textarea-`+(0,o.useId)(),z=(0,o.useRef)(null),[B,V]=(0,o.useState)(``),[H,U]=(0,o.useState)(!1),[W,G]=(0,o.useState)(!1),[K,q]=(0,o.useState)(!1);(0,o.useEffect)(()=>{document.hasFocus()&&z.current&&z.current.contains(document.activeElement)&&U(!0)},[]),(0,o.useEffect)(()=>{V(t.toString())},[t]);let J=(0,o.useMemo)(()=>S||!!(k&&L(k)),[S,k]),Y=(0,o.useMemo)(()=>C||!!(O&&L(O)),[C,O]);(0,o.useEffect)(()=>{G(J)},[J]),(0,o.useEffect)(()=>{q(Y)},[Y]);let X=e=>{V(e.target.value),A&&A(e)},Z=e=>{U(!0),j&&j(e)},Q=e=>{U(!1),M&&M(e)},te=({disabled:e})=>K||W?(0,s.jsxs)(`div`,{className:`juno-textinput-row-icon-container ${ee} ${e?g:``}`,children:[W?(0,s.jsx)(r,{icon:`dangerous`,color:`jn:text-theme-error`}):null,K?(0,s.jsx)(r,{icon:`checkCircle`,color:`jn:text-theme-success`}):null]}):``,$=n||R();return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`
          juno-textarea-wrapper 
          ${c}
          ${P==`auto`?`jn:inline-block`:`jn:block`}
          ${P==`auto`?`jn:w-auto`:`jn:w-full`}
          ${F}
        `,children:[N&&N.length?(0,s.jsx)(i,{text:N,htmlFor:$,className:`${h}`,disabled:y,required:x,floating:!0,minimized:!!(v||H||B&&B.length)}):``,(0,s.jsx)(`textarea`,{name:e,autoComplete:E,value:B,id:$,ref:z,placeholder:v,disabled:y,readOnly:b,autoFocus:w,onChange:X,onFocus:Z,onBlur:Q,className:`juno-textarea 
            ${l}
            ${N?p:m}
            ${W?`juno-textarea-invalid `+d:``} 
            ${K?`juno-textarea-valid `+f:``}  
            ${K||W?``:u} 
            ${P==`auto`?`jn:w-auto`:`jn:w-full`}
            ${T}
          `,...I}),(0,s.jsx)(te,{disabled:y})]}),k&&L(k)?(0,s.jsx)(a,{text:k,variant:`error`,className:`${_}`}):``,O&&L(O)?(0,s.jsx)(a,{text:O,variant:`success`,className:`${_}`}):``,D&&L(D)?(0,s.jsx)(a,{text:D,className:`${_}`}):``]})};try{v.displayName=`Textarea`,v.__docgenInfo={description:`A controlled Text Input.
Also covers email, telephone, password, URL derivatives.`,displayName:`Textarea`,props:{name:{defaultValue:null,description:`Pass a name attribute`,name:`name`,required:!1,type:{name:`string`}},label:{defaultValue:null,description:`The label of the textarea`,name:`label`,required:!1,type:{name:`string`}},value:{defaultValue:{value:``},description:`Pass a value`,name:`value`,required:!1,type:{name:`string | number`}},id:{defaultValue:{value:``},description:`Pass an id`,name:`id`,required:!1,type:{name:`string`}},placeholder:{defaultValue:{value:``},description:`Pass a placeholder`,name:`placeholder`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Render a disabled input`,name:`disabled`,required:!1,type:{name:`boolean`}},readOnly:{defaultValue:{value:`false`},description:`Render a readonly input`,name:`readOnly`,required:!1,type:{name:`boolean`}},required:{defaultValue:{value:`false`},description:`Whether the field is required`,name:`required`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Whether the field is invalid`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Whether the field is valid`,name:`valid`,required:!1,type:{name:`boolean`}},autoFocus:{defaultValue:{value:`false`},description:`Whether the field receives autofocus`,name:`autoFocus`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Pass a classname. The class name is applied to the internal textarea element.`,name:`className`,required:!1,type:{name:`string`}},autoComplete:{defaultValue:{value:`off`},description:`Pass a valid autocomplete value. We do not police validity.`,name:`autoComplete`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Pass a change handler`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLTextAreaElement>`}},onFocus:{defaultValue:null,description:`Pass a focus handler`,name:`onFocus`,required:!1,type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},onBlur:{defaultValue:null,description:`Pass a blur handler`,name:`onBlur`,required:!1,type:{name:`FocusEventHandler<HTMLTextAreaElement>`}},helptext:{defaultValue:{value:``},description:`A helptext to render to explain meaning and significance of the Textarea`,name:`helptext`,required:!1,type:{name:`ReactNode`}},successtext:{defaultValue:{value:``},description:`A text to render when the Textarea was successfully validated`,name:`successtext`,required:!1,type:{name:`ReactNode`}},errortext:{defaultValue:{value:``},description:`A text to render when the Textarea has an error or could not be validated`,name:`errortext`,required:!1,type:{name:`ReactNode`}},width:{defaultValue:{value:`full`},description:`The width of the textarea. Either 'full' (default) or 'auto'.`,name:`width`,required:!1,type:{name:`enum`,value:[{value:`"auto"`},{value:`"full"`}]}},wrapperClassName:{defaultValue:{value:``},description:`Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{v as t};