import{j as s}from"./iframe-CLN1yHUE.js";import{D as f,a as p,b as g}from"./DataGridCell.component-U-VNYrYp.js";import{D as w}from"./DataGridHeadCell.component-UeBu2yns.js";const u=3,z={title:"Components/DataGrid/DataGrid",component:f,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},a=h=>{const{hideHead:C,includeColSpanRow:y,columns:r=u}=h;return s.jsxs(f,{...h,children:[!C&&s.jsx(p,{children:[...Array(r)].map((x,e)=>s.jsx(w,{children:`Head cell ${e}`},`h_${e}`))}),!y&&[...Array(4)].map((x,e)=>s.jsx(p,{children:[...Array(r)].map((S,n)=>s.jsx(g,{children:n===r-2?`Cell ${e}-${n} has more content than others`:`Cell ${e}-${n}`},`b_${e}_${n}`))},`b_${e}`)),y&&s.jsx(p,{children:s.jsx(g,{colSpan:r,children:"This is a cell with colspan spanning all available columns"})})]})},o={render:a,args:{columns:5},parameters:{docs:{description:{story:"Juno DataGrid for displaying data. Example with 5 columns."}}}},t={render:a,args:{columns:5,columnMaxSize:"1fr"},parameters:{docs:{description:{story:"Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"}}}},l={render:a,args:{columns:5,columnMinSize:"300px"},parameters:{docs:{description:{story:"Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"}}}},c={render:a,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:"Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"}}}},i={render:a,args:{gridColumnTemplate:`20% repeat(${u-1}, auto)`,columns:u},parameters:{docs:{description:{story:"Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"}}}},m={render:a,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:"Without head cells"}}}},d={render:a,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:"With a col span cell"}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const D=["Default","EqualColumnSize","ColumnMinSize","MinimumSizedColumns","CustomGridTemplate","NoHead","ColSpanCell"];export{d as ColSpanCell,l as ColumnMinSize,i as CustomGridTemplate,o as Default,t as EqualColumnSize,c as MinimumSizedColumns,m as NoHead,D as __namedExportsOrder,z as default};
