"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[6479],{"./src/components/PanelFooter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>PanelFooter});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const PanelFooter=_ref=>{let{className="",children,...props}=_ref;return react.createElement("div",_extends({className:`juno-panel-footer \n  jn-border-t\n  jn-border-t-theme-background-lvl-2\n  jn-px-8\n  jn-py-4\n  jn-flex\n  jn-items-center\n  jn-justify-end\n  jn-gap-3\n  jn-w-full\n  ${className}`},props),children)};PanelFooter.propTypes={className:prop_types_default().string,children:prop_types_default().any},PanelFooter.__docgenInfo={description:"The panel footer component. You can drop buttons in here and they will automatically be aligned correctly to the right.",methods:[],displayName:"PanelFooter",props:{className:{defaultValue:{value:'""',computed:!1},description:"Add custom class name",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1}}}},"./src/deprecated_js/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button_component__WEBPACK_IMPORTED_MODULE_0__.$});var _Button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/deprecated_js/Button/Button.component.js")},"./src/components/PanelBody/PanelBody.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Body:()=>Body,BodyWithFooter:()=>BodyWithFooter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PanelBody/index.js"),_ContentAreaWrapper_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ContentAreaWrapper/index.js"),_ContentArea_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ContentArea/index.js"),_Panel_index_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Panel/index.js"),_PanelFooter_index_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/PanelFooter/index.js"),_deprecated_js_Button_index_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/deprecated_js/Button/index.js"),_deprecated_js_PortalProvider_PortalProvider_component_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/deprecated_js/PortalProvider/PortalProvider.component.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Panel/PanelBody",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.l,argTypes:{},decorators:[story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_PortalProvider_PortalProvider_component_js__WEBPACK_IMPORTED_MODULE_7__.GD,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"jn-contrast-100"},story()))]},FooterExample=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PanelFooter_index_js__WEBPACK_IMPORTED_MODULE_5__.W,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deprecated_js_Button_index_js__WEBPACK_IMPORTED_MODULE_6__.$,{label:"Click me"})),Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentAreaWrapper_index_js__WEBPACK_IMPORTED_MODULE_2__.G,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Panel_index_js__WEBPACK_IMPORTED_MODULE_4__.Z,{heading:"My Panel",opened:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__.l,args,"This is the panel body")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentArea_index_js__WEBPACK_IMPORTED_MODULE_3__.f,{className:"dummy-css-ignore jn-h-[250px]"},"Content Area")),Body={render:Template,parameters:{docs:{description:{story:"A container for panel content."}}},args:{}},BodyWithFooter={render:Template,parameters:{docs:{description:{story:"A container for panel content with footer."}}},args:{footer:FooterExample}},__namedExportsOrder=["Body","BodyWithFooter"];Body.parameters={...Body.parameters,docs:{...Body.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "A container for panel content."\n      }\n    }\n  },\n  args: {}\n}',...Body.parameters?.docs?.source}}},BodyWithFooter.parameters={...BodyWithFooter.parameters,docs:{...BodyWithFooter.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "A container for panel content with footer."\n      }\n    }\n  },\n  args: {\n    footer: FooterExample\n  }\n}',...BodyWithFooter.parameters?.docs?.source}}}}}]);