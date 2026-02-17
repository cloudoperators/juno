import{j as a}from"./iframe-C3o_YF3Q.js";import"./preload-helper-PPVm8Dsz.js";const l=`
	jn:flex
	jn:items-center
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`,i=`
	jn:ml-auto
`,t=({search:e,className:o="",children:n,...s})=>a.jsxs("div",{className:`juno-datagrid-toolbar ${l} ${o}`,...s,children:[e&&a.jsx("div",{children:e}),a.jsx("div",{className:i,children:n})]});try{t.displayName="DataGridToolbar",t.__docgenInfo={description:"`DataGridToolbar` provides an action bar for a `DataGrid`, designed to hold controls like buttons and search inputs\nfor performing group operations and interfacing with the grid content.",displayName:"DataGridToolbar",props:{search:{defaultValue:null,description:"An optional `SearchInput` component for inclusion in the toolbar.",name:"search",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Elements or components to render within the DataGridToolbar.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom CSS class names for styling the toolbar.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const p={title:"Components/DataGrid/DataGridToolbar",component:t,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},search:{control:!1,table:{type:{summary:"ReactElement"}}}}},r={render:e=>a.jsx(t,{...e,children:a.jsx("button",{children:"Add"})}),parameters:{docs:{description:{story:"Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"}}},args:{}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const m=["Default"];export{r as Default,m as __namedExportsOrder,p as default};
