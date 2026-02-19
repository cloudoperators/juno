import{j as r}from"./iframe-C18dJaKw.js";import{B as s}from"./Button.component-C-k_4Y2n.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-COcNEv4I.js";import"./Spinner.component-CF3zFZUs.js";const c=`
  jn:bg-theme-background-lvl-1
  jn:py-3
  jn:px-6
  jn:flex
  jn:items-center
  jn:justify-end
`,o=({className:e="",children:n,...a})=>r.jsx("div",{className:`juno-content-area-toolbar ${c} ${e}`,...a,children:n});try{o.displayName="ContentAreaToolbar",o.__docgenInfo={description:"The `ContentAreaToolbar` represents the main toolbar within a content area, providing space\nfor main actions relevant to the current page context. It supports custom content and styling.",displayName:"ContentAreaToolbar",props:{className:{defaultValue:{value:""},description:"Custom CSS classes for styling the toolbar.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Content or elements to render within the content area toolbar.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const u={title:"Layout/ContentAreaToolbar",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},t={render:e=>r.jsx(o,{...e,children:r.jsx(s,{children:"Main Action"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ContentAreaToolbarProps) => <ContentAreaToolbar {...args}>
      <Button>Main Action</Button>
    </ContentAreaToolbar>
}`,...t.parameters?.docs?.source}}};const b=["Basic"];export{t as Basic,b as __namedExportsOrder,u as default};
