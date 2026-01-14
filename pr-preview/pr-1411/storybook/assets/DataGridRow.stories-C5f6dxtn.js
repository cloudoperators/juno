import{j as e,r as s}from"./iframe-8I9Te1Eg.js";import{a as i,D as G,b as n}from"./DataGridCell.component-CyqZrDPj.js";import{Default as u}from"./DataGridCell.stories-BYrjn_Ix.js";import{B as h}from"./Button.component-N2RhI9O-.js";import{D as l}from"./DataGridHeadCell.component-CuwACUTY.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-TvLrj7K9.js";import"./Spinner.component-DqSKDku-.js";const p=5,f={title:"Components/DataGrid/DataGridRow",component:i,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(G,{columns:p,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},d={render:({items:r,...t})=>e.jsx(i,{...t,children:r.map((a,o)=>s.createElement(n,{...a,key:o}))}),args:{isSelected:!1,items:Array(p).fill({...u.args}),onClick:void 0},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},c={render:r=>e.jsxs(G,{columns:3,children:[e.jsxs(i,{children:[e.jsx(l,{children:"ID"}),e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Status"})]}),Array.from({length:4},(t,a)=>s.createElement(i,{...r,key:`row_${a}`,onClick:()=>alert(`Row ${a+1} clicked (HoverableRow)`)},e.jsx(n,{children:`ID-${a+1}`},`cell_id_${a}`),e.jsx(n,{children:`Name-${a+1}`},`cell_name_${a}`),e.jsx(n,{children:`Status-${a+1}`},`cell_status_${a}`)))]}),args:{items:Array.from({length:3},(r,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."}}}},m={render:r=>e.jsxs(G,{columns:4,children:[e.jsxs(i,{children:[e.jsx(l,{children:"ID"}),e.jsx(l,{children:"Name"}),e.jsx(l,{children:"Status"}),e.jsx(l,{children:"Action"})]}),Array.from({length:4},(t,a)=>s.createElement(i,{...r,key:`row_${a}`,onClick:()=>alert(`DataGridRow Event for Row ${a+1}!`)},e.jsx(n,{children:`ID-${a+1}`},`cell_id_${a}`),e.jsx(n,{children:`Name-${a+1}`},`cell_name_${a}`),e.jsx(n,{children:`Status-${a+1}`},`cell_status_${a}`),e.jsx(n,{children:a===0?e.jsx(h,{label:"Trigger button event only",onClick:o=>{o.stopPropagation(),alert("Button clicked in Row 1")}}):"None"},`cell_button_${a}`)))]}),args:{items:Array.from({length:3},(r,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},D={render:({items:r,...t})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isSelected:!0,...t,children:r.map((a,o)=>s.createElement(n,{...a,key:o}))}),e.jsx(i,{...t,children:r.map((a,o)=>s.createElement(n,{...a,key:o}))})]}),args:{items:Array(p).fill({...u.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={3}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={4}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."\n      }\n    }\n  }\n}',...m.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const k=["Default","HoverableRow","HoverableRowWithInteractableElements","SelectedRow"];export{d as Default,c as HoverableRow,m as HoverableRowWithInteractableElements,D as SelectedRow,k as __namedExportsOrder,f as default};
