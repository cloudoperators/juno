import{g as e}from"./iframe-DmqlBy6I.js";import{n as t}from"./Icon.component-Bc6oc1sZ.js";import{t as n}from"./BreadcrumbItem.component-DzUDELOD.js";import"react";var r=e(),i=e=>(0,r.jsx)(n,{...e}),a={title:`Components/Breadcrumb/BreadcrumbItem`,component:n,argTypes:{icon:{options:Object.keys(t),control:{type:`select`}},children:{control:!1}}},o={render:i,parameters:{docs:{description:{story:`A default breadcrumb item`}}},args:{label:`Breadcrumb Item`}},s={render:i,parameters:{docs:{description:{story:`Pass any available icon name to render an additional icon for the item.`}}},args:{icon:`place`,label:`Breadcrumb Item with Icon`}},c={render:i,parameters:{docs:{description:{story:`An active item represents the current page.`}}},args:{label:`Active Breadcrumb Item`,active:!0}},l={render:i,parameters:{docs:{description:{story:`A disabled breadcrumb item.`}}},args:{label:`Disabled Breadcrumb Item`,disabled:!0}},u={render:i,parameters:{docs:{description:{story:`Typically the first item in a breadcrumb.`}}},args:{label:``,icon:`home`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`WithIcon`,`Active`,`Disabled`,`Home`];export{c as Active,o as Default,l as Disabled,u as Home,s as WithIcon,d as __namedExportsOrder,a as default};