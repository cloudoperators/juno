import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";e();var n=t(),r=({children:e,alignTerms:t=`right`,className:r=``,...i})=>(0,n.jsx)(`dl`,{className:`dl jn:grid jn:grid-cols-4 jn:group ${t===`right`?`align-right`:`align-left`} ${r}`,...i,children:e}),i=r;try{r.displayName=`DescriptionList`,r.__docgenInfo={description:`A component that semantically represents a list of terms and their corresponding descriptions.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:`DescriptionList`,props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:`children`,required:!0,type:{name:`ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>`}},alignTerms:{defaultValue:{value:`right`},description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,required:!1,type:{name:`enum`,value:[{value:`"right"`},{value:`"left"`}]}},className:{defaultValue:{value:``},description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{i.displayName=`DL`,i.__docgenInfo={description:``,displayName:`DL`,props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:`children`,required:!0,type:{name:`ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>`}},alignTerms:{defaultValue:{value:`right`},description:`Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.`,name:`alignTerms`,required:!1,type:{name:`enum`,value:[{value:`"right"`},{value:`"left"`}]}},className:{defaultValue:{value:``},description:`Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var a=`
jn:grid 
jn:items-start 
jn:border-b 
jn:border-theme-default
jn:bg-dt-background
jn:text-dt-text
jn:font-bold
jn:gap-y-[0.25rem]
jn:whitespace-nowrap 
jn:p-2
jn:col-span-1
jn:group-[.align-right]:text-right 
jn:group-[.align-left]:text-left
`,o=({children:e,className:t=``,...r})=>(0,n.jsx)(`dt`,{className:`dt ${a} ${t}`,...r,children:e}),s=o;try{o.displayName=`DescriptionTerm`,o.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:`DescriptionTerm`,props:{children:{defaultValue:null,description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,required:!0,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{s.displayName=`DT`,s.__docgenInfo={description:``,displayName:`DT`,props:{children:{defaultValue:null,description:`Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.`,name:`children`,required:!0,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var c=`
  jn:grid
  jn:items-start
  jn:border-b 
  jn:border-theme-default
  jn:bg-dd-background
  jn:text-dd-text
  jn:p-2
  jn:col-span-3
`,l=({children:e,className:t=``,...r})=>(0,n.jsx)(`dd`,{className:`dd ${c} ${t}`,...r,children:e}),u=l;try{l.displayName=`DescriptionDefinition`,l.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:`DescriptionDefinition`,props:{children:{defaultValue:null,description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,required:!0,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}try{u.displayName=`DD`,u.__docgenInfo={description:``,displayName:`DD`,props:{children:{defaultValue:null,description:`Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.`,name:`children`,required:!0,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Additional class names for applying custom styles or overriding default styles on the <dd> element.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var d={title:`Components/DescriptionList`,component:i,parameters:{docs:{description:{component:`
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
        `}}},argTypes:{children:{control:!1}}},f={render:e=>(0,n.jsxs)(i,{...e,children:[(0,n.jsx)(s,{children:`Shipping`}),(0,n.jsx)(u,{children:`Standard shipping: 5-7 business days.`}),(0,n.jsx)(s,{children:`Payment Options`}),(0,n.jsx)(u,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.`}),(0,n.jsx)(s,{children:`Delivery Time`}),(0,n.jsx)(u,{children:`1 day, 2 days, 3 days.`})]})},p={render:e=>(0,n.jsxs)(i,{alignTerms:`left`,...e,children:[(0,n.jsx)(s,{children:`Shipping Method`}),(0,n.jsx)(u,{children:`Standard shipping: 5-7 business days.`}),(0,n.jsx)(s,{children:`Payment Options`}),(0,n.jsx)(u,{children:`Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction experience.`}),(0,n.jsx)(s,{children:`Delivery Time`}),(0,n.jsx)(u,{children:`Estimated delivery between 1 to 3 business days after shipping.`}),(0,n.jsx)(s,{children:`Return Policy`}),(0,n.jsx)(u,{children:`Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition.`}),(0,n.jsx)(s,{children:`Customer Support`}),(0,n.jsx)(u,{children:`Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to assist with any inquiries.`})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`LeftAligned`];export{f as Default,p as LeftAligned,m as __namedExportsOrder,d as default};