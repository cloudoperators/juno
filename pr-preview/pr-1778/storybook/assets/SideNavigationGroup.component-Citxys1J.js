import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-CmJWSAiZ.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{i,r as a}from"./SideNavigationItem.component-BPUjLW7t.js";import{t as o}from"./Icon.component-bAvfIUwl.js";import{t as s}from"./Icon-BwBXHYNH.js";var c,l,u,d,f,p,m,h,g=t((()=>{c=e(n()),s(),i(),l=r(),u=`
  jn:flex
  jn:items-start
  jn:justify-between
  jn:pl-[0.5rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`,d=`
  jn:cursor-pointer
  jn:hover:bg-theme-sidenav-item-hover
`,f=`
  jn:flex
  jn:items-center
  jn:flex-grow
  jn:min-w-0
  jn:min-h-[1.875rem]
`,p=`
  jn:text-left
  jn:line-clamp-2
  jn:[overflow-wrap:anywhere]
`,m=`
  jn:flex
  jn:items-center
  jn:min-h-[1.875rem]
`,h=({children:e,label:t=``,open:n=!1})=>{let[r,i]=(0,c.useState)(n);(0,c.useEffect)(()=>{i(n)},[n]);let s=e=>{e.stopPropagation(),i(!r)},h=!!e&&c.Children.count(e)>0,g=typeof t==`string`&&t.length>0?t:void 0,_=()=>h?(0,l.jsx)(`span`,{className:m,"aria-hidden":`true`,children:(0,l.jsx)(o,{size:`24`,icon:r?`expandMore`:`chevronRight`})}):null,v=()=>(0,l.jsx)(`span`,{className:f,children:(0,l.jsx)(`span`,{className:p,children:t})});return(0,l.jsxs)(l.Fragment,{children:[(()=>{let e=`juno-sidenavigation-group ${u} ${r?`juno-sidenavigation-group-open`:``}`;return h?(0,l.jsxs)(`button`,{type:`button`,onClick:s,"aria-expanded":r,className:`${e} ${d}`,title:g,children:[v(),_()]}):(0,l.jsx)(`div`,{className:e,title:g,children:v()})})(),r&&(0,l.jsx)(a.Provider,{value:1,children:e})]})};try{h.displayName=`SideNavigationGroup`,h.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Represents the nested components within the navigation group.`,name:`children`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Label displayed for the navigation group.`,name:`label`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Controls whether the navigation group is expanded by default.`,name:`open`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
{@link SideNavigationGroupProps }`}}}catch{}}));export{g as n,h as t};