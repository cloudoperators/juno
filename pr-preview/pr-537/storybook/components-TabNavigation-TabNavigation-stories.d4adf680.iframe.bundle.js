"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5911],{"./src/components/TabNavigation/TabNavigation.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TabNavigationContext,a:()=>TabNavigation});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Navigation_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Navigation/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabNavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),TabNavigation=function(_a){var _b=_a.activeItem,activeItem=void 0===_b?"":_b,ariaLabel=_a.ariaLabel,_c=_a.children,children=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,onActiveItemChange=_a.onActiveItemChange,_f=_a.tabStyle,tabStyle=void 0===_f?"main":_f,props=__rest(_a,["activeItem","ariaLabel","children","className","disabled","onActiveItemChange","tabStyle"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabNavigationContext.Provider,{value:{tabStyle},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navigation_index__WEBPACK_IMPORTED_MODULE_2__.V,__assign({activeItem,ariaLabel,className:"\n          juno-tabnavigation \n          juno-tabnavigation-".concat(tabStyle," \n          ").concat("\n  jn-flex\n"," \n          ").concat(className,"\n        "),disabled,onActiveItemChange},props,{children}))})};try{TabNavigation.displayName="TabNavigation",TabNavigation.__docgenInfo={description:"A Tab Navigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead.",displayName:"TabNavigation",props:{activeItem:{defaultValue:{value:""},description:"The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child `<TabNavigationItem>` elements to render.",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"A custom className to be rendered on the tab navigation",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"A handler to execute when the active tab changes",name:"onActiveItemChange",required:!1,type:{name:"ActiveItemChangeHandler"}},tabStyle:{defaultValue:{value:"main"},description:'The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.',name:"tabStyle",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"content"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabNavigation/TabNavigation.component.tsx#TabNavigation"]={docgenInfo:TabNavigation.__docgenInfo,name:"TabNavigation",path:"src/components/TabNavigation/TabNavigation.component.tsx#TabNavigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabNavigation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_TabNavigation_component__WEBPACK_IMPORTED_MODULE_0__.a});var _TabNavigation_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabNavigation/TabNavigation.component.tsx")},"./src/components/TabNavigationItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>TabNavigationItem});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),NavigationItem=__webpack_require__("./src/components/NavigationItem/index.ts"),TabNavigation_component=__webpack_require__("./src/components/TabNavigation/TabNavigation.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabNavigationItem=function(_a){var _b=_a.active,active=void 0!==_b&&_b,ariaLabel=_a.ariaLabel,_c=_a.children,children=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,href=_a.href,icon=_a.icon,_f=_a.label,label=void 0===_f?"":_f,onClick=_a.onClick,_g=_a.value,value=void 0===_g?"":_g,props=__rest(_a,["active","ariaLabel","children","className","disabled","href","icon","label","onClick","value"]),tabStyle=((0,react.useContext)(TabNavigation_component.R)||{}).tabStyle;return(0,jsx_runtime.jsx)(NavigationItem.s,__assign({active,activeItemStyles:"\n  jn-text-theme-high\n  jn-font-bold\n  jn-border-b-[3px]\n  jn-border-theme-tab-active-bottom\n",ariaLabel,className:"\n        juno-tabnavigation-item \n        ".concat(tabStyle?"juno-tabnavigation-"+tabStyle+"-item":"","\n        ").concat("\n  jn-flex\n  jn-items-center\n  jn-text-theme-default\n  jn-font-bold\n  jn-py-[0.875rem]\n  jn-px-[1.5625rem]\n  jn-border-b-[3px]\n  focus-visible:jn-outline-none\n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n"," \n        ").concat(className,"\n      "),disabled,href,icon,inactiveItemStyles:"".concat("content"===tabStyle?"jn-border-theme-tab-content-inactive-bottom":"jn-border-transparent"),label,onClick,value},props,{children}))};try{TabNavigationItem.displayName="TabNavigationItem",TabNavigationItem.__docgenInfo={description:"An individual Tab Navigation Item. Use wrapped in a `<TabNavigation>` parent component.",displayName:"TabNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the tab navigation item is active",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the tab navigation item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"default"'},{value:'"download"'},{value:'"search"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the tab navigation item. Must be unique within any given `<TabNavigation>` group.",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Pass a custom handler to execute when the tab is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabNavigationItem/TabNavigationItem.component.tsx#TabNavigationItem"]={docgenInfo:TabNavigationItem.__docgenInfo,name:"TabNavigationItem",path:"src/components/TabNavigationItem/TabNavigationItem.component.tsx#TabNavigationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabNavigation/TabNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithChildren:()=>WithChildren,WithValues:()=>WithValues,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/TabNavigation/index.ts")),_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TabNavigationItem/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/TabNavigation/TabNavigation",component:_index__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{children:{control:!1},onActiveItemChange:{control:!1},tabStyle:{options:["main","content"],control:{type:"radio"}}}};var Template=function(_a){var children=_a.children,args=__rest(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.a,__assign({},args,{children}))},Default={render:Template,args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 1"},"item-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 2",active:!0},"item-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item with Icon",icon:"warning"},"item-3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Disabled Item",disabled:!0},"item-4")]}},Disabled={render:Template,parameters:{docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},args:{disabled:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 1"},"item-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 2"},"item-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 3"},"item-3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 4"},"item-4")]}},WithValues={render:Template,parameters:{docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."}}},args:{activeItem:"item-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 1",value:"item-1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 2",value:"item-2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 3",value:"item-3"},"i-3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{label:"Item 4",value:"item-4"},"i-4")]}},WithChildren={render:Template,parameters:{docs:{description:{story:"Alternatively, navigation items can render children passed to them."}}},args:{activeItem:"item-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{value:"item-1",children:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{value:"item-2",children:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{value:"item-3",children:"Item 3"},"i-3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.p,{value:"item-4",children:"Item 4"},"i-4")]}};const __namedExportsOrder=["Default","Disabled","WithValues","WithChildren"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>, <TabNavigationItem label="Item with Icon" key="item-3" icon="warning"></TabNavigationItem>, <TabNavigationItem label="Disabled Item" key="item-4" disabled></TabNavigationItem>]\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "All navigation items can be disabled by passing `disabled` to the `TabNavigation`."\n      }\n    }\n  },\n  args: {\n    disabled: true,\n    children: [<TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="item-2"></TabNavigationItem>, <TabNavigationItem label="Item 3" key="item-3"></TabNavigationItem>, <TabNavigationItem label="Item 4" key="item-4"></TabNavigationItem>]\n  }\n}',...Disabled.parameters?.docs?.source}}},WithValues.parameters={...WithValues.parameters,docs:{...WithValues.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win."\n      }\n    }\n  },\n  args: {\n    activeItem: "item-3",\n    children: [<TabNavigationItem label="Item 1" key="i-1" value="item-1"></TabNavigationItem>, <TabNavigationItem label="Item 2" key="i-2" value="item-2"></TabNavigationItem>, <TabNavigationItem label="Item 3" key="i-3" value="item-3"></TabNavigationItem>, <TabNavigationItem label="Item 4" key="i-4" value="item-4"></TabNavigationItem>]\n  }\n}',...WithValues.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Alternatively, navigation items can render children passed to them."\n      }\n    }\n  },\n  args: {\n    activeItem: "item-1",\n    children: [<TabNavigationItem key="i-1" value="item-1">\n        Item 1\n      </TabNavigationItem>, <TabNavigationItem key="i-2" value="item-2">\n        Item 2\n      </TabNavigationItem>, <TabNavigationItem key="i-3" value="item-3">\n        Item 3\n      </TabNavigationItem>, <TabNavigationItem key="i-4" value="item-4">\n        Item 4\n      </TabNavigationItem>]\n  }\n}',...WithChildren.parameters?.docs?.source}}}}}]);