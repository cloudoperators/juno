import{j as e}from"./iframe-CmK2yqmo.js";import"./preload-helper-PPVm8Dsz.js";const r=({children:t,alignTerms:s="right",className:u=""})=>e.jsx("dl",{className:`dl ${u}`,"data-testid":"description-list",style:{justifyContent:s==="right"?"flex-end":"flex-start"},children:t}),m=r;try{r.displayName="DescriptionList",r.__docgenInfo={description:`A wrapper component that semantically represents a list of terms and their corresponding descriptions using HTML <dl> elements.
This component enforces structure by expecting child elements of DescriptionTerm or DescriptionDefinition,
aligning them according to the specified terms alignment.`,displayName:"DescriptionList",props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:"children",required:!0,type:{name:"ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>"}},alignTerms:{defaultValue:{value:"right"},description:"Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.",name:"alignTerms",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="DL",m.__docgenInfo={description:"",displayName:"DL",props:{children:{defaultValue:null,description:`Child components must be either DescriptionTerm or DescriptionDefinition to maintain semantic structure.
Supports multiple instances to create a detailed list of terms and definitions.`,name:"children",required:!0,type:{name:"ReactElement<DescriptionTermProps | DescriptionDefinitionProps, string | JSXElementConstructor<any>> | ReactElement<...>[] | ReactElement<...>"}},alignTerms:{defaultValue:{value:"right"},description:"Determines the alignment of terms within the list. Align terms to the left or right based on preference for display style.",name:"alignTerms",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional custom class names to apply styles to the <dl> element or to extend styling from the design system.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=({children:t,className:s=""})=>e.jsx("dt",{className:`dt jn:border-b-[1px] jn:border-theme-default ${s}`,children:t}),i=c;try{c.displayName="DescriptionTerm",c.__docgenInfo={description:`Represents a term in a description list, rendering an HTML <dt> element.
Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.`,displayName:"DescriptionTerm",props:{children:{defaultValue:null,description:"Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{i.displayName="DT",i.__docgenInfo={description:"",displayName:"DT",props:{children:{defaultValue:null,description:"Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const p=({children:t,className:s=""})=>e.jsx("dd",{className:`dd jn:border-b-[1px] jn:border-theme-default ${s}`,children:t}),n=p;try{p.displayName="DescriptionDefinition",p.__docgenInfo={description:`Represents the definition or description in a description list, rendering as an HTML <dd> element.
Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.`,displayName:"DescriptionDefinition",props:{children:{defaultValue:null,description:"Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class names for applying custom styles or overriding default styles on the <dd> element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="DD",n.__docgenInfo={description:"",displayName:"DD",props:{children:{defaultValue:null,description:"Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class names for applying custom styles or overriding default styles on the <dd> element.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const y={title:"Components/DescriptionList",component:r,argTypes:{children:{control:!1}}},d={render:t=>e.jsxs(r,{...t,children:[e.jsx(i,{children:"Warranty"}),e.jsx(n,{children:"2 years limited warranty with options for extension."})]})},a={render:t=>e.jsxs(r,{...t,children:[e.jsx(i,{children:"Shipping"}),e.jsx(n,{children:"Standard shipping: 5-7 business days."}),e.jsx(n,{children:"Express shipping: 2-3 business days."}),e.jsx(i,{children:"Payment Options"}),e.jsx(n,{children:"Credit/Debit cards, PayPal, and bank transfer."})]})},l={render:t=>e.jsxs(r,{...t,children:[e.jsxs("div",{children:[e.jsx(i,{children:"Privacy Policy"}),e.jsx(n,{children:"We value your privacy and ensure data protection."}),e.jsx(n,{children:"Your information will not be shared without consent."}),e.jsx(n,{children:"Regular audits are conducted for security assurance."})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Terms of Service"}),e.jsx(n,{children:"By using our services, you agree to our terms."})]})]})},o={render:t=>e.jsxs(r,{...t,children:[e.jsxs("div",{children:[e.jsx(i,{children:"Full Name"}),e.jsx(n,{children:"John Doe"})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Email"}),e.jsx(n,{children:"johndoe@example.com"})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Membership"}),e.jsx(n,{children:"Platinum Member"}),e.jsx(n,{children:"Joined: January 2020"})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Preferences"}),e.jsx(n,{children:"Language: English"}),e.jsx(n,{children:"Theme: Dark"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <DT>Warranty</DT>
      <DD>2 years limited warranty with options for extension.</DD>
    </DescriptionList>
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <DT>Shipping</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DD>Express shipping: 2-3 business days.</DD>
      <DT>Payment Options</DT>
      <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
    </DescriptionList>
}`,...a.parameters?.docs?.source},description:{story:"You can use many definitions per term.",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <div>
        <DT>Privacy Policy</DT>
        <DD>We value your privacy and ensure data protection.</DD>
        <DD>Your information will not be shared without consent.</DD>
        <DD>Regular audits are conducted for security assurance.</DD>
      </div>
      <div>
        <DT>Terms of Service</DT>
        <DD>By using our services, you agree to our terms.</DD>
      </div>
    </DescriptionList>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <DescriptionList {...args}>
      <div>
        <DT>Full Name</DT>
        <DD>John Doe</DD>
      </div>
      <div>
        <DT>Email</DT>
        <DD>johndoe@example.com</DD>
      </div>
      <div>
        <DT>Membership</DT>
        <DD>Platinum Member</DD>
        <DD>Joined: January 2020</DD>
      </div>
      <div>
        <DT>Preferences</DT>
        <DD>Language: English</DD>
        <DD>Theme: Dark</DD>
      </div>
    </DescriptionList>
}`,...o.parameters?.docs?.source},description:{story:"You can wrap a term with multiple definitions in a <div> for grouping.",...o.parameters?.docs?.description}}};const f=["Default","MultipleDefinitions","GroupedDefinitions","UserProfileDetails"];export{d as Default,l as GroupedDefinitions,a as MultipleDefinitions,o as UserProfileDetails,f as __namedExportsOrder,y as default};
