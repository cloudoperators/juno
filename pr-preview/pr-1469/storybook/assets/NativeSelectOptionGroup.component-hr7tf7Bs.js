import{r as t,j as e}from"./iframe-B4yXLd1L.js";import{I as i}from"./Icon.component-BfGXLch-.js";import{S as $}from"./Spinner.component-BD0vGsE9.js";const k=`
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
`,T="jn:relative",R=`
  jn:absolute
  jn:flex
  jn:right-2
  jn:top-1.5
  jn:pointer-events-none
`,D="jn:opacity-50",H="jn:border jn:border-theme-error",O="jn:border jn:border-theme-success",s={loading:`
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
  `,loadingSpinner:"jn:ml-auto jn:mr-auto",errorIcon:"jn:ml-auto jn:mr-auto",paddingIconRight:"jn:pr-[3.75rem]",paddingDefaultRight:"jn:pr-9"},G=({isLoading:n,hasError:l,isInvalid:o,isValid:r,disabled:a})=>n?e.jsx("div",{className:`juno-select-loading ${s.loading}`,children:e.jsx($,{className:s.loadingSpinner})}):l?e.jsx("div",{className:`juno-select-error-text ${s.error}`,children:e.jsx(i,{icon:"errorOutline",color:"jn:text-theme-error",className:s.errorIcon})}):e.jsxs("div",{className:`${R} ${a?D:""}`,children:[o&&e.jsx(i,{icon:"dangerous",color:"jn:text-theme-error"}),r&&e.jsx(i,{icon:"checkCircle",color:"jn:text-theme-success"}),e.jsx(i,{icon:"expandMore"})]}),y=({name:n="Unnamed Select",id:l="",children:o,className:r="",disabled:a=!1,invalid:c=!1,valid:d=!1,loading:u=!1,error:p=!1,onChange:g,onClick:b,wrapperClassName:S="",...N})=>{const[v,w]=t.useState(u),[m,C]=t.useState(d),[h,I]=t.useState(c),[f,V]=t.useState(p);t.useEffect(()=>w(u),[u]),t.useEffect(()=>C(d),[d]),t.useEffect(()=>I(c),[c]),t.useEffect(()=>V(p),[p]);const E=j=>g&&g(j),q=j=>b&&b(j),_=m||h?s.paddingIconRight:s.paddingDefaultRight;return e.jsxs("div",{className:`juno-select-wrapper ${T} ${S}`,children:[e.jsx("select",{name:n,id:l,className:`
          juno-select
          ${k}
          ${h?"juno-select-invalid "+H:""}
          ${m?"juno-select-valid "+O:""}
          ${f?"juno-select-error":""}
          ${_}
          ${r}
        `,onChange:E,onClick:q,disabled:a||v||f,...N,children:o}),e.jsx(G,{isLoading:v,hasError:f,isInvalid:h,isValid:m,disabled:a})]})};try{y.displayName="NativeSelect",y.__docgenInfo={description:"The `NativeSelect` component is a basic HTML select element with extra features\nsuch as styles and loading/error states. It supports native select options while\noffering customization for validation indicators.",displayName:"NativeSelect",props:{name:{defaultValue:{value:"Unnamed Select"},description:`Name of the select element.
Used as a key for the selected value if a form is submitted.`,name:"name",required:!1,type:{name:"string"}},id:{defaultValue:{value:""},description:"ID of the select element.",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the select element for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Elements to be rendered inside the select element.
This can be any React node or a collection of React nodes.
Typically, these are SelectOption or SelectOptionGroup components.`,name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Disables the select element, making it unclickable.",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Highlights the select element as invalid, indicating incorrect user input or validation errors.",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Highlights the select element as valid, indicating correct user input or successful validation.",name:"valid",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:`Displays a loading indicator over the select element.
Used for async operations like fetching data.`,name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:`Displays an error state over the select element, such as during data fetching errors.
Should not be used for validation errors.`,name:"error",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:`Event handler for the change event of the select element.
Triggered when the user changes the selected option.`,name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}},onClick:{defaultValue:null,description:`Event handler for the click event on the select element.
Triggered when the user clicks on the select element.`,name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLSelectElement>"}},wrapperClassName:{defaultValue:{value:""},description:"Additional CSS classes to apply to the outer wrapper of the select component for custom styling.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}const x=({label:n="",disabled:l=!1,className:o="",children:r,...a})=>e.jsx("optgroup",{label:n,disabled:l,className:`juno-select-option-group ${o}`,...a,children:r});try{x.displayName="NativeSelectOptionGroup",x.__docgenInfo={description:"The `NativeSelectOptionGroup` categorizes related options within a dropdown list,\nenhancing semantic groupings for larger datasets in `NativeSelect`.",displayName:"NativeSelectOptionGroup",props:{label:{defaultValue:{value:""},description:`A visible label for the option group.
It will be displayed as the group heading in the dropdown.`,name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Determines whether the option group is disabled.
If true, all options within the group will also be disabled.`,name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the option group for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Elements to be rendered within the option group.
Typically, these should be NativeSelectOption components.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{y as N,x as a};
