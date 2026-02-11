import{r as n,j as e}from"./iframe-CmWawiEA.js";import{I as l}from"./Icon.component-qN065CEA.js";import{S as $}from"./Spinner.component-8WBJxe8f.js";const k=`
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
`,H="jn:relative",R=`
  jn:absolute
  jn:flex
  jn:right-2
  jn:top-1.5
  jn:pointer-events-none
`,T="jn:opacity-50",_="jn:border jn:border-theme-error",D="jn:border jn:border-theme-success",t={loading:`
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
  `,loadingSpinner:"jn:ml-auto jn:mr-auto",errorIcon:"jn:ml-auto jn:mr-auto",paddingIconRight:"jn:pr-[3.75rem]",paddingDefaultRight:"jn:pr-9"},L=({isLoading:a,hasError:r,isInvalid:o,isValid:i,disabled:s})=>a?e.jsx("div",{className:`juno-select-loading ${t.loading}`,children:e.jsx($,{className:t.loadingSpinner})}):r?e.jsx("div",{className:`juno-select-error-text ${t.error}`,children:e.jsx(l,{icon:"errorOutline",color:"jn:text-theme-error",className:t.errorIcon})}):e.jsxs("div",{className:`${R} ${s?T:""}`,children:[o&&e.jsx(l,{icon:"dangerous",color:"jn:text-theme-error"}),i&&e.jsx(l,{icon:"checkCircle",color:"jn:text-theme-success"}),e.jsx(l,{icon:"expandMore"})]}),x=({name:a="Unnamed Select",id:r="",children:o,className:i="",disabled:s=!1,invalid:c=!1,valid:d=!1,loading:u=!1,error:m=!1,onChange:g,onClick:v,wrapperClassName:y="",...S})=>{const[b,N]=n.useState(u),[p,C]=n.useState(d),[j,E]=n.useState(c),[f,I]=n.useState(m);n.useEffect(()=>N(u),[u]),n.useEffect(()=>C(d),[d]),n.useEffect(()=>E(c),[c]),n.useEffect(()=>I(m),[m]);const V=h=>g&&g(h),q=h=>v&&v(h),w=p||j?t.paddingIconRight:t.paddingDefaultRight;return e.jsxs("div",{className:`juno-select-wrapper ${H} ${y}`,children:[e.jsx("select",{name:a,id:r,className:`
          juno-select
          ${k}
          ${j?"juno-select-invalid "+_:""}
          ${p?"juno-select-valid "+D:""}
          ${f?"juno-select-error":""}
          ${w}
          ${i}
        `,onChange:V,onClick:q,disabled:s||b||f,...S,children:o}),e.jsx(L,{isLoading:b,hasError:f,isInvalid:j,isValid:p,disabled:s})]})};try{x.displayName="NativeSelect",x.__docgenInfo={description:`A basic, uncontrolled native HTML select component.
Takes NativeSelectOption and NativeSelectOptionGroup children as options.
Handles states such as loading, valid, invalid, and error.`,displayName:"NativeSelect",props:{name:{defaultValue:{value:"Unnamed Select"},description:`Name of the select element.
Used as a key for the selected value if a form is submitted.`,name:"name",required:!1,type:{name:"string"}},id:{defaultValue:{value:""},description:"ID of the select element.",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the select element for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Elements to be rendered inside the select element.
This can be any React node or a collection of React nodes.
Typically, these are SelectOption or SelectOptionGroup components.`,name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Disables the select element, making it unclickable.",name:"disabled",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"false"},description:"Highlights the select element as invalid, indicating incorrect user input or validation errors.",name:"invalid",required:!1,type:{name:"boolean"}},valid:{defaultValue:{value:"false"},description:"Highlights the select element as valid, indicating correct user input or successful validation.",name:"valid",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:`Displays a loading indicator over the select element.
Used for async operations like fetching data.`,name:"loading",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:`Displays an error state over the select element, such as during data fetching errors.
Should not be used for validation errors.`,name:"error",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:`Event handler for the change event of the select element.
Triggered when the user changes the selected option.`,name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLSelectElement>"}},onClick:{defaultValue:null,description:`Event handler for the click event on the select element.
Triggered when the user clicks on the select element.`,name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLSelectElement>"}},wrapperClassName:{defaultValue:{value:""},description:"Additional CSS classes to apply to the outer wrapper of the select component for custom styling.",name:"wrapperClassName",required:!1,type:{name:"string"}}}}}catch{}export{x as N};
