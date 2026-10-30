import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{r as t}from"./react-8KJKb_Eb.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{c as r,i,o as a,r as o,t as s}from"./DataGridHeadCell.component-BP6pcWuy.js";import{n as c,t as l}from"./DataGridHeadCell-CsR1j9SH.js";import{t as u}from"./DataGrid-DFt69Laq.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),u(),c(),o(),l(),d=n(),f={title:`Components/DataGrid/DataGridHeadCell`,component:s,argTypes:{children:{control:!1,table:{type:{summary:`ReactNode`}}},textContain:{control:{type:`select`},options:[`truncate-end`,`truncate-start`,`break-word`,`break-all`,`no-wrap`]}},decorators:[e=>(0,d.jsx)(r,{columns:3,children:(0,d.jsx)(a,{children:(0,d.jsx)(e,{})})})],parameters:{docs:{source:{excludeDecorators:!1}}}},p={parameters:{docs:{description:{story:`Juno DataGridHeadCell for use in DataGrid`}}},args:{children:[`DataGridHeadCell`]}},m={parameters:{docs:{description:{story:'DataGridHeadCell with `nowrap`. **Deprecated** — use `textContain="no-wrap"` instead.'}}},args:{nowrap:!0,children:[`DataGridHeadCell does not wrap`]}},h={parameters:{controls:{disable:!0},actions:{disable:!0},docs:{description:{story:'Use `textContain` to control how a head cell handles text that exceeds its width. The available values mirror those on `DataGridCell`. `"truncate-end"` / `"truncate-start"` clip to one line with an ellipsis; `"break-word"` / `"break-all"` force long strings to wrap; `"no-wrap"` keeps content on one line. The first column has no `textContain` set as a baseline. `textContain` supersedes the deprecated `nowrap` boolean.'}}},decorators:[()=>{let e=`A very long header label that exceeds the available column width`;return(0,d.jsxs)(r,{columns:6,children:[(0,d.jsxs)(a,{children:[(0,d.jsx)(s,{children:e}),(0,d.jsx)(s,{textContain:`truncate-end`,children:e}),(0,d.jsx)(s,{textContain:`truncate-start`,children:e}),(0,d.jsx)(s,{textContain:`break-word`,children:e}),(0,d.jsx)(s,{textContain:`break-all`,children:e}),(0,d.jsx)(s,{textContain:`no-wrap`,children:e})]}),(0,d.jsxs)(a,{children:[(0,d.jsx)(i,{children:`cell`}),(0,d.jsx)(i,{children:`cell`}),(0,d.jsx)(i,{children:`cell`}),(0,d.jsx)(i,{children:`cell`}),(0,d.jsx)(i,{children:`cell`}),(0,d.jsx)(i,{children:`cell`})]})]})}],args:{}},g={parameters:{docs:{description:{story:`Juno DataGridHeadCell with colspan`}}},args:{colSpan:3,children:[`DataGridHeadCell with colspan`]}},_=[`Default`,`NoWrap`,`TextContain`,`ColSpan`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridHeadCell for use in DataGrid"
      }
    }
  },
  args: {
    children: ["DataGridHeadCell"]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DataGridHeadCell with \`nowrap\`. **Deprecated** — use \`textContain="no-wrap"\` instead.'
      }
    }
  },
  args: {
    nowrap: true,
    children: ["DataGridHeadCell does not wrap"]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    docs: {
      description: {
        story: 'Use \`textContain\` to control how a head cell handles text that exceeds its width. The available values mirror those on \`DataGridCell\`. \`"truncate-end"\` / \`"truncate-start"\` clip to one line with an ellipsis; \`"break-word"\` / \`"break-all"\` force long strings to wrap; \`"no-wrap"\` keeps content on one line. The first column has no \`textContain\` set as a baseline. \`textContain\` supersedes the deprecated \`nowrap\` boolean.'
      }
    }
  },
  decorators: [() => {
    const label = "A very long header label that exceeds the available column width";
    return <DataGrid columns={6}>
          <DataGridRow>
            <DataGridHeadCell>{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="truncate-end">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="truncate-start">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="break-word">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="break-all">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="no-wrap">{label}</DataGridHeadCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
          </DataGridRow>
        </DataGrid>;
  }],
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridHeadCell with colspan"
      }
    }
  },
  args: {
    colSpan: 3,
    children: ["DataGridHeadCell with colspan"]
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as ColSpan,p as Default,m as NoWrap,h as TextContain,_ as __namedExportsOrder,f as default};