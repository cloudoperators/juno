import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,z as r}from"./iframe-B2QuejfZ.js";import{t as i}from"./Icon.component-fb0tLAE6.js";import{t as a}from"./Icon-C_eSumzb.js";import{t as o}from"./Label.component-Dpx36m7E.js";import{t as s}from"./Label-B2XHThbz.js";import{t as c}from"./FormHint.component-DpahLxdo.js";import{t as l}from"./FormHint-BIA5xzzo.js";var u,d,f,p,m,h,g,_,v,y,b=e((()=>{u=t(r()),s(),a(),l(),d=n(),f=`
  jn:mb-4
  jn:last:mb-0
`,p=`
  jn:relative
  jn:rounded
  jn:border
  jn:py-1
`,m=`
  jn:border-transparent
`,h=`
  jn:border-theme-success
  jn:px-2
`,g=`
  jn:border-theme-error
  jn:px-2
`,_=`
  jn:absolute
  jn:right-2
  jn:top-1.5
`,v=(0,u.createContext)(void 0),y=({children:e,className:t=``,disabled:n=!1,errortext:r=``,helptext:a=``,id:s=``,invalid:l=!1,label:y,name:b=``,onChange:x,required:S=!1,selected:C,successtext:w=``,valid:T=!1,...E})=>{let D=e=>!(typeof e==`string`&&e.trim().length===0),O=()=>`juno-checkboxgroup-`+(0,u.useId)(),k=b||O(),A=s||O(),[j,M]=(0,u.useState)(C),[N,P]=(0,u.useState)(!1),[F,I]=(0,u.useState)(!1),L=(0,u.useMemo)(()=>T||!!(w&&D(w)),[T,w]),R=(0,u.useMemo)(()=>l||!!(r&&D(r)),[l,r]);return(0,u.useEffect)(()=>{C&&M(C)},[C]),(0,u.useEffect)(()=>{P(L)},[L]),(0,u.useEffect)(()=>{I(R)},[R]),(0,d.jsx)(v.Provider,{value:{selectedOptions:j,name:k,disabled:n,handleCheckboxChange:e=>{let t=e;j&&j.includes(e)?M(j.filter(e=>e!==t)):j&&!j.includes(e)?M(e=>[...e||[],t]):M([t]),x&&x(e)},updateSelectedValue:e=>{C||M(t=>[...t||[],e])}},children:(0,d.jsxs)(`div`,{className:`
          juno-checkboxgroup 
          ${N?`juno-checkboxgroup-valid`:``} 
          ${F?`juno-checkboxgroup-invalid`:``} 
          ${f} 
          ${t}
        `,id:A,role:`group`,...E,children:[y&&D(y)?(0,d.jsx)(o,{text:y,htmlFor:A,disabled:n,required:S}):``,(0,d.jsxs)(`div`,{className:`
            juno-checkbox-group-options 
            ${p} 
            ${N?h:``} 
            ${F?g:``} 
            ${N||F?``:m}
          `,children:[F?(0,d.jsx)(i,{icon:`dangerous`,color:`jn:text-theme-error`,className:`${_}`}):``,N?(0,d.jsx)(i,{icon:`checkCircle`,color:`jn:text-theme-success`,className:`${_}`}):``,e]}),r&&D(r)?(0,d.jsx)(c,{text:r,variant:`error`}):``,w&&D(w)?(0,d.jsx)(c,{text:w,variant:`success`}):``,a&&D(a)?(0,d.jsx)(c,{text:a}):``]})})};try{v.displayName=`CheckboxGroupContext`,v.__docgenInfo={description:``,displayName:`CheckboxGroupContext`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,methods:[],props:{},tags:{}}}catch{}try{y.displayName=`CheckboxGroup`,y.__docgenInfo={description:`The \`CheckboxGroup\` component provides a context-managed grouping of checkbox elements.
It manages the collective state for checkboxes, allowing for individual or batch validation
and selection. It supports states such as disabled, valid, and invalid, and offers customization
for error and success messages. It also furnishes a grouped label and help text for a unified UI.`,displayName:`CheckboxGroup`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`The Checkbox children of the CheckboxGroup.`,name:`children`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Custom class names for styling the CheckboxGroup.`,name:`className`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{default:`""`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Disables all checkboxes in the group.`,name:`disabled`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},errortext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Text displayed if validation fails or there is an error. Indicates group invalidity when set.`,name:`errortext`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Additional text explaining the significance of this group.`,name:`helptext`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},id:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`The group's ID. Automatically generated if not provided.`,name:`id`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`string`}},invalid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Indicates if the CheckboxGroup is marked as invalid.`,name:`invalid`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`The label text for the CheckboxGroup.`,name:`label`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Name for all checkboxes in the group. Generated if not supplied.`,name:`name`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{default:`A unique identifier`},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Event handler triggered when any checkbox selection changes.`,name:`onChange`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`EventUpdateHandler`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Specifies if a selection is required in this group.`,name:`required`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},selected:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Array of values representing the initially selected checkboxes in the group.`,name:`selected`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`string[]`}},successtext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Text displayed upon successful validation, which marks the group as valid.`,name:`successtext`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},valid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`}],description:`Specifies if the CheckboxGroup has been successfully validated.`,name:`valid`,parent:{fileName:`ui-components/src/components/CheckboxGroup/CheckboxGroup.component.tsx`,name:`CheckboxGroupProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-checkbox-checkboxgroup--docs
{@link CheckboxGroupProps }`}}}catch{}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{x=t(r()),b(),s(),a(),l(),S=n(),C=`
  jn:inline-flex
  jn:items-center
`,w=e=>`
    jn:w-4
    jn:h-4
    jn:opacity-0
    jn:z-50
    ${e?`jn:cursor-not-allowed`:`jn:cursor-pointer`}
  `,T=`
  jn:relative
  jn:w-4
  jn:h-4
  jn:rounded-sm
  jn:bg-theme-checkbox
  jn:cursor-pointer
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
`,E=`
  jn:ring-2
  jn:ring-theme-focus
`,D=`
  jn:absolute
  jn:top-0
  jn:left-0
  jn:text-theme-checkbox-checked
  jn:fill-current
`,O=`
  jn:absolute
  jn:w-2
  jn:h-0.5
  jn:top-1.5
  jn:left-[.2rem]
  jn:inline-block
  jn:bg-theme-focus
`,k=`
  jn:pointer-events-none
  jn:opacity-50
  jn:cursor-not-allowed
`,A=`
  jn:border
  jn:border-transparent
`,j=`
  jn:border
  jn:border-theme-error
`,M=`
  jn:border
  jn:border-theme-success
`,N=`
  jn:leading-0
  jn:ml-2
`,P=`
  jn:ml-1
`,F=`
  jn:mt-0
  jn:ml-6
`,I=({checked:e=!1,className:t=``,disabled:n=!1,errortext:r=``,helptext:a=``,id:s=``,indeterminate:l=!1,invalid:u=!1,label:d,name:f=``,onChange:p,onClick:m,required:h=!1,successtext:g=``,valid:_=!1,value:y=``,...b})=>{let I=e=>!(typeof e==`string`&&e.trim().length===0),L=()=>`juno-checkbox-`+(0,x.useId)(),R=(0,x.useContext)(v),{selectedOptions:z,name:B,disabled:V,handleCheckboxChange:H,updateSelectedValue:U}=R||{},[W,G]=(0,x.useState)(R?!!(z&&z.includes(y)):!!e),[K,ee]=(0,x.useState)(!1),[te,q]=(0,x.useState)(!1),[J,ne]=(0,x.useState)(!1),[Y,re]=(0,x.useState)(!1);(0,x.useEffect)(()=>{e&&R&&U&&U(y)},[]),(0,x.useEffect)(()=>{R||G(e)},[e]);let X=(0,x.useMemo)(()=>u||!!(r&&I(r)),[u,r]),Z=(0,x.useMemo)(()=>_||!!(g&&I(g)),[_,g]);(0,x.useEffect)(()=>{ee(l)},[l]),(0,x.useEffect)(()=>{ne(X)},[X]),(0,x.useEffect)(()=>{re(Z)},[Z]);let ie=e=>{G(!W),H&&typeof H==`function`&&H(y),p&&p(e)},ae=e=>{m&&m(e)},oe=()=>{q(!0)},se=()=>{q(!1)},Q=()=>R?!!(z&&z.includes(y)):W,$=s||L();return(0,S.jsxs)(`div`,{className:`jn-checkbox-outer`,children:[(0,S.jsxs)(`div`,{className:`jn-checkbox-wrapper ${C}`,children:[(0,S.jsxs)(`div`,{className:`
            juno-checkbox 
            ${T} 
            ${te?E:``} 
            ${V||n?k:``} 
            ${J?j:``} 
            ${Y?M:``} 
            ${J||Y?``:A}
            ${t}
          `,...b,children:[Q()?(0,S.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,className:`${D}`,width:`16`,height:`16`,viewBox:`0 0 16 16`,children:(0,S.jsx)(`polygon`,{points:`5.75 11.15 2.6 8 1.55 9.05 5.75 13.25 14.75 4.25 13.7 3.2`})}):``,(0,S.jsx)(`input`,{checked:Q(),className:`
              ${w(V||n)} 
              ${J?`juno-checkbox-invalid`:``} 
              ${Y?`juno-checkbox-valid`:``} 
            `,disabled:V||n,id:$,name:B||f,onBlur:se,onChange:ie,onClick:ae,onFocus:oe,type:`checkbox`,value:y}),K&&!Q()?(0,S.jsx)(`div`,{className:`${O}`}):``]}),d&&I(d)?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{text:d,htmlFor:$,disabled:V||n,required:h,className:`${N}`}),J?(0,S.jsx)(i,{icon:`dangerous`,color:`jn:text-theme-error`,size:`1.125rem`,className:`
                  ${P}
                  ${V||n?`jn:opacity-50`:``}
                `}):``,Y?(0,S.jsx)(i,{icon:`checkCircle`,color:`jn:text-theme-success`,size:`1.125rem`,className:`
                  ${P}
                  ${n?`jn:opacity-50`:``}
                `}):``]}):``]}),r&&I(r)?(0,S.jsx)(c,{text:r,variant:`error`,className:`${F}`}):``,g&&I(g)?(0,S.jsx)(c,{text:g,variant:`success`,className:`${F}`}):``,a&&I(a)?(0,S.jsx)(c,{text:a,className:`${F}`}):``]})};try{I.displayName=`Checkbox`,I.__docgenInfo={description:`The \`Checkbox\` component is a versatile form element that allows users to
select one or multiple options. It can display states such as checked,
indeterminate, invalid, and valid, and integrates with a checkbox group context
for collective state management. This component supports labels, icons,
error/success indicators, and custom event handlers.`,displayName:`Checkbox`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Checkbox/Checkbox.component.tsx`,methods:[],props:{checked:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Specifies if the Checkbox is checked.`,name:`checked`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Custom CSS class for styling the Checkbox.`,name:`className`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`""`},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Specifies if the Checkbox is disabled.`,name:`disabled`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},errortext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Text to display when the Checkbox has an error.`,name:`errortext`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`ReactNode`}},helptext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Help text explaining the significance of the Checkbox.`,name:`helptext`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`ReactNode`}},id:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`The ID of the Checkbox. Auto-generated if not provided.`,name:`id`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`string`}},indeterminate:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Specifies if the Checkbox is in an indeterminate state; used for mixed states.`,name:`indeterminate`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},invalid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Indicates whether the Checkbox validation failed.`,name:`invalid`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`The label text for the Checkbox.`,name:`label`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`The name attribute of the Checkbox.`,name:`name`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Event handler for change events on the Checkbox.`,name:`onChange`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`ChangeEventHandler<HTMLInputElement>`}},onClick:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Event handler for click events on the Checkbox.`,name:`onClick`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`MouseEventHandler<HTMLInputElement>`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Specifies if the Checkbox is required for form validation.`,name:`required`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},successtext:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Text to display when the Checkbox passes validation.`,name:`successtext`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`ReactNode`}},valid:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`Indicates whether the Checkbox validation succeeded.`,name:`valid`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},value:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`}],description:`The value attribute of the Checkbox.`,name:`value`,parent:{fileName:`ui-components/src/components/Checkbox/Checkbox.component.tsx`,name:`CheckboxProps`},required:!1,tags:{},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/forms-checkbox-checkbox--docs
{@link CheckboxProps }`}}}catch{}}));export{b as i,L as n,y as r,I as t};