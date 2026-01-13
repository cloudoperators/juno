import{j as e,r as D}from"./iframe-JNaT24jQ.js";import{B as x}from"./Button.component-BWyPO_f6.js";import{D as b,a as i,b as l}from"./DataGridCell.component-C7XNENs_.js";import{D as G}from"./DataGridHeadCell.component-vjbUW0y2.js";import{Default as R}from"./DataGridCell.stories-BBcWKUnp.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-DPwPfxhT.js";import"./Spinner.component-CKltheOB.js";const n=3,W={title:"Components/DataGrid/DataGrid",component:b,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},o=a=>{const{hideHead:t,includeColSpanRow:s,columns:c=n}=a;return e.jsxs(b,{...a,children:[!t&&e.jsx(i,{children:[...Array(c)].map((v,r)=>e.jsx(G,{children:`Head cell ${r}`},`h_${r}`))}),!s&&[...Array(4)].map((v,r)=>e.jsx(i,{children:[...Array(c)].map((S,m)=>e.jsx(l,{children:m===c-2?`Cell ${r}-${m} has more content than others`:`Cell ${r}-${m}`},`b_${r}_${m}`))},`b_${r}`)),s&&e.jsx(i,{children:e.jsx(l,{colSpan:c,children:"This is a cell with colspan spanning all available columns"})})]})},d={render:o,args:{columns:5},parameters:{docs:{description:{story:"Juno DataGrid for displaying data. Example with 5 columns."}}}},p={render:o,args:{columns:5,columnMaxSize:"1fr"},parameters:{docs:{description:{story:"Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"}}}},u={render:o,args:{columns:5,columnMinSize:"300px"},parameters:{docs:{description:{story:"Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"}}}},h={render:o,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:"Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"}}}},g={render:o,args:{gridColumnTemplate:`20% repeat(${n-1}, auto)`,columns:n},parameters:{docs:{description:{story:"Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"}}}},y={render:o,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:"Without head cells"}}}},f={render:o,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:"With a col span cell"}}}},C={render:a=>e.jsx(b,{columns:n,children:e.jsx(i,{...a,onClick:()=>alert("Row clicked (HoverableRow)"),children:a.items.map((t,s)=>e.jsx(l,{children:t.content},s))})}),args:{items:Array(n).fill(null).map((a,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set, the entire `DataGridRow` exhibits visual feedback on hover, enhancing interactivity. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}},w={render:a=>e.jsx(b,{columns:n,children:e.jsxs(i,{...a,onClick:()=>alert("DataGridRow Event (HoverableRowWithInteractableElements)!"),children:[e.jsx(l,{children:e.jsx(x,{label:"Trigger button event only",onClick:t=>{t.stopPropagation(),alert("Only the `Button` event has been triggered!")}})}),a.items.slice(1).map((t,s)=>D.createElement(l,{...t,key:s}))]})}),args:{items:Array(n).fill(e.jsx(l,{...R.args}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <DataGrid columns={defaultColumns}>
      <DataGridRow {...args} onClick={() => alert("Row clicked (HoverableRow)")}>
        {args.items.map((item, i) => <DataGridCell key={i}>{item.content}</DataGridCell>)}
      </DataGridRow>
    </DataGrid>,
  args: {
    items: Array(defaultColumns).fill(null).map((_, i) => ({
      content: \`Cell Content \${i + 1}\`
    }))
  },
  parameters: {
    docs: {
      description: {
        story: "When \`onClick\` is set, the entire \`DataGridRow\` exhibits visual feedback on hover, enhancing interactivity. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."
      }
    }
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <DataGrid columns={defaultColumns}>
      <DataGridRow {...args} onClick={() => alert("DataGridRow Event (HoverableRowWithInteractableElements)!")}>
        <DataGridCell>
          <Button label="Trigger button event only" onClick={e => {
          e.stopPropagation();
          alert("Only the \`Button\` event has been triggered!");
        }} />
        </DataGridCell>
        {args.items.slice(1).map((item, i) => <DataGridCell {...item} key={i} />)}
      </DataGridRow>
    </DataGrid>,
  args: {
    items: Array(defaultColumns).fill(<DataGridCell {...DataGridCellStory.args} />)
  },
  parameters: {
    docs: {
      description: {
        story: "You can enhance \`DataGridRow\` by incorporating interactive elements such as \`Button\`. Remember to add \`event.stopPropogation()\` to the event handler of the interactive element. See [DataGridRow](?path=/docs/components-datagrid-datagridrow--docs) for more info."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const A=["Default","EqualColumnSize","ColumnMinSize","MinimumSizedColumns","CustomGridTemplate","NoHead","ColSpanCell","HoverableRow","HoverableRowWithInteractableElements"];export{f as ColSpanCell,u as ColumnMinSize,g as CustomGridTemplate,d as Default,p as EqualColumnSize,C as HoverableRow,w as HoverableRowWithInteractableElements,h as MinimumSizedColumns,y as NoHead,A as __namedExportsOrder,W as default};
