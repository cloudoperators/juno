import{o as e}from"./rolldown-runtime-BM3Ffeng.js";import{t}from"./react-DC78jhTx.js";import{g as n}from"./iframe-qPHz0liX.js";import{t as r}from"./Icon.component-BYUQ4r57.js";import"./Icon-Dmh8fJaS.js";var i=e(t()),a=n(),o=`
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
`,c=({children:e,disabled:t=!1,label:n=``,open:c=!1})=>{let[l,u]=(0,i.useState)(c);return(0,i.useEffect)(()=>{u(c)},[c]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`div`,{className:`${t?s:``} juno-sidenavigation-group ${o}`,children:[(0,a.jsx)(`span`,{className:`font-bold text-sm`,children:n}),e&&i.Children.count(e)>0?(0,a.jsx)(`span`,{onClick:e=>{t||(e.stopPropagation(),u(!l))},role:`button`,tabIndex:0,children:(0,a.jsx)(r,{size:`24`,className:`
            juno-sidenavigation-item
            `,icon:l?`expandMore`:`chevronRight`})}):null]}),l&&e]})};try{c.displayName=`SideNavigationGroup`,c.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,props:{children:{defaultValue:null,description:`Represents the nested components within the navigation group.`,name:`children`,required:!1,type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},disabled:{defaultValue:{value:`false`},description:`Indicates if the navigation group is non-interactive when set to true.`,name:`disabled`,required:!1,type:{name:`boolean`}},label:{defaultValue:{value:``},description:`Label displayed for the navigation group.`,name:`label`,required:!1,type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},description:`Controls whether the navigation group is expanded by default.`,name:`open`,required:!1,type:{name:`boolean`}}}}}catch{}export{c as t};