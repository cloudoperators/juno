import{j as e}from"./iframe-357CoNpC.js";import{a as c,N as b}from"./NativeSelectOptionGroup.component-Czrv3z05.js";import{N as a}from"./NativeSelectOption.component-BX2dvNz2.js";import"./Icon.component-BneaDTI7.js";import"./Spinner.component-Ce7rUs3m.js";const u=({children:d,...m})=>e.jsx(b,{children:e.jsx(c,{...m,children:d})}),x={title:"Forms/NativeSelect/NativeSelectOptionGroup",component:c,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}}}},t={render:u,args:{label:"My option group",children:[e.jsx(a,{value:"1",label:"Option 1"},0),e.jsx(a,{value:"2",label:"Option 2"},1),e.jsx(a,{value:"3",label:"Option 3"},2)]}},l={render:u,args:{label:"My disabled option group",children:[e.jsx(a,{value:"1",label:"Option 1"},0),e.jsx(a,{value:"2",label:"Option 2"},1),e.jsx(a,{value:"3",label:"Option 3"},2)],disabled:!0}};var o,r,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />]
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,p,s;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: "My disabled option group",
    children: [<NativeSelectOption key={0} value="1" label="Option 1" />, <NativeSelectOption key={1} value="2" label="Option 2" />, <NativeSelectOption key={2} value="3" label="Option 3" />],
    disabled: true
  }
}`,...(s=(p=l.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const g=["Default","Disabled"];export{t as Default,l as Disabled,g as __namedExportsOrder,x as default};
