import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{G as l}from"./GridRow.component-CAF6p-fm.js";import{G as o}from"./GridColumn.component-DDrUSLWb.js";import"./index-yBjzXJbu.js";const T={"--grid-column-flex-grow":"1","--grid-column-flex-shrink":"0","--grid-column-flex-basis":"0","--grid-column-default-width":"auto"},e=({auto:r=!1,children:_,className:A="",...v})=>{const S=r?T:{};return n.jsx("div",{className:`juno-grid ${A}`,style:S,...v,children:_})};try{e.displayName="Grid",e.__docgenInfo={description:`A general-use grid component.
Used in conjunction with GridColumn and GridRow components to create a flexible grid layout.`,displayName:"Grid",props:{auto:{defaultValue:{value:"false"},description:`Controls whether columns should auto-size.
If true, this will override the default 12-column grid layout.`,name:"auto",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Elements to be rendered within the grid.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the grid for custom styling.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Layout/Grid/Grid",component:e,argTypes:{children:{control:!1}},decorators:[r=>n.jsx("div",{className:"juno-container jn:px-6 jn:py-6",children:n.jsx(r,{})})]},i=r=>n.jsx(e,{...r,className:`jn:bg-juno-blue-3 jn:text-juno-grey-blue ${r.className||""}`}),d={render:i,parameters:{docs:{description:{story:"By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`."}}},args:{children:[n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"1"),n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{cols:3,children:"Column cols-3"}),n.jsx(o,{cols:6,children:"Column cols-6"}),n.jsx(o,{cols:2,children:"Column cols-2"})]},"2")]}},u={render:i,parameters:{docs:{description:{story:"By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size."}}},args:{auto:!0,children:[n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"1"),n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"2"),n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"}),n.jsx(o,{children:"Column"})]},"3")]}},s={render:i,args:{children:n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{auto:!0,children:"Auto Column"}),n.jsx(o,{width:10,children:"Column 10%"}),n.jsx(o,{cols:3,children:"Column cols-3"})]})}},m={render:i,args:{auto:!0,children:n.jsxs(l,{children:[n.jsx(o,{children:"Column"}),n.jsx(o,{auto:!0,children:"Auto Column"}),n.jsx(o,{width:10,children:"Column 10%"}),n.jsx(o,{cols:3,children:"Column cols-3"})]})}},c={render:i,args:{children:n.jsxs(l,{children:[n.jsx(o,{cols:3,children:"Column cols-3"}),n.jsx(o,{cols:9,children:n.jsx(e,{children:n.jsxs(l,{children:[n.jsx(o,{width:33.333333,className:"bg-juno-blue-2",children:"Nested Column 33.333333%"}),n.jsx(o,{width:66.666666,className:"bg-juno-blue-2",children:"Nested Column 66.666666%"})]})})})]})}};var a,t,C;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: Template,
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
}`,...(C=(t=d.parameters)==null?void 0:t.docs)==null?void 0:C.source}}};var G,h,j;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
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
}`,...(j=(h=u.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var p,x,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,y,f;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    auto: true,
    children: <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
  }
}`,...(f=(y=m.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,R,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
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
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const E=["Default","Auto","MixedGrid","MixedAutoGrid","NestedGrid"];export{u as Auto,d as Default,m as MixedAutoGrid,s as MixedGrid,c as NestedGrid,E as __namedExportsOrder,M as default};
