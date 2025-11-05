import{r as s,j as e,e as m}from"./iframe-CFE3C2qE.js";import{I as g}from"./Icon.component-DYBRksp6.js";const f=`
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
`,h=`
  jn:opacity-50
  jn:cursor-not-allowed
`,r=({children:n,disabled:i=!1,label:l="",open:a=!1})=>{const[t,o]=s.useState(a);s.useEffect(()=>{o(a)},[a]);const d=u=>{i||(u.stopPropagation(),o(!t))},p=()=>n&&m.Children.count(n)>0?e.jsx("span",{onClick:d,role:"button",tabIndex:0,children:e.jsx(g,{size:"24",className:`
            juno-sidenavigation-item
            `,icon:t?"expandMore":"chevronRight"})}):null,c=()=>e.jsxs("div",{className:`${i?h:""} juno-sidenavigation-group ${f}`,children:[e.jsx("span",{className:"font-bold text-sm",children:l}),p()]});return e.jsxs(e.Fragment,{children:[c(),t&&n]})};try{r.displayName="SideNavigationGroup",r.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:"SideNavigationGroup",props:{children:{defaultValue:null,description:"Represents the nested components within the navigation group.",name:"children",required:!1,type:{name:"ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]"}},disabled:{defaultValue:{value:"false"},description:"Indicates if the navigation group is non-interactive when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"Label displayed for the navigation group.",name:"label",required:!1,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"Controls whether the navigation group is expanded by default.",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}export{r as S};
