import{_ as N,S as je,a as w,L as fe,I as le,w as g}from"./Shell-8UBZt_SQ.js";import{R as n,r as t}from"./index-v1oisd-W.js";var Ie=function(e){var a=e.children,l=a===void 0?null:a,c=e.className,i=c===void 0?"":c,r=N(e,["children","className"]);return n.createElement(je,w({gap:"2",distribution:"end",className:"juno-button-row ".concat(i)},r),l)},be=`
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`,xe=`
	jn-ml-auto
`,Le=function(e){var a=e.search,l=e.className,c=l===void 0?"":l,i=e.children,r=i===void 0?null:i,j=N(e,["search","className","children"]);return n.createElement("div",w({className:"juno-datagrid-toolbar ".concat(be," ").concat(c)},j),a&&n.createElement("div",null,a),n.createElement("div",{className:xe},r))},he=`
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
`,ye=`
  jn-border-theme-textinput-default
`,ge=`
  jn-border-theme-error
`,Ee=`
  jn-border-theme-success
`,Ne=`
  jn-pt-[1.125rem] 
  jn-pb-1
`,we=`
  jn-py-4
`,Se=`
  jn-inline-block
  jn-relative
`,Ce=`
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`,Fe=`
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`,ke=`
  jn-opacity-50
`,E=`
  jn-mt-0
`,Re=function(e){var a=e.value,l=a===void 0?"":a,c=e.id,i=c===void 0?"":c,r=e.name,j=r===void 0?void 0:r,S=e.placeholder,C=S===void 0?"":S,F=e.disabled,f=F!==void 0&&F,k=e.readOnly,B=e.required,_=e.invalid,I=_!==void 0&&_,L=e.valid,R=L!==void 0&&L,q=e.autoFocus,O=e.className,ce=O===void 0?"":O,T=e.autoComplete,ie=T===void 0?"off":T,D=e.helptext,b=D===void 0?"":D,M=e.successtext,s=M===void 0?"":M,z=e.errortext,u=z===void 0?"":z,G=e.onChange,H=G===void 0?void 0:G,W=e.onFocus,A=W===void 0?void 0:W,J=e.onBlur,K=J===void 0?void 0:J,P=e.type,re=P===void 0?void 0:P,Q=e.label,m=Q===void 0?void 0:Q,U=e.width,x=U===void 0?"full":U,V=e.wrapperClassName,se=V===void 0?"":V,ue=N(e,["value","id","name","placeholder","disabled","readOnly","required","invalid","valid","autoFocus","className","autoComplete","helptext","successtext","errortext","onChange","onFocus","onBlur","type","label","width","wrapperClassName"]),d=function(o){return typeof o!="string"||o.trim().length!==0},X=t.useRef(null),Y=t.useState(""),h=Y[0],Z=Y[1],$=t.useState(!1),de=$[0],y=$[1],ee=t.useState(!1),v=ee[0],me=ee[1],ne=t.useState(!1),p=ne[0],ve=ne[1];t.useEffect(function(){document.hasFocus()&&X.current.contains(document.activeElement)&&y(!0)},[]),t.useEffect(function(){Z(l)},[l]);var te=t.useMemo(function(){return I||!!(u&&d(u))},[I,u]),oe=t.useMemo(function(){return R||!!(s&&d(s))},[R,s]);t.useEffect(function(){me(te)},[te]),t.useEffect(function(){ve(oe)},[oe]);var ae=i||function(){return"juno-textinput-"+t.useId()}();return n.createElement("div",null,n.createElement("span",{className:`
          juno-textinput-wrapper 
          `.concat(Se,`
          `).concat(x=="auto"?"jn-inline-block":"jn-block",`
          `).concat(x=="auto"?"jn-w-auto":"jn-w-full",`
          `).concat(se,`
          `)},n.createElement("input",w({type:re,name:j,autoComplete:ie,value:h,id:ae,ref:X,placeholder:C,disabled:f,readOnly:k!==void 0&&k,autoFocus:q!==void 0&&q,onChange:function(o){Z(o.target.value),H&&H(o)},onFocus:function(o){y(!0),A&&A(o)},onBlur:function(o){y(!1),K&&K(o)},className:`juno-textinput 
            `.concat(he,`
            `).concat(m?Ne:we,`
            `).concat(v?"juno-textinput-invalid "+ge:"",` 
            `).concat(p?"juno-textinput-valid "+Ee:"",`  
            `).concat(p||v?"":ye,` 
            `).concat(x=="auto"?"jn-w-auto":"jn-w-full",`
            `).concat(ce,`
          `)},ue)),m&&m.length?n.createElement(fe,{text:m,htmlFor:ae,className:"".concat(Ce),disabled:f,required:B!==void 0&&B,floating:!0,minimized:!!(C||de||h&&d(h))}):"",n.createElement(function(o){var pe=o.disabled;return p||v?n.createElement("div",{className:"juno-textinput-row-icon-container ".concat(Fe," ").concat(pe?ke:"")},v?n.createElement(le,{icon:"dangerous",color:"jn-text-theme-error"}):null,p?n.createElement(le,{icon:"checkCircle",color:"jn-text-theme-success"}):null):""},{disabled:f})),u&&d(u)?n.createElement(g,{text:u,variant:"error",className:"".concat(E)}):"",s&&d(s)?n.createElement(g,{text:s,variant:"success",className:"".concat(E)}):"",b&&d(b)?n.createElement(g,{text:b,className:"".concat(E)}):"")};export{Ie as B,Le as D,Re as T};
