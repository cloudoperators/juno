import"./rolldown-runtime-BM3Ffeng.js";import{t as e}from"./react-DC78jhTx.js";import{g as t}from"./iframe-qPHz0liX.js";import{t as n}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";import{t as r}from"./ToggleButton.component-BfY7GHl0.js";e();var i=t(),a={title:`Components/ToggleButton`,component:r,argTypes:{options:{control:{type:`object`}},value:{control:{type:`text`}},disabled:{control:`boolean`,description:`Whether the button is disabled.`},renderLabel:{control:!1},onChange:{action:`toggleChanged`},variant:{control:{type:`select`,options:[`primary`,`default`,`primary-danger`,`subdued`]},description:`Variant styling for the button.`}}},o={args:{options:[`Option 1`,`Option 2`,`Option 3`],value:`Option 1`,onChange:e=>console.log(`Changed to:`,e)},parameters:{docs:{description:{story:`Default ToggleButton cycling through three options.`}}}},s={args:{options:[{value:`Theme 1`,label:`Light Theme`},{value:`Theme 2`,label:`Dark Theme`},{value:`Theme 3`,label:`Colorful Theme`}],value:`Theme 1`,onChange:e=>console.log(`Theme changed to:`,e)},parameters:{docs:{description:{story:`ToggleButton using options with value-label objects.`}}}},c={args:{options:[`sortShortWideArrowUp`,`sortShortWideArrowDown`],value:`sortShortWideArrowDown`,onChange:e=>console.log(`Changed to:`,e),renderLabel:e=>(0,i.jsx)(n,{icon:e,size:24})},parameters:{docs:{description:{story:`ToggleButton that uses renderLabel to render icons based on toggle value. Note: For sorting, you can use the SortButton component.`}}}},l={args:{options:[`Option 1`,`Option 2`,`Option 3`],value:`Option 1`,disabled:!0,onChange:e=>console.log(`Attempted change to:`,e)},parameters:{docs:{description:{story:`ToggleButton in a disabled state, showing initial option.`}}}},u={args:{options:[`Option A`,`Option B`,`Option C`],value:`Option A`,variant:`primary`,onChange:e=>console.log(`Changed to:`,e)},parameters:{docs:{description:{story:`ToggleButton rendered with primary variant styling.`}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`WithObjectOptions`,`IconRendering`,`Disabled`,`PrimaryVariant`];export{o as Default,l as Disabled,c as IconRendering,u as PrimaryVariant,s as WithObjectOptions,d as __namedExportsOrder,a as default};