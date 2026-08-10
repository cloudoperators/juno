import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{t as r}from"./Button.component-CTgNnx6r.js";import{t as i}from"./Button-DwiBrzVA.js";import{a,o,r as s,t as c}from"./DataGridCell.component-DqHyfRV4.js";import{t as l}from"./DataGridRow-Df434dGj.js";import{t as u}from"./DataGridCell-CacZJQ67.js";import{t as d}from"./DataGridHeadCell.component-BQGo6MX-.js";import{t as f}from"./DataGridHeadCell-08LAIxbi.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{t(),i(),o(),l(),u(),f(),p=n(),m=t(),h=3,g={title:`Components/DataGrid/DataGrid`,component:a,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}}},_=e=>{let{hideHead:t,includeColSpanRow:n,columns:r=h}=e;return(0,p.jsxs)(a,{...e,children:[!t&&(0,p.jsx)(s,{children:[...Array(r)].map((e,t)=>(0,p.jsx)(d,{children:`Head cell ${t}`},`h_${t}`))}),!n&&[...[,,,,]].map((e,t)=>(0,p.jsx)(s,{children:[...Array(r)].map((e,n)=>(0,p.jsx)(c,{children:n===r-2?`Cell ${t}-${n} has more content than others`:`Cell ${t}-${n}`},`b_${t}_${n}`))},`b_${t}`)),n&&(0,p.jsx)(s,{children:(0,p.jsx)(c,{colSpan:r,children:`This is a cell with colspan spanning all available columns`})})]})},v={render:_,args:{columns:5},parameters:{docs:{description:{story:`Juno DataGrid for displaying data. Example with 5 columns.`}}}},y={render:_,args:{columns:5,columnMaxSize:`1fr`},parameters:{docs:{description:{story:`Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others`}}}},b={render:_,args:{columns:5,columnMinSize:`300px`},parameters:{docs:{description:{story:`Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore`}}}},x={render:_,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:`Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button`}}}},S={render:_,args:{gridColumnTemplate:`20% repeat(2, auto)`,columns:h},parameters:{docs:{description:{story:`Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored`}}}},C={render:_,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:`Without head cells`}}}},w={render:_,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:`With a col span cell`}}}},T={render:e=>(0,p.jsxs)(a,{columns:h,children:[(0,p.jsxs)(s,{children:[(0,p.jsx)(d,{children:`ID`}),(0,p.jsx)(d,{children:`Name`}),(0,p.jsx)(d,{children:`Status`})]}),Array.from({length:4},(t,n)=>(0,m.createElement)(s,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked.`)},(0,p.jsx)(c,{children:`ID-${n+1}`},`cell_id_${n}`),(0,p.jsx)(c,{children:`Name-${n+1}`},`cell_name_${n}`),(0,p.jsx)(c,{children:`Status-${n+1}`},`cell_status_${n}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."}}}},E={render:e=>(0,p.jsxs)(a,{columns:4,children:[(0,p.jsxs)(s,{children:[(0,p.jsx)(d,{children:`ID`}),(0,p.jsx)(d,{children:`Name`}),(0,p.jsx)(d,{children:`Status`}),(0,p.jsx)(d,{children:`Action`})]}),Array.from({length:4},(t,n)=>(0,m.createElement)(s,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked.`)},(0,p.jsx)(c,{children:`ID-${n+1}`},`cell_id_${n}`),(0,p.jsx)(c,{children:`Name-${n+1}`},`cell_name_${n}`),(0,p.jsx)(c,{children:`Status-${n+1}`},`cell_status_${n}`),(0,p.jsx)(c,{children:n===0?(0,p.jsx)(r,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${n}`)))]}),args:{items:[]},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={defaultColumns + 1}>\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked.`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: []\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."\n      }\n    }\n  }\n}',...E.parameters?.docs?.source}}},D=[`Default`,`EqualColumnSize`,`ColumnMinSize`,`MinimumSizedColumns`,`CustomGridTemplate`,`NoHead`,`ColSpanCell`,`HoverableRow`,`HoverableRowWithInteractableElements`]})))()}O();export{w as ColSpanCell,b as ColumnMinSize,S as CustomGridTemplate,v as Default,y as EqualColumnSize,T as HoverableRow,E as HoverableRowWithInteractableElements,x as MinimumSizedColumns,C as NoHead,D as __namedExportsOrder,g as default};