import{r as e,j as o}from"./iframe-DZXlvdcR.js";import{P as C}from"./PageHeader.component-DCpnQ63X.js";import{B as A}from"./Button.component-BUwl8yNN.js";import"./Icon.component-Cdq3sDCI.js";import"./Spinner.component-_iGmJrgi.js";const P=({title:r,titleId:t,...s},n)=>e.createElement("svg",{width:1200,height:200,viewBox:"0 0 1200 200",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t,...s},r?e.createElement("title",{id:t},r):null,e.createElement("defs",null,e.createElement("clipPath",{id:"a"},e.createElement("path",{d:"M1200 0v200H0V0h1200Z"}))),e.createElement("g",{clipPath:"url(#a)"},e.createElement("g",{clipPath:"url(#a)"},e.createElement("path",{stroke:"#15CCE4",strokeWidth:24,fill:"none",strokeMiterlimit:5,d:"M0 0h1200v200H0V0z"})),e.createElement("path",{d:"m0 0 1200 200M0 200 1200 0",stroke:"#15CCE4",strokeWidth:12,fill:"none",strokeMiterlimit:10}))),E=e.forwardRef(P),y=({title:r,titleId:t,...s},n)=>e.createElement("svg",{width:200,height:800,viewBox:"0 0 200 800",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t,...s},r?e.createElement("title",{id:t},r):null,e.createElement("defs",null,e.createElement("clipPath",{id:"a"},e.createElement("path",{d:"M200 0v800H0V0h200Z"}))),e.createElement("g",{clipPath:"url(#a)"},e.createElement("g",{clipPath:"url(#a)"},e.createElement("path",{stroke:"#15CCE4",strokeWidth:24,fill:"none",strokeMiterlimit:5,d:"M0 0h200v800H0V0z"})),e.createElement("path",{d:"m0 0 200 800M200 0 0 800",stroke:"#15CCE4",strokeWidth:12,fill:"none",strokeMiterlimit:10}))),M=e.forwardRef(y),x=({title:r,titleId:t,...s},n)=>e.createElement("svg",{width:1e3,height:1e3,viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",alt:"dummy logo square",role:"img",ref:n,"aria-labelledby":t,...s},r?e.createElement("title",{id:t},r):null,e.createElement("defs",null,e.createElement("clipPath",{id:"a"},e.createElement("path",{d:"M1000 0v1000H0V0h1000Z"}))),e.createElement("g",{clipPath:"url(#a)"},e.createElement("g",{clipPath:"url(#a)"},e.createElement("path",{stroke:"#15D0E0",strokeWidth:24,fill:"none",strokeMiterlimit:5,d:"M0 0h1000v1000H0V0z"})),e.createElement("path",{d:"m0 0 1000 1000M1000 0 0 1000",stroke:"#15D0E0",strokeWidth:12,fill:"none",strokeMiterlimit:10}))),f=e.forwardRef(x),H=""+new URL("custom-logo-landscape-BlrHjy69.png",import.meta.url).href,S=""+new URL("custom-logo-portrait-ClG6Vw6s.png",import.meta.url).href,W=""+new URL("custom-logo-square-CltXXnQF.png",import.meta.url).href,j=()=>o.jsx("img",{src:W,alt:"Custom Logo Square"}),N=()=>o.jsx("img",{src:H,alt:"Custom Logo Landscape"}),k=()=>o.jsx("img",{src:S,alt:"Custom Logo Portrait"}),a=()=>{const r={marginRight:"1rem"};return o.jsxs(o.Fragment,{children:[o.jsx("span",{style:r,children:"Jane Doe"}),o.jsx(A,{size:"small",children:"Log Out"})]})},O={title:"Layout/PageHeader",component:C,argTypes:{children:{control:!1,table:{type:{summary:"ReactNode"}}},heading:{control:"text",table:{type:{summary:"string | ReactElement"}}},logo:{control:"boolean",table:{type:{summary:"boolean | ReactElement"}}}}},i={args:{heading:"My App",logo:!0}},l={parameters:{docs:{description:{story:"PageHeader with Heading."}}},args:{heading:"My Awesome App"}},m={args:{heading:"My Awesome App",children:o.jsx(a,{})}},c={args:{children:o.jsx(a,{})}},g={args:{logo:!1,heading:"My Awesome App",children:o.jsx(a,{})}},d={args:{logo:o.jsx(f,{alt:""}),heading:"My Awesome App",children:o.jsx(a,{})}},p={args:{logo:o.jsx(E,{alt:""}),heading:"My Awesome App",children:o.jsx(a,{})}},h={args:{logo:o.jsx(M,{alt:""}),heading:"My Awesome App"}},u={args:{logo:o.jsx(j,{}),heading:"My Awesome App",children:o.jsx(a,{})}},w={args:{logo:o.jsx(N,{}),heading:"My Awesome App",children:o.jsx(a,{})}},L={args:{logo:o.jsx(k,{}),heading:"My Awesome App",children:o.jsx(a,{})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "My App",
    logo: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "PageHeader with Heading."
      }
    }
  },
  args: {
    heading: "My Awesome App"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <HeaderOptions />
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logo: false,
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <CustomLogoSquare alt={""} />,
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <CustomLogoLandscape alt={""} />,
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <CustomLogoPortrait alt={""} />,
    heading: "My Awesome App"
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <CustomLogoImagePNGSquare />,
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...u.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <CustomLogoImagePNGLandscape />,
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <CustomLogoImagePNGPortrait />,
    heading: "My Awesome App",
    children: <HeaderOptions />
  }
}`,...L.parameters?.docs?.source}}};const I=["Default","WithHeading","WithHeadingAndChildren","NoHeadingWithChildren","NoLogo","WithCustomLogoSquareInline","WithCustomLogoLandscapeInline","WithCustomLogoPortraitInline","WithCustomLogoPNGSquare","WithCustomLogoPNGLandscape","WithCustomLogoPNGPortrait"];export{i as Default,c as NoHeadingWithChildren,g as NoLogo,p as WithCustomLogoLandscapeInline,w as WithCustomLogoPNGLandscape,L as WithCustomLogoPNGPortrait,u as WithCustomLogoPNGSquare,h as WithCustomLogoPortraitInline,d as WithCustomLogoSquareInline,l as WithHeading,m as WithHeadingAndChildren,I as __namedExportsOrder,O as default};
