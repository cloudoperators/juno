import{j as e,r as n}from"./iframe-CLN1yHUE.js";import{a as i,D,b as o}from"./DataGridCell.component-U-VNYrYp.js";import{Default as p}from"./DataGridCell.stories-Db_s0DhN.js";const l=5,g={title:"Components/DataGrid/DataGridRow",component:i,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(D,{columns:l,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},c={render:({items:r,...s})=>e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),args:{isActive:!1,items:Array(l).fill({...p.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},d={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))})]}),args:{items:Array(l).fill({...p.args})},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},m={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isActive:!0,...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))})]}),args:{items:Array(l).fill({...p.args})},parameters:{docs:{description:{story:"When `isActive` is set, the DataGridRow persists to be active."}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <DataGridRow {...args}>
      {items.map((item, i) => <DataGridCell {...item} key={i} />)}
    </DataGridRow>,
  args: {
    isActive: false,
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <>
      <DataGridRow {...args}>
        {items.map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
      <DataGridRow {...args}>
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
        story: "When \`onClick\` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <>
      <DataGridRow isActive {...args}>
        {items.map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
      <DataGridRow {...args}>
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
        story: "When \`isActive\` is set, the DataGridRow persists to be active."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const R=["Default","HoverableRow","ActiveRow"];export{m as ActiveRow,c as Default,d as HoverableRow,R as __namedExportsOrder,g as default};
