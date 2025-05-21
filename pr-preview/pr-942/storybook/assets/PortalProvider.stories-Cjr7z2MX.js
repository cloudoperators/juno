import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-DnsdnBHL.js";import{P as o,u as b}from"./PortalProvider.component--bS0Im1B.js";import{B as l}from"./Button.component-CAgAAVSr.js";import"./index-DI7CEG0L.js";import"./index-BMl_lxmD.js";import"./Icon.component-Zxq71KFA.js";import"./Spinner.component-NCyRlNFL.js";const k={title:"WiP/PortalProvider",component:o,subcomponents:{"PortalProvider.Portal":o.Portal},tags:["autodocs"],argTypes:{children:{control:!1}}},x=()=>{const e=b();if(!e)return null;const n=r.jsx(l,{label:"I'm inside a portal using the usePortalref hook in a custom component."});return j.createPortal(n,e)},i=({children:e,...n})=>r.jsx(o,{...n,children:e}),t={render:i,args:{children:r.jsx(o.Portal,{children:r.jsx(l,{label:"I'm inside a portal using the Portal component as provided by PortalProvider."})})}},a={render:i,args:{children:r.jsxs(r.Fragment,{children:[r.jsx("span",{children:" Some non-portalled content"}),r.jsx(x,{})]})}},s={render:i,args:{children:r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"Some non-portaled content."}),r.jsx(o.Portal,{children:r.jsx(l,{label:"I'm inside a portal using the Portal component as provided by PortalProvider."})}),r.jsx(x,{})]})}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,P,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
  }
}`,...(u=(P=a.parameters)==null?void 0:P.docs)==null?void 0:u.source}}};var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["WithPortalComponent","WithHook","MultiplePortals"];export{s as MultiplePortals,a as WithHook,t as WithPortalComponent,E as __namedExportsOrder,k as default};
