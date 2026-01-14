import{r as s,j as e,e as m}from"./iframe-DeA9zV8u.js";import{I as g}from"./Icon.component-DLA0dFlg.js";const f=`
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`,h=`
  jn:opacity-50
  jn:cursor-not-allowed
`,r=({children:n,disabled:o=!1,label:l="",open:a=!1})=>{const[t,i]=s.useState(a);s.useEffect(()=>{i(a)},[a]);const d=u=>{o||(u.stopPropagation(),i(!t))},p=()=>n&&m.Children.count(n)>0?e.jsx("span",{onClick:d,role:"button",tabIndex:0,children:e.jsx(g,{size:"24",className:`
            juno-sidenavigation-item
            `,icon:t?"expandMore":"chevronRight"})}):null,c=()=>e.jsxs("div",{className:`${o?h:""} juno-sidenavigation-group ${f}`,children:[e.jsx("span",{className:"font-bold text-sm",children:l}),p()]});return e.jsxs(e.Fragment,{children:[c(),t&&n]})};try{r.displayName="SideNavigationGroup",r.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:"SideNavigationGroup",props:{children:{defaultValue:null,description:"Represents the nested components within the navigation group.",name:"children",required:!1,type:{name:"ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]"}},disabled:{defaultValue:{value:"false"},description:"Indicates if the navigation group is non-interactive when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"Label displayed for the navigation group.",name:"label",required:!1,type:{name:"ReactNode"}},open:{defaultValue:{value:"false"},description:"Controls whether the navigation group is expanded by default.",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}export{r as S};
