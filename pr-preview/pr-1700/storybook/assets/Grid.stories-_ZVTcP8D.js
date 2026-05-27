import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-DRsum30A.js";import{n as r,t as i}from"./GridRow.component-BZZZPT-A.js";import{n as a,t as o}from"./GridColumn.component-C6xNhYFR.js";var s,c,l,u=e((()=>{n(),s=t(),c={"--grid-column-flex-grow":`1`,"--grid-column-flex-shrink":`0`,"--grid-column-flex-basis":`0`,"--grid-column-default-width":`auto`},l=({auto:e=!1,children:t,className:n=``,...r})=>{let i=e?c:{};return(0,s.jsx)(`div`,{className:`juno-grid ${n}`,style:i,...r,children:t})};try{l.displayName=`Grid`,l.__docgenInfo={description:"The `Grid` component establishes a customizable grid layout, enabling\nresponsive design. It collaborates with `GridColumn` and `GridRow` for\nflexible arrangement of content.",displayName:`Grid`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/Grid/Grid.component.tsx`,methods:[],props:{auto:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/Grid/Grid.component.tsx`,name:`GridProps`}],description:`Controls whether columns should auto-size.
If true, this will override the default 12-column grid layout.`,name:`auto`,parent:{fileName:`ui-components/src/components/Grid/Grid.component.tsx`,name:`GridProps`},required:!1,tags:{default:`false`},type:{name:`boolean`}},children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/Grid/Grid.component.tsx`,name:`GridProps`}],description:`Elements to be rendered within the grid.`,name:`children`,parent:{fileName:`ui-components/src/components/Grid/Grid.component.tsx`,name:`GridProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/Grid/Grid.component.tsx`,name:`GridProps`}],description:`Additional CSS classes to apply to the grid for custom styling.`,name:`className`,parent:{fileName:`ui-components/src/components/Grid/Grid.component.tsx`,name:`GridProps`},required:!1,tags:{default:`""`},type:{name:`string`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/layout-grid-grid--docs
{@link GridProps }`}}}catch{}})),d,f,p,m,h,g,_,v;e((()=>{n(),u(),r(),a(),d=t(),f={title:`Layout/Grid/Grid`,component:l,argTypes:{children:{control:!1}},decorators:[e=>(0,d.jsx)(`div`,{className:`juno-container jn:px-6 jn:py-6`,children:(0,d.jsx)(e,{})})],parameters:{docs:{source:{transform:e=>e.replace(/jn:/g,``)}}},render:e=>(0,d.jsx)(l,{...e,className:`jn:bg-juno-blue-3 jn:text-juno-grey-blue ${e.className||``}`})},p={parameters:{docs:{description:{story:"By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`."}}},args:{children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`})]},`1`),(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{cols:3,children:`Column cols-3`}),(0,d.jsx)(o,{cols:6,children:`Column cols-6`}),(0,d.jsx)(o,{cols:2,children:`Column cols-2`})]},`2`)]}},m={parameters:{docs:{description:{story:"By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size."}}},args:{auto:!0,children:[(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`})]},`1`),(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`})]},`2`),(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{children:`Column`})]},`3`)]}},h={args:{children:(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{auto:!0,children:`Auto Column`}),(0,d.jsx)(o,{width:10,children:`Column 10%`}),(0,d.jsx)(o,{cols:3,children:`Column cols-3`})]})}},g={args:{auto:!0,children:(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{children:`Column`}),(0,d.jsx)(o,{auto:!0,children:`Auto Column`}),(0,d.jsx)(o,{width:10,children:`Column 10%`}),(0,d.jsx)(o,{cols:3,children:`Column cols-3`})]})}},_={args:{children:(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{cols:3,children:`Column cols-3`}),(0,d.jsx)(o,{cols:9,children:(0,d.jsx)(l,{children:(0,d.jsxs)(i,{children:[(0,d.jsx)(o,{width:33.333333,className:`bg-juno-blue-2`,children:`Nested Column 33.333333%`}),(0,d.jsx)(o,{width:66.666666,className:`bg-juno-blue-2`,children:`Nested Column 66.666666%`})]})})})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    auto: true,
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Auto`,`MixedGrid`,`MixedAutoGrid`,`NestedGrid`]}))();export{m as Auto,p as Default,g as MixedAutoGrid,h as MixedGrid,_ as NestedGrid,v as __namedExportsOrder,f as default};