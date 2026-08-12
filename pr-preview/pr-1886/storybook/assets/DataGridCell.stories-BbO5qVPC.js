import{i as e}from"./preload-helper-usAeo7Bx.js";import{t}from"./react-CSnjoAvk.js";import{t as n}from"./jsx-runtime-O9QVJvLM.js";import{c as r,i,o as a,r as o,t as s}from"./DataGridHeadCell.component-DHvP2wTN.js";import{n as c,t as l}from"./DataGridHeadCell-CGTXIW2v.js";import{t as u}from"./DataGrid-Dt4_2u0A.js";var d,f,p,m,h,g,_,v,y,b=e((()=>{t(),u(),c(),l(),o(),d=n(),f={title:`Components/DataGrid/DataGridCell`,component:i,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},verticalAlignment:{control:{type:`radio`},options:[`center`,`top`]}}},p=[{id:`1`,name:`node-prod-01`,status:`Running`},{id:`2`,name:`node-prod-02`,status:`Stopped`},{id:`3`,name:`node-staging-01`,status:`Error`}],m=[{id:`1`,name:`node-prod-01`,status:`Running — all systems operational, no issues detected, last checked 2 minutes ago`},{id:`2`,name:`node-prod-02`,status:`Stopped — scheduled maintenance window currently active, expected to resume at 06:00 UTC`},{id:`3`,name:`node-staging-01`,status:`Error — health check failed on port 8080, automatic restart attempted 3 times, manual intervention required`}],h={parameters:{docs:{description:{story:"A standard `DataGridCell` inside a `DataGrid`."}}},render:()=>(0,d.jsxs)(r,{columns:3,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{children:`Name`}),(0,d.jsx)(s,{children:`Status`}),(0,d.jsx)(s,{children:`ID`})]}),p.map(e=>(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{children:e.name}),(0,d.jsx)(i,{children:e.status}),(0,d.jsx)(i,{children:e.id})]},e.id))]})},g={parameters:{docs:{description:{story:"With `nowrap`, cell content will not wrap onto multiple lines. Non-wrapping cells push their column to the available maximum width, and overflowing content is visible by default — consumers are responsible for handling overflow. The last row demonstrates truncation with an ellipsis: wrap the cell content in a `<span>` with `block` and `truncate` — the span must be a block element because `text-overflow: ellipsis` does not apply directly to flex containers."}}},render:()=>(0,d.jsxs)(r,{columns:3,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{children:`Name`}),(0,d.jsx)(s,{children:`Status`}),(0,d.jsx)(s,{children:`ID`})]}),m.map((e,t)=>(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{nowrap:!0,children:e.name}),(0,d.jsx)(i,{nowrap:!0,className:t===m.length-1?`jn:overflow-hidden`:``,children:t===m.length-1?(0,d.jsx)(`span`,{className:`jn:block jn:truncate`,children:e.status}):e.status}),(0,d.jsx)(i,{nowrap:!0,children:e.id})]},e.id))]})},_={parameters:{docs:{description:{story:"A `DataGridCell` with `colSpan` spanning multiple columns."}}},render:()=>(0,d.jsxs)(r,{columns:3,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{children:`Name`}),(0,d.jsx)(s,{children:`Status`}),(0,d.jsx)(s,{children:`ID`})]}),p.map(e=>(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{colSpan:2,children:e.name}),(0,d.jsx)(i,{children:e.id})]},e.id))]})},v={parameters:{docs:{description:{story:'Use `verticalAlignment` to override the parent `DataGrid`\'s `cellVerticalAlignment` for individual cells. Here the grid is set to `cellVerticalAlignment="center"` (the default), but the description cell uses `verticalAlignment="top"` to align longer content to the top while the name cell remains centered.'}}},render:()=>(0,d.jsxs)(r,{columns:2,cellVerticalAlignment:`center`,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{children:`Name`}),(0,d.jsx)(s,{children:`Description`})]}),p.map(e=>(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{children:e.name}),(0,d.jsxs)(i,{verticalAlignment:`top`,children:[`This is a longer description for `,e.name,` that spans multiple lines to demonstrate that top alignment works independently of the grid-level setting.`]})]},e.id))]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell verticalAlignment="top">
            This is a longer description for {item.name} that spans multiple lines to demonstrate that top alignment
            works independently of the grid-level setting.
          </DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`NoWrap`,`ColSpan`,`VerticalAlignmentOverride`]}));b();export{_ as ColSpan,h as Default,g as NoWrap,v as VerticalAlignmentOverride,y as __namedExportsOrder,f as default,b as t};