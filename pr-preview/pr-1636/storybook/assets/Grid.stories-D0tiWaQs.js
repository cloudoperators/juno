import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./GridRow.component-BIzJcaw5.js";import{t as n}from"./GridColumn.component-Bjxl5bOl.js";import"react";var r=e(),i={"--grid-column-flex-grow":`1`,"--grid-column-flex-shrink":`0`,"--grid-column-flex-basis":`0`,"--grid-column-default-width":`auto`},a=({auto:e=!1,children:t,className:n=``,...a})=>{let o=e?i:{};return(0,r.jsx)(`div`,{className:`juno-grid ${n}`,style:o,...a,children:t})};try{a.displayName=`Grid`,a.__docgenInfo={description:"The `Grid` component establishes a customizable grid layout, enabling\nresponsive design. It collaborates with `GridColumn` and `GridRow` for\nflexible arrangement of content.",displayName:`Grid`,props:{auto:{defaultValue:{value:`false`},description:`Controls whether columns should auto-size.
If true, this will override the default 12-column grid layout.`,name:`auto`,required:!1,type:{name:`boolean`}},children:{defaultValue:null,description:`Elements to be rendered within the grid.`,name:`children`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the grid for custom styling.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var o={title:`Layout/Grid/Grid`,component:a,argTypes:{children:{control:!1}},decorators:[e=>(0,r.jsx)(`div`,{className:`juno-container jn:px-6 jn:py-6`,children:(0,r.jsx)(e,{})})],parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}},render:e=>(0,r.jsx)(a,{...e,className:`jn:bg-juno-blue-3 jn:text-juno-grey-blue ${e.className||``}`})},s={parameters:{docs:{description:{story:"By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`."}}},args:{children:[(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`})]},`1`),(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{cols:3,children:`Column cols-3`}),(0,r.jsx)(n,{cols:6,children:`Column cols-6`}),(0,r.jsx)(n,{cols:2,children:`Column cols-2`})]},`2`)]}},c={parameters:{docs:{description:{story:"By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size."}}},args:{auto:!0,children:[(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`})]},`1`),(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`})]},`2`),(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{children:`Column`})]},`3`)]}},l={args:{children:(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{auto:!0,children:`Auto Column`}),(0,r.jsx)(n,{width:10,children:`Column 10%`}),(0,r.jsx)(n,{cols:3,children:`Column cols-3`})]})}},u={args:{auto:!0,children:(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{children:`Column`}),(0,r.jsx)(n,{auto:!0,children:`Auto Column`}),(0,r.jsx)(n,{width:10,children:`Column 10%`}),(0,r.jsx)(n,{cols:3,children:`Column cols-3`})]})}},d={args:{children:(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{cols:3,children:`Column cols-3`}),(0,r.jsx)(n,{cols:9,children:(0,r.jsx)(a,{children:(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{width:33.333333,className:`bg-juno-blue-2`,children:`Nested Column 33.333333%`}),(0,r.jsx)(n,{width:66.666666,className:`bg-juno-blue-2`,children:`Nested Column 66.666666%`})]})})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    auto: true,
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Auto`,`MixedGrid`,`MixedAutoGrid`,`NestedGrid`];export{c as Auto,s as Default,u as MixedAutoGrid,l as MixedGrid,d as NestedGrid,f as __namedExportsOrder,o as default};