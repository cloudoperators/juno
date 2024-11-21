import{_ as v,S as fe,a as j,L as pe,I as ce,F as E}from"./Shell-owiVqkgI.js";import{R as n,r as l}from"./index-C2d5MlUf.js";var Oe=function(e){var t=e.children,o=t===void 0?null:t,a=e.className,c=a===void 0?"":a,i=v(e,["children","className"]);return n.createElement(fe,j({gap:"2",distribution:"end",className:"juno-button-row ".concat(c)},i),o)},be=`
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`,he=`
	jn-ml-auto
`,De=function(e){var t=e.search,o=e.className,a=o===void 0?"":o,c=e.children,i=c===void 0?null:c,s=v(e,["search","className","children"]);return n.createElement("div",j({className:"juno-datagrid-toolbar ".concat(be," ").concat(a)},s),t&&n.createElement("div",null,t),n.createElement("div",{className:he},i))},xe=`
  jn-mb-8
`,ye=`
  jn-text-2xl
  jn-font-bold
  jn-mb-4
`,Me=function(e){var t=e.title,o=t===void 0?"":t,a=e.className,c=a===void 0?"":a,i=e.children,s=v(e,["title","className","children"]);return n.createElement("form",j({className:"juno-form ".concat(xe," ").concat(c)},s),o?n.createElement("h1",{className:"juno-form-heading ".concat(ye)},o):null,i)},Ne=`
  jn-mb-2
`,ze=function(e){var t=e.children,o=e.className,a=o===void 0?"":o,c=v(e,["children","className"]);return n.createElement("div",j({className:"juno-form-row ".concat(Ne," ").concat(a)},c),t)},ge=`
    jn-mb-8
    jn-last:mb-0
`,Ee=`
    jn-text-lg
    jn-font-bold
    jn-mb-4
`,Ge=function(e){var t=e.title,o=t===void 0?"":t,a=e.children,c=e.className,i=c===void 0?"":c,s=v(e,["title","children","className"]);return n.createElement("section",j({className:"juno-form-section ".concat(ge," ").concat(i)},s),o?n.createElement("h1",{className:"juno-formsection-heading ".concat(Ee)},o):null,a)},Se=`
  jn-bg-theme-textinput
  jn-text-theme-textinput
  jn-border
  jn-text-base
  jn-leading-4
  jn-px-4
  jn-h-textinput
  jn-rounded-3px
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
  disabled:jn-opacity-50
  autofill:jn-bg-theme-textinput-autofill
  autofill:jn-text-theme-textinput-autofill
  peer
`,we=`
  jn-border-theme-textinput-default
`,Fe=`
  jn-border-theme-error
`,Ce=`
  jn-border-theme-success
`,Be=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,ke=`
  jn-py-4
`,Re=`
  jn-inline-block
  jn-relative
`,_e=`
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`,Ie=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,Le=`
  jn-opacity-50
`,S=`
  jn-mt-0
`,He=function(e){var t=e.value,o=t===void 0?"":t,a=e.id,c=a===void 0?"":a,i=e.name,s=i===void 0?void 0:i,w=e.placeholder,F=w===void 0?"":w,C=e.disabled,h=C!==void 0&&C,B=e.readOnly,k=e.required,R=e.invalid,_=R!==void 0&&R,I=e.valid,L=I!==void 0&&I,T=e.autoFocus,q=e.className,le=q===void 0?"":q,O=e.autoComplete,re=O===void 0?"off":O,D=e.helptext,x=D===void 0?"":D,M=e.successtext,u=M===void 0?"":M,z=e.errortext,d=z===void 0?"":z,G=e.onChange,H=G===void 0?void 0:G,W=e.onFocus,A=W===void 0?void 0:W,J=e.onBlur,K=J===void 0?void 0:J,P=e.type,ie=P===void 0?void 0:P,Q=e.label,f=Q===void 0?void 0:Q,U=e.width,y=U===void 0?"full":U,V=e.wrapperClassName,se=V===void 0?"":V,ue=v(e,["value","id","name","placeholder","disabled","readOnly","required","invalid","valid","autoFocus","className","autoComplete","helptext","successtext","errortext","onChange","onFocus","onBlur","type","label","width","wrapperClassName"]),m=function(r){return typeof r!="string"||r.trim().length!==0},X=l.useRef(null),Y=l.useState(""),N=Y[0],Z=Y[1],$=l.useState(!1),de=$[0],g=$[1],ee=l.useState(!1),p=ee[0],me=ee[1],ne=l.useState(!1),b=ne[0],ve=ne[1];l.useEffect(function(){document.hasFocus()&&X.current.contains(document.activeElement)&&g(!0)},[]),l.useEffect(function(){Z(o)},[o]);var te=l.useMemo(function(){return _||!!(d&&m(d))},[_,d]),oe=l.useMemo(function(){return L||!!(u&&m(u))},[L,u]);l.useEffect(function(){me(te)},[te]),l.useEffect(function(){ve(oe)},[oe]);var ae=c||function(){return"juno-textinput-"+l.useId()}();return n.createElement("div",null,n.createElement("span",{className:`
          juno-textinput-wrapper 
          `.concat(Re,`
          `).concat(y=="auto"?"jn-inline-block":"jn-block",`
          `).concat(y=="auto"?"jn-w-auto":"jn-w-full",`
          `).concat(se,`
          `)},n.createElement("input",j({type:ie,name:s,autoComplete:re,value:N,id:ae,ref:X,placeholder:F,disabled:h,readOnly:B!==void 0&&B,autoFocus:T!==void 0&&T,onChange:function(r){Z(r.target.value),H&&H(r)},onFocus:function(r){g(!0),A&&A(r)},onBlur:function(r){g(!1),K&&K(r)},className:`juno-textinput 
            `.concat(Se,`
            `).concat(f?Be:ke,`
            `).concat(p?"juno-textinput-invalid "+Fe:"",` 
            `).concat(b?"juno-textinput-valid "+Ce:"",`  
            `).concat(b||p?"":we,` 
            `).concat(y=="auto"?"jn-w-auto":"jn-w-full",`
            `).concat(le,`
          `)},ue)),f&&f.length?n.createElement(pe,{text:f,htmlFor:ae,className:"".concat(_e),disabled:h,required:k!==void 0&&k,floating:!0,minimized:!!(F||de||N&&m(N))}):"",n.createElement(function(r){var je=r.disabled;return b||p?n.createElement("div",{className:"juno-textinput-row-icon-container ".concat(Ie," ").concat(je?Le:"")},p?n.createElement(ce,{icon:"dangerous",color:"jn-text-theme-error"}):null,b?n.createElement(ce,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},{disabled:h})),d&&m(d)?n.createElement(E,{text:d,variant:"error",className:"".concat(S)}):"",u&&m(u)?n.createElement(E,{text:u,variant:"success",className:"".concat(S)}):"",x&&m(x)?n.createElement(E,{text:x,className:"".concat(S)}):"")};export{Oe as B,De as D,Ge as F,He as T,ze as a,Me as b};
