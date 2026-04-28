import{g as e}from"./iframe-DmqlBy6I.js";import{t}from"./Button.component-Di6O5YIz.js";import"./Button-BFnk68m8.js";import{n,r,t as i}from"./DataGridCell.component-CsHgj-_l.js";import"./DataGridCell-894QYXet.js";import{t as a}from"./DataGridHeadCell-DcLO837W.js";import{createElement as o}from"react";var s=e(),c=3,l={title:`Components/DataGrid/DataGrid`,component:r,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}}},u=e=>{let{hideHead:t,includeColSpanRow:o,columns:l=c}=e;return(0,s.jsxs)(r,{...e,children:[!t&&(0,s.jsx)(n,{children:[...Array(l)].map((e,t)=>(0,s.jsx)(a,{children:`Head cell ${t}`},`h_${t}`))}),!o&&[...[,,,,]].map((e,t)=>(0,s.jsx)(n,{children:[...Array(l)].map((e,n)=>(0,s.jsx)(i,{children:n===l-2?`Cell ${t}-${n} has more content than others`:`Cell ${t}-${n}`},`b_${t}_${n}`))},`b_${t}`)),o&&(0,s.jsx)(n,{children:(0,s.jsx)(i,{colSpan:l,children:`This is a cell with colspan spanning all available columns`})})]})},d={render:u,args:{columns:5},parameters:{docs:{description:{story:`Juno DataGrid for displaying data. Example with 5 columns.`}}}},f={render:u,args:{columns:5,columnMaxSize:`1fr`},parameters:{docs:{description:{story:`Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others`}}}},p={render:u,args:{columns:5,columnMinSize:`300px`},parameters:{docs:{description:{story:`Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore`}}}},m={render:u,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:`Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button`}}}},h={render:u,args:{gridColumnTemplate:`20% repeat(${c-1}, auto)`,columns:c},parameters:{docs:{description:{story:`Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored`}}}},g={render:u,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:`Without head cells`}}}},_={render:u,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:`With a col span cell`}}}},v={render:e=>(0,s.jsxs)(r,{columns:c,children:[(0,s.jsxs)(n,{children:[(0,s.jsx)(a,{children:`ID`}),(0,s.jsx)(a,{children:`Name`}),(0,s.jsx)(a,{children:`Status`})]}),Array.from({length:4},(t,r)=>o(n,{...e,key:`row_${r}`,onClick:()=>alert(`Row ${r+1} clicked.`)},(0,s.jsx)(i,{children:`ID-${r+1}`},`cell_id_${r}`),(0,s.jsx)(i,{children:`Name-${r+1}`},`cell_name_${r}`),(0,s.jsx)(i,{children:`Status-${r+1}`},`cell_status_${r}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},y={render:e=>(0,s.jsxs)(r,{columns:c+1,children:[(0,s.jsxs)(n,{children:[(0,s.jsx)(a,{children:`ID`}),(0,s.jsx)(a,{children:`Name`}),(0,s.jsx)(a,{children:`Status`}),(0,s.jsx)(a,{children:`Action`})]}),Array.from({length:4},(r,a)=>o(n,{...e,key:`row_${a}`,onClick:()=>alert(`Row ${a+1} clicked.`)},(0,s.jsx)(i,{children:`ID-${a+1}`},`cell_id_${a}`),(0,s.jsx)(i,{children:`Name-${a+1}`},`cell_name_${a}`),(0,s.jsx)(i,{children:`Status-${a+1}`},`cell_status_${a}`),(0,s.jsx)(i,{children:a===0?(0,s.jsx)(t,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${a}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    columns: 5
  },
  parameters: {
    docs: {
      description: {
        story: "Juno DataGrid for displaying data. Example with 5 columns."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    columns: 5,
    columnMaxSize: "1fr"
  },
  parameters: {
    docs: {
      description: {
        story: "Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    columns: 5,
    columnMinSize: "300px"
  },
  parameters: {
    docs: {
      description: {
        story: "Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    columns: 5,
    minContentColumns: [0, 4]
  },
  parameters: {
    docs: {
      description: {
        story: "Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    gridColumnTemplate: \`20% repeat(\${defaultColumns - 1}, auto)\`,
    columns: defaultColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    columns: 5,
    hideHead: true
  },
  parameters: {
    docs: {
      description: {
        story: "Without head cells"
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    columns: 5,
    includeColSpanRow: true
  },
  parameters: {
    docs: {
      description: {
        story: "With a col span cell"
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns + 1}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."\n      }\n    }\n  }\n}',...y.parameters?.docs?.source}}};var b=[`Default`,`EqualColumnSize`,`ColumnMinSize`,`MinimumSizedColumns`,`CustomGridTemplate`,`NoHead`,`ColSpanCell`,`HoverableRow`,`HoverableRowWithInteractableElements`];export{_ as ColSpanCell,p as ColumnMinSize,h as CustomGridTemplate,d as Default,f as EqualColumnSize,v as HoverableRow,y as HoverableRowWithInteractableElements,m as MinimumSizedColumns,g as NoHead,b as __namedExportsOrder,l as default};