import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{D as q,a as p,b as y}from"./DataGridCell.component-CSRZQ8sx.js";import{D as F}from"./DataGridHeadCell.component-BRqQJsPo.js";import"./index-DysCNOs_.js";const L={title:"Components/DataGrid/DataGrid",component:q,argTypes:{children:{control:!1}}},u=3,a=({hideHead:J,includeColSpanRow:h,...r})=>e.jsx(e.Fragment,{children:e.jsxs(q,{...r,children:[(!J||null)&&e.jsx(p,{children:[...Array(r.columns||u)].map((N,s)=>e.jsx(F,{children:`Head cell ${s}`},`h_${s}`))}),(!h||null)&&[...Array(4)].map((N,s)=>e.jsx(p,{children:[...Array(r.columns||u)].map((O,n)=>e.jsx(y,{children:n===r.columns-2?`Cell ${s}-${n} has more content than others`:`Cell ${s}-${n}`},`b_${s}_${n}`))},`b_${s}`)),(h||null)&&e.jsx(p,{children:e.jsx(y,{colSpan:r.columns,children:"This is a cell with colspan spanning all available columns"})})]})}),o={render:a,parameters:{docs:{description:{story:"Juno DataGrid for displaying data. Example with 5 columns."}}},args:{columns:5}},t={render:a,parameters:{docs:{description:{story:"Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"}}},args:{columns:5,columnMaxSize:"1fr"}},l={render:a,parameters:{docs:{description:{story:"Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"}}},args:{columns:5,columnMinSize:"300px"}},c={render:a,parameters:{docs:{description:{story:"Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"}}},args:{columns:5,minContentColumns:[0,4]}},i={render:a,parameters:{docs:{description:{story:"Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"}}},args:{gridColumnTemplate:`20% repeat(${u-1}, auto)`}},m={render:a,parameters:{docs:{description:{story:"Without head cells"}}},args:{columns:5,hideHead:!0}},d={render:a,parameters:{docs:{description:{story:"With a col span cell"}}},args:{columns:5,includeColSpanRow:!0}};var g,f,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataGrid for displaying data. Example with 5 columns."
      }
    }
  },
  args: {
    columns: 5
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var C,w,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"
      }
    }
  },
  args: {
    columns: 5,
    columnMaxSize: "1fr"
  }
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,b,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"
      }
    }
  },
  args: {
    columns: 5,
    columnMinSize: "300px"
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var D,z,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"
      }
    }
  },
  args: {
    columns: 5,
    minContentColumns: [0, 4]
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var G,$,j;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"
      }
    }
  },
  args: {
    gridColumnTemplate: \`20% repeat(\${defaultColumns - 1}, auto)\`
  }
}`,...(j=($=i.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var _,M,H;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Without head cells"
      }
    }
  },
  args: {
    columns: 5,
    hideHead: true
  }
}`,...(H=(M=m.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var A,W,R;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "With a col span cell"
      }
    }
  },
  args: {
    columns: 5,
    includeColSpanRow: true
  }
}`,...(R=(W=d.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};const P=["Default","EqualColumnSize","ColumnMinSize","MinimumSizedColumns","CustomGridTemplate","NoHead","ColSpanCell"];export{d as ColSpanCell,l as ColumnMinSize,i as CustomGridTemplate,o as Default,t as EqualColumnSize,c as MinimumSizedColumns,m as NoHead,P as __namedExportsOrder,L as default};
