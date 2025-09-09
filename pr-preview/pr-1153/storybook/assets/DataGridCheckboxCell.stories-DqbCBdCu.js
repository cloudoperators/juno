import{j as e}from"./iframe-BpmPjxFw.js";import{b as i,D as c,a as m}from"./DataGridCell.component-Dd2h4lJi.js";import{C as p}from"./Checkbox.component-BK1jbK3A.js";import"./Label.component-UeaOZZpd.js";import"./Icon.component-Cutc7jeU.js";import"./FormHint.component-C3KqWsp4.js";const t=({selected:a=!1,disabled:o=!1,className:l="",onChange:d,...n})=>e.jsx(i,{className:`juno-datagrid-checkbox-cell ${l}`,...n,children:e.jsx(p,{disabled:o,checked:a,onChange:d})});try{t.displayName="DataGridCheckboxCell",t.__docgenInfo={description:"",displayName:"DataGridCheckboxCell",props:{selected:{defaultValue:{value:"false"},description:"Whether the row this cell belongs to is selected",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a classname to the cell",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to change the selected state of the row",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const x={title:"WiP/DataGrid/DataGridCheckboxCell",component:t,decorators:[a=>e.jsx(c,{columns:3,children:e.jsx(m,{children:e.jsx(a,{})})})],parameters:{docs:{source:{excludeDecorators:!1}}}},r={parameters:{docs:{description:{story:"Juno DataGridCheckboxCell for use in DataGrid"}}},args:{}},s={parameters:{docs:{description:{story:"Disabled Juno DataGridCheckboxCell for use in DataGrid"}}},args:{disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCheckboxCell for use in DataGrid"
      }
    }
  },
  args: {}
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const G=["Default","Disabled"];export{r as Default,s as Disabled,G as __namedExportsOrder,x as default};
