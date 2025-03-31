import{j as e}from"./jsx-runtime-BP6H2k8O.js";import{r as a}from"./index-DysCNOs_.js";import{L as O}from"./Label.component-DhLm9IiA.js";import{I as C}from"./Icon.component-D9enpJBw.js";import{F as g}from"./FormHint.component-DtRGMMjY.js";const Z=`
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
`,D=a.createContext({}),P=({children:i,className:I="",disabled:r=!1,errortext:t="",helptext:c="",id:S="",invalid:v=!1,label:p="",name:_,onChange:x,required:V=!1,selected:h,successtext:n="",valid:b=!1,...o})=>{const d=s=>!(typeof s=="string"&&s.trim().length===0),l=()=>"juno-radiogroup-"+a.useId(),E=_||l(),j=S||l(),[u,m]=a.useState(h),[y,N]=a.useState(!1),[f,T]=a.useState(!1),R=a.useMemo(()=>b||!!(n&&d(n)),[b,n]),q=a.useMemo(()=>v||!!(t&&d(t)),[v,t]);a.useEffect(()=>{N(R)},[R]),a.useEffect(()=>{T(q)},[q]),a.useEffect(()=>{h&&m(h)},[h]);const G=s=>{m(s)},w=s=>{m(s),x&&x(s)};return e.jsx(D.Provider,{value:{selectedValue:u,name:E,onChange:w,updateSelectedValue:G,disabled:r},children:e.jsxs("div",{className:`
          juno-radiogroup 
          ${Z} 
          ${y?"juno-radiogroup-valid":""} 
          ${f?"juno-radiogroup-invalid":""} 
          ${I}
        `,id:j,role:"radiogroup",...o,children:[p&&d(p)?e.jsx(O,{text:p,htmlFor:j,disabled:r,required:V}):"",e.jsxs("div",{className:`
            juno-checkbox-group-options 
            ${ee} 
            ${y?te:""} 
            ${f?ne:""} 
            ${y||f?"":ae}
          `,children:[f?e.jsx(C,{icon:"dangerous",color:"jn-text-theme-error",className:`${L}`}):"",y?e.jsx(C,{icon:"checkCircle",color:"jn-text-theme-success",className:`${L}`}):"",i]}),t&&d(t)?e.jsx(g,{text:t,variant:"error"}):"",n&&d(n)?e.jsx(g,{text:n,variant:"success"}):"",c&&d(c)?e.jsx(g,{text:c}):""]})})};try{P.displayName="RadioGroup",P.__docgenInfo={description:"A component to wrap and group individual Radio components: All contained child Radio elements will share the same `name`-attribute passed as a prop to the group, and thus make the Radios work with each other as expected.",displayName:"RadioGroup",props:{children:{defaultValue:null,description:"The children of the RadioGroup. Typically, these will be `Radio` components.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether all Radios in the group are disabled",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"Text to display in case validation failed or there is an error. Will set the whole group to invalid when passed.",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"A text to render to further explain meaning and significance of the group",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:{value:""},description:"The id of the group. If not passed, RadioGroup will create and use a unique id for the group",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Whether the group not be validated.",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"Label for the group of radios as a whole. Passing a label is mandatory in order to denote a selection in the set is required by passing the `required` prop.",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name of all radios in a group. If not passed, RadioGroup will create and use a unique name identifier for its child Radios",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"An onChange handler to execute when the selected option changes",name:"onChange",required:!1,type:{name:"EventUpdateHandler"}},required:{defaultValue:{value:"false"},description:"Whether a selection on the RadioGroup is required",name:"required",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"The value of the initially selected radio. This will override 'checked' set on any of the child radio elements.",name:"selected",required:!1,type:{name:"string"}},successtext:{defaultValue:{value:""},description:"Text to display in case validation is successful. When passed, will set the whole group to valid.",name:"successtext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Whether the RadioGroup was successfully validated",name:"valid",required:!1,type:{name:"boolean"}}}}}catch{}const se=`
  jn-inline-flex
  jn-items-center
`,oe=`
  jn-w-4
  jn-h-4
  jn-opacity-0
  jn-z-50
`,le=`
  jn-relative
  jn-w-4
  jn-h-4
  jn-rounded-full
  jn-bg-theme-radio
`,ie=`
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
`,me=`
  jn-leading-0
  jn-ml-2
`,z=`
  jn-ml-1
`,W=`
  jn-mt-0
  jn-ml-6
`,B=({checked:i=!1,className:I="",disabled:r=!1,errortext:t="",helptext:c="",id:S,invalid:v=!1,label:p,name:_,onChange:x,onClick:V,required:h=!1,successtext:n="",valid:b=!1,value:o="",...d})=>{const l=k=>!(typeof k=="string"&&k.trim().length===0),E=()=>"juno-radio-"+a.useId(),j=a.useContext(D),{selectedValue:u,onChange:m,name:y,updateSelectedValue:N,disabled:f}=j||{},T=()=>j?u===o:!!i,[R,q]=a.useState(()=>T()),[G,w]=a.useState(!1),[s,U]=a.useState(!1),[$,J]=a.useState(!1),A=a.useMemo(()=>v||!!(t&&l(t)),[v,t]),F=a.useMemo(()=>b||!!(n&&l(n)),[b,n]);a.useEffect(()=>{U(A)},[A]),a.useEffect(()=>{J(F)},[F]),a.useEffect(()=>{i&&j&&u===void 0&&N&&N(o)},[]),a.useEffect(()=>{u||q(i)},[i]);const K=()=>{q(!R),m&&typeof m=="function"&&u!==o&&m(o),x&&x(o)},H=()=>u?u===o:R,Q=k=>{V&&V(k)},X=()=>{w(!0)},Y=()=>{w(!1)},M=S||E();return e.jsxs("div",{className:"jn-radio-outer",children:[e.jsxs("div",{className:`juno-radio-wrapper ${se}`,children:[e.jsxs("div",{className:`
             juno-radio 
             ${le} 
             ${G?re:""} 
             ${r?de:""} 
             ${s?ce:""} 
             ${$?pe:""} 
             ${s||$?"":ue}
             ${I}
           `,...d,children:[e.jsx("input",{checked:H(),className:`
              ${oe} 
              ${s?"juno-radio-invalid":""} 
              ${$?"juno-radio-valid":""}
            `,disabled:f||r,id:M,onBlur:Y,onChange:K,onClick:Q,onFocus:X,name:y||_,type:"radio",value:o}),H()?e.jsx("span",{className:`${ie}`}):""]}),p&&l(p)?e.jsxs(e.Fragment,{children:[e.jsx(O,{className:`${me}`,disabled:f||r,htmlFor:M,required:h,text:p}),s?e.jsx(C,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`
                    ${z}
                    ${r?"jn-opacity-50":""}
                  `}):"",$?e.jsx(C,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`
                    ${z}
                    ${r?"jn-opacity-50":""}
                  `}):""]}):""]}),t&&l(t)?e.jsx(g,{text:t,variant:"error",className:`${W}`}):"",n&&l(n)?e.jsx(g,{text:n,variant:"success",className:`${W}`}):"",c&&l(c)?e.jsx(g,{text:c,className:`${W}`}):""]})};try{B.displayName="Radio",B.__docgenInfo={description:"A controlled Radio component.",displayName:"Radio",props:{checked:{defaultValue:{value:"false"},description:"Whether the Radio is checked",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the Radio is disabled",name:"disabled",required:!1,type:{name:"boolean"}},errortext:{defaultValue:{value:""},description:"A text to render when the Radio has an error or could not be validated",name:"errortext",required:!1,type:{name:"ReactNode"}},helptext:{defaultValue:{value:""},description:"A helptext to render to explain meaning and significance of the Radio",name:"helptext",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"The id of the Radio. An id will be automatically generated if not passed.",name:"id",required:!1,type:{name:"string"}},invalid:{defaultValue:{value:"false"},description:"Whether the Radio was validated unsuccessfully",name:"invalid",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"The label of the Radio",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name attribute of the Radio. Only Radios sharing the same name attribute will work together as expected.",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to execute when the Radio changes",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onClick:{defaultValue:null,description:"Handler to execute when the Radio is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},required:{defaultValue:{value:"false"},description:"Whether the Radio is required",name:"required",required:!1,type:{name:"boolean"}},successtext:{defaultValue:{value:""},description:"A text to render when the Radio was successfully validated",name:"successtext",required:!1,type:{name:"ReactNode"}},valid:{defaultValue:{value:"false"},description:"Whether the Radio was successfully validated",name:"valid",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:""},description:"The value of the Radio",name:"value",required:!1,type:{name:"string"}}}}}catch{}export{P as R,B as a};
