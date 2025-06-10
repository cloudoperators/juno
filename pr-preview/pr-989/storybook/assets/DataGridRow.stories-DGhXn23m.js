import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DI7CEG0L.js";import{a as n,D as p,b as u}from"./DataGridCell.component-BVOaDldV.js";import{Default as D}from"./DataGridCell.stories-CK4UrYFB.js";const i=5,g={title:"Components/DataGrid/DataGridRow",component:n,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[a=>o.jsx(p,{columns:i,children:a()})],parameters:{docs:{source:{excludeDecorators:!1}}}},f=({items:a,...d})=>o.jsx(n,{...d,children:a.map((c,l)=>m.createElement(u,{...c,key:`${l}`}))}),r={render:f,parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}},args:{items:Array(i).fill({...D.args})}};var e,t,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridRow for use in DataGrid"
      }
    }
  },
  args: {
    items: Array(columns).fill({
      ...DataGridCellStory.args
    })
  }
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const w=["Default"];export{r as Default,w as __namedExportsOrder,g as default};
