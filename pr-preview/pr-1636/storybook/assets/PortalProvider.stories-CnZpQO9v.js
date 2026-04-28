import{g as e}from"./iframe-Cx-zHds2.js";import{n as t,t as n}from"./PortalProvider.component-C2fswz4A.js";import{t as r}from"./Button.component-DvVUjNUj.js";import"./Button-B0IkcDoi.js";import"react";import{createPortal as i}from"react-dom";var a=e(),o={title:`WiP/PortalProvider`,component:n,subcomponents:{"PortalProvider.Portal":n.Portal},tags:[`autodocs`],argTypes:{children:{control:!1}}},s=()=>{let e=t();return e?i((0,a.jsx)(r,{label:`I'm inside a portal using the usePortalref hook in a custom component.`}),e):null},c={args:{children:(0,a.jsx)(n.Portal,{children:(0,a.jsx)(r,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})})}},l={args:{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{children:` Some non-portalled content`}),(0,a.jsx)(s,{})]})}},u={args:{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`div`,{children:`Some non-portaled content.`}),(0,a.jsx)(n.Portal,{children:(0,a.jsx)(r,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})}),(0,a.jsx)(s,{})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...u.parameters?.docs?.source}}};var d=[`WithPortalComponent`,`WithHook`,`MultiplePortals`];export{u as MultiplePortals,l as WithHook,c as WithPortalComponent,d as __namedExportsOrder,o as default};