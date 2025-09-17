import{j as e,r as s}from"./iframe-D8eG-f9-.js";import{a as o,D as g,b as i}from"./DataGridCell.component-Cp1d8B3h.js";import{Default as u}from"./DataGridCell.stories-svz5Ppk9.js";import{B as D}from"./Button.component-B5upzFyr.js";import"./Icon.component-D7L-xH3-.js";import"./Spinner.component-BMXhBDQm.js";const l=5,R={title:"Components/DataGrid/DataGridRow",component:o,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[t=>e.jsx(g,{columns:l,children:e.jsx(t,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},d={render:({items:t,...n})=>e.jsx(o,{...n,children:t.map((r,a)=>s.createElement(i,{...r,key:a}))}),args:{isSelected:!1,items:Array(l).fill({...u.args}),onClick:void 0},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},c={render:({items:t,...n})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...n,children:t.map((r,a)=>s.createElement(i,{...r,key:a}))}),e.jsx(o,{...n,children:t.map((r,a)=>s.createElement(i,{...r,key:a}))})]}),args:{items:Array(l).fill({...u.args})},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},m={render:({items:t,...n})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...n,children:t.map((r,a)=>s.createElement(i,{...r,key:a}))}),e.jsxs(o,{...n,onClick:()=>alert("DataGridRow Event!"),children:[e.jsx(i,{children:e.jsx(D,{label:"Trigger Juno UI `Button` Event",onClick:()=>alert("Only the `Button` event has been triggered! `data-row-stop-propagation` is NOT required.")})}),e.jsx(i,{children:e.jsx("button",{"data-row-stop-propagation":!0,onClick:()=>alert("Only the custom button event has been triggered! `data-row-stop-propagation` is required."),children:"Trigger Custom Button Event"})})]})]}),args:{items:Array(l).fill({...u.args})},parameters:{docs:{description:{story:"You can enhance the `DataGrid` by incorporating interactive elements like `Button`, `Icon`, `Select`, etc. These components are designed to manage event propagation by default, ensuring interaction events are prioritized over row events. For custom elements, apply the attribute as illustrated in the example to prevent unintended event propagation."}}}},p={render:({items:t,...n})=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isSelected:!0,...n,children:t.map((r,a)=>s.createElement(i,{...r,key:a}))}),e.jsx(o,{...n,children:t.map((r,a)=>s.createElement(i,{...r,key:a}))})]}),args:{items:Array(l).fill({...u.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the DataGridRow persists to be active."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    }),
    onClick: undefined
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: ({
    items,
    ...args
  }) => <>
      <DataGridRow {...args}>
        {items.map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
      <DataGridRow {...args} onClick={() => alert("DataGridRow Event!")}>
        <DataGridCell>
          {/* Button with a data attribute to control event propagation */}
          <Button label="Trigger Juno UI \`Button\` Event" onClick={() => alert("Only the \`Button\` event has been triggered! \`data-row-stop-propagation\` is NOT required.")} />
        </DataGridCell>
        <DataGridCell>
          <button data-row-stop-propagation onClick={() => alert("Only the custom button event has been triggered! \`data-row-stop-propagation\` is required.")}>
            Trigger Custom Button Event
          </button>
        </DataGridCell>
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
        story: "You can enhance the \`DataGrid\` by incorporating interactive elements like \`Button\`, \`Icon\`, \`Select\`, etc. These components are designed to manage event propagation by default, ensuring interaction events are prioritized over row events. For custom elements, apply the attribute as illustrated in the example to prevent unintended event propagation."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const f=["Default","HoverableRow","HoverableRowWithInteractableElements","SelectedRow"];export{d as Default,c as HoverableRow,m as HoverableRowWithInteractableElements,p as SelectedRow,f as __namedExportsOrder,R as default};
