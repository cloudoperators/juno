import{c as T,j as W}from"./iframe-BF07MaSR.js";const w={title:"Layout/StyleProvider",component:T,argTypes:{stylesWrapper:{options:["head","inline","shadowRoot"],control:{type:"radio"}},children:{control:!1}}},a=o=>W.jsx(T,{...o,children:o.children||o.stylesWrapper||"undefined"}),e={render:a,args:{stylesWrapper:"head"}},r={render:a,args:{stylesWrapper:"inline"}},s={render:a,args:{stylesWrapper:"shadowRoot"}},t={render:a,args:{stylesWrapper:"shadowRoot",theme:"theme-light",children:"Light Theme"}};var n,d,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "head"
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "inline"
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,h,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot"
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,u,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    stylesWrapper: "shadowRoot",
    theme: "theme-light",
    children: "Light Theme"
  }
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const A=["AddStylesToHead","AddInlineStyles","AddStylesToShadowRoot","WithLightTheme"];export{r as AddInlineStyles,e as AddStylesToHead,s as AddStylesToShadowRoot,t as WithLightTheme,A as __namedExportsOrder,w as default};
