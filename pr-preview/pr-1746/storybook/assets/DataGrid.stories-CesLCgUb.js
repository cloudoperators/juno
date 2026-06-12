import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-BwwXKDTn.js";import{t as i}from"./Button.component-C0YLHUPh.js";import{t as a}from"./Button-dzHc7T2L.js";import{i as o,o as s,r as c,s as l,t as u}from"./DataGridCell.component-BA9EnREf.js";import{t as d}from"./DataGridCell-BTEbFzJk.js";import{n as f,t as p}from"./DataGridHeadCell-BVutNmv2.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{r(),a(),l(),c(),d(),p(),m=n(),h=e(r()),g=3,_={title:`Components/DataGrid/DataGrid`,component:s,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}}},v=e=>{let{hideHead:t,includeColSpanRow:n,columns:r=g}=e;return(0,m.jsxs)(s,{...e,children:[!t&&(0,m.jsx)(o,{children:[...Array(r)].map((e,t)=>(0,m.jsx)(f,{children:`Head cell ${t}`},`h_${t}`))}),!n&&[...[,,,,]].map((e,t)=>(0,m.jsx)(o,{children:[...Array(r)].map((e,n)=>(0,m.jsx)(u,{children:n===r-2?`Cell ${t}-${n} has more content than others`:`Cell ${t}-${n}`},`b_${t}_${n}`))},`b_${t}`)),n&&(0,m.jsx)(o,{children:(0,m.jsx)(u,{colSpan:r,children:`This is a cell with colspan spanning all available columns`})})]})},y={render:v,args:{columns:5},parameters:{docs:{description:{story:`Juno DataGrid for displaying data. Example with 5 columns.`}}}},b={render:v,args:{columns:5,columnMaxSize:`1fr`},parameters:{docs:{description:{story:`Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others`}}}},x={render:v,args:{columns:5,columnMinSize:`300px`},parameters:{docs:{description:{story:`Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore`}}}},S={render:v,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:`Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button`}}}},C={render:v,args:{gridColumnTemplate:`20% repeat(${g-1}, auto)`,columns:g},parameters:{docs:{description:{story:`Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored`}}}},w={render:v,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:`Without head cells`}}}},T={render:v,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:`With a col span cell`}}}},E={render:e=>(0,m.jsxs)(s,{columns:g,children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(f,{children:`ID`}),(0,m.jsx)(f,{children:`Name`}),(0,m.jsx)(f,{children:`Status`})]}),Array.from({length:4},(t,n)=>(0,h.createElement)(o,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked.`)},(0,m.jsx)(u,{children:`ID-${n+1}`},`cell_id_${n}`),(0,m.jsx)(u,{children:`Name-${n+1}`},`cell_name_${n}`),(0,m.jsx)(u,{children:`Status-${n+1}`},`cell_status_${n}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},D={render:e=>(0,m.jsxs)(s,{columns:4,children:[(0,m.jsxs)(o,{children:[(0,m.jsx)(f,{children:`ID`}),(0,m.jsx)(f,{children:`Name`}),(0,m.jsx)(f,{children:`Status`}),(0,m.jsx)(f,{children:`Action`})]}),Array.from({length:4},(t,n)=>(0,h.createElement)(o,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked.`)},(0,m.jsx)(u,{children:`ID-${n+1}`},`cell_id_${n}`),(0,m.jsx)(u,{children:`Name-${n+1}`},`cell_name_${n}`),(0,m.jsx)(u,{children:`Status-${n+1}`},`cell_status_${n}`),(0,m.jsx)(u,{children:n===0?(0,m.jsx)(i,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${n}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns + 1}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."\n      }\n    }\n  }\n}',...D.parameters?.docs?.source}}},O=[`Default`,`EqualColumnSize`,`ColumnMinSize`,`MinimumSizedColumns`,`CustomGridTemplate`,`NoHead`,`ColSpanCell`,`HoverableRow`,`HoverableRowWithInteractableElements`]}))();export{T as ColSpanCell,x as ColumnMinSize,C as CustomGridTemplate,y as Default,b as EqualColumnSize,E as HoverableRow,D as HoverableRowWithInteractableElements,S as MinimumSizedColumns,w as NoHead,O as __namedExportsOrder,_ as default};