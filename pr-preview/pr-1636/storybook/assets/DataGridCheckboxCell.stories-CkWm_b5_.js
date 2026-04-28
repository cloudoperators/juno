import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./Checkbox.component-DaGghiYK.js";import{n,r,t as i}from"./DataGridCell.component-CsHgj-_l.js";import"./DataGrid-CEF_O_IU.js";import"react";var a=e(),o=({selected:e=!1,disabled:n=!1,className:r=``,onChange:o,...s})=>(0,a.jsx)(i,{className:`juno-datagrid-checkbox-cell ${r}`,...s,children:(0,a.jsx)(t,{disabled:n,checked:e,onChange:o})});try{o.displayName=`DataGridCheckboxCell`,o.__docgenInfo={description:"`DataGridCheckboxCell` integrates a checkbox within a `DataGrid` cell, ideal for selection-based interactions.\nIt manages the selected state and supports custom behaviors upon state changes.",displayName:`DataGridCheckboxCell`,props:{selected:{defaultValue:{value:`false`},description:`Indicates selected state of the associated row.`,name:`selected`,required:!1,type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},description:`Determines if the checkbox is disabled.`,name:`disabled`,required:!1,type:{name:`boolean`}},className:{defaultValue:{value:``},description:`Additional class names for styling.`,name:`className`,required:!1,type:{name:`string`}},onChange:{defaultValue:null,description:`Event handler for changes in the checkbox's state.`,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLInputElement>`}}}}}catch{}var s={title:`WiP/DataGrid/DataGridCheckboxCell`,component:o,decorators:[e=>(0,a.jsx)(r,{columns:3,children:(0,a.jsx)(n,{children:(0,a.jsx)(e,{})})})],parameters:{docs:{source:{excludeDecorators:!1}}}},c={parameters:{docs:{description:{story:`Juno DataGridCheckboxCell for use in DataGrid`}}},args:{}},l={parameters:{docs:{description:{story:`Disabled Juno DataGridCheckboxCell for use in DataGrid`}}},args:{disabled:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCheckboxCell for use in DataGrid"
      }
    }
  },
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disabled Juno DataGridCheckboxCell for use in DataGrid"
      }
    }
  },
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`Disabled`];export{c as Default,l as Disabled,u as __namedExportsOrder,s as default};