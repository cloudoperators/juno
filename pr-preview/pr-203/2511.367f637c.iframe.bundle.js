"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2511],{"./src/components/Icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>_Icon_component__WEBPACK_IMPORTED_MODULE_0__.I});var _Icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/Icon.component.js")},"./src/components/Navigation/Navigation.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Navigation,_:()=>NavigationContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const NavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),Navigation=_ref=>{let{activeItem="",ariaLabel="",children=null,className="",disabled=!1,onActiveItemChange,...props}=_ref;const[activeItm,setActiveItm]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[items,setItems]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Map),findItemIdByKeyValue=valueToFind=>{const prioritizedKeys=["value","children","label"];if(Array.from(items.keys()).includes(valueToFind))return valueToFind;{let foundItemId;for(let[_key,obj]of items.entries())prioritizedKeys.forEach((pKey=>{obj[pKey]===valueToFind&&(foundItemId=obj.id)}));return foundItemId}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(activeItem){const activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[activeItem]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(activeItem){const activeItemId=findItemIdByKeyValue(activeItem);setActiveItm(activeItemId)}}),[items]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(NavigationContext.Provider,{value:{activeItem:activeItm,addItem:(key,children,label,value)=>{setItems((oldMap=>new Map(oldMap).set(key,{id:key,value,label,children,displayName:children||label||value})))},handleActiveItemChange:key=>{setActiveItm(key),onActiveItemChange&&onActiveItemChange(key)},navigationDisabled:disabled},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{"aria-disabled":!!disabled||null,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:null,className:`juno-navigation \n          ${disabled?"juno-navigation-disabled":""} \n          ${className}`,role:"navigation",...props,children})})};Navigation.displayName="Navigation",Navigation.propTypes={activeItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]),className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,onActiveItemChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,onChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},Navigation.__docgenInfo={description:"A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`.",methods:[],displayName:"Navigation",props:{activeItem:{defaultValue:{value:'""',computed:!1},description:"The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.",type:{name:"string"},required:!1},ariaLabel:{defaultValue:{value:'""',computed:!1},description:"The aria label of the navigation",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The child navigation items of the navigation",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the navigation parent element",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the navigation is disabled. Will disable all children.",type:{name:"bool"},required:!1},onActiveItemChange:{description:"Handler to execute when the active item changes. Alias to `onChange`.",type:{name:"func"},required:!1},onChange:{description:"Handler to execute when the active item changes. Alias to `onActiveItemChange`.",type:{name:"func"},required:!1}}}},"./src/components/Navigation/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>_Navigation_component__WEBPACK_IMPORTED_MODULE_0__.V});var _Navigation_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Navigation/Navigation.component.js")},"./src/components/NavigationItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>NavigationItem});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Navigation_component=__webpack_require__("./src/components/Navigation/Navigation.component.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),Icon_component=__webpack_require__("./src/components/Icon/Icon.component.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const NavigationItem=_ref=>{let{active=!1,activeItemStyles="",ariaLabel="",children=null,className="",disabled=!1,icon=null,inactiveItemStyles="",label="",href="",onClick,value="",wrapperClassName="",...props}=_ref;const navigationContext=(0,react.useContext)(Navigation_component._),theKey=value||children||label,{activeItem,addItem,handleActiveItemChange,navigationDisabled,navigationRole}=navigationContext||{},[isActive,setIsActive]=(0,react.useState)((()=>navigationContext?.activeItem?.length>0?activeItem===theKey:active));(0,react.useEffect)((()=>{addItem&&addItem(theKey,children,label,value)}),[children,label,value]),(0,react.useEffect)((()=>{setIsActive(activeItem?activeItem===theKey:active)}),[activeItem,active]);const handleClick=event=>{disabled?event.preventDefault():(!isActive&&handleActiveItemChange&&"function"==typeof handleActiveItemChange&&handleActiveItemChange(theKey),onClick&&onClick(event))};return(0,jsx_runtime.jsx)("li",{className:`juno-navigation-item-wrapper ${wrapperClassName}`,children:href&&href.length?(0,jsx_runtime.jsxs)("a",{"aria-disabled":!(!navigationDisabled&&!disabled)||null,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:null,"aria-selected":!!isActive||null,className:`\n            juno-navigation-item \n            \n  jn-flex\n  jn-items-center\n\n            ${navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):""}\n            ${isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles}\n            ${navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":""}\n            ${className}`,"data-value":value&&value.length?value:null,disabled:navigationDisabled||disabled,href,onClick:handleClick,...props,children:[icon?(0,jsx_runtime.jsx)(Icon.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]}):(0,jsx_runtime.jsxs)("button",{"aria-disabled":!(!navigationDisabled&&!disabled)||null,"aria-label":ariaLabel&&ariaLabel.length?ariaLabel:null,"aria-selected":!!isActive||null,className:`\n            juno-navigation-item \n            \n  jn-flex\n  jn-items-center\n\n            ${navigationRole?"juno-"+navigationRole.toLowerCase()+"-item "+(isActive?"juno-"+navigationRole.toLowerCase()+"-item-active":""):""}\n            ${isActive?"juno-navigation-item-active "+activeItemStyles:inactiveItemStyles}\n            ${navigationDisabled||disabled?"juno-navigation-item-disabled \n  jn-opacity-50\n  jn-cursor-not-allowed\n":""}\n            ${className}`,"data-value":value&&value.length?value:null,disabled:navigationDisabled||disabled,onClick:handleClick,...props,children:[icon?(0,jsx_runtime.jsx)(Icon.I,{icon,size:"18",className:"jn-mr-2"}):"",children||label||value]})})};NavigationItem.displayName="NavigationItem",NavigationItem.propTypes={active:prop_types_default().bool,activeItemStyles:prop_types_default().string,ariaLabel:prop_types_default().string,className:prop_types_default().string,children:prop_types_default().string,disabled:prop_types_default().bool,icon:prop_types_default().oneOf(Icon_component.g),inactiveItemStyles:prop_types_default().string,label:prop_types_default().string,href:prop_types_default().string,onClick:prop_types_default().func,value:prop_types_default().string,wrapperClassName:prop_types_default().string},NavigationItem.__docgenInfo={description:"A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around.",methods:[],displayName:"NavigationItem",props:{active:{defaultValue:{value:"false",computed:!1},description:"Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win.",type:{name:"bool"},required:!1},activeItemStyles:{defaultValue:{value:'""',computed:!1},description:"Styles to apply to the active item",type:{name:"string"},required:!1},ariaLabel:{defaultValue:{value:'""',computed:!1},description:"The aria-label of the item",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The child string of the item. Will override `label` when passed.",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass custom classNames to the item itself.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"An icon to render in the item",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},inactiveItemStyles:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"The label of the item. Will be rendered if no children are passed",type:{name:"string"},required:!1},href:{defaultValue:{value:'""',computed:!1},description:"The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.",type:{name:"string"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed.",type:{name:"string"},required:!1},wrapperClassName:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className to the parent `<li>` element of the item.",type:{name:"string"},required:!1},onClick:{description:"Handler to execute when the item is clicked",type:{name:"func"},required:!1}}}}}]);