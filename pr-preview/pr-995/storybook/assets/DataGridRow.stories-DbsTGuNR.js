import{j as e,r as l}from"./iframe-D8YqRCUk.js";import{a as n,D as p,b as D}from"./DataGridCell.component-D6CfYy0-.js";import{Default as u}from"./DataGridCell.stories-BZuLNjHc.js";const i=5,x={title:"Components/DataGrid/DataGridRow",component:n,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[a=>e.jsx(p,{columns:i,children:e.jsx(a,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},r={render:({items:a,...d})=>e.jsx(n,{...d,children:a.map((m,c)=>l.createElement(D,{...m,key:c}))}),args:{items:Array(i).fill({...u.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <DataGridRow {...args}>
      {items.map((item, i) => <DataGridCell {...item} key={i} />)}
    </DataGridRow>,
  args: {
    items: Array(columns).fill({
      ...DataGridCellStory.args
    })
  },
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridRow for use in DataGrid"
      }
    }
  }
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const g=["Default"];export{r as Default,g as __namedExportsOrder,x as default};
