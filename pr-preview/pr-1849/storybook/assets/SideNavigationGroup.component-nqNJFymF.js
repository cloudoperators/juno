import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{t as r}from"./jsx-runtime-O9QVJvLM.js";import{r as i}from"./SideNavigationItem.component-DyJTT9AC.js";import{t as a}from"./Icon.component-D0_R5E3L.js";import{t as o}from"./Icon-B20ohpUd.js";var s,c,l,u,d,f,p,m,h=t((()=>{s=e(n()),o(),i(),c=r(),l=`
  jn:flex
  jn:items-start
  jn:justify-between
  jn:pl-[0.5rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
  jn:text-sm
`,u=`
  jn:cursor-pointer
  jn:hover:bg-theme-sidenav-item-hover
`,d=`
  jn:flex
  jn:items-center
  jn:flex-grow
  jn:min-w-0
  jn:min-h-[1.875rem]
`,f=`
  jn:text-left
  jn:line-clamp-2
  jn:[overflow-wrap:anywhere]
`,p=`
  jn:flex
  jn:items-center
  jn:min-h-[1.875rem]
`,m=({children:e,label:t=``,open:n=!1,onToggle:r})=>{let[i,o]=(0,s.useState)(n);(0,s.useEffect)(()=>{o(n)},[n]);let m=e=>{e.stopPropagation();let t=!i;o(t),r?.(t)},h=!!e&&s.Children.count(e)>0,g=typeof t==`string`&&t.length>0?t:void 0,_=()=>h?(0,c.jsx)(`span`,{className:p,"aria-hidden":`true`,children:(0,c.jsx)(a,{size:`24`,icon:i?`expandMore`:`chevronRight`})}):null,v=()=>(0,c.jsx)(`span`,{className:d,children:(0,c.jsx)(`span`,{className:`${f}`,children:t})});return(0,c.jsxs)(`li`,{className:`juno-sidenavigation-group-element`,children:[(()=>{let e=`juno-sidenavigation-group ${l} ${i?`juno-sidenavigation-group-open`:``}`;return h?(0,c.jsxs)(`button`,{type:`button`,onClick:m,"aria-expanded":i,className:`${e} ${u}`,title:g,children:[v(),_()]}):(0,c.jsx)(`div`,{className:e,title:g,children:v()})})(),i&&h&&(0,c.jsx)(`ul`,{children:e})]})};try{m.displayName=`SideNavigationGroup`,m.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Represents the nested components within the navigation group.`,name:`children`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Label displayed for the navigation group.`,name:`label`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Sets the open state of the navigation group. The component owns the open state internally but re-syncs to this prop whenever the parent updates it, so it can be used either as the initial value or to drive the state from the outside.`,name:`open`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`boolean`}},onToggle:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Fired when the user clicks the group to toggle it. Receives the next open state.`,name:`onToggle`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`((_isOpen: boolean) => void)`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
{@link SideNavigationGroupProps }`}}}catch{}}));export{h as n,m as t};