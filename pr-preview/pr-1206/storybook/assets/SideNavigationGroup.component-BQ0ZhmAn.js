import{r as c,j as e,e as g}from"./iframe-C5lWpbBS.js";import{I as m}from"./Icon.component-Cz6l0nqD.js";const f=`
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
`,o=({children:n,disabled:t=!1,label:i="",open:s=!1})=>{const[a,r]=c.useState(s),l=u=>{t||(u.stopPropagation(),r(!a))},d=()=>n&&g.Children.count(n)>0?e.jsx("span",{onClick:l,role:"button",tabIndex:0,children:e.jsx(m,{className:`
            juno-sidenavigation-item
            ${t?h:""}`,icon:a?"expandMore":"chevronRight"})}):null,p=()=>e.jsxs("div",{className:"juno-sidenavigation-group "+f,children:[e.jsx("span",{className:"font-bold text-sm",children:i}),d()]});return e.jsxs(e.Fragment,{children:[p(),a&&n]})};try{o.displayName="SideNavigationGroup",o.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:"SideNavigationGroup",props:{children:{defaultValue:null,description:"Represents the nested components within the navigation group.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Indicates if the navigation group is non-interactive when set to true.",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:""},description:"Text label displayed for the navigation group.",name:"label",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:"Controls whether the navigation group is expanded by default.",name:"open",required:!1,type:{name:"boolean"}}}}}catch{}export{o as S};
