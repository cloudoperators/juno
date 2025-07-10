import{j as a}from"./iframe-DMkIl3Ib.js";const c=`
	jn:flex
	jn:items-center
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`,p=`
	jn:ml-auto
`,r=({search:e,className:l="",children:i,...d})=>a.jsxs("div",{className:`juno-datagrid-toolbar ${c} ${l}`,...d,children:[e&&a.jsx("div",{children:e}),a.jsx("div",{className:p,children:i})]});try{r.displayName="DataGridToolbar",r.__docgenInfo={description:"This is the toolbar for use with a DataGrid. This is the place where you would put buttons and other controls that affect the items in the DataGrid (e.g. triggering batch actions). Optionally a search input can be added.",displayName:"DataGridToolbar",props:{search:{defaultValue:null,description:"Pass an optional SearchInput component",name:"search",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Children to render in the DataGridToolbar",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const m={title:"Components/DataGrid/DataGridToolbar",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},search:{control:!1,table:{type:{summary:"ReactElement"}}}}},t={render:e=>a.jsx(r,{...e,children:a.jsx("button",{children:"Add"})}),parameters:{docs:{description:{story:"Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"}}},args:{}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: DataGridToolbarProps) => <DataGridToolbar {...args}>
      <button>Add</button>
    </DataGridToolbar>,
  parameters: {
    docs: {
      description: {
        story: "Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"
      }
    }
  },
  args: {}
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,m as default};
