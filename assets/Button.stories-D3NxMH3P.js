import{j as W}from"./iframe-rmMPyg5l.js";import{B as O}from"./Button.component-Df6rnS2M.js";import{I as x}from"./Icon.component-Br8pSfi2.js";import"./Spinner.component-Cu1Ipq35.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Button",component:O,args:{onClick:T()},argTypes:{icon:{options:["default"],control:{type:"select"}},variant:{options:["default","primary","primary-danger","subdued"],control:{type:"select"}},children:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={parameters:{docs:{description:{story:"The default button is a neutral button that can be used multiple times on a page"}}},args:{label:"Default"}},e={parameters:{docs:{description:{story:"A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."}}},args:{variant:"subdued",label:"Subdued"}},s={parameters:{docs:{description:{story:"Only use the primary button **maximum once per page** for the preferred user action"}}},args:{variant:"primary",label:"Primary"}},a={parameters:{docs:{description:{story:"Use this button sparingly and only for dangerous or destructive actions"}}},args:{variant:"primary-danger",label:"Primary Danger"}},u={args:{label:"Default"}},n={args:{size:"small",label:"Small"}},t={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...r.args,label:"Default Disabled",disabled:!0}},p={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...e.args,label:"Subdued Disabled",disabled:!0}},o={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...s.args,label:"Primary Disabled",disabled:!0}},i={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...a.args,disabled:!0}},l={parameters:{docs:{description:{story:"Default Button with icon"}}},args:{...r.args,label:"Default with Icon",icon:"warning"}},g={parameters:{docs:{description:{story:"Subdued Button with Icon"}}},args:{...e.args,icon:"warning",label:"Subdued with Icon"}},m={parameters:{docs:{description:{story:"Small Button with Icon"}}},args:{...n.args,icon:"warning"}},b={parameters:{docs:{description:{story:"A button with a Icon but no label. The icon name can be passed as a prop."}}},args:{icon:"warning"}},y={parameters:{docs:{description:{story:"A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."}}},args:{children:W.jsx(x,{})}},c={parameters:{docs:{description:{story:'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'}}},args:{...s.args,label:"Link as button",href:"#link"}},d={parameters:{docs:{description:{story:"Link styled as a button including an icon."}}},args:{...s.args,icon:"warning",label:"Link as button with Icon",href:"#"}},h={parameters:{docs:{description:{story:"Default Button with an action in progress"}}},args:{...r.args,progress:!0}},D={parameters:{docs:{description:{story:"Icon Button with an action in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0}},P={parameters:{docs:{description:{story:"Default Button with an action in oprogress and an alternate label while in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0,progressLabel:"In Progress…"}},S={parameters:{docs:{description:{story:"Subdued Button with an action in progress"}}},args:{...e.args,progress:!0,progressLabel:"Subdued Button in Progress…"}},I={parameters:{docs:{description:{story:"Primary Button with action in progress"}}},args:{...s.args,progress:!0,progressLabel:"Primary Button in Progress…"}},w={parameters:{docs:{description:{story:"Primary Danger Button with action in progress"}}},args:{...a.args,progress:!0,progressLabel:"Primary Danger Button in Progress…"}},B={parameters:{docs:{description:{story:"Link as button with action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...c.args,progress:!0,progressLabel:"Link as button in Progress…"}},f={parameters:{docs:{description:{story:"Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...d.args,progress:!0,progressLabel:"Link as button with Icon in Progress…"}},L={parameters:{docs:{description:{story:"Disabled Default Button in Progress"}}},args:{...t.args,progress:!0}},k={parameters:{docs:{description:{story:"Disabled Primnary Button with action in progress"}}},args:{...o.args,progress:!0,progressLabel:"Disabled Primary Button in Progress…"}},v={parameters:{docs:{description:{story:"Disabled Primary Danger Button in Progress…"}}},args:{...i.args,progress:!0,progressLabel:"Disabled Primary Danger Button in Progress…"}},A={parameters:{docs:{description:{story:"Small Button in Progress"}}},args:{...n.args,progress:!0,progressLabel:"Small in Progress…"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "The default button is a neutral button that can be used multiple times on a page"
      }
    }
  },
  args: {
    label: "Default"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."
      }
    }
  },
  args: {
    variant: "subdued",
    label: "Subdued"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Only use the primary button **maximum once per page** for the preferred user action"
      }
    }
  },
  args: {
    variant: "primary",
    label: "Primary"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use this button sparingly and only for dangerous or destructive actions"
      }
    }
  },
  args: {
    variant: "primary-danger",
    label: "Primary Danger"
  }
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default"
  }
}`,...u.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disable any button by adding \`disabled\` to it."
      }
    }
  },
  args: {
    ...Default.args,
    label: "Default Disabled",
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disable any button by adding \`disabled\` to it."
      }
    }
  },
  args: {
    ...Subdued.args,
    label: "Subdued Disabled",
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disable any button by adding \`disabled\` to it."
      }
    }
  },
  args: {
    ...Primary.args,
    label: "Primary Disabled",
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disable a Primary Danger button by adding \`disabled\` to it."
      }
    }
  },
  args: {
    ...PrimaryDanger.args,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default Button with icon"
      }
    }
  },
  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning"
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Subdued Button with Icon"
      }
    }
  },
  args: {
    ...Subdued.args,
    icon: "warning",
    label: "Subdued with Icon"
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Small Button with Icon"
      }
    }
  },
  args: {
    ...Small.args,
    icon: "warning"
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A button with a Icon but no label. The icon name can be passed as a prop."
      }
    }
  },
  args: {
    icon: "warning"
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."
      }
    }
  },
  args: {
    children: <Icon />
  }
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'
      }
    }
  },
  args: {
    ...Primary.args,
    label: "Link as button",
    href: "#link"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Link styled as a button including an icon."
      }
    }
  },
  args: {
    ...Primary.args,
    icon: "warning",
    label: "Link as button with Icon",
    href: "#"
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default Button with an action in progress"
      }
    }
  },
  args: {
    ...Default.args,
    progress: true
  }
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Icon Button with an action in progress"
      }
    }
  },
  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning",
    progress: true
  }
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default Button with an action in oprogress and an alternate label while in progress"
      }
    }
  },
  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning",
    progress: true,
    progressLabel: "In Progress…"
  }
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Subdued Button with an action in progress"
      }
    }
  },
  args: {
    ...Subdued.args,
    progress: true,
    progressLabel: "Subdued Button in Progress…"
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Primary Button with action in progress"
      }
    }
  },
  args: {
    ...Primary.args,
    progress: true,
    progressLabel: "Primary Button in Progress…"
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Primary Danger Button with action in progress"
      }
    }
  },
  args: {
    ...PrimaryDanger.args,
    progress: true,
    progressLabel: "Primary Danger Button in Progress…"
  }
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Link as button with action in progress. Should hardly ever be used, just to check consistent styling."
      }
    }
  },
  args: {
    ...LinkAsButton.args,
    progress: true,
    progressLabel: "Link as button in Progress…"
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."
      }
    }
  },
  args: {
    ...LinkAsButtonWithIcon.args,
    progress: true,
    progressLabel: "Link as button with Icon in Progress…"
  }
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disabled Default Button in Progress"
      }
    }
  },
  args: {
    ...Disabled.args,
    progress: true
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disabled Primnary Button with action in progress"
      }
    }
  },
  args: {
    ...PrimaryDisabled.args,
    progress: true,
    progressLabel: "Disabled Primary Button in Progress…"
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disabled Primary Danger Button in Progress…"
      }
    }
  },
  args: {
    ...PrimaryDangerDisabled.args,
    progress: true,
    progressLabel: "Disabled Primary Danger Button in Progress…"
  }
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Small Button in Progress"
      }
    }
  },
  args: {
    ...Small.args,
    progress: true,
    progressLabel: "Small in Progress…"
  }
}`,...A.parameters?.docs?.source}}};const R=["Default","Subdued","Primary","PrimaryDanger","DefaultSize","Small","Disabled","SubduedDisabled","PrimaryDisabled","PrimaryDangerDisabled","DefaultWithIcon","SubduedWithIcon","SmallWithIcon","IconOnlyButton","IconOnlyAsChild","LinkAsButton","LinkAsButtonWithIcon","DefaultButtonInProgress","IconButtonInProgress","DefaultButtonInProgressWithProgressLabel","SubduedButtonInProgress","PrimaryButtonWithIconInProgress","PrimaryDangerButtonInProgress","LinkAsButtonInProgress","LinkAsButtonWithIconInProgress","DisabledInProgress","PrimaryDisabledInProgress","PrimaryDangerDisabledInProgress","SmallInProgress"];export{r as Default,h as DefaultButtonInProgress,P as DefaultButtonInProgressWithProgressLabel,u as DefaultSize,l as DefaultWithIcon,t as Disabled,L as DisabledInProgress,D as IconButtonInProgress,y as IconOnlyAsChild,b as IconOnlyButton,c as LinkAsButton,B as LinkAsButtonInProgress,d as LinkAsButtonWithIcon,f as LinkAsButtonWithIconInProgress,s as Primary,I as PrimaryButtonWithIconInProgress,a as PrimaryDanger,w as PrimaryDangerButtonInProgress,i as PrimaryDangerDisabled,v as PrimaryDangerDisabledInProgress,o as PrimaryDisabled,k as PrimaryDisabledInProgress,n as Small,A as SmallInProgress,m as SmallWithIcon,e as Subdued,S as SubduedButtonInProgress,p as SubduedDisabled,g as SubduedWithIcon,R as __namedExportsOrder,E as default};
