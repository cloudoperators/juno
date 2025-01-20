import{j as cs}from"./jsx-runtime-D6fbYt3N.js";import{B as ds}from"./Button.component-vEAr6-yG.js";import{I as us}from"./Icon.component-BzIpr4Ej.js";import"./index-DysCNOs_.js";import"./Spinner.component-a74gjTKo.js";import"./widgets-BR6-ubtP.js";const hs={title:"Components/Button",component:ds,argTypes:{icon:{options:["default"],control:{type:"select"}},variant:{options:["default","primary","primary-danger","subdued"],control:{type:"select"}}}},r={parameters:{docs:{description:{story:"The default button is a neutral button that can be used multiple times on a page"}}},args:{label:"Default"}},e={parameters:{docs:{description:{story:"A subdued button variant, mostly used to create contrast to an primary button concerning the same usage context, or when multiple default buttons would be too much."}}},args:{variant:"subdued",label:"Subdued"}},s={parameters:{docs:{description:{story:"Only use the primary button **maximum once per page** for the preferred user action"}}},args:{variant:"primary",label:"Primary"}},a={parameters:{docs:{description:{story:"Use this button sparingly and only for dangerous or destructive actions"}}},args:{variant:"primary-danger",label:"Primary Danger"}},l={args:{label:"Default"}},n={args:{size:"small",label:"Small"}},i={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...r.args,label:"Default Disabled",disabled:!0}},g={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...e.args,label:"Subdued Disabled",disabled:!0}},c={parameters:{docs:{description:{story:"Disable any button by adding `disabled` to it."}}},args:{...s.args,label:"Primary Disabled",disabled:!0}},d={parameters:{docs:{description:{story:"Disable a Primary Danger button by adding `disabled` to it."}}},args:{...a.args,disabled:!0}},m={parameters:{docs:{story:"Default Button with icon"}},args:{...r.args,label:"Default with Icon",icon:"warning"}},b={parameters:{docs:{description:{story:"Subdued Button with Icon"}}},args:{...e.args,icon:"warning",label:"Subdued with Icon"}},y={parameters:{docs:{description:{story:"Small Button with Icon"}}},args:{...n.args,icon:"warning"}},o={docs:{},args:{}};o.docs={description:{story:"A button with a Icon but no label. The icon name can be passed as a prop."}},o.args={icon:"warning"};const t={docs:{},args:{}};t.docs={description:{story:"A button with a Icon but no label, an Icon can also be passed as a child. Hover, active, etc. states of the icon ave to be handled manually when passing an icon as a child though."}},t.args={children:cs.jsx(us,{})};const u={parameters:{docs:{description:{story:'If you want to render a link that looks like a button pass an "href" to the Button. All other props work the same as for regular buttons'}}},args:{...s.args,label:"Link as button",href:"#link"}},p={parameters:{docs:{description:{story:"Link styled as a button including an icon."}}},args:{...s.args,icon:"warning",label:"Link as button with Icon",href:"#"}},h={parameters:{docs:{description:{story:"Default Button with an action in progress"}}},args:{...r.args,progress:!0}},D={parameters:{docs:{description:{story:"Icon Button with an action in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0}},P={parameters:{docs:{description:{story:"Default Button with an action in oprogress and an alternate label while in progress"}}},args:{...r.args,label:"Default with Icon",icon:"warning",progress:!0,progressLabel:"In Progress…"}},S={parameters:{docs:{description:{story:"Subdued Button with an action in progress"}}},args:{...e.args,progress:!0,progressLabel:"Subdued Button in Progress…"}},I={parameters:{docs:{description:{story:"Primary Button with action in progress"}}},args:{...s.args,progress:!0,progressLabel:"Primary Button in Progress…"}},B={parameters:{docs:{description:{story:"Primary Danger Button with action in progress"}}},args:{...a.args,progress:!0,progressLabel:"Primary Danger Button in Progress…"}},f={parameters:{docs:{description:{story:"Link as button with action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...u.args,progress:!0,progressLabel:"Link as button in Progress…"}},w={parameters:{docs:{description:{story:"Link as button with an icon and action in progress. Should hardly ever be used, just to check consistent styling."}}},args:{...p.args,progress:!0,progressLabel:"Link as button with Icon in Progress…"}},L={parameters:{docs:{description:{story:"Disabled Default Button in Progress"}}},args:{...i.args,progress:!0}},k={parameters:{docs:{description:{story:"Disabled Primnary Button with action in progress"}}},args:{...c.args,progress:!0,progressLabel:"Disabled Primary Button in Progress…"}},v={parameters:{docs:{description:{story:"Disabled Primary Danger Button in Progress…"}}},args:{...d.args,progress:!0,progressLabel:"Disabled Primary Danger Button in Progress…"}},A={parameters:{docs:{description:{story:"Small Button in Progress"}}},args:{...n.args,progress:!0,progressLabel:"Small in Progress…"}};var W,x,j;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var O,z,T;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(T=(z=e.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var C,_,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(_=s.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var U,H,R;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(R=(H=a.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var q,F,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Default"
  }
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,M;n.parameters={...n.parameters,docs:{...(J=n.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Small"
  }
}`,...(M=(K=n.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,V;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,sr;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(sr=(rr=c.parameters)==null?void 0:rr.docs)==null?void 0:sr.source}}};var er,ar,nr;d.parameters={...d.parameters,docs:{...(er=d.parameters)==null?void 0:er.docs,source:{originalSource:`{
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
}`,...(nr=(ar=d.parameters)==null?void 0:ar.docs)==null?void 0:nr.source}}};var or,tr,ir;m.parameters={...m.parameters,docs:{...(or=m.parameters)==null?void 0:or.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: "Default Button with icon"
    }
  },
  args: {
    ...Default.args,
    label: "Default with Icon",
    icon: "warning"
  }
}`,...(ir=(tr=m.parameters)==null?void 0:tr.docs)==null?void 0:ir.source}}};var cr,dr,ur;b.parameters={...b.parameters,docs:{...(cr=b.parameters)==null?void 0:cr.docs,source:{originalSource:`{
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
}`,...(ur=(dr=b.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var pr,lr,gr;y.parameters={...y.parameters,docs:{...(pr=y.parameters)==null?void 0:pr.docs,source:{originalSource:`{
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
}`,...(gr=(lr=y.parameters)==null?void 0:lr.docs)==null?void 0:gr.source}}};var mr,br,yr;o.parameters={...o.parameters,docs:{...(mr=o.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  docs: {},
  args: {}
}`,...(yr=(br=o.parameters)==null?void 0:br.docs)==null?void 0:yr.source}}};var hr,Dr,Pr;t.parameters={...t.parameters,docs:{...(hr=t.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  docs: {},
  args: {}
}`,...(Pr=(Dr=t.parameters)==null?void 0:Dr.docs)==null?void 0:Pr.source}}};var Sr,Ir,Br;u.parameters={...u.parameters,docs:{...(Sr=u.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
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
}`,...(Br=(Ir=u.parameters)==null?void 0:Ir.docs)==null?void 0:Br.source}}};var fr,wr,Lr;p.parameters={...p.parameters,docs:{...(fr=p.parameters)==null?void 0:fr.docs,source:{originalSource:`{
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
}`,...(Lr=(wr=p.parameters)==null?void 0:wr.docs)==null?void 0:Lr.source}}};var kr,vr,Ar;h.parameters={...h.parameters,docs:{...(kr=h.parameters)==null?void 0:kr.docs,source:{originalSource:`{
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
}`,...(jr=(xr=D.parameters)==null?void 0:xr.docs)==null?void 0:jr.source}}};var Or,zr,Tr;P.parameters={...P.parameters,docs:{...(Or=P.parameters)==null?void 0:Or.docs,source:{originalSource:`{
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
}`,...(Tr=(zr=P.parameters)==null?void 0:zr.docs)==null?void 0:Tr.source}}};var Cr,_r,Er;S.parameters={...S.parameters,docs:{...(Cr=S.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
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
}`,...(Er=(_r=S.parameters)==null?void 0:_r.docs)==null?void 0:Er.source}}};var Ur,Hr,Rr;I.parameters={...I.parameters,docs:{...(Ur=I.parameters)==null?void 0:Ur.docs,source:{originalSource:`{
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
}`,...(Rr=(Hr=I.parameters)==null?void 0:Hr.docs)==null?void 0:Rr.source}}};var qr,Fr,Gr;B.parameters={...B.parameters,docs:{...(qr=B.parameters)==null?void 0:qr.docs,source:{originalSource:`{
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
}`,...(Gr=(Fr=B.parameters)==null?void 0:Fr.docs)==null?void 0:Gr.source}}};var Jr,Kr,Mr;f.parameters={...f.parameters,docs:{...(Jr=f.parameters)==null?void 0:Jr.docs,source:{originalSource:`{
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
}`,...(Mr=(Kr=f.parameters)==null?void 0:Kr.docs)==null?void 0:Mr.source}}};var Nr,Qr,Vr;w.parameters={...w.parameters,docs:{...(Nr=w.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
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
}`,...(Vr=(Qr=w.parameters)==null?void 0:Qr.docs)==null?void 0:Vr.source}}};var Xr,Yr,Zr;L.parameters={...L.parameters,docs:{...(Xr=L.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
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
}`,...(ns=(as=v.parameters)==null?void 0:as.docs)==null?void 0:ns.source}}};var os,ts,is;A.parameters={...A.parameters,docs:{...(os=A.parameters)==null?void 0:os.docs,source:{originalSource:`{
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
}`,...(is=(ts=A.parameters)==null?void 0:ts.docs)==null?void 0:is.source}}};const Ds=["Default","Subdued","Primary","PrimaryDanger","DefaultSize","Small","Disabled","SubduedDisabled","PrimaryDisabled","PrimaryDangerDisabled","DefaultWithIcon","SubduedWithIcon","SmallWithIcon","IconOnlyButton","IconOnlyAsChild","LinkAsButton","LinkAsButtonWithIcon","DefaultButtonInProgress","IconButtonInProgress","DefaultButtonInProgressWithProgressLabel","SubduedButtonInProgress","PrimaryButtonWithIconInProgress","PrimaryDangerButtonInProgress","LinkAsButtonInProgress","LinkAsButtonWithIconInProgress","DisabledInProgress","PrimaryDisabledInProgress","PrimaryDangerDisabledInProgress","SmallInProgress"];export{r as Default,h as DefaultButtonInProgress,P as DefaultButtonInProgressWithProgressLabel,l as DefaultSize,m as DefaultWithIcon,i as Disabled,L as DisabledInProgress,D as IconButtonInProgress,t as IconOnlyAsChild,o as IconOnlyButton,u as LinkAsButton,f as LinkAsButtonInProgress,p as LinkAsButtonWithIcon,w as LinkAsButtonWithIconInProgress,s as Primary,I as PrimaryButtonWithIconInProgress,a as PrimaryDanger,B as PrimaryDangerButtonInProgress,d as PrimaryDangerDisabled,v as PrimaryDangerDisabledInProgress,c as PrimaryDisabled,k as PrimaryDisabledInProgress,n as Small,A as SmallInProgress,y as SmallWithIcon,e as Subdued,S as SubduedButtonInProgress,g as SubduedDisabled,b as SubduedWithIcon,Ds as __namedExportsOrder,hs as default};
