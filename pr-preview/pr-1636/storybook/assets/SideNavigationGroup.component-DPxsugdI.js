import{g as e}from"./iframe-Cx-zHds2.js";import{t}from"./Icon.component-hvX4Q9Gp.js";import"./Icon-DLrP9JFG.js";import{Children as n,useEffect as r,useState as i}from"react";var a=e(),o=`
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`,s=`
  jn:opacity-50
  jn:cursor-not-allowed
`,c=({children:e,disabled:c=!1,label:l=``,open:u=!1})=>{let[d,f]=i(u);return r(()=>{f(u)},[u]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`div`,{className:`${c?s:``} juno-sidenavigation-group ${o}`,children:[(0,a.jsx)(`span`,{className:`font-bold text-sm`,children:l}),e&&n.count(e)>0?(0,a.jsx)(`span`,{onClick:e=>{c||(e.stopPropagation(),f(!d))},role:`button`,tabIndex:0,children:(0,a.jsx)(t,{size:`24`,className:`
            juno-sidenavigation-item
            `,icon:d?`expandMore`:`chevronRight`})}):null]}),d&&e]})};try{c.displayName=`SideNavigationGroup`,c.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,props:{children:{defaultValue:null,description:`Represents the nested components within the navigation group.`,name:`children`,required:!1,type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},disabled:{defaultValue:{value:`false`},description:`Indicates if the navigation group is non-interactive when set to true.`,name:`disabled`,required:!1,type:{name:`boolean`}},label:{defaultValue:{value:``},description:`Label displayed for the navigation group.`,name:`label`,required:!1,type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},description:`Controls whether the navigation group is expanded by default.`,name:`open`,required:!1,type:{name:`boolean`}}}}}catch{}export{c as t};