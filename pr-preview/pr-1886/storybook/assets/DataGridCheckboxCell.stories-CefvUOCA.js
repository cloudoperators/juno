import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-CSnjoAvk.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{t as i}from"./Checkbox.component-BMgwggje.js";import{t as a}from"./Checkbox-CyCmPZ4M.js";import{c as o,i as s,o as c,r as l,t as u}from"./DataGridHeadCell.component-DHvP2wTN.js";import{n as d,t as f}from"./DataGridHeadCell-CGTXIW2v.js";import{n as p,t as m}from"./DataGridCheckboxCell-DwwGFACo.js";import{t as h}from"./DataGrid-Dt4_2u0A.js";var g,_,v,y,b,x,S,C;t((()=>{g=e(n()),h(),d(),l(),f(),m(),a(),_=r(),v={title:`Components/DataGrid/DataGridCheckboxCell`,component:p,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}}},parameters:{docs:{description:{component:"`DataGridCheckboxCell` is a `DataGrid` cell pre-configured for holding a `Checkbox`. Place a `Checkbox` as a child and wire up selection state and event handlers directly on it. To keep the cell as narrow as its content, use `minContentColumns` on the parent `DataGrid` — the cell itself does not control its own column width."}}}},y=[{id:`1`,name:`node-prod-01`,status:`Running`},{id:`2`,name:`node-prod-02`,status:`Stopped`},{id:`3`,name:`node-staging-01`,status:`Error`}],b={parameters:{docs:{description:{story:"A `DataGridCheckboxCell` with a `Checkbox` child. Wire up selection state and all event handlers directly on the `Checkbox`. Use `minContentColumns` on the parent `DataGrid` to keep the checkbox cell as narrow as its content."}}},render:()=>{let[e,t]=(0,g.useState)({});return(0,_.jsxs)(o,{columns:3,minContentColumns:[0],children:[(0,_.jsxs)(c,{children:[(0,_.jsx)(u,{}),(0,_.jsx)(u,{children:`Name`}),(0,_.jsx)(u,{children:`Status`})]}),y.map(n=>(0,_.jsxs)(c,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(i,{"aria-label":`Select ${n.name}`,checked:!!e[n.id],onChange:e=>t(t=>({...t,[n.id]:e.target.checked}))})}),(0,_.jsx)(s,{children:n.name}),(0,_.jsx)(s,{children:n.status})]},n.id))]})}},x={parameters:{docs:{description:{story:"A `DataGridCheckboxCell` with a disabled `Checkbox`. Disable the `Checkbox` directly."}}},render:()=>(0,_.jsxs)(o,{columns:3,minContentColumns:[0],children:[(0,_.jsxs)(c,{children:[(0,_.jsx)(u,{}),(0,_.jsx)(u,{children:`Name`}),(0,_.jsx)(u,{children:`Status`})]}),y.map(e=>(0,_.jsxs)(c,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(i,{"aria-label":`Select ${e.name}`,disabled:!0})}),(0,_.jsx)(s,{children:e.name}),(0,_.jsx)(s,{children:e.status})]},e.id))]})},S={parameters:{docs:{description:{story:'`DataGridCheckboxCell` always centers its content vertically, regardless of the parent `DataGrid`\'s `cellVerticalAlignment` setting. Here the grid is set to `cellVerticalAlignment="top"`, but the checkbox remains centered.'}}},render:()=>(0,_.jsxs)(o,{columns:3,minContentColumns:[0],cellVerticalAlignment:`top`,children:[(0,_.jsxs)(c,{children:[(0,_.jsx)(u,{}),(0,_.jsx)(u,{children:`Name`}),(0,_.jsx)(u,{children:`Notes`})]}),y.map(e=>(0,_.jsxs)(c,{children:[(0,_.jsx)(p,{children:(0,_.jsx)(i,{"aria-label":`Select ${e.name}`})}),(0,_.jsx)(s,{children:e.name}),(0,_.jsx)(s,{children:`This cell has multiple lines of content to make the row tall enough to demonstrate that the checkbox remains vertically centered even when the grid is configured to align cell content to the top.`})]},e.id))]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A \`DataGridCheckboxCell\` with a \`Checkbox\` child. Wire up selection state and all event handlers directly on the \`Checkbox\`. Use \`minContentColumns\` on the parent \`DataGrid\` to keep the checkbox cell as narrow as its content."
      }
    }
  },
  render: () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({});
    return <DataGrid columns={3} minContentColumns={[0]}>
        <DataGridRow>
          <DataGridHeadCell />
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
        </DataGridRow>
        {items.map(item => <DataGridRow key={item.id}>
            <DataGridCheckboxCell>
              <Checkbox aria-label={\`Select \${item.name}\`} checked={!!selected[item.id]} onChange={e => setSelected(s => ({
            ...s,
            [item.id]: e.target.checked
          }))} />
            </DataGridCheckboxCell>
            <DataGridCell>{item.name}</DataGridCell>
            <DataGridCell>{item.status}</DataGridCell>
          </DataGridRow>)}
      </DataGrid>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A \`DataGridCheckboxCell\` with a disabled \`Checkbox\`. Disable the \`Checkbox\` directly."
      }
    }
  },
  render: () => <DataGrid columns={3} minContentColumns={[0]}>
      <DataGridRow>
        <DataGridHeadCell />
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
      </DataGridRow>
      {items.map(item => <DataGridRow key={item.id}>
          <DataGridCheckboxCell>
            <Checkbox aria-label={\`Select \${item.name}\`} disabled />
          </DataGridCheckboxCell>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>{item.status}</DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`DataGridCheckboxCell\` always centers its content vertically, regardless of the parent \`DataGrid\`\\'s \`cellVerticalAlignment\` setting. Here the grid is set to \`cellVerticalAlignment="top"\`, but the checkbox remains centered.'
      }
    }
  },
  render: () => <DataGrid columns={3} minContentColumns={[0]} cellVerticalAlignment="top">
      <DataGridRow>
        <DataGridHeadCell />
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Notes</DataGridHeadCell>
      </DataGridRow>
      {items.map(item => <DataGridRow key={item.id}>
          <DataGridCheckboxCell>
            <Checkbox aria-label={\`Select \${item.name}\`} />
          </DataGridCheckboxCell>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>
            This cell has multiple lines of content to make the row tall enough to demonstrate that the checkbox remains
            vertically centered even when the grid is configured to align cell content to the top.
          </DataGridCell>
        </DataGridRow>)}
    </DataGrid>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Disabled`,`AlwaysCentered`]}))();export{S as AlwaysCentered,b as Default,x as Disabled,C as __namedExportsOrder,v as default};