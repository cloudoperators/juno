import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{U as n,tt as r}from"./iframe-BT7oQPqX.js";import{t as i}from"./Button.component-BFLtIyTv.js";import{t as a}from"./Button-D27UsDXr.js";import{i as o,o as s,r as c,t as l}from"./DataGridCell.component-BaAfOrDO.js";import{t as u}from"./DataGridCell-a8MPi5ol.js";import{n as d,t as f}from"./DataGridHeadCell-BVjVxb89.js";import{t as p}from"./DataGrid-Diu_2xEc.js";import{Default as m,t as h}from"./DataGridCell.stories-C1U966xq.js";var g,_,v,y,b,x,S,C,w;t((()=>{r(),c(),u(),h(),p(),a(),f(),g=n(),_=e(r()),v=5,y={title:`Components/DataGrid/DataGridRow`,component:o,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,g.jsx)(s,{columns:v,children:(0,g.jsx)(e,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},b={render:({items:e,...t})=>(0,g.jsx)(o,{...t,children:e.map((e,t)=>(0,_.createElement)(l,{...e,key:t}))}),args:{isSelected:!1,items:Array(v).fill({...m.args}),onClick:void 0},parameters:{docs:{description:{story:`Juno DataGridRow for use in DataGrid`}}}},x={render:e=>(0,g.jsxs)(s,{columns:3,gridColumnTemplate:`270px 270px 270px`,children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(d,{children:`ID`}),(0,g.jsx)(d,{children:`Name`}),(0,g.jsx)(d,{children:`Status`})]}),Array.from({length:4},(t,n)=>(0,_.createElement)(o,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked (HoverableRow)`)},(0,g.jsx)(l,{children:`ID-${n+1}`},`cell_id_${n}`),(0,g.jsx)(l,{children:`Name-${n+1}`},`cell_name_${n}`),(0,g.jsx)(l,{children:`Status-${n+1}`},`cell_status_${n}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."}}}},S={render:e=>(0,g.jsxs)(s,{columns:4,gridColumnTemplate:`210px 210px 210px 210px`,children:[(0,g.jsxs)(o,{children:[(0,g.jsx)(d,{children:`ID`}),(0,g.jsx)(d,{children:`Name`}),(0,g.jsx)(d,{children:`Status`}),(0,g.jsx)(d,{children:`Action`})]}),Array.from({length:4},(t,n)=>(0,_.createElement)(o,{...e,key:`row_${n}`,onClick:()=>alert(`DataGridRow Event for Row ${n+1}!`)},(0,g.jsx)(l,{children:`ID-${n+1}`},`cell_id_${n}`),(0,g.jsx)(l,{children:`Name-${n+1}`},`cell_name_${n}`),(0,g.jsx)(l,{children:`Status-${n+1}`},`cell_status_${n}`),(0,g.jsx)(l,{children:n===0?(0,g.jsx)(i,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${n}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},C={render:({items:e,...t})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{isSelected:!0,...t,children:e.map((e,t)=>(0,_.createElement)(l,{...e,key:t}))}),(0,g.jsx)(o,{...t,children:e.map((e,t)=>(0,_.createElement)(l,{...e,key:t}))})]}),args:{items:Array(v).fill({...m.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={3} gridColumnTemplate="270px 270px 270px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={4} gridColumnTemplate="210px 210px 210px 210px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."\n      }\n    }\n  }\n}',...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`HoverableRow`,`HoverableRowWithInteractableElements`,`SelectedRow`]}))();export{b as Default,x as HoverableRow,S as HoverableRowWithInteractableElements,C as SelectedRow,w as __namedExportsOrder,y as default};