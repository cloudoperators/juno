import{j as e,r as n}from"./iframe-CW91KCqY.js";import{a as i,D,b as o}from"./DataGridCell.component-Blb0uDz-.js";import{Default as p}from"./DataGridCell.stories-HL3Yeczo.js";const m=5,g={title:"Components/DataGrid/DataGridRow",component:i,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(D,{columns:m,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},d={render:({items:r,...s})=>e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),args:{isSelected:!1,items:Array(m).fill({...p.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},c={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))})]}),args:{items:Array(m).fill({...p.args})},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},l={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isSelected:!0,...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))})]}),args:{items:Array(m).fill({...p.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the DataGridRow persists to be active."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <DataGridRow {...args}>
      {items.map((item, i) => <DataGridCell {...item} key={i} />)}
    </DataGridRow>,
  args: {
    isSelected: false,
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <>
      <DataGridRow isSelected {...args}>
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
        story: "When \`isSelected\` is set, the DataGridRow persists to be active."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const R=["Default","HoverableRow","ActiveRow"];export{l as ActiveRow,d as Default,c as HoverableRow,R as __namedExportsOrder,g as default};
