"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3759],{"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Navigation/Navigation.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Navigation,_:()=>NavigationContext});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},NavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),Navigation=function(_a){var _b=_a.activeItem,activeItem=void 0===_b?"":_b,_c=_a.ariaLabel,ariaLabel=void 0===_c?"":_c,_d=_a.children,children=void 0===_d?null:_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.disabled,disabled=void 0!==_f&&_f,onActiveItemChange=_a.onActiveItemChange,props=__rest(_a,["activeItem","ariaLabel","children","className","disabled","onActiveItemChange"]),_g=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),activeItm=_g[0],setActiveItm=_g[1],_h=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map),items=_h[0],setItems=_h[1],findItemIdByKeyValue=function(valueToFind){var prioritizedKeys=["value","children","label"],itemsKeys=Array.from(items.keys());if(itemsKeys.includes(valueToFind))return valueToFind;for(var foundItemId_1=void 0,_loop_1=function(key){var obj=items.get(key);prioritizedKeys.forEach((function(pKey){obj&&obj[pKey]===valueToFind&&(foundItemId_1=obj.id)}))},_i=0,itemsKeys_1=itemsKeys;_i<itemsKeys_1.length;_i++){_loop_1(itemsKeys_1[_i])}return foundItemId_1};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(activeItem){var activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[activeItem]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(activeItem){var activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[items]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationContext.Provider,{value:{activeItem:activeItm,addItem:function(key,children,label,value){setItems((function(oldMap){return new Map(oldMap).set(key,{id:key,value,label,children,displayName:children||label||value})}))},handleActiveItemChange:function(key){setActiveItm(key),onActiveItemChange&&onActiveItemChange(key)},navigationDisabled:disabled},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",__assign({"aria-disabled":!!disabled,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:"",className:"juno-navigation \n          ".concat(disabled?"juno-navigation-disabled":""," \n          ").concat(className),role:"navigation"},props,{children}))})};try{Navigation.displayName="Navigation",Navigation.__docgenInfo={description:"A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`.",displayName:"Navigation",props:{activeItem:{defaultValue:{value:""},description:"The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the navigation",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child navigation items of the navigation",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a custom className to the navigation parent element",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled. Will disable all children.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes. Alias to `onChange`.",name:"onActiveItemChange",required:!1,type:{name:"ItemChangeHandler"}},onChange:{defaultValue:null,description:"Handler to execute when the active item changes.Alias to `onActiveItemChange`.",name:"onChange",required:!1,type:{name:"FormEventHandler<EventTarget>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/Navigation.component.tsx#Navigation"]={docgenInfo:Navigation.__docgenInfo,name:"Navigation",path:"src/components/Navigation/Navigation.component.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Navigation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_Navigation_component__WEBPACK_IMPORTED_MODULE_0__.V});var _Navigation_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Navigation/Navigation.component.tsx")},"./src/components/NavigationItem/NavigationItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>NavigationItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Navigation_Navigation_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Navigation/Navigation.component.tsx"),_Icon_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},NavigationItem=function(_a){var _b=_a.active,active=void 0!==_b&&_b,_c=_a.activeItemStyles,activeItemStyles=void 0===_c?"":_c,_d=_a.ariaLabel,ariaLabel=void 0===_d?"":_d,_e=_a.children,children=void 0===_e?null:_e,_f=_a.className,className=void 0===_f?"":_f,_g=_a.disabled,disabled=void 0!==_g&&_g,_h=_a.icon,icon=void 0===_h?null:_h,_j=_a.inactiveItemStyles,inactiveItemStyles=void 0===_j?"":_j,_k=_a.label,label=void 0===_k?"":_k,_l=_a.href,href=void 0===_l?"":_l,onClick=_a.onClick,_m=_a.value,value=void 0===_m?"":_m,_o=_a.wrapperClassName,wrapperClassName=void 0===_o?"":_o,props=__rest(_a,["active","activeItemStyles","ariaLabel","children","className","disabled","icon","inactiveItemStyles","label","href","onClick","value","wrapperClassName"]),navigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Navigation_Navigation_component__WEBPACK_IMPORTED_MODULE_2__._),theKey=value||children||label,_p=navigationContext||{},activeItem=_p.activeItem,addItem=_p.addItem,handleActiveItemChange=_p.handleActiveItemChange,navigationDisabled=_p.navigationDisabled,navigationRole=_p.navigationRole,_q=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((function(){return!(null==navigationContext?void 0:navigationContext.activeItem)||"string"==typeof(str=null==navigationContext?void 0:navigationContext.activeItem)&&0===str.trim().length?active:activeItem===theKey;var str})),isActive=_q[0],setIsActive=_q[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){addItem&&addItem(theKey,children,label,value)}),[children,label,value]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setIsActive(activeItem?activeItem===theKey:active)}),[activeItem,active]);var handleClick=function(event){disabled?event.preventDefault():(!isActive&&handleActiveItemChange&&"function"==typeof handleActiveItemChange&&handleActiveItemChange(theKey),onClick&&onClick(event))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"juno-navigation-item-wrapper ".concat(wrapperClassName),children:href&&href.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",__assign({"aria-disabled":!(!navigationDisabled&&!disabled)||void 0,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:void 0,"aria-selected":!!isActive||void 0,className:"\n            juno-navigation-item \n            ".concat("\n  jn-flex\n  jn-items-center\n","\n            ").concat(navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):"","\n            ").concat(isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles,"\n            ").concat(navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":"","\n            ").concat(className),"data-value":value&&value.length?value:null,href,onClick:handleClick},props,{children:[icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",__assign({"aria-disabled":!(!navigationDisabled&&!disabled)||void 0,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:void 0,"aria-selected":!!isActive||void 0,className:"\n            juno-navigation-item \n            ".concat("\n  jn-flex\n  jn-items-center\n","\n            ").concat(navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):"","\n            ").concat(isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles,"\n            ").concat(navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":"","\n            ").concat(className),"data-value":value&&value.length?value:null,disabled:navigationDisabled||disabled,onClick:handleClick},props,{children:[icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]}))})};try{NavigationItem.displayName="NavigationItem",NavigationItem.__docgenInfo={description:"A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around.",displayName:"NavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win.",name:"active",required:!1,type:{name:"boolean"}},activeItemStyles:{defaultValue:{value:""},description:"Styles to apply to the active item",name:"activeItemStyles",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria-label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass custom classNames to the item itself.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child string of the item. Will override `label` when passed.",name:"children",required:!1,type:{name:"any"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"An icon to render in the item",name:"icon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},inactiveItemStyles:{defaultValue:{value:""},description:"",name:"inactiveItemStyles",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"The label of the item. Will be rendered if no children are passed",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Handler to execute when the item is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the parent `<li>` element of the item.",name:"wrapperClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavigationItem/NavigationItem.component.tsx#NavigationItem"]={docgenInfo:NavigationItem.__docgenInfo,name:"NavigationItem",path:"src/components/NavigationItem/NavigationItem.component.tsx#NavigationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NavigationItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>_NavigationItem_component__WEBPACK_IMPORTED_MODULE_0__.s});var _NavigationItem_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/NavigationItem/NavigationItem.component.tsx")},"./src/components/TabNavigation/TabNavigation.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TabNavigationContext,a:()=>TabNavigation});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Navigation_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Navigation/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabNavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),TabNavigation=function(_a){var _b=_a.activeItem,activeItem=void 0===_b?"":_b,ariaLabel=_a.ariaLabel,_c=_a.children,children=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,onActiveItemChange=_a.onActiveItemChange,_f=_a.tabStyle,tabStyle=void 0===_f?"main":_f,props=__rest(_a,["activeItem","ariaLabel","children","className","disabled","onActiveItemChange","tabStyle"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabNavigationContext.Provider,{value:{tabStyle},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Navigation_index__WEBPACK_IMPORTED_MODULE_2__.V,__assign({activeItem,ariaLabel,className:"\n          juno-tabnavigation \n          juno-tabnavigation-".concat(tabStyle," \n          ").concat("\n  jn-flex\n"," \n          ").concat(className,"\n        "),disabled,onActiveItemChange},props,{children}))})};try{TabNavigation.displayName="TabNavigation",TabNavigation.__docgenInfo={description:"A Tab Navigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead.",displayName:"TabNavigation",props:{activeItem:{defaultValue:{value:""},description:"The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child `<TabNavigationItem>` elements to render.",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"A custom className to be rendered on the tab navigation",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"A handler to execute when the active tab changes",name:"onActiveItemChange",required:!1,type:{name:"ActiveItemChangeHandler"}},tabStyle:{defaultValue:{value:"main"},description:'The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.',name:"tabStyle",required:!1,type:{name:"enum",value:[{value:'"content"'},{value:'"main"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabNavigation/TabNavigation.component.tsx#TabNavigation"]={docgenInfo:TabNavigation.__docgenInfo,name:"TabNavigation",path:"src/components/TabNavigation/TabNavigation.component.tsx#TabNavigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabNavigation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_TabNavigation_component__WEBPACK_IMPORTED_MODULE_0__.a});var _TabNavigation_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabNavigation/TabNavigation.component.tsx")},"./src/components/TabNavigationItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>TabNavigationItem});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),NavigationItem=__webpack_require__("./src/components/NavigationItem/index.ts"),TabNavigation_component=__webpack_require__("./src/components/TabNavigation/TabNavigation.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},TabNavigationItem=function(_a){var _b=_a.active,active=void 0!==_b&&_b,ariaLabel=_a.ariaLabel,_c=_a.children,children=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,href=_a.href,icon=_a.icon,_f=_a.label,label=void 0===_f?"":_f,onClick=_a.onClick,_g=_a.value,value=void 0===_g?"":_g,props=__rest(_a,["active","ariaLabel","children","className","disabled","href","icon","label","onClick","value"]),tabStyle=((0,react.useContext)(TabNavigation_component.R)||{}).tabStyle;return(0,jsx_runtime.jsx)(NavigationItem.s,__assign({active,activeItemStyles:"\n  jn-text-theme-high\n  jn-font-bold\n  jn-border-b-[3px]\n  jn-border-theme-tab-active-bottom\n",ariaLabel,className:"\n        juno-tabnavigation-item \n        ".concat(tabStyle?"juno-tabnavigation-"+tabStyle+"-item":"","\n        ").concat("\n  jn-flex\n  jn-items-center\n  jn-text-theme-default\n  jn-font-bold\n  jn-py-[0.875rem]\n  jn-px-[1.5625rem]\n  jn-border-b-[3px]\n  focus-visible:jn-outline-none\n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n"," \n        ").concat(className,"\n      "),disabled,href,icon,inactiveItemStyles:"".concat("content"===tabStyle?"jn-border-theme-tab-content-inactive-bottom":"jn-border-transparent"),label,onClick,value},props,{children}))};try{TabNavigationItem.displayName="TabNavigationItem",TabNavigationItem.__docgenInfo={description:"An individual Tab Navigation Item. Use wrapped in a `<TabNavigation>` parent component.",displayName:"TabNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the tab navigation item is active",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the tab navigation item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",name:"icon",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"error"'},{value:'"success"'},{value:'"search"'},{value:'"default"'},{value:'"download"'},{value:'"accessTime"'},{value:'"accountCircle"'},{value:'"addCircle"'},{value:'"autoAwesomeMosaic"'},{value:'"autoAwesomeMotion"'},{value:'"bolt"'},{value:'"calendarToday"'},{value:'"cancel"'},{value:'"check"'},{value:'"checkCircle"'},{value:'"chevronLeft"'},{value:'"chevronRight"'},{value:'"close"'},{value:'"comment"'},{value:'"contentCopy"'},{value:'"dangerous"'},{value:'"deleteForever"'},{value:'"description"'},{value:'"dns"'},{value:'"edit"'},{value:'"errorOutline"'},{value:'"exitToApp"'},{value:'"expandLess"'},{value:'"expandMore"'},{value:'"filterAlt"'},{value:'"forum"'},{value:'"help"'},{value:'"home"'},{value:'"manageAccounts"'},{value:'"monitorHeart"'},{value:'"moreVert"'},{value:'"nightsStay"'},{value:'"notificationsOff"'},{value:'"openInBrowser"'},{value:'"openInNew"'},{value:'"place"'},{value:'"severityLow"'},{value:'"severityMedium"'},{value:'"severityHigh"'},{value:'"severityCritical"'},{value:'"upload"'},{value:'"wbSunny"'},{value:'"widgets"'}]}},label:{defaultValue:{value:""},description:"The label of the tab navigation item. Must be unique within any given `<TabNavigation>` group.",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Pass a custom handler to execute when the tab is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabNavigationItem/TabNavigationItem.component.tsx#TabNavigationItem"]={docgenInfo:TabNavigationItem.__docgenInfo,name:"TabNavigationItem",path:"src/components/TabNavigationItem/TabNavigationItem.component.tsx#TabNavigationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabNavigationItem/TabNavigationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,AsLink:()=>AsLink,Default:()=>Default,Disabled:()=>Disabled,WithChildren:()=>WithChildren,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_TabNavigation_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/TabNavigation/index.ts")),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TabNavigationItem/index.ts"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/Icon.component.tsx"),__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/TabNavigation/TabNavigationItem",component:_index__WEBPACK_IMPORTED_MODULE_3__.p,argTypes:{icon:{options:__spreadArray([null],Object.keys(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_4__.N),!0),control:{type:"select"}},onClick:{control:!1}},decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TabNavigation_index__WEBPACK_IMPORTED_MODULE_2__.a,{children:story()})}]};var Default={args:{label:"Tab 1"}},Active={args:{label:"Active TabNavigationItem",active:!0}},Disabled={args:{label:"Disabled TabNavigationItem",disabled:!0}},WithIcon={args:{icon:"warning",label:"With Icon"}},AsLink={args:{label:"Item as Link",href:"https://www.sap.com"}},WithChildren={args:{value:"itm-1",children:"Item 1"}};const __namedExportsOrder=["Default","Active","Disabled","WithIcon","AsLink","WithChildren"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Tab 1"\n  }\n}',...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Active TabNavigationItem",\n    active: true\n  }\n}',...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Disabled TabNavigationItem",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: "warning",\n    label: "With Icon"\n  }\n}',...WithIcon.parameters?.docs?.source}}},AsLink.parameters={...AsLink.parameters,docs:{...AsLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Item as Link",\n    href: "https://www.sap.com"\n  }\n}',...AsLink.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: "itm-1",\n    children: "Item 1"\n  }\n}',...WithChildren.parameters?.docs?.source}}}}}]);