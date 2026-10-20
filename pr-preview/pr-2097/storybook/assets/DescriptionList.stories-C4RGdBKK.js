import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{i=t(n()),a=r(),o=e=>{switch(e){case`px`:return`jn:gap-px`;case`0.5`:return`jn:gap-0.5`;case`1`:return`jn:gap-1`;case`1.5`:return`jn:gap-1.5`;case`2`:return`jn:gap-2`;case`2.5`:return`jn:gap-2.5`;case`3`:return`jn:gap-3`;case`3.5`:return`jn:gap-3.5`;case`4`:return`jn:gap-4`;case`5`:return`jn:gap-5`;case`6`:return`jn:gap-6`;case`7`:return`jn:gap-7`;case`8`:return`jn:gap-8`;case`9`:return`jn:gap-9`;case`10`:return`jn:gap-10`;case`11`:return`jn:gap-11`;case`12`:return`jn:gap-12`;case`14`:return`jn:gap-14`;case`16`:return`jn:gap-16`;case`20`:return`jn:gap-20`;case`24`:return`jn:gap-24`;case`28`:return`jn:gap-28`;case`32`:return`jn:gap-32`;case`36`:return`jn:gap-36`;case`40`:return`jn:gap-40`;case`44`:return`jn:gap-44`;case`48`:return`jn:gap-48`;case`52`:return`jn:gap-52`;case`56`:return`jn:gap-56`;case`60`:return`jn:gap-60`;case`64`:return`jn:gap-64`;case`72`:return`jn:gap-72`;case`80`:return`jn:gap-80`;case`96`:return`jn:gap-96`;default:return`jn:gap-0`}},s=(0,i.createContext)({}),c=()=>(0,i.useContext)(s),l=({children:e,alignTerms:t=`right`,multiColumn:n=!1,gap:r,termWidth:c=`auto`,gridColumnTemplate:l,className:u=``,...d})=>{let f=(0,i.useMemo)(()=>({termWidth:c,gridColumnTemplate:l}),[c,l]);return(0,a.jsx)(s.Provider,{value:f,children:(0,a.jsx)(`dl`,{className:`dl ${n?`jn:flex`:`jn:grid`} jn:group ${t===`right`?`align-right`:`align-left`} ${n&&r?o(r):``} ${u}`,style:n?void 0:{gridTemplateColumns:l??`${c} 1fr`},...d,children:e})})},u=l;try{s.displayName=`DescriptionListContext`,s.__docgenInfo={description:``,displayName:`DescriptionListContext`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{},tags:{}}}catch{}try{l.displayName=`DescriptionList`,l.__docgenInfo={description:`A component that semantically represents a list of terms and their corresponding descriptions.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:`DescriptionList`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.
When multiColumn is true, children should be DescriptionListColumn elements.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`ReactNode`}},alignTerms:{defaultValue:{value:`right`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},multiColumn:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`When true, switches the layout to flex so that DescriptionListColumn children render side by side.`,name:`multiColumn`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`boolean`}},gap:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Sets the gap between columns. Only applies when multiColumn is true. Accepts any Tailwind spacing
token (e.g. "4", "6", "8"). Has no effect when multiColumn is false.`,name:`gap`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`StackGap`,value:[{value:`"0"`},{value:`"px"`},{value:`"0.5"`},{value:`"1"`},{value:`"1.5"`},{value:`"2"`},{value:`"2.5"`},{value:`"3"`},{value:`"3.5"`},{value:`"4"`},{value:`"5"`},{value:`"6"`},{value:`"7"`},{value:`"8"`},{value:`"9"`},{value:`"10"`},{value:`"11"`},{value:`"12"`},{value:`"14"`},{value:`"16"`},{value:`"20"`},{value:`"24"`},{value:`"28"`},{value:`"32"`},{value:`"36"`},{value:`"40"`},{value:`"44"`},{value:`"48"`},{value:`"52"`},{value:`"56"`},{value:`"60"`},{value:`"64"`},{value:`"72"`},{value:`"80"`},{value:`"96"`}]}},termWidth:{defaultValue:{value:`auto`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Controls the width of the term column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
The definition column takes the remaining space.
This value is inherited by DescriptionListColumn children unless they set their own termWidth.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherited by DescriptionListColumn children via context unless they set their own gridColumnTemplate.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{u.displayName=`DL`,u.__docgenInfo={description:``,displayName:`DL`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.
When multiColumn is true, children should be DescriptionListColumn elements.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`ReactNode`}},alignTerms:{defaultValue:{value:`right`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},multiColumn:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`When true, switches the layout to flex so that DescriptionListColumn children render side by side.`,name:`multiColumn`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`boolean`}},gap:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Sets the gap between columns. Only applies when multiColumn is true. Accepts any Tailwind spacing
token (e.g. "4", "6", "8"). Has no effect when multiColumn is false.`,name:`gap`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`enum`,raw:`StackGap`,value:[{value:`"0"`},{value:`"px"`},{value:`"0.5"`},{value:`"1"`},{value:`"1.5"`},{value:`"2"`},{value:`"2.5"`},{value:`"3"`},{value:`"3.5"`},{value:`"4"`},{value:`"5"`},{value:`"6"`},{value:`"7"`},{value:`"8"`},{value:`"9"`},{value:`"10"`},{value:`"11"`},{value:`"12"`},{value:`"14"`},{value:`"16"`},{value:`"20"`},{value:`"24"`},{value:`"28"`},{value:`"32"`},{value:`"36"`},{value:`"40"`},{value:`"44"`},{value:`"48"`},{value:`"52"`},{value:`"56"`},{value:`"60"`},{value:`"64"`},{value:`"72"`},{value:`"80"`},{value:`"96"`}]}},termWidth:{defaultValue:{value:`auto`},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Controls the width of the term column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
The definition column takes the remaining space.
This value is inherited by DescriptionListColumn children unless they set their own termWidth.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherited by DescriptionListColumn children via context unless they set their own gridColumnTemplate.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`}],description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionList/DescriptionList.component.tsx`,name:`DescriptionListProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var f,p,m;function h(){return(h=e((()=>{n(),d(),f=r(),p=({children:e,termWidth:t,gridColumnTemplate:n,className:r=``,...i})=>{let{termWidth:a,gridColumnTemplate:o}=c(),s=n??(t?`${t} 1fr`:void 0)??o??`${a??`auto`} 1fr`;return(0,f.jsx)(`div`,{className:`dlc jn:grid jn:flex-1 ${r}`,style:{gridTemplateColumns:s},...i,children:e})},m=p;try{p.displayName=`DescriptionListColumn`,p.__docgenInfo={description:"A column wrapper for use inside a multiColumn DescriptionList.\nRe-establishes the grid context so that DT and DD elements render correctly within each column.\nNote: passing a `style` prop will override the computed `gridTemplateColumns` — this is intentional,\ngiving consumers full escape-hatch access at their own responsibility.",displayName:`DescriptionListColumn`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Child components. Accepts DescriptionTerm and DescriptionDefinition elements, including
conditional expressions and ternaries that may resolve to null or false.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`ReactNode`}},termWidth:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherits the parent DescriptionList's gridColumnTemplate when not set. Overrides the parent value when set.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{m.displayName=`DLC`,m.__docgenInfo={description:``,displayName:`DLC`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Child components. Accepts DescriptionTerm and DescriptionDefinition elements, including
conditional expressions and ternaries that may resolve to null or false.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`ReactNode`}},termWidth:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Controls the width of the term column within this column. Accepts "auto" (default — terms size to their content),
a percentage string (e.g. "25%", "33%"), or any valid CSS column width value (e.g. "200px", "12rem").
Inherits the parent DescriptionList's termWidth when not set. Overrides the parent value when set.`,name:`termWidth`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}},gridColumnTemplate:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`}],description:`Custom CSS grid-template-columns. Overwrites other sizing props. Useful for non-standard layouts such as multiple definitions per term. Inherits the parent DescriptionList's gridColumnTemplate when not set. Overrides the parent value when set.`,name:`gridColumnTemplate`,parent:{fileName:`ui-components/src/components/DescriptionListColumn/DescriptionListColumn.component.tsx`,name:`DescriptionListColumnProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var g,_,v,y;function b(){return(b=e((()=>{n(),g=r(),_=`
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
`,v=({children:e,className:t=``,...n})=>(0,g.jsx)(`dt`,{className:`dt ${_} ${t}`,...n,children:e}),y=v;try{v.displayName=`DescriptionTerm`,v.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:`DescriptionTerm`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{y.displayName=`DT`,y.__docgenInfo={description:``,displayName:`DT`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`}],description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionTerm/DescriptionTerm.component.tsx`,name:`DescriptionTermProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var x,S,C,w;function T(){return(T=e((()=>{n(),x=r(),S=`
  jn:grid
  jn:items-start
  jn:border-b
  jn:border-theme-default
  jn:bg-dd-background
  jn:text-dd-text
  jn:p-2
`,C=({children:e,className:t=``,...n})=>(0,x.jsx)(`dd`,{className:`dd ${S} ${t}`,...n,children:e}),w=C;try{C.displayName=`DescriptionDefinition`,C.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:`DescriptionDefinition`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{w.displayName=`DD`,w.__docgenInfo={description:``,displayName:`DD`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!0,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`}],description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,parent:{fileName:`ui-components/src/components/DescriptionDefinition/DescriptionDefinition.component.tsx`,name:`DescriptionDefinitionProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{n(),d(),h(),b(),T(),E=r(),D={title:`Components/DescriptionList`,component:u,parameters:{docs:{description:{component:'\nA component that contains a list of terms and their corresponding descriptions.\n\nThis component enforces structure by expecting child elements of `DescriptionTerm` and `DescriptionDefinition`.\n\n### Grid Layout\nBy default, the component uses a two-column grid where the term column sizes to its content and the definition column takes the remaining space. Use the `termWidth` prop to set a fixed width for the term column — it accepts any valid CSS length or percentage value (e.g. `"25%"`, `"200px"`, `"12rem"`).\n\n### Multi-column layout\nPass `multiColumn` to arrange content side by side. Wrap each column\'s `DescriptionTerm` and `DescriptionDefinition` pairs in a `DescriptionListColumn`. Each column inherits the parent\'s `termWidth` but can override it individually.\n        '}}},argTypes:{children:{control:!1}}},O={render:e=>(0,E.jsxs)(u,{...e,children:[(0,E.jsx)(y,{children:`Shipping`}),(0,E.jsx)(w,{children:`Standard shipping: 5-7 business days.`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`1 day, 2 days, 3 days.`})]})},k={render:e=>(0,E.jsxs)(u,{alignTerms:`left`,...e,children:[(0,E.jsx)(y,{children:`Shipping Method`}),(0,E.jsx)(w,{children:`Standard shipping: 5-7 business days.`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction experience.`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`Estimated delivery between 1 to 3 business days after shipping.`}),(0,E.jsx)(y,{children:`Return Policy`}),(0,E.jsx)(w,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,E.jsx)(y,{children:`Customer Support`}),(0,E.jsx)(w,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to assist with any inquiries.`})]})},A={parameters:{docs:{description:{story:'Pass `termWidth` to fix the width of the term column. Accepts any valid CSS length or percentage (e.g. `"25%"`, `"200px"`, `"12rem"`). The definition column takes the remaining space.'}}},render:e=>(0,E.jsxs)(u,{termWidth:`33%`,...e,children:[(0,E.jsx)(y,{children:`Shipping Method`}),(0,E.jsx)(w,{children:`Standard shipping: 5-7 business days.`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`1 day, 2 days, 3 days.`})]})},j={parameters:{docs:{description:{story:"Pass `multiColumn` to arrange content side by side. Wrap each column's term-definition pairs in a `DescriptionListColumn`. Each column sizes its term to content by default."}}},render:e=>(0,E.jsxs)(u,{multiColumn:!0,...e,children:[(0,E.jsxs)(m,{children:[(0,E.jsx)(y,{children:`Shipping Method`}),(0,E.jsx)(w,{children:`Standard shipping: 5-7 business days.`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer.`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`Estimated delivery between 1 to 3 business days after shipping.`})]}),(0,E.jsxs)(m,{children:[(0,E.jsx)(y,{children:`Return Policy`}),(0,E.jsx)(w,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,E.jsx)(y,{children:`Customer Support`}),(0,E.jsx)(w,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.`})]})]})},M={parameters:{docs:{description:{story:'Pass `gap` together with `multiColumn` to control the spacing between columns. Accepts any Tailwind spacing token (e.g. `"4"`, `"6"`, `"8"`). Has no effect without `multiColumn`.'}}},render:e=>(0,E.jsxs)(u,{multiColumn:!0,gap:`8`,...e,children:[(0,E.jsxs)(m,{children:[(0,E.jsx)(y,{children:`Shipping Method`}),(0,E.jsx)(w,{children:`Standard shipping: 5-7 business days.`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer.`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`Estimated delivery between 1 to 3 business days after shipping.`})]}),(0,E.jsxs)(m,{children:[(0,E.jsx)(y,{children:`Return Policy`}),(0,E.jsx)(w,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,E.jsx)(y,{children:`Customer Support`}),(0,E.jsx)(w,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.`})]})]})},N={parameters:{docs:{description:{story:'Each `DescriptionListColumn` inherits `termWidth` from the parent `DescriptionList`, but can override it individually. Here the parent sets `"25%"`, the middle column overrides to `"auto"`, and the right column to `"60%"`.'}}},render:e=>(0,E.jsxs)(u,{multiColumn:!0,termWidth:`25%`,...e,children:[(0,E.jsxs)(m,{children:[(0,E.jsx)(y,{children:`Shipping Method`}),(0,E.jsx)(w,{children:`Standard shipping: 5-7 business days.`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer.`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`Estimated delivery between 1 to 3 business days after shipping.`})]}),(0,E.jsxs)(m,{termWidth:`auto`,children:[(0,E.jsx)(y,{children:`Return Policy`}),(0,E.jsx)(w,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,E.jsx)(y,{children:`Customer Support`}),(0,E.jsx)(w,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.`})]}),(0,E.jsxs)(m,{termWidth:`60%`,children:[(0,E.jsx)(y,{children:`Warranty`}),(0,E.jsx)(w,{children:`All products come with a 2-year manufacturer warranty covering defects and malfunctions.`}),(0,E.jsx)(y,{children:`Gift Wrapping`}),(0,E.jsx)(w,{children:`Available at checkout for an additional fee.`})]})]})},P={parameters:{docs:{description:{story:"A single term can have multiple definitions. Since the default two-column grid would misplace additional `DD` elements, use `gridColumnTemplate` to define a custom `grid-template-columns` value that allocates a track for each definition. `gridColumnTemplate` is the general escape hatch for any layout that `termWidth` cannot cover. In a `multiColumn` layout, setting `gridColumnTemplate` on `DL` passes it to all `DLC` children via context; individual columns can override it with their own `gridColumnTemplate`."}}},render:e=>(0,E.jsxs)(u,{gridColumnTemplate:`auto 1fr 1fr 1fr`,...e,children:[(0,E.jsx)(y,{children:`Shipping Method`}),(0,E.jsx)(w,{children:`Standard shipping`}),(0,E.jsx)(w,{children:`Livraison standard`}),(0,E.jsx)(w,{children:`Spedizione standard`}),(0,E.jsx)(y,{children:`Payment Options`}),(0,E.jsx)(w,{children:`Credit/Debit cards, PayPal, and bank transfer`}),(0,E.jsx)(w,{children:`Cartes de crédit, PayPal et virement bancaire`}),(0,E.jsx)(w,{children:`Carte di credito, PayPal e bonifico bancario`}),(0,E.jsx)(y,{children:`Delivery Time`}),(0,E.jsx)(w,{children:`1–3 business days`}),(0,E.jsx)(w,{children:`1–3 jours ouvrables`}),(0,E.jsx)(w,{children:`1–3 giorni lavorativi`})]})},F=[`Default`,`LeftAligned`,`TermWidth`,`MultiColumn`,`MultiColumnWithGap`,`MultiColumnTermWidthOverride`,`MultipleDefinitions`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pass \`gap\` together with \`multiColumn\` to control the spacing between columns. Accepts any Tailwind spacing token (e.g. \`"4"\`, \`"6"\`, \`"8"\`). Has no effect without \`multiColumn\`.'
      }
    }
  },
  render: args => <DL multiColumn gap="8" {...args}>
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}}})))()}I();export{O as Default,k as LeftAligned,j as MultiColumn,N as MultiColumnTermWidthOverride,M as MultiColumnWithGap,P as MultipleDefinitions,A as TermWidth,F as __namedExportsOrder,D as default};