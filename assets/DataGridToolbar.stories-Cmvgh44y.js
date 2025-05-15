import{j as a}from"./jsx-runtime-BP6H2k8O.js";import"./index-DysCNOs_.js";const c=`
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`,p=`
	jn-ml-auto
`,r=({search:e,className:l="",children:i,...d})=>a.jsxs("div",{className:`juno-datagrid-toolbar ${c} ${l}`,...d,children:[e&&a.jsx("div",{children:e}),a.jsx("div",{className:p,children:i})]});try{r.displayName="DataGridToolbar",r.__docgenInfo={description:"This is the toolbar for use with a DataGrid. This is the place where you would put buttons and other controls that affect the items in the DataGrid (e.g. triggering batch actions). Optionally a search input can be added.",displayName:"DataGridToolbar",props:{search:{defaultValue:null,description:"Pass an optional SearchInput component",name:"search",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Children to render in the DataGridToolbar",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const b={title:"Components/DataGrid/DataGridToolbar",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},search:{control:!1,table:{type:{summary:"ReactElement"}}}}},m=e=>a.jsx(r,{...e,children:a.jsx("button",{children:"Add"})}),t={render:m,parameters:{docs:{description:{story:"Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"}}},args:{}};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"
      }
    }
  },
  args: {}
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,b as default};
