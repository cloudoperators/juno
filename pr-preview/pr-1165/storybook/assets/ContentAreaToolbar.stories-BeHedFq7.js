import{j as n}from"./iframe-C9T1eEdY.js";import{B as s}from"./Button.component-jP-AjSro.js";import"./Icon.component-BTMMvhyd.js";import"./Spinner.component-CAJy5Hsp.js";const l=`
  jn:bg-theme-background-lvl-1
  jn:py-3
  jn:px-6
  jn:flex
  jn:items-center
  jn:justify-end
`,o=({className:e="",children:r,...a})=>n.jsx("div",{className:`juno-content-area-toolbar ${l} ${e}`,...a,children:r});try{o.displayName="ContentAreaToolbar",o.__docgenInfo={description:`ContentAreaToolbar represents the main toolbar within the content area.
It is designed to hold main actions relevant to the current page.`,displayName:"ContentAreaToolbar",props:{className:{defaultValue:{value:""},description:"Additional CSS classes for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Custom content to render within the content area toolbar.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const p={title:"Layout/ContentAreaToolbar",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},t={render:e=>n.jsx(o,{...e,children:n.jsx(s,{children:"Main Action"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ContentAreaToolbarProps) => <ContentAreaToolbar {...args}>
      <Button>Main Action</Button>
    </ContentAreaToolbar>
}`,...t.parameters?.docs?.source}}};const u=["Basic"];export{t as Basic,u as __namedExportsOrder,p as default};
