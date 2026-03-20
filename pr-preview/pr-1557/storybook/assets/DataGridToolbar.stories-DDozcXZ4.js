import{j as e}from"./iframe-Bf55jlx8.js";import{P as n}from"./Pill.component-1Mo1DN-8.js";import{S as r}from"./Stack.component-CWRqpqEx.js";import{S as g}from"./SearchInput.component-WzX0fUMe.js";import{C as b,a as i}from"./ComboBoxOption.component-Dl_NWa5r.js";import{B as p}from"./Button.component-BvQvQLK_.js";import{N as s}from"./NativeSelectOption.component-BQCT_XWJ.js";import{N as y}from"./NativeSelect.component-CsxA32M9.js";import{I as x}from"./InputGroup.component-zuEFuKh3.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-DqvoPKug.js";import"./floating-ui.react-DbpOOlxZ.js";import"./Label.component-BweHp1W_.js";import"./FormHint.component-B1Clh9jU.js";import"./Spinner.component-30Rwaf0r.js";import"./PortalProvider.component-sj8TovK4.js";import"./element-movement-fC-fiXx_.js";import"./frozen-BktCsGto.js";import"./use-tree-walker-Bedt7sel.js";const f=`
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`,a=({className:t="",children:u,alignRight:c=!0,...d})=>{const m=c?"jn:ml-auto":"",h=c?"jn:flex jn:items-center":"";return e.jsx("div",{className:`juno-datagrid-toolbar ${f} ${h} ${t}`,...d,children:e.jsx("div",{className:m,children:u})})};try{a.displayName="DataGridToolbar",a.__docgenInfo={description:"`DataGridToolbar` provides an action bar for a `DataGrid`, designed to hold controls like buttons and search inputs\nfor performing group operations and interfacing with the grid content.",displayName:"DataGridToolbar",props:{children:{defaultValue:null,description:"Elements or components to render within the DataGridToolbar.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom CSS class names for styling the toolbar.",name:"className",required:!1,type:{name:"string"}},alignRight:{defaultValue:{value:"true"},description:"Determines whether the children are automatically aligned to the right side within the toolbar.\nWhen true, applies `ml-auto` to the children wrapper, pushing content right.\nWhen false, no automatic alignment is applied, allowing for custom layouts.",name:"alignRight",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Components/DataGrid/DataGridToolbar",component:a,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},o={render:t=>e.jsx(a,{...t,children:e.jsx(p,{label:"Create"})}),parameters:{docs:{description:{story:"Demonstrates a simple toolbar layout with children right-aligned by default. Use ButtonRow for multiple buttons."}}}},l={render:t=>e.jsx(a,{...t,children:e.jsxs(r,{direction:"horizontal",distribution:"between",children:[e.jsxs(r,{direction:"vertical",gap:"4",children:[e.jsxs(r,{alignment:"center",gap:"4",children:[e.jsxs(x,{children:[e.jsxs(y,{name:"Filter",value:"category",wrapperClassName:"jn:w-full",children:[e.jsx(s,{value:"category",label:"Category"}),e.jsx(s,{value:"status",label:"Status"}),e.jsx(s,{value:"priority",label:"Priority"})]}),e.jsxs(b,{children:[e.jsx(i,{value:"Electronics"}),e.jsx(i,{value:"Clothing"}),e.jsx(i,{value:"Furniture"})]})]}),e.jsx(p,{label:"Clear all",variant:"subdued"})]}),e.jsxs(r,{gap:"2",wrap:!0,children:[e.jsx(n,{pillKey:"category",pillValue:"electronics",closeable:!0}),e.jsx(n,{pillKey:"status",pillValue:"active",closeable:!0}),e.jsx(n,{pillKey:"priority",pillValue:"high",closeable:!0})]})]}),e.jsx(g,{placeholder:"Search items..."})]})}),args:{alignRight:!1},parameters:{docs:{description:{story:"Demonstrates a complex toolbar layout with custom styling - children aligned left and search aligned right."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: DataGridToolbarProps) => <DataGridToolbar {...args}>
      <Button label="Create" />
    </DataGridToolbar>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a simple toolbar layout with children right-aligned by default. Use ButtonRow for multiple buttons."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: DataGridToolbarProps) => <DataGridToolbar {...args}>
      <Stack direction="horizontal" distribution="between">
        <Stack direction="vertical" gap="4">
          <Stack alignment="center" gap="4">
            <InputGroup>
              <NativeSelect name="Filter" value="category" wrapperClassName="jn:w-full">
                <NativeSelectOption value="category" label="Category" />
                <NativeSelectOption value="status" label="Status" />
                <NativeSelectOption value="priority" label="Priority" />
              </NativeSelect>
              <ComboBox>
                <ComboBoxOption value="Electronics" />
                <ComboBoxOption value="Clothing" />
                <ComboBoxOption value="Furniture" />
              </ComboBox>
            </InputGroup>
            <Button label="Clear all" variant="subdued" />
          </Stack>
          <Stack gap="2" wrap>
            <Pill pillKey="category" pillValue="electronics" closeable />
            <Pill pillKey="status" pillValue="active" closeable />
            <Pill pillKey="priority" pillValue="high" closeable />
          </Stack>
        </Stack>
        <SearchInput placeholder="Search items..." />
      </Stack>
    </DataGridToolbar>,
  args: {
    alignRight: false
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a complex toolbar layout with custom styling - children aligned left and search aligned right."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const q=["Default","ComplexCustomLayout"];export{l as ComplexCustomLayout,o as Default,q as __namedExportsOrder,F as default};
