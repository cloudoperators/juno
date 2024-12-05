"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[831],{"./src/components/Container/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithVerticalPadding:()=>WithVerticalPadding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_index__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Container/index.ts")),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Container",component:_index__WEBPACK_IMPORTED_MODULE_2__.m,argTypes:{children:{control:!1}},parameters:{docs:{description:{component:"A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding."}}}};var Template=function(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.m,__assign({},args,{children:"Content goes here"}))},Basic={render:Template,parameters:{docs:{description:{story:"Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom."}}},args:{}},WithVerticalPadding={render:Template,parameters:{docs:{description:{story:"A content container with vertical padding added. This will add padding to both the top and the bottom of the container."}}},args:{py:!0}};const __namedExportsOrder=["Basic","WithVerticalPadding"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn\'t have padding to allow for full-width content or content to be placed at the very top or bottom."\n      }\n    }\n  },\n  args: {}\n}',...Basic.parameters?.docs?.source}}},WithVerticalPadding.parameters={...WithVerticalPadding.parameters,docs:{...WithVerticalPadding.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "A content container with vertical padding added. This will add padding to both the top and the bottom of the container."\n      }\n    }\n  },\n  args: {\n    py: true\n  }\n}',...WithVerticalPadding.parameters?.docs?.source}}}}}]);