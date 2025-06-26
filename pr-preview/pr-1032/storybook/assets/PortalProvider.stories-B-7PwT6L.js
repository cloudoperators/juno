import{j as r,b as x}from"./iframe-B-LWM0em.js";import{P as a,u as j}from"./PortalProvider.component-COL3iRnS.js";import{B as s}from"./Button.component-DOA7dp1x.js";import"./Icon.component-DVKIIcy7.js";import"./Spinner.component-DPh0kK1i.js";const M={title:"WiP/PortalProvider",component:a,subcomponents:{"PortalProvider.Portal":a.Portal},tags:["autodocs"],argTypes:{children:{control:!1}}},g=()=>{const n=j();if(!n)return null;const v=r.jsx(s,{label:"I'm inside a portal using the usePortalref hook in a custom component."});return x.createPortal(v,n)},o={args:{children:r.jsx(a.Portal,{children:r.jsx(s,{label:"I'm inside a portal using the Portal component as provided by PortalProvider."})})}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx("span",{children:" Some non-portalled content"}),r.jsx(g,{})]})}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Some non-portaled content."}),r.jsx(a.Portal,{children:r.jsx(s,{label:"I'm inside a portal using the Portal component as provided by PortalProvider."})}),r.jsx(g,{})]})}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,p,P;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...(P=(p=e.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var m,u,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const W=["WithPortalComponent","WithHook","MultiplePortals"];export{t as MultiplePortals,e as WithHook,o as WithPortalComponent,W as __namedExportsOrder,M as default};
