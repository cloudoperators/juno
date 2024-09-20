"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[4053],{"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.component.js")},"./src/components/Menu/Menu.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>Menu,x:()=>MenuContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),_headlessui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/menu/menu.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const variantStyles=variant=>"small"===variant?"\n\tjn-text-sm\n":"\n\tjn-text-base\n",MenuContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(),Menu=_ref=>{let{children=null,variant="normal",className="",...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuContext.Provider,{value:{variant}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.W,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",_extends({className:`\n\t\t\t\t\tjuno-menu \n\t\t\t\t\tjuno-menu-${variant} \n\t\t\t\t\t\n\tjn-overflow-hidden\n\tjn-flex\n\tjn-flex-col\n\tjn-rounded\n\tjn-bg-theme-background-lvl-1\n \n\t\t\t\t\t${variantStyles(variant)} \n\t\t\t\t\t${className}\n\t\t\t\t`,role:"menu"},props),children)))};Menu.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","normal"]),className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},Menu.__docgenInfo={description:"A generic menu component",methods:[],displayName:"Menu",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"normal"',computed:!1},description:"Whether the Menu will be in normal or small variant",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"normal"',computed:!1}]},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"",type:{name:"string"},required:!1}}}},"./src/components/MenuItem/MenuItem.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>MenuItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/deprecated_js/Icon/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@headlessui/react/dist/components/menu/menu.js"),_Menu_Menu_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/Menu.component.js"),_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js");const MenuItem=_ref=>{let{label="",icon=null,disabled=!1,children=null,onClick,href,className=""}=_ref;const menuContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Menu_Menu_component_js__WEBPACK_IMPORTED_MODULE_2__.x),{variant}=menuContext||{};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.W.Item,{disabled,as:href?"a":children?"div":"button",href:disabled?void 0:href,onClick:event=>{onClick&&onClick(event)},className:`\n\t\t\t\t\t\tjuno-menu-item \n\t\t\t\t\t\t${href?"juno-menu-item-anchor":"juno-menu-item-button"} \n\t\t\t\t\t\t\n\tjn-text-theme-default\n\tjn-flex\n\tjn-items-center\n\tjn-w-full\n\tcursor-pointer\n\tbg-clip-padding\n\tjn-truncate\n\tjn-text-left\n\tjn-bg-theme-background-lvl-1\n\tdisabled:jn-cursor-not-allowed\n\tdata-[headlessui-state="disabled"]:jn-cursor-not-allowed\n \n\t\t\t\t\t\t${children?"":'\n\thover:jn-bg-theme-background-lvl-3\n\tdata-[headlessui-state="disabled"]:jn-bg-theme-background-lvl-3\n'}\n\t\t\t\t\t\t${"small"===variant?"\n\tjn-text-sm\n\tjn-p-2\n":"\n\tjn-text-base\n\tjn-pt-[0.6875rem]\n\tjn-pb-[0.5rem]\n\tjn-px-[0.875rem]\n"}\n\t\t\t\t\t\t${disabled&&href?"jn-cursor-not-allowed":""}\n\t\t\t\t\t\t${className}\n\t\t\t\t\t`},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:""+(disabled?"jn-opacity-50":"")},icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Icon_index_js__WEBPACK_IMPORTED_MODULE_1__.I,{icon,size:"18",className:"jn-inline-block jn-mr-2"}):"",children||label))};MenuItem.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(_deprecated_js_Icon_Icon_component_js__WEBPACK_IMPORTED_MODULE_3__.g),className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,href:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func},MenuItem.__docgenInfo={description:"A menu item to be used inside Menu.\nCan render `<a>`, `<button>`, or generic elements to hold other interactive elements.",methods:[],displayName:"MenuItem",props:{label:{defaultValue:{value:'""',computed:!1},description:"The label of the menu item. Will take precedence over children passed to the component.",type:{name:"string"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"Pass the name of an icon the button should show. Can be any icon included with Juno.",type:{name:"enum",value:[{value:'"accessTime"',computed:!1},{value:'"accountCircle"',computed:!1},{value:'"addCircle"',computed:!1},{value:'"autoAwesomeMosaic"',computed:!1},{value:'"autoAwesomeMotion"',computed:!1},{value:'"bolt"',computed:!1},{value:'"calendarToday"',computed:!1},{value:'"cancel"',computed:!1},{value:'"check"',computed:!1},{value:'"checkCircle"',computed:!1},{value:'"chevronLeft"',computed:!1},{value:'"chevronRight"',computed:!1},{value:'"close"',computed:!1},{value:'"comment"',computed:!1},{value:'"contentCopy"',computed:!1},{value:'"danger"',computed:!1},{value:'"dangerous"',computed:!1},{value:'"default"',computed:!1},{value:'"deleteForever"',computed:!1},{value:'"description"',computed:!1},{value:'"dns"',computed:!1},{value:'"download"',computed:!1},{value:'"edit"',computed:!1},{value:'"error"',computed:!1},{value:'"errorOutline"',computed:!1},{value:'"exitToApp"',computed:!1},{value:'"expandLess"',computed:!1},{value:'"expandMore"',computed:!1},{value:'"filterAlt"',computed:!1},{value:'"forum"',computed:!1},{value:'"help"',computed:!1},{value:'"home"',computed:!1},{value:'"info"',computed:!1},{value:'"manageAccounts"',computed:!1},{value:'"monitorHeart"',computed:!1},{value:'"moreVert"',computed:!1},{value:'"nightsStay"',computed:!1},{value:'"notificationsOff"',computed:!1},{value:'"openInBrowser"',computed:!1},{value:'"openInNew"',computed:!1},{value:'"place"',computed:!1},{value:'"search"',computed:!1},{value:'"severityLow"',computed:!1},{value:'"severityMedium"',computed:!1},{value:'"severityHigh"',computed:!1},{value:'"severityCritical"',computed:!1},{value:'"success"',computed:!1},{value:'"upload"',computed:!1},{value:'"warning"',computed:!1},{value:'"wbSunny"',computed:!1},{value:'"widgets"',computed:!1}]},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"Children of the menu item",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Add a className to the menu item",type:{name:"string"},required:!1},href:{description:"Pass an href to the menu item. Will result in the menu item being rendered as an `<a>`. Will take precedence over an onClick prop being passed to the component",type:{name:"string"},required:!1},onClick:{description:"Pass an onClick handler to the menu item. Will result in the menu item being rendered as a `<button>`.",type:{name:"func"},required:!1}}}},"./src/components/MenuItem/MenuItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsButton:()=>AsButton,AsLink:()=>AsLink,Default:()=>Default,Disabled:()=>Disabled,DisabledLink:()=>DisabledLink,SmallMenuItem:()=>SmallMenuItem,WithChildren:()=>WithChildren,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_MenuItem_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MenuItem/MenuItem.component.js"),_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Menu/Menu.component.js"),_Button_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/index.js"),_Icon_Icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Icon/Icon.component.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"WiP/Menu/MenuItem",component:_MenuItem_component__WEBPACK_IMPORTED_MODULE_1__.D,argTypes:{icon:{options:["default",..._Icon_Icon_component__WEBPACK_IMPORTED_MODULE_4__.knownIcons],control:{type:"select"}},children:{control:!1}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_2__.W,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuItem_component__WEBPACK_IMPORTED_MODULE_1__.D,args)),Default={render:Template,args:{label:"Menu Item"}},SmallMenuItem={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Menu_Menu_component__WEBPACK_IMPORTED_MODULE_2__.W,{variant:"small"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MenuItem_component__WEBPACK_IMPORTED_MODULE_1__.D,args)),args:{label:"Small menu item"}},WithIcon={render:Template,args:{label:"Menu Item with Icon",icon:"deleteForever"}},AsLink={render:Template,args:{label:"Menu Item as Link",href:"https://github.com/cloudoperators/juno"}},AsButton={render:Template,args:{label:"Menu Item as Button"}},WithChildren={render:Template,args:{children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_index__WEBPACK_IMPORTED_MODULE_3__.$,{label:"Delete",size:"small",variant:"subdued",icon:"deleteForever",className:"jn-w-full",key:"1"})]}},Disabled={render:Template,args:{disabled:!0,label:"Disabled Item"}},DisabledLink={render:Template,args:{disabled:!0,label:"Disabled Item as Link",href:"https://github.com/cloudoperators/juno"}},__namedExportsOrder=["Default","SmallMenuItem","WithIcon","AsLink","AsButton","WithChildren","Disabled","DisabledLink"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Menu Item"\n  }\n}',...Default.parameters?.docs?.source}}},SmallMenuItem.parameters={...SmallMenuItem.parameters,docs:{...SmallMenuItem.parameters?.docs,source:{originalSource:'{\n  render: SmallTemplate,\n  args: {\n    label: "Small menu item"\n  }\n}',...SmallMenuItem.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Menu Item with Icon",\n    icon: "deleteForever"\n  }\n}',...WithIcon.parameters?.docs?.source}}},AsLink.parameters={...AsLink.parameters,docs:{...AsLink.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Menu Item as Link",\n    href: "https://github.com/cloudoperators/juno"\n  }\n}',...AsLink.parameters?.docs?.source}}},AsButton.parameters={...AsButton.parameters,docs:{...AsButton.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    label: "Menu Item as Button"\n  }\n}',...AsButton.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: [<Button label="Delete" size="small" variant="subdued" icon="deleteForever" className="jn-w-full" key="1" />]\n  }\n}',...WithChildren.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    disabled: true,\n    label: "Disabled Item"\n  }\n}',...Disabled.parameters?.docs?.source}}},DisabledLink.parameters={...DisabledLink.parameters,docs:{...DisabledLink.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    disabled: true,\n    label: "Disabled Item as Link",\n    href: "https://github.com/cloudoperators/juno"\n  }\n}',...DisabledLink.parameters?.docs?.source}}}}}]);