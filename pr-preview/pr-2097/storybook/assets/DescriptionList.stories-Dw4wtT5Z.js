import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{i=t(n()),a=r(),o=(0,i.createContext)({}),s=()=>(0,i.useContext)(o),c=({children:e,alignTerms:t=`right`,multiColumn:n=!1,termWidth:r=`auto`,gridColumnTemplate:s,className:c=``,...l})=>{let u=(0,i.useMemo)(()=>({termWidth:r,gridColumnTemplate:s}),[r,s]);return(0,a.jsx)(o.Provider,{value:u,children:(0,a.jsx)(`dl`,{className:`dl ${n?`jn:flex`:`jn:grid`} jn:group ${t===`right`?`align-right`:`align-left`} ${c}`,style:n?void 0:{gridTemplateColumns:s??`${r} 1fr`},...l,children:e})})},l=c;try{o.displayName=`DescriptionListContext`,o.__docgenInfo={description:``,displayName:`DescriptionListContext`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{},tags:{}}}catch{}try{c.displayName=`DescriptionList`,c.__docgenInfo={description:`A component that semantically represents a list of terms and their corresponding descriptions.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:`DescriptionList`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.
When multiColumn is true, children should be DescriptionListColumn elements.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`ReactNode`}},alignTerms:{defaultValue:{value:`right`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},multiColumn:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`When true, switches the layout to flex so that DescriptionListColumn children render side by side.`,name:`multiColumn`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`boolean`}},termWidth:{defaultValue:{value:`auto`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Controls the width of the term column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
The definition column takes the remaining space.
This value is inherited by DescriptionListColumn children unless they set their own termWidth.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherited by DescriptionListColumn children via context unless they set their own gridColumnTemplate.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{l.displayName=`DL`,l.__docgenInfo={description:``,displayName:`DL`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.
When multiColumn is true, children should be DescriptionListColumn elements.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`ReactNode`}},alignTerms:{defaultValue:{value:`right`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},multiColumn:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`When true, switches the layout to flex so that DescriptionListColumn children render side by side.`,name:`multiColumn`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`boolean`}},termWidth:{defaultValue:{value:`auto`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Controls the width of the term column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
The definition column takes the remaining space.
This value is inherited by DescriptionListColumn children unless they set their own termWidth.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherited by DescriptionListColumn children via context unless they set their own gridColumnTemplate.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var d,f,p;function m(){return(m=e((()=>{n(),u(),d=r(),f=({children:e,termWidth:t,gridColumnTemplate:n,className:r=``,...i})=>{let{termWidth:a,gridColumnTemplate:o}=s(),c=n??(t?`${t} 1fr`:void 0)??o??`${a??`auto`} 1fr`;return(0,d.jsx)(`div`,{className:`dlc jn:grid jn:flex-1 ${r}`,style:{gridTemplateColumns:c},...i,children:e})},p=f;try{f.displayName=`DescriptionListColumn`,f.__docgenInfo={description:"A column wrapper for use inside a multiColumn DescriptionList.\nRe-establishes the grid context so that DT and DD elements render correctly within each column.\nNote: passing a `style` prop will override the computed `gridTemplateColumns` — this is intentional,\ngiving consumers full escape-hatch access at their own responsibility.",displayName:`DescriptionListColumn`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Child components. Accepts DescriptionTerm and DescriptionDefinition elements, including
conditional expressions and ternaries that may resolve to null or false.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`ReactNode`}},termWidth:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherits the parent DescriptionList's gridColumnTemplate when not set. Overrides the parent value when set.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{p.displayName=`DLC`,p.__docgenInfo={description:``,displayName:`DLC`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Child components. Accepts DescriptionTerm and DescriptionDefinition elements, including
conditional expressions and ternaries that may resolve to null or false.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`ReactNode`}},termWidth:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherits the parent DescriptionList's gridColumnTemplate when not set. Overrides the parent value when set.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var h,g,_,v;function y(){return(y=e((()=>{n(),h=r(),g=`
jn:grid
jn:items-start
jn:border-b
jn:border-theme-default
jn:bg-dt-background
jn:text-dt-text
jn:font-bold
jn:gap-y-[0.25rem]
jn:p-2
jn:group-[.align-right]:text-right
jn:group-[.align-left]:text-left
`,_=({children:e,className:t=``,...n})=>(0,h.jsx)(`dt`,{className:`dt ${g} ${t}`,...n,children:e}),v=_;try{_.displayName=`DescriptionTerm`,_.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:`DescriptionTerm`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{v.displayName=`DT`,v.__docgenInfo={description:``,displayName:`DT`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var b,x,S,C;function w(){return(w=e((()=>{n(),b=r(),x=`
  jn:grid
  jn:items-start
  jn:border-b
  jn:border-theme-default
  jn:bg-dd-background
  jn:text-dd-text
  jn:p-2
`,S=({children:e,className:t=``,...n})=>(0,b.jsx)(`dd`,{className:`dd ${x} ${t}`,...n,children:e}),C=S;try{S.displayName=`DescriptionDefinition`,S.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:`DescriptionDefinition`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{C.displayName=`DD`,C.__docgenInfo={description:``,displayName:`DD`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{n(),u(),m(),y(),w(),T=r(),E={title:`Components/DescriptionList`,component:l,parameters:{docs:{description:{component:'\nA component that contains a list of terms and their corresponding descriptions.\n\nThis component enforces structure by expecting child elements of `DescriptionTerm` and `DescriptionDefinition`.\n\n### Grid Layout\nBy default, the component uses a two-column grid where the term column sizes to its content and the definition column takes the remaining space. Use the `termWidth` prop to set a fixed width for the term column — it accepts any valid CSS length or percentage value (e.g. `"25%"`, `"200px"`, `"12rem"`).\n\n### Multi-column layout\nPass `multiColumn` to arrange content side by side. Wrap each column\'s `DescriptionTerm` and `DescriptionDefinition` pairs in a `DescriptionListColumn`. Each column inherits the parent\'s `termWidth` but can override it individually.\n        '}}},argTypes:{children:{control:!1}}},D={render:e=>(0,T.jsxs)(l,{...e,children:[(0,T.jsx)(v,{children:`Shipping`}),(0,T.jsx)(C,{children:`Standard shipping: 5-7 business days.`}),(0,T.jsx)(v,{children:`Payment Options`}),(0,T.jsx)(C,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.`}),(0,T.jsx)(v,{children:`Delivery Time`}),(0,T.jsx)(C,{children:`1 day, 2 days, 3 days.`})]})},O={render:e=>(0,T.jsxs)(l,{alignTerms:`left`,...e,children:[(0,T.jsx)(v,{children:`Shipping Method`}),(0,T.jsx)(C,{children:`Standard shipping: 5-7 business days.`}),(0,T.jsx)(v,{children:`Payment Options`}),(0,T.jsx)(C,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction experience.`}),(0,T.jsx)(v,{children:`Delivery Time`}),(0,T.jsx)(C,{children:`Estimated delivery between 1 to 3 business days after shipping.`}),(0,T.jsx)(v,{children:`Return Policy`}),(0,T.jsx)(C,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,T.jsx)(v,{children:`Customer Support`}),(0,T.jsx)(C,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to assist with any inquiries.`})]})},k={parameters:{docs:{description:{story:'Pass `termWidth` to fix the width of the term column. Accepts any valid CSS length or percentage (e.g. `"25%"`, `"200px"`, `"12rem"`). The definition column takes the remaining space.'}}},render:e=>(0,T.jsxs)(l,{termWidth:`33%`,...e,children:[(0,T.jsx)(v,{children:`Shipping Method`}),(0,T.jsx)(C,{children:`Standard shipping: 5-7 business days.`}),(0,T.jsx)(v,{children:`Payment Options`}),(0,T.jsx)(C,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.`}),(0,T.jsx)(v,{children:`Delivery Time`}),(0,T.jsx)(C,{children:`1 day, 2 days, 3 days.`})]})},A={parameters:{docs:{description:{story:"Pass `multiColumn` to arrange content side by side. Wrap each column's term-definition pairs in a `DescriptionListColumn`. Each column sizes its term to content by default."}}},render:e=>(0,T.jsxs)(l,{multiColumn:!0,...e,children:[(0,T.jsxs)(p,{children:[(0,T.jsx)(v,{children:`Shipping Method`}),(0,T.jsx)(C,{children:`Standard shipping: 5-7 business days.`}),(0,T.jsx)(v,{children:`Payment Options`}),(0,T.jsx)(C,{children:`Credit/Debit cards, PayPal, and bank transfer.`}),(0,T.jsx)(v,{children:`Delivery Time`}),(0,T.jsx)(C,{children:`Estimated delivery between 1 to 3 business days after shipping.`})]}),(0,T.jsxs)(p,{children:[(0,T.jsx)(v,{children:`Return Policy`}),(0,T.jsx)(C,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,T.jsx)(v,{children:`Customer Support`}),(0,T.jsx)(C,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.`})]})]})},j={parameters:{docs:{description:{story:'Each `DescriptionListColumn` inherits `termWidth` from the parent `DescriptionList`, but can override it individually. Here the parent sets `"25%"`, the middle column overrides to `"auto"`, and the right column to `"60%"`.'}}},render:e=>(0,T.jsxs)(l,{multiColumn:!0,termWidth:`25%`,...e,children:[(0,T.jsxs)(p,{children:[(0,T.jsx)(v,{children:`Shipping Method`}),(0,T.jsx)(C,{children:`Standard shipping: 5-7 business days.`}),(0,T.jsx)(v,{children:`Payment Options`}),(0,T.jsx)(C,{children:`Credit/Debit cards, PayPal, and bank transfer.`}),(0,T.jsx)(v,{children:`Delivery Time`}),(0,T.jsx)(C,{children:`Estimated delivery between 1 to 3 business days after shipping.`})]}),(0,T.jsxs)(p,{termWidth:`auto`,children:[(0,T.jsx)(v,{children:`Return Policy`}),(0,T.jsx)(C,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,T.jsx)(v,{children:`Customer Support`}),(0,T.jsx)(C,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.`})]}),(0,T.jsxs)(p,{termWidth:`60%`,children:[(0,T.jsx)(v,{children:`Warranty`}),(0,T.jsx)(C,{children:`All products come with a 2-year manufacturer warranty covering defects and malfunctions.`}),(0,T.jsx)(v,{children:`Gift Wrapping`}),(0,T.jsx)(C,{children:`Available at checkout for an additional fee.`})]})]})},M={parameters:{docs:{description:{story:"A single term can have multiple definitions. Since the default two-column grid would misplace additional `DD` elements, use `gridColumnTemplate` to define a custom `grid-template-columns` value that allocates a track for each definition. `gridColumnTemplate` is the general escape hatch for any layout that `termWidth` cannot cover. In a `multiColumn` layout, setting `gridColumnTemplate` on `DL` passes it to all `DLC` children via context; individual columns can override it with their own `gridColumnTemplate`."}}},render:e=>(0,T.jsxs)(l,{gridColumnTemplate:`auto 1fr 1fr 1fr`,...e,children:[(0,T.jsx)(v,{children:`Shipping Method`}),(0,T.jsx)(C,{children:`Standard shipping`}),(0,T.jsx)(C,{children:`Livraison standard`}),(0,T.jsx)(C,{children:`Spedizione standard`}),(0,T.jsx)(v,{children:`Payment Options`}),(0,T.jsx)(C,{children:`Credit/Debit cards, PayPal, and bank transfer`}),(0,T.jsx)(C,{children:`Cartes de crédit, PayPal et virement bancaire`}),(0,T.jsx)(C,{children:`Carte di credito, PayPal e bonifico bancario`}),(0,T.jsx)(v,{children:`Delivery Time`}),(0,T.jsx)(C,{children:`1–3 business days`}),(0,T.jsx)(C,{children:`1–3 jours ouvrables`}),(0,T.jsx)(C,{children:`1–3 giorni lavorativi`})]})},N=[`Default`,`LeftAligned`,`TermWidth`,`MultiColumn`,`MultiColumnTermWidthOverride`,`MultipleDefinitions`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`termWidth\` to fix the width of the term column. Accepts any valid CSS length or percentage (e.g. \`"25%"\`, \`"200px"\`, \`"12rem"\`). The definition column takes the remaining space.'
      }
    }
  },
  render: args => <DL termWidth="33%" {...args}>
      <DT>Shipping Method</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>
        Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.
      </DD>
      <DT>Delivery Time</DT>
      <DD>1 day, 2 days, 3 days.</DD>
    </DL>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass \`multiColumn\` to arrange content side by side. Wrap each column's term-definition pairs in a \`DescriptionListColumn\`. Each column sizes its term to content by default."
      }
    }
  },
  render: args => <DL multiColumn {...args}>
      <DLC>
        <DT>Shipping Method</DT>
        <DD>Standard shipping: 5-7 business days.</DD>
        <DT>Payment Options</DT>
        <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
        <DT>Delivery Time</DT>
        <DD>Estimated delivery between 1 to 3 business days after shipping.</DD>
      </DLC>
      <DLC>
        <DT>Return Policy</DT>
        <DD>
          Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and
          condition.
        </DD>
        <DT>Customer Support</DT>
        <DD>Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.</DD>
      </DLC>
    </DL>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Each \`DescriptionListColumn\` inherits \`termWidth\` from the parent \`DescriptionList\`, but can override it individually. Here the parent sets \`"25%"\`, the middle column overrides to \`"auto"\`, and the right column to \`"60%"\`.'
      }
    }
  },
  render: args => <DL multiColumn termWidth="25%" {...args}>
      <DLC>
        <DT>Shipping Method</DT>
        <DD>Standard shipping: 5-7 business days.</DD>
        <DT>Payment Options</DT>
        <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
        <DT>Delivery Time</DT>
        <DD>Estimated delivery between 1 to 3 business days after shipping.</DD>
      </DLC>
      <DLC termWidth="auto">
        <DT>Return Policy</DT>
        <DD>
          Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and
          condition.
        </DD>
        <DT>Customer Support</DT>
        <DD>Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.</DD>
      </DLC>
      <DLC termWidth="60%">
        <DT>Warranty</DT>
        <DD>All products come with a 2-year manufacturer warranty covering defects and malfunctions.</DD>
        <DT>Gift Wrapping</DT>
        <DD>Available at checkout for an additional fee.</DD>
      </DLC>
    </DL>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A single term can have multiple definitions. Since the default two-column grid would misplace additional \`DD\` elements, use \`gridColumnTemplate\` to define a custom \`grid-template-columns\` value that allocates a track for each definition. \`gridColumnTemplate\` is the general escape hatch for any layout that \`termWidth\` cannot cover. In a \`multiColumn\` layout, setting \`gridColumnTemplate\` on \`DL\` passes it to all \`DLC\` children via context; individual columns can override it with their own \`gridColumnTemplate\`."
      }
    }
  },
  render: args => <DL gridColumnTemplate="auto 1fr 1fr 1fr" {...args}>
      <DT>Shipping Method</DT>
      <DD>Standard shipping</DD>
      <DD>Livraison standard</DD>
      <DD>Spedizione standard</DD>
      <DT>Payment Options</DT>
      <DD>Credit/Debit cards, PayPal, and bank transfer</DD>
      <DD>Cartes de crédit, PayPal et virement bancaire</DD>
      <DD>Carte di credito, PayPal e bonifico bancario</DD>
      <DT>Delivery Time</DT>
      <DD>1–3 business days</DD>
      <DD>1–3 jours ouvrables</DD>
      <DD>1–3 giorni lavorativi</DD>
    </DL>
}`,...M.parameters?.docs?.source}}}})))()}P();export{D as Default,O as LeftAligned,A as MultiColumn,j as MultiColumnTermWidthOverride,M as MultipleDefinitions,k as TermWidth,N as __namedExportsOrder,E as default};