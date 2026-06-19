import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{a as i,i as a,r as o}from"./SideNavigationItem.component-CuXJBUbT.js";import{t as s}from"./Icon.component-BJMaMDQz.js";import{t as c}from"./Icon-DCRTm-nP.js";var l,u,d,f,p,m,h,g,_=t((()=>{l=e(n()),c(),i(),o(),u=r(),d=`
  jn:flex
  jn:items-start
  jn:justify-between
  jn:pl-[0.5rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`,f=`
  jn:cursor-pointer
  jn:hover:bg-theme-sidenav-item-hover
`,p=`
  jn:flex
  jn:items-center
  jn:flex-grow
  jn:min-w-0
  jn:min-h-[1.875rem]
`,m=`
  jn:text-left
  jn:line-clamp-2
  jn:[overflow-wrap:anywhere]
`,h=`
  jn:flex
  jn:items-center
  jn:min-h-[1.875rem]
`,g=({children:e,label:t=``,open:n=!1})=>{let[r,i]=(0,l.useState)(n),o=(0,l.useContext)(a),c=`level-${o+1}`;(0,l.useEffect)(()=>{i(n)},[n]);let g=e=>{e.stopPropagation(),i(!r)},_=!!e&&l.Children.count(e)>0,v=typeof t==`string`&&t.length>0?t:void 0,y=()=>_?(0,u.jsx)(`span`,{className:h,"aria-hidden":`true`,children:(0,u.jsx)(s,{size:`24`,icon:r?`expandMore`:`chevronRight`})}):null,b=()=>(0,u.jsx)(`span`,{className:p,children:(0,u.jsx)(`span`,{className:`${m} ${c}`,children:t})});return(0,u.jsxs)(u.Fragment,{children:[(()=>{let e=`juno-sidenavigation-group ${d} ${r?`juno-sidenavigation-group-open`:``}`;return _?(0,u.jsxs)(`button`,{type:`button`,onClick:g,"aria-expanded":r,className:`${e} ${f}`,title:v,children:[b(),y()]}):(0,u.jsx)(`div`,{className:e,title:v,children:b()})})(),r&&(0,u.jsx)(a.Provider,{value:o+1,children:e})]})};try{g.displayName=`SideNavigationGroup`,g.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Represents the nested components within the navigation group.`,name:`children`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Label displayed for the navigation group.`,name:`label`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Controls whether the navigation group is expanded by default.`,name:`open`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
{@link SideNavigationGroupProps }`}}}catch{}}));export{_ as n,g as t};