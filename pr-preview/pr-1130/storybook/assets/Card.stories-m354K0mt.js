import{j as i}from"./iframe-BuiYRzVM.js";const c=`
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-juno-box-default
`,l="jn:p-4",n=({children:r,padding:d=!1,className:t="",...s})=>{const o=`juno-card ${c} ${d?l:""} ${t}`;return i.jsx("div",{className:o,...s,children:r})};try{n.displayName="Card",n.__docgenInfo={description:"A generic Card component with optional padding.",displayName:"Card",props:{children:{defaultValue:null,description:"Components or elements to be rendered as content.",name:"children",required:!1,type:{name:"ReactNode"}},padding:{defaultValue:{value:"false"},description:"Optional padding.",name:"padding",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS styles.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m={title:"Components/Card",component:n,argTypes:{}},e={args:{children:"Some content in a Card."}},a={args:{children:"A Card with padding.",padding:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Some content in a Card."
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: "A Card with padding.",
    padding: true
  }
}`,...a.parameters?.docs?.source}}};const u=["Default","WithPadding"];export{e as Default,a as WithPadding,u as __namedExportsOrder,m as default};
