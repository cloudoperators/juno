import{_ as ue,L as de,a as me,I as $,w as p}from"./Shell-CyzAan5D.js";import{r as n,R as o}from"./index-BqX7xkDf.js";var ve=`
  jn-inline-block
  jn-relative
`,je=`
  jn-bg-theme-textinput
  jn-text-theme-textinput
  jn-border
  jn-text-base
  jn-leading-4
  jn-px-4
  jn-rounded-3px
  jn-align-top
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
`,fe=`
  jn-border-theme-textinput-default
`,pe=`
  jn-border-theme-error
`,xe=`
  jn-border-theme-success
`,be=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,he=`
  jn-py-4
`,ge=`
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
  jn-pr-4
  jn-bg-theme-textinput
`,ye=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,Ee=`
  jn-opacity-50
`,x=`
  jn-mt-0
`,Se=function(e){var ee=e.name,b=e.value,h=b===void 0?"":b,g=e.id,ne=g===void 0?"":g,y=e.placeholder,E=y===void 0?"":y,w=e.disabled,u=w!==void 0&&w,N=e.readOnly,S=e.required,C=e.invalid,F=C!==void 0&&C,_=e.valid,k=_!==void 0&&_,L=e.autoFocus,q=e.className,te=q===void 0?"":q,B=e.autoComplete,oe=B===void 0?"off":B,I=e.helptext,d=I===void 0?"":I,O=e.successtext,a=O===void 0?"":O,R=e.errortext,r=R===void 0?"":R,M=e.onChange,T=M===void 0?void 0:M,z=e.onFocus,H=z===void 0?void 0:z,A=e.onBlur,D=A===void 0?void 0:A,G=e.label,l=G===void 0?void 0:G,J=e.width,m=J===void 0?"full":J,K=e.wrapperClassName,ae=K===void 0?"":K,re=ue(e,["name","value","id","placeholder","disabled","readOnly","required","invalid","valid","autoFocus","className","autoComplete","helptext","successtext","errortext","onChange","onFocus","onBlur","label","width","wrapperClassName"]),c=function(t){return typeof t!="string"||t.trim().length!==0},v=n.useRef(null),P=n.useState(""),j=P[0],Q=P[1],U=n.useState(!1),ce=U[0],f=U[1],V=n.useState(!1),i=V[0],le=V[1],W=n.useState(!1),s=W[0],ie=W[1];n.useEffect(function(){document.hasFocus()&&v.current&&v.current.contains(document.activeElement)&&f(!0)},[]),n.useEffect(function(){Q(h.toString())},[h]);var X=n.useMemo(function(){return F||!!(r&&c(r))},[F,r]),Y=n.useMemo(function(){return k||!!(a&&c(a))},[k,a]);n.useEffect(function(){le(X)},[X]),n.useEffect(function(){ie(Y)},[Y]);var Z=ne||function(){return"juno-textarea-"+n.useId()}();return o.createElement("div",null,o.createElement("div",{className:`
          juno-textarea-wrapper 
          `.concat(ve,`
          `).concat(m=="auto"?"jn-inline-block":"jn-block",`
          `).concat(m=="auto"?"jn-w-auto":"jn-w-full",`
          `).concat(ae,`
        `)},l&&l.length?o.createElement(de,{text:l,htmlFor:Z,className:"".concat(ge),disabled:u,required:S!==void 0&&S,floating:!0,minimized:!!(E||ce||j&&j.length)}):"",o.createElement("textarea",me({name:ee,autoComplete:oe,value:j,id:Z,ref:v,placeholder:E,disabled:u,readOnly:N!==void 0&&N,autoFocus:L!==void 0&&L,onChange:function(t){Q(t.target.value),T&&T(t)},onFocus:function(t){f(!0),H&&H(t)},onBlur:function(t){f(!1),D&&D(t)},className:`juno-textarea 
            `.concat(je,`
            `).concat(l?be:he,`
            `).concat(i?"juno-textarea-invalid "+pe:"",` 
            `).concat(s?"juno-textarea-valid "+xe:"",`  
            `).concat(s||i?"":fe,` 
            `).concat(m=="auto"?"jn-w-auto":"jn-w-full",`
            `).concat(te,`
          `)},re)),o.createElement(function(t){var se=t.disabled;return s||i?o.createElement("div",{className:"juno-textinput-row-icon-container ".concat(ye," ").concat(se?Ee:"")},i?o.createElement($,{icon:"dangerous",color:"jn-text-theme-error"}):null,s?o.createElement($,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},{disabled:u})),r&&c(r)?o.createElement(p,{text:r,variant:"error",className:"".concat(x)}):"",a&&c(a)?o.createElement(p,{text:a,variant:"success",className:"".concat(x)}):"",d&&c(d)?o.createElement(p,{text:d,className:"".concat(x)}):"")};export{Se as T};
