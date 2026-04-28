import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{n}from"./Icon.component-BYUQ4r57.js";import{t as r}from"./BreadcrumbItem.component-DUt-yOMe.js";e();var i=t(),a=e=>(0,i.jsx)(r,{...e}),o={title:`Components/Breadcrumb/BreadcrumbItem`,component:r,argTypes:{icon:{options:Object.keys(n),control:{type:`select`}},children:{control:!1}}},s={render:a,parameters:{docs:{description:{story:`A default breadcrumb item`}}},args:{label:`Breadcrumb Item`}},c={render:a,parameters:{docs:{description:{story:`Pass any available icon name to render an additional icon for the item.`}}},args:{icon:`place`,label:`Breadcrumb Item with Icon`}},l={render:a,parameters:{docs:{description:{story:`An active item represents the current page.`}}},args:{label:`Active Breadcrumb Item`,active:!0}},u={render:a,parameters:{docs:{description:{story:`A disabled breadcrumb item.`}}},args:{label:`Disabled Breadcrumb Item`,disabled:!0}},d={render:a,parameters:{docs:{description:{story:`Typically the first item in a breadcrumb.`}}},args:{label:``,icon:`home`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`WithIcon`,`Active`,`Disabled`,`Home`];export{l as Active,s as Default,u as Disabled,d as Home,c as WithIcon,f as __namedExportsOrder,o as default};