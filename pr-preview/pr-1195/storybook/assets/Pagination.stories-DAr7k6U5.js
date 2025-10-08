import{r as P,j as r}from"./iframe-57_BUTQX.js";import{S as F}from"./Stack.component-CkSFfcZv.js";import{B as k}from"./Button.component-CnstRcqP.js";import{S as R}from"./Spinner.component-B_TMA76q.js";import{T as K}from"./TextInput.component-zswTZVlP.js";import{S as O,a as z}from"./SelectOption.component-u6AehhKg.js";import{P as G}from"./PortalProvider.component-CdBONVh-.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BX-tEFGw.js";import"./Label.component-COraLQIC.js";import"./FormHint.component-CAxvdZP0.js";import"./element-movement-D33Ag8kq.js";import"./floating-ui.react-CfuaJt_N.js";import"./frozen-mBOQQmDr.js";import"./use-text-value-Du_Spg5J.js";const H=`
  jn:flex
  jn:gap-[0.375rem]
  jn:items-center
`,J="jn:ml-3",M="justify-normal",y=({variant:i="default",currentPage:h,totalPages:v,pages:o,disabled:l=!1,isFirstPage:q,isLastPage:W,onPressPrevious:x,onPressNext:S,onSelectChange:_,onInputChange:j,onKeyPress:w,onBlur:C,progress:u=!1,className:I="",...T})=>{const[a,s]=P.useState(h),[t,N]=P.useState(o||v);P.useEffect(()=>{s(h),N(o||v),a!==void 0&&t!==void 0&&a>t&&s(t)},[h,v,o]);const V=()=>{let e;a!==void 0&&a>1&&(e=a-1,s(e)),x&&x(e)},D=()=>{let e;a!==void 0&&(t===void 0||a<t)&&(e=a+1,s(e)),S&&S(e)},A=e=>{if(e===void 0)return;let n;typeof e=="string"||Array.isArray(e)?n=parseInt(Array.isArray(e)?e[0]:e,10):n=e,!(n===void 0||isNaN(n))&&(s(n),_?.(n))},B=e=>{let n=e.target.value?parseInt(e.target.value,10):void 0;n!==void 0&&(n<1?n=1:t!==void 0&&n>t&&(n=t)),s(n),j&&j(n)},E=e=>{e.key==="Enter"&&a!==void 0&&w&&w(a)},L=()=>{C&&C(a)},$=()=>{let e=a!==void 0&&!isNaN(a)?a.toString().length:1;return e=e>5?5:e,{width:`${(e*.6+2.1).toFixed(1)}rem`}};return r.jsxs("div",{className:`juno-pagination juno-pagination-${i||"default"} ${H} ${I}`,...T,children:[r.jsx(k,{icon:"chevronLeft",disabled:!!q||!!l||!!u||a===1,onClick:V,title:"Previous Page"}),u?r.jsx(R,{size:"small",color:"default",className:J}):"",i&&!u?(()=>{switch(i){case"number":return a!==void 0?r.jsxs("div",{className:"page-value",children:[" ",a]}):"";case"select":return r.jsx(O,{name:"totalPages",width:"auto",value:a?.toString(),onChange:A,disabled:l,children:(()=>{const e=[];if(t!==void 0)for(let n=0;n<t;n++){const b=(n+1).toString();e.push(r.jsx(z,{value:b,label:b},b))}return e})()});case"input":return r.jsxs(F,{gap:"2",alignment:"center",children:[r.jsx("div",{className:"juno-pagination-wrapper",style:$(),children:r.jsx(K,{value:a!==void 0?a:"",onChange:B,onBlur:L,onKeyPress:E,disabled:!!l,className:M,maxLength:6})}),t!==void 0?r.jsxs("span",{children:["of ",t]}):""]});default:return""}})():"",r.jsx(k,{icon:"chevronRight",disabled:!!W||!!l||!!u||a!==void 0&&t!==void 0&&a===t,onClick:D,title:"Next Page"})]})};try{y.displayName="Pagination",y.__docgenInfo={description:"The Pagination component provides navigation controls for paginated content.",displayName:"Pagination",props:{variant:{defaultValue:{value:"default"},description:`The variant determines the style and user interaction method of the Pagination component:
- "default": Renders previous and next buttons only.
- "number": Displays the current page number between next and previous buttons.
- "select": Provides a dropdown menu between next and previous buttons for specific page selection.
- "input": Provides an input field for specific page entry.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"default"'},{value:'"select"'},{value:'"input"'}]}},currentPage:{defaultValue:null,description:"The current page number.",name:"currentPage",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"The total number of pages available.",name:"totalPages",required:!1,type:{name:"number"}},pages:{defaultValue:null,description:"A fallback property for providing the total number of pages, maintained for backward compatibility.",name:"pages",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"When true, disables the entire pagination component, preventing any interaction.",name:"disabled",required:!1,type:{name:"boolean"}},isFirstPage:{defaultValue:null,description:"When true, simulates the component being on the first page, disabling the previous button.",name:"isFirstPage",required:!1,type:{name:"boolean"}},isLastPage:{defaultValue:null,description:"When true, simulates the component being on the last page, disabling the next button.",name:"isLastPage",required:!1,type:{name:"boolean"}},onPressPrevious:{defaultValue:null,description:"Callback function triggered when the previous button is pressed.",name:"onPressPrevious",required:!1,type:{name:"((newPage?: number) => void)"}},onPressNext:{defaultValue:null,description:"Callback function triggered when the next button is pressed.",name:"onPressNext",required:!1,type:{name:"((newPage?: number) => void)"}},onSelectChange:{defaultValue:null,description:'Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".',name:"onSelectChange",required:!1,type:{name:"((selected: number) => void)"}},onInputChange:{defaultValue:null,description:'Callback function triggered when the input field value changes, applicable when variant is "input".',name:"onInputChange",required:!1,type:{name:"((inputValue?: number) => void)"}},onBlur:{defaultValue:null,description:'Callback function triggered when the input field loses focus, applicable when variant is "input".',name:"onBlur",required:!1,type:{name:"((controlCurrentPage?: number) => void)"}},progress:{defaultValue:{value:"false"},description:"Displays a loading spinner and disables interaction when true.",name:"progress",required:!1,type:{name:"boolean"}}}}}catch{}const ce={title:"Components/Pagination",component:y,argTypes:{variant:{options:["default","number","select","input"],control:{type:"select"}},className:{control:"text",table:{type:{summary:"string"}}},onKeyPress:{control:!1,table:{type:{summary:"(controlCurrentPage?: number) => void"}}}},decorators:[i=>r.jsx("div",{className:"jn:pb-12",children:r.jsx(G,{children:r.jsx(i,{})})})]},c={args:{variant:"default",currentPage:2,pages:6}},p={args:{variant:"number",currentPage:12,pages:6}},d={args:{variant:"select",currentPage:2,pages:6}},m={args:{variant:"input",currentPage:3,pages:6}},g={args:{disabled:!0}},f={args:{progress:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    progress: true
  }
}`,...f.parameters?.docs?.source}}};const pe=["Default","PaginationWithNumber","PaginationWithSelect","PaginationWithInput","DisabledPagination","ProgressPagination"];export{c as Default,g as DisabledPagination,m as PaginationWithInput,p as PaginationWithNumber,d as PaginationWithSelect,f as ProgressPagination,pe as __namedExportsOrder,ce as default};
