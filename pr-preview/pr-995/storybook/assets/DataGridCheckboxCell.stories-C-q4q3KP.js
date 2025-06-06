import{j as a}from"./iframe-BFEr-twC.js";import{b as D,D as b,a as C}from"./DataGridCell.component-CLu3e9R2.js";import{C as x}from"./Checkbox.component-D_xacxoo.js";import"./Label.component-BFgdxP8H.js";import"./Icon.component-BHttO1Sx.js";import"./FormHint.component-BLAjDV4S.js";const t=({selected:e=!1,disabled:m=!1,className:u="",onChange:h,...f})=>a.jsx(D,{className:`juno-datagrid-checkbox-cell ${u}`,...f,children:a.jsx(x,{disabled:m,checked:e,onChange:h})});try{t.displayName="DataGridCheckboxCell",t.__docgenInfo={description:"",displayName:"DataGridCheckboxCell",props:{selected:{defaultValue:{value:"false"},description:"Whether the row this cell belongs to is selected",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a classname to the cell",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to change the selected state of the row",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const N={title:"WiP/DataGrid/DataGridCheckboxCell",component:t,decorators:[e=>a.jsx(b,{columns:3,children:a.jsx(C,{children:e()})})],parameters:{docs:{source:{excludeDecorators:!1}}}},p=e=>a.jsx(t,{...e}),r={render:p,parameters:{docs:{description:{story:"Juno DataGridCheckboxCell for use in DataGrid"}}},args:{}},s={render:p,parameters:{docs:{description:{story:"Disabled Juno DataGridCheckboxCell for use in DataGrid"}}},args:{disabled:!0}};var o,n,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const q=["Default","Disabled"];export{r as Default,s as Disabled,q as __namedExportsOrder,N as default};
