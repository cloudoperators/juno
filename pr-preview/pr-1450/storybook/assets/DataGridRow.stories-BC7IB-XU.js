import{j as e,r as s}from"./iframe-BHJLCdtg.js";import{a as i,D,b as n}from"./DataGridCell.component-Bh7PiTwa.js";import{Default as u}from"./DataGridCell.stories-F_eQy3cx.js";import{B as C}from"./Button.component-CfsFBQjk.js";import{D as o}from"./DataGridHeadCell.component-DP3g8w7B.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-zbeWeS7i.js";import"./Spinner.component-CT2dtli4.js";const G=5,f={title:"Components/DataGrid/DataGridRow",component:i,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[r=>e.jsx(D,{columns:G,children:e.jsx(r,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},d={render:({items:r,...t})=>e.jsx(i,{...t,children:r.map((a,l)=>s.createElement(n,{...a,key:l}))}),args:{isSelected:!1,items:Array(G).fill({...u.args}),onClick:void 0},parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}}},c={render:r=>e.jsxs(D,{columns:3,gridColumnTemplate:"270px 270px 270px",children:[e.jsxs(i,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Status"})]}),Array.from({length:4},(t,a)=>s.createElement(i,{...r,key:`row_${a}`,onClick:()=>alert(`Row ${a+1} clicked (HoverableRow)`)},e.jsx(n,{children:`ID-${a+1}`},`cell_id_${a}`),e.jsx(n,{children:`Name-${a+1}`},`cell_name_${a}`),e.jsx(n,{children:`Status-${a+1}`},`cell_status_${a}`)))]}),args:{items:Array.from({length:3},(r,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."}}}},m={render:r=>e.jsxs(D,{columns:4,gridColumnTemplate:"210px 210px 210px 210px",children:[e.jsxs(i,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Name"}),e.jsx(o,{children:"Status"}),e.jsx(o,{children:"Action"})]}),Array.from({length:4},(t,a)=>s.createElement(i,{...r,key:`row_${a}`,onClick:()=>alert(`DataGridRow Event for Row ${a+1}!`)},e.jsx(n,{children:`ID-${a+1}`},`cell_id_${a}`),e.jsx(n,{children:`Name-${a+1}`},`cell_name_${a}`),e.jsx(n,{children:`Status-${a+1}`},`cell_status_${a}`),e.jsx(n,{children:a===0?e.jsx(C,{label:"Trigger button event only",onClick:l=>{l.stopPropagation(),alert("Button clicked in Row 1")}}):"None"},`cell_button_${a}`)))]}),args:{items:Array.from({length:3},(r,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},p={render:({items:r,...t})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isSelected:!0,...t,children:r.map((a,l)=>s.createElement(n,{...a,key:l}))}),e.jsx(i,{...t,children:r.map((a,l)=>s.createElement(n,{...a,key:l}))})]}),args:{items:Array(G).fill({...u.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={3} gridColumnTemplate="270px 270px 270px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={4} gridColumnTemplate="210px 210px 210px 210px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."\n      }\n    }\n  }\n}',...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const k=["Default","HoverableRow","HoverableRowWithInteractableElements","SelectedRow"];export{d as Default,c as HoverableRow,m as HoverableRowWithInteractableElements,p as SelectedRow,k as __namedExportsOrder,f as default};
