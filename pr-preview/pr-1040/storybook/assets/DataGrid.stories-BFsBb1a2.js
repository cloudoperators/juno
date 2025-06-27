import{j as s}from"./iframe-DlbXkkhY.js";import{D as q,a as p,b as g}from"./DataGridCell.component-DgpNJoQo.js";import{D as k}from"./DataGridHeadCell.component-NI22v2p-.js";const u=3,L={title:"Components/DataGrid/DataGrid",component:q,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},a=h=>{const{hideHead:J,includeColSpanRow:y,columns:r=u}=h;return s.jsxs(q,{...h,children:[!J&&s.jsx(p,{children:[...Array(r)].map((O,e)=>s.jsx(k,{children:`Head cell ${e}`},`h_${e}`))}),!y&&[...Array(4)].map((O,e)=>s.jsx(p,{children:[...Array(r)].map((B,n)=>s.jsx(g,{children:n===r-2?`Cell ${e}-${n} has more content than others`:`Cell ${e}-${n}`},`b_${e}_${n}`))},`b_${e}`)),y&&s.jsx(p,{children:s.jsx(g,{colSpan:r,children:"This is a cell with colspan spanning all available columns"})})]})},o={render:a,args:{columns:5},parameters:{docs:{description:{story:"Juno DataGrid for displaying data. Example with 5 columns."}}}},t={render:a,args:{columns:5,columnMaxSize:"1fr"},parameters:{docs:{description:{story:"Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others"}}}},l={render:a,args:{columns:5,columnMinSize:"300px"},parameters:{docs:{description:{story:"Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore"}}}},c={render:a,args:{columns:5,minContentColumns:[0,4]},parameters:{docs:{description:{story:"Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button"}}}},i={render:a,args:{gridColumnTemplate:`20% repeat(${u-1}, auto)`,columns:u},parameters:{docs:{description:{story:"Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored"}}}},m={render:a,args:{columns:5,hideHead:!0},parameters:{docs:{description:{story:"Without head cells"}}}},d={render:a,args:{columns:5,includeColSpanRow:!0},parameters:{docs:{description:{story:"With a col span cell"}}}};var f,C,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var w,S,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,v,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var D,E,G;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var $,j,_;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(_=(j=i.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var M,H,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var A,W,N;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};const P=["Default","EqualColumnSize","ColumnMinSize","MinimumSizedColumns","CustomGridTemplate","NoHead","ColSpanCell"];export{d as ColSpanCell,l as ColumnMinSize,i as CustomGridTemplate,o as Default,t as EqualColumnSize,c as MinimumSizedColumns,m as NoHead,P as __namedExportsOrder,L as default};
