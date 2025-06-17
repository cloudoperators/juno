import{j as cs}from"./iframe-BfZRxKlV.js";import{B as ds}from"./Button.component-B4Zs2vpm.js";import{I as us}from"./Icon.component-CzwwtzHb.js";import"./Spinner.component-C1twCLjY.js";const{fn:ps}=__STORYBOOK_MODULE_TEST__,ys={title:"Components/Button",component:ds,args:{onClick:ps()},argTypes:{icon:{options:["default"],control:{type:"select"}},variant:{options:["default","primary","primary-danger","subdued"],control:{type:"select"}},children:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={parameters:{docs:{description:{story:"The default button is a neutral button that can be used multiple times on a page"}}},args:{label:"Default"}},e={parameters:{docs:{description:{story:"A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."}}},args:{variant:"subdued",label:"Subdued"}},s={parameters:{docs:{description:{story:"Only use the primary button **maximum once per page** for the preferred user action"}}},args:{variant:"primary",label:"Primary"}},a={parameters:{docs:{description:{story:"Use this button sparingly and only for dangerous or destructive actions"}}},args:{variant:"primary-danger",label:"Primary Danger"}},u={args:{label:"Default"}},n={args:{size:"small",label:"Small"}},t={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...r.args,label:"Default Disabled",disabled:!0}},p={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...e.args,label:"Subdued Disabled",disabled:!0}},o={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...s.args,label:"Primary Disabled",disabled:!0}},i={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...a.args,disabled:!0}},l={parameters:{docs:{description:{story:"Default Button with icon"}}},args:{...r.args,label:"Default with Icon",icon:"warning"}},g={parameters:{docs:{description:{story:"Subdued Button with Icon"}}},args:{...e.args,icon:"warning",label:"Subdued with Icon"}},m={parameters:{docs:{description:{story:"Small Button with Icon"}}},args:{...n.args,icon:"warning"}},b={parameters:{docs:{description:{story:"A button with a Icon but no label. The icon name can be passed as a prop."}}},args:{icon:"warning"}},y={parameters:{docs:{description:{story:"A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."}}},args:{children:cs.jsx(us,{})}},c={parameters:{docs:{description:{story:'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'}}},args:{...s.args,label:"Link as button",href:"#link"}},d={parameters:{docs:{description:{story:"Link styled as a button including an icon."}}},args:{...s.args,icon:"warning",label:"Link as button with Icon",href:"#"}},h={parameters:{docs:{description:{story:"Default Button with an action in progress"}}},args:{...r.args,progress:!0}},D={parameters:{docs:{description:{story:"Icon Button with an action in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0}},P={parameters:{docs:{description:{story:"Default Button with an action in oprogress and an alternate label while in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0,progressLabel:"In Progress…"}},S={parameters:{docs:{description:{story:"Subdued Button with an action in progress"}}},args:{...e.args,progress:!0,progressLabel:"Subdued Button in Progress…"}},I={parameters:{docs:{description:{story:"Primary Button with action in progress"}}},args:{...s.args,progress:!0,progressLabel:"Primary Button in Progress…"}},w={parameters:{docs:{description:{story:"Primary Danger Button with action in progress"}}},args:{...a.args,progress:!0,progressLabel:"Primary Danger Button in Progress…"}},B={parameters:{docs:{description:{story:"Link as button with action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...c.args,progress:!0,progressLabel:"Link as button in Progress…"}},f={parameters:{docs:{description:{story:"Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...d.args,progress:!0,progressLabel:"Link as button with Icon in Progress…"}},L={parameters:{docs:{description:{story:"Disabled Default Button in Progress"}}},args:{...t.args,progress:!0}},k={parameters:{docs:{description:{story:"Disabled Primnary Button with action in progress"}}},args:{...o.args,progress:!0,progressLabel:"Disabled Primary Button in Progress…"}},v={parameters:{docs:{description:{story:"Disabled Primary Danger Button in Progress…"}}},args:{...i.args,progress:!0,progressLabel:"Disabled Primary Danger Button in Progress…"}},A={parameters:{docs:{description:{story:"Small Button in Progress"}}},args:{...n.args,progress:!0,progressLabel:"Small in Progress…"}};var W,O,x;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(x=(O=r.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var T,_,j;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(_=e.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var z,C,E;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,U,H;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(U=a.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var K,M,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "Default"
  }
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Y,q,F;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  }
}`,...(F=(q=n.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,J,Q;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=t.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Z;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,rr,sr;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(sr=(rr=o.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};var er,ar,nr;i.parameters={...i.parameters,docs:{...(er=i.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(nr=(ar=i.parameters)==null?void 0:ar.docs)==null?void 0:nr.source}}};var tr,or,ir;l.parameters={...l.parameters,docs:{...(tr=l.parameters)==null?void 0:tr.docs,source:{originalSource:`{
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
}`,...(ir=(or=l.parameters)==null?void 0:or.docs)==null?void 0:ir.source}}};var cr,dr,ur;g.parameters={...g.parameters,docs:{...(cr=g.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
}`,...(ur=(dr=g.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var pr,lr,gr;m.parameters={...m.parameters,docs:{...(pr=m.parameters)==null?void 0:pr.docs,source:{originalSource:`{
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
}`,...(gr=(lr=m.parameters)==null?void 0:lr.docs)==null?void 0:gr.source}}};var mr,br,yr;b.parameters={...b.parameters,docs:{...(mr=b.parameters)==null?void 0:mr.docs,source:{originalSource:`{
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
}`,...(yr=(br=b.parameters)==null?void 0:br.docs)==null?void 0:yr.source}}};var hr,Dr,Pr;y.parameters={...y.parameters,docs:{...(hr=y.parameters)==null?void 0:hr.docs,source:{originalSource:`{
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
}`,...(Pr=(Dr=y.parameters)==null?void 0:Dr.docs)==null?void 0:Pr.source}}};var Sr,Ir,wr;c.parameters={...c.parameters,docs:{...(Sr=c.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(wr=(Ir=c.parameters)==null?void 0:Ir.docs)==null?void 0:wr.source}}};var Br,fr,Lr;d.parameters={...d.parameters,docs:{...(Br=d.parameters)==null?void 0:Br.docs,source:{originalSource:`{
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
}`,...(Lr=(fr=d.parameters)==null?void 0:fr.docs)==null?void 0:Lr.source}}};var kr,vr,Ar;h.parameters={...h.parameters,docs:{...(kr=h.parameters)==null?void 0:kr.docs,source:{originalSource:`{
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
}`,...(Ar=(vr=h.parameters)==null?void 0:vr.docs)==null?void 0:Ar.source}}};var Wr,Or,xr;D.parameters={...D.parameters,docs:{...(Wr=D.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
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
}`,...(xr=(Or=D.parameters)==null?void 0:Or.docs)==null?void 0:xr.source}}};var Tr,_r,jr;P.parameters={...P.parameters,docs:{...(Tr=P.parameters)==null?void 0:Tr.docs,source:{originalSource:`{
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
}`,...(jr=(_r=P.parameters)==null?void 0:_r.docs)==null?void 0:jr.source}}};var zr,Cr,Er;S.parameters={...S.parameters,docs:{...(zr=S.parameters)==null?void 0:zr.docs,source:{originalSource:`{
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
}`,...(Er=(Cr=S.parameters)==null?void 0:Cr.docs)==null?void 0:Er.source}}};var Rr,Ur,Hr;I.parameters={...I.parameters,docs:{...(Rr=I.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
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
}`,...(Hr=(Ur=I.parameters)==null?void 0:Ur.docs)==null?void 0:Hr.source}}};var Kr,Mr,Nr;w.parameters={...w.parameters,docs:{...(Kr=w.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
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
}`,...(Nr=(Mr=w.parameters)==null?void 0:Mr.docs)==null?void 0:Nr.source}}};var Yr,qr,Fr;B.parameters={...B.parameters,docs:{...(Yr=B.parameters)==null?void 0:Yr.docs,source:{originalSource:`{
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
}`,...(Fr=(qr=B.parameters)==null?void 0:qr.docs)==null?void 0:Fr.source}}};var Gr,Jr,Qr;f.parameters={...f.parameters,docs:{...(Gr=f.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
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
}`,...(Qr=(Jr=f.parameters)==null?void 0:Jr.docs)==null?void 0:Qr.source}}};var Vr,Xr,Zr;L.parameters={...L.parameters,docs:{...(Vr=L.parameters)==null?void 0:Vr.docs,source:{originalSource:`{
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
}`,...(Zr=(Xr=L.parameters)==null?void 0:Xr.docs)==null?void 0:Zr.source}}};var $r,rs,ss;k.parameters={...k.parameters,docs:{...($r=k.parameters)==null?void 0:$r.docs,source:{originalSource:`{
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
}`,...(ss=(rs=k.parameters)==null?void 0:rs.docs)==null?void 0:ss.source}}};var es,as,ns;v.parameters={...v.parameters,docs:{...(es=v.parameters)==null?void 0:es.docs,source:{originalSource:`{
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
}`,...(ns=(as=v.parameters)==null?void 0:as.docs)==null?void 0:ns.source}}};var ts,os,is;A.parameters={...A.parameters,docs:{...(ts=A.parameters)==null?void 0:ts.docs,source:{originalSource:`{
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
}`,...(is=(os=A.parameters)==null?void 0:os.docs)==null?void 0:is.source}}};const hs=["Default","Subdued","Primary","PrimaryDanger","DefaultSize","Small","Disabled","SubduedDisabled","PrimaryDisabled","PrimaryDangerDisabled","DefaultWithIcon","SubduedWithIcon","SmallWithIcon","IconOnlyButton","IconOnlyAsChild","LinkAsButton","LinkAsButtonWithIcon","DefaultButtonInProgress","IconButtonInProgress","DefaultButtonInProgressWithProgressLabel","SubduedButtonInProgress","PrimaryButtonWithIconInProgress","PrimaryDangerButtonInProgress","LinkAsButtonInProgress","LinkAsButtonWithIconInProgress","DisabledInProgress","PrimaryDisabledInProgress","PrimaryDangerDisabledInProgress","SmallInProgress"];export{r as Default,h as DefaultButtonInProgress,P as DefaultButtonInProgressWithProgressLabel,u as DefaultSize,l as DefaultWithIcon,t as Disabled,L as DisabledInProgress,D as IconButtonInProgress,y as IconOnlyAsChild,b as IconOnlyButton,c as LinkAsButton,B as LinkAsButtonInProgress,d as LinkAsButtonWithIcon,f as LinkAsButtonWithIconInProgress,s as Primary,I as PrimaryButtonWithIconInProgress,a as PrimaryDanger,w as PrimaryDangerButtonInProgress,i as PrimaryDangerDisabled,v as PrimaryDangerDisabledInProgress,o as PrimaryDisabled,k as PrimaryDisabledInProgress,n as Small,A as SmallInProgress,m as SmallWithIcon,e as Subdued,S as SubduedButtonInProgress,p as SubduedDisabled,g as SubduedWithIcon,hs as __namedExportsOrder,ys as default};
