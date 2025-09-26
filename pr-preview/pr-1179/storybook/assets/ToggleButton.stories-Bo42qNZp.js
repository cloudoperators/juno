import{j as s}from"./iframe-DsM_TFh7.js";import{T as i}from"./ToggleButton.component-DLlMZkdb.js";import{I as l}from"./Icon.component-D7MPzWiw.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.component-q9ujGEpr.js";import"./Spinner.component-BE6sZP9d.js";const m={title:"Components/ToggleButton",component:i,argTypes:{options:{control:{type:"object"},description:"Array of options to cycle through, can be plain values or objects with value and label."},value:{control:{type:"text"},description:"The currently selected value from the options."},disabled:{control:"boolean",description:"Whether the button is disabled."},renderLabel:{control:!1,description:"A function to render the label based on the selected value."},onChange:{action:"toggleChanged",description:"Callback for whenever the toggle changes."},variant:{control:{type:"select",options:["primary","default","primary-danger","subdued"]},description:"Variant styling for the button."}}},o={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",onChange:e=>console.log("Changed to:",e)},parameters:{docs:{description:{story:"Default ToggleButton cycling through three options."}}}},n={args:{options:[{value:"Theme 1",label:"Light Theme"},{value:"Theme 2",label:"Dark Theme"},{value:"Theme 3",label:"Colorful Theme"}],value:"Theme 1",onChange:e=>console.log("Theme changed to:",e)},parameters:{docs:{description:{story:"ToggleButton using options with value-label objects."}}}},t={args:{options:["sortShortWideArrowUp","sortShortWideArrowDown"],value:"sortShortWideArrowDown",onChange:e=>console.log("Changed to:",e),renderLabel:e=>s.jsx(l,{icon:e,size:24})},parameters:{docs:{description:{story:"ToggleButton that uses renderLabel to render icons based on toggle value. Note: For sorting, you can use the SortButton component."}}}},r={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",disabled:!0,onChange:e=>console.log("Attempted change to:",e)},parameters:{docs:{description:{story:"ToggleButton in a disabled state, showing initial option."}}}},a={args:{options:["Option A","Option B","Option C"],value:"Option A",variant:"primary",onChange:e=>console.log("Changed to:",e)},parameters:{docs:{description:{story:"ToggleButton rendered with primary variant styling."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const v=["Default","WithObjectOptions","IconRendering","Disabled","PrimaryVariant"];export{o as Default,r as Disabled,t as IconRendering,a as PrimaryVariant,n as WithObjectOptions,v as __namedExportsOrder,m as default};
