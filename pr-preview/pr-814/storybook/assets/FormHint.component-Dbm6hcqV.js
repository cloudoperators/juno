import{j as r}from"./jsx-runtime-D6fbYt3N.js";import{e as f}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";const p=`
	jn-text-theme-high
	jn-text-base
	jn-transform 
	jn-origin-top-left 
	jn-transition-all 
	jn-duration-100 
	jn-ease-in-out
`,h=`
	jn-absolute
`,j=`
	jn-scale-75
	-jn-translate-y-[0.4375rem]
`,b=`
	jn-inline-block
	jn-w-1
	jn-h-1
	jn-rounded-full
	jn-align-top
	jn-ml-1
	jn-mt-2
	jn-bg-theme-required
`,y=`
	jn-opacity-50
	jn-cursor-not-allowed
`,o=f.forwardRef(({text:t="",htmlFor:s=void 0,required:a=!1,className:l="",disabled:n=!1,floating:d=!1,minimized:u=!1,...m},c)=>r.jsxs("label",{className:`
				juno-label 
				${p} 
				${d?"juno-label-floating "+h:""}
				${u?"juno-label-minimized "+j:""}
				${n?"juno-label-disabled "+y:""} 
				${l}
			`,htmlFor:s,ref:c,...m,children:[t,a?r.jsx("span",{className:`
					juno-required 
					${b}
					`}):""]}));o.displayName="Label (JS)";o.propTypes={text:e.string,htmlFor:e.string,required:e.bool,className:e.string,disabled:e.bool,floating:e.bool,minimized:e.bool};o.__docgenInfo={description:"A re-usable Label component",methods:[],displayName:"Label (JS)",props:{text:{defaultValue:{value:'""',computed:!1},description:"Pass a string of text to be rendered as contents. Required.",type:{name:"string"},required:!1},htmlFor:{defaultValue:{value:"undefined",computed:!0},description:"An Id of an input element to associate the label with",type:{name:"string"},required:!1},required:{defaultValue:{value:"false",computed:!1},description:"Required",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Label for a disabled input",type:{name:"bool"},required:!1},floating:{defaultValue:{value:"false",computed:!1},description:"Whether the label is floating",type:{name:"bool"},required:!1},minimized:{defaultValue:{value:"false",computed:!1},description:"Whether the label is minimized. Requires `floating` set to TRUE, otherwise it will have no effect.",type:{name:"bool"},required:!1}}};const g=`
  jn-text-xs
  jn-mt-1
`,x=t=>{switch(t){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},i=({children:t,text:s="",variant:a="help",className:l,...n})=>r.jsx("div",{className:`
        juno-form-hint
        juno-form-hint-${a}
        ${g}
        ${x(a)}
        ${l}
      `,...n,children:t||s});i.displayName="FormHint Js";i.propTypes={children:e.node,text:e.node,variant:e.oneOf(["help","error","success"]),className:e.string};i.__docgenInfo={description:"",methods:[],displayName:"FormHint Js",props:{text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},children:{description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}};export{i as F,o as L};
