"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3759],{"./src/components/TabNavigation/TabNavigation.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>TabNavigationContext,a:()=>TabNavigation});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_Navigation_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Navigation/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const TabNavigationContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),TabNavigation=_ref=>{let{activeItem="",ariaLabel,children=null,className="",disabled=!1,onActiveItemChange,tabStyle="main",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabNavigationContext.Provider,{value:{tabStyle}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Navigation_index__WEBPACK_IMPORTED_MODULE_1__.V,_extends({activeItem,ariaLabel,className:`\n          juno-tabnavigation \n          juno-tabnavigation-${tabStyle} \n          \n  jn-flex\n \n          ${className}\n        `,disabled,onActiveItemChange},props),children))};TabNavigation.propTypes={activeItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,onActiveItemChange:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,tabStyle:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["main","content"])},TabNavigation.__docgenInfo={description:"A Tab Navigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead.",methods:[],displayName:"TabNavigation",props:{activeItem:{defaultValue:{value:'""',computed:!1},description:"The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child.",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The child `<TabNavigationItem>` elements to render.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"A custom className to be rendered on the tab navigation",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled.",type:{name:"bool"},required:!1},tabStyle:{defaultValue:{value:'"main"',computed:!1},description:'The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.',type:{name:"enum",value:[{value:'"main"',computed:!1},{value:'"content"',computed:!1}]},required:!1},ariaLabel:{description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',type:{name:"string"},required:!1},onActiveItemChange:{description:"A handler to execute when the active tab changes",type:{name:"func"},required:!1}}}},"./src/components/TabNavigation/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>_TabNavigation_component__WEBPACK_IMPORTED_MODULE_0__.a});var _TabNavigation_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TabNavigation/TabNavigation.component.js")},"./src/components/TabNavigationItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>TabNavigationItem});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),NavigationItem=__webpack_require__("./src/components/NavigationItem/index.js"),TabNavigation_component=__webpack_require__("./src/components/TabNavigation/TabNavigation.component.js"),Icon_component=__webpack_require__("./src/components/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const TabNavigationItem=_ref=>{let{active=!1,ariaLabel,children=null,className="",disabled=!1,href,icon,label="",onClick,value="",...props}=_ref;const tabNavigationContext=(0,react.useContext)(TabNavigation_component.R),{tabStyle}=tabNavigationContext||{};return react.createElement(NavigationItem.s,_extends({active,activeItemStyles:"\n  jn-text-theme-high\n  jn-font-bold\n  jn-border-b-[3px]\n  jn-border-theme-tab-active-bottom\n",ariaLabel,className:`\n        juno-tabnavigation-item \n        ${tabStyle?"juno-tabnavigation-"+tabStyle+"-item":""}\n        \n  jn-flex\n  jn-items-center\n  jn-text-theme-default\n  jn-font-bold\n  jn-py-[0.875rem]\n  jn-px-[1.5625rem]\n  jn-border-b-[3px]\n  focus-visible:jn-outline-none\n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n \n        ${className}\n      `,disabled,href,icon,inactiveItemStyles:""+("content"===tabStyle?"jn-border-theme-tab-content-inactive-bottom":"jn-border-transparent"),label,onClick,value},props),children)};TabNavigationItem.propTypes={active:prop_types_default().bool,ariaLabel:prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,disabled:prop_types_default().bool,href:prop_types_default().string,icon:prop_types_default().oneOf(Icon_component.g),label:prop_types_default().string,onClick:prop_types_default().func,value:prop_types_default().string},TabNavigationItem.__docgenInfo={description:"An individual Tab Navigation Item. Use wrapped in a `<TabNavigation>` parent component.",methods:[],displayName:"TabNavigationItem",props:{active:{defaultValue:{value:"false",computed:!1},description:"Whether the tab navigation item is active",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the tab navigation item is disabled",type:{name:"bool"},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"The label of the tab navigation item. Must be unique within any given `<TabNavigation>` group.",type:{name:"string"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.",type:{name:"string"},required:!1},ariaLabel:{description:"The aria label of the item",type:{name:"string"},required:!1},href:{description:"",type:{name:"string"},required:!1},icon:{description:"Pass the name of an icon to render in the Tab. Can be any icon included with Juno.",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},onClick:{description:"Pass a custom handler to execute when the tab is clicked",type:{name:"func"},required:!1}}}},"./src/components/TabNavigationItem/TabNavigationItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,AsLink:()=>AsLink,Default:()=>Default,Disabled:()=>Disabled,WithChildren:()=>WithChildren,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_TabNavigation_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TabNavigation/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TabNavigationItem/index.js"),_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/TabNavigation/TabNavigationItem",component:_index_js__WEBPACK_IMPORTED_MODULE_2__.p,argTypes:{icon:{options:[null,..._Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__.g],control:{type:"select"}},onClick:{control:!1}},decorators:[story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabNavigation_index__WEBPACK_IMPORTED_MODULE_1__.a,null,story())]},Default={args:{label:"Tab 1"}},Active={args:{label:"Active TabNavigationItem",active:!0}},Disabled={args:{label:"Disabled TabNavigationItem",disabled:!0}},WithIcon={args:{icon:"warning",label:"With Icon"}},AsLink={args:{label:"Item as Link",href:"https://www.sap.com"}},WithChildren={args:{value:"itm-1",children:"Item 1"}},__namedExportsOrder=["Default","Active","Disabled","WithIcon","AsLink","WithChildren"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Tab 1"\n  }\n}',...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Active TabNavigationItem",\n    active: true\n  }\n}',...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Disabled TabNavigationItem",\n    disabled: true\n  }\n}',...Disabled.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    icon: "warning",\n    label: "With Icon"\n  }\n}',...WithIcon.parameters?.docs?.source}}},AsLink.parameters={...AsLink.parameters,docs:{...AsLink.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Item as Link",\n    href: "https://www.sap.com"\n  }\n}',...AsLink.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: "itm-1",\n    children: "Item 1"\n  }\n}',...WithChildren.parameters?.docs?.source}}}}}]);