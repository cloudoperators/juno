import{j as e,r as o}from"./iframe-_yBfUwAN.js";import{a as s,D as u,b as i}from"./DataGridCell.component-Jpl-E60-.js";import{Default as g}from"./DataGridCell.stories-hfqi5zbV.js";import{B as D}from"./Button.component-BQ3YPx6Z.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-CVW86RNb.js";import"./Spinner.component-CjL_7J5Q.js";const l=5,b={title:"Components/DataGrid/DataGridRow",component:s,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(u,{columns:l,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},d={render:({items:r,...t})=>e.jsx(s,{...t,children:r.map((a,n)=>o.createElement(i,{...a,key:n}))}),args:{isSelected:!1,items:Array(l).fill({...g.args}),onClick:void 0},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},c={render:({items:r,...t})=>e.jsxs(e.Fragment,{children:[e.jsx(s,{...t,children:r.map((a,n)=>o.createElement(i,{...a,key:n}))}),e.jsx(s,{...t,children:r.map((a,n)=>o.createElement(i,{...a,key:n}))})]}),args:{items:Array(l).fill({...g.args})},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},m={render:({...r})=>e.jsx(e.Fragment,{children:e.jsx(s,{...r,onClick:()=>alert("DataGridRow Event!"),children:e.jsx(i,{children:e.jsx(D,{label:"Trigger button event only",onClick:t=>{t.stopPropagation(),alert("Only the `Button` event has been triggered!")}})})})}),args:{items:Array(l).fill({...g.args})},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},p={render:({items:r,...t})=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isSelected:!0,...t,children:r.map((a,n)=>o.createElement(i,{...a,key:n}))}),e.jsx(s,{...t,children:r.map((a,n)=>o.createElement(i,{...a,key:n}))})]}),args:{items:Array(l).fill({...g.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    ...args
  }) => <>
      <DataGridRow {...args} onClick={() => alert("DataGridRow Event!")}>
        <DataGridCell>
          <Button label="Trigger button event only" onClick={e => {
          e.stopPropagation();
          alert("Only the \`Button\` event has been triggered!");
        }} />
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
        story: "You can enhance \`DataGridRow\` by incorporating interactive elements such as \`Button\`. Remember to add \`event.stopPropogation()\` to the event handler of the interactive element."
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
        story: "When \`isSelected\` is set, the entire \`DataGridRow\` persists to be active."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const x=["Default","HoverableRow","HoverableRowWithInteractableElements","SelectedRow"];export{d as Default,c as HoverableRow,m as HoverableRowWithInteractableElements,p as SelectedRow,x as __namedExportsOrder,b as default};
