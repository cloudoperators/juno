import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-_NdD0HGa.js";import{t as r}from"./Icon.component-IKFE1svB.js";import{t as i}from"./Icon-sWVUtP_n.js";import{n as a,t as o}from"./SortButton.component-5Zg3ZhVq.js";var s,c,l,u,d,f;e((()=>{n(),a(),i(),s=t(),c={title:`Components/SortButton`,component:o,argTypes:{order:{control:{type:`radio`,options:[`asc`,`desc`]}},disabled:{control:`boolean`},onChange:{action:`orderChanged`}}},l={args:{order:`desc`,onChange:e=>console.log(`Sort order changed to:`,e)}},u={args:{order:`asc`,disabled:!0,onChange:e=>console.log(`Attempted to change sort order to:`,e)},parameters:{docs:{description:{story:`SortButton in a disabled state, showing the initial sorting direction.`}}}},d={args:{order:`asc`,options:[{value:`asc`,label:(0,s.jsx)(r,{icon:`expandMore`})},{value:`desc`,label:(0,s.jsx)(r,{icon:`expandLess`})}],onChange:e=>console.log(`Sort order changed to:`,e)},parameters:{docs:{description:{story:`SortButton with custom icons. Note: This is an example of passing custom icons. These specific icons are not recommended foor sorting.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    order: "desc",
    onChange: order => console.log("Sort order changed to:", order)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    order: "asc",
    disabled: true,
    onChange: order => console.log("Attempted to change sort order to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton in a disabled state, showing the initial sorting direction."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    order: "asc",
    options: [{
      value: "asc",
      label: <Icon icon="expandMore" />
    }, {
      value: "desc",
      label: <Icon icon="expandLess" />
    }],
    onChange: order => console.log("Sort order changed to:", order)
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton with custom icons. Note: This is an example of passing custom icons. These specific icons are not recommended foor sorting."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Disabled`,`CustomOptions`]}))();export{d as CustomOptions,l as Default,u as Disabled,f as __namedExportsOrder,c as default};