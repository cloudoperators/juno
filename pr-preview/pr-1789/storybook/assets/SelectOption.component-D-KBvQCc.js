import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./react-dom-Ey92KDtl.js";import{t as i}from"./jsx-runtime-O9QVJvLM.js";import{t as a}from"./Icon.component-CgZck1nd.js";import{t as o}from"./Icon-DG_TQlEl.js";import{r as s}from"./PortalProvider.component-Do0ZvEjj.js";import{t as c}from"./PortalProvider-Bar7CbH7.js";import{t as ee}from"./Spinner.component-BLgbJicd.js";import{t as l}from"./Spinner-B1wDQ7Ft.js";import{t as te}from"./Label.component-CXheOpeM.js";import{t as u}from"./Label-CGpbtceF.js";import{t as d}from"./FormHint.component-CUGIRvK-.js";import{t as f}from"./FormHint-C9CYRumS.js";import{c as p,l as ne,s as re,t as m,u as ie,v as ae}from"./headlessui.esm-NhkeCt-C.js";import{_ as oe,h as se,i as ce,m as le,n as ue,p as de,r as fe,s as pe,t as h,u as me}from"./floating-ui.react-DqXxk57h.js";var g=t((()=>{})),_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{_=e(n()),m(),u(),o(),l(),f(),h(),c(),v=e(r()),g(),y=i(),b=`
  jn:no-wrap
  jn:pointer-events-none
  jn:top-2
  jn:left-4
`,x=`
  jn:appearance-none
  jn:h-[2.375rem]
  jn:inline-flex
  jn:items-center
  jn:pl-4
  jn:pr-2
  jn:rounded-3px
  jn:select-none
  jn:text-base
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`,S=`
  jn:border
  jn:border-theme-success
`,C=`
  jn:border
  jn:border-theme-error
`,w=`
  jn:absolute
  jn:top-1/2
  jn:left-1/2
  jn:inline-flex
  jn:leading-none
  jn:translate-y-[-50%]
  jn:translate-x-[-0.75rem]
`,T=`
  jn:rounded
  jn:bg-theme-background-lvl-1
  jn:border
  jn:border-theme-default
  jn:shadow-theme-default
  jn:box-border
  jn:overflow-hidden
`,E=`
  jn:w-full
  jn:overflow-y-auto
  jn:focus:outline-hidden
`,D=`
  jn:block
  jn:h-6
  jn:overflow-hidden
  jn:text-ellipsis
  jn:whitespace-nowrap
`,O=(0,_.createContext)(void 0),k=({ariaLabel:e=``,children:t,className:n=``,defaultValue:r,disabled:i=!1,error:o=!1,errortext:c=``,helptext:l=``,id:u=``,invalid:f=!1,label:p,loading:m=!1,multiple:h=!1,name:g,onChange:k,onValueChange:A,placeholder:j=`Select…`,required:M=!1,successtext:N=``,truncateOptions:P=!1,valid:F=!1,value:I,valueLabel:L,variant:R=`default`,width:z=`full`,wrapperClassName:B=``,...he})=>{let V=e=>!(typeof e==`string`&&e.trim().length===0),ge=()=>`juno-select-`+(0,_.useId)(),[H,U]=(0,_.useState)(!1),W=u||ge(),G=`juno-select-helptext-`+(0,_.useId)(),[K,_e]=(0,_.useState)(new Map),[q,ve]=(0,_.useState)(!1),[J,ye]=(0,_.useState)(!1),[Y,be]=(0,_.useState)(!1),[X,xe]=(0,_.useState)(!1),Se=(e,t,n)=>{_e(r=>new Map([...Array.from(r),[e??n,{val:e,label:t,children:n,displayName:n??t??e}]]))},Z=(0,_.useMemo)(()=>f||!!(c&&V(c)),[f,c]),Q=(0,_.useMemo)(()=>F||!!(N&&V(N)),[F,N]);(0,_.useEffect)(()=>{ve(o)},[o]),(0,_.useEffect)(()=>{ye(Z)},[Z]),(0,_.useEffect)(()=>{be(Q)},[Q]),(0,_.useEffect)(()=>{xe(m)},[m]);let Ce=e=>{k&&k(e),A&&A(e)},we=s(),{x:Te,y:Ee,strategy:De,refs:Oe,context:$}=ce({open:H,onOpenChange:U,placement:`top`,whileElementsMounted:oe,middleware:[de(4),me({crossAxis:!0,allowedPlacements:[`bottom`,`top`]}),se({apply({availableWidth:e,availableHeight:t,elements:n,rects:r}){Object.assign(n.floating.style,{maxWidth:`${e}px`,maxHeight:`${t}px`,minWidth:`${r.reference.width}px`,overflowY:`auto`})}}),le()]}),{getReferenceProps:ke,getFloatingProps:Ae}=pe([ue($),fe($)]),je=e=>{let t=e=>{let t=K.get(e);if(t)return t.displayName?.length?t.displayName:null};return e.map(e=>t(e)).filter(e=>e&&e.toString().trim().length>0).join(`, `)};return(0,y.jsx)(O.Provider,{value:{truncateOptions:P,addOptionValueAndLabel:Se},children:(0,y.jsxs)(`div`,{className:`
          juno-select-wrapper 
          jn:relative
          ${z==`auto`?`jn:inline-block`:`jn:block`}
          ${z==`auto`?`jn:w-auto`:`jn:w-full`}
          ${B}
        `,children:[(0,y.jsx)(ne,{disabled:i||X||q,multiple:h,name:g,onChange:Ce,value:I,defaultValue:r,as:`div`,children:({open:r})=>((0,_.useEffect)(()=>{U(r)},[r]),(0,y.jsxs)(y.Fragment,{children:[p&&V(p)?(0,y.jsx)(ae,{as:te,htmlFor:W,text:p,className:`${b}`,disabled:i||X||q,required:M,floating:!0,minimized:!0}):``,(0,y.jsxs)(`div`,{children:[(0,y.jsx)(ie,{ref:Oe.setReference,"aria-describedby":l?G:``,"aria-label":e||p,as:`button`,id:W,className:`
                    juno-select-toggle
                    ${R&&R.length?`juno-select-toggle-`+R:`juno-select-toggle-default`}
                    ${z==`auto`?`jn:w-auto`:`jn:w-full`}
                    ${x}
                    
                    ${i?`juno-select-disabled jn:opacity-50 jn:cursor-not-allowed`:``}
                    ${X||q?`jn:justify-center`:`jn:justify-between`}
                    ${J?`juno-select-invalid `+C:``} 
                    ${Y?`juno-select-valid `+S:``}  
                    
                    ${X?`juno-select-loading jn:cursor-not-allowed`:``}
                    ${q?`juno-select-error jn:cursor-not-allowed`:``}
                    ${n}
                  `,...ke(),...he,children:({open:e,value:t})=>((0,_.useEffect)(()=>{e!==H&&U(e)},[e]),!q&&!X?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`span`,{className:`${D} ${p&&V(p)?`jn:mt-[0.85rem]`:``}`,children:Me(t)}),(0,y.jsxs)(`span`,{className:`jn:flex jn:items-center`,children:[Y?(0,y.jsx)(a,{icon:`checkCircle`,color:`jn:text-theme-success`}):``,J?(0,y.jsx)(a,{icon:`dangerous`,color:`jn:text-theme-error`}):``,(0,y.jsx)(`span`,{className:`jn:inline-flex jn:leading-none`,children:(0,y.jsx)(a,{icon:e?`expandLess`:`expandMore`})})]})]}):(0,y.jsx)(`span`,{className:`${w}`,children:q?(0,y.jsx)(a,{icon:`errorOutline`,color:`jn:text-theme-error`,className:`jn:cursor-not-allowed`}):X?(0,y.jsx)(ee,{className:`jn:cursor-not-allowed`}):``}))}),(0,v.createPortal)((0,y.jsx)(`div`,{ref:Oe.setFloating,className:`
                          juno-select-menu-container
                          ${T}
                        `,style:{position:De,top:Ee??0,left:Te??0,display:r?`block`:`none`},...Ae(),children:(0,y.jsx)(re,{static:!0,className:`
                          juno-select-menu
                          ${E}
                        `,children:t})}),we??document.body)]})]}))}),c&&V(c)?(0,y.jsx)(d,{text:c,variant:`error`}):``,N&&V(N)?(0,y.jsx)(d,{text:N,variant:`success`}):``,l&&V(l)?(0,y.jsx)(d,{text:l,id:G}):``]})});function Me(e){if(h)return je(e)||L||e.join(`, `)||j;{let t=K.get(e);return t?t.displayName||L||e||j:L||e||j}}};try{O.displayName=`SelectContext`,O.__docgenInfo={description:``,displayName:`SelectContext`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Select/Select.component.tsx`,methods:[],props:{},tags:{}}}catch{}try{k.displayName=`Select`,k.__docgenInfo={description:"A Select component that can be configured to allow selecting a single item or multiple items.\nPass a `defaultValue` to render as an uncontrolled component that tracks its open state etc internally.",displayName:`Select`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Select/Select.component.tsx`,methods:[],props:{ariaLabel:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Pass an aria-label to the Select toggle button`,name:`ariaLabel`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`The children to render as options. Use the SelectOption component, and SelectDivider if needed.`,name:`children`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Pass a custom className to the internal Select toggle button`,name:`className`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:"Pass a defaultValue to use as an uncontrolled component that handles its state internally. When setting `multiple` on the Select pass an Array instead of a string.",name:`defaultValue`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string | string[]`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether the Select is disabled`,name:`disabled`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:"Whether the Select has an error, e.g. when loading options. When validated negatively, use `invalid` instead.",name:`error`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},errortext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`A small message rendered in red text below the Select toggle.`,name:`errortext`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`A small, neutral text rendered below the Select toggle to explain meaning and significance of the Select element`,name:`helptext`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},id:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Pass an id to the Select toggle`,name:`id`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},invalid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether the Select has been validated unsuccessfully / negatively`,name:`invalid`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Pass a label to render in the Select toggle button`,name:`label`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},loading:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether the Select is busy loading options. Will show a Spinner in the Select toggle.`,name:`loading`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},multiple:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:"Whether multiple options of the Select can be selected. When passing true, pass an array containing one or multiple options as `value` / `defaultValue` respectively.",name:`multiple`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},name:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Pass a name attribute to the Select to be transmitted when used in a form.`,name:`name`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Handler to be executed when the selected value changes`,name:`onChange`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`((value?: string | number | string[]) => void)`}},open:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Handle for openning of select`,name:`open`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},onValueChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`LEGACY: Handler to be executed when the Select value changes. Here for backwards compatibility with apps based on older versions of Select. Use onChange instead.`,name:`onValueChange`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`((value?: string | number | string[]) => void)`}},placeholder:{defaultValue:{value:`Select…`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`A placeholder to render when no value has been selected. Default is "Select…".`,name:`placeholder`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether a selection is required. Will show a small required marker next to the label. If no label is used, no marker will be visible.`,name:`required`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},successtext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:"A note to render below the Select toggle in case the selected value has been positively validated. Will set the visible state of the Select toggle to `valid`.",name:`successtext`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},truncateOptions:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether long texts in options will be truncated with "…" or not. Default is false. The Select toggle label will always be truncated.`,name:`truncateOptions`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},valid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether the Select was positively validated. Will show a green checkmark icon inside the Select toggle.`,name:`valid`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:"The currently (pre-)selected value of the Select. Will trigger controlled mode. When setting `multiple` on the Select pass an Array instead of a string.",name:`value`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string | number | string[]`}},valueLabel:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`The label of the passed value or defaultValue. If you want to use controlled mode or pass as defaultValue in uncontrolled mode and additionally use labels for
human-readable SelectOptions you need to also pass the matching label for the passed value/defaultValue so that the Select component can render itself properly.`,name:`valueLabel`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`The semantic variant of the Select toggle button.`,name:`variant`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`enum`,raw:`"default" | "primary" | "primary-danger" | "subdued"`,value:[{value:`"default"`},{value:`"primary"`},{value:`"primary-danger"`},{value:`"subdued"`}]}},width:{defaultValue:{value:`full`},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Whether the Select toggle should consume the available width of its parent container (default), or render its "natural" width depending on the content and the currently selected value or state.`,name:`width`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`enum`,raw:`"auto" | "full"`,value:[{value:`"auto"`},{value:`"full"`}]}},wrapperClassName:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`}],description:`Pass a custom classname to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning.`,name:`wrapperClassName`,parent:{fileName:`ui-components/src/components/Select/Select.component.tsx`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-select-select--docs
{@link SelectProps }`}}}catch{}})),j,M,N,P,F,I,L,R,z,B=t((()=>{j=e(n()),m(),A(),o(),M=i(),N=`
  jn:flex
  jn:pt-2.75
  jn:pb-[0.5rem]
  jn:pr-3.5
  jn:select-none
  jn:data-[active]:outline-hidden
  jn:data-[active]:ring-2
  jn:data-[active]:ring-inset
  jn:data-[active]:ring-theme-focus
  jn:data-[active]:bg-theme-background-lvl-3
`,P=`
  jn:text-theme-default
  jn:pl-9.5
`,F=`
  jn:text-theme-accent
  jn:pl-3.5
`,I=`
  jn:inline-block
  jn:mr-1.5
  jn:overflow-auto
`,L=`
  jn:opacity-50
  jn:cursor-not-allowed
`,R=`
  jn:block
  jn:h-6
  jn:overflow-hidden
  jn:text-ellipsis
  jn:whitespace-nowrap
`,z=({children:e,className:t=``,disabled:n=!1,value:r=``,label:i,...o})=>{let{truncateOptions:s,addOptionValueAndLabel:c}=(0,j.useContext)(O)||{truncateOptions:!1,addOptionValueAndLabel:()=>{}};return(0,j.useEffect)(()=>{c(r,i,e)},[r,i,e]),(0,M.jsx)(p,{as:j.Fragment,disabled:n,value:r||e,children:({selected:c})=>(0,M.jsxs)(`li`,{className:`
          juno-select-option 
          jn:min-h-10
          ${N}
          ${c?`juno-select-option-selected `+F:P}
          ${n?`juno-select-option-disabled jn:opacity-50 jn:cursor-not-allowed`:``}
          ${s?`juno-select-option-truncate`:``}
          ${t}
        `,...o,children:[c?(0,M.jsx)(a,{icon:`check`,size:`18`,className:I}):``,(0,M.jsx)(`span`,{className:`
            ${n?L:``}
            ${s?R:``}
          `,children:e||i||r})]})})};try{z.displayName=`SelectOption`,z.__docgenInfo={description:"The `SelectOption` component is part of a customizable `Select` dropdown menu designed to enhance the user interface with selectable options.\nIt provides functionality to render each option within a dropdown list, distinctly handling states for selection, disabling, and styling preferences such as text truncation.\nIt leverages context to communicate option selections back to the parent Select component, facilitating seamless integration and interaction within form controls.",displayName:`SelectOption`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SelectOption/SelectOption.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`}],description:`The primary display content for the option. If neither label nor value is provided, this becomes the fallback text.`,name:`children`,parent:{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`}],description:`Additional styling`,name:`className`,parent:{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`}],description:`Controls whether the option can be selected. When true, the option is visibly styled to appear disabled, marked by opacity reduction and a "not-allowed" cursor.`,name:`disabled`,parent:{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`},required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`}],description:`Represents the unique value of the option. If omitted, children becomes the default value. This prop is fundamental for tracking selections within the dropdown list.`,name:`value`,parent:{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`}],description:`Provides an alternative text label for the option. This can replace or supplement children and value in display scenarios.`,name:`label`,parent:{fileName:`ui-components/src/components/SelectOption/SelectOption.component.tsx`,name:`SelectOptionProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-select-selectoption--docs
{@link SelectOptionProps }`}}}catch{}}));export{A as i,B as n,k as r,z as t};