import{g as e}from"./iframe-DaLLswkI.js";import{t}from"./Button.component-CWavRqvr.js";import"./Button-s509wKjE.js";import{n,r,t as i}from"./DataGridCell.component-C57v3qZF.js";import"./DataGridCell-BQ-BrJJS.js";import{t as a}from"./DataGridHeadCell-BjUR6TRj.js";import"./DataGrid-BN3kj3jW.js";import{Default as o}from"./DataGridCell.stories-9-1iWryC.js";import{createElement as s}from"react";var c=e(),l=5,u={title:`Components/DataGrid/DataGridRow`,component:n,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,c.jsx)(r,{columns:l,children:(0,c.jsx)(e,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},d={render:({items:e,...t})=>(0,c.jsx)(n,{...t,children:e.map((e,t)=>s(i,{...e,key:t}))}),args:{isSelected:!1,items:Array(l).fill({...o.args}),onClick:void 0},parameters:{docs:{description:{story:`Juno DataGridRow for use in DataGrid`}}}},f={render:e=>(0,c.jsxs)(r,{columns:3,gridColumnTemplate:`270px 270px 270px`,children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(a,{children:`ID`}),(0,c.jsx)(a,{children:`Name`}),(0,c.jsx)(a,{children:`Status`})]}),Array.from({length:4},(t,r)=>s(n,{...e,key:`row_${r}`,onClick:()=>alert(`Row ${r+1} clicked (HoverableRow)`)},(0,c.jsx)(i,{children:`ID-${r+1}`},`cell_id_${r}`),(0,c.jsx)(i,{children:`Name-${r+1}`},`cell_name_${r}`),(0,c.jsx)(i,{children:`Status-${r+1}`},`cell_status_${r}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."}}}},p={render:e=>(0,c.jsxs)(r,{columns:4,gridColumnTemplate:`210px 210px 210px 210px`,children:[(0,c.jsxs)(n,{children:[(0,c.jsx)(a,{children:`ID`}),(0,c.jsx)(a,{children:`Name`}),(0,c.jsx)(a,{children:`Status`}),(0,c.jsx)(a,{children:`Action`})]}),Array.from({length:4},(r,a)=>s(n,{...e,key:`row_${a}`,onClick:()=>alert(`DataGridRow Event for Row ${a+1}!`)},(0,c.jsx)(i,{children:`ID-${a+1}`},`cell_id_${a}`),(0,c.jsx)(i,{children:`Name-${a+1}`},`cell_name_${a}`),(0,c.jsx)(i,{children:`Status-${a+1}`},`cell_status_${a}`),(0,c.jsx)(i,{children:a===0?(0,c.jsx)(t,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${a}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},m={render:({items:e,...t})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{isSelected:!0,...t,children:e.map((e,t)=>s(i,{...e,key:t}))}),(0,c.jsx)(n,{...t,children:e.map((e,t)=>s(i,{...e,key:t}))})]}),args:{items:Array(l).fill({...o.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={3} gridColumnTemplate="270px 270px 270px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={4} gridColumnTemplate="210px 210px 210px 210px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."\n      }\n    }\n  }\n}',...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`HoverableRow`,`HoverableRowWithInteractableElements`,`SelectedRow`];export{d as Default,f as HoverableRow,p as HoverableRowWithInteractableElements,m as SelectedRow,h as __namedExportsOrder,u as default};