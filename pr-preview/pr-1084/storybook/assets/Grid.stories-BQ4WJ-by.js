import{j as n}from"./iframe-DAE5LCsn.js";import{G as l}from"./GridRow.component-BvD90l9A.js";import{G as o}from"./GridColumn.component-Cb4LqMOZ.js";const G={"--grid-column-flex-grow":"1","--grid-column-flex-shrink":"0","--grid-column-flex-basis":"0","--grid-column-default-width":"auto"},i=({auto:r=!1,children:c,className:a="",...t})=>{const C=r?G:{};return n.jsx("div",{className:`juno-grid ${a}`,style:C,...t,children:c})};try{i.displayName="Grid",i.__docgenInfo={description:`A general-use grid component.
Used in conjunction with GridColumn and GridRow components to create a flexible grid layout.`,displayName:"Grid",props:{auto:{defaultValue:{value:"false"},description:`Controls whether columns should auto-size.
If true, this will override the default 12-column grid layout.`,name:"auto",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elements to be rendered within the grid.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the grid for custom styling.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const p={title:"Layout/Grid/Grid",component:i,argTypes:{children:{control:!1}},decorators:[r=>n.jsx("div",{className:"juno-container jn:px-6 jn:py-6",children:n.jsx(r,{})})],render:r=>n.jsx(i,{...r,className:`jn:bg-juno-blue-3 jn:text-juno-grey-blue ${r.className||""}`})},e={parameters:{docs:{description:{story:"By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`."}}},args:{children:[n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"1"),n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{cols:3,children:"Column cols-3"}),n.jsx(o,{cols:6,children:"Column cols-6"}),n.jsx(o,{cols:2,children:"Column cols-2"})]},"2")]}},u={parameters:{docs:{description:{story:"By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size."}}},args:{auto:!0,children:[n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"1"),n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"2"),n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"3")]}},d={args:{children:n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{auto:!0,children:"Auto Column"}),n.jsx(o,{width:10,children:"Column 10%"}),n.jsx(o,{cols:3,children:"Column cols-3"})]})}},s={args:{auto:!0,children:n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{auto:!0,children:"Auto Column"}),n.jsx(o,{width:10,children:"Column 10%"}),n.jsx(o,{cols:3,children:"Column cols-3"})]})}},m={args:{children:n.jsxs(l,{children:[n.jsx(o,{cols:3,children:"Column cols-3"}),n.jsx(o,{cols:9,children:n.jsx(i,{children:n.jsxs(l,{children:[n.jsx(o,{width:33.333333,className:"bg-juno-blue-2",children:"Nested Column 33.333333%"}),n.jsx(o,{width:66.666666,className:"bg-juno-blue-2",children:"Nested Column 66.666666%"})]})})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing \`cols={n}\`."
      }
    }
  },
  args: {
    children: [<GridRow key="1">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>, <GridRow key="2">
        <GridColumn>Column</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
        <GridColumn cols={6}>Column cols-6</GridColumn>
        <GridColumn cols={2}>Column cols-2</GridColumn>
      </GridRow>]
  }
}`,...e.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "By passing \`auto\` to the grid, all of its contained columns will automatically size to share available space equally. Columns with \`cols={n}\` will switch their behaviour to auto-size."
      }
    }
  },
  args: {
    auto: true,
    children: [<GridRow key="1">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>, <GridRow key="2">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>, <GridRow key="3">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>]
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    auto: true,
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <GridRow>
        <GridColumn cols={3}>Column cols-3</GridColumn>
        <GridColumn cols={9}>
          <Grid>
            <GridRow>
              <GridColumn width={33.333333} className="bg-juno-blue-2">
                Nested Column 33.333333%
              </GridColumn>
              <GridColumn width={66.666666} className="bg-juno-blue-2">
                Nested Column 66.666666%
              </GridColumn>
            </GridRow>
          </Grid>
        </GridColumn>
      </GridRow>
  }
}`,...m.parameters?.docs?.source}}};const g=["Default","Auto","MixedGrid","MixedAutoGrid","NestedGrid"];export{u as Auto,e as Default,s as MixedAutoGrid,d as MixedGrid,m as NestedGrid,g as __namedExportsOrder,p as default};
