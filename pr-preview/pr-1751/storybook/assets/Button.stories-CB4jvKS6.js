import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,tt as n}from"./iframe-zjfXr_6R.js";import{t as r}from"./Icon.component-DIYBFY4k.js";import{t as i}from"./Icon-CsCe3tPK.js";import{t as a}from"./Button.component-oo3kJF-5.js";import{t as o}from"./Button-B2aAT7Kz.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{n(),o(),i(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Button`,component:a,args:{onClick:c()},argTypes:{icon:{options:[`default`],control:{type:`select`}},variant:{options:[`default`,`primary`,`primary-danger`,`subdued`],control:{type:`select`}},children:{control:!1,table:{type:{summary:`ReactNode`}}}}},u={parameters:{docs:{description:{story:`The default button is a neutral button that can be used multiple times on a page`}}},args:{label:`Default`}},d={parameters:{docs:{description:{story:`A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much.`}}},args:{variant:`subdued`,label:`Subdued`}},f={parameters:{docs:{description:{story:`Only use the primary button **maximum once per page** for the preferred user action`}}},args:{variant:`primary`,label:`Primary`}},p={parameters:{docs:{description:{story:`Use this button sparingly and only for dangerous or destructive actions`}}},args:{variant:`primary-danger`,label:`Primary Danger`}},m={args:{label:`Default`}},h={args:{size:`small`,label:`Small`}},g={args:{size:`xs`,label:`XS`}},_={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...u.args,label:`Default Disabled`,disabled:!0}},v={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...d.args,label:`Subdued Disabled`,disabled:!0}},y={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...f.args,label:`Primary Disabled`,disabled:!0}},b={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...p.args,disabled:!0}},x={parameters:{docs:{description:{story:`Default Button with icon`}}},args:{...u.args,label:`Default with Icon`,icon:`warning`}},S={parameters:{docs:{description:{story:`Subdued Button with Icon`}}},args:{...d.args,icon:`warning`,label:`Subdued with Icon`}},C={parameters:{docs:{description:{story:`Small Button with Icon`}}},args:{...h.args,icon:`warning`}},w={parameters:{docs:{description:{story:`XS Button with Icon`}}},args:{...g.args,icon:`warning`}},T={parameters:{docs:{description:{story:`A button with a Icon but no label. The icon name can be passed as a prop.`}}},args:{icon:`warning`}},E={parameters:{docs:{description:{story:`A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though.`}}},args:{children:(0,s.jsx)(r,{})}},D={parameters:{docs:{description:{story:`If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons`}}},args:{...f.args,label:`Link as button`,href:`#link`}},O={parameters:{docs:{description:{story:`Link styled as a button including an icon.`}}},args:{...f.args,icon:`warning`,label:`Link as button with Icon`,href:`#`}},k={parameters:{docs:{description:{story:`Default Button with an action in progress`}}},args:{...u.args,progress:!0}},A={parameters:{docs:{description:{story:`Icon Button with an action in progress`}}},args:{...u.args,label:`Default with Icon`,icon:`warning`,progress:!0}},j={parameters:{docs:{description:{story:`Default Button with an action in progress and an alternate label while in progress`}}},args:{...u.args,label:`Default with Icon`,icon:`warning`,progress:!0,progressLabel:`In Progress…`}},M={parameters:{docs:{description:{story:`Subdued Button with an action in progress`}}},args:{...d.args,progress:!0,progressLabel:`Subdued Button in Progress…`}},N={parameters:{docs:{description:{story:`Primary Button with action in progress`}}},args:{...f.args,progress:!0,progressLabel:`Primary Button in Progress…`}},P={parameters:{docs:{description:{story:`Primary Danger Button with action in progress`}}},args:{...p.args,progress:!0,progressLabel:`Primary Danger Button in Progress…`}},F={parameters:{docs:{description:{story:`Link as button with action in progress. Should hardly ever be used, just to check consistent styling.`}}},args:{...D.args,progress:!0,progressLabel:`Link as button in Progress…`}},I={parameters:{docs:{description:{story:`Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling.`}}},args:{...O.args,progress:!0,progressLabel:`Link as button with Icon in Progress…`}},L={parameters:{docs:{description:{story:`Disabled Default Button in Progress`}}},args:{..._.args,progress:!0}},R={parameters:{docs:{description:{story:`Disabled Primary Button with action in progress`}}},args:{...y.args,progress:!0,progressLabel:`Disabled Primary Button in Progress…`}},z={parameters:{docs:{description:{story:`Disabled Primary Danger Button in Progress…`}}},args:{...b.args,progress:!0,progressLabel:`Disabled Primary Danger Button in Progress…`}},B={parameters:{docs:{description:{story:`Small Button in Progress`}}},args:{...h.args,progress:!0,progressLabel:`Small in Progress…`}},V={parameters:{docs:{description:{story:`XS Button in Progress`}}},args:{...g.args,progress:!0,progressLabel:`XS in Progress…`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "xs",
    label: "XS"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "XS Button with Icon"
      }
    }
  },
  args: {
    ...XS.args,
    icon: "warning"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Default Button with an action in progress and an alternate label while in progress"
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Disabled Primary Button with action in progress"
      }
    }
  },
  args: {
    ...PrimaryDisabled.args,
    progress: true,
    progressLabel: "Disabled Primary Button in Progress…"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "XS Button in Progress"
      }
    }
  },
  args: {
    ...XS.args,
    progress: true,
    progressLabel: "XS in Progress…"
  }
}`,...V.parameters?.docs?.source}}},H=`Default.Subdued.Primary.PrimaryDanger.DefaultSize.Small.XS.Disabled.SubduedDisabled.PrimaryDisabled.PrimaryDangerDisabled.DefaultWithIcon.SubduedWithIcon.SmallWithIcon.XSWithIcon.IconOnlyButton.IconOnlyAsChild.LinkAsButton.LinkAsButtonWithIcon.DefaultButtonInProgress.IconButtonInProgress.DefaultButtonInProgressWithProgressLabel.SubduedButtonInProgress.PrimaryButtonWithIconInProgress.PrimaryDangerButtonInProgress.LinkAsButtonInProgress.LinkAsButtonWithIconInProgress.DisabledInProgress.PrimaryDisabledInProgress.PrimaryDangerDisabledInProgress.SmallInProgress.XSInProgress`.split(`.`)}))();export{u as Default,k as DefaultButtonInProgress,j as DefaultButtonInProgressWithProgressLabel,m as DefaultSize,x as DefaultWithIcon,_ as Disabled,L as DisabledInProgress,A as IconButtonInProgress,E as IconOnlyAsChild,T as IconOnlyButton,D as LinkAsButton,F as LinkAsButtonInProgress,O as LinkAsButtonWithIcon,I as LinkAsButtonWithIconInProgress,f as Primary,N as PrimaryButtonWithIconInProgress,p as PrimaryDanger,P as PrimaryDangerButtonInProgress,b as PrimaryDangerDisabled,z as PrimaryDangerDisabledInProgress,y as PrimaryDisabled,R as PrimaryDisabledInProgress,h as Small,B as SmallInProgress,C as SmallWithIcon,d as Subdued,M as SubduedButtonInProgress,v as SubduedDisabled,S as SubduedWithIcon,g as XS,V as XSInProgress,w as XSWithIcon,H as __namedExportsOrder,l as default};