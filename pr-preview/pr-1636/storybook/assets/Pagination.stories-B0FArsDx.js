import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./PortalProvider.component-C0iptKAD.js";import{t as i}from"./Stack.component-O2Jjm6dw.js";import{t as a}from"./Spinner.component-C2Z0Zppr.js";import{t as o}from"./Button.component-J1fJR8AZ.js";import{n as s,t as c}from"./SelectOption.component-BwnvgQm2.js";import{t as l}from"./TextInput.component-ccvShNSP.js";var u=e(t()),d=n(),f=`
  jn:flex
  jn:gap-[0.375rem]
  jn:items-center
`,p=`jn:ml-3`,m=`justify-normal`,h=({variant:e=`default`,currentPage:t,totalPages:n,pages:r,disabled:h=!1,isFirstPage:g,isLastPage:_,onPressPrevious:v,onPressNext:y,onSelectChange:b,onInputChange:x,onKeyPress:S,onBlur:C,progress:w=!1,className:T=``,...E})=>{let[D,O]=(0,u.useState)(t),[k,A]=(0,u.useState)(r||n);(0,u.useEffect)(()=>{O(t),A(r||n),D!==void 0&&k!==void 0&&D>k&&O(k)},[t,n,r]);let j=()=>{let e;D!==void 0&&D>1&&(e=D-1,O(e)),v&&v(e)},M=()=>{let e;D!==void 0&&(k===void 0||D<k)&&(e=D+1,O(e)),y&&y(e)},N=e=>{if(e===void 0)return;let t;t=typeof e==`string`||Array.isArray(e)?parseInt(Array.isArray(e)?e[0]:e,10):e,!(t===void 0||isNaN(t))&&(O(t),b?.(t))},P=e=>{let t=e.target.value?parseInt(e.target.value,10):void 0;t!==void 0&&(t<1?t=1:k!==void 0&&t>k&&(t=k)),O(t),x&&x(t)},F=e=>{e.key===`Enter`&&D!==void 0&&S&&S(D)},I=()=>{C&&C(D)},L=()=>{let e=D!==void 0&&!isNaN(D)?D.toString().length:1;return e=e>5?5:e,{width:`${(e*.6+2.1).toFixed(1)}rem`}};return(0,d.jsxs)(`div`,{className:`juno-pagination juno-pagination-${e||`default`} ${f} ${T}`,...E,children:[(0,d.jsx)(o,{icon:`chevronLeft`,disabled:!!g||!!h||!!w||D===1,onClick:j,title:`Previous Page`}),w?(0,d.jsx)(a,{size:`small`,color:`default`,className:p}):``,e&&!w?(()=>{switch(e){case`number`:return D===void 0?``:(0,d.jsxs)(`div`,{className:`page-value`,children:[` `,D]});case`select`:return(0,d.jsx)(s,{name:`totalPages`,width:`auto`,value:D?.toString(),onChange:N,disabled:h,children:(()=>{let e=[];if(k!==void 0)for(let t=0;t<k;t++){let n=(t+1).toString();e.push((0,d.jsx)(c,{value:n,label:n},n))}return e})()});case`input`:return(0,d.jsxs)(i,{gap:`2`,alignment:`center`,children:[(0,d.jsx)(`div`,{className:`juno-pagination-wrapper`,style:L(),children:(0,d.jsx)(l,{value:D===void 0?``:D,onChange:P,onBlur:I,onKeyPress:F,disabled:!!h,className:m,maxLength:6})}),k===void 0?``:(0,d.jsxs)(`span`,{children:[`of `,k]})]});default:return``}})():``,(0,d.jsx)(o,{icon:`chevronRight`,disabled:!!_||!!h||!!w||D!==void 0&&k!==void 0&&D===k,onClick:M,title:`Next Page`})]})};try{h.displayName=`Pagination`,h.__docgenInfo={description:`The Pagination component provides navigation controls for paginated content.`,displayName:`Pagination`,props:{variant:{defaultValue:{value:`default`},description:`The variant determines the style and user interaction method of the Pagination component:
- "default": Renders previous and next buttons only.
- "number": Displays the current page number between next and previous buttons.
- "select": Provides a dropdown menu between next and previous buttons for specific page selection.
- "input": Provides an input field for specific page entry.`,name:`variant`,required:!1,type:{name:`enum`,value:[{value:`"number"`},{value:`"default"`},{value:`"select"`},{value:`"input"`}]}},currentPage:{defaultValue:null,description:`The current page number.`,name:`currentPage`,required:!1,type:{name:`number`}},totalPages:{defaultValue:null,description:`The total number of pages available.`,name:`totalPages`,required:!1,type:{name:`number`}},pages:{defaultValue:null,description:`A fallback property for providing the total number of pages, maintained for backward compatibility.`,name:`pages`,required:!1,type:{name:`number`}},disabled:{defaultValue:{value:`false`},description:`When true, disables the entire pagination component, preventing any interaction.`,name:`disabled`,required:!1,type:{name:`boolean`}},isFirstPage:{defaultValue:null,description:`When true, simulates the component being on the first page, disabling the previous button.`,name:`isFirstPage`,required:!1,type:{name:`boolean`}},isLastPage:{defaultValue:null,description:`When true, simulates the component being on the last page, disabling the next button.`,name:`isLastPage`,required:!1,type:{name:`boolean`}},onPressPrevious:{defaultValue:null,description:`Callback function triggered when the previous button is pressed.`,name:`onPressPrevious`,required:!1,type:{name:`((newPage?: number) => void)`}},onPressNext:{defaultValue:null,description:`Callback function triggered when the next button is pressed.`,name:`onPressNext`,required:!1,type:{name:`((newPage?: number) => void)`}},onSelectChange:{defaultValue:null,description:`Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".`,name:`onSelectChange`,required:!1,type:{name:`((selected: number) => void)`}},onInputChange:{defaultValue:null,description:`Callback function triggered when the input field value changes, applicable when variant is "input".`,name:`onInputChange`,required:!1,type:{name:`((inputValue?: number) => void)`}},onBlur:{defaultValue:null,description:`Callback function triggered when the input field loses focus, applicable when variant is "input".`,name:`onBlur`,required:!1,type:{name:`((controlCurrentPage?: number) => void)`}},progress:{defaultValue:{value:`false`},description:`Displays a loading spinner and disables interaction when true.`,name:`progress`,required:!1,type:{name:`boolean`}}}}}catch{}var g={title:`Components/Pagination`,component:h,argTypes:{variant:{options:[`default`,`number`,`select`,`input`],control:{type:`select`}},className:{control:`text`,table:{type:{summary:`string`}}},onKeyPress:{control:!1,table:{type:{summary:`(controlCurrentPage?: number) => void`}}}},decorators:[e=>(0,d.jsx)(`div`,{className:`jn:pb-12`,children:(0,d.jsx)(r,{children:(0,d.jsx)(e,{})})})]},_={args:{variant:`default`,currentPage:2,pages:6}},v={args:{variant:`number`,currentPage:12,pages:6}},y={args:{variant:`select`,currentPage:2,pages:6}},b={args:{variant:`input`,currentPage:3,pages:6}},x={args:{disabled:!0}},S={args:{progress:!0}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    progress: true
  }
}`,...S.parameters?.docs?.source}}};var C=[`Default`,`PaginationWithNumber`,`PaginationWithSelect`,`PaginationWithInput`,`DisabledPagination`,`ProgressPagination`];export{_ as Default,x as DisabledPagination,b as PaginationWithInput,v as PaginationWithNumber,y as PaginationWithSelect,S as ProgressPagination,C as __namedExportsOrder,g as default};