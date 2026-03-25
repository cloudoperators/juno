import{j as e}from"./iframe-DccoIGWA.js";import"./preload-helper-PPVm8Dsz.js";const l=({children:t,alignTerms:s="right",className:a="",...m})=>e.jsx("dl",{className:`dl jn:grid jn:grid-cols-4 jn:group ${s==="right"?"align-right":"align-left"} ${a}`,...m,children:t}),r=l;try{l.displayName="DescriptionList",l.__docgenInfo={description:`A component that semantically represents a list of terms and their corresponding descriptions.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:"DescriptionList",props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:"children",required:!0,type:{name:"ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>"}},alignTerms:{defaultValue:{value:"right"},description:"Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.",name:"alignTerms",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{r.displayName="DL",r.__docgenInfo={description:"",displayName:"DL",props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:"children",required:!0,type:{name:"ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>"}},alignTerms:{defaultValue:{value:"right"},description:"Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.",name:"alignTerms",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u=`
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
`,c=({children:t,className:s="",...a})=>e.jsx("dt",{className:`dt ${u} ${s}`,...a,children:t}),n=c;try{c.displayName="DescriptionTerm",c.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:"DescriptionTerm",props:{children:{defaultValue:null,description:"Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="DT",n.__docgenInfo={description:"",displayName:"DT",props:{children:{defaultValue:null,description:"Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const h=`
  jn:grid
  jn:items-start
  jn:border-b 
  jn:border-theme-default
  jn:bg-dd-background
  jn:text-dd-text
  jn:p-2
  jn:col-span-3
`,p=({children:t,className:s="",...a})=>e.jsx("dd",{className:`dd ${h} ${s}`,...a,children:t}),i=p;try{p.displayName="DescriptionDefinition",p.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:"DescriptionDefinition",props:{children:{defaultValue:null,description:"Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class names for applying custom styles or overriding default styles on the <dd> element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="DD",i.__docgenInfo={description:"",displayName:"DD",props:{children:{defaultValue:null,description:"Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class names for applying custom styles or overriding default styles on the <dd> element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Components/DescriptionList",component:r,parameters:{docs:{description:{component:'\nA component that contains a list of terms and their corresponding descriptions. \n\nThis component enforces structure by expecting child elements of `DescriptionTerm` and `DescriptionDefinition`.\n\n### Grid Layout\n- By default, the component uses a 4-column grid layout where each `DescriptionTerm` spans 1 column and each `DescriptionDefinition` spans 3 columns.\n- Customise the grid template by passing other Tailwind CSS grid classes via the `className` prop to override the defaults.\n\n#### Example\n```jsx\n<DL className="grid-cols-2">\n  <DT className="col-span-1">Shipping Method</DT>\n  <DD className="col-span-1">Standard shipping: 5-7 business days.</DD>\n</DL>\n```\n        '}}},argTypes:{children:{control:!1}}},o={render:t=>e.jsxs(r,{...t,children:[e.jsx(n,{children:"Shipping"}),e.jsx(i,{children:"Standard shipping: 5-7 business days."}),e.jsx(n,{children:"Payment Options"}),e.jsx(i,{children:"Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options."}),e.jsx(n,{children:"Delivery Time"}),e.jsx(i,{children:"1 day, 2 days, 3 days."})]})},d={render:t=>e.jsxs(r,{alignTerms:"left",...t,children:[e.jsx(n,{children:"Shipping Method"}),e.jsx(i,{children:"Standard shipping: 5-7 business days."}),e.jsx(n,{children:"Payment Options"}),e.jsx(i,{children:"Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction experience."}),e.jsx(n,{children:"Delivery Time"}),e.jsx(i,{children:"Estimated delivery between 1 to 3 business days after shipping."}),e.jsx(n,{children:"Return Policy"}),e.jsx(i,{children:"Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition."}),e.jsx(n,{children:"Customer Support"}),e.jsx(i,{children:"Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to assist with any inquiries."})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const f=["Default","LeftAligned"];export{o as Default,d as LeftAligned,f as __namedExportsOrder,D as default};
