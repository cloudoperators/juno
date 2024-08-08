"use strict";(self.webpackChunk_cloudoperators_juno_ui_components=self.webpackChunk_cloudoperators_juno_ui_components||[]).push([[3239],{"./src/components/FormHint/FormHint.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ErrorVariant:()=>ErrorVariant,SuccessVariant:()=>SuccessVariant,WithChildren:()=>WithChildren,WithTextAsChildren:()=>WithTextAsChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormHint/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/FormHint",component:_index_js__WEBPACK_IMPORTED_MODULE_1__.m,argTypes:{children:{control:!1}}},Template=_ref=>{let{children,...args}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index_js__WEBPACK_IMPORTED_MODULE_1__.m,{...args,children})};Template.displayName="Template",Template.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node};const Default={render:Template,args:{text:"A simple hint to be associated with a form input"}},WithChildren={render:Template,args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["A FormHint with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"Link"}),"."]})}},WithTextAsChildren={render:Template,args:{text:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["A FormHint with a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"Link"}),"."]})}},ErrorVariant={render:Template,args:{variant:"error",text:"A FormHint containing an error or invalidation message"}},SuccessVariant={render:Template,args:{variant:"success",text:"A FormHint containg a success or validation message"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    text: "A simple hint to be associated with a form input"\n  }\n}',...Default.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: <>\n        A FormHint with a <a href="#">Link</a>.\n      </>\n  }\n}',...WithChildren.parameters?.docs?.source}}},WithTextAsChildren.parameters={...WithTextAsChildren.parameters,docs:{...WithTextAsChildren.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    text: <>\n        A FormHint with a <a href="#">Link</a>.\n      </>\n  }\n}',...WithTextAsChildren.parameters?.docs?.source}}},ErrorVariant.parameters={...ErrorVariant.parameters,docs:{...ErrorVariant.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "error",\n    text: "A FormHint containing an error or invalidation message"\n  }\n}',...ErrorVariant.parameters?.docs?.source}}},SuccessVariant.parameters={...SuccessVariant.parameters,docs:{...SuccessVariant.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    variant: "success",\n    text: "A FormHint containg a success or validation message"\n  }\n}',...SuccessVariant.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithChildren","WithTextAsChildren","ErrorVariant","SuccessVariant"]},"./src/components/FormHint/FormHint.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>FormHint});__webpack_require__("../../node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const variantStyles=variant=>{switch(variant){case"success":return"jn-text-theme-success";case"error":return"jn-text-theme-error";default:return"jn-text-theme-light"}},FormHint=_ref=>{let{children=null,text="",variant="help",className,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`\n        juno-form-hint\n        juno-form-hint-${variant}\n        \n  jn-text-xs\n  jn-mt-1\n\n        ${variantStyles(variant)}\n        ${className}\n      `,...props,children:children||text})};FormHint.displayName="FormHint",FormHint.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,variant:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["help","error","success"]),className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},FormHint.__docgenInfo={description:"",methods:[],displayName:"FormHint",props:{children:{defaultValue:{value:"null",computed:!1},description:"The children to render as a hint associated with a form element",type:{name:"node"},required:!1},text:{defaultValue:{value:'""',computed:!1},description:"The text to render. If both children and text are passed, children will rendered",type:{name:"node"},required:!1},variant:{defaultValue:{value:'"help"',computed:!1},description:"The variant of the the hint. Defaults to 'help'.",type:{name:"enum",value:[{value:'"help"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1},className:{description:"Pass a custom className",type:{name:"string"},required:!1}}}},"./src/components/FormHint/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>_FormHint_component__WEBPACK_IMPORTED_MODULE_0__.m});var _FormHint_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/FormHint/FormHint.component.js")}}]);