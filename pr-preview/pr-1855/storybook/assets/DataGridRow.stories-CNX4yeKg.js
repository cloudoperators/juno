import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{t as r}from"./Button.component-0w_Axl6g.js";import{t as i}from"./Button-93hd65Lo.js";import{a,r as o,t as s}from"./DataGridCell.component-DqHyfRV4.js";import{t as c}from"./DataGridRow-Df434dGj.js";import{t as l}from"./DataGridCell-CacZJQ67.js";import{t as u}from"./DataGridHeadCell.component-BQGo6MX-.js";import{t as d}from"./DataGridHeadCell-08LAIxbi.js";import{t as f}from"./DataGrid-eOyMf81t.js";import{n as p,r as m}from"./DataGridCell.stories-DXluFc3T.js";var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{t(),c(),l(),m(),f(),i(),d(),h=n(),g=t(),_=5,v={title:`Components/DataGrid/DataGridRow`,component:o,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:`ReactNode`}}}},decorators:[e=>(0,h.jsx)(a,{columns:_,children:(0,h.jsx)(e,{})})],parameters:{docs:{source:{excludeDecorators:!1}}}},y={render:({items:e,...t})=>(0,h.jsx)(o,{...t,children:e.map((e,t)=>(0,g.createElement)(s,{...e,key:t}))}),args:{isSelected:!1,items:Array(_).fill({...p.args}),onClick:void 0},parameters:{docs:{description:{story:`Juno DataGridRow for use in DataGrid`}}}},b={render:e=>(0,h.jsxs)(a,{columns:3,gridColumnTemplate:`270px 270px 270px`,children:[(0,h.jsxs)(o,{children:[(0,h.jsx)(u,{children:`ID`}),(0,h.jsx)(u,{children:`Name`}),(0,h.jsx)(u,{children:`Status`})]}),Array.from({length:4},(t,n)=>(0,g.createElement)(o,{...e,key:`row_${n}`,onClick:()=>alert(`Row ${n+1} clicked (HoverableRow)`)},(0,h.jsx)(s,{children:`ID-${n+1}`},`cell_id_${n}`),(0,h.jsx)(s,{children:`Name-${n+1}`},`cell_name_${n}`),(0,h.jsx)(s,{children:`Status-${n+1}`},`cell_status_${n}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."}}}},x={render:e=>(0,h.jsxs)(a,{columns:4,gridColumnTemplate:`210px 210px 210px 210px`,children:[(0,h.jsxs)(o,{children:[(0,h.jsx)(u,{children:`ID`}),(0,h.jsx)(u,{children:`Name`}),(0,h.jsx)(u,{children:`Status`}),(0,h.jsx)(u,{children:`Action`})]}),Array.from({length:4},(t,n)=>(0,g.createElement)(o,{...e,key:`row_${n}`,onClick:()=>alert(`DataGridRow Event for Row ${n+1}!`)},(0,h.jsx)(s,{children:`ID-${n+1}`},`cell_id_${n}`),(0,h.jsx)(s,{children:`Name-${n+1}`},`cell_name_${n}`),(0,h.jsx)(s,{children:`Status-${n+1}`},`cell_status_${n}`),(0,h.jsx)(s,{children:n===0?(0,h.jsx)(r,{label:`Trigger button event only`,onClick:e=>{e.stopPropagation(),alert(`Button clicked in Row 1`)}}):`None`},`cell_button_${n}`)))]}),args:{items:Array.from({length:3},(e,t)=>({content:`Cell Content ${t+1}`}))},parameters:{docs:{description:{story:"You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."}}}},S={render:({items:e,...t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{isSelected:!0,...t,children:e.map((e,t)=>(0,g.createElement)(s,{...e,key:t}))}),(0,h.jsx)(o,{...t,children:e.map((e,t)=>(0,g.createElement)(s,{...e,key:t}))})]}),args:{items:Array(_).fill({...p.args})},parameters:{docs:{description:{story:"When `isSelected` is set, the entire `DataGridRow` persists to be active."}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={3} gridColumnTemplate="270px 270px 270px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity."\n      }\n    }\n  }\n}',...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'{\n  render: args => <DataGrid columns={4} gridColumnTemplate="210px 210px 210px 210px">\n      <DataGridRow>\n        <DataGridHeadCell>ID</DataGridHeadCell>\n        <DataGridHeadCell>Name</DataGridHeadCell>\n        <DataGridHeadCell>Status</DataGridHeadCell>\n        <DataGridHeadCell>Action</DataGridHeadCell>\n      </DataGridRow>\n      {Array.from({\n      length: 4\n    }, (_, rowIndex) => <DataGridRow {...args} key={`row_${rowIndex}`} onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}>\n          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>\n          <DataGridCell key={`cell_button_${rowIndex}`}>\n            {rowIndex === 0 ? <Button label="Trigger button event only" onClick={e => {\n          e.stopPropagation();\n          alert(`Button clicked in Row 1`);\n        }} /> : `None`}\n          </DataGridCell>\n        </DataGridRow>)}\n    </DataGrid>,\n  args: {\n    items: Array.from({\n      length: 3\n    }, (_, i) => ({\n      content: `Cell Content ${i + 1}`\n    }))\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element."\n      }\n    }\n  }\n}',...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`HoverableRow`,`HoverableRowWithInteractableElements`,`SelectedRow`]})))()}w();export{y as Default,b as HoverableRow,x as HoverableRowWithInteractableElements,S as SelectedRow,C as __namedExportsOrder,v as default};