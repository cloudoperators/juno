import{T as a}from"./ToggleButton.component--IMXgVch.js";import"./iframe-zqCA6I52.js";import"./Button.component-DT88j_-m.js";import"./Icon.component-BH_IG7uV.js";import"./Spinner.component-D53MwjRx.js";const c={title:"Components/ToggleButton",component:a,argTypes:{options:{control:{type:"object"},description:"Array of options to cycle through, can be plain values or objects with value and label."},value:{control:{type:"text"},description:"The currently selected value from the options."},disabled:{control:"boolean",description:"Whether the button is disabled."},renderLabel:{control:!1,description:"A function to render the label based on the selected value."},onChange:{action:"toggleChanged",description:"Callback for whenever the toggle changes."}}},o={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",onChange:e=>console.log("Changed to:",e)},parameters:{docs:{description:{story:"Default ToggleButton cycling through three options."}}}},n={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",disabled:!0,onChange:e=>console.log("Attempted change to:",e)},parameters:{docs:{description:{story:"ToggleButton in a disabled state, showing initial option."}}}},t={args:{options:[{value:"Theme 1",label:"Light Theme"},{value:"Theme 2",label:"Dark Theme"},{value:"Theme 3",label:"Colorful Theme"}],value:"Theme 1",onChange:e=>console.log("Theme changed to:",e)},parameters:{docs:{description:{story:"ToggleButton using options with value-label objects."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Default","Disabled","WithObjectOptions"];export{o as Default,n as Disabled,t as WithObjectOptions,g as __namedExportsOrder,c as default};
