import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";import{n as i,r as a,t as o}from"./DataGridCell.component-Dzf0ifLd.js";import"./DataGridCell-CGiS5ubC.js";import{t as s}from"./DataGridHeadCell-UQSjrtNl.js";import"./DataGrid-BIdvFW0n.js";import{Default as c}from"./DataGridCell.stories-vaSFRMZT.js";var l=e(t()),u=n(),d=5,f={title:`Components/DataGrid/DataGridRow`,component:i,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,u.jsx)(a,{columns:d,children:(0,u.jsx)(e,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},p={render:({items:e,...t})=>(0,u.jsx)(i,{...t,children:e.map((e,t)=>(0,l.createElement)(o,{...e,key:t}))}),args:{isSelected:!1,items:Array(d).fill({...c.args}),onClick:void 0},parameters:{docs:{description:{story:`Juno DataGridRow for use in DataGrid`}}}},m={render:e=>(0,u.jsxs)(a,{columns:3,gridColumnTemplate:`270px 270px 270px`,children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{children:`ID`}),(0,u.jsx)(s,{children:`Name`}),(0,u.jsx)(s,{children:`Status`})]}),Array.from({length:4},(t,n)=>(0,l.createElement)(i,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked (HoverableRow)`)},(0,u.jsx)(o,{children:`ID-${n+1}`},`cell_id_${n}`),(0,u.jsx)(o,{children:`Name-${n+1}`},`cell_name_${n}`),(0,u.jsx)(o,{children:`Status-${n+1}`},`cell_status_${n}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."}}}},h={render:e=>(0,u.jsxs)(a,{columns:4,gridColumnTemplate:`210px 210px 210px 210px`,children:[(0,u.jsxs)(i,{children:[(0,u.jsx)(s,{children:`ID`}),(0,u.jsx)(s,{children:`Name`}),(0,u.jsx)(s,{children:`Status`}),(0,u.jsx)(s,{children:`Action`})]}),Array.from({length:4},(t,n)=>(0,l.createElement)(i,{...e,key:`row_${n}`,onClick:()=>alert(`DataGridRow Event for Row ${n+1}!`)},(0,u.jsx)(o,{children:`ID-${n+1}`},`cell_id_${n}`),(0,u.jsx)(o,{children:`Name-${n+1}`},`cell_name_${n}`),(0,u.jsx)(o,{children:`Status-${n+1}`},`cell_status_${n}`),(0,u.jsx)(o,{children:n===0?(0,u.jsx)(r,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${n}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},g={render:({items:e,...t})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{isSelected:!0,...t,children:e.map((e,t)=>(0,l.createElement)(o,{...e,key:t}))}),(0,u.jsx)(i,{...t,children:e.map((e,t)=>(0,l.createElement)(o,{...e,key:t}))})]}),args:{items:Array(d).fill({...c.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={3} gridColumnTemplate="270px 270px 270px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={4} gridColumnTemplate="210px 210px 210px 210px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."\n      }\n    }\n  }\n}',...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};var _=[`Default`,`HoverableRow`,`HoverableRowWithInteractableElements`,`SelectedRow`];export{p as Default,m as HoverableRow,h as HoverableRowWithInteractableElements,g as SelectedRow,_ as __namedExportsOrder,f as default};