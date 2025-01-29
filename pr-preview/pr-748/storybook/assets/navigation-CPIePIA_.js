import{j as n}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as r}from"./index-DyCphG7h.js";import{ao as m,ap as t}from"./index-C-dTYFnQ.js";import"./index-D-8MO0q_.js";import{Default as v}from"./TopNavigation.stories-D5ztg-Oc.js";import{Default as g}from"./SideNavigation.stories-BylYXMcO.js";import{Default as x}from"./TabNavigation.stories-D6FxF48B.js";import"./index-DysCNOs_.js";import"./iframe-BGxoQ1oD.js";import"../sb-preview/runtime.js";import"./index-DxCGxluL.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./TopNavigationItem.component-DtRTHoXP.js";import"./NavigationItem.component-x3veXO2o.js";import"./Icon.component-57XAkwRW.js";import"./widgets-BR6-ubtP.js";import"./SideNavigationItem.component-Hwsh4q64.js";import"./TabNavigationItem.component-qCF3wz1Z.js";const{STORY_CHANGED:I,SELECT_STORY:j}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:u,addons:c}=__STORYBOOK_MODULE_PREVIEW_API__,{global:T}=__STORYBOOK_MODULE_GLOBAL__;var N="links",{document:d,HTMLElement:b}=T,f=i=>c.getChannel().emit(j,i),h=i=>{let{target:e}=i;if(!(e instanceof b))return;let p=e,{sbKind:o,sbStory:s}=p.dataset;(o||s)&&(i.preventDefault(),f({kind:o,story:s}))},a=!1,y=()=>{a||(a=!0,d.addEventListener("click",h))},w=()=>{a&&(a=!1,d.removeEventListener("click",h))};u({name:"withLinks",parameterName:N,wrapper:(i,e)=>(y(),c.getChannel().once(I,w),i(e))});function l(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:`/_
~ SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
~ SPDX-License-Identifier: Apache-2.0
_/`}),`
`,`
`,n.jsx(m,{title:"Navigation/Navigation"}),`
`,n.jsx(e.h1,{id:"navigation",children:"Navigation"}),`
`,n.jsx(e.p,{children:"The Juno Design System comes with a variety of navigational elements. They are designed for different purposes and roles, but use a consistent API."}),`
`,n.jsx(e.h2,{id:"topnavigation",children:"TopNavigation"}),`
`,n.jsx(t,{of:v}),`
`,n.jsxs(e.p,{children:["A can only be used underneath an application's header, and above any other content elements. When used, it is the primary, top-level navigation. There can only ever be one ",n.jsx(e.code,{children:"TopNavigation"})," in an application."]}),`
`,n.jsxs(e.p,{children:["For applications with a complex navigational or hierarchical structure, a ",n.jsx(e.code,{children:"SideNavigation"})," and/or ",n.jsx(e.code,{children:"TabNavigation"})," can be used as a secondary navigation."]}),`
`,n.jsx(e.h2,{id:"sidenavigation",children:"SideNavigation"}),`
`,n.jsx(t,{of:g}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.code,{children:"SideNavigation"})," lives on the left of a page's or view's content. It can serve as a primary navigation when used alone, or as a secondary navigation when a ",n.jsx(e.code,{children:"TopNavigation"})," is being used as well."]}),`
`,n.jsx(e.h2,{id:"tabnavigation",children:"TabNavigation"}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.p,{children:"A TabNavigation visually comes across as an array of tabs, but it serves predominantly navigational purposes. It can live as the top element in the content of a page or view, or it can be used at any place inside the content."}),`
`,n.jsxs(e.p,{children:["Even though a TabNavigation looks and, to the user, works identically to ",n.jsx(e.code,{children:"Tabs"}),", it works differently: ",n.jsx(e.code,{children:"TabNavigation"}),", consistent with the other types of navigations, expects an ",n.jsx(e.code,{children:"onActiveItemChange"}),"-handler, telling the application what to do when the user interacts with the navigation. It does not automatically handle any content panels on a page or view. This is what ",n.jsx(e.code,{children:"Tabs"})," is for."]}),`
`,n.jsx(e.h2,{id:"usage-and-api",children:"Usage and API"}),`
`,n.jsxs(e.p,{children:["As a minimum, each item in a navigation needs a ",n.jsx(e.code,{children:"label"})," to render."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<TopNavigation>
  <TopNavigationItem label="Item 1" />
  <TopNavigationItem label="Item 2" />
  <TopNavigationItem label="Item 3" />
</TopNavigation>
`})}),`
`,n.jsxs(e.p,{children:["In order to set an item as the active item, it can be set via an ",n.jsx(e.code,{children:"active"})," prop on an individual item…"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<TopNavigation>
  <TopNavigationItem label="Item 1" active />
  <TopNavigationItem label="Item 2" />
  <TopNavigationItem label="Item 3" />
</TopNavigation>
`})}),`
`,n.jsxs(e.p,{children:["… or by passing an ",n.jsx(e.code,{children:"activeItem"})," prop on the navigation parent:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<TopNavigation activeItem="Item 1" >
  <TopNavigationItem label="Item 1" />
  <TopNavigationItem label="Item 2" />
  <TopNavigationItem label="Item 3" />
</TopNavigation>
`})}),`
`,n.jsxs(e.p,{children:["When both are being passed, the ",n.jsx(e.code,{children:"activeItem"})," prop on the parent will take precedence."]}),`
`,n.jsxs(e.p,{children:["If application logic requires the use of more technical keys to identify any navigational item, it can accept an additional ",n.jsx(e.code,{children:"value"})," prop:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<TopNavigation>
  <TopNavigationItem label="Item 1" value="itm-1" />
  <TopNavigationItem label="Item 2" value="itm-2" />
  <TopNavigationItem label="Item 3" value="itm-3" />
</TopNavigation>
`})}),`
`,n.jsxs(e.p,{children:["NOTE: When using ",n.jsx(e.code,{children:"value"})," props on the individual items, and the active item needs to be set on the parent, ONLY the ",n.jsx(e.code,{children:"value"})," of the respective item can be used to set the ",n.jsx(e.code,{children:"activeItem"})," on the parent. Passing the ",n.jsx(e.code,{children:"label"})," to set the ",n.jsx(e.code,{children:"activeItem"}),"on the parent will NOT work when using values on the children, as ",n.jsx(e.code,{children:"value"})," will be used internally to identify each tab when passed."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<TopNavigation activeItem="itm-1">
  <TopNavigationItem label="Item 1" value="itm-1" />
  <TopNavigationItem label="Item 2" value="itm-2" />
  <TopNavigationItem label="Item 3" value="itm-3" />
</TopNavigation>
`})}),`
`,n.jsxs(e.p,{children:["You may also pass ",n.jsx(e.code,{children:"children"})," to each navigation item and they will be rendered. When using ",n.jsx(e.code,{children:"children"}),", either ",n.jsx(e.code,{children:"value"})," or ",n.jsx(e.code,{children:"label"})," MUST be passed, too, in order to make the navigation work. When passing ",n.jsx(e.code,{children:"children"})," and ",n.jsx(e.code,{children:"label"}),", children will be rendered instead of labels, the latter will still be needed as an internal identifier."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`// Use value on the items when passing children to them:

<TopNavigation activeItem="itm-1">
  <TopNavigationItem value="itm-1">Item 1</TopNavigationItem>
  <TopNavigationItem value="itm-2">Item 2</TopNavigationItem>
  <TopNavigationItem value="itm-3">Item 3</TopNavigationItem>
</TopNavigation>

// or use labels:

<TopNavigation activeItem="itm-1">
  <TopNavigationItem label="itm-1">Item 1</TopNavigationItem>
  <TopNavigationItem label="itm-2">Item 2</TopNavigationItem>
  <TopNavigationItem label="itm-3">Item 3</TopNavigationItem>
</TopNavigation>

`})}),`
`,n.jsxs(e.p,{children:["When children, values and labels are being passed to the navigation items, the same caveat will apply as described above: In this case, ONLY the ",n.jsx(e.code,{children:"value"})," of the respective item will work to set the active item on the parent via ",n.jsx(e.code,{children:"activeItem"}),"."]})]})}function G(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{G as default};
