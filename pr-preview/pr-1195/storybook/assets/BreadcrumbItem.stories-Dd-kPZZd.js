import{j as m}from"./iframe-D1QQ5FZR.js";import{K as i}from"./Icon.component-D-_Ychuv.js";import{B as o}from"./BreadcrumbItem.component-OMuDuxA1.js";import"./preload-helper-PPVm8Dsz.js";const e=c=>m.jsx(o,{...c}),d=Object.keys(i),y={title:"Components/Breadcrumb/BreadcrumbItem",component:o,argTypes:{icon:{options:d,control:{type:"select"}},children:{control:!1}}},r={render:e,parameters:{docs:{description:{story:"A default breadcrumb item"}}},args:{label:"Breadcrumb Item"}},a={render:e,parameters:{docs:{description:{story:"Pass any available icon name to render an additional icon for the item."}}},args:{icon:"place",label:"Breadcrumb Item with Icon"}},n={render:e,parameters:{docs:{description:{story:"An active item represents the current page."}}},args:{label:"Active Breadcrumb Item",active:!0}},t={render:e,parameters:{docs:{description:{story:"A disabled breadcrumb item."}}},args:{label:"Disabled Breadcrumb Item",disabled:!0}},s={render:e,parameters:{docs:{description:{story:"Typically the first item in a breadcrumb."}}},args:{label:"",icon:"home"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const g=["Default","WithIcon","Active","Disabled","Home"];export{n as Active,r as Default,t as Disabled,s as Home,a as WithIcon,g as __namedExportsOrder,y as default};
