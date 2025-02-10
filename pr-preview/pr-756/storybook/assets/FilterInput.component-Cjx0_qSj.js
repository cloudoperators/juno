import{j as t}from"./jsx-runtime-D6fbYt3N.js";import{r as l}from"./index-DysCNOs_.js";import{P as e}from"./index-BHU3UH5b.js";import{I as g}from"./Icon.component-BXxTB2S-.js";import{S as L}from"./Spinner.component-CxM1ZFOh.js";import{T as _}from"./TextInput.component-CUY2H-ql.js";const A=`
	jn-w-full
	jn-bg-theme-select
	jn-text-theme-high
	jn-appearance-none
	jn-text-base
	jn-pl-4
	jn-h-[2.375rem]
	jn-rounded-3px
	jn-bg-icon-arrow-down
	jn-bg-right
	jn-bg-no-repeat
	focus:jn-outline-none
	focus:jn-ring-2
	focus:jn-ring-theme-focus
	disabled:jn-opacity-50
`,K=`
	jn-relative
`,z=`
	jn-absolute
	jn-flex
	jn-right-2
	jn-top-1.5
	jn-pointer-events-none
`,D=`
	jn-opacity-50
`,G=`
	jn-border
	jn-border-theme-error
`,U=`
	jn-border
	jn-border-theme-success
`,H=`
	jn-absolute
	jn-top-0
	jn-right-0
	jn-bottom-0
	jn-left-0
	jn-text-center
	jn-bg-theme-select
	jn-text-theme-high
	jn-text-base
	jn-rounded-3px
	jn-flex
	jn-flex-col
	jn-justify-center
	jn-select-none
	jn-cursor-not-allowed
`,M=`
	jn-absolute
	jn-top-0
	jn-right-0
	jn-bottom-0
	jn-left-0
	jn-text-center
	jn-bg-theme-select
	jn-text-theme-high
	jn-text-base
	jn-rounded-3px
	jn-flex
	jn-flex-col
	jn-justify-center
	jn-select-none
	jn-cursor-not-allowed
`,R=`
	jn-ml-auto
	jn-mr-auto
`,B=`
	jn-ml-auto
	jn-mr-auto
`,J=`
	jn-pr-[3.75rem]
`,Q=`
	jn-pr-9
`,k=({name:i=null,id:r="",children:u,className:f="",disabled:m=null,invalid:h=!1,valid:V=!1,loading:y=!1,error:b=!1,onChange:o,onClick:j,wrapperClassName:w="",...v})=>{const[x,C]=l.useState(!1),[S,q]=l.useState(!1),[a,c]=l.useState(!1),[s,N]=l.useState(!1);l.useEffect(()=>{C(y)},[y]),l.useEffect(()=>{q(h)},[h]),l.useEffect(()=>{c(V)},[V]),l.useEffect(()=>{N(b)},[b]);const d=p=>{o&&o(p)},$=p=>{j&&j(p)},I=({disabled:p})=>x?t.jsx("div",{className:`juno-select-loading ${H}`,children:t.jsx(L,{className:`${R}`})}):s?t.jsx("div",{className:`juno-select-errortext ${M}`,children:t.jsx(g,{icon:"errorOutline",color:"jn-text-theme-error",className:`${B}`})}):t.jsxs("div",{className:`${z} ${p?D:""} `,children:[S?t.jsx(g,{icon:"dangerous",color:"jn-text-theme-error"}):null,a?t.jsx(g,{icon:"checkCircle",color:"jn-text-theme-success"}):null,t.jsx(g,{icon:"expandMore"})]}),P=()=>a||S?J:Q;return t.jsxs("div",{className:`
      juno-select-wrapper 
      ${K}
      ${w}`,children:[t.jsx("select",{name:i||"Unnamed Select",id:r,className:`juno-select ${A} ${S?"juno-select-invalid "+G:""} ${a?"juno-select-valid "+U:""} ${s?"juno-select-error ":""} ${P()} ${f}`,onChange:d,onClick:$,disabled:m||x||s,...v,children:u}),t.jsx(I,{disabled:m})]})};k.propTypes={name:e.string,id:e.string,className:e.string,children:e.node,disabled:e.bool,invalid:e.bool,valid:e.bool,loading:e.bool,error:e.bool,onChange:e.func,onClick:e.func,wrapperClassName:e.string};k.__docgenInfo={description:"A basic, uncontrolled, native html Select. Takes SelectOption and SelectOptionGroup as children.",methods:[],displayName:"NativeSelect",props:{name:{defaultValue:{value:"null",computed:!1},description:"Pass a name.",type:{name:"string"},required:!1},id:{defaultValue:{value:'""',computed:!1},description:"The id of the select",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a classname. The class name is applied to the internal select element.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"null",computed:!1},description:"Disable the select",type:{name:"bool"},required:!1},invalid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is invalid",type:{name:"bool"},required:!1},valid:{defaultValue:{value:"false",computed:!1},description:"Whether the Select is valid",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the select is currently loading",type:{name:"bool"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the select has an error. Don't use this to show the user selection is invalid. Use to show when there was an error fetching data.",type:{name:"bool"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.",type:{name:"string"},required:!1},children:{description:"Pass SelectOption and SelectOptionGroup as children.",type:{name:"node"},required:!1},onChange:{description:"Pass a change handler",type:{name:"func"},required:!1},onClick:{description:"Pass a click handler",type:{name:"func"},required:!1}}};const F=({value:i=null,label:r=null,disabled:u=!1,className:f="",...m})=>t.jsx("option",{value:i,disabled:u,className:`juno-select-option ${f}`,...m,children:r||i});F.propTypes={label:e.oneOfType([e.string,e.number]),value:e.oneOfType([e.string,e.number]),disabled:e.bool,className:e.string};F.__docgenInfo={description:"A basic SelectOption. Can only be used inside a Select.",methods:[],displayName:"NativeSelectOption",props:{value:{defaultValue:{value:"null",computed:!1},description:"Pass a value the option should represent",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"Pass a visible label",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the option is disabled",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a class name to the option",type:{name:"string"},required:!1}}};const X=`
	jn-flex
	jn-relative
	jn-p-px
	jn-border
	jn-rounded
	jn-bg-theme-filter-input
`,Y=`
  jn-border-theme-filter-input
`,Z=`
  jn-border-theme-error
`,ee=`
	jn-rounded-r-none
`,te=`
	jn-grow
	jn-rounded-l-none
	jn-pr-16
	!jn-bg-theme-filter-input-textinput
	focus:jn-z-40
`,le=`
	jn-absolute
	jn-flex
	jn-right-2
	jn-top-1.5
	jn-z-50
`,T=({keyLabel:i="Select Filter",options:r=[],selectedFilterKey:u="",onSelectedFilterKeyChange:f=void 0,valueLabel:m="Filter by Value",filterValue:h="",valuePlaceholder:V="",onFilterValueChange:y=void 0,onClear:b=void 0,onFilter:o=void 0,loading:j=!1,className:w="",error:v=!1,onKeyPress:x,...C})=>{const[S,q]=l.useState(u),[a,c]=l.useState(h),[s,N]=l.useState(r.length<1||j),[d,$]=l.useState(v);l.useEffect(()=>{c(h)},[h]),l.useEffect(()=>{q(u)},[u]),l.useEffect(()=>{r.length<1||j?(N(!0),c("")):N(!1)},[r,j]),l.useEffect(()=>{$(v)},[v]);const I=n=>{q(n.target.value),c(""),f&&f(n)},P=n=>{c(n.target.value),y&&y(n)},p=n=>{c(""),b&&b(n)},E=()=>{o&&o(a)},O=n=>{n.key==="Enter"&&o&&o&&o(a),x&&x(n)};return t.jsxs("div",{className:`juno-filter-input ${X} ${s?"juno-filter-input-loading ":""} ${d?"juno-filter-input-error ":""} ${d?Z:Y} ${w}`,...C,children:[t.jsx("div",{children:t.jsxs(k,{className:`juno-filter-input-select ${ee}`,"aria-label":i,value:S,onChange:I,loading:s,error:d,children:[t.jsx(F,{label:i||"Select Filter",value:""}),r.map((n,W)=>t.jsx(F,{label:n.label,value:n.key,...n},`${W}`))]})}),t.jsx(_,{value:a,className:`${te}`,"aria-label":m,onChange:P,onKeyPress:O,disabled:s||d,placeholder:s?"Loading Filter Options…":V}),t.jsxs("div",{className:`${le}`,children:[a&&a.length?t.jsx(g,{icon:"close",title:"Clear",size:"18",className:"jn-mr-2",onClick:p}):null,t.jsx(g,{icon:"filterAlt",title:"Filter",disabled:s||d,onClick:E})]})]})};T.propTypes={keyLabel:e.string,options:e.arrayOf(e.object),selectedFilterKey:e.string,onSelectedFilterKeyChange:e.func,valueLabel:e.string,filterValue:e.string,valuePlaceholder:e.string,onFilterValueChange:e.func,onClear:e.func,onKeyPress:e.func,loading:e.bool,className:e.string,onFilter:e.func,error:e.bool};T.__docgenInfo={description:`-- Deprectated. For new implementations, use InputGroup and combine/compose input components as you need them. --
A special Input to select key and value of a filter.`,methods:[],displayName:"FilterInput",props:{keyLabel:{defaultValue:{value:'"Select Filter"',computed:!1},description:"The label to display on the Filter Key Select",type:{name:"string"},required:!1},options:{defaultValue:{value:"[]",computed:!1},description:'The options for the Filter Select: `[{Label: "Filter 1", key: "filter-1"}, {...}]`\n	The array MUST have a length in order for the component to render.',type:{name:"arrayOf",value:{name:"object"}},required:!1},selectedFilterKey:{defaultValue:{value:'""',computed:!1},description:"The key of the current filter",type:{name:"string"},required:!1},onSelectedFilterKeyChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when the filter key changes",type:{name:"func"},required:!1},valueLabel:{defaultValue:{value:'"Filter by Value"',computed:!1},description:"The aria-label of the Filter Value Text Input",type:{name:"string"},required:!1},filterValue:{defaultValue:{value:'""',computed:!1},description:"The current value of the Filter Input",type:{name:"string"},required:!1},valuePlaceholder:{defaultValue:{value:'""',computed:!1},description:"Optional: pass a placeholder for the filter value text input",type:{name:"string"},required:!1},onFilterValueChange:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to be executed when the filter value changes",type:{name:"func"},required:!1},onClear:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to execute when the Filter Value Clear button is clicked",type:{name:"func"},required:!1},onFilter:{defaultValue:{value:"undefined",computed:!0},description:"Pass a handler to execute when the Filter Value Filter button is clicked",type:{name:"func"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Whether the filter is currently loading",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a className to the wrapping element",type:{name:"string"},required:!1},error:{defaultValue:{value:"false",computed:!1},description:"Whether the FilterInput has an error",type:{name:"bool"},required:!1},onKeyPress:{description:"Pass a handler to execute when key is pressed",type:{name:"func"},required:!1}}};export{T as F};
