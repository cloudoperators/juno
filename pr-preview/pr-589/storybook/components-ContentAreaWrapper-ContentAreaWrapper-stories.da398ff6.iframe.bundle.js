"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[2855],{"./src/components/ContentArea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>ContentArea_component});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),withDeprecationWarning=__webpack_require__("./src/deprecated_js/withDeprecationWarning/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentArea=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area \n  jn-bg-theme-content-area-bg\n  jn-relative\n  jn-grow\n ${className}`},props),children)};ContentArea.propTypes={className:prop_types_default().string,children:prop_types_default().node};const ContentArea_component=(0,withDeprecationWarning.P)(ContentArea,"ContentArea is deprecated and will be removed in future versions. To be future-proof, use AppShell to scaffold an app layout.");ContentArea.__docgenInfo={description:"Deprecated: This component used to be used internally by AppShell but has been removed there since. It was only needed to manually scaffold an app. Use AppShell to scaffold an app layout..",methods:[],displayName:"ContentArea",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/ContentAreaToolbar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ContentAreaToolbar});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentAreaToolbar=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area-toolbar \n  jn-bg-theme-background-lvl-1\n  jn-py-3\n  jn-px-6\n  jn-flex\n  jn-items-center\n  jn-justify-end\n ${className}`},props),children)};ContentAreaToolbar.propTypes={className:prop_types_default().string,children:prop_types_default().node},ContentAreaToolbar.__docgenInfo={description:"This is the main toolbar of the content area. Add main actions for the current page here.",methods:[],displayName:"ContentAreaToolbar",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/components/ContentAreaWrapper/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ContentAreaWrapper});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ContentAreaWrapper=_ref=>{let{className="",children=null,...props}=_ref;return react.createElement("div",_extends({className:`juno-content-area-wrapper \n  jn-relative\n  jn-grow\n  jn-flex\n  jn-flex-col\n  jn-overflow-hidden\n ${className}`},props),children)};ContentAreaWrapper.propTypes={className:prop_types_default().string,children:prop_types_default().node},ContentAreaWrapper.__docgenInfo={description:"OBSOLETE: Will be deleted!",methods:[],displayName:"ContentAreaWrapper",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}}},"./src/deprecated_js/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Button/Button.component.js")},"./src/deprecated_js/withDeprecationWarning/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>withDeprecationWarning});var react=__webpack_require__("../../node_modules/react/index.js");const withDeprecationWarning=(WrappedComponent,message)=>props=>((0,react.useEffect)((()=>{console.warn(message)}),[]),react.createElement(WrappedComponent,props))},"./src/components/ContentAreaWrapper/ContentAreaWrapper.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ContentAreaWrapper/index.js"),_ContentArea_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ContentArea/index.js"),_ContentAreaToolbar_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ContentAreaToolbar/index.js"),_deprecated_js_Button_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/deprecated_js/Button/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Internal/ContentAreaWrapper",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.G,argTypes:{children:{control:!1}}},Basic={render:args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.G,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentAreaToolbar_index_js__WEBPACK_IMPORTED_MODULE_3__.m,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Button_index_js__WEBPACK_IMPORTED_MODULE_4__.$,null,"Example")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentArea_index_js__WEBPACK_IMPORTED_MODULE_2__.f,null,"Content goes here")),parameters:{docs:{description:{story:"OBSOLETE: Will be deleted!"}}},args:{}},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "OBSOLETE: Will be deleted!"\n      }\n    }\n  },\n  args: {}\n}',...Basic.parameters?.docs?.source}}}}}]);