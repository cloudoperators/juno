import{j as e}from"./iframe-CH-IGKJ6.js";import"./preload-helper-PPVm8Dsz.js";const s=({children:t,alignTerms:a="right",className:p=""})=>e.jsx("dl",{className:`dl jn:grid jn:grid-cols-4 jn:group ${a==="right"?"align-right":"align-left"} ${p}`,"data-testid":"description-list",children:t}),c=s;try{s.displayName="DescriptionList",s.__docgenInfo={description:`A wrapper component that semantically represents a list of terms and their corresponding descriptions using HTML <dl> elements.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:"DescriptionList",props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:"children",required:!0,type:{name:"ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>"}},alignTerms:{defaultValue:{value:"right"},description:"Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.",name:"alignTerms",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{c.displayName="DL",c.__docgenInfo={description:"",displayName:"DL",props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:"children",required:!0,type:{name:"ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>"}},alignTerms:{defaultValue:{value:"right"},description:"Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.",name:"alignTerms",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m=`
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
`,d=({children:t,className:a=""})=>e.jsx("dt",{className:`dt ${m} ${a}`,children:t}),n=d;try{d.displayName="DescriptionTerm",d.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:"DescriptionTerm",props:{children:{defaultValue:null,description:"Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="DT",n.__docgenInfo={description:"",displayName:"DT",props:{children:{defaultValue:null,description:"Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u=`
  jn:grid
  jn:items-start
  jn:border-b 
  jn:border-theme-default
  jn:bg-dd-background
  jn:text-dd-text
  jn:p-2
  jn:col-span-3
`,l=({children:t,className:a=""})=>e.jsx("dd",{className:`dd ${u} ${a}`,children:t}),i=l;try{l.displayName="DescriptionDefinition",l.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:"DescriptionDefinition",props:{children:{defaultValue:null,description:"Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class names for applying custom styles or overriding default styles on the <dd> element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="DD",i.__docgenInfo={description:"",displayName:"DD",props:{children:{defaultValue:null,description:"Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class names for applying custom styles or overriding default styles on the <dd> element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Components/DescriptionList",component:s,argTypes:{children:{control:!1}}},r={render:t=>e.jsxs(s,{...t,children:[e.jsx(n,{children:"Shipping"}),e.jsx(i,{children:"Standard shipping: 5-7 business days."}),e.jsx(n,{children:"Payment Options"}),e.jsx(i,{children:"Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options."}),e.jsx(n,{children:"Delivery Time"}),e.jsx(i,{children:"1 day, 2 days, 3 days."})]})},o={render:t=>e.jsxs(s,{alignTerms:"right",...t,children:[e.jsx(n,{children:"Shipping Method"}),e.jsx(i,{children:"Standard shipping: 5-7 business days."}),e.jsx(n,{children:"Payment Options"}),e.jsx(i,{children:"Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction experience."}),e.jsx(n,{children:"Delivery Time"}),e.jsx(i,{children:"Estimated delivery between 1 to 3 business days after shipping."}),e.jsx(n,{children:"Return Policy"}),e.jsx(i,{children:"Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and condition."}),e.jsx(n,{children:"Customer Support"}),e.jsx(i,{children:"Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to assist with any inquiries."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <DT>Shipping</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>
        Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.
      </DD>
      <DT>Delivery Time</DT>
      <DD>1 day, 2 days, 3 days.</DD>
    </DescriptionList>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <DescriptionList alignTerms="right" {...args}>
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
    </DescriptionList>
}`,...o.parameters?.docs?.source}}};const D=["Default","RightAligned"];export{r as Default,o as RightAligned,D as __namedExportsOrder,g as default};
