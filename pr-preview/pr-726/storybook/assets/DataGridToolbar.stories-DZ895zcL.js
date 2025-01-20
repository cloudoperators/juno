import{j as t}from"./jsx-runtime-D6fbYt3N.js";import"./index-DysCNOs_.js";const c=`
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`,p=`
	jn-ml-auto
`,r=({search:e,className:l="",children:i=null,...d})=>t.jsxs("div",{className:`juno-datagrid-toolbar ${c} ${l}`,...d,children:[e&&t.jsx("div",{children:e}),t.jsx("div",{className:p,children:i})]});try{r.displayName="DataGridToolbar",r.__docgenInfo={description:"This is the toolbar for use with a DataGrid. This is the place where you would put buttons and other controls that affect the items in the DataGrid (e.g. triggering batch actions). Optionally a search input can be added.",displayName:"DataGridToolbar",props:{search:{defaultValue:null,description:"Pass an optional SearchInput component",name:"search",required:!1,type:{name:"Element"}},children:{defaultValue:{value:"null"},description:"Children to render in the DataGridToolbar",name:"children",required:!1,type:{name:"Element"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const b={title:"Components/DataGrid/DataGridToolbar",component:r,argTypes:{children:{control:{type:"text"}},search:{control:{type:"text"}}}},u=e=>t.jsx(r,{...e,children:t.jsx("button",{children:"Add"})}),a={render:u,parameters:{docs:{description:{story:"Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"}}},args:{}};var o,n,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"
      }
    }
  },
  args: {}
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const f=["Default"];export{a as Default,f as __namedExportsOrder,b as default};
