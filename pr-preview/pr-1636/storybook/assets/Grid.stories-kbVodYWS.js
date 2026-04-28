import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./GridRow.component-CGrpR0UJ.js";import{t as r}from"./GridColumn.component-CiTSxuXu.js";e();var i=t(),a={"--grid-column-flex-grow":`1`,"--grid-column-flex-shrink":`0`,"--grid-column-flex-basis":`0`,"--grid-column-default-width":`auto`},o=({auto:e=!1,children:t,className:n=``,...r})=>{let o=e?a:{};return(0,i.jsx)(`div`,{className:`juno-grid ${n}`,style:o,...r,children:t})};try{o.displayName=`Grid`,o.__docgenInfo={description:"The `Grid` component establishes a customizable grid layout, enabling\nresponsive design. It collaborates with `GridColumn` and `GridRow` for\nflexible arrangement of content.",displayName:`Grid`,props:{auto:{defaultValue:{value:`false`},description:`Controls whether columns should auto-size.
If true, this will override the default 12-column grid layout.`,name:`auto`,required:!1,type:{name:`boolean`}},children:{defaultValue:null,description:`Elements to be rendered within the grid.`,name:`children`,required:!1,type:{name:`ReactNode`}},className:{defaultValue:{value:``},description:`Additional CSS classes to apply to the grid for custom styling.`,name:`className`,required:!1,type:{name:`string`}}}}}catch{}var s={title:`Layout/Grid/Grid`,component:o,argTypes:{children:{control:!1}},decorators:[e=>(0,i.jsx)(`div`,{className:`juno-container jn:px-6 jn:py-6`,children:(0,i.jsx)(e,{})})],parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}},render:e=>(0,i.jsx)(o,{...e,className:`jn:bg-juno-blue-3 jn:text-juno-grey-blue ${e.className||``}`})},c={parameters:{docs:{description:{story:"By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`."}}},args:{children:[(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`})]},`1`),(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{cols:3,children:`Column cols-3`}),(0,i.jsx)(r,{cols:6,children:`Column cols-6`}),(0,i.jsx)(r,{cols:2,children:`Column cols-2`})]},`2`)]}},l={parameters:{docs:{description:{story:"By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size."}}},args:{auto:!0,children:[(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`})]},`1`),(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`})]},`2`),(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{children:`Column`})]},`3`)]}},u={args:{children:(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{auto:!0,children:`Auto Column`}),(0,i.jsx)(r,{width:10,children:`Column 10%`}),(0,i.jsx)(r,{cols:3,children:`Column cols-3`})]})}},d={args:{auto:!0,children:(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{children:`Column`}),(0,i.jsx)(r,{auto:!0,children:`Auto Column`}),(0,i.jsx)(r,{width:10,children:`Column 10%`}),(0,i.jsx)(r,{cols:3,children:`Column cols-3`})]})}},f={args:{children:(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{cols:3,children:`Column cols-3`}),(0,i.jsx)(r,{cols:9,children:(0,i.jsx)(o,{children:(0,i.jsxs)(n,{children:[(0,i.jsx)(r,{width:33.333333,className:`bg-juno-blue-2`,children:`Nested Column 33.333333%`}),(0,i.jsx)(r,{width:66.666666,className:`bg-juno-blue-2`,children:`Nested Column 66.666666%`})]})})})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    auto: true,
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Auto`,`MixedGrid`,`MixedAutoGrid`,`NestedGrid`];export{l as Auto,c as Default,d as MixedAutoGrid,u as MixedGrid,f as NestedGrid,p as __namedExportsOrder,s as default};