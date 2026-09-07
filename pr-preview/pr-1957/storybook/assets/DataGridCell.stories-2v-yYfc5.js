import{n as e,r as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{c as i,i as a,o,r as s,t as c}from"./DataGridHeadCell.component-_TWWuG5v.js";import{n as l,t as u}from"./DataGridHeadCell-CHyHtGHR.js";import{t as d}from"./DataGrid-CLfU568W.js";var f=t({ColSpan:()=>y,Default:()=>_,NoWrap:()=>v,VerticalAlignmentOverride:()=>b,__namedExportsOrder:()=>x,default:()=>m}),p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),d(),l(),u(),s(),p=r(),m={title:`Components/DataGrid/DataGridCell`,component:a,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},verticalAlignment:{control:{type:`radio`},options:[`center`,`top`]}}},h=[{id:`1`,name:`node-prod-01`,status:`Running`},{id:`2`,name:`node-prod-02`,status:`Stopped`},{id:`3`,name:`node-staging-01`,status:`Error`}],g=[{id:`1`,name:`node-prod-01`,status:`Running — all systems operational, no issues detected, last checked 2 minutes ago`},{id:`2`,name:`node-prod-02`,status:`Stopped — scheduled maintenance window currently active, expected to resume at 06:00 UTC`},{id:`3`,name:`node-staging-01`,status:`Error — health check failed on port 8080, automatic restart attempted 3 times, manual intervention required`}],_={parameters:{docs:{description:{story:"A standard `DataGridCell` inside a `DataGrid`."}}},render:()=>(0,p.jsxs)(i,{columns:3,children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(c,{children:`Name`}),(0,p.jsx)(c,{children:`Status`}),(0,p.jsx)(c,{children:`ID`})]}),h.map(e=>(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{children:e.name}),(0,p.jsx)(a,{children:e.status}),(0,p.jsx)(a,{children:e.id})]},e.id))]})},v={parameters:{docs:{description:{story:"With `nowrap`, cell content will not wrap onto multiple lines. Non-wrapping cells push their column to the available maximum width, and overflowing content is visible by default — consumers are responsible for handling overflow. The last row demonstrates truncation with an ellipsis: wrap the cell content in a `<span>` with `block` and `truncate` — the span must be a block element because `text-overflow: ellipsis` does not apply directly to flex containers."}}},render:()=>(0,p.jsxs)(i,{columns:3,children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(c,{children:`Name`}),(0,p.jsx)(c,{children:`Status`}),(0,p.jsx)(c,{children:`ID`})]}),g.map((e,t)=>(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{nowrap:!0,children:e.name}),(0,p.jsx)(a,{nowrap:!0,className:t===g.length-1?`jn:overflow-hidden`:``,children:t===g.length-1?(0,p.jsx)(`span`,{className:`jn:block jn:truncate`,children:e.status}):e.status}),(0,p.jsx)(a,{nowrap:!0,children:e.id})]},e.id))]})},y={parameters:{docs:{description:{story:"A `DataGridCell` with `colSpan` spanning multiple columns."}}},render:()=>(0,p.jsxs)(i,{columns:3,children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(c,{children:`Name`}),(0,p.jsx)(c,{children:`Status`}),(0,p.jsx)(c,{children:`ID`})]}),h.map(e=>(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{colSpan:2,children:e.name}),(0,p.jsx)(a,{children:e.id})]},e.id))]})},b={parameters:{docs:{description:{story:'Use `verticalAlignment` to override the parent `DataGrid`\'s `cellVerticalAlignment` for individual cells. Here the grid is set to `cellVerticalAlignment="center"` (the default), but the description cell uses `verticalAlignment="top"` to align longer content to the top while the name cell remains centered.'}}},render:()=>(0,p.jsxs)(i,{columns:2,cellVerticalAlignment:`center`,children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(c,{children:`Name`}),(0,p.jsx)(c,{children:`Description`})]}),h.map(e=>(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{verticalAlignment:`top`,children:e.name}),(0,p.jsxs)(a,{children:[`This is a longer description for `,e.name,` that spans multiple lines to demonstrate that top alignment works independently of the grid-level setting.`]})]},e.id))]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A standard \`DataGridCell\` inside a \`DataGrid\`."
      }
    }
  },
  render: () => <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>ID</DataGridHeadCell>
      </DataGridRow>
      {items.map(item => <DataGridRow key={item.id}>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>{item.status}</DataGridCell>
          <DataGridCell>{item.id}</DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "With \`nowrap\`, cell content will not wrap onto multiple lines. Non-wrapping cells push their column to the available maximum width, and overflowing content is visible by default — consumers are responsible for handling overflow. The last row demonstrates truncation with an ellipsis: wrap the cell content in a \`<span>\` with \`block\` and \`truncate\` — the span must be a block element because \`text-overflow: ellipsis\` does not apply directly to flex containers."
      }
    }
  },
  render: () => <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>ID</DataGridHeadCell>
      </DataGridRow>
      {longItems.map((item, index) => <DataGridRow key={item.id}>
          <DataGridCell nowrap>{item.name}</DataGridCell>
          <DataGridCell nowrap className={index === longItems.length - 1 ? "jn:overflow-hidden" : ""}>
            {index === longItems.length - 1 ? <span className="jn:block jn:truncate">{item.status}</span> : item.status}
          </DataGridCell>
          <DataGridCell nowrap>{item.id}</DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A \`DataGridCell\` with \`colSpan\` spanning multiple columns."
      }
    }
  },
  render: () => <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>ID</DataGridHeadCell>
      </DataGridRow>
      {items.map(item => <DataGridRow key={item.id}>
          <DataGridCell colSpan={2}>{item.name}</DataGridCell>
          <DataGridCell>{item.id}</DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Use \`verticalAlignment\` to override the parent \`DataGrid\`\\'s \`cellVerticalAlignment\` for individual cells. Here the grid is set to \`cellVerticalAlignment="center"\` (the default), but the description cell uses \`verticalAlignment="top"\` to align longer content to the top while the name cell remains centered.'
      }
    }
  },
  render: () => <DataGrid columns={2} cellVerticalAlignment="center">
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Description</DataGridHeadCell>
      </DataGridRow>
      {items.map(item => <DataGridRow key={item.id}>
          <DataGridCell verticalAlignment="top">{item.name}</DataGridCell>
          <DataGridCell>
            This is a longer description for {item.name} that spans multiple lines to demonstrate that top alignment
            works independently of the grid-level setting.
          </DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`NoWrap`,`ColSpan`,`VerticalAlignmentOverride`]})))()}export{_ as n,S as r,f as t};