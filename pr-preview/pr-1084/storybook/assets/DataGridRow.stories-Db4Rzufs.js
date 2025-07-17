import{j as e,r as n}from"./iframe-DAE5LCsn.js";import{a as i,D,b as o}from"./DataGridCell.component-Buwf595F.js";import{Default as p}from"./DataGridCell.stories-Cf2I0uWm.js";const m=5,g={title:"Components/DataGrid/DataGridRow",component:i,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(D,{columns:m,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},l={render:({items:r,...s})=>e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),args:{isHoverable:!1,isActive:!1,items:Array(m).fill({...p.args})},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},c={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isHoverable:!0,...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),e.jsx(i,{isHoverable:!0,...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))})]}),args:{items:Array(m).fill({...p.args})},parameters:{docs:{description:{story:"When `isHoverable` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},d={render:({items:r,...s})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isActive:!0,...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))}),e.jsx(i,{...s,children:r.map((a,t)=>n.createElement(o,{...a,key:t}))})]}),args:{items:Array(m).fill({...p.args})},parameters:{docs:{description:{story:"When `isActive` is set, the DataGridRow persists to be active."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <DataGridRow {...args}>
      {items.map((item, i) => <DataGridCell {...item} key={i} />)}
    </DataGridRow>,
  args: {
    isHoverable: false,
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <>
      <DataGridRow isHoverable {...args}>
        {items.map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
      <DataGridRow isHoverable {...args}>
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
        story: "When \`isHoverable\` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const v=["Default","HoverableRow","ActiveRow"];export{d as ActiveRow,l as Default,c as HoverableRow,v as __namedExportsOrder,g as default};
