import{j as e,r as f}from"./iframe-DPr166uo.js";import{B as $}from"./Button.component-D4XfFJxM.js";import{D as w,a as s,b as r}from"./DataGridCell.component-DJ2TT7Jo.js";import{D as t}from"./DataGridHeadCell.component-FyKzZAoX.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-BZ7ei4Ds.js";import"./Spinner.component-Dsrea7CT.js";const c=3,E={title:"Components/DataGrid/DataGrid",component:w,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},o=l=>{const{hideHead:x,includeColSpanRow:a,columns:i=c}=l;return e.jsxs(w,{...l,children:[!x&&e.jsx(s,{children:[...Array(i)].map((_,n)=>e.jsx(t,{children:`Head cell ${n}`},`h_${n}`))}),!a&&[...Array(4)].map((_,n)=>e.jsx(s,{children:[...Array(i)].map((b,d)=>e.jsx(r,{children:d===i-2?`Cell ${n}-${d} has more content than others`:`Cell ${n}-${d}`},`b_${n}_${d}`))},`b_${n}`)),a&&e.jsx(s,{children:e.jsx(r,{colSpan:i,children:"This is a cell with colspan spanning all available columns"})})]})},m={render:o,args:{columns:5},parameters:{docs:{description:{story:"Juno DataGrid for displaying data. Example with 5 columns."}}}},u={render:o,args:{columns:5,columnMaxSize:"1fr"},parameters:{docs:{description:{story:"Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"}}}},p={render:o,args:{columns:5,columnMinSize:"300px"},parameters:{docs:{description:{story:"Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"}}}},h={render:o,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:"Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"}}}},y={render:o,args:{gridColumnTemplate:`20% repeat(${c-1}, auto)`,columns:c},parameters:{docs:{description:{story:"Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"}}}},C={render:o,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:"Without head cells"}}}},g={render:o,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:"With a col span cell"}}}},D={render:l=>e.jsxs(w,{columns:c,children:[e.jsxs(s,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Status"})]}),Array.from({length:4},(x,a)=>f.createElement(s,{...l,key:`row_${a}`,onClick:()=>alert(`Row ${a+1} clicked.`)},e.jsx(r,{children:`ID-${a+1}`},`cell_id_${a}`),e.jsx(r,{children:`Name-${a+1}`},`cell_name_${a}`),e.jsx(r,{children:`Status-${a+1}`},`cell_status_${a}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},G={render:l=>e.jsxs(w,{columns:c+1,children:[e.jsxs(s,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Status"}),e.jsx(t,{children:"Action"})]}),Array.from({length:4},(x,a)=>f.createElement(s,{...l,key:`row_${a}`,onClick:()=>alert(`Row ${a+1} clicked.`)},e.jsx(r,{children:`ID-${a+1}`},`cell_id_${a}`),e.jsx(r,{children:`Name-${a+1}`},`cell_name_${a}`),e.jsx(r,{children:`Status-${a+1}`},`cell_status_${a}`),e.jsx(r,{children:a===0?e.jsx($,{label:"Trigger button event only",onClick:i=>{i.stopPropagation(),alert("Button clicked in Row 1")}}):"None"},`cell_button_${a}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns + 1}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."\n      }\n    }\n  }\n}',...G.parameters?.docs?.source}}};const z=["Default","EqualColumnSize","ColumnMinSize","MinimumSizedColumns","CustomGridTemplate","NoHead","ColSpanCell","HoverableRow","HoverableRowWithInteractableElements"];export{g as ColSpanCell,p as ColumnMinSize,y as CustomGridTemplate,m as Default,u as EqualColumnSize,D as HoverableRow,G as HoverableRowWithInteractableElements,h as MinimumSizedColumns,C as NoHead,z as __namedExportsOrder,E as default};
