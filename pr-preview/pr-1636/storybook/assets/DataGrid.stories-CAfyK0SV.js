import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";import{n as i,r as a,t as o}from"./DataGridCell.component-Dzf0ifLd.js";import"./DataGridCell-CGiS5ubC.js";import{t as s}from"./DataGridHeadCell-UQSjrtNl.js";var c=e(t()),l=n(),u=3,d={title:`Components/DataGrid/DataGrid`,component:a,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}}},f=e=>{let{hideHead:t,includeColSpanRow:n,columns:r=u}=e;return(0,l.jsxs)(a,{...e,children:[!t&&(0,l.jsx)(i,{children:[...Array(r)].map((e,t)=>(0,l.jsx)(s,{children:`Head cell ${t}`},`h_${t}`))}),!n&&[...[,,,,]].map((e,t)=>(0,l.jsx)(i,{children:[...Array(r)].map((e,n)=>(0,l.jsx)(o,{children:n===r-2?`Cell ${t}-${n} has more content than others`:`Cell ${t}-${n}`},`b_${t}_${n}`))},`b_${t}`)),n&&(0,l.jsx)(i,{children:(0,l.jsx)(o,{colSpan:r,children:`This is a cell with colspan spanning all available columns`})})]})},p={render:f,args:{columns:5},parameters:{docs:{description:{story:`Juno DataGrid for displaying data. Example with 5 columns.`}}}},m={render:f,args:{columns:5,columnMaxSize:`1fr`},parameters:{docs:{description:{story:`Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others`}}}},h={render:f,args:{columns:5,columnMinSize:`300px`},parameters:{docs:{description:{story:`Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore`}}}},g={render:f,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:`Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button`}}}},_={render:f,args:{gridColumnTemplate:`20% repeat(${u-1}, auto)`,columns:u},parameters:{docs:{description:{story:`Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored`}}}},v={render:f,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:`Without head cells`}}}},y={render:f,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:`With a col span cell`}}}},b={render:e=>(0,l.jsxs)(a,{columns:u,children:[(0,l.jsxs)(i,{children:[(0,l.jsx)(s,{children:`ID`}),(0,l.jsx)(s,{children:`Name`}),(0,l.jsx)(s,{children:`Status`})]}),Array.from({length:4},(t,n)=>(0,c.createElement)(i,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked.`)},(0,l.jsx)(o,{children:`ID-${n+1}`},`cell_id_${n}`),(0,l.jsx)(o,{children:`Name-${n+1}`},`cell_name_${n}`),(0,l.jsx)(o,{children:`Status-${n+1}`},`cell_status_${n}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},x={render:e=>(0,l.jsxs)(a,{columns:u+1,children:[(0,l.jsxs)(i,{children:[(0,l.jsx)(s,{children:`ID`}),(0,l.jsx)(s,{children:`Name`}),(0,l.jsx)(s,{children:`Status`}),(0,l.jsx)(s,{children:`Action`})]}),Array.from({length:4},(t,n)=>(0,c.createElement)(i,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked.`)},(0,l.jsx)(o,{children:`ID-${n+1}`},`cell_id_${n}`),(0,l.jsx)(o,{children:`Name-${n+1}`},`cell_name_${n}`),(0,l.jsx)(o,{children:`Status-${n+1}`},`cell_status_${n}`),(0,l.jsx)(o,{children:n===0?(0,l.jsx)(r,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${n}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns + 1}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."\n      }\n    }\n  }\n}',...x.parameters?.docs?.source}}};var S=[`Default`,`EqualColumnSize`,`ColumnMinSize`,`MinimumSizedColumns`,`CustomGridTemplate`,`NoHead`,`ColSpanCell`,`HoverableRow`,`HoverableRowWithInteractableElements`];export{y as ColSpanCell,h as ColumnMinSize,_ as CustomGridTemplate,p as Default,m as EqualColumnSize,b as HoverableRow,x as HoverableRowWithInteractableElements,g as MinimumSizedColumns,v as NoHead,S as __namedExportsOrder,d as default};