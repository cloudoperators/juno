import{j as e,r as l}from"./iframe-CrLkm8rI.js";import{a as o,D as p,b as d}from"./DataGridCell.component-Dqtmdwl2.js";import{Default as c}from"./DataGridCell.stories-C2kr1XuX.js";const m=5,G={title:"Components/DataGrid/DataGridRow",component:o,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(p,{columns:m,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},n={render:({items:r,...s})=>e.jsx(o,{...s,children:r.map((a,t)=>l.createElement(d,{...a,key:t}))}),args:{items:Array(m).fill({...c.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},i={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{hoverable:!0,...s,children:r.map((a,t)=>l.createElement(d,{...a,key:t}))}),e.jsx(o,{hoverable:!0,...s,children:r.map((a,t)=>l.createElement(d,{...a,key:t}))})]}),args:{items:Array(m).fill({...c.args})},parameters:{docs:{description:{story:"When `hoverable` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <>
      <DataGridRow hoverable {...args}>
        {items.map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
      <DataGridRow hoverable {...args}>
        {items.map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
    </>,
  args: {
    items: Array(columns).fill({
      ...DataGridCellStory.args
    })
  },
  parameters: {
    docs: {
      description: {
        story: "When \`hoverable\` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const y=["Default","HoverableRow"];export{n as Default,i as HoverableRow,y as __namedExportsOrder,G as default};
