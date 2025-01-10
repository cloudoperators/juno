import{j as p}from"./jsx-runtime-D6fbYt3N.js";import{r as E}from"./index-DysCNOs_.js";import{P as _}from"./index-BHU3UH5b.js";import{D as x,a,S as r,A as e,P as s,G as o,b as z}from"./DataListRow.stories-BZEHoUj3.js";import{D as k}from"./DataListCell.component-CgEfEuwj.js";import"./DataListCheckboxCell.component-BYyVpk8Y.js";import"./FormHint.component-BiIM_CZV.js";import"./Icon.component-BXxTB2S-.js";import"./widgets-BR6-ubtP.js";import"./DataListCell.stories-LlUDq-4Q.js";const Q={title:"Deprecated/DataList/DataList",component:x,argTypes:{items:{table:{disable:!0}},children:{control:!1}},parameters:{docs:{description:{component:"DataList is deprecated and will be removed. Please use DataGrid instead."}}}},t=({items:A,...T})=>p.jsx(x,{...T,children:A.map((F,g)=>p.jsx(z,{children:F.items.map(($,j)=>E.createElement(k,{...$,key:`${g}_${j}`}))},`${g}`))});t.propTypes={items:_.array};const n={render:t,parameters:{docs:{description:{story:"Default Juno DataList for displaying data"}}},args:{items:[{...a.args},{...a.args},{...a.args},{...a.args},{...a.args}]}},i={render:t,parameters:{docs:{description:{story:"Selectable Juno DataList for displaying and selecting data"}}},args:{selectable:!0,items:[{...r.args},{...r.args},{...r.args},{...r.args},{...r.args}]}},d={render:t,parameters:{docs:{description:{story:"Juno DataList with one column set to 'auto' to maximize its width"}}},args:{items:[{...e.args},{...e.args},{...e.args},{...e.args},{...e.args}]}},c={render:t,parameters:{docs:{description:{story:"Juno DataList with percentage-based column widths"}}},args:{items:[{...s.args},{...s.args},{...s.args},{...s.args},{...s.args}]}},m={render:t,parameters:{docs:{description:{story:"Juno DataList with grid column-based column widths"}}},args:{items:[{...o.args},{...o.args},{...o.args},{...o.args},{...o.args}]}};var l,u,D;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Default Juno DataList for displaying data"
      }
    }
  },
  args: {
    items: [{
      ...DataListRowStory.args
    }, {
      ...DataListRowStory.args
    }, {
      ...DataListRowStory.args
    }, {
      ...DataListRowStory.args
    }, {
      ...DataListRowStory.args
    }]
  }
}`,...(D=(u=n.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var y,L,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Selectable Juno DataList for displaying and selecting data"
      }
    }
  },
  args: {
    selectable: true,
    items: [{
      ...SelectableDataListRowStory.args
    }, {
      ...SelectableDataListRowStory.args
    }, {
      ...SelectableDataListRowStory.args
    }, {
      ...SelectableDataListRowStory.args
    }, {
      ...SelectableDataListRowStory.args
    }]
  }
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var w,h,R;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataList with one column set to 'auto' to maximize its width"
      }
    }
  },
  args: {
    items: [{
      ...AutoWidthDataListRowStory.args
    }, {
      ...AutoWidthDataListRowStory.args
    }, {
      ...AutoWidthDataListRowStory.args
    }, {
      ...AutoWidthDataListRowStory.args
    }, {
      ...AutoWidthDataListRowStory.args
    }]
  }
}`,...(R=(h=d.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var b,f,P;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataList with percentage-based column widths"
      }
    }
  },
  args: {
    items: [{
      ...PercentageWidthsDataListRowStory.args
    }, {
      ...PercentageWidthsDataListRowStory.args
    }, {
      ...PercentageWidthsDataListRowStory.args
    }, {
      ...PercentageWidthsDataListRowStory.args
    }, {
      ...PercentageWidthsDataListRowStory.args
    }]
  }
}`,...(P=(f=c.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var W,G,J;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataList with grid column-based column widths"
      }
    }
  },
  args: {
    items: [{
      ...GridFittedDataListRowStory.args
    }, {
      ...GridFittedDataListRowStory.args
    }, {
      ...GridFittedDataListRowStory.args
    }, {
      ...GridFittedDataListRowStory.args
    }, {
      ...GridFittedDataListRowStory.args
    }]
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const U=["Default","Selectable","Auto","Percentage","GridFitted"];export{d as Auto,n as Default,m as GridFitted,c as Percentage,i as Selectable,U as __namedExportsOrder,Q as default};
