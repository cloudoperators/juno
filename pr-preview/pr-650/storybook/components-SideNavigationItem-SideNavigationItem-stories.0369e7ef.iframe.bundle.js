"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[5189],{"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Navigation/Navigation.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Navigation,_:()=>NavigationContext});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},NavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),Navigation=function(_a){var _b=_a.activeItem,activeItem=void 0===_b?"":_b,_c=_a.ariaLabel,ariaLabel=void 0===_c?"":_c,_d=_a.children,children=void 0===_d?null:_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.disabled,disabled=void 0!==_f&&_f,onActiveItemChange=_a.onActiveItemChange,props=__rest(_a,["activeItem","ariaLabel","children","className","disabled","onActiveItemChange"]),_g=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),activeItm=_g[0],setActiveItm=_g[1],_h=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map),items=_h[0],setItems=_h[1],findItemIdByKeyValue=function(valueToFind){var prioritizedKeys=["value","children","label"],itemsKeys=Array.from(items.keys());if(itemsKeys.includes(valueToFind))return valueToFind;for(var foundItemId_1=void 0,_loop_1=function(key){var obj=items.get(key);prioritizedKeys.forEach((function(pKey){obj&&obj[pKey]===valueToFind&&(foundItemId_1=obj.id)}))},_i=0,itemsKeys_1=itemsKeys;_i<itemsKeys_1.length;_i++){_loop_1(itemsKeys_1[_i])}return foundItemId_1};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(activeItem){var activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[activeItem]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(activeItem){var activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[items]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationContext.Provider,{value:{activeItem:activeItm,addItem:function(key,children,label,value){setItems((function(oldMap){return new Map(oldMap).set(key,{id:key,value,label,children,displayName:children||label||value})}))},handleActiveItemChange:function(key){setActiveItm(key),onActiveItemChange&&onActiveItemChange(key)},navigationDisabled:disabled},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",__assign({"aria-disabled":!!disabled,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:"",className:"juno-navigation \n          ".concat(disabled?"juno-navigation-disabled":""," \n          ").concat(className),role:"navigation"},props,{children}))})};try{Navigation.displayName="Navigation",Navigation.__docgenInfo={description:"A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`.",displayName:"Navigation",props:{activeItem:{defaultValue:{value:""},description:"The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the navigation",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child navigation items of the navigation",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a custom className to the navigation parent element",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled. Will disable all children.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes. Alias to `onChange`.",name:"onActiveItemChange",required:!1,type:{name:"ItemChangeHandler"}},onChange:{defaultValue:null,description:"Handler to execute when the active item changes.Alias to `onActiveItemChange`.",name:"onChange",required:!1,type:{name:"FormEventHandler<EventTarget>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/Navigation.component.tsx#Navigation"]={docgenInfo:Navigation.__docgenInfo,name:"Navigation",path:"src/components/Navigation/Navigation.component.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NavigationItem/NavigationItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>NavigationItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_Navigation_Navigation_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Navigation/Navigation.component.tsx"),_Icon_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},NavigationItem=function(_a){var _b=_a.active,active=void 0!==_b&&_b,_c=_a.activeItemStyles,activeItemStyles=void 0===_c?"":_c,_d=_a.ariaLabel,ariaLabel=void 0===_d?"":_d,_e=_a.children,children=void 0===_e?null:_e,_f=_a.className,className=void 0===_f?"":_f,_g=_a.disabled,disabled=void 0!==_g&&_g,_h=_a.icon,icon=void 0===_h?null:_h,_j=_a.inactiveItemStyles,inactiveItemStyles=void 0===_j?"":_j,_k=_a.label,label=void 0===_k?"":_k,_l=_a.href,href=void 0===_l?"":_l,onClick=_a.onClick,_m=_a.value,value=void 0===_m?"":_m,_o=_a.wrapperClassName,wrapperClassName=void 0===_o?"":_o,props=__rest(_a,["active","activeItemStyles","ariaLabel","children","className","disabled","icon","inactiveItemStyles","label","href","onClick","value","wrapperClassName"]),navigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Navigation_Navigation_component__WEBPACK_IMPORTED_MODULE_2__._),theKey=value||children||label,_p=navigationContext||{},activeItem=_p.activeItem,addItem=_p.addItem,handleActiveItemChange=_p.handleActiveItemChange,navigationDisabled=_p.navigationDisabled,navigationRole=_p.navigationRole,_q=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((function(){return!(null==navigationContext?void 0:navigationContext.activeItem)||"string"==typeof(str=null==navigationContext?void 0:navigationContext.activeItem)&&0===str.trim().length?active:activeItem===theKey;var str})),isActive=_q[0],setIsActive=_q[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){addItem&&addItem(theKey,children,label,value)}),[children,label,value]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){setIsActive(activeItem?activeItem===theKey:active)}),[activeItem,active]);var handleClick=function(event){disabled?event.preventDefault():(!isActive&&handleActiveItemChange&&"function"==typeof handleActiveItemChange&&handleActiveItemChange(theKey),onClick&&onClick(event))};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"juno-navigation-item-wrapper ".concat(wrapperClassName),children:href&&href.length?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",__assign({"aria-disabled":!(!navigationDisabled&&!disabled)||void 0,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:void 0,"aria-selected":!!isActive||void 0,className:"\n            juno-navigation-item \n            ".concat("\n  jn-flex\n  jn-items-center\n","\n            ").concat(navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):"","\n            ").concat(isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles,"\n            ").concat(navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":"","\n            ").concat(className),"data-value":value&&value.length?value:null,href,onClick:handleClick},props,{children:[icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",__assign({"aria-disabled":!(!navigationDisabled&&!disabled)||void 0,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:void 0,"aria-selected":!!isActive||void 0,className:"\n            juno-navigation-item \n            ".concat("\n  jn-flex\n  jn-items-center\n","\n            ").concat(navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):"","\n            ").concat(isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles,"\n            ").concat(navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":"","\n            ").concat(className),"data-value":value&&value.length?value:null,disabled:navigationDisabled||disabled,onClick:handleClick},props,{children:[icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_index__WEBPACK_IMPORTED_MODULE_3__.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]}))})};try{NavigationItem.displayName="NavigationItem",NavigationItem.__docgenInfo={description:"A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around.",displayName:"NavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win.",name:"active",required:!1,type:{name:"boolean"}},activeItemStyles:{defaultValue:{value:""},description:"Styles to apply to the active item",name:"activeItemStyles",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria-label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass custom classNames to the item itself.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child string of the item. Will override `label` when passed.",name:"children",required:!1,type:{name:"any"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"An icon to render in the item",name:"icon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},inactiveItemStyles:{defaultValue:{value:""},description:"",name:"inactiveItemStyles",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"The label of the item. Will be rendered if no children are passed",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Handler to execute when the item is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the parent `<li>` element of the item.",name:"wrapperClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavigationItem/NavigationItem.component.tsx#NavigationItem"]={docgenInfo:NavigationItem.__docgenInfo,name:"NavigationItem",path:"src/components/NavigationItem/NavigationItem.component.tsx#NavigationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SideNavigation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>SideNavigation});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Navigation_component=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Navigation/Navigation.component.tsx")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},SideNavigation=function(_a){var _b=_a.activeItem,activeItem=void 0===_b?"":_b,ariaLabel=_a.ariaLabel,_c=_a.children,children=void 0===_c?null:_c,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,onActiveItemChange=_a.onActiveItemChange,props=__rest(_a,["activeItem","ariaLabel","children","className","disabled","onActiveItemChange"]);return(0,jsx_runtime.jsx)(Navigation_component.V,__assign({activeItem,ariaLabel,className:"juno-sidenavigation ".concat("\n  jn-min-w-[7.5rem]\n  jn-max-w-[20rem]\n"," ").concat(className),disabled,onActiveItemChange},props,{children}))};try{SideNavigation.displayName="SideNavigation",SideNavigation.__docgenInfo={description:"A generic vertical side navigation component.\nPlace SideNavigationItem components as children.",displayName:"SideNavigation",props:{activeItem:{defaultValue:{value:""},description:"The active navigation item by label",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The children of the Navigation. Typically these should be SideNavigationItem(s)",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass custom classname.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes",name:"onActiveItemChange",required:!1,type:{name:"ActiveItemChangeHandler"}},onChange:{defaultValue:null,description:"Handler to execute when the active item changes.Alias to `onActiveItemChange`.",name:"onChange",required:!1,type:{name:"FormEventHandler<EventTarget>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideNavigation/SideNavigation.component.tsx#SideNavigation"]={docgenInfo:SideNavigation.__docgenInfo,name:"SideNavigation",path:"src/components/SideNavigation/SideNavigation.component.tsx#SideNavigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SideNavigationItem/SideNavigationItem.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>SideNavigationItem});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_NavigationItem_NavigationItem_component__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/NavigationItem/NavigationItem.component.tsx")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},SideNavigationItem=function(_a){var _b=_a.active,active=void 0!==_b&&_b,_c=_a.ariaLabel,ariaLabel=void 0===_c?"":_c,children=_a.children,_d=_a.className,className=void 0===_d?"":_d,_e=_a.disabled,disabled=void 0!==_e&&_e,_f=_a.icon,icon=void 0===_f?null:_f,_g=_a.label,label=void 0===_g?"":_g,_h=_a.href,href=void 0===_h?"":_h,onClick=_a.onClick,_j=_a.value,value=void 0===_j?"":_j,props=__rest(_a,["active","ariaLabel","children","className","disabled","icon","label","href","onClick","value"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_NavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.s,__assign({active,activeItemStyles:"\n  jn-font-bold\n  jn-text-theme-sidenavigation-item-active\n  jn-bg-theme-sidenavigation-item-active\n",ariaLabel,className:"juno-sidenavigation-item ".concat("\n  jn-flex\n  jn-items-center\n  jn-w-full\n  jn-py-1.5\n  jn-px-8\n  jn-text-theme-default\n  jn-font-bold\n  jn-cursor-pointer\n  focus-visible:jn-outline-none\n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n"," ").concat(className),disabled,icon,label,href,onClick,value},props,{children}))};try{SideNavigationItem.displayName="SideNavigationItem",SideNavigationItem.__docgenInfo={description:"A SideNavigation item. To be used inside SideNavigation.",displayName:"SideNavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the item is the currently active item",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",name:"children",required:!1,type:{name:"any"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"pass an icon name",name:"icon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "search" | "default" | "download" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},label:{defaultValue:{value:""},description:"The label of the item",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass a custom className",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The link the item should point to. Will render the item as an anchor if passed",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"A handler to execute once the item is clicked. Will render the item as a button element if passed",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent SideNavigation.",name:"value",required:!1,type:{name:"string"}},activeItemStyles:{defaultValue:null,description:"Styles to apply to the active item",name:"activeItemStyles",required:!1,type:{name:"string"}},inactiveItemStyles:{defaultValue:null,description:"",name:"inactiveItemStyles",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:null,description:"Pass a custom className to the parent `<li>` element of the item.",name:"wrapperClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SideNavigationItem/SideNavigationItem.component.tsx#SideNavigationItem"]={docgenInfo:SideNavigationItem.__docgenInfo,name:"SideNavigationItem",path:"src/components/SideNavigationItem/SideNavigationItem.component.tsx#SideNavigationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SideNavigationItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_0__.b});var _SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SideNavigationItem/SideNavigationItem.component.tsx")},"./src/components/SideNavigationItem/SideNavigationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,AsLink:()=>AsLink,Default:()=>Default,Disabled:()=>Disabled,WithChildren:()=>WithChildren,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/SideNavigationItem/index.ts")),_SideNavigation_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/SideNavigation/index.ts"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/Icon.component.tsx"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__spreadArray=function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))};const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/SideNavigation/SideNavigationItem",component:_index__WEBPACK_IMPORTED_MODULE_2__.b,argTypes:{icon:{options:__spreadArray([null],Object.keys(_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_4__.N),!0),control:{type:"select"}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}},decorators:[function(story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SideNavigation_index__WEBPACK_IMPORTED_MODULE_3__.E,{children:story()})}]};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.b,__assign({},args))},Default={render:Template,args:{label:"Navigation Item"}},Active={render:Template,args:{label:"Active Navigation Item",active:!0}},Disabled={render:Template,args:{label:"Disabled Navigation Item",disabled:!0}},WithIcon={render:Template,args:{label:"Navigation Item With Icon",icon:"warning"}},AsLink={render:Template,args:{label:"Navigation Item as Anchor",href:"#"}},WithChildren={render:Template,args:{value:"itm-1",children:"Item 1"}};const __namedExportsOrder=["Default","Active","Disabled","WithIcon","AsLink","WithChildren"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Navigation Item"\n  }\n}',...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Active Navigation Item",\n    active: true\n  }\n}',...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Disabled Navigation Item",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Navigation Item With Icon",\n    icon: "warning"\n  }\n}',...WithIcon.parameters?.docs?.source}}},AsLink.parameters={...AsLink.parameters,docs:{...AsLink.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Navigation Item as Anchor",\n    href: "#"\n  }\n}',...AsLink.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    value: "itm-1",\n    children: "Item 1"\n  }\n}',...WithChildren.parameters?.docs?.source}}}}}]);