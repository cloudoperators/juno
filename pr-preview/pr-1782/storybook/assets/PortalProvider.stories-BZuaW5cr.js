import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./react-dom-Ey92KDtl.js";import{t as i}from"./jsx-runtime-O9QVJvLM.js";import{n as a,r as o,t as s}from"./PortalProvider.component-Do0ZvEjj.js";import{t as c}from"./Button.component-Bzbc8NB-.js";import{t as l}from"./Button-ITLP9HLD.js";var u,d,f,p,m,h,g,_;t((()=>{n(),u=e(r()),a(),l(),d=i(),f={title:`WiP/PortalProvider`,component:s,subcomponents:{"PortalProvider.Portal":s.Portal},tags:[`autodocs`],argTypes:{children:{control:!1}}},p=()=>{let e=o();return e?(0,u.createPortal)((0,d.jsx)(c,{label:`I'm inside a portal using the usePortalref hook in a custom component.`}),e):null},m={args:{children:(0,d.jsx)(s.Portal,{children:(0,d.jsx)(c,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})})}},h={args:{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`span`,{children:` Some non-portalled content`}),(0,d.jsx)(p,{})]})}},g={args:{children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{children:`Some non-portaled content.`}),(0,d.jsx)(s.Portal,{children:(0,d.jsx)(c,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})}),(0,d.jsx)(p,{})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...g.parameters?.docs?.source}}},_=[`WithPortalComponent`,`WithHook`,`MultiplePortals`]}))();export{g as MultiplePortals,h as WithHook,m as WithPortalComponent,_ as __namedExportsOrder,f as default};