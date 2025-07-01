import{r as y,j as r}from"./iframe-DwbrOYUU.js";import{S as re}from"./Stack.component-yozeMvZo.js";import{B as q}from"./Button.component-CoOj1fM2.js";import{S as ie}from"./Spinner.component-BD6wXojT.js";import{T as se}from"./TextInput.component-MibSsl8p.js";import{S as oe,a as le}from"./SelectOption.component-B8-PI23P.js";import{P as ue}from"./PortalProvider.component-D8n5CRgX.js";import"./Icon.component-BA2rWOnK.js";import"./Label.component-Xcm9TjGA.js";import"./FormHint.component-CVEa2az7.js";import"./portal-QJG4yMtA.js";import"./floating-ui.react-B3gpwEmk.js";import"./frozen-CB9PdzAm.js";import"./use-text-value-BvVlr7Us.js";const ce=`
  jn:flex
  jn:gap-[0.375rem]
  jn:items-center
`,pe="jn:ml-3",de="justify-normal",x=({variant:i="default",currentPage:v,totalPages:h,pages:o,disabled:l=!1,isFirstPage:J,isLastPage:M,onPressPrevious:j,onPressNext:w,onSelectChange:b,onInputChange:S,onKeyPress:N,onBlur:C,progress:u=!1,className:Q="",...U})=>{const[a,s]=y.useState(v),[t,k]=y.useState(o||h);y.useEffect(()=>{s(v),k(o||h),a!==void 0&&t!==void 0&&a>t&&s(t)},[v,h,o]);const X=()=>{let e;a!==void 0&&a>1&&(e=a-1,s(e)),j&&j(e)},Y=()=>{let e;a!==void 0&&(t===void 0||a<t)&&(e=a+1,s(e)),w&&w(e)},Z=e=>{if(e===void 0)return;let n;typeof e=="string"||Array.isArray(e)?n=parseInt(Array.isArray(e)?e[0]:e,10):n=e,!(n===void 0||isNaN(n))&&(s(n),b==null||b(n))},ee=e=>{let n=e.target.value?parseInt(e.target.value,10):void 0;n!==void 0&&(n<1?n=1:t!==void 0&&n>t&&(n=t)),s(n),S&&S(n)},ae=e=>{e.key==="Enter"&&a!==void 0&&N&&N(a)},ne=()=>{C&&C(a)},te=()=>{let e=a!==void 0&&!isNaN(a)?a.toString().length:1;return e=e>5?5:e,{width:`${(e*.6+2.1).toFixed(1)}rem`}};return r.jsxs("div",{className:`juno-pagination juno-pagination-${i||"default"} ${ce} ${Q}`,...U,children:[r.jsx(q,{icon:"chevronLeft",disabled:!!J||!!l||!!u||a===1,onClick:X,title:"Previous Page"}),u?r.jsx(ie,{size:"small",color:"default",className:pe}):"",i&&!u?(()=>{switch(i){case"number":return a!==void 0?r.jsxs("div",{className:"page-value",children:[" ",a]}):"";case"select":return r.jsx(oe,{name:"totalPages",width:"auto",value:a==null?void 0:a.toString(),onChange:Z,disabled:l,children:(()=>{const e=[];if(t!==void 0)for(let n=0;n<t;n++){const P=(n+1).toString();e.push(r.jsx(le,{value:P,label:P},P))}return e})()});case"input":return r.jsxs(re,{gap:"2",alignment:"center",children:[r.jsx("div",{className:"juno-pagination-wrapper",style:te(),children:r.jsx(se,{value:a!==void 0?a:"",onChange:ee,onBlur:ne,onKeyPress:ae,disabled:!!l,className:de,maxLength:6})}),t!==void 0?r.jsxs("span",{children:["of ",t]}):""]});default:return""}})():"",r.jsx(q,{icon:"chevronRight",disabled:!!M||!!l||!!u||a!==void 0&&t!==void 0&&a===t,onClick:Y,title:"Next Page"})]})};try{x.displayName="Pagination",x.__docgenInfo={description:"The Pagination component provides navigation controls for paginated content.",displayName:"Pagination",props:{variant:{defaultValue:{value:"default"},description:`The variant determines the style and user interaction method of the Pagination component:
- "default": Renders previous and next buttons only.
- "number": Displays the current page number between next and previous buttons.
- "select": Provides a dropdown menu between next and previous buttons for specific page selection.
- "input": Provides an input field for specific page entry.`,name:"variant",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"default"'},{value:'"select"'},{value:'"input"'}]}},currentPage:{defaultValue:null,description:"The current page number.",name:"currentPage",required:!1,type:{name:"number"}},totalPages:{defaultValue:null,description:"The total number of pages available.",name:"totalPages",required:!1,type:{name:"number"}},pages:{defaultValue:null,description:"A fallback property for providing the total number of pages, maintained for backward compatibility.",name:"pages",required:!1,type:{name:"number"}},disabled:{defaultValue:{value:"false"},description:"When true, disables the entire pagination component, preventing any interaction.",name:"disabled",required:!1,type:{name:"boolean"}},isFirstPage:{defaultValue:null,description:"When true, simulates the component being on the first page, disabling the previous button.",name:"isFirstPage",required:!1,type:{name:"boolean"}},isLastPage:{defaultValue:null,description:"When true, simulates the component being on the last page, disabling the next button.",name:"isLastPage",required:!1,type:{name:"boolean"}},onPressPrevious:{defaultValue:null,description:"Callback function triggered when the previous button is pressed.",name:"onPressPrevious",required:!1,type:{name:"((newPage?: number) => void)"}},onPressNext:{defaultValue:null,description:"Callback function triggered when the next button is pressed.",name:"onPressNext",required:!1,type:{name:"((newPage?: number) => void)"}},onSelectChange:{defaultValue:null,description:'Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".',name:"onSelectChange",required:!1,type:{name:"((selected: number) => void)"}},onInputChange:{defaultValue:null,description:'Callback function triggered when the input field value changes, applicable when variant is "input".',name:"onInputChange",required:!1,type:{name:"((inputValue?: number) => void)"}},onBlur:{defaultValue:null,description:'Callback function triggered when the input field loses focus, applicable when variant is "input".',name:"onBlur",required:!1,type:{name:"((controlCurrentPage?: number) => void)"}},progress:{defaultValue:{value:"false"},description:"Displays a loading spinner and disables interaction when true.",name:"progress",required:!1,type:{name:"boolean"}}}}}catch{}const ke={title:"Components/Pagination",component:x,argTypes:{variant:{options:["default","number","select","input"],control:{type:"select"}},className:{control:"text",table:{type:{summary:"string"}}},onKeyPress:{control:!1,table:{type:{summary:"(controlCurrentPage?: number) => void"}}}},decorators:[i=>r.jsx("div",{className:"jn:pb-12",children:r.jsx(ue,{children:r.jsx(i,{})})})]},c={args:{variant:"default",currentPage:2,pages:6}},p={args:{variant:"number",currentPage:12,pages:6}},d={args:{variant:"select",currentPage:2,pages:6}},m={args:{variant:"input",currentPage:3,pages:6}},g={args:{disabled:!0}},f={args:{progress:!0}};var W,_,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "default",
    currentPage: 2,
    pages: 6
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var T,V,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "number",
    currentPage: 12,
    pages: 6
  }
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var A,B,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "select",
    currentPage: 2,
    pages: 6
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var L,$,F;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "input",
    currentPage: 3,
    pages: 6
  }
}`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var R,K,O;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(O=(K=g.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var z,G,H;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    progress: true
  }
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const qe=["Default","PaginationWithNumber","PaginationWithSelect","PaginationWithInput","DisabledPagination","ProgressPagination"];export{c as Default,g as DisabledPagination,m as PaginationWithInput,p as PaginationWithNumber,d as PaginationWithSelect,f as ProgressPagination,qe as __namedExportsOrder,ke as default};
