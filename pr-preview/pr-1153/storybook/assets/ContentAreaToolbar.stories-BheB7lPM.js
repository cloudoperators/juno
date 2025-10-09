import{j as r}from"./iframe-swATfFw2.js";import{B as s}from"./Button.component-C7nbovZq.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-Hgd_dCfJ.js";import"./Spinner.component-xww_OATA.js";const i=`
  jn:bg-theme-background-lvl-1
  jn:py-3
  jn:px-6
  jn:flex
  jn:items-center
  jn:justify-end
`,o=({className:e="",children:n,...a})=>r.jsx("div",{className:`juno-content-area-toolbar ${i} ${e}`,...a,children:n});try{o.displayName="ContentAreaToolbar",o.__docgenInfo={description:`ContentAreaToolbar represents the main toolbar within the content area.
It is designed to hold main actions relevant to the current page.`,displayName:"ContentAreaToolbar",props:{className:{defaultValue:{value:""},description:"Additional CSS classes for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Custom content to render within the content area toolbar.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const u={title:"Layout/ContentAreaToolbar",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},t={render:e=>r.jsx(o,{...e,children:r.jsx(s,{children:"Main Action"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: ContentAreaToolbarProps) => <ContentAreaToolbar {...args}>
      <Button>Main Action</Button>
    </ContentAreaToolbar>
}`,...t.parameters?.docs?.source}}};const b=["Basic"];export{t as Basic,b as __namedExportsOrder,u as default};
