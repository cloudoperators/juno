import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{M as d,a as n}from"./MenuItem.component-BUlz6dgB.js";import{M as i}from"./MenuSection.component-B-nQD8f3.js";import{B as I}from"./Button.component-D9RlkwXA.js";import"./index-DysCNOs_.js";import"./keyboard-BayCKsX5.js";import"./use-text-value-CqB0ebPQ.js";import"./use-tree-walker-sKJwDSu4.js";import"./Icon.component-CZB-Rh8M.js";import"./widgets-BR6-ubtP.js";import"./Spinner.component-BMWAXT0K.js";const v={title:"WiP/Menu",component:d,argTypes:{items:{table:{disable:!0}},children:{control:!1}}},t={args:{children:[e.jsx(n,{label:"Label only"},"1"),e.jsx(n,{label:"Label with Icon",icon:"help"},"2"),e.jsx(n,{label:"Item with a Link",href:"https://github.com/cloudoperators/juno"},"3"),e.jsx(n,{label:"Item with a Link and icon",href:"https://github.com/cloudoperators/juno",icon:"help"},"4"),e.jsx(n,{label:"Item with OnClick",onClick:()=>{}},"5"),e.jsx(n,{label:"Item with OnClick and Icon",onClick:()=>{},icon:"deleteForever"},"6"),e.jsx(n,{children:"Menu Item with Children"},"7"),e.jsx(n,{children:e.jsx(I,{label:"Delete",size:"small",variant:"subdued",icon:"deleteForever",className:"jn-w-full"})},"8")]}},l={args:{variant:"small",children:[e.jsx(n,{label:"Label only"},"1"),e.jsx(n,{label:"Label with Icon",icon:"help"},"2"),e.jsx(n,{label:"Item with a Link",href:"https://github.com/cloudoperators/juno"},"3"),e.jsx(n,{label:"Item with a Link and icon",href:"https://github.com/cloudoperators/juno",icon:"help"},"4"),e.jsx(n,{label:"Item with OnClick",onClick:()=>{}},"5"),e.jsx(n,{label:"Item with OnClick and Icon",onClick:()=>{},icon:"deleteForever"},"6")]}},o={args:{children:[e.jsxs(i,{children:[e.jsx(n,{label:"Label only"},"1"),e.jsx(n,{label:"Label with Icon",icon:"help"},"2")]},"m1"),e.jsxs(i,{title:"Danger Zone",children:[e.jsx(n,{label:"Item with a Link",href:"https://github.com/cloudoperators/juno"},"3"),e.jsx(n,{label:"Item with a Link and icon",href:"https://github.com/cloudoperators/juno",icon:"help"},"4"),e.jsx(n,{label:"Item with OnClick",onClick:()=>{}},"5"),e.jsx(n,{label:"Item with OnClick and Icon",onClick:()=>{},icon:"deleteForever"},"6")]},"m2")]}};var a,r,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<MenuItem label="Label only" key="1" />, <MenuItem label="Label with Icon" icon="help" key="2" />, <MenuItem label="Item with a Link" href="https://github.com/cloudoperators/juno" key="3" />, <MenuItem label="Item with a Link and icon" href="https://github.com/cloudoperators/juno" icon="help" key="4" />, <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />, <MenuItem label="Item with OnClick and Icon" onClick={() => {}} icon="deleteForever" key="6" />, <MenuItem key="7">Menu Item with Children</MenuItem>, <MenuItem key="8">
        <Button label="Delete" size="small" variant="subdued" icon="deleteForever" className="jn-w-full" />
      </MenuItem>]
  }
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var s,m,h;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "small",
    children: [<MenuItem label="Label only" key="1" />, <MenuItem label="Label with Icon" icon="help" key="2" />, <MenuItem label="Item with a Link" href="https://github.com/cloudoperators/juno" key="3" />, <MenuItem label="Item with a Link and icon" href="https://github.com/cloudoperators/juno" icon="help" key="4" />, <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />, <MenuItem label="Item with OnClick and Icon" onClick={() => {}} icon="deleteForever" key="6" />]
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,b,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: [<MenuSection key="m1">
        <MenuItem label="Label only" key="1" />
        <MenuItem label="Label with Icon" icon="help" key="2" />
      </MenuSection>, <MenuSection title="Danger Zone" key="m2">
        <MenuItem label="Item with a Link" href="https://github.com/cloudoperators/juno" key="3" />
        <MenuItem label="Item with a Link and icon" href="https://github.com/cloudoperators/juno" icon="help" key="4" />
        <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />
        <MenuItem label="Item with OnClick and Icon" onClick={() => {}} icon="deleteForever" key="6" />
      </MenuSection>]
  }
}`,...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const S=["Default","Small","WithASection"];export{t as Default,l as Small,o as WithASection,S as __namedExportsOrder,v as default};
