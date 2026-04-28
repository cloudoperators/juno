import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Icon.component-hvX4Q9Gp.js";import"./Icon-DLrP9JFG.js";import{t as n}from"./ToggleButton.component-DWiDfyL8.js";import"react";var r=e(),i={title:`Components/ToggleButton`,component:n,argTypes:{options:{control:{type:`object`}},value:{control:{type:`text`}},disabled:{control:`boolean`,description:`Whether the button is disabled.`},renderLabel:{control:!1},onChange:{action:`toggleChanged`},variant:{control:{type:`select`,options:[`primary`,`default`,`primary-danger`,`subdued`]},description:`Variant styling for the button.`}}},a={args:{options:[`Option 1`,`Option 2`,`Option 3`],value:`Option 1`,onChange:e=>console.log(`Changed to:`,e)},parameters:{docs:{description:{story:`Default ToggleButton cycling through three options.`}}}},o={args:{options:[{value:`Theme 1`,label:`Light Theme`},{value:`Theme 2`,label:`Dark Theme`},{value:`Theme 3`,label:`Colorful Theme`}],value:`Theme 1`,onChange:e=>console.log(`Theme changed to:`,e)},parameters:{docs:{description:{story:`ToggleButton using options with value-label objects.`}}}},s={args:{options:[`sortShortWideArrowUp`,`sortShortWideArrowDown`],value:`sortShortWideArrowDown`,onChange:e=>console.log(`Changed to:`,e),renderLabel:e=>(0,r.jsx)(t,{icon:e,size:24})},parameters:{docs:{description:{story:`ToggleButton that uses renderLabel to render icons based on toggle value. Note: For sorting, you can use the SortButton component.`}}}},c={args:{options:[`Option 1`,`Option 2`,`Option 3`],value:`Option 1`,disabled:!0,onChange:e=>console.log(`Attempted change to:`,e)},parameters:{docs:{description:{story:`ToggleButton in a disabled state, showing initial option.`}}}},l={args:{options:[`Option A`,`Option B`,`Option C`],value:`Option A`,variant:`primary`,onChange:e=>console.log(`Changed to:`,e)},parameters:{docs:{description:{story:`ToggleButton rendered with primary variant styling.`}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    onChange: value => console.log("Changed to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "Default ToggleButton cycling through three options."
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "Theme 1",
      label: "Light Theme"
    }, {
      value: "Theme 2",
      label: "Dark Theme"
    }, {
      value: "Theme 3",
      label: "Colorful Theme"
    }],
    value: "Theme 1",
    onChange: value => console.log("Theme changed to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton using options with value-label objects."
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["sortShortWideArrowUp", "sortShortWideArrowDown"],
    value: "sortShortWideArrowDown",
    onChange: value => console.log("Changed to:", value),
    renderLabel: value => {
      return <Icon icon={value as KnownIcons} size={24} />;
    }
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton that uses renderLabel to render icons based on toggle value. Note: For sorting, you can use the SortButton component."
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    value: "Option 1",
    disabled: true,
    onChange: value => console.log("Attempted change to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton in a disabled state, showing initial option."
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    options: ["Option A", "Option B", "Option C"],
    value: "Option A",
    variant: "primary",
    onChange: value => console.log("Changed to:", value)
  },
  parameters: {
    docs: {
      description: {
        story: "ToggleButton rendered with primary variant styling."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};var u=[`Default`,`WithObjectOptions`,`IconRendering`,`Disabled`,`PrimaryVariant`];export{a as Default,c as Disabled,s as IconRendering,l as PrimaryVariant,o as WithObjectOptions,u as __namedExportsOrder,i as default};