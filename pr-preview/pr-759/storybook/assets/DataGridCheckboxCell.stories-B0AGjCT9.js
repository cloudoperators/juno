import{j as a}from"./jsx-runtime-D6fbYt3N.js";import{b as D,D as b,a as C}from"./DataGridCell.component-BMPKFT8P.js";import{C as x}from"./Checkbox.component-q8m9f_0T.js";import"./index-DysCNOs_.js";import"./Label.component-B3thB2lY.js";import"./Icon.component-BrOSObIN.js";import"./widgets-BR6-ubtP.js";import"./FormHint.component-Bac6eIcI.js";const t=({selected:e=!1,disabled:m=!1,className:u="",onChange:h,...f})=>a.jsx(D,{className:`juno-datagrid-checkbox-cell ${u}`,...f,children:a.jsx(x,{disabled:m,checked:e,onChange:h})});try{t.displayName="DataGridCheckboxCell",t.__docgenInfo={description:"",displayName:"DataGridCheckboxCell",props:{selected:{defaultValue:{value:"false"},description:"Whether the row this cell belongs to is selected",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a classname to the cell",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to change the selected state of the row",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const v={title:"WiP/DataGrid/DataGridCheckboxCell",component:t,decorators:[e=>a.jsx(b,{columns:3,children:a.jsx(C,{children:e()})})],parameters:{docs:{source:{excludeDecorators:!1}}}},p=e=>a.jsx(t,{...e}),r={render:p,parameters:{docs:{description:{story:"Juno DataGridCheckboxCell for use in DataGrid"}}},args:{}},s={render:p,parameters:{docs:{description:{story:"Disabled Juno DataGridCheckboxCell for use in DataGrid"}}},args:{disabled:!0}};var o,n,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCheckboxCell for use in DataGrid"
      }
    }
  },
  args: {}
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,i,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
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
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const E=["Default","Disabled"];export{r as Default,s as Disabled,E as __namedExportsOrder,v as default};
