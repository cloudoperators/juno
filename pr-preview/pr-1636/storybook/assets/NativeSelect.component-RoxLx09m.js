import{g as e}from"./iframe-DaLLswkI.js";import{t}from"./Icon.component-q7FNz7wU.js";import{t as n}from"./Spinner.component-D165Ltmg.js";import{useEffect as r,useState as i}from"react";var a=e(),o=`
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
`,s=`jn:relative`,c=`
  jn:absolute
  jn:flex
  jn:right-2
  jn:top-1.5
  jn:pointer-events-none
`,l=`jn:opacity-50`,u=`jn:border jn:border-theme-error`,d=`jn:border jn:border-theme-success`,f={loading:`
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
  `,loadingSpinner:`jn:ml-auto jn:mr-auto`,errorIcon:`jn:ml-auto jn:mr-auto`,paddingIconRight:`jn:pr-[3.75rem]`,paddingDefaultRight:`jn:pr-9`},p=({isLoading:e,hasError:r,isInvalid:i,isValid:o,disabled:s})=>e?(0,a.jsx)(`div`,{className:`juno-select-loading ${f.loading}`,children:(0,a.jsx)(n,{className:f.loadingSpinner})}):r?(0,a.jsx)(`div`,{className:`juno-select-error-text ${f.error}`,children:(0,a.jsx)(t,{icon:`errorOutline`,color:`jn:text-theme-error`,className:f.errorIcon})}):(0,a.jsxs)(`div`,{className:`${c} ${s?l:``}`,children:[i&&(0,a.jsx)(t,{icon:`dangerous`,color:`jn:text-theme-error`}),o&&(0,a.jsx)(t,{icon:`checkCircle`,color:`jn:text-theme-success`}),(0,a.jsx)(t,{icon:`expandMore`})]}),m=({name:e=`Unnamed Select`,id:t=``,children:n,className:c=``,disabled:l=!1,invalid:m=!1,valid:h=!1,loading:g=!1,error:_=!1,onChange:v,onClick:y,wrapperClassName:b=``,...x})=>{let[S,C]=i(g),[w,T]=i(h),[E,D]=i(m),[O,k]=i(_);r(()=>C(g),[g]),r(()=>T(h),[h]),r(()=>D(m),[m]),r(()=>k(_),[_]);let A=e=>v&&v(e),j=e=>y&&y(e),M=w||E?f.paddingIconRight:f.paddingDefaultRight;return(0,a.jsxs)(`div`,{className:`juno-select-wrapper ${s} ${b}`,children:[(0,a.jsx)(`select`,{name:e,id:t,className:`
          juno-select
          ${o}
          ${E?`juno-select-invalid `+u:``}
          ${w?`juno-select-valid `+d:``}
          ${O?`juno-select-error`:``}
          ${M}
          ${c}
        `,onChange:A,onClick:j,disabled:l||S||O,...x,children:n}),(0,a.jsx)(p,{isLoading:S,hasError:O,isInvalid:E,isValid:w,disabled:l})]})};try{m.displayName=`NativeSelect`,m.__docgenInfo={description:`The \`NativeSelect\` component is a basic HTML select element with extra features
such as styles and loading/error states. It supports native select options while
offering customization for validation indicators.`,displayName:`NativeSelect`,props:{name:{defaultValue:{value:`Unnamed Select`},description:`Name of the select element.
Used as a key for the selected value if a form is submitted.`,name:`name`,required:!1,type:{name:`string`}},id:{defaultValue:{value:``},description:`ID of the select element.`,name:`id`,required:!1,type:{name:`string`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the select element for custom styling.`,name:`className`,required:!1,type:{name:`string`}},children:{defaultValue:null,description:`Elements to be rendered inside the select element.
This can be any React node or a collection of React nodes.
Typically, these are SelectOption or SelectOptionGroup components.`,name:`children`,required:!1,type:{name:`ReactNode`}},disabled:{defaultValue:{value:`false`},description:`Disables the select element, making it unclickable.`,name:`disabled`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Highlights the select element as invalid, indicating incorrect user input or validation errors.`,name:`invalid`,required:!1,type:{name:`boolean`}},valid:{defaultValue:{value:`false`},description:`Highlights the select element as valid, indicating correct user input or successful validation.`,name:`valid`,required:!1,type:{name:`boolean`}},loading:{defaultValue:{value:`false`},description:`Displays a loading indicator over the select element.
Used for async operations like fetching data.`,name:`loading`,required:!1,type:{name:`boolean`}},error:{defaultValue:{value:`false`},description:`Displays an error state over the select element, such as during data fetching errors.
Should not be used for validation errors.`,name:`error`,required:!1,type:{name:`boolean`}},onChange:{defaultValue:null,description:`Event handler for the change event of the select element.
Triggered when the user changes the selected option.`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLSelectElement>`}},onClick:{defaultValue:null,description:`Event handler for the click event on the select element.
Triggered when the user clicks on the select element.`,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLSelectElement>`}},wrapperClassName:{defaultValue:{value:``},description:`Additional CSS classes to apply to the outer wrapper of the select component for custom styling.`,name:`wrapperClassName`,required:!1,type:{name:`string`}}}}}catch{}export{m as t};