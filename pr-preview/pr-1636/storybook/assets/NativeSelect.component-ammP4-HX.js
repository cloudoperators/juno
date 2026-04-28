import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import{t as i}from"./Spinner.component-C2Z0Zppr.js";var a=e(t()),o=n(),s=`
  jn:w-full
  jn:bg-theme-select
  jn:text-theme-high
  jn:appearance-none
  jn:text-base
  jn:pl-4
  jn:h-[2.375rem]
  jn:rounded-3px
  jn:bg-icon-arrow-down
  jn:bg-right
  jn:bg-no-repeat
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
`,c=`jn:relative`,l=`
  jn:absolute
  jn:flex
  jn:right-2
  jn:top-1.5
  jn:pointer-events-none
`,u=`jn:opacity-50`,d=`jn:border jn:border-theme-error`,f=`jn:border jn:border-theme-success`,p={loading:`
    jn:absolute
    jn:top-0
    jn:right-0
    jn:bottom-0
    jn:left-0
    jn:text-center
    jn:bg-theme-select
    jn:text-theme-high
    jn:text-base
    jn:rounded-3px
    jn:flex
    jn:flex-col
    jn:justify-center
    jn:select-none
    jn:cursor-not-allowed
  `,error:`
    jn:absolute
    jn:top-0
    jn:right-0
    jn:bottom-0
    jn:left-0
    jn:text-center
    jn:bg-theme-select
    jn:text-theme-high
    jn:text-base
    jn:rounded-3px
    jn:flex
    jn:flex-col
    jn:justify-center
    jn:select-none
    jn:cursor-not-allowed
  `,loadingSpinner:`jn:ml-auto jn:mr-auto`,errorIcon:`jn:ml-auto jn:mr-auto`,paddingIconRight:`jn:pr-[3.75rem]`,paddingDefaultRight:`jn:pr-9`},m=({isLoading:e,hasError:t,isInvalid:n,isValid:a,disabled:s})=>e?(0,o.jsx)(`div`,{className:`juno-select-loading ${p.loading}`,children:(0,o.jsx)(i,{className:p.loadingSpinner})}):t?(0,o.jsx)(`div`,{className:`juno-select-error-text ${p.error}`,children:(0,o.jsx)(r,{icon:`errorOutline`,color:`jn:text-theme-error`,className:p.errorIcon})}):(0,o.jsxs)(`div`,{className:`${l} ${s?u:``}`,children:[n&&(0,o.jsx)(r,{icon:`dangerous`,color:`jn:text-theme-error`}),a&&(0,o.jsx)(r,{icon:`checkCircle`,color:`jn:text-theme-success`}),(0,o.jsx)(r,{icon:`expandMore`})]}),h=({name:e=`Unnamed Select`,id:t=``,children:n,className:r=``,disabled:i=!1,invalid:l=!1,valid:u=!1,loading:h=!1,error:g=!1,onChange:_,onClick:v,wrapperClassName:y=``,...b})=>{let[x,S]=(0,a.useState)(h),[C,w]=(0,a.useState)(u),[T,E]=(0,a.useState)(l),[D,O]=(0,a.useState)(g);(0,a.useEffect)(()=>S(h),[h]),(0,a.useEffect)(()=>w(u),[u]),(0,a.useEffect)(()=>E(l),[l]),(0,a.useEffect)(()=>O(g),[g]);let k=e=>_&&_(e),A=e=>v&&v(e),j=C||T?p.paddingIconRight:p.paddingDefaultRight;return(0,o.jsxs)(`div`,{className:`juno-select-wrapper ${c} ${y}`,children:[(0,o.jsx)(`select`,{name:e,id:t,className:`
          juno-select
          ${s}
          ${T?`juno-select-invalid `+d:``}
          ${C?`juno-select-valid `+f:``}
          ${D?`juno-select-error`:``}
          ${j}
          ${r}
        `,onChange:k,onClick:A,disabled:i||x||D,...b,children:n}),(0,o.jsx)(m,{isLoading:x,hasError:D,isInvalid:T,isValid:C,disabled:i})]})};try{h.displayName=`NativeSelect`,h.__docgenInfo={description:`The \`NativeSelect\` component is a basic HTML select element with extra features
such as styles and loading/error states. It supports native select options while
offering customization for validation indicators.`,displayName:`NativeSelect`,props:{name:{defaultValue:{value:`Unnamed Select`},description:`Name of the select element.
Used as a key for the selected value if a form is submitted.`,name:`name`,required:!1,type:{name:`string`}},id:{defaultValue:{value:``},description:`ID of the select element.`,name:`id`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the select element for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Elements to be rendered inside the select element.
This can be any React node or a collection of React nodes.
Typically, these are SelectOption or SelectOptionGroup components.`,name:`children`,required:!1,type:{name:`ReactNode`}},disabled:{defaultValue:{value:`false`},description:`Disables the select element, making it unclickable.`,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Highlights the select element as invalid, indicating incorrect user input or validation errors.`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Highlights the select element as valid, indicating correct user input or successful validation.`,name:`valid`,required:!1,type:{name:`boolean`}},loading:{defaultValue:{value:`false`},description:`Displays a loading indicator over the select element.
Used for async operations like fetching data.`,name:`loading`,required:!1,type:{name:`boolean`}},error:{defaultValue:{value:`false`},description:`Displays an error state over the select element, such as during data fetching errors.
Should not be used for validation errors.`,name:`error`,required:!1,type:{name:`boolean`}},onChange:{defaultValue:null,description:`Event handler for the change event of the select element.
Triggered when the user changes the selected option.`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLSelectElement>`}},onClick:{defaultValue:null,description:`Event handler for the click event on the select element.
Triggered when the user clicks on the select element.`,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLSelectElement>`}},wrapperClassName:{defaultValue:{value:``},description:`Additional CSS classes to apply to the outer wrapper of the select component for custom styling.`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{h as t};