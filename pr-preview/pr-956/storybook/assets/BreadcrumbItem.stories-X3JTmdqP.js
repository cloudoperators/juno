import{j as T}from"./iframe-BwHZHiNN.js";import{K as D}from"./Icon.component-BXLuVCz1.js";import{B as v}from"./BreadcrumbItem.component-dBt3I99e.js";const e=A=>T.jsx(v,{...A}),x=Object.keys(D),E={title:"Components/Breadcrumb/BreadcrumbItem",component:v,argTypes:{icon:{options:x,control:{type:"select"}},children:{control:!1}}},r={render:e,parameters:{docs:{description:{story:"A default breadcrumb item"}}},args:{label:"Breadcrumb Item"}},a={render:e,parameters:{docs:{description:{story:"Pass any available icon name to render an additional icon for the item."}}},args:{icon:"place",label:"Breadcrumb Item with Icon"}},n={render:e,parameters:{docs:{description:{story:"An active item represents the current page."}}},args:{label:"Active Breadcrumb Item",active:!0}},t={render:e,parameters:{docs:{description:{story:"A disabled breadcrumb item."}}},args:{label:"Disabled Breadcrumb Item",disabled:!0}},s={render:e,parameters:{docs:{description:{story:"Typically the first item in a breadcrumb."}}},args:{label:"",icon:"home"}};var o,c,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A default breadcrumb item"
      }
    }
  },
  args: {
    label: "Breadcrumb Item"
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Pass any available icon name to render an additional icon for the item."
      }
    }
  },
  args: {
    icon: "place",
    label: "Breadcrumb Item with Icon"
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,b;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An active item represents the current page."
      }
    }
  },
  args: {
    label: "Active Breadcrumb Item",
    active: true
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,g,I;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A disabled breadcrumb item."
      }
    }
  },
  args: {
    label: "Disabled Breadcrumb Item",
    disabled: true
  }
}`,...(I=(g=t.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,h,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Typically the first item in a breadcrumb."
      }
    }
  },
  args: {
    label: "",
    icon: "home"
  }
}`,...(B=(h=s.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const O=["Default","WithIcon","Active","Disabled","Home"];export{n as Active,r as Default,t as Disabled,s as Home,a as WithIcon,O as __namedExportsOrder,E as default};
