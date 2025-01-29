import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{B as r}from"./BreadcrumbItem.component-DXX7zreL.js";import{r as h,e as m}from"./index-DysCNOs_.js";import{I}from"./Icon.component-57XAkwRW.js";import{S as y}from"./Stack.component-Cte3SL04.js";import"./widgets-BR6-ubtP.js";const o=({children:a,className:n="",...u})=>{const c=h.Children.toArray(a).filter(m.isValidElement),p=c.map((b,s)=>e.jsxs(m.Fragment,{children:[e.jsx(r,{...b.props}),s<c.length-1&&e.jsx(I,{icon:"chevronRight"})]},s));return e.jsx(y,{className:`juno-breadcrumb ${n}`,gap:"1",...u,children:p})};try{o.displayName="Breadcrumb",o.__docgenInfo={description:`Breadcrumb is a component that structures navigational links in a breadcrumb trail.

This component:
- Wraps around BreadcrumbItem or other custom components to create breadcrumb navigation.
- Automatically inserts separator icons between items.
- Filters out invalid React elements to prevent rendering errors.`,displayName:"Breadcrumb",props:{className:{defaultValue:{value:""},description:"Additional CSS styles to apply to the breadcrumb for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Optional React nodes or a collection of React nodes to be rendered as custom content.
The BreadcrumbItem component is typically used.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const B=({children:a,...n})=>e.jsx(o,{...n,children:a}),k={title:"Components/Breadcrumb/Breadcrumb",component:o,argTypes:{children:{control:!1}}},t={render:B,args:{children:[e.jsx(r,{label:"",icon:"home"},"1"),e.jsx(r,{label:"Breadcrumb Item"},"2"),e.jsx(r,{label:"Breadcrumb Item with Icon",icon:"place"},"3"),e.jsx(r,{label:"Disabled Item ",disabled:!0},"4"),e.jsx(r,{label:"Active Item",active:!0},"5")]}};var l,i,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<BreadcrumbItem key="1" label="" icon="home" />, <BreadcrumbItem key="2" label="Breadcrumb Item" />, <BreadcrumbItem key="3" label="Breadcrumb Item with Icon" icon="place" />, <BreadcrumbItem key="4" label="Disabled Item " disabled />, <BreadcrumbItem key="5" label="Active Item" active />]
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,k as default};
