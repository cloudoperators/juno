import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";import{t as i}from"./Label.component-3mysfpZZ.js";import"./Label-BqZqxTuH.js";import{t as a}from"./FormHint.component-DOXQVwyU.js";import"./FormHint-CKFGCT8Z.js";var o=e(t()),s=n(),c=`
  jn:mb-4
  jn:last:mb-0
`,l=`
  jn:relative
  jn:rounded
  jn:border
  jn:py-1
`,u=`
  jn:border-transparent
`,d=`
  jn:border-theme-success
  jn:px-2
`,f=`
  jn:border-theme-error
  jn:px-2
`,p=`
  jn:absolute
  jn:right-2
  jn:top-1.5
`,m=(0,o.createContext)(void 0),h=({children:e,className:t=``,disabled:n=!1,errortext:h=``,helptext:g=``,id:_=``,invalid:v=!1,label:y,name:b=``,onChange:x,required:S=!1,selected:C,successtext:w=``,valid:T=!1,...E})=>{let D=e=>!(typeof e==`string`&&e.trim().length===0),O=()=>`juno-checkboxgroup-`+(0,o.useId)(),k=b||O(),A=_||O(),[j,M]=(0,o.useState)(C),[N,P]=(0,o.useState)(!1),[F,I]=(0,o.useState)(!1),L=(0,o.useMemo)(()=>T||!!(w&&D(w)),[T,w]),R=(0,o.useMemo)(()=>v||!!(h&&D(h)),[v,h]);return(0,o.useEffect)(()=>{C&&M(C)},[C]),(0,o.useEffect)(()=>{P(L)},[L]),(0,o.useEffect)(()=>{I(R)},[R]),(0,s.jsx)(m.Provider,{value:{selectedOptions:j,name:k,disabled:n,handleCheckboxChange:e=>{let t=e;j&&j.includes(e)?M(j.filter(e=>e!==t)):j&&!j.includes(e)?M(e=>[...e||[],t]):M([t]),x&&x(e)},updateSelectedValue:e=>{C||M(t=>[...t||[],e])}},children:(0,s.jsxs)(`div`,{className:`
          juno-checkboxgroup 
          ${N?`juno-checkboxgroup-valid`:``} 
          ${F?`juno-checkboxgroup-invalid`:``} 
          ${c} 
          ${t}
        `,id:A,role:`group`,...E,children:[y&&D(y)?(0,s.jsx)(i,{text:y,htmlFor:A,disabled:n,required:S}):``,(0,s.jsxs)(`div`,{className:`
            juno-checkbox-group-options 
            ${l} 
            ${N?d:``} 
            ${F?f:``} 
            ${N||F?``:u}
          `,children:[F?(0,s.jsx)(r,{icon:`dangerous`,color:`jn:text-theme-error`,className:`${p}`}):``,N?(0,s.jsx)(r,{icon:`checkCircle`,color:`jn:text-theme-success`,className:`${p}`}):``,e]}),h&&D(h)?(0,s.jsx)(a,{text:h,variant:`error`}):``,w&&D(w)?(0,s.jsx)(a,{text:w,variant:`success`}):``,g&&D(g)?(0,s.jsx)(a,{text:g}):``]})})};try{m.displayName=`CheckboxGroupContext`,m.__docgenInfo={description:``,displayName:`CheckboxGroupContext`,props:{}}}catch{}try{h.displayName=`CheckboxGroup`,h.__docgenInfo={description:`The \`CheckboxGroup\` component provides a context-managed grouping of checkbox elements.
It manages the collective state for checkboxes, allowing for individual or batch validation
and selection. It supports states such as disabled, valid, and invalid, and offers customization
for error and success messages. It also furnishes a grouped label and help text for a unified UI.`,displayName:`CheckboxGroup`,props:{children:{defaultValue:null,description:`The Checkbox children of the CheckboxGroup.`,name:`children`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Custom class names for styling the CheckboxGroup.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Disables all checkboxes in the group.`,name:`disabled`,required:!1,type:{name:`boolean`}},errortext:{defaultValue:{value:``},description:`Text displayed if validation fails or there is an error. Indicates group invalidity when set.`,name:`errortext`,required:!1,type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},description:`Additional text explaining the significance of this group.`,name:`helptext`,required:!1,type:{name:`ReactNode`}},id:{defaultValue:{value:``},description:`The group's ID. Automatically generated if not provided.`,name:`id`,required:!1,type:{name:`string`}},invalid:{defaultValue:{value:`false`},description:`Indicates if the CheckboxGroup is marked as invalid.`,name:`invalid`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:`The label text for the CheckboxGroup.`,name:`label`,required:!1,type:{name:`string`}},name:{defaultValue:{value:``},description:`Name for all checkboxes in the group. Generated if not supplied.`,name:`name`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Event handler triggered when any checkbox selection changes.`,name:`onChange`,required:!1,type:{name:`EventUpdateHandler`}},required:{defaultValue:{value:`false`},description:`Specifies if a selection is required in this group.`,name:`required`,required:!1,type:{name:`boolean`}},selected:{defaultValue:null,description:`Array of values representing the initially selected checkboxes in the group.`,name:`selected`,required:!1,type:{name:`string[]`}},successtext:{defaultValue:{value:``},description:`Text displayed upon successful validation, which marks the group as valid.`,name:`successtext`,required:!1,type:{name:`ReactNode`}},valid:{defaultValue:{value:`false`},description:`Specifies if the CheckboxGroup has been successfully validated.`,name:`valid`,required:!1,type:{name:`boolean`}}}}}catch{}var g=`
  jn:inline-flex
  jn:items-center
`,_=e=>`
    jn:w-4
    jn:h-4
    jn:opacity-0
    jn:z-50
    ${e?`jn:cursor-not-allowed`:`jn:cursor-pointer`}
  `,v=`
  jn:relative
  jn:w-4
  jn:h-4
  jn:rounded-sm
  jn:bg-theme-checkbox
  jn:cursor-pointer
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`,y=`
  jn:ring-2
  jn:ring-theme-focus
`,b=`
  jn:absolute
  jn:top-0
  jn:left-0
  jn:text-theme-checkbox-checked
  jn:fill-current
`,x=`
  jn:absolute
  jn:w-2
  jn:h-0.5
  jn:top-1.5
  jn:left-[.2rem]
  jn:inline-block
  jn:bg-theme-focus
`,S=`
  jn:pointer-events-none
  jn:opacity-50
  jn:cursor-not-allowed
`,C=`
  jn:border
  jn:border-transparent
`,w=`
  jn:border
  jn:border-theme-error
`,T=`
  jn:border
  jn:border-theme-success
`,E=`
  jn:leading-0
  jn:ml-2
`,D=`
  jn:ml-1
`,O=`
  jn:mt-0
  jn:ml-6
`,k=({checked:e=!1,className:t=``,disabled:n=!1,errortext:c=``,helptext:l=``,id:u=``,indeterminate:d=!1,invalid:f=!1,label:p,name:h=``,onChange:k,onClick:A,required:j=!1,successtext:M=``,valid:N=!1,value:P=``,...F})=>{let I=e=>!(typeof e==`string`&&e.trim().length===0),L=()=>`juno-checkbox-`+(0,o.useId)(),R=(0,o.useContext)(m),{selectedOptions:z,name:B,disabled:V,handleCheckboxChange:H,updateSelectedValue:U}=R||{},[W,G]=(0,o.useState)(R?!!(z&&z.includes(P)):!!e),[K,ee]=(0,o.useState)(!1),[te,q]=(0,o.useState)(!1),[J,ne]=(0,o.useState)(!1),[Y,re]=(0,o.useState)(!1);(0,o.useEffect)(()=>{e&&R&&U&&U(P)},[]),(0,o.useEffect)(()=>{R||G(e)},[e]);let X=(0,o.useMemo)(()=>f||!!(c&&I(c)),[f,c]),Z=(0,o.useMemo)(()=>N||!!(M&&I(M)),[N,M]);(0,o.useEffect)(()=>{ee(d)},[d]),(0,o.useEffect)(()=>{ne(X)},[X]),(0,o.useEffect)(()=>{re(Z)},[Z]);let ie=e=>{G(!W),H&&typeof H==`function`&&H(P),k&&k(e)},ae=e=>{A&&A(e)},oe=()=>{q(!0)},se=()=>{q(!1)},Q=()=>R?!!(z&&z.includes(P)):W,$=u||L();return(0,s.jsxs)(`div`,{className:`jn-checkbox-outer`,children:[(0,s.jsxs)(`div`,{className:`jn-checkbox-wrapper ${g}`,children:[(0,s.jsxs)(`div`,{className:`
            juno-checkbox 
            ${v} 
            ${te?y:``} 
            ${V||n?S:``} 
            ${J?w:``} 
            ${Y?T:``} 
            ${J||Y?``:C}
            ${t}
          `,...F,children:[Q()?(0,s.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`${b}`,width:`16`,height:`16`,viewBox:`0 0 16 16`,children:(0,s.jsx)(`polygon`,{points:`5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2`})}):``,(0,s.jsx)(`input`,{checked:Q(),className:`
              ${_(V||n)} 
              ${J?`juno-checkbox-invalid`:``} 
              ${Y?`juno-checkbox-valid`:``} 
            `,disabled:V||n,id:$,name:B||h,onBlur:se,onChange:ie,onClick:ae,onFocus:oe,type:`checkbox`,value:P}),K&&!Q()?(0,s.jsx)(`div`,{className:`${x}`}):``]}),p&&I(p)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{text:p,htmlFor:$,disabled:V||n,required:j,className:`${E}`}),J?(0,s.jsx)(r,{icon:`dangerous`,color:`jn:text-theme-error`,size:`1.125rem`,className:`
                  ${D}
                  ${V||n?`jn:opacity-50`:``}
                `}):``,Y?(0,s.jsx)(r,{icon:`checkCircle`,color:`jn:text-theme-success`,size:`1.125rem`,className:`
                  ${D}
                  ${n?`jn:opacity-50`:``}
                `}):``]}):``]}),c&&I(c)?(0,s.jsx)(a,{text:c,variant:`error`,className:`${O}`}):``,M&&I(M)?(0,s.jsx)(a,{text:M,variant:`success`,className:`${O}`}):``,l&&I(l)?(0,s.jsx)(a,{text:l,className:`${O}`}):``]})};try{k.displayName=`Checkbox`,k.__docgenInfo={description:`The \`Checkbox\` component is a versatile form element that allows users to
select one or multiple options. It can display states such as checked,
indeterminate, invalid, and valid, and integrates with a checkbox group context
for collective state management. This component supports labels, icons,
error/success indicators, and custom event handlers.`,displayName:`Checkbox`,props:{checked:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is checked.`,name:`checked`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Custom CSS class for styling the Checkbox.`,name:`className`,required:!1,type:{name:`string`}},disabled:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},errortext:{defaultValue:{value:``},description:`Text to display when the Checkbox has an error.`,name:`errortext`,required:!1,type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},description:`Help text explaining the significance of the Checkbox.`,name:`helptext`,required:!1,type:{name:`ReactNode`}},id:{defaultValue:{value:``},description:`The ID of the Checkbox. Auto-generated if not provided.`,name:`id`,required:!1,type:{name:`string`}},indeterminate:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is in an indeterminate state; used for mixed states.`,name:`indeterminate`,required:!1,type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},description:`Indicates whether the Checkbox validation failed.`,name:`invalid`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:`The label text for the Checkbox.`,name:`label`,required:!1,type:{name:`string`}},name:{defaultValue:{value:``},description:`The name attribute of the Checkbox.`,name:`name`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Event handler for change events on the Checkbox.`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLInputElement>`}},onClick:{defaultValue:null,description:`Event handler for click events on the Checkbox.`,name:`onClick`,required:!1,type:{name:`MouseEventHandler<HTMLInputElement>`}},required:{defaultValue:{value:`false`},description:`Specifies if the Checkbox is required for form validation.`,name:`required`,required:!1,type:{name:`boolean`}},successtext:{defaultValue:{value:``},description:`Text to display when the Checkbox passes validation.`,name:`successtext`,required:!1,type:{name:`ReactNode`}},valid:{defaultValue:{value:`false`},description:`Indicates whether the Checkbox validation succeeded.`,name:`valid`,required:!1,type:{name:`boolean`}},value:{defaultValue:{value:``},description:`The value attribute of the Checkbox.`,name:`value`,required:!1,type:{name:`string`}}}}}catch{}export{h as n,k as t};