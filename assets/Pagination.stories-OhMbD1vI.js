import{j as t}from"./jsx-runtime-BP6H2k8O.js";import{r as j}from"./index-DysCNOs_.js";import{S as ie}from"./Stack.component-JaLCSfPt.js";import{B as q}from"./Button.component-NwVs7jIc.js";import{S as se}from"./Spinner.component-B25dgKgo.js";import{T as oe}from"./TextInput.component-Cbe2zJd5.js";import{S as le,a as ue}from"./SelectOption.component-CA6Zev4K.js";import{P as pe}from"./PortalProvider.component-Dpl-KYct.js";import"./Icon.component-Cri6u08O.js";import"./widgets-BR6-ubtP.js";import"./Label.component-DhLm9IiA.js";import"./FormHint.component-DtRGMMjY.js";import"./headlessui-float-pPOEMtsx.js";import"./index-DxJeRO9x.js";import"./keyboard-RYHMaleb.js";import"./floating-ui.react-dom-C789hh8f.js";import"./listbox-FgpIuTn9.js";import"./form-CGPENT-o.js";import"./use-text-value-BSk7WQuc.js";const de=`
  jn-flex
  jn-gap-[0.375rem]
  jn-items-center
`,ce="jn-ml-3",me="justify-normal",h=({variant:i="default",currentPage:b,totalPages:P,pages:l,disabled:u=!1,isFirstPage:M,isLastPage:Q,onPressPrevious:w,onPressNext:S,onSelectChange:y,onInputChange:N,onKeyPress:C,onBlur:T,progress:p=!1,className:U="",...X})=>{const[n,s]=j.useState(b),[r,k]=j.useState(l||P);j.useEffect(()=>{s(b),k(l||P),n!==void 0&&r!==void 0&&n>r&&s(r)},[b,P,l]);const Y=()=>{let e;n!==void 0&&n>1&&(e=n-1,s(e)),w&&w(e)},Z=()=>{let e;n!==void 0&&(r===void 0||n<r)&&(e=n+1,s(e)),S&&S(e)},ee=e=>{if(e===void 0)return;let a;typeof e=="string"||Array.isArray(e)?a=parseInt(Array.isArray(e)?e[0]:e,10):a=e,!(a===void 0||isNaN(a))&&(s(a),y==null||y(a))},ne=e=>{let a=e.target.value?parseInt(e.target.value,10):void 0;a!==void 0&&(a<1?a=1:r!==void 0&&a>r&&(a=r)),s(a),N&&N(a)},ae=e=>{e.key==="Enter"&&n!==void 0&&C&&C(n)},te=()=>{T&&T(n)},re=()=>{let e=n!==void 0&&!isNaN(n)?n.toString().length:1;return e=e>5?5:e,{width:`${(e*.6+2.1).toFixed(1)}rem`}};return t.jsxs("div",{className:`juno-pagination juno-pagination-${i||"default"} ${de} ${U}`,...X,children:[t.jsx(q,{icon:"chevronLeft",disabled:!!M||!!u||!!p||n===1,onClick:Y,title:"Previous Page"}),p?t.jsx(se,{size:"small",color:"default",className:ce}):"",i&&!p?(()=>{switch(i){case"number":return n!==void 0?t.jsxs("div",{className:"page-value",children:[" ",n]}):"";case"select":return t.jsx(le,{name:"totalPages",width:"auto",value:n==null?void 0:n.toString(),onChange:ee,disabled:u,children:(()=>{const e=[];if(r!==void 0)for(let a=0;a<r;a++){const x=(a+1).toString();e.push(t.jsx(ue,{value:x,label:x},x))}return e})()});case"input":return t.jsxs(ie,{gap:"2",alignment:"center",children:[t.jsx("div",{className:"juno-pagination-wrapper",style:re(),children:t.jsx(oe,{value:n!==void 0?n:"",onChange:ne,onBlur:te,onKeyPress:ae,disabled:!!u,className:me,maxLength:6})}),r!==void 0?t.jsxs("span",{children:["of ",r]}):""]});default:return""}})():"",t.jsx(q,{icon:"chevronRight",disabled:!!Q||!!u||!!p||n!==void 0&&r!==void 0&&n===r,onClick:Z,title:"Next Page"})]})};try{h.displayName="Pagination",h.__docgenInfo={description:"The Pagination component provides navigation controls for paginated content.",displayName:"Pagination",props:{variant:{defaultValue:{value:"default"},description:`The variant determines the style and user interaction method of the Pagination component:
- "default": Renders previous and next buttons only.
- "number": Displays the current page number between next and previous buttons.
- "select": Provides a dropdown menu between next and previous buttons for specific page selection.
- "input": Provides an input field for specific page entry.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"default"'},{value:'"select"'},{value:'"input"'}]}},currentPage:{defaultValue:null,description:"The current page number.",name:"currentPage",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"The total number of pages available.",name:"totalPages",required:!1,type:{name:"number"}},pages:{defaultValue:null,description:"A fallback property for providing the total number of pages, maintained for backward compatibility.",name:"pages",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"When true, disables the entire pagination component, preventing any interaction.",name:"disabled",required:!1,type:{name:"boolean"}},isFirstPage:{defaultValue:null,description:"When true, simulates the component being on the first page, disabling the previous button.",name:"isFirstPage",required:!1,type:{name:"boolean"}},isLastPage:{defaultValue:null,description:"When true, simulates the component being on the last page, disabling the next button.",name:"isLastPage",required:!1,type:{name:"boolean"}},onPressPrevious:{defaultValue:null,description:"Callback function triggered when the previous button is pressed.",name:"onPressPrevious",required:!1,type:{name:"((newPage?: number) => void)"}},onPressNext:{defaultValue:null,description:"Callback function triggered when the next button is pressed.",name:"onPressNext",required:!1,type:{name:"((newPage?: number) => void)"}},onSelectChange:{defaultValue:null,description:'Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".',name:"onSelectChange",required:!1,type:{name:"((selected: number) => void)"}},onInputChange:{defaultValue:null,description:'Callback function triggered when the input field value changes, applicable when variant is "input".',name:"onInputChange",required:!1,type:{name:"((inputValue?: number) => void)"}},onBlur:{defaultValue:null,description:'Callback function triggered when the input field loses focus, applicable when variant is "input".',name:"onBlur",required:!1,type:{name:"((controlCurrentPage?: number) => void)"}},progress:{defaultValue:{value:"false"},description:"Displays a loading spinner and disables interaction when true.",name:"progress",required:!1,type:{name:"boolean"}}}}}catch{}const Ve={title:"Components/Pagination",component:h,argTypes:{variant:{options:["default","number","select","input"],control:{type:"select"}},className:{control:"text",table:{type:{summary:"string"}}},onKeyPress:{control:!1,table:{type:{summary:"(controlCurrentPage?: number) => void"}}}},decorators:[i=>t.jsx("div",{className:"jn-pb-12",children:t.jsx(pe,{children:t.jsx(i,{})})})]},o=i=>t.jsx(h,{...i}),d={render:o,args:{variant:"default",currentPage:2,pages:6}},c={render:o,args:{variant:"number",currentPage:12,pages:6}},m={render:o,args:{variant:"select",currentPage:2,pages:6}},g={render:o,args:{variant:"input",currentPage:3,pages:6}},f={render:o,args:{disabled:!0}},v={render:o,args:{progress:!0}};var _,W,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6
  }
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var V,D,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6
  }
}`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,E,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6
  }
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var $,F,R;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6
  }
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var K,O,z;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true
  }
}`,...(z=(O=f.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    progress: true
  }
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const De=["Default","PaginationWithNumber","PaginationWithSelect","PaginationWithInput","DisabledPagination","ProgressPagination"];export{d as Default,f as DisabledPagination,g as PaginationWithInput,c as PaginationWithNumber,m as PaginationWithSelect,v as ProgressPagination,De as __namedExportsOrder,Ve as default};
