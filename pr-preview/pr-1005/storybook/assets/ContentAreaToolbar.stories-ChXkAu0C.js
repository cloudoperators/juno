import{j as n}from"./iframe-CLlYSCdk.js";import{B as i}from"./Button.component-De9Mntqr.js";import"./Icon.component-DdDTKhO_.js";import"./Spinner.component-DbBz9Bhv.js";const d=`
  jn-bg-theme-background-lvl-1
  jn-py-3
  jn-px-6
  jn-flex
  jn-items-center
  jn-justify-end
`,o=({className:e="",children:l,...c})=>n.jsx("div",{className:`juno-content-area-toolbar ${d} ${e}`,...c,children:l});try{o.displayName="ContentAreaToolbar",o.__docgenInfo={description:`ContentAreaToolbar represents the main toolbar within the content area.
It is designed to hold main actions relevant to the current page.`,displayName:"ContentAreaToolbar",props:{className:{defaultValue:{value:""},description:"Additional CSS classes for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Custom content to render within the content area toolbar.",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const h={title:"Layout/ContentAreaToolbar",component:o,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},t={render:e=>n.jsx(o,{...e,children:n.jsx(i,{children:"Main Action"})})};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: ContentAreaToolbarProps) => <ContentAreaToolbar {...args}>
      <Button>Main Action</Button>
    </ContentAreaToolbar>
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const y=["Basic"];export{t as Basic,y as __namedExportsOrder,h as default};
