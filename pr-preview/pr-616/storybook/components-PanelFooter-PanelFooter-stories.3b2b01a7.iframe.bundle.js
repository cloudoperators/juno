"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[1919],{"./src/components/ContentArea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ContentArea_component});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),withDeprecationWarning=__webpack_require__("./src/deprecated_js/withDeprecationWarning/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentArea=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area \n  jn-bg-theme-content-area-bg\n  jn-relative\n  jn-grow\n ${className}`},props),children)};ContentArea.propTypes={className:prop_types_default().string,children:prop_types_default().node};const ContentArea_component=(0,withDeprecationWarning.P)(ContentArea,"ContentArea is deprecated and will be removed in future versions. To be future-proof, use AppShell to scaffold an app layout.");ContentArea.__docgenInfo={description:"Deprecated: This component used to be used internally by AppShell but has been removed there since. It was only needed to manually scaffold an app. Use AppShell to scaffold an app layout..",methods:[],displayName:"ContentArea",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/ContentAreaWrapper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ContentAreaWrapper});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentAreaWrapper=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area-wrapper \n  jn-relative\n  jn-grow\n  jn-flex\n  jn-flex-col\n  jn-overflow-hidden\n ${className}`},props),children)};ContentAreaWrapper.propTypes={className:prop_types_default().string,children:prop_types_default().node},ContentAreaWrapper.__docgenInfo={description:"OBSOLETE: Will be deleted!",methods:[],displayName:"ContentAreaWrapper",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/Panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Panel});var react=__webpack_require__("../../node_modules/react/index.js"),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Icon_component=__webpack_require__("./src/deprecated_js/Icon/Icon.component.js"),PortalProvider_component=__webpack_require__("./src/deprecated_js/PortalProvider/PortalProvider.component.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const panelClasses=(isOpen,isTransitioning,size)=>`\n      jn-fixed\n      jn-right-0\n      jn-transition-transform\n      jn-ease-out\n      jn-duration-300\n      jn-inset-y-0\n      jn-z-[9989]\n      jn-grid\n      jn-grid-rows-[auto_1fr]\n      jn-bg-theme-panel\n      jn-backdrop-blur\n      jn-backdrop-saturate-150     \n      jn-shadow-md\n      ${"large"===size?"\n          jn-w-[90%]\n          xl:jn-w-[80%]\n          2xl:jn-w-[1228px]":"\n          jn-w-[75%]\n          xl:jn-w-[55%]\n          2xl:jn-w-[844px]"}\n\t\t\t${isOpen?"":"jn-translate-x-[100%]"}\n\t\t\t${isOpen||isTransitioning?"":"jn-invisible"}\n\t\t`.replace(/\n/g," ").replace(/\s+/g," "),Panel=_ref=>{let{heading="",size,className="",opened=!1,closeable=!0,onClose,children,...props}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(opened),[isCloseable,setIsCloseable]=(0,react.useState)(closeable),[isTransitioning,setIsTransitioning]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setIsOpen(opened)}),[opened]),(0,react.useEffect)((()=>{setIsCloseable(closeable)}),[closeable]);const timeoutRef=react.useRef(null);react.useEffect((()=>()=>clearTimeout(timeoutRef.current)),[]),(0,react.useEffect)((()=>{isOpen||(setIsTransitioning(!0),clearTimeout(timeoutRef.current),timeoutRef.current=setTimeout((()=>setIsTransitioning(!1)),500))}),[isOpen]);const portalContainer=(0,PortalProvider_component.TE)();return(0,react_dom.createPortal)(react.createElement("div",_extends({className:`juno-panel ${panelClasses(isOpen,isTransitioning,size)} ${className}`,role:"dialog","aria-labelledby":"juno-panel-title"},props),react.createElement("div",{className:"juno-panel-header \n  jn-flex\n  jn-items-center\n  jn-py-4\n  jn-px-8\n"},react.createElement("div",{className:"juno-panel-title \n  jn-text-theme-high\n  jn-text-lg\n  jn-font-bold\n",id:"juno-panel-title"},heading),isCloseable&&react.createElement(Icon_component.I,{icon:"close",onClick:event=>{setIsOpen(!1),onClose&&onClose(event)},className:"juno-panel-close jn-ml-auto"})),react.createElement("div",{className:"juno-panel-content-wrapper \n  jn-overflow-auto\n"},children)),portalContainer||document.body)};Panel.propTypes={heading:prop_types_default().node,size:prop_types_default().oneOf(["default","large"]),opened:prop_types_default().bool,closeable:prop_types_default().bool,onClose:prop_types_default().func,className:prop_types_default().string,children:prop_types_default().node}},"./src/components/PanelBody/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PanelBody});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const PanelBody=_ref=>{let{className="",footer,children,...props}=_ref;return react.createElement("div",_extends({className:`juno-panel-body \n  \n  ${className}`},props),react.createElement("div",{className:"juno-panel-body-content \n  jn-px-8\n  jn-py-4\n"},children),footer)};PanelBody.propTypes={className:prop_types_default().string,children:prop_types_default().any,footer:prop_types_default().element},PanelBody.__docgenInfo={description:"The panel body component. The main (form) content for the panel goes here.",methods:[],displayName:"PanelBody",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1},footer:{description:"optional footer component",type:{name:"element"},required:!1}}}},"./src/components/PanelFooter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>PanelFooter});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const PanelFooter=_ref=>{let{className="",children,...props}=_ref;return react.createElement("div",_extends({className:`juno-panel-footer \n  jn-border-t\n  jn-border-t-theme-background-lvl-2\n  jn-px-8\n  jn-py-4\n  jn-flex\n  jn-items-center\n  jn-justify-end\n  jn-gap-3\n  jn-w-full\n  ${className}`},props),children)};PanelFooter.propTypes={className:prop_types_default().string,children:prop_types_default().any},PanelFooter.__docgenInfo={description:"The panel footer component. You can drop buttons in here and they will automatically be aligned correctly to the right.",methods:[],displayName:"PanelFooter",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/deprecated_js/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),react.createElement(WrappedComponent,props))},"./src/components/PanelFooter/PanelFooter.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>Footer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PanelFooter/index.js"),_ContentAreaWrapper_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ContentAreaWrapper/index.js"),_ContentArea_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ContentArea/index.js"),_deprecated_js_Button_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/deprecated_js/Button/index.js"),_Panel_index_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Panel/index.js"),_PanelBody_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/PanelBody/index.js"),_deprecated_js_PortalProvider_PortalProvider_component_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/deprecated_js/PortalProvider/PortalProvider.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Panel/PanelFooter",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.W,argTypes:{},decorators:[story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_PortalProvider_PortalProvider_component_js__WEBPACK_IMPORTED_MODULE_7__.GD,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"jn-contrast-100"},story()))]},Footer={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentAreaWrapper_index_js__WEBPACK_IMPORTED_MODULE_2__.G,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Panel_index_js__WEBPACK_IMPORTED_MODULE_5__.Z,{heading:"My Panel",opened:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PanelBody_index_js__WEBPACK_IMPORTED_MODULE_6__.l,{footer:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.W,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Button_index_js__WEBPACK_IMPORTED_MODULE_4__.$,null,"Do it"))},"This is the panel body")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentArea_index_js__WEBPACK_IMPORTED_MODULE_3__.f,{className:"dummy-css-ignore jn-h-[250px]"},"Content Area")),parameters:{docs:{description:{story:"A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."}}},args:{}},__namedExportsOrder=["Footer"];Footer.parameters={...Footer.parameters,docs:{...Footer.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter."\n      }\n    }\n  },\n  args: {}\n}',...Footer.parameters?.docs?.source}}}}}]);