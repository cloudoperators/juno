import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,z as r}from"./iframe-C5gf7_sb.js";import{r as i,t as a}from"./Icon.component-D6t-lz4T.js";import{n as o,t as s}from"./Spinner.component-CqKpiZAV.js";var c,l,u,d,f,p,m,h,g,_,v,y=e((()=>{c=t(r()),i(),o(),l=n(),u=`
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
`,d=`jn:relative`,f=`
  jn:absolute
  jn:flex
  jn:right-2
  jn:top-1.5
  jn:pointer-events-none
`,p=`jn:opacity-50`,m=`jn:border jn:border-theme-error`,h=`jn:border jn:border-theme-success`,g={loading:`
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
  `,loadingSpinner:`jn:ml-auto jn:mr-auto`,errorIcon:`jn:ml-auto jn:mr-auto`,paddingIconRight:`jn:pr-[3.75rem]`,paddingDefaultRight:`jn:pr-9`},_=({isLoading:e,hasError:t,isInvalid:n,isValid:r,disabled:i})=>e?(0,l.jsx)(`div`,{className:`juno-select-loading ${g.loading}`,children:(0,l.jsx)(s,{className:g.loadingSpinner})}):t?(0,l.jsx)(`div`,{className:`juno-select-error-text ${g.error}`,children:(0,l.jsx)(a,{icon:`errorOutline`,color:`jn:text-theme-error`,className:g.errorIcon})}):(0,l.jsxs)(`div`,{className:`${f} ${i?p:``}`,children:[n&&(0,l.jsx)(a,{icon:`dangerous`,color:`jn:text-theme-error`}),r&&(0,l.jsx)(a,{icon:`checkCircle`,color:`jn:text-theme-success`}),(0,l.jsx)(a,{icon:`expandMore`})]}),v=({name:e=`Unnamed Select`,id:t=``,children:n,className:r=``,disabled:i=!1,invalid:a=!1,valid:o=!1,loading:s=!1,error:f=!1,onChange:p,onClick:v,wrapperClassName:y=``,...b})=>{let[x,S]=(0,c.useState)(s),[C,w]=(0,c.useState)(o),[T,E]=(0,c.useState)(a),[D,O]=(0,c.useState)(f);(0,c.useEffect)(()=>S(s),[s]),(0,c.useEffect)(()=>w(o),[o]),(0,c.useEffect)(()=>E(a),[a]),(0,c.useEffect)(()=>O(f),[f]);let k=e=>p&&p(e),A=e=>v&&v(e),j=C||T?g.paddingIconRight:g.paddingDefaultRight;return(0,l.jsxs)(`div`,{className:`juno-select-wrapper ${d} ${y}`,children:[(0,l.jsx)(`select`,{name:e,id:t,className:`
          juno-select
          ${u}
          ${T?`juno-select-invalid `+m:``}
          ${C?`juno-select-valid `+h:``}
          ${D?`juno-select-error`:``}
          ${j}
          ${r}
        `,onChange:k,onClick:A,disabled:i||x||D,...b,children:n}),(0,l.jsx)(_,{isLoading:x,hasError:D,isInvalid:T,isValid:C,disabled:i})]})};try{v.displayName=`NativeSelect`,v.__docgenInfo={description:`The \`NativeSelect\` component is a basic HTML select element with extra features
such as styles and loading/error states. It supports native select options while
offering customization for validation indicators.`,displayName:`NativeSelect`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,methods:[],props:{name:{defaultValue:{value:`Unnamed Select`},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Name of the select element.
Used as a key for the selected value if a form is submitted.`,name:`name`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`"Unnamed Select"`},type:{name:`string`}},id:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`ID of the select element.`,name:`id`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Additional CSS classes to apply to the select element for custom styling.`,name:`className`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`""`},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Elements to be rendered inside the select element.
This can be any React node or a collection of React nodes.
Typically, these are SelectOption or SelectOptionGroup components.`,name:`children`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Disables the select element, making it unclickable.`,name:`disabled`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Highlights the select element as invalid, indicating incorrect user input or validation errors.`,name:`invalid`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},valid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Highlights the select element as valid, indicating correct user input or successful validation.`,name:`valid`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Displays a loading indicator over the select element.
Used for async operations like fetching data.`,name:`loading`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Displays an error state over the select element, such as during data fetching errors.
Should not be used for validation errors.`,name:`error`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Event handler for the change event of the select element.
Triggered when the user changes the selected option.`,name:`onChange`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLSelectElement>`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Event handler for the click event on the select element.
Triggered when the user clicks on the select element.`,name:`onClick`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLSelectElement>`}},wrapperClassName:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`}],description:`Additional CSS classes to apply to the outer wrapper of the select component for custom styling.`,name:`wrapperClassName`,parent:{fileName:`ui-components/src/components/NativeSelect/NativeSelect.component.tsx`,name:`NativeSelectProps`},required:!1,tags:{default:`""`},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-nativeselect-nativeselect--docs
{@link NativeSelectProps }`}}}catch{}}));export{y as n,v as t};