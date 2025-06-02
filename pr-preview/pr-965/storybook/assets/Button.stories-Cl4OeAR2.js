import{j as cs}from"./jsx-runtime-D_zvdyIk.js";import{B as ds}from"./Button.component-CwllAqlG.js";import{I as us}from"./Icon.component-DwRmdXUS.js";import{fn as ps}from"./index-Cf3xVBfy.js";import"./index-DI7CEG0L.js";import"./Spinner.component-NCyRlNFL.js";const Ds={title:"Components/Button",component:ds,args:{onClick:ps()},argTypes:{icon:{options:["default"],control:{type:"select"}},variant:{options:["default","primary","primary-danger","subdued"],control:{type:"select"}},children:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={parameters:{docs:{description:{story:"The default button is a neutral button that can be used multiple times on a page"}}},args:{label:"Default"}},e={parameters:{docs:{description:{story:"A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."}}},args:{variant:"subdued",label:"Subdued"}},s={parameters:{docs:{description:{story:"Only use the primary button **maximum once per page** for the preferred user action"}}},args:{variant:"primary",label:"Primary"}},a={parameters:{docs:{description:{story:"Use this button sparingly and only for dangerous or destructive actions"}}},args:{variant:"primary-danger",label:"Primary Danger"}},u={args:{label:"Default"}},n={args:{size:"small",label:"Small"}},t={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...r.args,label:"Default Disabled",disabled:!0}},p={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...e.args,label:"Subdued Disabled",disabled:!0}},o={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...s.args,label:"Primary Disabled",disabled:!0}},i={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...a.args,disabled:!0}},l={parameters:{docs:{description:{story:"Default Button with icon"}}},args:{...r.args,label:"Default with Icon",icon:"warning"}},g={parameters:{docs:{description:{story:"Subdued Button with Icon"}}},args:{...e.args,icon:"warning",label:"Subdued with Icon"}},m={parameters:{docs:{description:{story:"Small Button with Icon"}}},args:{...n.args,icon:"warning"}},b={parameters:{docs:{description:{story:"A button with a Icon but no label. The icon name can be passed as a prop."}}},args:{icon:"warning"}},y={parameters:{docs:{description:{story:"A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."}}},args:{children:cs.jsx(us,{})}},c={parameters:{docs:{description:{story:'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'}}},args:{...s.args,label:"Link as button",href:"#link"}},d={parameters:{docs:{description:{story:"Link styled as a button including an icon."}}},args:{...s.args,icon:"warning",label:"Link as button with Icon",href:"#"}},h={parameters:{docs:{description:{story:"Default Button with an action in progress"}}},args:{...r.args,progress:!0}},D={parameters:{docs:{description:{story:"Icon Button with an action in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0}},P={parameters:{docs:{description:{story:"Default Button with an action in oprogress and an alternate label while in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0,progressLabel:"In Progress…"}},I={parameters:{docs:{description:{story:"Subdued Button with an action in progress"}}},args:{...e.args,progress:!0,progressLabel:"Subdued Button in Progress…"}},S={parameters:{docs:{description:{story:"Primary Button with action in progress"}}},args:{...s.args,progress:!0,progressLabel:"Primary Button in Progress…"}},f={parameters:{docs:{description:{story:"Primary Danger Button with action in progress"}}},args:{...a.args,progress:!0,progressLabel:"Primary Danger Button in Progress…"}},w={parameters:{docs:{description:{story:"Link as button with action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...c.args,progress:!0,progressLabel:"Link as button in Progress…"}},B={parameters:{docs:{description:{story:"Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...d.args,progress:!0,progressLabel:"Link as button with Icon in Progress…"}},L={parameters:{docs:{description:{story:"Disabled Default Button in Progress"}}},args:{...t.args,progress:!0}},k={parameters:{docs:{description:{story:"Disabled Primnary Button with action in progress"}}},args:{...o.args,progress:!0,progressLabel:"Disabled Primary Button in Progress…"}},v={parameters:{docs:{description:{story:"Disabled Primary Danger Button in Progress…"}}},args:{...i.args,progress:!0,progressLabel:"Disabled Primary Danger Button in Progress…"}},A={parameters:{docs:{description:{story:"Small Button in Progress"}}},args:{...n.args,progress:!0,progressLabel:"Small in Progress…"}};var W,x,j;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var O,T,z;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(z=(T=e.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var C,E,H;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(E=s.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,U,_;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(U=a.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var N,q,F;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "Default"
  }
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,J,K;n.parameters={...n.parameters,docs:{...(G=n.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,V;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(Q=t.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,sr;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Pr=(Dr=y.parameters)==null?void 0:Dr.docs)==null?void 0:Pr.source}}};var Ir,Sr,fr;c.parameters={...c.parameters,docs:{...(Ir=c.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
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
}`,...(fr=(Sr=c.parameters)==null?void 0:Sr.docs)==null?void 0:fr.source}}};var wr,Br,Lr;d.parameters={...d.parameters,docs:{...(wr=d.parameters)==null?void 0:wr.docs,source:{originalSource:`{
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
}`,...(Lr=(Br=d.parameters)==null?void 0:Br.docs)==null?void 0:Lr.source}}};var kr,vr,Ar;h.parameters={...h.parameters,docs:{...(kr=h.parameters)==null?void 0:kr.docs,source:{originalSource:`{
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
}`,...(Ar=(vr=h.parameters)==null?void 0:vr.docs)==null?void 0:Ar.source}}};var Wr,xr,jr;D.parameters={...D.parameters,docs:{...(Wr=D.parameters)==null?void 0:Wr.docs,source:{originalSource:`{
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
}`,...(jr=(xr=D.parameters)==null?void 0:xr.docs)==null?void 0:jr.source}}};var Or,Tr,zr;P.parameters={...P.parameters,docs:{...(Or=P.parameters)==null?void 0:Or.docs,source:{originalSource:`{
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
}`,...(zr=(Tr=P.parameters)==null?void 0:Tr.docs)==null?void 0:zr.source}}};var Cr,Er,Hr;I.parameters={...I.parameters,docs:{...(Cr=I.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
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
}`,...(Hr=(Er=I.parameters)==null?void 0:Er.docs)==null?void 0:Hr.source}}};var Rr,Ur,_r;S.parameters={...S.parameters,docs:{...(Rr=S.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
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
}`,...(_r=(Ur=S.parameters)==null?void 0:Ur.docs)==null?void 0:_r.source}}};var Nr,qr,Fr;f.parameters={...f.parameters,docs:{...(Nr=f.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
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
}`,...(Fr=(qr=f.parameters)==null?void 0:qr.docs)==null?void 0:Fr.source}}};var Gr,Jr,Kr;w.parameters={...w.parameters,docs:{...(Gr=w.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
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
}`,...(Kr=(Jr=w.parameters)==null?void 0:Jr.docs)==null?void 0:Kr.source}}};var Mr,Qr,Vr;B.parameters={...B.parameters,docs:{...(Mr=B.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
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
}`,...(Vr=(Qr=B.parameters)==null?void 0:Qr.docs)==null?void 0:Vr.source}}};var Xr,Yr,Zr;L.parameters={...L.parameters,docs:{...(Xr=L.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
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
}`,...(Zr=(Yr=L.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var $r,rs,ss;k.parameters={...k.parameters,docs:{...($r=k.parameters)==null?void 0:$r.docs,source:{originalSource:`{
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
}`,...(is=(os=A.parameters)==null?void 0:os.docs)==null?void 0:is.source}}};const Ps=["Default","Subdued","Primary","PrimaryDanger","DefaultSize","Small","Disabled","SubduedDisabled","PrimaryDisabled","PrimaryDangerDisabled","DefaultWithIcon","SubduedWithIcon","SmallWithIcon","IconOnlyButton","IconOnlyAsChild","LinkAsButton","LinkAsButtonWithIcon","DefaultButtonInProgress","IconButtonInProgress","DefaultButtonInProgressWithProgressLabel","SubduedButtonInProgress","PrimaryButtonWithIconInProgress","PrimaryDangerButtonInProgress","LinkAsButtonInProgress","LinkAsButtonWithIconInProgress","DisabledInProgress","PrimaryDisabledInProgress","PrimaryDangerDisabledInProgress","SmallInProgress"];export{r as Default,h as DefaultButtonInProgress,P as DefaultButtonInProgressWithProgressLabel,u as DefaultSize,l as DefaultWithIcon,t as Disabled,L as DisabledInProgress,D as IconButtonInProgress,y as IconOnlyAsChild,b as IconOnlyButton,c as LinkAsButton,w as LinkAsButtonInProgress,d as LinkAsButtonWithIcon,B as LinkAsButtonWithIconInProgress,s as Primary,S as PrimaryButtonWithIconInProgress,a as PrimaryDanger,f as PrimaryDangerButtonInProgress,i as PrimaryDangerDisabled,v as PrimaryDangerDisabledInProgress,o as PrimaryDisabled,k as PrimaryDisabledInProgress,n as Small,A as SmallInProgress,m as SmallWithIcon,e as Subdued,I as SubduedButtonInProgress,p as SubduedDisabled,g as SubduedWithIcon,Ps as __namedExportsOrder,Ds as default};
