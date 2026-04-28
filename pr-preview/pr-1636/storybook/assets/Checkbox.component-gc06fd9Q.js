import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Icon.component-hvX4Q9Gp.js";import"./Icon-DLrP9JFG.js";import{t as n}from"./Label.component-mAazW_um.js";import"./Label-CImr6S3W.js";import{t as r}from"./FormHint.component-C3mF-9wB.js";import"./FormHint-CO3JKcl6.js";import{createContext as i,useContext as a,useEffect as o,useId as s,useMemo as c,useState as l}from"react";var u=e(),d=`
  jn:mb-4
  jn:last:mb-0
`,f=`
  jn:relative
  jn:rounded
  jn:border
  jn:py-1
`,p=`
  jn:border-transparent
`,m=`
  jn:border-theme-success
  jn:px-2
`,h=`
  jn:border-theme-error
  jn:px-2
`,g=`
  jn:absolute
  jn:right-2
  jn:top-1.5
`,_=i(void 0),v=({children:e,className:i=``,disabled:a=!1,errortext:v=``,helptext:y=``,id:b=``,invalid:x=!1,label:S,name:C=``,onChange:w,required:ee=!1,selected:T,successtext:E=``,valid:D=!1,...O})=>{let k=e=>!(typeof e==`string`&&e.trim().length===0),A=()=>`juno-checkboxgroup-`+s(),j=C||A(),M=b||A(),[N,P]=l(T),[F,I]=l(!1),[L,R]=l(!1),z=c(()=>D||!!(E&&k(E)),[D,E]),B=c(()=>x||!!(v&&k(v)),[x,v]);return o(()=>{T&&P(T)},[T]),o(()=>{I(z)},[z]),o(()=>{R(B)},[B]),(0,u.jsx)(_.Provider,{value:{selectedOptions:N,name:j,disabled:a,handleCheckboxChange:e=>{let t=e;N&&N.includes(e)?P(N.filter(e=>e!==t)):N&&!N.includes(e)?P(e=>[...e||[],t]):P([t]),w&&w(e)},updateSelectedValue:e=>{T||P(t=>[...t||[],e])}},children:(0,u.jsxs)(`div`,{className:`
          juno-checkboxgroup 
          ${F?`juno-checkboxgroup-valid`:``} 
          ${L?`juno-checkboxgroup-invalid`:``} 
          ${d} 
          ${i}
        `,id:M,role:`group`,...O,children:[S&&k(S)?(0,u.jsx)(n,{text:S,htmlFor:M,disabled:a,required:ee}):``,(0,u.jsxs)(`div`,{className:`
            juno-checkbox-group-options 
            ${f} 
            ${F?m:``} 
            ${L?h:``} 
            ${F||L?``:p}
          `,children:[L?(0,u.jsx)(t,{icon:`dangerous`,color:`jn:text-theme-error`,className:`${g}`}):``,F?(0,u.jsx)(t,{icon:`checkCircle`,color:`jn:text-theme-success`,className:`${g}`}):``,e]}),v&&k(v)?(0,u.jsx)(r,{text:v,variant:`error`}):``,E&&k(E)?(0,u.jsx)(r,{text:E,variant:`success`}):``,y&&k(y)?(0,u.jsx)(r,{text:y}):``]})})};try{_.displayName=`CheckboxGroupContext`,_.__docgenInfo={description:``,displayName:`CheckboxGroupContext`,props:{}}}catch{}try{v.displayName=`CheckboxGroup`,v.__docgenInfo={description:`The \`CheckboxGroup\` component provides a context-managed grouping of checkbox elements.
It manages the collective state for checkboxes, allowing for individual or batch validation
and selection. It supports states such as disabled, valid, and invalid, and offers customization
for error and success messages. It also furnishes a grouped label and help text for a unified UI.`,displayName:`CheckboxGroup`,props:{children:{defaultValue:null,description:`The Checkbox children of the CheckboxGroup.`,name:`children`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Custom class names for styling the CheckboxGroup.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Disables all checkboxes in the group.`,name:`disabled`,required:!1,type:{name:`boolean`}},errortext:{defaultValue:{value:``},description:`Text displayed if validation fails or there is an error. Indicates group invalidity when set.`,name:`errortext`,required:!1,type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},description:`Additional text explaining the significance of this group.`,name:`helptext`,required:!1,type:{name:`ReactNode`}},id:{defaultValue:{value:``},description:`The group's ID. Automatically generated if not provided.`,name:`id`,required:!1,type:{name:`string`}},invalid:{defaultValue:{value:`false`},description:`Indicates if the CheckboxGroup is marked as invalid.`,name:`invalid`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:`The label text for the CheckboxGroup.`,name:`label`,required:!1,type:{name:`string`}},name:{defaultValue:{value:``},description:`Name for all checkboxes in the group. Generated if not supplied.`,name:`name`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Event handler triggered when any checkbox selection changes.`,name:`onChange`,required:!1,type:{name:`EventUpdateHandler`}},required:{defaultValue:{value:`false`},description:`Specifies if a selection is required in this group.`,name:`required`,required:!1,type:{name:`boolean`}},selected:{defaultValue:null,description:`Array of values representing the initially selected checkboxes in the group.`,name:`selected`,required:!1,type:{name:`string[]`}},successtext:{defaultValue:{value:``},description:`Text displayed upon successful validation, which marks the group as valid.`,name:`successtext`,required:!1,type:{name:`ReactNode`}},valid:{defaultValue:{value:`false`},description:`Specifies if the CheckboxGroup has been successfully validated.`,name:`valid`,required:!1,type:{name:`boolean`}}}}}catch{}var y=`
  jn:inline-flex
  jn:items-center
`,b=e=>`
    jn:w-4
    jn:h-4
    jn:opacity-0
    jn:z-50
    ${e?`jn:cursor-not-allowed`:`jn:cursor-pointer`}
  `,x=`
  jn:relative
  jn:w-4
  jn:h-4
  jn:rounded-sm
  jn:bg-theme-checkbox
  jn:cursor-pointer
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`,S=`
  jn:ring-2
  jn:ring-theme-focus
`,C=`
  jn:absolute
  jn:top-0
  jn:left-0
  jn:text-theme-checkbox-checked
  jn:fill-current
`,w=`
  jn:absolute
  jn:w-2
  jn:h-0.5
  jn:top-1.5
  jn:left-[.2rem]
  jn:inline-block
  jn:bg-theme-focus
`,ee=`
  jn:pointer-events-none
  jn:opacity-50
  jn:cursor-not-allowed
`,T=`
  jn:border
  jn:border-transparent
`,E=`
  jn:border
  jn:border-theme-error
`,D=`
  jn:border
  jn:border-theme-success
`,O=`
  jn:leading-0
  jn:ml-2
`,k=`
  jn:ml-1
`,A=`
  jn:mt-0
  jn:ml-6
`,j=({checked:e=!1,className:i=``,disabled:d=!1,errortext:f=``,helptext:p=``,id:m=``,indeterminate:h=!1,invalid:g=!1,label:v,name:j=``,onChange:M,onClick:N,required:P=!1,successtext:F=``,valid:I=!1,value:L=``,...R})=>{let z=e=>!(typeof e==`string`&&e.trim().length===0),B=()=>`juno-checkbox-`+s(),V=a(_),{selectedOptions:H,name:te,disabled:U,handleCheckboxChange:W,updateSelectedValue:G}=V||{},[K,q]=l(V?!!(H&&H.includes(L)):!!e),[ne,re]=l(!1),[ie,J]=l(!1),[Y,ae]=l(!1),[X,oe]=l(!1);o(()=>{e&&V&&G&&G(L)},[]),o(()=>{V||q(e)},[e]);let Z=c(()=>g||!!(f&&z(f)),[g,f]),Q=c(()=>I||!!(F&&z(F)),[I,F]);o(()=>{re(h)},[h]),o(()=>{ae(Z)},[Z]),o(()=>{oe(Q)},[Q]);let se=e=>{q(!K),W&&typeof W==`function`&&W(L),M&&M(e)},ce=e=>{N&&N(e)},le=()=>{J(!0)},ue=()=>{J(!1)},$=()=>V?!!(H&&H.includes(L)):K,de=m||B();return(0,u.jsxs)(`div`,{className:`jn-checkbox-outer`,children:[(0,u.jsxs)(`div`,{className:`jn-checkbox-wrapper ${y}`,children:[(0,u.jsxs)(`div`,{className:`
            juno-checkbox 
            ${x} 
            ${ie?S:``} 
            ${U||d?ee:``} 
            ${Y?E:``} 
            ${X?D:``} 
            ${Y||X?``:T}
            ${i}
          `,...R,children:[$()?(0,u.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`${C}`,width:`16`,height:`16`,viewBox:`0 0 16 16`,children:(0,u.jsx)(`polygon`,{points:`5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2`})}):``,(0,u.jsx)(`input`,{checked:$(),className:`
              ${b(U||d)} 
              ${Y?`juno-checkbox-invalid`:``} 
              ${X?`juno-checkbox-valid`:``} 
            `,disabled:U||d,id:de,name:te||j,onBlur:ue,onChange:se,onClick:ce,onFocus:le,type:`checkbox`,value:L}),ne&&!$()?(0,u.jsx)(`div`,{className:`${w}`}):``]}),v&&z(v)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{text:v,htmlFor:de,disabled:U||d,required:P,className:`${O}`}),Y?(0,u.jsx)(t,{icon:`dangerous`,color:`jn:text-theme-error`,size:`1.125rem`,className:`
                  ${k}
                  ${U||d?`jn:opacity-50`:``}
                `}):``,X?(0,u.jsx)(t,{icon:`checkCircle`,color:`jn:text-theme-success`,size:`1.125rem`,className:`
                  ${k}
                  ${d?`jn:opacity-50`:``}
                `}):``]}):``]}),f&&z(f)?(0,u.jsx)(r,{text:f,variant:`error`,className:`${A}`}):``,F&&z(F)?(0,u.jsx)(r,{text:F,variant:`success`,className:`${A}`}):``,p&&z(p)?(0,u.jsx)(r,{text:p,className:`${A}`}):``]})};try{j.displayName=`Checkbox`,j.__docgenInfo={description:`The \`Checkbox\` component is a versatile form element that allows users to
select one or multiple options. It can display states such as checked,
indeterminate, invalid, and valid, and integrates with a checkbox group context
for collective state management. This component supports labels, icons,
error/success indicators, and custom event handlers.`,displayName:`Checkbox`,props:{checked:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is checked.`,name:`checked`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Custom CSS class for styling the Checkbox.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},errortext:{defaultValue:{value:``},description:`Text to display when the Checkbox has an error.`,name:`errortext`,required:!1,type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},description:`Help text explaining the significance of the Checkbox.`,name:`helptext`,required:!1,type:{name:`ReactNode`}},id:{defaultValue:{value:``},description:`The ID of the Checkbox. Auto-generated if not provided.`,name:`id`,required:!1,type:{name:`string`}},indeterminate:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is in an indeterminate state; used for mixed states.`,name:`indeterminate`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Indicates whether the Checkbox validation failed.`,name:`invalid`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:`The label text for the Checkbox.`,name:`label`,required:!1,type:{name:`string`}},name:{defaultValue:{value:``},description:`The name attribute of the Checkbox.`,name:`name`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Event handler for change events on the Checkbox.`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLInputElement>`}},onClick:{defaultValue:null,description:`Event handler for click events on the Checkbox.`,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLInputElement>`}},required:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is required for form validation.`,name:`required`,required:!1,type:{name:`boolean`}},successtext:{defaultValue:{value:``},description:`Text to display when the Checkbox passes validation.`,name:`successtext`,required:!1,type:{name:`ReactNode`}},valid:{defaultValue:{value:`false`},description:`Indicates whether the Checkbox validation succeeded.`,name:`valid`,required:!1,type:{name:`boolean`}},value:{defaultValue:{value:``},description:`The value attribute of the Checkbox.`,name:`value`,required:!1,type:{name:`string`}}}}}catch{}export{v as n,j as t};