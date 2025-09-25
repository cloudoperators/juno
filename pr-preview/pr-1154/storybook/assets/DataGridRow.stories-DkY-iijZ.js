import{j as e,r as d}from"./iframe-C6pN-Bcm.js";import{a as t,D as m,b as l}from"./DataGridCell.component-DxFSc0Iq.js";import{Default as c}from"./DataGridCell.stories-hTKUCovn.js";import"./preload-helper-D9Z9MdNV.js";const s=5,G={title:"Components/DataGrid/DataGridRow",component:t,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[a=>e.jsx(m,{columns:s,children:e.jsx(a,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},r={render:({items:a,...o})=>e.jsx(t,{...o,children:a.map((n,i)=>d.createElement(l,{...n,key:i}))}),args:{items:Array(s).fill({...c.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const y=["Default"];export{r as Default,y as __namedExportsOrder,G as default};
