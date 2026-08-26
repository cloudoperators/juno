import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./react-dom-BddMPX6d.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{n as i,r as a,t as o}from"./PortalProvider.component-CPwWWIUc.js";import{t as s}from"./Button.component-0w_Axl6g.js";import{t as c}from"./Button-93hd65Lo.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),l=n(),i(),c(),u=r(),d={title:`WiP/PortalProvider`,component:o,subcomponents:{"PortalProvider.Portal":o.Portal},tags:[`autodocs`],argTypes:{children:{control:!1}}},f=()=>{let e=a();return e?(0,l.createPortal)((0,u.jsx)(s,{label:`I'm inside a portal using the usePortalref hook in a custom component.`}),e):null},p={args:{children:(0,u.jsx)(o.Portal,{children:(0,u.jsx)(s,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})})}},m={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`span`,{children:` Some non-portalled content`}),(0,u.jsx)(f,{})]})}},h={args:{children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{children:`Some non-portaled content.`}),(0,u.jsx)(o.Portal,{children:(0,u.jsx)(s,{label:`I'm inside a portal using the Portal component as provided by PortalProvider.`})}),(0,u.jsx)(f,{})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...h.parameters?.docs?.source}}},g=[`WithPortalComponent`,`WithHook`,`MultiplePortals`]})))()}_();export{h as MultiplePortals,m as WithHook,p as WithPortalComponent,g as __namedExportsOrder,d as default};