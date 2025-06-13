import{j as t}from"./iframe-CerBUOeu.js";const r=({className:e="",children:d,...i})=>t.jsx("tfoot",{className:`juno-datagrid-foot ${e}`,...i,children:d});try{r.displayName="DataGridFoot",r.__docgenInfo={description:"",displayName:"DataGridFoot",props:{children:{defaultValue:null,description:"Children to render in the DataGridFoot",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Add a classname",name:"className",required:!1,type:{name:"string"}}}}}catch{}const l={title:"WiP/DataGrid/DataGridFoot",component:r,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[e=>t.jsx("table",{children:e()})],parameters:{docs:{source:{excludeDecorators:!1}}}},a={render:e=>t.jsx(r,{...e}),parameters:{docs:{description:{story:"Juno DataGridFoot for use in DataGrid"}}},args:{}};var o,s,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <DataGridFoot {...args}>
      {/* {items.map((item, i) => (
        <DataGridFootRow key={\`f_\${i}\`}>
          {item.items.map((cell, c) => (
            <DataGridCell {...cell} key={\`f_\${i}_\${c}\`} />
          ))}
        </DataGridFootRow>
       ))} */}
    </DataGridFoot>,
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridFoot for use in DataGrid"
      }
    }
  },
  args: {}
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const m=["Default"];export{a as Default,m as __namedExportsOrder,l as default};
