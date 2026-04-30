import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{E as n,z as r}from"./iframe-MuPIkg3p.js";import{t as i}from"./Icon.component-GAPzHnA9.js";import{t as a}from"./Icon-qM4EOgye.js";var o,s,c,l,u,d=e((()=>{o=t(r()),a(),s=n(),c=`
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`,l=`
  jn:opacity-50
  jn:cursor-not-allowed
`,u=({children:e,disabled:t=!1,label:n=``,open:r=!1})=>{let[a,u]=(0,o.useState)(r);return(0,o.useEffect)(()=>{u(r)},[r]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`div`,{className:`${t?l:``} juno-sidenavigation-group ${c}`,children:[(0,s.jsx)(`span`,{className:`font-bold text-sm`,children:n}),e&&o.Children.count(e)>0?(0,s.jsx)(`span`,{onClick:e=>{t||(e.stopPropagation(),u(!a))},role:`button`,tabIndex:0,children:(0,s.jsx)(i,{size:`24`,className:`
            juno-sidenavigation-item
            `,icon:a?`expandMore`:`chevronRight`})}):null]}),a&&e]})};try{u.displayName=`SideNavigationGroup`,u.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Represents the nested components within the navigation group.`,name:`children`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Indicates if the navigation group is non-interactive when set to true.`,name:`disabled`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Label displayed for the navigation group.`,name:`label`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Controls whether the navigation group is expanded by default.`,name:`open`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
{@link SideNavigationGroupProps }`}}}catch{}}));export{d as n,u as t};