import{j as e}from"./iframe-PzjH_KfA.js";import{b as l,D as c,a as p}from"./DataGridCell.component-Bm6yDTeV.js";import{C as m}from"./Checkbox.component-BzNN0E5w.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.component-CZlYsnpd.js";import"./Icon.component-BDRCRdNq.js";import"./FormHint.component-5tDpSaR5.js";const t=({selected:a=!1,disabled:o=!1,className:n="",onChange:i,...d})=>e.jsx(l,{className:`juno-datagrid-checkbox-cell ${n}`,...d,children:e.jsx(m,{disabled:o,checked:a,onChange:i})});try{t.displayName="DataGridCheckboxCell",t.__docgenInfo={description:"`DataGridCheckboxCell` integrates a checkbox within a `DataGrid` cell, ideal for selection-based interactions.\nIt manages the selected state and supports custom behaviors upon state changes.",displayName:"DataGridCheckboxCell",props:{selected:{defaultValue:{value:"false"},description:"Indicates selected state of the associated row.",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Determines if the checkbox is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional class names for styling.",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Event handler for changes in the checkbox's state.",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const g={title:"WiP/DataGrid/DataGridCheckboxCell",component:t,decorators:[a=>e.jsx(c,{columns:3,children:e.jsx(p,{children:e.jsx(a,{})})})],parameters:{docs:{source:{excludeDecorators:!1}}}},s={parameters:{docs:{description:{story:"Juno DataGridCheckboxCell for use in DataGrid"}}},args:{}},r={parameters:{docs:{description:{story:"Disabled Juno DataGridCheckboxCell for use in DataGrid"}}},args:{disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCheckboxCell for use in DataGrid"
      }
    }
  },
  args: {}
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const G=["Default","Disabled"];export{s as Default,r as Disabled,G as __namedExportsOrder,g as default};
