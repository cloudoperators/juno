import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-C21x__mS.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import"./SideNavigationItem.component-DMTGRsar.js";import{t as i}from"./Icon.component-B4rrvWVV.js";import{t as a}from"./Icon-C1gNJsPD.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(n()),a(),s=r(),c=`
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
`,l=`
  jn:cursor-pointer
  jn:hover:bg-theme-sidenav-item-hover
`,u=`
  jn:flex
  jn:items-center
  jn:flex-grow
  jn:min-w-0
  jn:min-h-[1.875rem]
`,d=`
  jn:text-left
  jn:line-clamp-2
  jn:[overflow-wrap:anywhere]
`,f=`
  jn:flex
  jn:items-center
  jn:min-h-[1.875rem]
`,p=({children:e,label:t=``,open:n=!1,onToggle:r})=>{let[a,p]=(0,o.useState)(n);(0,o.useEffect)(()=>{p(n)},[n]);let m=e=>{e.stopPropagation();let t=!a;p(t),r?.(t)},h=!!e&&o.Children.count(e)>0,g=typeof t==`string`&&t.length>0?t:void 0,_=()=>h?(0,s.jsx)(`span`,{className:f,"aria-hidden":`true`,children:(0,s.jsx)(i,{size:`24`,icon:a?`expandMore`:`chevronRight`})}):null,v=()=>(0,s.jsx)(`span`,{className:u,children:(0,s.jsx)(`span`,{className:`${d}`,children:t})});return(0,s.jsxs)(`li`,{className:`juno-sidenavigation-group-element`,children:[(()=>{let e=`juno-sidenavigation-group ${c} ${a?`juno-sidenavigation-group-open`:``}`;return h?(0,s.jsxs)(`button`,{type:`button`,onClick:m,"aria-expanded":a,className:`${e} ${l}`,title:g,children:[v(),_()]}):(0,s.jsx)(`div`,{className:e,title:g,children:v()})})(),a&&h&&(0,s.jsx)(`ul`,{children:e})]})};try{p.displayName=`SideNavigationGroup`,p.__docgenInfo={description:`SideNavigationGroup is a component designed to encapsulate and organize multiple
SideNavigationItem components, forming a logical grouping within a side navigation structure.

This component is used to create and manage expandable and collapsible sections of navigation,
allowing users to efficiently navigate hierarchical menus.`,displayName:`SideNavigationGroup`,filePath:`/home/runner/work/juno/juno/packages/ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Represents the nested components within the navigation group.`,name:`children`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactElement<SideNavigationItemProps, string | JSXElementConstructor<any>> | ReactElement<SideNavigationItemProps, string | JSXElementConstructor<...>>[]`}},label:{defaultValue:{value:``},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Label displayed for the navigation group.`,name:`label`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},open:{defaultValue:{value:`false`},declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Sets the open state of the navigation group. The component owns the open state internally but re-syncs to this prop whenever the parent updates it, so it can be used either as the initial value or to drive the state from the outside.`,name:`open`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`boolean`}},onToggle:{defaultValue:null,declarations:[{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`}],description:`Fired when the user clicks the group to toggle it. Receives the next open state.`,name:`onToggle`,parent:{fileName:`ui-components/src/components/SideNavigationGroup/SideNavigationGroup.component.tsx`,name:`SideNavigationGroupProps`},required:!1,tags:{},type:{name:`((_isOpen: boolean) => void)`}}},tags:{see:`https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
{@link SideNavigationGroupProps }`}}}catch{}})))()}export{m as n,p as t};