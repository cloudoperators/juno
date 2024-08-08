"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4443],{"./src/components/TopNavigationItem/TopNavigationItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,AsLink:()=>AsLink,Default:()=>Default,Disabled:()=>Disabled,WithChildren:()=>WithChildren,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _TopNavigation___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TopNavigation/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TopNavigationItem/index.js"),_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Icon/Icon.component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/TopNavigation/TopNavigationItem",component:_index_js__WEBPACK_IMPORTED_MODULE_2__.x,argTypes:{icon:{options:[null,..._Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__.g],control:{type:"select"}},onClick:{control:!1},children:{control:!1}},parameters:{actions:{argTypesRegex:null}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_TopNavigation___WEBPACK_IMPORTED_MODULE_1__.I,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_2__.x,{...args})});Template.displayName="Template";const Default=Template.bind({});Default.args={label:"Navigation Item"};const Active=Template.bind({});Active.args={label:"Navigation Item",active:!0};const Disabled=Template.bind({});Disabled.args={disabled:!0,label:"Disabled Item"};const WithIcon=Template.bind({});WithIcon.args={label:"Navigation Item",icon:"warning"};const AsLink=Template.bind({});AsLink.args={label:"Navigation Item",href:"#"};const WithChildren=Template.bind({});WithChildren.args={value:"itm-1",children:"Item 1"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TopNavigation>\n    <TopNavigationItem {...args} />\n  </TopNavigation>",...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"args => <TopNavigation>\n    <TopNavigationItem {...args} />\n  </TopNavigation>",...Active.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <TopNavigation>\n    <TopNavigationItem {...args} />\n  </TopNavigation>",...Disabled.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"args => <TopNavigation>\n    <TopNavigationItem {...args} />\n  </TopNavigation>",...WithIcon.parameters?.docs?.source}}},AsLink.parameters={...AsLink.parameters,docs:{...AsLink.parameters?.docs,source:{originalSource:"args => <TopNavigation>\n    <TopNavigationItem {...args} />\n  </TopNavigation>",...AsLink.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"args => <TopNavigation>\n    <TopNavigationItem {...args} />\n  </TopNavigation>",...WithChildren.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Active","Disabled","WithIcon","AsLink","WithChildren"]},"./src/components/TopNavigation/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>TopNavigation});__webpack_require__("../../node_modules/react/index.js");var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Navigation=__webpack_require__("./src/components/Navigation/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TopNavigation=_ref=>{let{activeItem="",ariaLabel,children=null,className="",disabled=!1,onActiveItemChange,...props}=_ref;return(0,jsx_runtime.jsx)(Navigation.V,{activeItem,ariaLabel,className:`juno-topnavigation \n  jn-flex\n  jn-bg-theme-background-lvl-1\n  jn-gap-0\n ${className}`,disabled,onActiveItemChange,...props,children})};TopNavigation.displayName="TopNavigation",TopNavigation.propTypes={activeItem:prop_types_default().string,ariaLabel:prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,disabled:prop_types_default().bool,onActiveItemChange:prop_types_default().func},TopNavigation.__docgenInfo={description:"A generic horizontal top level navigation component. To be placed below the application header but above application content.\nPlace `TopNavigationItem` elements as children.",methods:[],displayName:"TopNavigation",props:{activeItem:{defaultValue:{value:'""',computed:!1},description:"The active navigation item by label",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children of the Navigation. Typically these should be TopNavigationItem(s)",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom classname.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the navigation is disabled",type:{name:"bool"},required:!1},ariaLabel:{description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',type:{name:"string"},required:!1},onActiveItemChange:{description:"Handler to execute when the active item changes",type:{name:"func"},required:!1}}}},"./src/components/TopNavigationItem/TopNavigationItem.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>TopNavigationItem});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_NavigationItem_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NavigationItem/index.js"),_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.component.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const TopNavigationItem=_ref=>{let{active=!1,ariaLabel,children=null,className="",disabled=!1,href="",icon=null,label="",onClick,value="",...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_1__.s,{active,activeItemStyles:"\n  jn-font-bold\n  jn-text-theme-high\n  jn-bg-theme-topnavigation-item-active\n  jn-border-b-[3px]\n",ariaLabel,className:`juno-topnavigation-item \n  jn-flex\n  jn-items-center\n  jn-grow-0\n  jn-box-border\n  jn-justify-start\n  jn-text-theme-default\n  jn-font-bold\n  jn-leading-6\n  jn-py-[0.875rem]\n  jn-px-[1.9rem]\n  jn-text-theme-default\n  jn-bg-theme-topnavigation-item\n  hover:jn-text-theme-high\n  hover:jn-bg-theme-topnavigation-item-active\n  active:jn-text-theme-high\n  active:jn-bg-theme-topnavigation-item-active\n  focus-visible:jn-outline-none\n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n ${className}`,disabled,icon,label,href,onClick,value,...props,children})};TopNavigationItem.displayName="TopNavigationItem",TopNavigationItem.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_2__.g),label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,value:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},TopNavigationItem.__docgenInfo={description:"An individual item of a top level navigation. Place inside TopNavigation.",methods:[],displayName:"TopNavigationItem",props:{active:{defaultValue:{value:"false",computed:!1},description:"Whether the item is the currently active item",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},href:{defaultValue:{value:'""',computed:!1},description:"The link the item should point to. Will render the item as an anchor if passed",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"pass an icon name",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"The label of the item",type:{name:"string"},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"A handler to execute once the navigation item is clicked. Will render the item as a button element if passed",type:{name:"func"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.",type:{name:"string"},required:!1},ariaLabel:{description:"The aria label of the item",type:{name:"string"},required:!1}}}},"./src/components/TopNavigationItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>_TopNavigationItem_component__WEBPACK_IMPORTED_MODULE_0__.x});var _TopNavigationItem_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TopNavigationItem/TopNavigationItem.component.js")}}]);