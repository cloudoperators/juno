import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Icon.component-hvX4Q9Gp.js";import"./Icon-DLrP9JFG.js";import{t as n}from"./Button.component-DvVUjNUj.js";import"./Button-B0IkcDoi.js";import"react";var r=e(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/Button`,component:n,args:{onClick:i()},argTypes:{icon:{options:[`default`],control:{type:`select`}},variant:{options:[`default`,`primary`,`primary-danger`,`subdued`],control:{type:`select`}},children:{control:!1,table:{type:{summary:`ReactNode`}}}}},o={parameters:{docs:{description:{story:`The default button is a neutral button that can be used multiple times on a page`}}},args:{label:`Default`}},s={parameters:{docs:{description:{story:`A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much.`}}},args:{variant:`subdued`,label:`Subdued`}},c={parameters:{docs:{description:{story:`Only use the primary button **maximum once per page** for the preferred user action`}}},args:{variant:`primary`,label:`Primary`}},l={parameters:{docs:{description:{story:`Use this button sparingly and only for dangerous or destructive actions`}}},args:{variant:`primary-danger`,label:`Primary Danger`}},u={args:{label:`Default`}},d={args:{size:`small`,label:`Small`}},f={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...o.args,label:`Default Disabled`,disabled:!0}},p={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...s.args,label:`Subdued Disabled`,disabled:!0}},m={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...c.args,label:`Primary Disabled`,disabled:!0}},h={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...l.args,disabled:!0}},g={parameters:{docs:{description:{story:`Default Button with icon`}}},args:{...o.args,label:`Default with Icon`,icon:`warning`}},_={parameters:{docs:{description:{story:`Subdued Button with Icon`}}},args:{...s.args,icon:`warning`,label:`Subdued with Icon`}},v={parameters:{docs:{description:{story:`Small Button with Icon`}}},args:{...d.args,icon:`warning`}},y={parameters:{docs:{description:{story:`A button with a Icon but no label. The icon name can be passed as a prop.`}}},args:{icon:`warning`}},b={parameters:{docs:{description:{story:`A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though.`}}},args:{children:(0,r.jsx)(t,{})}},x={parameters:{docs:{description:{story:`If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons`}}},args:{...c.args,label:`Link as button`,href:`#link`}},S={parameters:{docs:{description:{story:`Link styled as a button including an icon.`}}},args:{...c.args,icon:`warning`,label:`Link as button with Icon`,href:`#`}},C={parameters:{docs:{description:{story:`Default Button with an action in progress`}}},args:{...o.args,progress:!0}},w={parameters:{docs:{description:{story:`Icon Button with an action in progress`}}},args:{...o.args,label:`Default with Icon`,icon:`warning`,progress:!0}},T={parameters:{docs:{description:{story:`Default Button with an action in oprogress and an alternate label while in progress`}}},args:{...o.args,label:`Default with Icon`,icon:`warning`,progress:!0,progressLabel:`In Progress…`}},E={parameters:{docs:{description:{story:`Subdued Button with an action in progress`}}},args:{...s.args,progress:!0,progressLabel:`Subdued Button in Progress…`}},D={parameters:{docs:{description:{story:`Primary Button with action in progress`}}},args:{...c.args,progress:!0,progressLabel:`Primary Button in Progress…`}},O={parameters:{docs:{description:{story:`Primary Danger Button with action in progress`}}},args:{...l.args,progress:!0,progressLabel:`Primary Danger Button in Progress…`}},k={parameters:{docs:{description:{story:`Link as button with action in progress. Should hardly ever be used, just to check consistent styling.`}}},args:{...x.args,progress:!0,progressLabel:`Link as button in Progress…`}},A={parameters:{docs:{description:{story:`Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling.`}}},args:{...S.args,progress:!0,progressLabel:`Link as button with Icon in Progress…`}},j={parameters:{docs:{description:{story:`Disabled Default Button in Progress`}}},args:{...f.args,progress:!0}},M={parameters:{docs:{description:{story:`Disabled Primnary Button with action in progress`}}},args:{...m.args,progress:!0,progressLabel:`Disabled Primary Button in Progress…`}},N={parameters:{docs:{description:{story:`Disabled Primary Danger Button in Progress…`}}},args:{...h.args,progress:!0,progressLabel:`Disabled Primary Danger Button in Progress…`}},P={parameters:{docs:{description:{story:`Small Button in Progress`}}},args:{...d.args,progress:!0,progressLabel:`Small in Progress…`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};var F=`Default.Subdued.Primary.PrimaryDanger.DefaultSize.Small.Disabled.SubduedDisabled.PrimaryDisabled.PrimaryDangerDisabled.DefaultWithIcon.SubduedWithIcon.SmallWithIcon.IconOnlyButton.IconOnlyAsChild.LinkAsButton.LinkAsButtonWithIcon.DefaultButtonInProgress.IconButtonInProgress.DefaultButtonInProgressWithProgressLabel.SubduedButtonInProgress.PrimaryButtonWithIconInProgress.PrimaryDangerButtonInProgress.LinkAsButtonInProgress.LinkAsButtonWithIconInProgress.DisabledInProgress.PrimaryDisabledInProgress.PrimaryDangerDisabledInProgress.SmallInProgress`.split(`.`);export{o as Default,C as DefaultButtonInProgress,T as DefaultButtonInProgressWithProgressLabel,u as DefaultSize,g as DefaultWithIcon,f as Disabled,j as DisabledInProgress,w as IconButtonInProgress,b as IconOnlyAsChild,y as IconOnlyButton,x as LinkAsButton,k as LinkAsButtonInProgress,S as LinkAsButtonWithIcon,A as LinkAsButtonWithIconInProgress,c as Primary,D as PrimaryButtonWithIconInProgress,l as PrimaryDanger,O as PrimaryDangerButtonInProgress,h as PrimaryDangerDisabled,N as PrimaryDangerDisabledInProgress,m as PrimaryDisabled,M as PrimaryDisabledInProgress,d as Small,P as SmallInProgress,v as SmallWithIcon,s as Subdued,E as SubduedButtonInProgress,p as SubduedDisabled,_ as SubduedWithIcon,F as __namedExportsOrder,a as default};