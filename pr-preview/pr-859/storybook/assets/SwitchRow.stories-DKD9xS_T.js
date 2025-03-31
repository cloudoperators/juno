import{j as a}from"./jsx-runtime-BP6H2k8O.js";import{r as t}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{L as Ce,F as T}from"./FormHint.component-9UgkrTjy.js";import{I as _}from"./Icon.component-D0Qkx-jp.js";import{F as Ne}from"./FormRow.component-BhZ3pkef.js";import{w as ke}from"./withDeprecationWarning.component-xP4XCk2p.js";import"./widgets-BR6-ubtP.js";const Re=`
	jn-flex
	jn-flex-row
	jn-items-center
`,Ve=`
	jn-rounded-full
	jn-relative
	jn-p-0
	jn-leading-0
	jn-border
	jn-g-theme-default
	focus:jn-outline-none
	focus:jn-ring-2
	focus:jn-ring-theme-focus
	disabled:jn-opacity-50
	disabled:jn-cursor-not-allowed
`,We=l=>{switch(l){case"small":return"jn-w-[1.75rem] jn-h-4";case"large":return"jn-w-[3.125rem] jn-h-[1.6875rem]";default:return"jn-w-switch-default jn-h-switch-default"}},Ee=`
	jn-inline-block
	jn-absolute
	jn-top-[1px]
	jn-rounded-full
	jn-bg-theme-switch-handle
	jn-border-theme-default
`,Ie=l=>{switch(l){case"small":return"jn-w-[0.75rem] jn-h-[0.75rem]";case"large":return"jn-w-[1.4375rem] jn-h-[1.4375rem]";default:return"jn-w-switch-handle-default jn-h-switch-handle-default"}},Te=`
	jn-border-theme-switch-default
`,De=`
	jn-border-theme-error
`,Pe=`
	jn-border-theme-success
`,$e=`
	jn-right-[1px] 
	jn-bg-theme-switch-handle-checked
`,Oe=`
	jn-left-[1px]
`,F=`
	jn-inline-block 
	jn-ml-1 
	jn-leading-1
	jn-mt-[-.2rem]
`,D=`
	jn-mt-0
`,P=({name:l="",id:N=null,label:k=void 0,required:R=!1,size:r="default",on:o=!1,disabled:i=null,invalid:p=!1,valid:f=!1,helptext:d="",errortext:n="",successtext:s="",className:V="",onChange:h=void 0,onClick:m=void 0,wrapperClassName:ge="",...be})=>{const c=u=>!(typeof u=="string"&&u.trim().length===0),ye=()=>"juno-switch-"+t.useId(),[W,O]=t.useState(o),[E,Se]=t.useState(!1),[I,je]=t.useState(!1);t.useEffect(()=>{O(o)},[o]);const H=t.useMemo(()=>p||!!(n&&c(n)),[p,n]),A=t.useMemo(()=>f||!!(s&&c(s)),[f,s]);t.useEffect(()=>{Se(H)},[H]),t.useEffect(()=>{je(A)},[A]);const qe=u=>{O(!W),m&&m(u),h&&h(u)},L=N||ye();return a.jsxs("div",{children:[a.jsxs("span",{className:`
				juno-switch-wrapper 
				${Re}
        ${ge}
				`,children:[a.jsx("button",{type:"button",role:"switch",name:l,id:L,"aria-checked":W,disabled:i,onClick:qe,className:`
						juno-switch 
						juno-switch-${r} 
						${Ve} 
						${We(r)} 
						${E?"juno-switch-invalid "+De:""} 
						${I?"juno-switch-valid "+Pe:""} 
						${I||E?"":Te} 
						${V}`,...be,children:a.jsx("span",{className:`juno-switch-handle ${Ee} ${Ie(r)} ${W?$e:Oe}`})}),a.jsx(Ce,{text:k,htmlFor:L,className:"jn-ml-2",disabled:i,required:R}),E?a.jsx(_,{icon:"dangerous",color:"jn-text-theme-error",size:"1.125rem",className:`${F} ${i?"jn-opacity-50":""}`}):"",I?a.jsx(_,{icon:"checkCircle",color:"jn-text-theme-success",size:"1.125rem",className:`${F} ${i?"jn-opacity-50":""}`}):""]}),n&&c(n)?a.jsx(T,{text:n,variant:"error",className:`${D}`}):"",s&&c(s)?a.jsx(T,{text:s,variant:"success",className:`${D}`}):"",d&&c(d)?a.jsx(T,{text:d,className:`${D}`}):""]})};P.propTypes={name:e.string,id:e.string,label:e.string,required:e.bool,size:e.oneOf(["small","default","large"]),on:e.bool,disabled:e.bool,invalid:e.bool,valid:e.bool,helptext:e.node,errortext:e.node,successtext:e.node,className:e.string,onChange:e.func,onClick:e.func,wrapperClassName:e.string};P.__docgenInfo={description:"A Switch/Toggle component",methods:[],displayName:"Switch",props:{name:{defaultValue:{value:'""',computed:!1},description:"Name attribute",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},label:{defaultValue:{value:"undefined",computed:!0},description:"Add a label to the Switch",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is required",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"default"',computed:!1},description:"Leave empty for default size",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"default"',computed:!1},{value:'"large"',computed:!1}]},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"Pass checked state for initial rendering.",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disabled switch",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is valid",type:{name:"bool"},required:!1},helptext:{defaultValue:{value:'""',computed:!1},description:"A helptext to render to explain meaning and significance of the Switch",type:{name:"node"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch was successfully validated",type:{name:"node"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"A text to render when the Switch has an error or could not be validated",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className. The class name is applied to the internal button element.",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler",type:{name:"func"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1}}};const $=({name:l=null,label:N=null,id:k=null,on:R=!1,disabled:r=null,helptext:o=null,required:i=null,invalid:p=!1,errortext:f="",valid:d=!1,successtext:n="",className:s="",onChange:V=void 0,onClick:h=void 0,...m})=>a.jsx(Ne,{children:a.jsx(P,{name:l,label:N,onChange:V,onClick:h,id:k,on:R,disabled:r,invalid:p,required:i,valid:d,errortext:f,helptext:o,successtext:n,className:s,...m})});$.propTypes={name:e.string,label:e.string,id:e.string,on:e.bool,disabled:e.bool,helptext:e.node,required:e.bool,invalid:e.bool,errortext:e.string,valid:e.bool,successtext:e.string,className:e.string,onChange:e.func,onClick:e.func};const He=ke($,"SwitchRow is deprecated and will be removed in future versions. To be future-proof, use Switch instead.");$.__docgenInfo={description:"DEPRECATED: A Switch input row containing a switch, associated label, and structural markup. This component is DEPRECATED, use Switch instead.",methods:[],displayName:"SwitchRow",props:{name:{defaultValue:{value:"null",computed:!1},description:"Name attribute of the checkbox element",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Label text",type:{name:"string"},required:!1},id:{defaultValue:{value:"null",computed:!1},description:"Id",type:{name:"string"},required:!1},on:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch inside the row is on",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disabled",type:{name:"bool"},required:!1},helptext:{defaultValue:{value:"null",computed:!1},description:"Help text",type:{name:"node"},required:!1},required:{defaultValue:{value:"null",computed:!1},description:"Specify whether the Switch is required",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is invalid",type:{name:"bool"},required:!1},errortext:{defaultValue:{value:'""',computed:!1},description:"Pass an error text to display when the Switch is invalid. When passed, the Switch will be set to invalid automatically.",type:{name:"string"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Switch is valid",type:{name:"bool"},required:!1},successtext:{defaultValue:{value:'""',computed:!1},description:"Pass a text to display upon successful validation. Will set the Switch to valid automatically.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},onChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a change handler to the Switch",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Pass a click handler to the Switch",type:{name:"func"},required:!1}}};const Je={title:"Deprecated/SwitchRow",component:He,parameters:{docs:{description:{component:"DEPRECATED: A Switch input row containing a switch, associated label, and structural markup. This component is DEPRECATED, use Switch instead. "}}},argTypes:{}},w={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Default Switch Row"}},v={args:{name:"",id:"",disabled:!1,helptext:"",required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"On Switch Row",on:!0}},x={args:{name:"",id:"",helptext:"",required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Disabled Switch Row",on:!0,disabled:!0}},g={args:{name:"",id:"",disabled:!1,required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Switch Row with Helptext",on:!0,helptext:"Oh so helpful helptext"}},b={args:{name:"",id:"",disabled:!1,required:null,invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Switch Row with Helptext",on:!0,helptext:a.jsxs(a.Fragment,{children:["Helptext with a ",a.jsx("a",{href:"#",children:"Link"})]})}},y={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",invalid:!1,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Required Switch",required:!0}},S={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",required:null,errortext:"",valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Invalid Switch",invalid:!0}},j={args:{name:"",id:"",on:!1,disabled:!1,required:null,invalid:!1,valid:!1,successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Input Row with Error Text",helptext:"Oh so helpful helptext",errortext:"When passed an errortext prop, the SwitchRow will be set to invalid automatically."},parameters:{docs:{description:{story:"Passing an `errortext` prop to the SwitchRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well."}}}},q={args:{name:"",id:"",on:!1,disabled:!1,helptext:"",required:null,invalid:!1,errortext:"",successtext:"",className:"",onChange:void 0,onClick:void 0,label:"Valid Switch",valid:!0}},C={args:{name:"",id:"",on:!1,disabled:!1,required:null,invalid:!1,errortext:"",valid:!1,className:"",onChange:void 0,onClick:void 0,label:"Input Row with Success Text",helptext:"Oh so helpful helptext",successtext:"When passed a successtext prop, the SwitchRow will be set to valid automatically."},parameters:{docs:{description:{story:"Passing a `successtext` prop to the SwitchRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well."}}}};var z,M,B;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    on: false,
    disabled: false,
    helptext: "",
    required: null,
    invalid: false,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Default Switch Row"
  }
}`,...(B=(M=w.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    disabled: false,
    helptext: "",
    required: null,
    invalid: false,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "On Switch Row",
    on: true
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    helptext: "",
    required: null,
    invalid: false,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Disabled Switch Row",
    on: true,
    disabled: true
  }
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    disabled: false,
    required: null,
    invalid: false,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Switch Row with Helptext",
    on: true,
    helptext: "Oh so helpful helptext"
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    disabled: false,
    required: null,
    invalid: false,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Switch Row with Helptext",
    on: true,
    helptext: <>
        Helptext with a <a href="#">Link</a>
      </>
  }
}`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,le,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    on: false,
    disabled: false,
    helptext: "",
    invalid: false,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Required Switch",
    required: true
  }
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var re,oe,de;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    on: false,
    disabled: false,
    helptext: "",
    required: null,
    errortext: "",
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Invalid Switch",
    invalid: true
  }
}`,...(de=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,ue,pe;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    on: false,
    disabled: false,
    required: null,
    invalid: false,
    valid: false,
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Input Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the SwitchRow will be set to invalid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing an \`errortext\` prop to the SwitchRow component will automatically invalidate it, so there is no need to explicitly set \`invalid\` as well."
      }
    }
  }
}`,...(pe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,he,me;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    on: false,
    disabled: false,
    helptext: "",
    required: null,
    invalid: false,
    errortext: "",
    successtext: "",
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Valid Switch",
    valid: true
  }
}`,...(me=(he=q.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var we,ve,xe;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    name: "",
    id: "",
    on: false,
    disabled: false,
    required: null,
    invalid: false,
    errortext: "",
    valid: false,
    className: "",
    onChange: undefined,
    onClick: undefined,
    label: "Input Row with Success Text",
    helptext: "Oh so helpful helptext",
    successtext: "When passed a successtext prop, the SwitchRow will be set to valid automatically."
  },
  parameters: {
    docs: {
      description: {
        story: "Passing a \`successtext\` prop to the SwitchRow component will automatically set it to valid, so there is no need to explicitly set \`valid\` as well."
      }
    }
  }
}`,...(xe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};const Ke=["Default","On","Disabled","WithHelptext","WithHelptextWithLink","Required","Invalid","WithErrorText","Valid","WithSuccessText"];export{w as Default,x as Disabled,S as Invalid,v as On,y as Required,q as Valid,j as WithErrorText,g as WithHelptext,b as WithHelptextWithLink,C as WithSuccessText,Ke as __namedExportsOrder,Je as default};
