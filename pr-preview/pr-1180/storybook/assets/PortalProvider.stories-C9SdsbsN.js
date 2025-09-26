import{j as r,b as d}from"./iframe-BQ-cpnA3.js";import{P as a,u as c}from"./PortalProvider.component-Br1imvgd.js";import{B as s}from"./Button.component-D1j0jIfH.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon.component-CPtFKpL7.js";import"./Spinner.component-D_tFgP6h.js";const v={title:"WiP/PortalProvider",component:a,subcomponents:{"PortalProvider.Portal":a.Portal},tags:["autodocs"],argTypes:{children:{control:!1}}},l=()=>{const n=c();if(!n)return null;const i=r.jsx(s,{label:"I'm inside a portal using the usePortalref hook in a custom component."});return d.createPortal(i,n)},o={args:{children:r.jsx(a.Portal,{children:r.jsx(s,{label:"I'm inside a portal using the Portal component as provided by PortalProvider."})})}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx("span",{children:" Some non-portalled content"}),r.jsx(l,{})]})}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Some non-portaled content."}),r.jsx(a.Portal,{children:r.jsx(s,{label:"I'm inside a portal using the Portal component as provided by PortalProvider."})}),r.jsx(l,{})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...t.parameters?.docs?.source}}};const x=["WithPortalComponent","WithHook","MultiplePortals"];export{t as MultiplePortals,e as WithHook,o as WithPortalComponent,x as __namedExportsOrder,v as default};
