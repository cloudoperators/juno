import{r as u,e as m,j as e}from"./iframe-DQD8D6l9.js";import{B as r}from"./BreadcrumbItem.component-C3dS4cQH.js";import{I as p}from"./Icon.component-Co1dEKNf.js";import{S as b}from"./Stack.component-J4uKWK7O.js";const n=({children:a,className:c="",...l})=>{const o=u.Children.toArray(a).filter(m.isValidElement),i=o.map((d,s)=>e.jsxs(m.Fragment,{children:[e.jsx(r,{...d.props}),s<o.length-1&&e.jsx(p,{icon:"chevronRight"})]},s));return e.jsx(b,{className:`juno-breadcrumb ${c}`,gap:"1",...l,children:i})};try{n.displayName="Breadcrumb",n.__docgenInfo={description:`Breadcrumb is a component that structures navigational links in a breadcrumb trail.

This component:
- Wraps around BreadcrumbItem or other custom components to create breadcrumb navigation.
- Automatically inserts separator icons between items.
- Filters out invalid React elements to prevent rendering errors.`,displayName:"Breadcrumb",props:{className:{defaultValue:{value:""},description:"Additional CSS styles to apply to the breadcrumb for custom styling.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:`Optional React nodes or a collection of React nodes to be rendered as custom content.
The BreadcrumbItem component is typically used.`,name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const h=({children:a,...c})=>e.jsx(n,{...c,children:a}),g={title:"Components/Breadcrumb/Breadcrumb",component:n,argTypes:{children:{control:!1}}},t={render:h,args:{children:[e.jsx(r,{label:"",icon:"home"},"1"),e.jsx(r,{label:"Breadcrumb Item"},"2"),e.jsx(r,{label:"Breadcrumb Item with Icon",icon:"place"},"3"),e.jsx(r,{label:"Disabled Item ",disabled:!0},"4"),e.jsx(r,{label:"Active Item",active:!0},"5")]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    children: [<BreadcrumbItem key="1" label="" icon="home" />, <BreadcrumbItem key="2" label="Breadcrumb Item" />, <BreadcrumbItem key="3" label="Breadcrumb Item with Icon" icon="place" />, <BreadcrumbItem key="4" label="Disabled Item " disabled />, <BreadcrumbItem key="5" label="Active Item" active />]
  }
}`,...t.parameters?.docs?.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,g as default};
