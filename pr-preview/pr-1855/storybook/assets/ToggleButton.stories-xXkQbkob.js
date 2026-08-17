import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{t as r}from"./Icon.component-NICQ2Jbh.js";import{t as i}from"./Icon-DS0QETwA.js";import{n as a,t as o}from"./ToggleButton.component-s_eA7FrV.js";var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),a(),i(),s=n(),c={title:`Components/ToggleButton`,component:o,argTypes:{options:{control:{type:`object`}},value:{control:{type:`text`}},disabled:{control:`boolean`,description:`Whether the button is disabled.`},renderLabel:{control:!1},onChange:{action:`toggleChanged`},variant:{control:{type:`select`,options:[`primary`,`default`,`primary-danger`,`subdued`]},description:`Variant styling for the button.`}}},l={args:{options:[`Option 1`,`Option 2`,`Option 3`],value:`Option 1`,onChange:e=>console.log(`Changed to:`,e)},parameters:{docs:{description:{story:`Default ToggleButton cycling through three options.`}}}},u={args:{options:[{value:`Theme 1`,label:`Light Theme`},{value:`Theme 2`,label:`Dark Theme`},{value:`Theme 3`,label:`Colorful Theme`}],value:`Theme 1`,onChange:e=>console.log(`Theme changed to:`,e)},parameters:{docs:{description:{story:`ToggleButton using options with value-label objects.`}}}},d={args:{options:[`sortShortWideArrowUp`,`sortShortWideArrowDown`],value:`sortShortWideArrowDown`,onChange:e=>console.log(`Changed to:`,e),renderLabel:e=>(0,s.jsx)(r,{icon:e,size:24})},parameters:{docs:{description:{story:`ToggleButton that uses renderLabel to render icons based on toggle value. Note: For sorting, you can use the SortButton component.`}}}},f={args:{options:[`Option 1`,`Option 2`,`Option 3`],value:`Option 1`,disabled:!0,onChange:e=>console.log(`Attempted change to:`,e)},parameters:{docs:{description:{story:`ToggleButton in a disabled state, showing initial option.`}}}},p={args:{options:[`Option A`,`Option B`,`Option C`],value:`Option A`,variant:`primary`,onChange:e=>console.log(`Changed to:`,e)},parameters:{docs:{description:{story:`ToggleButton rendered with primary variant styling.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithObjectOptions`,`IconRendering`,`Disabled`,`PrimaryVariant`]})))()}h();export{l as Default,f as Disabled,d as IconRendering,p as PrimaryVariant,u as WithObjectOptions,m as __namedExportsOrder,c as default};