import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-DN3cvKNT.js";import{a as n,D as p,b as u}from"./DataGridCell.component-BS-t-8aX.js";import{Default as D}from"./DataGridCell.stories-CQNedERG.js";import"./index-yBjzXJbu.js";const i=5,w={title:"Components/DataGrid/DataGridRow",component:n,argTypes:{items:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[a=>o.jsx(p,{columns:i,children:a()})],parameters:{docs:{source:{excludeDecorators:!1}}}},f=({items:a,...d})=>o.jsx(n,{...d,children:a.map((m,c)=>l.createElement(u,{...m,key:`${c}`}))}),r={render:f,parameters:{docs:{description:{story:"Juno DataGridRow for use in DataGrid"}}},args:{items:Array(i).fill({...D.args})}};var e,t,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,w as default};
