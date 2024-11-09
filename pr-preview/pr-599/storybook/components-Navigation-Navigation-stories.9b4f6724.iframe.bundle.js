"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3537],{"./src/components/Icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.tsx")},"./src/components/Navigation/Navigation.component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Navigation,_:()=>NavigationContext});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},NavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0),Navigation=function(_a){var _b=_a.activeItem,activeItem=void 0===_b?"":_b,_c=_a.ariaLabel,ariaLabel=void 0===_c?"":_c,_d=_a.children,children=void 0===_d?null:_d,_e=_a.className,className=void 0===_e?"":_e,_f=_a.disabled,disabled=void 0!==_f&&_f,onActiveItemChange=_a.onActiveItemChange,props=__rest(_a,["activeItem","ariaLabel","children","className","disabled","onActiveItemChange"]),_g=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),activeItm=_g[0],setActiveItm=_g[1],_h=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Map),items=_h[0],setItems=_h[1],findItemIdByKeyValue=function(valueToFind){var prioritizedKeys=["value","children","label"],itemsKeys=Array.from(items.keys());if(itemsKeys.includes(valueToFind))return valueToFind;for(var foundItemId_1=void 0,_loop_1=function(key){var obj=items.get(key);prioritizedKeys.forEach((function(pKey){obj&&obj[pKey]===valueToFind&&(foundItemId_1=obj.id)}))},_i=0,itemsKeys_1=itemsKeys;_i<itemsKeys_1.length;_i++){_loop_1(itemsKeys_1[_i])}return foundItemId_1};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(activeItem){var activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[activeItem]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(activeItem){var activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[items]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavigationContext.Provider,{value:{activeItem:activeItm,addItem:function(key,children,label,value){setItems((function(oldMap){return new Map(oldMap).set(key,{id:key,value,label,children,displayName:children||label||value})}))},handleActiveItemChange:function(key){setActiveItm(key),onActiveItemChange&&onActiveItemChange(key)},navigationDisabled:disabled},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",__assign({"aria-disabled":!!disabled,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:"",className:"juno-navigation \n          ".concat(disabled?"juno-navigation-disabled":""," \n          ").concat(className),role:"navigation"},props,{children}))})};try{Navigation.displayName="Navigation",Navigation.__docgenInfo={description:"A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`.",displayName:"Navigation",props:{activeItem:{defaultValue:{value:""},description:"The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.",name:"activeItem",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria label of the navigation",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child navigation items of the navigation",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Pass a custom className to the navigation parent element",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Whether the navigation is disabled. Will disable all children.",name:"disabled",required:!1,type:{name:"boolean"}},onActiveItemChange:{defaultValue:null,description:"Handler to execute when the active item changes. Alias to `onChange`.",name:"onActiveItemChange",required:!1,type:{name:"ItemChangeHandler"}},onChange:{defaultValue:null,description:"Handler to execute when the active item changes.Alias to `onActiveItemChange`.",name:"onChange",required:!1,type:{name:"FormEventHandler<EventTarget>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Navigation/Navigation.component.tsx#Navigation"]={docgenInfo:Navigation.__docgenInfo,name:"Navigation",path:"src/components/Navigation/Navigation.component.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Navigation/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_Navigation_component__WEBPACK_IMPORTED_MODULE_0__.V});var _Navigation_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Navigation/Navigation.component.tsx")},"./src/components/NavigationItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>NavigationItem});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),Navigation_component=__webpack_require__("./src/components/Navigation/Navigation.component.tsx"),Icon=__webpack_require__("./src/components/Icon/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},NavigationItem=function(_a){var _b=_a.active,active=void 0!==_b&&_b,_c=_a.activeItemStyles,activeItemStyles=void 0===_c?"":_c,_d=_a.ariaLabel,ariaLabel=void 0===_d?"":_d,_e=_a.children,children=void 0===_e?null:_e,_f=_a.className,className=void 0===_f?"":_f,_g=_a.disabled,disabled=void 0!==_g&&_g,_h=_a.icon,icon=void 0===_h?null:_h,_j=_a.inactiveItemStyles,inactiveItemStyles=void 0===_j?"":_j,_k=_a.label,label=void 0===_k?"":_k,_l=_a.href,href=void 0===_l?"":_l,onClick=_a.onClick,_m=_a.value,value=void 0===_m?"":_m,_o=_a.wrapperClassName,wrapperClassName=void 0===_o?"":_o,props=__rest(_a,["active","activeItemStyles","ariaLabel","children","className","disabled","icon","inactiveItemStyles","label","href","onClick","value","wrapperClassName"]),navigationContext=(0,react.useContext)(Navigation_component._),theKey=value||children||label,_p=navigationContext||{},activeItem=_p.activeItem,addItem=_p.addItem,handleActiveItemChange=_p.handleActiveItemChange,navigationDisabled=_p.navigationDisabled,navigationRole=_p.navigationRole,_q=(0,react.useState)((function(){return!(null==navigationContext?void 0:navigationContext.activeItem)||"string"==typeof(str=null==navigationContext?void 0:navigationContext.activeItem)&&0===str.trim().length?active:activeItem===theKey;var str})),isActive=_q[0],setIsActive=_q[1];(0,react.useEffect)((function(){addItem&&addItem(theKey,children,label,value)}),[children,label,value]),(0,react.useEffect)((function(){setIsActive(activeItem?activeItem===theKey:active)}),[activeItem,active]);var handleClick=function(event){disabled?event.preventDefault():(!isActive&&handleActiveItemChange&&"function"==typeof handleActiveItemChange&&handleActiveItemChange(theKey),onClick&&onClick(event))};return(0,jsx_runtime.jsx)("li",{className:"juno-navigation-item-wrapper ".concat(wrapperClassName),children:href&&href.length?(0,jsx_runtime.jsxs)("a",__assign({"aria-disabled":!(!navigationDisabled&&!disabled)||void 0,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:void 0,"aria-selected":!!isActive||void 0,className:"\n            juno-navigation-item \n            ".concat("\n  jn-flex\n  jn-items-center\n","\n            ").concat(navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):"","\n            ").concat(isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles,"\n            ").concat(navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":"","\n            ").concat(className),"data-value":value&&value.length?value:null,href,onClick:handleClick},props,{children:[icon?(0,jsx_runtime.jsx)(Icon.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]})):(0,jsx_runtime.jsxs)("button",__assign({"aria-disabled":!(!navigationDisabled&&!disabled)||void 0,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:void 0,"aria-selected":!!isActive||void 0,className:"\n            juno-navigation-item \n            ".concat("\n  jn-flex\n  jn-items-center\n","\n            ").concat(navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):"","\n            ").concat(isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles,"\n            ").concat(navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":"","\n            ").concat(className),"data-value":value&&value.length?value:null,disabled:navigationDisabled||disabled,onClick:handleClick},props,{children:[icon?(0,jsx_runtime.jsx)(Icon.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]}))})};try{NavigationItem.displayName="NavigationItem",NavigationItem.__docgenInfo={description:"A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around.",displayName:"NavigationItem",props:{active:{defaultValue:{value:"false"},description:"Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win.",name:"active",required:!1,type:{name:"boolean"}},activeItemStyles:{defaultValue:{value:""},description:"Styles to apply to the active item",name:"activeItemStyles",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:""},description:"The aria-label of the item",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Pass custom classNames to the item itself.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:{value:"null"},description:"The child string of the item. Will override `label` when passed.",name:"children",required:!1,type:{name:"any"}},disabled:{defaultValue:{value:"false"},description:"Whether the item is disabled",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"null"},description:"An icon to render in the item",name:"icon",required:!1,type:{name:'"info" | "warning" | "danger" | "error" | "success" | "default" | "download" | "search" | "accessTime" | "accountCircle" | "addCircle" | "autoAwesomeMosaic" | "autoAwesomeMotion" | ... 39 more ...'}},inactiveItemStyles:{defaultValue:{value:""},description:"",name:"inactiveItemStyles",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"The label of the item. Will be rendered if no children are passed",name:"label",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Handler to execute when the item is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<EventTarget>"}},value:{defaultValue:{value:""},description:"The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed.",name:"value",required:!1,type:{name:"string"}},wrapperClassName:{defaultValue:{value:""},description:"Pass a custom className to the parent `<li>` element of the item.",name:"wrapperClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavigationItem/NavigationItem.component.tsx#NavigationItem"]={docgenInfo:NavigationItem.__docgenInfo,name:"NavigationItem",path:"src/components/NavigationItem/NavigationItem.component.tsx#NavigationItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Navigation/Navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultWithChildren:()=>DefaultWithChildren,Disabled:()=>Disabled,ItemsAsLinks:()=>ItemsAsLinks,ValuesOnly:()=>ValuesOnly,WithActiveItemByChild:()=>WithActiveItemByChild,WithActiveItemByLabel:()=>WithActiveItemByLabel,WithActiveItemByValue:()=>WithActiveItemByValue,WithValuesAndLabels:()=>WithValuesAndLabels,WithValuesLabelsAndChildren:()=>WithValuesLabelsAndChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Navigation/index.ts"),_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/NavigationItem/index.ts"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const __WEBPACK_DEFAULT_EXPORT__={title:"Internal/Navigation",component:_index__WEBPACK_IMPORTED_MODULE_2__.V,argTypes:{children:{control:!1},role:{options:["TabNavigation","TopNavigation","SideNavigation"],control:{type:"select"}}}};var Template=function(_a){var children=_a.children,props=__rest(_a,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.V,__assign({},props,{children}))};Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node};var DefaultWithChildren={render:Template,args:{activeItem:"Item 1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{children:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{children:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{children:"Item 3"},"i-3"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{disabled:!0,children:"Item 4"},"i-4")]}},WithValuesAndLabels={render:Template,args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"i-1",label:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"i-2",label:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"i-3",label:"Item 3"},"i-3")]}},WithValuesLabelsAndChildren={render:Template,args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"i-1",label:"Item 1 Label",children:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"i-2",label:"Item 2 Label",children:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"i-3",label:"Item 3 Label",children:"Item 3"},"i-3")]}},ValuesOnly={render:Template,args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"Item 2",active:!0},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"Item 3"},"i-3")]}},WithActiveItemByValue={render:Template,args:{activeItem:"item-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"item-1",label:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"item-2",label:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"item-3",label:"Item 3"},"i-3")]}},WithActiveItemByLabel={render:Template,args:{activeItem:"Item 2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"item-1",label:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"item-2",label:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"item-3",label:"Item 3"},"i-3")]}},WithActiveItemByChild={render:Template,args:{activeItem:"Item 2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"itm-1",children:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"itm-2",children:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{value:"itm-3",children:"Item 3"},"i-3")]}},Disabled={render:Template,args:{disabled:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{children:"Item 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{active:!0,children:"Item 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{children:"Item 3"},"i-3")]}},ItemsAsLinks={render:Template,args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{href:"https://www.sap.com",children:"Link 1"},"i-1"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{href:"https://www.sap.com",children:"Link 2"},"i-2"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_3__.s,{href:"https://www.sap.com",children:"Link 3"},"i-3")]}};const __namedExportsOrder=["DefaultWithChildren","WithValuesAndLabels","WithValuesLabelsAndChildren","ValuesOnly","WithActiveItemByValue","WithActiveItemByLabel","WithActiveItemByChild","Disabled","ItemsAsLinks"];DefaultWithChildren.parameters={...DefaultWithChildren.parameters,docs:{...DefaultWithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    activeItem: "Item 1",\n    children: [<NavigationItem key="i-1">Item 1</NavigationItem>, <NavigationItem key="i-2">Item 2</NavigationItem>, <NavigationItem key="i-3">Item 3</NavigationItem>, <NavigationItem key="i-4" disabled>\n        Item 4\n      </NavigationItem>]\n  }\n}',...DefaultWithChildren.parameters?.docs?.source}}},WithValuesAndLabels.parameters={...WithValuesAndLabels.parameters,docs:{...WithValuesAndLabels.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<NavigationItem key="i-1" value="i-1" label="Item 1" />, <NavigationItem key="i-2" value="i-2" label="Item 2" />, <NavigationItem key="i-3" value="i-3" label="Item 3" />]\n  }\n}',...WithValuesAndLabels.parameters?.docs?.source}}},WithValuesLabelsAndChildren.parameters={...WithValuesLabelsAndChildren.parameters,docs:{...WithValuesLabelsAndChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<NavigationItem key="i-1" value="i-1" label="Item 1 Label">\n        Item 1\n      </NavigationItem>, <NavigationItem key="i-2" value="i-2" label="Item 2 Label">\n        Item 2\n      </NavigationItem>, <NavigationItem key="i-3" value="i-3" label="Item 3 Label">\n        Item 3\n      </NavigationItem>]\n  }\n}',...WithValuesLabelsAndChildren.parameters?.docs?.source}}},ValuesOnly.parameters={...ValuesOnly.parameters,docs:{...ValuesOnly.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<NavigationItem key="i-1" value="Item 1" />, <NavigationItem key="i-2" value="Item 2" active />, <NavigationItem key="i-3" value="Item 3" />]\n  }\n}',...ValuesOnly.parameters?.docs?.source}}},WithActiveItemByValue.parameters={...WithActiveItemByValue.parameters,docs:{...WithActiveItemByValue.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    activeItem: "item-2",\n    children: [<NavigationItem key="i-1" value="item-1" label="Item 1" />, <NavigationItem key="i-2" value="item-2" label="Item 2" />, <NavigationItem key="i-3" value="item-3" label="Item 3" />]\n  }\n}',...WithActiveItemByValue.parameters?.docs?.source}}},WithActiveItemByLabel.parameters={...WithActiveItemByLabel.parameters,docs:{...WithActiveItemByLabel.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    activeItem: "Item 2",\n    children: [<NavigationItem key="i-1" value="item-1" label="Item 1" />, <NavigationItem key="i-2" value="item-2" label="Item 2" />, <NavigationItem key="i-3" value="item-3" label="Item 3" />]\n  }\n}',...WithActiveItemByLabel.parameters?.docs?.source}}},WithActiveItemByChild.parameters={...WithActiveItemByChild.parameters,docs:{...WithActiveItemByChild.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    activeItem: "Item 2",\n    children: [<NavigationItem key="i-1" value="itm-1">\n        Item 1\n      </NavigationItem>, <NavigationItem key="i-2" value="itm-2">\n        Item 2\n      </NavigationItem>, <NavigationItem key="i-3" value="itm-3">\n        Item 3\n      </NavigationItem>]\n  }\n}',...WithActiveItemByChild.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    disabled: true,\n    children: [<NavigationItem key="i-1">Item 1</NavigationItem>, <NavigationItem key="i-2" active>\n        Item 2\n      </NavigationItem>, <NavigationItem key="i-3">Item 3</NavigationItem>]\n  }\n}',...Disabled.parameters?.docs?.source}}},ItemsAsLinks.parameters={...ItemsAsLinks.parameters,docs:{...ItemsAsLinks.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<NavigationItem href="https://www.sap.com" key="i-1">\n        Link 1\n      </NavigationItem>, <NavigationItem href="https://www.sap.com" key="i-2">\n        Link 2\n      </NavigationItem>, <NavigationItem href="https://www.sap.com" key="i-3">\n        Link 3\n      </NavigationItem>]\n  }\n}',...ItemsAsLinks.parameters?.docs?.source}}}}}]);