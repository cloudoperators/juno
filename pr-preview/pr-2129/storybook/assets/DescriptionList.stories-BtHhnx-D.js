import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./textContain-CF5Vvpi0.js";var a,o,s;function c(){return(c=e((()=>{t(),a=n(),o=({children:e,alignTerms:t=`right`,className:n=``,...r})=>(0,a.jsx)(`dl`,{className:`dl jn:grid jn:grid-cols-4 jn:group ${t===`right`?`align-right`:`align-left`} ${n}`,...r,children:e}),s=o;try{o.displayName=`DescriptionList`,o.__docgenInfo={description:`A component that semantically represents a list of terms and their corresponding descriptions.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:`DescriptionList`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!0,tags:{},type:{name:`ReactElement<DescriptionDefinitionProps | DescriptionTermProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>`}},alignTerms:{defaultValue:{value:`right`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{s.displayName=`DL`,s.__docgenInfo={description:``,displayName:`DL`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!0,tags:{},type:{name:`ReactElement<DescriptionDefinitionProps | DescriptionTermProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>`}},alignTerms:{defaultValue:{value:`right`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var l,u,d,f,p;function m(){return(m=e((()=>{t(),i(),l=n(),u=e=>e===`truncate-end`||e===`truncate-start`,d=e=>{let t=u(e);return`
    jn:grid
    jn:items-start
    jn:border-b
    jn:border-theme-default
    jn:bg-dt-background
    jn:text-dt-text
    jn:font-bold
    jn:gap-y-[0.25rem]
    jn:p-2
    jn:col-span-1
    jn:group-[.align-right]:text-right
    jn:group-[.align-left]:text-left
    ${e&&!t?r[e]:``}
    ${e&&e!==`no-wrap`?`jn:min-w-0`:``}
    ${e&&e!==`no-wrap`?`jn:grid-cols-1`:``}
  `},f=({children:e,className:t=``,textContain:n,...i})=>{let a=u(n);return(0,l.jsx)(`dt`,{className:`dt ${d(n)} ${t}`,...i,children:a?(0,l.jsx)(`span`,{className:`juno-dt-truncate jn:block jn:group-[.align-right]:text-right jn:group-[.align-left]:text-left ${r[n]}`,children:n===`truncate-start`?(0,l.jsx)(`bdi`,{children:e}):e}):e})},p=f;try{f.displayName=`DescriptionTerm`,f.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:`DescriptionTerm`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`string`}},textContain:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:'Controls how the term handles text that exceeds its available space:\ntruncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced\nbreaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).\n\nThe `truncate-*` values only take visible effect when the term has a bounded\nwidth, which the parent `DescriptionList` column supplies.',name:`textContain`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextContainType`,value:[{value:`"truncate-end"`},{value:`"truncate-start"`},{value:`"break-word"`},{value:`"break-all"`},{value:`"no-wrap"`}]}}},tags:{}}}catch{}try{p.displayName=`DT`,p.__docgenInfo={description:``,displayName:`DT`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`string`}},textContain:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:'Controls how the term handles text that exceeds its available space:\ntruncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced\nbreaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).\n\nThe `truncate-*` values only take visible effect when the term has a bounded\nwidth, which the parent `DescriptionList` column supplies.',name:`textContain`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextContainType`,value:[{value:`"truncate-end"`},{value:`"truncate-start"`},{value:`"break-word"`},{value:`"break-all"`},{value:`"no-wrap"`}]}}},tags:{}}}catch{}})))()}var h,g,_,v,y;function b(){return(b=e((()=>{t(),i(),h=n(),g=e=>e===`truncate-end`||e===`truncate-start`,_=e=>{let t=g(e);return`
    jn:grid
    jn:items-start
    jn:border-b
    jn:border-theme-default
    jn:bg-dd-background
    jn:text-dd-text
    jn:p-2
    jn:col-span-3
    ${e&&!t?r[e]:``}
    ${e&&e!==`no-wrap`?`jn:min-w-0`:``}
    ${e&&e!==`no-wrap`?`jn:grid-cols-1`:``}
  `},v=({children:e,className:t=``,textContain:n,...i})=>{let a=g(n);return(0,h.jsx)(`dd`,{className:`dd ${_(n)} ${t}`,...i,children:a?(0,h.jsx)(`span`,{className:`juno-dd-truncate jn:block ${r[n]}`,children:n===`truncate-start`?(0,h.jsx)(`bdi`,{children:e}):e}):e})},y=v;try{v.displayName=`DescriptionDefinition`,v.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:`DescriptionDefinition`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`string`}},textContain:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:'Controls how the definition handles text that exceeds its available space:\ntruncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced\nbreaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).\n\nThe `truncate-*` values only take visible effect when the definition has a bounded\nwidth, which the parent `DescriptionList` column supplies.',name:`textContain`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextContainType`,value:[{value:`"truncate-end"`},{value:`"truncate-start"`},{value:`"break-word"`},{value:`"break-all"`},{value:`"no-wrap"`}]}}},tags:{}}}catch{}try{y.displayName=`DD`,y.__docgenInfo={description:``,displayName:`DD`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`string`}},textContain:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:'Controls how the definition handles text that exceeds its available space:\ntruncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced\nbreaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).\n\nThe `truncate-*` values only take visible effect when the definition has a bounded\nwidth, which the parent `DescriptionList` column supplies.',name:`textContain`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextContainType`,value:[{value:`"truncate-end"`},{value:`"truncate-start"`},{value:`"break-word"`},{value:`"break-all"`},{value:`"no-wrap"`}]}}},tags:{}}}catch{}})))()}var x,S,C,w,T,E,D;function O(){return(O=e((()=>{t(),c(),m(),b(),x=n(),S={title:`Components/DescriptionList`,component:s,parameters:{docs:{description:{component:`
A component that contains a list of terms and their corresponding descriptions. 

This component enforces structure by expecting child elements of \`DescriptionTerm\` and \`DescriptionDefinition\`.

### Grid Layout
- By default, the component uses a 4-column grid layout where each \`DescriptionTerm\` spans 1 column and each \`DescriptionDefinition\` spans 3 columns.
- Customise the grid template by passing other Tailwind CSS grid classes via the \`className\` prop to override the defaults.

#### Example
\`\`\`jsx
<DL className="grid-cols-2">
  <DT className="col-span-1">Shipping Method</DT>
  <DD className="col-span-1">Standard shipping: 5-7 business days.</DD>
</DL>
\`\`\`
        `}}},argTypes:{children:{control:!1}}},C={render:e=>(0,x.jsxs)(s,{...e,children:[(0,x.jsx)(p,{children:`Shipping`}),(0,x.jsx)(y,{children:`Standard shipping: 5-7 business days.`}),(0,x.jsx)(p,{children:`Payment Options`}),(0,x.jsx)(y,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.`}),(0,x.jsx)(p,{children:`Delivery Time`}),(0,x.jsx)(y,{children:`1 day, 2 days, 3 days.`})]})},w={render:e=>(0,x.jsxs)(s,{alignTerms:`left`,...e,children:[(0,x.jsx)(p,{children:`Shipping Method`}),(0,x.jsx)(y,{children:`Standard shipping: 5-7 business days.`}),(0,x.jsx)(p,{children:`Payment Options`}),(0,x.jsx)(y,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction experience.`}),(0,x.jsx)(p,{children:`Delivery Time`}),(0,x.jsx)(y,{children:`Estimated delivery between 1 to 3 business days after shipping.`}),(0,x.jsx)(p,{children:`Return Policy`}),(0,x.jsx)(y,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,x.jsx)(p,{children:`Customer Support`}),(0,x.jsx)(y,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to assist with any inquiries.`})]})},T=[void 0,`truncate-end`,`truncate-start`,`break-word`,`break-all`,`no-wrap`],E={parameters:{controls:{disable:!0},docs:{description:{story:'Use `textContain` on `DT` or `DD` to control how long text is contained. `"truncate-end"` / `"truncate-start"` clip to one line with an ellipsis; `"break-word"` / `"break-all"` force long strings to wrap; `"no-wrap"` keeps content on one line. The `truncate-*` values only take visible effect when the element has a bounded width — the parent `DescriptionList` grid column supplies this automatically.'}}},render:()=>(0,x.jsx)(`div`,{className:`jn:flex jn:flex-col jn:gap-8`,children:T.map(e=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`jn:mb-2 jn:font-bold`,children:e?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`code`,{children:e}),` on DT and DD`]}):(0,x.jsx)(x.Fragment,{children:`No textContain set`})}),(0,x.jsxs)(s,{children:[(0,x.jsx)(p,{textContain:e,children:`Status — a very long term that might need containing depending on the mode`}),(0,x.jsx)(y,{textContain:e,children:`Running — all systems operational, no issues detected, health check passed on all endpoints, last checked 2 minutes ago`}),(0,x.jsx)(p,{textContain:e,children:`eu-de-1a-availability-zone-verylongunbrokenidentifier-without-spaces`}),(0,x.jsx)(y,{textContain:e,children:`eu-de-1a-availability-zone-verylongunbrokenidentifier-without-spaces`})]})]},e??`none`))})},D=[`Default`,`LeftAligned`,`TextContain`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <DL {...args}>
      <DT>Shipping</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>
        Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.
      </DD>
      <DT>Delivery Time</DT>
      <DD>1 day, 2 days, 3 days.</DD>
    </DL>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <DL alignTerms="left" {...args}>
      <DT>Shipping Method</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>
        Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction
        experience.
      </DD>
      <DT>Delivery Time</DT>
      <DD>Estimated delivery between 1 to 3 business days after shipping.</DD>
      <DT>Return Policy</DT>
      <DD>
        Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and
        condition.
      </DD>
      <DT>Customer Support</DT>
      <DD>
        Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to
        assist with any inquiries.
      </DD>
    </DL>
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Use \`textContain\` on \`DT\` or \`DD\` to control how long text is contained. \`"truncate-end"\` / \`"truncate-start"\` clip to one line with an ellipsis; \`"break-word"\` / \`"break-all"\` force long strings to wrap; \`"no-wrap"\` keeps content on one line. The \`truncate-*\` values only take visible effect when the element has a bounded width — the parent \`DescriptionList\` grid column supplies this automatically.'
      }
    }
  },
  render: () => <div className="jn:flex jn:flex-col jn:gap-8">
      {textContainCases.map(textContain => <div key={textContain ?? "none"}>
          <p className="jn:mb-2 jn:font-bold">
            {textContain ? <>
                <code>{textContain}</code> on DT and DD
              </> : <>No textContain set</>}
          </p>
          <DL>
            <DT textContain={textContain}>
              Status — a very long term that might need containing depending on the mode
            </DT>
            <DD textContain={textContain}>
              Running — all systems operational, no issues detected, health check passed on all endpoints, last checked
              2 minutes ago
            </DD>
            <DT textContain={textContain}>eu-de-1a-availability-zone-verylongunbrokenidentifier-without-spaces</DT>
            <DD textContain={textContain}>eu-de-1a-availability-zone-verylongunbrokenidentifier-without-spaces</DD>
          </DL>
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}}})))()}O();export{C as Default,w as LeftAligned,E as TextContain,D as __namedExportsOrder,S as default};