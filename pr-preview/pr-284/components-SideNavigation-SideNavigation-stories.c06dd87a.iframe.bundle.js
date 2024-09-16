"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2927],{"./src/components/SideNavigation/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>SideNavigation});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Navigation=__webpack_require__("./src/components/Navigation/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SideNavigation=_ref=>{let{activeItem="",ariaLabel,children=null,className="",disabled=!1,onActiveItemChange,...props}=_ref;return react.createElement(Navigation.V,_extends({activeItem,ariaLabel,className:`juno-sidenavigation \n  jn-min-w-[7.5rem]\n  jn-max-w-[20rem]\n ${className}`,disabled,onActiveItemChange},props),children)};SideNavigation.propTypes={activeItem:prop_types_default().string,ariaLabel:prop_types_default().string,children:prop_types_default().node,className:prop_types_default().string,disabled:prop_types_default().bool,onActiveItemChange:prop_types_default().func},SideNavigation.__docgenInfo={description:"A generic vertical side navigation component.\nPlace SideNavigationItem components as children.",methods:[],displayName:"SideNavigation",props:{activeItem:{defaultValue:{value:'""',computed:!1},description:"The active navigation item by label",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"The children of the Navigation. Typically these should be SideNavigationItem(s)",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass custom classname.",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the navigation is disabled",type:{name:"bool"},required:!1},ariaLabel:{description:'The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view.',type:{name:"string"},required:!1},onActiveItemChange:{description:"Handler to execute when the active item changes",type:{name:"func"},required:!1}}}},"./src/components/SideNavigationItem/SideNavigationItem.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>SideNavigationItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_NavigationItem_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/NavigationItem/index.js"),_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const SideNavigationItem=_ref=>{let{active=!1,ariaLabel="",children,className="",disabled=!1,icon=null,label="",href="",onClick,value="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavigationItem_index__WEBPACK_IMPORTED_MODULE_1__.s,_extends({active,activeItemStyles:"\n  jn-font-bold\n  jn-text-theme-sidenavigation-item-active\n  jn-bg-theme-sidenavigation-item-active\n",ariaLabel,className:`juno-sidenavigation-item \n  jn-flex\n  jn-items-center\n  jn-w-full\n  jn-py-1.5\n  jn-px-8\n  jn-text-theme-default\n  jn-font-bold\n  jn-cursor-pointer\n  focus-visible:jn-outline-none\n  focus-visible:jn-ring-2\n  focus-visible:jn-ring-theme-focus\n ${className}`,disabled,icon,label,href,onClick,value},props),children)};SideNavigationItem.propTypes={active:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_2__.g),label:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,href:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},SideNavigationItem.__docgenInfo={description:"A SideNavigation item. To be used inside SideNavigation.",methods:[],displayName:"SideNavigationItem",props:{active:{defaultValue:{value:"false",computed:!1},description:"Whether the item is the currently active item",type:{name:"bool"},required:!1},ariaLabel:{defaultValue:{value:'""',computed:!1},description:"The aria label of the item",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Pass a custom className",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Whether the item is disabled",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"pass an icon name",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},label:{defaultValue:{value:'""',computed:!1},description:"The label of the item",type:{name:"string"},required:!1},href:{defaultValue:{value:'""',computed:!1},description:"The link the item should point to. Will render the item as an anchor if passed",type:{name:"string"},required:!1},value:{defaultValue:{value:'""',computed:!1},description:"An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent SideNavigation.",type:{name:"string"},required:!1},children:{description:"The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both.",type:{name:"node"},required:!1},onClick:{description:"A handler to execute once the item is clicked. Will render the item as a button element if passed",type:{name:"func"},required:!1}}}},"./src/components/SideNavigation/SideNavigation.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithChildren:()=>WithChildren,WithValues:()=>WithValues,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/SideNavigation/index.js"),_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SideNavigationItem/SideNavigationItem.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Navigation/SideNavigation/SideNavigation",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.E,argTypes:{items:{table:{disable:!0}},children:{control:!1}}},Template=_ref=>{let{children,...args}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.E,args,children)};Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};const Default=Template.bind({});Default.args={children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-1",label:"Item 1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-2",label:"Item 2",active:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-3",icon:"warning",label:"Item with Icon"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-4",label:"Disabled Item",disabled:!0})]};const Disabled=Template.bind({});Disabled.parameters={docs:{description:{story:"All navigation items can be disabled by passing `disabled` to the `TabNavigation`."}}},Disabled.args={disabled:!0,children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-1",label:"Item 1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-2",label:"Item 2"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"item-3",label:"Active Item",active:!0})]};const WithValues=Template.bind({});WithValues.parameters={docs:{description:{story:"When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label` or the `children` of the item. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win"}}},WithValues.args={activeItem:"i-3",children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{label:"Item 1",key:"item-1",value:"i-1"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{label:"Item 2",key:"item-2",value:"i-2"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{label:"Item 3",key:"item-3",value:"i-3"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{label:"Item 4",key:"item-4",value:"i-4"})]};const WithChildren=Template.bind({});WithChildren.parameters={docs:{description:{story:"Navigation items can render children passed to them."}}},WithChildren.args={activeItem:"item-1",children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"i-1",value:"item-1"},"Item 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"i-2",value:"item-2"},"Item 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"i-3",value:"item-3"},"Item 3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SideNavigationItem_SideNavigationItem_component__WEBPACK_IMPORTED_MODULE_2__.b,{key:"i-4",value:"item-4"},"Item 4")]};const __namedExportsOrder=["Default","Disabled","WithValues","WithChildren"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  children,\n  ...args\n}) => <SideNavigation {...args}>{children}</SideNavigation>",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"({\n  children,\n  ...args\n}) => <SideNavigation {...args}>{children}</SideNavigation>",...Disabled.parameters?.docs?.source}}},WithValues.parameters={...WithValues.parameters,docs:{...WithValues.parameters?.docs,source:{originalSource:"({\n  children,\n  ...args\n}) => <SideNavigation {...args}>{children}</SideNavigation>",...WithValues.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"({\n  children,\n  ...args\n}) => <SideNavigation {...args}>{children}</SideNavigation>",...WithChildren.parameters?.docs?.source}}}}}]);