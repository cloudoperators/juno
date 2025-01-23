import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{a as c,N as b}from"./NativeSelectOptionGroup.component-lGqmfRR3.js";import{N as t}from"./NativeSelectOption.component-0sDOiaXx.js";import"./index-DysCNOs_.js";import"./Icon.component-CNx4B0MY.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-BMWAXT0K.js";const j={title:"Forms/NativeSelect/NativeSelectOptionGroup",component:c,argTypes:{options:{table:{disable:!0}},children:{control:!1,table:{type:{summary:"ReactNode"}}}}},u=({children:d,...m})=>e.jsx(b,{children:e.jsx(c,{...m,children:d})}),a={render:u,args:{label:"My option group",children:[e.jsx(t,{value:"1",label:"Option 1"},0),e.jsx(t,{value:"2",label:"Option 2"},1),e.jsx(t,{value:"3",label:"Option 3"},2)]}},l={render:u,args:{label:"My disabled option group",children:[e.jsx(t,{value:"1",label:"Option 1"},0),e.jsx(t,{value:"2",label:"Option 2"},1),e.jsx(t,{value:"3",label:"Option 3"},2)],disabled:!0}};var o,r,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />]
  }
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var n,p,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My disabled option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />],
    disabled: true
  }
}`,...(s=(p=l.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const f=["Default","Disabled"];export{a as Default,l as Disabled,f as __namedExportsOrder,j as default};
