import{j as e}from"./iframe-CZ_0-6h8.js";import{P as t}from"./Pill.component-C8pt-8Yf.js";import{S as l}from"./Stack.component-BgQYU80t.js";import{S as p}from"./SearchInput.component-DXD4t06t.js";import{C as u,a as o}from"./ComboBoxOption.component-DRDkvmc0.js";import{B as d}from"./Button.component-DSn7pqHP.js";import{N as r}from"./NativeSelectOption.component-B7eUmSPh.js";import{N as m}from"./NativeSelect.component-B9FOpmTR.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-CsTIo8E0.js";import"./floating-ui.react-Cgk2Qe_n.js";import"./Label.component-BjmpuV0U.js";import"./FormHint.component-DdCGZdVM.js";import"./Spinner.component-B3rADEvM.js";import"./PortalProvider.component-aW-f3Hin.js";import"./element-movement-BQSA-OHn.js";import"./frozen-C3TWslBn.js";import"./use-tree-walker--Xmkul_H.js";const v=`
	jn:flex
	jn:items-center
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`,n=({search:a,className:h="",children:b,alignRight:g=!0,...x})=>{const y=g?"jn:ml-auto":"";return e.jsxs("div",{className:`juno-datagrid-toolbar ${v} ${h}`,...x,children:[a&&e.jsx("div",{children:a}),e.jsx("div",{className:y,children:b})]})};try{n.displayName="DataGridToolbar",n.__docgenInfo={description:"`DataGridToolbar` provides an action bar for a `DataGrid`, designed to hold controls like buttons and search inputs\nfor performing group operations and interfacing with the grid content.",displayName:"DataGridToolbar",props:{search:{defaultValue:null,description:"An optional `SearchInput` component for inclusion in the toolbar.",name:"search",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}},children:{defaultValue:null,description:"Elements or components to render within the DataGridToolbar.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom CSS class names for styling the toolbar.",name:"className",required:!1,type:{name:"string"}},alignRight:{defaultValue:{value:"true"},description:"Determines whether the children are automatically aligned to the right side within the toolbar.\nWhen true, applies `ml-auto` to the children wrapper, pushing content right.\nWhen false, no automatic alignment is applied, allowing for custom layouts.",name:"alignRight",required:!1,type:{name:"boolean"}}}}}catch{}const L={title:"Components/DataGrid/DataGridToolbar",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},search:{control:!1,table:{type:{summary:"ReactElement"}}}}},i={render:a=>e.jsx(n,{...a,children:e.jsx("button",{children:"Add"})}),parameters:{docs:{description:{story:"Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons"}}},args:{}},s={render:a=>e.jsx(n,{...a,children:e.jsxs(l,{direction:"vertical",gap:"4",className:"w-full",children:[e.jsxs(l,{alignment:"center",gap:"8",children:[e.jsxs(m,{children:[e.jsx(r,{value:"o-1",label:"Option 1"},0),",",e.jsx(r,{value:"o-2",label:"Option 2"},1),",",e.jsx(r,{value:"o-3",label:"Option 3"},2),",",e.jsxs(u,{children:[e.jsx(o,{value:"electronics"}),e.jsx(o,{value:"clothing"}),e.jsx(o,{value:"furniture"})]})]}),e.jsx(d,{label:"Clear all",variant:"subdued"}),e.jsx(p,{placeholder:"Search items...",className:"ml-auto"})]}),e.jsxs(l,{gap:"2",wrap:!0,children:[e.jsx(t,{pillKey:"category",pillValue:"electronics",closeable:!0}),e.jsx(t,{pillKey:"status",pillValue:"active",closeable:!0}),e.jsx(t,{pillKey:"priority",pillValue:"high",closeable:!0})]})]})}),parameters:{docs:{description:{story:"Demonstrates a complex toolbar layout with elements aligned right, by default."}}}},c={render:a=>e.jsx(n,{...a,children:e.jsxs(l,{direction:"vertical",gap:"4",className:"w-full",children:[e.jsxs(l,{alignment:"center",gap:"8",children:[e.jsxs(m,{children:[e.jsx(r,{value:"o-1",label:"Option 1"},0),",",e.jsx(r,{value:"o-2",label:"Option 2"},1),",",e.jsx(r,{value:"o-3",label:"Option 3"},2),",",e.jsxs(u,{children:[e.jsx(o,{value:"electronics"}),e.jsx(o,{value:"clothing"}),e.jsx(o,{value:"furniture"})]})]}),e.jsx(d,{label:"Clear all",variant:"subdued"}),e.jsx(p,{placeholder:"Search items...",className:"ml-auto"})]}),e.jsxs(l,{gap:"2",wrap:!0,children:[e.jsx(t,{pillKey:"category",pillValue:"electronics",closeable:!0}),e.jsx(t,{pillKey:"status",pillValue:"active",closeable:!0}),e.jsx(t,{pillKey:"priority",pillValue:"high",closeable:!0})]})]})}),args:{alignRight:!1},parameters:{docs:{description:{story:"Demonstrates a complex toolbar layout with elements aligned left or center and search input on the right."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: DataGridToolbarProps) => <DataGridToolbar {...args}>
      <Stack direction="vertical" gap="4" className="w-full">
        <Stack alignment="center" gap="8">
          <NativeSelect>
            <NativeSelectOption key={0} value="o-1" label="Option 1" />,
            <NativeSelectOption key={1} value="o-2" label="Option 2" />,
            <NativeSelectOption key={2} value="o-3" label="Option 3" />,
            <ComboBox>
              <ComboBoxOption value="electronics" />
              <ComboBoxOption value="clothing" />
              <ComboBoxOption value="furniture" />
            </ComboBox>
          </NativeSelect>
          <Button label="Clear all" variant="subdued" />
          <SearchInput placeholder="Search items..." className="ml-auto" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="category" pillValue="electronics" closeable />
          <Pill pillKey="status" pillValue="active" closeable />
          <Pill pillKey="priority" pillValue="high" closeable />
        </Stack>
      </Stack>
    </DataGridToolbar>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a complex toolbar layout with elements aligned right, by default."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: DataGridToolbarProps) => <DataGridToolbar {...args}>
      <Stack direction="vertical" gap="4" className="w-full">
        <Stack alignment="center" gap="8">
          <NativeSelect>
            <NativeSelectOption key={0} value="o-1" label="Option 1" />,
            <NativeSelectOption key={1} value="o-2" label="Option 2" />,
            <NativeSelectOption key={2} value="o-3" label="Option 3" />,
            <ComboBox>
              <ComboBoxOption value="electronics" />
              <ComboBoxOption value="clothing" />
              <ComboBoxOption value="furniture" />
            </ComboBox>
          </NativeSelect>
          <Button label="Clear all" variant="subdued" />
          <SearchInput placeholder="Search items..." className="ml-auto" />
        </Stack>
        <Stack gap="2" wrap>
          <Pill pillKey="category" pillValue="electronics" closeable />
          <Pill pillKey="status" pillValue="active" closeable />
          <Pill pillKey="priority" pillValue="high" closeable />
        </Stack>
      </Stack>
    </DataGridToolbar>,
  args: {
    alignRight: false
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a complex toolbar layout with elements aligned left or center and search input on the right."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const A=["Default","ComplexLayout","ComplexLayoutAlignLeft"];export{s as ComplexLayout,c as ComplexLayoutAlignLeft,i as Default,A as __namedExportsOrder,L as default};
