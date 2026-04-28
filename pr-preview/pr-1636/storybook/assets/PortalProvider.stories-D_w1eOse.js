import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{_ as n,g as r}from"./iframe-qPHz0liX.js";import{n as i,t as a}from"./PortalProvider.component-C0iptKAD.js";import{t as o}from"./Button.component-J1fJR8AZ.js";import"./Button-DFKvvwdO.js";t();var s=e(n()),c=r(),l={title:`WiP/PortalProvider`,component:a,subcomponents:{"PortalProvider.Portal":a.Portal},tags:[`autodocs`],argTypes:{children:{control:!1}}},u=()=>{let e=i();return e?(0,s.createPortal)((0,c.jsx)(o,{label:`I'm inside a portal using the usePortalref hook in a custom component.`}),e):null},d={args:{children:(0,c.jsx)(a.Portal,{children:(0,c.jsx)(o,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})})}},f={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`span`,{children:` Some non-portalled content`}),(0,c.jsx)(u,{})]})}},p={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`div`,{children:`Some non-portaled content.`}),(0,c.jsx)(a.Portal,{children:(0,c.jsx)(o,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})}),(0,c.jsx)(u,{})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...p.parameters?.docs?.source}}};var m=[`WithPortalComponent`,`WithHook`,`MultiplePortals`];export{p as MultiplePortals,f as WithHook,d as WithPortalComponent,m as __namedExportsOrder,l as default};