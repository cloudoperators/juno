import{j as e}from"./iframe-CI61WwEo.js";import{b as f,D,a as b}from"./DataGridCell.component-C7dcmK6z.js";import{C}from"./Checkbox.component-tCYu5Jli.js";import"./Label.component-BTpXnKDh.js";import"./Icon.component-Tv7K8ju9.js";import"./FormHint.component-BPmu9U8I.js";const t=({selected:a=!1,disabled:m=!1,className:p="",onChange:u,...h})=>e.jsx(f,{className:`juno-datagrid-checkbox-cell ${p}`,...h,children:e.jsx(C,{disabled:m,checked:a,onChange:u})});try{t.displayName="DataGridCheckboxCell",t.__docgenInfo={description:"",displayName:"DataGridCheckboxCell",props:{selected:{defaultValue:{value:"false"},description:"Whether the row this cell belongs to is selected",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Add a classname to the cell",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Handler to change the selected state of the row",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const j={title:"WiP/DataGrid/DataGridCheckboxCell",component:t,decorators:[a=>e.jsx(D,{columns:3,children:e.jsx(b,{children:e.jsx(a,{})})})],parameters:{docs:{source:{excludeDecorators:!1}}}},r={parameters:{docs:{description:{story:"Juno DataGridCheckboxCell for use in DataGrid"}}},args:{}},s={parameters:{docs:{description:{story:"Disabled Juno DataGridCheckboxCell for use in DataGrid"}}},args:{disabled:!0}};var o,l,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCheckboxCell for use in DataGrid"
      }
    }
  },
  args: {}
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var n,i,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const N=["Default","Disabled"];export{r as Default,s as Disabled,N as __namedExportsOrder,j as default};
