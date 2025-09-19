import{T as r}from"./ToggleButton.component-BjY9pEhv.js";import"./iframe-CIyRBaja.js";import"./Button.component-Bhs-cQnZ.js";import"./Icon.component-CKqYrODc.js";import"./Spinner.component-mfAUcs9B.js";const g={title:"Components/ToggleButton",component:r,argTypes:{options:{control:{type:"object"},description:"Array of options to cycle through, can be plain values or objects with value and label."},value:{control:{type:"text"},description:"The currently selected value from the options."},disabled:{control:"boolean",description:"Whether the button is disabled."},renderLabel:{control:!1,description:"A function to render the label based on the selected value."},onChange:{action:"toggleChanged",description:"Callback for whenever the toggle changes."},variant:{control:{type:"select",options:["primary","default","primary-danger","subdued"]},description:"Variant styling for the button."}}},o={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",onChange:e=>console.log("Changed to:",e)},parameters:{docs:{description:{story:"Default ToggleButton cycling through three options."}}}},n={args:{options:[{value:"Theme 1",label:"Light Theme"},{value:"Theme 2",label:"Dark Theme"},{value:"Theme 3",label:"Colorful Theme"}],value:"Theme 1",onChange:e=>console.log("Theme changed to:",e)},parameters:{docs:{description:{story:"ToggleButton using options with value-label objects."}}}},t={args:{options:["Option 1","Option 2","Option 3"],value:"Option 1",disabled:!0,onChange:e=>console.log("Attempted change to:",e)},parameters:{docs:{description:{story:"ToggleButton in a disabled state, showing initial option."}}}},a={args:{options:["Option A","Option B","Option C"],value:"Option A",variant:"primary",onChange:e=>console.log("Changed to:",e)},parameters:{docs:{description:{story:"ToggleButton rendered with primary variant styling."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const d=["Default","WithObjectOptions","Disabled","PrimaryVariant"];export{o as Default,t as Disabled,a as PrimaryVariant,n as WithObjectOptions,d as __namedExportsOrder,g as default};
