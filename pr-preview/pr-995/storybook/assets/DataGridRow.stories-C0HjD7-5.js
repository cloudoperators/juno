import{j as e,r as c}from"./iframe-CtGHvtSK.js";import{a as n,D as p,b as u}from"./DataGridCell.component-DnlWL8gF.js";import{Default as D}from"./DataGridCell.stories-DtjH5-_p.js";const i=5,x={title:"Components/DataGrid/DataGridRow",component:n,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[a=>e.jsx(p,{columns:i,children:e.jsx(a,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},r={render:({items:a,...d})=>e.jsx(n,{...d,children:a.map((m,l)=>c.createElement(u,{...m,key:l}))}),args:{items:Array(i).fill({...D.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}};var t,s,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
