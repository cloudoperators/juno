import{j as i}from"./iframe-B4yXLd1L.js";import"./preload-helper-PPVm8Dsz.js";const c=`
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-theme-default
`,l="jn:p-4",n=({children:t,padding:r=!1,className:o="",...d})=>{const s=`juno-card ${c} ${r?l:""} ${o}`;return i.jsx("div",{className:s,...d,children:t})};try{n.displayName="Card",n.__docgenInfo={description:"The `Card` component acts as a versatile container for various types of content, providing\nan optional padding feature for additional layout flexibility. It is commonly used for\ndisplaying information or grouping elements, allowing for consistent styling and shadow effects.",displayName:"Card",props:{children:{defaultValue:null,description:"Components or elements to be rendered as content.",name:"children",required:!1,type:{name:"ReactNode"}},padding:{defaultValue:{value:"false"},description:"Optional padding for the Card component.",name:"padding",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS styles to apply.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const u={title:"Components/Card",component:n,argTypes:{}},e={args:{children:"Some content in a Card with padding.",padding:!0}},a={args:{children:"A Card without padding."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Card with padding.",
    padding: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "A Card without padding."
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","WithoutPadding"];export{e as Default,a as WithoutPadding,g as __namedExportsOrder,u as default};
