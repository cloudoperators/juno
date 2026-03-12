import{j as e}from"./iframe-BkpLAFta.js";import{P as n}from"./Pill.component-N9Quk3wg.js";import{S as a}from"./Stack.component-DzmedGPt.js";import{S as p}from"./SearchInput.component-BXac-ClL.js";import{C as b,a as i}from"./ComboBoxOption.component-CsMVEkLA.js";import{B as d}from"./Button.component-CBvcAmqJ.js";import{N as s}from"./NativeSelectOption.component-RULUV_b1.js";import{N as y}from"./NativeSelect.component-RYOJsUVg.js";import{I as x}from"./InputGroup.component-uaU3j3iG.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component--Fn1JS_Z.js";import"./floating-ui.react-BNGlqUmN.js";import"./Label.component-pxCYn6Fn.js";import"./FormHint.component-Ccp08QTE.js";import"./Spinner.component-CqxWK4-Q.js";import"./PortalProvider.component-WfOiOeiV.js";import"./element-movement-bVyUs_B5.js";import"./frozen--dUL_bm4.js";import"./use-tree-walker-BBnc0QNy.js";const f=`
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`,r=({className:t="",children:u,alignRight:c=!0,...m})=>{const h=c?"jn:ml-auto":"",g=c?"jn:flex jn:items-center":"";return e.jsx("div",{className:`juno-datagrid-toolbar ${f} ${g} ${t}`,...m,children:e.jsx("div",{className:h,children:u})})};try{r.displayName="DataGridToolbar",r.__docgenInfo={description:"`DataGridToolbar` provides an action bar for a `DataGrid`, designed to hold controls like buttons and search inputs\nfor performing group operations and interfacing with the grid content.",displayName:"DataGridToolbar",props:{children:{defaultValue:null,description:"Elements or components to render within the DataGridToolbar.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Custom CSS class names for styling the toolbar.",name:"className",required:!1,type:{name:"string"}},alignRight:{defaultValue:{value:"true"},description:"Determines whether the children are automatically aligned to the right side within the toolbar.\nWhen true, applies `ml-auto` to the children wrapper, pushing content right.\nWhen false, no automatic alignment is applied, allowing for custom layouts.",name:"alignRight",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Components/DataGrid/DataGridToolbar",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},o={render:t=>e.jsx(r,{...t,children:e.jsxs(a,{gap:"4",children:[e.jsx(p,{placeholder:"Search items..."}),e.jsx(d,{label:"Create"})]})}),parameters:{docs:{description:{story:"Demonstrates a simple toolbar layout with children right-aligned by default. Use ButtonRow for multiple buttons."}}}},l={render:t=>e.jsx(r,{...t,children:e.jsxs(a,{direction:"horizontal",distribution:"between",children:[e.jsxs(a,{direction:"vertical",gap:"4",children:[e.jsxs(a,{alignment:"center",gap:"4",children:[e.jsxs(x,{children:[e.jsxs(y,{name:"Filter",value:"category",children:[e.jsx(s,{value:"category",label:"Category"}),e.jsx(s,{value:"status",label:"Status"}),e.jsx(s,{value:"priority",label:"Priority"})]}),e.jsxs(b,{children:[e.jsx(i,{value:"electronics"}),e.jsx(i,{value:"clothing"}),e.jsx(i,{value:"furniture"})]})]}),e.jsx(d,{label:"Clear all",variant:"subdued"})]}),e.jsxs(a,{gap:"2",wrap:!0,children:[e.jsx(n,{pillKey:"category",pillValue:"electronics",closeable:!0}),e.jsx(n,{pillKey:"status",pillValue:"active",closeable:!0}),e.jsx(n,{pillKey:"priority",pillValue:"high",closeable:!0})]})]}),e.jsx(p,{placeholder:"Search items..."})]})}),args:{alignRight:!1},parameters:{docs:{description:{story:"Demonstrates a complex toolbar layout with custom styling - children aligned left and search aligned right."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: DataGridToolbarProps) => <DataGridToolbar {...args}>
      <Stack gap="4">
        <SearchInput placeholder="Search items..." />
        <Button label="Create" />
      </Stack>
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
              <NativeSelect name="Filter" value="category">
                <NativeSelectOption value="category" label="Category" />
                <NativeSelectOption value="status" label="Status" />
                <NativeSelectOption value="priority" label="Priority" />
              </NativeSelect>
              <ComboBox>
                <ComboBoxOption value="electronics" />
                <ComboBoxOption value="clothing" />
                <ComboBoxOption value="furniture" />
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
}`,...l.parameters?.docs?.source}}};const W=["Default","ComplexCustomLayout"];export{l as ComplexCustomLayout,o as Default,W as __namedExportsOrder,E as default};
