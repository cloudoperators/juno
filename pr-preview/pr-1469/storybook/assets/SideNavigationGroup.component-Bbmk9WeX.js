import{r as o,j as e}from"./iframe-C1z8P0kA.js";import{I as m}from"./Icon.component-D5zf-z5f.js";const g=`
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`,f=`
  jn:opacity-50
  jn:cursor-not-allowed
`,r=({children:n,disabled:i=!1,label:l="",open:a=!1})=>{const[t,s]=o.useState(a);o.useEffect(()=>{s(a)},[a]);const d=u=>{i||(u.stopPropagation(),s(!t))},p=()=>n&&o.Children.count(n)>0?e.jsx("span",{onClick:d,role:"button",tabIndex:0,children:e.jsx(m,{size:"24",className:`
            juno-sidenavigation-item
            `,icon:t?"expandMore":"chevronRight"})}):null,c=()=>e.jsxs("div",{className:`${i?f:""} juno-sidenavigation-group ${g}`,children:[e.jsx("span",{className:"font-bold text-sm",children:l}),p()]});return e.jsxs(e.Fragment,{children:[c(),t&&n]})};try{r.displayName="SideNavigationGroup",r.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:"SideNavigationGroup",props:{children:{defaultValue:null,description:"Represents the nested components within the navigation group.",name:"children",required:!1,type:{name:"ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]"}},disabled:{defaultValue:{value:"false"},description:"Indicates if the navigation group is non-interactive when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"Label displayed for the navigation group.",name:"label",required:!1,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"Controls whether the navigation group is expanded by default.",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}export{r as S};
