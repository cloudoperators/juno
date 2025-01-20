import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{r as a}from"./index-DysCNOs_.js";import{L as O}from"./Label.component-D1jWKEjF.js";import{I as C}from"./Icon.component-mRvJQXAl.js";import{F as y}from"./FormHint.component-Bac6eIcI.js";const Z=`
	jn-mb-4
	last:jn-mb-0
`,ee=`
	jn-relative
	jn-rounded
	jn-border
	jn-py-1
`,ae=`
	jn-border-transparent
`,te=`
	jn-border-theme-success
	jn-px-2
`,ne=`
	jn-border-theme-error
	jn-px-2
`,L=`
	jn-absolute
	jn-right-2
	jn-top-1.5
`,U=a.createContext({}),P=({children:l=null,className:I="",disabled:r=!1,errortext:t="",helptext:u="",id:S="",invalid:v=!1,label:c="",name:_,onChange:x,required:V=!1,selected:m,successtext:n="",valid:b=!1,...o})=>{const h=s=>!(typeof s=="string"&&s.trim().length===0),i=()=>"juno-radiogroup-"+a.useId(),E=_||i(),j=S||i(),[d,p]=a.useState(m),[g,N]=a.useState(!1),[f,T]=a.useState(!1),q=a.useMemo(()=>b||!!(n&&n.length),[b,n]),R=a.useMemo(()=>v||!!(t&&t.length),[v,t]);a.useEffect(()=>{N(q)},[q]),a.useEffect(()=>{T(R)},[R]),a.useEffect(()=>{m&&p(m)},[m]);const G=s=>{p(s)},w=s=>{p(s),x&&x(s)};return e.jsx(U.Provider,{value:{selectedValue:d,name:E,onChange:w,updateSelectedValue:G,disabled:r},children:e.jsxs("div",{className:`
          juno-radiogroup 
          ${Z} 
          ${g?"juno-radiogroup-valid":""} 
          ${f?"juno-radiogroup-invalid":""} 
          ${I}
        `,id:j,role:"radiogroup",...o,children:[c&&h(c)?e.jsx(O,{text:c,htmlFor:j,disabled:r,required:V}):"",e.jsxs("div",{className:`
            juno-checkbox-group-options 
            ${ee} 
            ${g?te:""} 
            ${f?ne:""} 
            ${g||f?"":ae}
          `,children:[f?e.jsx(C,{icon:"dangerous",color:"jn-text-theme-error",className:`${L}`}):"",g?e.jsx(C,{icon:"checkCircle",color:"jn-text-theme-success",className:`${L}`}):"",l]}),t&&h(t)?e.jsx(y,{text:t,variant:"error"}):"",n&&h(n)?e.jsx(y,{text:n,variant:"success"}):"",u&&h(u)?e.jsx(y,{text:u}):""]})})};try{P.displayName="RadioGroup",P.__docgenInfo={description:"A component to wrap and group individual Radio components: All contained child Radio elements will share the same `name`-attribute passed as a prop to the group, and thus make the Radios work with each other as expected.",displayName:"RadioGroup",props:{children:{defaultValue:{value:"null"},description:"The children of the RadioGroup. Typically, these will be `Radio` components.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether all Radios in the group are disabled",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed.",name:"errortext",required:!1,type:{name:"string"}},helptext:{defaultValue:{value:""},description:"A text to render to further explain meaning and significance of the group",name:"helptext",required:!1,type:{name:"string"}},id:{defaultValue:{value:""},description:"The id of the group. If not passed, RadioGroup will create and use a unique id for the group",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Whether the group not be validated.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"Label for the group of radios as a whole. Passing a label is mandatory in order to denote a selection in the set is required by passing the `required` prop.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of all radios in a group. If not passed, RadioGroup will create and use a unique name identifier for its child Radios",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"An onChange handler to execute when the selected option changes",name:"onChange",required:!1,type:{name:"EventUpdateHandler"}},required:{defaultValue:{value:"false"},description:"Whether a selection on the RadioGroup is required",name:"required",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"The value of the initially selected radio. This will override 'checked' set on any of the child radio elements.",name:"selected",required:!1,type:{name:"string"}},successtext:{defaultValue:{value:""},description:"Text to display in case validation is successful. When passed, will set the whole group to valid.",name:"successtext",required:!1,type:{name:"string"}},valid:{defaultValue:{value:"false"},description:"Whether the RadioGroup was successfully validated",name:"valid",required:!1,type:{name:"boolean"}}}}}catch{}const se=`
  jn-inline-flex
  jn-items-center
`,oe=`
  jn-w-4
  jn-h-4
  jn-opacity-0
  jn-z-50
`,ie=`
  jn-relative
  jn-w-4
  jn-h-4
  jn-rounded-full
  jn-bg-theme-radio
`,le=`
  jn-absolute
  jn-block
  jn-bg-theme-radio-checked
  jn-rounded-full
  jn-w-3
  jn-h-3
  jn-top-[1px]
  jn-left-[1px]
`,re=`
  jn-outline-none
  jn-ring-2
  jn-ring-theme-focus
`,de=`
  jn-opacity-50
  jn-cursor-not-allowed
`,ue=`
  jn-border
  jn-border-transparent
`,ce=`
  jn-border
  jn-border-theme-error
`,pe=`
  jn-border
  jn-border-theme-success
`,fe=`
  jn-leading-0
  jn-ml-2
`,z=`
  jn-ml-1
`,W=`
  jn-mt-0
  jn-ml-6
`,B=({checked:l=!1,className:I="",disabled:r=!1,errortext:t="",helptext:u="",id:S=void 0,invalid:v=!1,label:c=void 0,name:_=void 0,onChange:x=void 0,onClick:V=void 0,required:m=!1,successtext:n="",valid:b=!1,value:o=void 0,...h})=>{const i=k=>!(typeof k=="string"&&k.trim().length===0),E=()=>"juno-radio-"+a.useId(),j=a.useContext(U),{selectedValue:d,onChange:p,name:g,updateSelectedValue:N,disabled:f}=j||{},T=()=>j?d===o:!!l,[q,R]=a.useState(()=>T()),[G,w]=a.useState(!1),[s,D]=a.useState(!1),[$,J]=a.useState(!1),A=a.useMemo(()=>v||!!(t&&i(t)),[v,t]),F=a.useMemo(()=>b||!!(n&&i(n)),[b,n]);a.useEffect(()=>{D(A)},[A]),a.useEffect(()=>{J(F)},[F]),a.useEffect(()=>{l&&j&&d===void 0&&N&&N(o)},[]),a.useEffect(()=>{d||R(l)},[l]);const K=()=>{R(!q),p&&typeof p=="function"&&d!==o&&p(o),x&&x(o)},H=()=>d?d===o:q,Q=k=>{V&&V(k)},X=()=>{w(!0)},Y=()=>{w(!1)},M=S||E();return e.jsxs("div",{className:"jn-radio-outer",children:[e.jsxs("div",{className:`juno-radio-wrapper ${se}`,children:[e.jsxs("div",{className:`
             juno-radio 
             ${ie} 
             ${G?re:""} 
             ${r?de:""} 
             ${s?ce:""} 
             ${$?pe:""} 
             ${s||$?"":ue}
             ${I}
           `,...h,children:[e.jsx("input",{checked:H(),className:`
              ${oe} 
              ${s?"juno-radio-invalid":""} 
              ${$?"juno-radio-valid":""}
            `,disabled:f||r,id:M,onBlur:Y,onChange:K,onClick:Q,onFocus:X,name:g||_,type:"radio",value:o}),H()?e.jsx("span",{className:`${le}`}):""]}),c&&i(c)?e.jsxs(e.Fragment,{children:[e.jsx(O,{className:`${fe}`,disabled:f||r,htmlFor:M,required:m,text:c}),s?e.jsx(C,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`
                    ${z}
                    ${r?"jn-opacity-50":""}
                  `}):"",$?e.jsx(C,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`
                    ${z}
                    ${r?"jn-opacity-50":""}
                  `}):""]}):""]}),t&&i(t)?e.jsx(y,{text:t,variant:"error",className:`${W}`}):"",n&&i(n)?e.jsx(y,{text:n,variant:"success",className:`${W}`}):"",u&&i(u)?e.jsx(y,{text:u,className:`${W}`}):""]})};try{B.displayName="Radio",B.__docgenInfo={description:"A controlled Radio component.",displayName:"Radio",props:{checked:{defaultValue:{value:"false"},description:"Whether the Radio is checked",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the Radio is disabled",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"A text to render when the Radio has an error or could not be validated",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"A helptext to render to explain meaning and significance of the Radio",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:"undefined"},description:"The id of the Radio. An id will be automatically generated if not passed.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Whether the Radio was validated unsuccessfully",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"undefined"},description:"The label of the Radio",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:"The name attribute of the Radio. Only Radios sharing the same name attribute will work together as expected.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"undefined"},description:"Handler to execute when the Radio changes",name:"onChange",required:!1,type:{name:"EventUpdateHandler"}},onClick:{defaultValue:{value:"undefined"},description:"Handler to execute when the Radio is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},required:{defaultValue:{value:"false"},description:"Whether the Radio is required",name:"required",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"A text to render when the Radio was successfully validated",name:"successtext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Whether the Radio was successfully validated",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"undefined"},description:"The value of the Radio",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{P as R,B as a};