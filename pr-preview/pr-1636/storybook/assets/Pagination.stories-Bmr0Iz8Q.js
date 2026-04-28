import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./PortalProvider.component-C2fswz4A.js";import{t as n}from"./Stack.component-VgKXhu8w.js";import{t as r}from"./Spinner.component-DbBBlmxR.js";import{t as i}from"./Button.component-DvVUjNUj.js";import{n as a,t as o}from"./SelectOption.component-Bx7_1Iqc.js";import{t as s}from"./TextInput.component-llqnSM0l.js";import{useEffect as c,useState as l}from"react";var u=e(),d=`
  jn:flex
  jn:gap-[0.375rem]
  jn:items-center
`,f=`jn:ml-3`,p=`justify-normal`,m=({variant:e=`default`,currentPage:t,totalPages:m,pages:h,disabled:g=!1,isFirstPage:_,isLastPage:v,onPressPrevious:y,onPressNext:b,onSelectChange:x,onInputChange:S,onKeyPress:C,onBlur:w,progress:T=!1,className:E=``,...D})=>{let[O,k]=l(t),[A,j]=l(h||m);c(()=>{k(t),j(h||m),O!==void 0&&A!==void 0&&O>A&&k(A)},[t,m,h]);let M=()=>{let e;O!==void 0&&O>1&&(e=O-1,k(e)),y&&y(e)},N=()=>{let e;O!==void 0&&(A===void 0||O<A)&&(e=O+1,k(e)),b&&b(e)},P=e=>{if(e===void 0)return;let t;t=typeof e==`string`||Array.isArray(e)?parseInt(Array.isArray(e)?e[0]:e,10):e,!(t===void 0||isNaN(t))&&(k(t),x?.(t))},F=e=>{let t=e.target.value?parseInt(e.target.value,10):void 0;t!==void 0&&(t<1?t=1:A!==void 0&&t>A&&(t=A)),k(t),S&&S(t)},I=e=>{e.key===`Enter`&&O!==void 0&&C&&C(O)},L=()=>{w&&w(O)},R=()=>{let e=O!==void 0&&!isNaN(O)?O.toString().length:1;return e=e>5?5:e,{width:`${(e*.6+2.1).toFixed(1)}rem`}};return(0,u.jsxs)(`div`,{className:`juno-pagination juno-pagination-${e||`default`} ${d} ${E}`,...D,children:[(0,u.jsx)(i,{icon:`chevronLeft`,disabled:!!_||!!g||!!T||O===1,onClick:M,title:`Previous Page`}),T?(0,u.jsx)(r,{size:`small`,color:`default`,className:f}):``,e&&!T?(()=>{switch(e){case`number`:return O===void 0?``:(0,u.jsxs)(`div`,{className:`page-value`,children:[` `,O]});case`select`:return(0,u.jsx)(a,{name:`totalPages`,width:`auto`,value:O?.toString(),onChange:P,disabled:g,children:(()=>{let e=[];if(A!==void 0)for(let t=0;t<A;t++){let n=(t+1).toString();e.push((0,u.jsx)(o,{value:n,label:n},n))}return e})()});case`input`:return(0,u.jsxs)(n,{gap:`2`,alignment:`center`,children:[(0,u.jsx)(`div`,{className:`juno-pagination-wrapper`,style:R(),children:(0,u.jsx)(s,{value:O===void 0?``:O,onChange:F,onBlur:L,onKeyPress:I,disabled:!!g,className:p,maxLength:6})}),A===void 0?``:(0,u.jsxs)(`span`,{children:[`of `,A]})]});default:return``}})():``,(0,u.jsx)(i,{icon:`chevronRight`,disabled:!!v||!!g||!!T||O!==void 0&&A!==void 0&&O===A,onClick:N,title:`Next Page`})]})};try{m.displayName=`Pagination`,m.__docgenInfo={description:`The Pagination component provides navigation controls for paginated content.`,displayName:`Pagination`,props:{variant:{defaultValue:{value:`default`},description:`The variant determines the style and user interaction method of the Pagination component:
- "default": Renders previous and next buttons only.
- "number": Displays the current page number between next and previous buttons.
- "select": Provides a dropdown menu between next and previous buttons for specific page selection.
- "input": Provides an input field for specific page entry.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"number"`},{value:`"default"`},{value:`"select"`},{value:`"input"`}]}},currentPage:{defaultValue:null,description:`The current page number.`,name:`currentPage`,required:!1,type:{name:`number`}},totalPages:{defaultValue:null,description:`The total number of pages available.`,name:`totalPages`,required:!1,type:{name:`number`}},pages:{defaultValue:null,description:`A fallback property for providing the total number of pages, maintained for backward compatibility.`,name:`pages`,required:!1,type:{name:`number`}},disabled:{defaultValue:{value:`false`},description:`When true, disables the entire pagination component, preventing any interaction.`,name:`disabled`,required:!1,type:{name:`boolean`}},isFirstPage:{defaultValue:null,description:`When true, simulates the component being on the first page, disabling the previous button.`,name:`isFirstPage`,required:!1,type:{name:`boolean`}},isLastPage:{defaultValue:null,description:`When true, simulates the component being on the last page, disabling the next button.`,name:`isLastPage`,required:!1,type:{name:`boolean`}},onPressPrevious:{defaultValue:null,description:`Callback function triggered when the previous button is pressed.`,name:`onPressPrevious`,required:!1,type:{name:`((newPage?: number) => void)`}},onPressNext:{defaultValue:null,description:`Callback function triggered when the next button is pressed.`,name:`onPressNext`,required:!1,type:{name:`((newPage?: number) => void)`}},onSelectChange:{defaultValue:null,description:`Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".`,name:`onSelectChange`,required:!1,type:{name:`((selected: number) => void)`}},onInputChange:{defaultValue:null,description:`Callback function triggered when the input field value changes, applicable when variant is "input".`,name:`onInputChange`,required:!1,type:{name:`((inputValue?: number) => void)`}},onBlur:{defaultValue:null,description:`Callback function triggered when the input field loses focus, applicable when variant is "input".`,name:`onBlur`,required:!1,type:{name:`((controlCurrentPage?: number) => void)`}},progress:{defaultValue:{value:`false`},description:`Displays a loading spinner and disables interaction when true.`,name:`progress`,required:!1,type:{name:`boolean`}}}}}catch{}var h={title:`Components/Pagination`,component:m,argTypes:{variant:{options:[`default`,`number`,`select`,`input`],control:{type:`select`}},className:{control:`text`,table:{type:{summary:`string`}}},onKeyPress:{control:!1,table:{type:{summary:`(controlCurrentPage?: number) => void`}}}},decorators:[e=>(0,u.jsx)(`div`,{className:`jn:pb-12`,children:(0,u.jsx)(t,{children:(0,u.jsx)(e,{})})})]},g={args:{variant:`default`,currentPage:2,pages:6}},_={args:{variant:`number`,currentPage:12,pages:6}},v={args:{variant:`select`,currentPage:2,pages:6}},y={args:{variant:`input`,currentPage:3,pages:6}},b={args:{disabled:!0}},x={args:{progress:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    progress: true
  }
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`PaginationWithNumber`,`PaginationWithSelect`,`PaginationWithInput`,`DisabledPagination`,`ProgressPagination`];export{g as Default,b as DisabledPagination,y as PaginationWithInput,_ as PaginationWithNumber,v as PaginationWithSelect,x as ProgressPagination,S as __namedExportsOrder,h as default};